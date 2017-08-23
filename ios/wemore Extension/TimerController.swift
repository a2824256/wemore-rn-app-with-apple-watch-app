//
//  TablerowController.swift
//  test
//
//  Created by PPPPP_Leung on 2017/6/6.
//  Copyright © 2017年 pleung. All rights reserved.
//

import WatchKit
import Foundation

class TimerController: WKInterfaceController {
  
  @IBOutlet weak var timer: WKInterfaceTimer!
  
  override func awake(withContext context: Any?) {
    super.awake(withContext: context)
    let url = NSURL.init(string: "http://148.coolmoresever.com/index.php?m=Home&c=Index&a=we_time");
    let urlRequest:URLRequest = URLRequest(url:url as! URL);
    let session = URLSession.shared
    let dataTask = session.dataTask(with: urlRequest) { (data:Data?, response:URLResponse?, error:Error?) in
      
      if(error != nil){
        print("error")
        print(error?.localizedDescription);
      }else{
        //let jsonStr = String(data: data!, encoding:String.Encoding.utf8);
        //print(jsonStr)
        do {
          let dic = try? JSONSerialization.jsonObject(with: data!, options: .allowFragments ) as!  Dictionary<String, Int>
          
          let year = Int((dic?["year"])!)
          let day = Int((dic?["day"])!)
          let month = Int((dic?["month"])!)
//
          var components = DateComponents()
          components.year = year
          components.day = day
          components.month = month
          let cal = Calendar.current
          let time = cal.date(from: components)
          print(time)
          self.timer.setDate(time!)
          self.timer.start()
          
        } catch let error{
          print("error2")
          print(error.localizedDescription);
        }
      }
      } as URLSessionDataTask
    
    //5、启动任务
    dataTask.resume()
  }
  
    
  override func willActivate() {
    // This method is called when watch view controller is about to be visible to user
    super.willActivate()
  }
  
  override func didDeactivate() {
    // This method is called when watch view controller is no longer visible
    super.didDeactivate()
  }
}
