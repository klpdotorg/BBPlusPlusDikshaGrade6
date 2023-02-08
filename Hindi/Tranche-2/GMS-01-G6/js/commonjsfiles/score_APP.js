Game.Score=function(game){

};

Game.Score.prototype={
	preload:function(game)
	{
		//this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,score_JSON.backbtnJson);
		this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null,score_JSON.homebtnJson);
        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null,score_JSON.nextbtnJson);
		this.load.atlas('CommonReplayBtn','assets/commonAssets/reply.png' ,null,score_JSON.replyJson);
		this.load.image('CommonBackground','assets/commonAssets/bg.png');
	},

	create:function(game){
		_this = this;
		console.log("here");
		
		_this.states = ["1","2","3","4","5","6","7","8","9","10",
					  "11","12","13","14","15","16","17","18","19","20",
					  "21","22","23", "1"];
		var currentgame = sessionStorage.getItem("param2");
		console.log(currentgame);
		
		_this.background = _this.add.tileSprite(0,-80,_this.world.width,_this.world.height,'CommonBackground');
		_this.background.scale.setTo(1,1.5);
		
		
		_this.homeBtn = _this.add.sprite(_this.world.centerX-170,_this.world.centerY,'CommonHomeBtn');
		_this.homeBtn.scale.setTo(1);
		_this.homeBtn.anchor.setTo(0.5);
		_this.homeBtn.inputEnabled = true;
		_this.homeBtn.events.onInputDown.add(function(){
			_this.homeBtn.events.onInputDown.removeAll();
			// _this.clickSound = _this.add.audio('ClickSound');
            // _this.clickSound.play();
			_this.time.events.add(450,function()
            {
                document.getElementById("first").style.display = "block";
                
            }); 
            
            //* use javascript timeout to destroy the game since phaser time object
            //* will not exist after game destroy and hence give time related error.
            setTimeout(function() 
            {
              _this.game.destroy();
            }, 500); 
			},_this);


		// _this.shareBtn = _this.add.sprite(_this.world.centerX-56,_this.world.centerY,'shareIconScore');
		// _this.shareBtn.scale.setTo(1);
		// _this.shareBtn.anchor.setTo(0.5);
		// _this.shareBtn.inputEnabled = true;
		// _this.shareBtn.events.onInputDown.add(function(){
		// 	//_this.shareBtn.events.onInputDown.removeAll();
		// 	_this.clickSound = _this.add.audio('ClickSound');
        //     _this.clickSound.play();
        //     nativeApp.ShareApp();
			
		// 	},_this);
		_this.replay = _this.add.button(_this.world.centerX+90,_this.world.centerY,'CommonReplayBtn',null,_this,0,1,2);
		_this.replay.scale.setTo(1);
		_this.replay.anchor.setTo(0.5);
		_this.replay.inputEnabled = true;
		_this.replay.input.useHandCursor = true; 
		_this.replay.events.onInputDown.add(function(){ 
			_this.replay.events.onInputDown.removeAll();
			// _this.clickSound = _this.add.audio('ClickSound');
			// _this.clickSound.play();
			// _this.state.start('nsf5_5level1',true,false);
			if(currentgame == "12")
			{
				location.href = "OtherIntegerGames/NS-INT-5-G6/index-1.html";
			}
			else if(currentgame == "13")
			{
				location.href = "OtherIntegerGames/NS-INT-6-G6/index-1.html";
			}
			else if(currentgame == "14")
			{
				location.href = "OtherIntegerGames/NS-INT-13-G6/index-1.html"; 
			}
			else if(currentgame == "21")
			{
				location.href = "OtherIntegerGames/NS-INT-14-G6/index-1.html";  
			}
			else 
			{
				_this.state.start("boot");
			}
			
		},_this);
		
		
		_this.nextBtn = _this.add.sprite(_this.world.centerX-40,_this.world.centerY,'CommonNextBtn');    
		_this.nextBtn.scale.setTo(1);
        _this.nextBtn.anchor.setTo(0.5);	
		_this.nextBtn.inputEnabled = true;
		_this.nextBtn.input.useHandCursor = true;
		_this.nextBtn.events.onInputDown.add(function()
		{
			_this.nextBtn.events.onInputDown.removeAll();
			// _this.clickSound = _this.add.audio('ClickSound');
            // _this.clickSound.play();
			//_this.cache.destroy();
			//_this.state.start('nsd1_5level1',true,false); 
			for(let i = 0; i<_this.states.length; i++)
			{
				if(_this.states[i] == currentgame)
				{
					console.log("equals");
					//sessionStorage.setItem("param3", _this.states[i+1]);
					sessionStorage.setItem("param2", _this.states[i+1]);
					console.log(_this.nextstate);
					break;
				}
			}
			_this.nextstate = sessionStorage.getItem("param2");
			console.log(_this.nextstate);
			_this.nextBtnfn();
		},_this);
		//_this.nextBtn.visible = false;
        
		
		            
	},

	nextBtnfn:function()
	{console.log(_this.nextstate);
		//console.log(_this.nextstate);
		switch(_this.nextstate)
		{
			case "1" : _this.state.start('preloader_oe_1a');
				break;
			case "2" : _this.state.start('preloader_fm_1');
				break;
			case "3" : console.log("here");
			_this.state.start('preloader_hcf_1');
				break;
			case "4" : _this.state.start('preloader_prm_1');
				break;
			case "5" : _this.state.start('preloader_fm_3');
				break;
			case "6" : _this.state.start('preloader_fm_4a');
				break;
			case "7" : _this.state.start('preloader_lcm_1');
				break;
			case "8" : _this.state.start('preloader_int_1');
				break;
			case "9" : _this.state.start('preloader_int_3');
				break;
			case "10" : _this.state.start('preloader_int_5');
				break;
			case "11" : _this.state.start('preloader_int_6');
				break;
			case "12" : location.href = "OtherIntegerGames/NS-INT-5-G6/index-1.html";
				break;
			case "13" : location.href = "OtherIntegerGames/NS-INT-6-G6/index-1.html";
				break;
			case "14" : location.href = "OtherIntegerGames/NS-INT-13-G6/index-1.html"; 
				break;
			case "15" : _this.state.start('preloader_int_7');
				break;
			case "16" : _this.state.start('preloader_int_8');
				break;
			case "17" : _this.state.start('preloader_int_9');
				break;
			case "18" : _this.state.start('preloader_int_10');
				break;
			case "19" : _this.state.start('preloader_int_11');
				break;
			case "20" : _this.state.start('preloader_int_12');
				break;
			case "21" : location.href = "OtherIntegerGames/NS-INT-14-G6/index-1.html";  
				break;
			case "22" : _this.state.start('preloader_nsf_2');
				break;
			case "23" : _this.state.start('preloader_nsf_5');
				break;
		}
	},

	presentgame:function()
	{
		// switch(currentgame)
		// {
		// 	case "1" : _this.state.start('preloader_fm_1');
		// 		break;
		// 	case "2" :  _this.state.start('preloader_hcf_1');
		// 		break;

		// }
		_this.state.start("boot");
	},

	shutdown:function()
	{
		_this.background = null;
		_this.homeBtn.events.onInputDown.removeAll();
		_this.homeBtn=null;
		_this.nextBtn.events.onInputDown.removeAll();
		_this.nextBtn=null;
		_this.replay.events.onInputDown.removeAll();
		_this.replay=null;
		
		_this = null;
	}

};