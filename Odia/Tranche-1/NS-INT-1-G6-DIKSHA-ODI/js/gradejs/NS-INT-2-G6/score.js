Game.numbers_int_2_g6Score=function(game){

};

Game.numbers_int_2_g6Score.prototype={
	create:function(game){
		
        console.log("inside score js Q2" );
		_this = this;
		
		_this.background = _this.add.tileSprite(0,-80,_this.world.width,_this.world.height,'unity2_1_1a_background');
		_this.background.scale.setTo(1,1.5);
		
		_this.homeBtn = _this.add.sprite(_this.world.centerX-150,_this.world.centerY,'CommonHomeBtn');
		_this.homeBtn.scale.setTo(2,2);
		_this.homeBtn.anchor.setTo(0.5);
		_this.homeBtn.inputEnabled = true;
        _this.homeBtn.frame = 0;
        
		_this.homeBtn.events.onInputDown.add(function(){
			_this.homeBtn.events.onInputDown.removeAll();
			_this.clickSound = _this.add.audio('sounds/ClickSound');
            _this.clickSound.play();
            //RI.gotoEndPage();
		    telInitializer.tele_end();

			},_this);
		
		
		_this.nextBtn = _this.add.sprite(_this.world.centerX+150,_this.world.centerY,'CommonNextBtn');    
		_this.nextBtn.scale.setTo(2,2);
        _this.nextBtn.anchor.setTo(0.5);	
		_this.nextBtn.inputEnabled = true;
		_this.nextBtn.events.onInputDown.add(function()
		{
			_this.nextBtn.events.onInputDown.removeAll();
			_this.clickSound = _this.add.audio('sounds/ClickSound');
            _this.clickSound.play();
			//_this.cache.destroy();
console.log('Going to start the Question 3');
			_this.state.start('preloader_int_3',true,false); 
		},_this);

        _this.replay = _this.add.button(_this.world.centerX,_this.world.centerY,'unity2_1_1a_replay',null,_this,0,1,2);
        _this.replay.scale.setTo(2,2);
        _this.replay.anchor.setTo(0.5);
        _this.replay.inputEnabled = true;
        _this.replay.input.useHandCursor = true; 
        _this.replay.events.onInputDown.add(function(){ 
            _this.replay.events.onInputDown.removeAll();
            //_this.clickSound = _this.add.audio('ClickSound');
            //_this.clickSound.play();
// replay should replay the game 1 (first 3 questions & then it will navigate to Game 2 with next 3 questions)
            _this.state.start('NS_INT_1_G6level1',true,false);
         },_this);
        
        _this.numGroup = _this.add.group();
        _this.numbg1 = _this.numGroup.create(_this.world.centerX-100,_this.world.centerY+100,'Numberpad'); 
        _this.numbg1.anchor.setTo(0.5);
        _this.numbg1.scale.setTo(0.8,0.8);
        _this.numbg1.frame=1;
        _this.numbg1.inputEnabled = true;
        _this.numbg1.input.useHandCursor = true;
        _this.numbg1.events.onInputDown.add(_this.numClicked1);

        _this.numbg2 = _this.numGroup.create(_this.world.centerX,_this.world.centerY+100,'Numberpad'); 
        _this.numbg2.anchor.setTo(0.5);
        _this.numbg2.scale.setTo(0.8,0.8);
        _this.numbg2.frame=2;
        _this.numbg2.inputEnabled = true;
        _this.numbg2.input.useHandCursor = true;
        _this.numbg2.events.onInputDown.add(_this.numClicked2);  

        _this.numbg3 = _this.numGroup.create(_this.world.centerX+100,_this.world.centerY+100,'Numberpad'); 
        _this.numbg3.anchor.setTo(0.5);
        _this.numbg3.scale.setTo(0.8,0.8);
        _this.numbg3.frame=3;
        _this.numbg3.inputEnabled = true;
        _this.numbg3.input.useHandCursor = true;
        _this.numbg3.events.onInputDown.add(_this.numClicked3);
        
        _this.numbg4 = _this.numGroup.create(_this.world.centerX+200,_this.world.centerY+100,'Numberpad'); 
        _this.numbg4.anchor.setTo(0.5);
        _this.numbg4.scale.setTo(0.8,0.8);
        _this.numbg4.frame=4;
        _this.numbg4.inputEnabled = true;
        _this.numbg4.input.useHandCursor = true;
        _this.numbg4.events.onInputDown.add(_this.numClicked4);  
	},
    
    numClicked1:function()
    {
        _this.numbg1.events.onInputDown.removeAll();
        _this.state.start('preloader',true,false); 
    },
    
    numClicked2:function()
    {
        _this.numbg2.events.onInputDown.removeAll();
        _this.state.start('preloader_int_3',true,false); 
    },

    numClicked3:function()
    {
        _this.numbg3.events.onInputDown.removeAll();
        _this.state.start('preloader_int_5',true,false); 
    },

    numClicked4:function()
    {
        _this.numbg4.events.onInputDown.removeAll();
        _this.state.start('preloader_int_6',true,false); 
    },

	shutdown:function()
	{
		_this.background = null;
		_this = null;
	}

};