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
		this.getParam();
    // this.func();
       // document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

   

    // Update DOM on a Received Event
    receivedEvent: function() {
       
      

		//Initializing Phaser...
    var game = new Phaser.Game(960,540,Phaser.CANVAS,'');

     
        game.state.add('boot',Game.boot);
        game.state.add('GMAN_01_G6level1',Game.GMAN_01_G6level1);
        game.state.add('score',Game.Score);
        game.state.add('Backbutton',Game.Backbutton);        
      
		    game.state.start('boot');

    },

    getParam:function(src)
    {
      //var id = document.getElementById("span_Id").innerText;//document.getElementsByClassName("num");
      // var div = document.getElementById("demo");
      // var spans = div.getElementsByTagName("span");
      //console.log(id);
      //console.log(src);	
      //console.log(globalVariable.x);

      
    },

    // func:function(src)
    // {
    //     var nm = src;
    //     console.log(src);
    //     console.log("inside function");

    // }
    
};


app.initialize();