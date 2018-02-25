//
//  TablerowController.swift
//  test
//
//  Created by PPPPP_Leung on 2017/6/6.
//  Copyright © 2017年 pleung. All rights reserved.
//

import WatchKit
import Foundation

class TablerowController: WKInterfaceController {
    
    @IBOutlet weak var table: WKInterfaceTable!
//    @IBOutlet weak var pic: WKInterfaceImage!
  
    
    override func awake(withContext context: Any?) {
        super.awake(withContext: context)
      let url = NSURL.init(string: "http://wemore.risplan.xyz/index.php?m=Home&c=Index&a=we_news");
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
            
            
            self.table.setNumberOfRows((dic?.count)!, withRowType: "RowController")
            var i = 0
            for js in dic!{
              let ll = js as? Dictionary<String, String>
              let content = String((ll?["content"])!)
              let row:RowController = self.table.rowController(at: i) as! RowController
              
              row.nameLabel.setText(content)
              i = i + 1
            }
            
          } catch let error{
            print(error.localizedDescription);
          }
        }
        } as URLSessionDataTask
      
      //5、启动任务
      dataTask.resume()


//        let dic:Array<String> = ["老司机","鹏少","吴永燃","7峰","肥鸡冬"]
//        
//        table.setNumberOfRows(dic.count, withRowType: "RowController")
//        //遍历进行设置
//        
//        for i in 0 ..< dic.count {
//            
//            let row:RowController = table.rowController(at: i) as! RowController
//            
//            row.nameLabel.setText("123")
//        }
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
