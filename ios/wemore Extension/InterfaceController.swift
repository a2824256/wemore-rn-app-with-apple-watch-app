//
//  InterfaceController.swift
//  wemore Extension
//
//  Created by PPPPP_Leung on 2017/6/28.
//  Copyright © 2017年 Facebook. All rights reserved.
//

import WatchKit
import Foundation


class InterfaceController: WKInterfaceController,CLLocationManagerDelegate {


 
    override func awake(withContext context: Any?) {
        super.awake(withContext: context)
      
//      reqData()
        // Configure interface objects here.
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
