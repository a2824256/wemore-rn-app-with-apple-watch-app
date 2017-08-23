/*
 Copyright (C) 2016 Apple Inc. All Rights Reserved.
 See LICENSE.txt for this sample’s licensing information
 
 */

import WatchKit
import Foundation

/**
 The `RequestLocationInterfaceController` is responsible for communicating between
 the "Request" interface and the `LocationModel`. This interface controller exemplifies
 how to call the `CLLocationManager` directly from a WatchKit Extension using
 the `requestLocation(_:)` method.
 
 In order to guarantee that the information displayed in the interface is fresh,
 this class uses a 2 second timeout after every location update to reset the
 interface. This is done in order to make the example more clear and to avoid stale
 data polluting the interface.
 */
class RequestLocationInterfaceController: WKInterfaceController, CLLocationManagerDelegate {
  
  // MARK: Properties
  
  /**
   When this timer times out, the labels in the interface reset to a default state that does not resemble
   a requestLocation result.
   */
  var interfaceResetTimer = Timer()
  
  /// Location manager to request authorization and location updates.
  let manager = CLLocationManager()
  
  /// Flag indicating whether the manager is requesting the user's location.
  var isRequestingLocation = false
  
  /// Button to request location. Also allows cancelling the location request.
  @IBOutlet var requestLocationButton: WKInterfaceButton!
  
  /// Timer to count down 5 seconds as a visual cue that the interface will reset.
  @IBOutlet var displayTimer: WKInterfaceTimer!
  
  /// Label to display the most recent location's latitude.
  @IBOutlet var latitudeLabel: WKInterfaceLabel!
  
  /// Label to display the most recent location's longitude.
  @IBOutlet var longitudeLabel: WKInterfaceLabel!
  
  /// Label to display an error if the location manager finishes with an error.
  @IBOutlet var errorLabel: WKInterfaceLabel!
  
  @IBOutlet var mapObject: WKInterfaceMap!
  
  // MARK: Localized String Convenience
  
  var interfaceTitle: String {
    return NSLocalizedString("Request", comment: "Indicates that this interface exemplifies requesting location from the watch")
  }
  
  var requestLocationTitle: String {
    return NSLocalizedString("获取附近的据点", comment: "Button title to indicate that pressing the button will cause the location manager to request location")
  }
  
  var cancelTitle: String {
    return NSLocalizedString("取消", comment: "Cancel the current action")
  }
  
  var deniedText: String {
    return NSLocalizedString("Location authorization denied.", comment: "Text to indicate authorization status is .Denied")
  }
  
  var unexpectedText: String {
    return NSLocalizedString("Unexpected authorization status.", comment: "Text to indicate authorization status is an unexpected value")
  }
  
  var latitudeResetText: String {
    return NSLocalizedString("<当前维度>", comment: "String indicating that no latitude is shown to the user due to a timer reset")
  }
  
  var longitudeResetText: String {
    return NSLocalizedString("<当前经度>", comment: "String indicating that no longitude is shown to the user due to a timer reset")
  }
  
  var errorResetText: String {
    return NSLocalizedString("<错误信息>", comment: "String indicating that no error is shown to the user")
  }
  
  // MARK: Interface Controller
  
  override func awake(withContext context: Any?) {
    super.awake(withContext: context)
    
    self.setTitle(interfaceTitle)
    
    // Remember to set the location manager's delegate.
    manager.delegate = self
    
    resetInterface()
  }
  
  // MARK: Button Actions
  
  /**
   When the user taps the Request Location button in the interface, this method
   informs the `LocationModel`'s shared instance to request a location.
   
   If the user is already requesting location, this method will instead cancel
   the request.
   */
  @IBAction func requestLocation() {
    guard !isRequestingLocation else {
      manager.stopUpdatingLocation()
      isRequestingLocation = false
      requestLocationButton.setTitle(requestLocationTitle)
      
      return
    }
    
    let authorizationStatus = CLLocationManager.authorizationStatus()
    
    switch authorizationStatus {
    case .notDetermined:
      isRequestingLocation = true
      requestLocationButton.setTitle(cancelTitle)
      manager.requestWhenInUseAuthorization()
      
    case .authorizedWhenInUse:
      isRequestingLocation = true
      requestLocationButton.setTitle(cancelTitle)
      manager.requestLocation()
      
    case .denied:
      errorLabel.setText(deniedText)
      restartTimers()
      
    default:
      errorLabel.setText(unexpectedText)
      restartTimers()
    }
  }
  
  // MARK: CLLocationManagerDelegate Methods
  
  /**
   When the location manager receives new locations, display the latitude and
   longitude of the latest location and restart the timers.
   */
  func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
    guard !locations.isEmpty else { return }
    
    DispatchQueue.main.async {
      let lastLocationCoordinate = locations.last!.coordinate
      
      self.latitudeLabel.setText(String(lastLocationCoordinate.latitude))
      
      self.longitudeLabel.setText(String(lastLocationCoordinate.longitude))
      
      let dz = "http://148.coolmoresever.com/index.php?m=Home&c=Index&a=we_points&longitude=" + String(lastLocationCoordinate.longitude) + "&latitude=" + String(lastLocationCoordinate.latitude)
      
      let url = NSURL.init(string: dz);
      
      let urlRequest:URLRequest = URLRequest(url:url as! URL);
      let session = URLSession.shared
      let dataTask = session.dataTask(with: urlRequest) { (data:Data?, response:URLResponse?, error:Error?) in
        
        if(error != nil){
          print(error?.localizedDescription);
        }else{
          //let jsonStr = String(data: data!, encoding:String.Encoding.utf8);
          //print(jsonStr)
          do {
            let dic = try? JSONSerialization.jsonObject(with: data!, options: .allowFragments ) as! NSArray

            for js in dic!{
              let ll = js as? Dictionary<String, String>
              let lng = Double((ll?["longitude"])!)
              let lat = Double((ll?["latitude"])!)
              let t = Int((ll?["type"])!)
              let pinPosition = CLLocationCoordinate2D(latitude: lat!, longitude: lng!)
              if(t == 1){
                self.mapObject.addAnnotation(pinPosition, with: UIImage(named:"r"), centerOffset: CGPoint(x: 0, y: 0))
              }else{
                self.mapObject.addAnnotation(pinPosition, with: UIImage(named:"g"), centerOffset: CGPoint(x: 0, y: 0))
              }
            }
            
            
            let centerOfMap   = CLLocationCoordinate2D(latitude: lastLocationCoordinate.latitude, longitude: lastLocationCoordinate.longitude)
            
            let coordinateSpan = MKCoordinateSpanMake(0.02, 0.02)
            
            //        self.mapObject.addAnnotation(pinPosition_1, with: .red)
            //        self.mapObject.addAnnotation(pinPosition_2, with: .red)
            //        self.mapObject.addAnnotation(pinPosition_3, with: .red)
            //        self.mapObject.addAnnotation(pinPosition_4, with: .red)
            self.mapObject.setRegion(MKCoordinateRegion(center: centerOfMap, span: coordinateSpan))
          } catch let error{
            print(error.localizedDescription);
          }
        }
        } as URLSessionDataTask
      
      //5、启动任务
      dataTask.resume()
      
      self.isRequestingLocation = false
      
      self.requestLocationButton.setTitle(self.requestLocationTitle)
      
      self.restartTimers()
    }
  }
  
  /**
   When the location manager receives an error, display the error and restart the timers.
   */
  func locationManager(_ manager: CLLocationManager, didFailWithError error: Error) {
    DispatchQueue.main.async {
      self.errorLabel.setText(String(error.localizedDescription))
      
      self.isRequestingLocation = false
      
      self.requestLocationButton.setTitle(self.requestLocationTitle)
      
      self.restartTimers()
    }
  }
  
  /**
   Only request location if the authorization status changed to an authorization
   level that permits requesting location.
   */
  func locationManager(_ manager: CLLocationManager, didChangeAuthorization status: CLAuthorizationStatus) {
    DispatchQueue.main.async {
      guard self.isRequestingLocation else { return }
      
      switch status {
      case .authorizedWhenInUse:
        manager.requestLocation()
        
      case .denied:
        self.errorLabel.setText(self.deniedText)
        self.isRequestingLocation = false
        self.requestLocationButton.setTitle(self.requestLocationTitle)
        self.restartTimers()
        
      default:
        self.errorLabel.setText(self.unexpectedText)
        self.isRequestingLocation = false
        self.requestLocationButton.setTitle(self.requestLocationTitle)
        self.restartTimers()
      }
    }
  }
  
  // MARK: Resetting
  
  /**
   Resets the text labels in the interface to empty labels.
   
   This method is useful for cleaning the interface to ensure that data displayed
   to the user is not stale.
   */
  func resetInterface() {
    DispatchQueue.main.async {
      self.stopDisplayTimer()
      
      self.latitudeLabel.setText(self.latitudeResetText)
      
      self.longitudeLabel.setText(self.longitudeResetText)
      
      self.errorLabel.setText(self.errorResetText)
    }
  }
  
  /**
   Restarts the Timer and the WKInterface timer by stopping / invalidating
   them, then starting them with a 5 second timeout.
   */
  func restartTimers() {
    stopDisplayTimer()
    
    interfaceResetTimer.invalidate()
    
    interfaceResetTimer = Timer.scheduledTimer(timeInterval: 5, target: self, selector: #selector(RequestLocationInterfaceController.resetInterface), userInfo: [:], repeats: false)
    
    let fiveSecondDelay = NSDate(timeIntervalSinceNow: 5)
    
    displayTimer.setDate(fiveSecondDelay as Date)
    
    displayTimer.start()
  }
  
  /**
   Stops the display timer.
   */
  func stopDisplayTimer() {
    let now = NSDate()
    displayTimer.setDate(now as Date)
    
    displayTimer.stop()
  }
}
