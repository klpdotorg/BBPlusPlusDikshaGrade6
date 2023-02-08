/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var _this;
var app = {
    // Application Constructor
    initialize: function() {

		
		this.receivedEvent();
		
       // document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

   

    // Update DOM on a Received Event
    receivedEvent: function(id) {
       
		
		//Initializing Phaser...
//        var game = new Phaser.Game(960,540,Phaser.CANVAS,'phaser_canvas');
        
        var game = new Phaser.Game(960,540,Phaser.CANVAS,'phaser_canvas',{},false,true,null);
        
//        var game = new Phaser.Game(540,960,Phaser.CANVAS,'phaser_canvas',{preload:this.preload, create:this.create},false,true,null);

     
        console.log("inside index js");
        game.state.add('boot',Game.boot);
        game.state.add('preloader',Game.preloader);
        game.state.add('score',Game.Score);
        game.state.add('Backbutton',Game.Backbutton);
           
        game.state.add('preloader_int_1',Game.preloader_int_1);
        game.state.add('preloader_int_3',Game.preloader_int_3);
        game.state.add('preloader_int_5',Game.preloader_int_5);
        game.state.add('preloader_int_6',Game.preloader_int_6);
        game.state.add('preloader_int_7',Game.preloader_int_7);
        game.state.add('preloader_int_8',Game.preloader_int_8);
        game.state.add('preloader_int_9',Game.preloader_int_9);
        game.state.add('preloader_int_10',Game.preloader_int_10);
        game.state.add('preloader_int_11',Game.preloader_int_11);
        game.state.add('preloader_int_12',Game.preloader_int_12);
        
        game.state.add('preloader_oe_1a',Game.preloader_oe_1a);
        game.state.add('preloader_fm_1',Game.preloader_fm_1);
        game.state.add('preloader_fm_2',Game.preloader_fm_2);
        game.state.add('preloader_fm_3',Game.preloader_fm_3);
        game.state.add('preloader_fm_4a',Game.preloader_fm_4a);
        game.state.add('preloader_hcf_1',Game.preloader_hcf_1);
        game.state.add('preloader_lcm_1',Game.preloader_lcm_1);
        game.state.add('preloader_prm_1',Game.preloader_prm_1);
        game.state.add('preloader_nsf_2',Game.preloader_nsf_2);
        game.state.add('preloader_nsf_5',Game.preloader_nsf_5);
        
        game.state.add('NS_INT_G6Menu',Game.NS_INT_G6Menu);
        
        game.state.add('NS_INT_1_G6level1',Game.NS_INT_1_G6level1);
        game.state.add('NS_INT_1_G6Score',Game.NS_INT_1_G6Score);

        game.state.add('NS_INT_2_G6level1',Game.NS_INT_2_G6level1);
        game.state.add('NS_INT_2_G6Score',Game.NS_INT_2_G6Score);
        
        game.state.add('NS_INT_3_G6level1',Game.NS_INT_3_G6level1);
        game.state.add('NS_INT_3_G6Score',Game.NS_INT_3_G6Score);
        
        game.state.add('NS_INT_4_G6level1',Game.NS_INT_4_G6level1);
        game.state.add('NS_INT_4_G6Score',Game.NS_INT_4_G6Score);
        
        game.state.add('NS_INT_5_G6level1',Game.NS_INT_5_G6level1);
        game.state.add('NS_INT_5_G6Score',Game.NS_INT_5_G6Score);
        
        game.state.add('NS_INT_6_G6level1',Game.NS_INT_6_G6level1);
        game.state.add('NS_INT_6_G6Score',Game.NS_INT_6_G6Score);

        game.state.add('NS_INT_7_G6level1',Game.NS_INT_7_G6level1);
        game.state.add('NS_INT_7_G6Score',Game.NS_INT_7_G6Score);
        
        game.state.add('NS_INT_8_G6level1',Game.NS_INT_8_G6level1);
        game.state.add('NS_INT_8_G6Score',Game.NS_INT_8_G6Score);
        
        game.state.add('NS_INT_9_G6level1',Game.NS_INT_9_G6level1);
        game.state.add('NS_INT_9_G6Score',Game.NS_INT_9_G6Score);
        
        game.state.add('NS_INT_10_G6level1',Game.NS_INT_10_G6level1);
        game.state.add('NS_INT_10_G6Score',Game.NS_INT_10_G6Score);
        
        game.state.add('NS_INT_11_G6level1',Game.NS_INT_11_G6level1);
        game.state.add('NS_INT_11_G6Score',Game.NS_INT_11_G6Score);
        
        game.state.add('NS_INT_12_G6level1',Game.NS_INT_12_G6level1);
        game.state.add('NS_INT_12_G6Score',Game.NS_INT_12_G6Score);
        
        game.state.add('NS_OE_1A_G6level1',Game.NS_OE_1A_G6level1);
        game.state.add('NS_OE_1A_G6Score',Game.NS_OE_1A_G6Score);

        game.state.add('NS_OE_1B_G6level1',Game.NS_OE_1B_G6level1);
        game.state.add('NS_OE_1B_G6Score',Game.NS_OE_1B_G6Score);
        
        game.state.add('NS_FM_1_G6level1',Game.NS_FM_1_G6level1);
        game.state.add('NS_FM_1_G6Score',Game.NS_FM_1_G6Score);
        
        game.state.add('NS_FM_2_G6level1',Game.NS_FM_2_G6level1);
        game.state.add('NS_FM_2_G6Score',Game.NS_FM_2_G6Score);

        game.state.add('NS_HCF_1_G6level1',Game.NS_HCF_1_G6level1);
        game.state.add('NS_HCF_1_G6Score',Game.NS_HCF_1_G6Score);

        game.state.add('NS_FM_3_G6level1',Game.NS_FM_3_G6level1);
        game.state.add('NS_FM_3_G6Score',Game.NS_FM_3_G6Score);
        
        game.state.add('NS_FM_4A_G6level1',Game.NS_FM_4A_G6level1);
        game.state.add('NS_FM_4A_G6Score',Game.NS_FM_4A_G6Score);

        game.state.add('NS_FM_4B_G6level1',Game.NS_FM_4B_G6level1);
        game.state.add('NS_FM_4B_G6Score',Game.NS_FM_4B_G6Score);
        
        game.state.add('NS_LCM_1_G6level1',Game.NS_LCM_1_G6level1);
        game.state.add('NS_LCM_1_G6Score',Game.NS_LCM_1_G6Score);
        
        game.state.add('NS_PRM_1_G6level1',Game.NS_PRM_1_G6level1);
        game.state.add('NS_PRM_1_G6Score',Game.NS_PRM_1_G6Score);

        game.state.add('NSF_2_G6level1',Game.NSF_2_G6level1);
        game.state.add('NSF_2_G6Score',Game.NSF_2_G6Score);
        
        game.state.add('NSF_5_G6level1',Game.NSF_5_G6level1);
        game.state.add('NSF_5_G6Score',Game.NSF_5_G6Score);
        
        game.state.add('NS_INT_1_G6demo',Game.NS_INT_1_G6demo);
        game.state.add('NS_INT_2_G6demo',Game.NS_INT_2_G6demo);
        game.state.add('NS_INT_3_G6demo',Game.NS_INT_3_G6demo);
        game.state.add('NS_INT_4_G6demo',Game.NS_INT_4_G6demo);
        game.state.add('NS_INT_7_G6demo',Game.NS_INT_7_G6demo);
        game.state.add('NS_FM_1_G6demo',Game.NS_FM_1_G6demo);
        game.state.add('NS_FM_3_G6demo',Game.NS_FM_3_G6demo);
        game.state.add('NS_FM_4_G6demo',Game.NS_FM_4_G6demo);
        game.state.add('NS_HCF_1_G6demo',Game.NS_HCF_1_G6demo);
        game.state.add('NS_LCM_1_G6demo',Game.NS_LCM_1_G6demo);
        game.state.add('NS_OE_1_G6demo',Game.NS_OE_1_G6demo);
        game.state.add('NS_PRM_1_G6demo',Game.NS_PRM_1_G6demo);
        
		game.state.start('boot');

    }
};

app.initialize();