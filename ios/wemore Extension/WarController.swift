//
//  TablerowController.swift
//  test
//
//  Created by PPPPP_Leung on 2017/6/6.
//  Copyright © 2017年 pleung. All rights reserved.
//

import WatchKit
import Foundation
import CoreLocation

class WarController: WKInterfaceController {
    
    @IBOutlet var aTotalLab: WKInterfaceLabel!
    @IBOutlet var bTotalLab: WKInterfaceLabel!
    @IBOutlet var aNowLab: WKInterfaceLabel!
    @IBOutlet var bNowLab: WKInterfaceLabel!
    @IBOutlet var aEndLab: WKInterfaceLabel!
    @IBOutlet var bEndLab: WKInterfaceLabel!
    
    override func awake(withContext context: Any?) {
        super.awake(withContext: context)
      let url = NSURL.init(string: "http://wemore.risplan.xyz/index.php?m=Home&c=Index&a=we_war");
      let urlRequest:URLRequest = URLRequest(url:url as! URL);
      let session = URLSession.shared
      let dataTask = session.dataTask(with: urlRequest) { (data:Data?, response:URLResponse?, error:Error?) in
        
        if(error != nil){
          print(error?.localizedDescription);
        }else{
          //let jsonStr = String(data: data!, encoding:String.Encoding.utf8);
          //print(jsonStr)
          do {
            let dic = try? JSONSerialization.jsonObject(with: data!, options: .allowFragments ) as! Dictionary<String, String>
            
//            print(dic ?? 213)
            
            let aTotal = dic?["aTotal"]
            let bTotal = dic?["bTotal"]
            let aNow = dic?["aNow"]
            let bNow = dic?["bNow"]
            let aEnd = dic?["aEnd"]
            let bEnd = dic?["bEnd"]
            
//            print(aTotal)
//            print(bTotal)
//            print(aNow)
//            print(bNow)
//            print(aEnd)
//            print(bENd)
            
            self.aTotalLab.setText(aTotal)
            self.bTotalLab.setText(bTotal)
            self.aNowLab.setText(aNow)
            self.bNowLab.setText(bNow)
            self.aEndLab.setText(aEnd)
            self.bEndLab.setText(bEnd)
//            self.table.setNumberOfRows((dic?.count)!, withRowType: "RowController")
//            var i = 0
//            for js in dic!{
//              let ll = js as? Dictionary<String, String>
//              let content = String((ll?["content"])!)
//            }
            
          } catch let error{
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
