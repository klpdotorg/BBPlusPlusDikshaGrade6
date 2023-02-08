Game.NS_INT_G6Menu=function(game){

};

Game.NS_INT_G6Menu.prototype={
	create:function(game){
		
        console.log("inside NS_INT_G6Menu js" );
		_this = this;
        
		var add_Demoseen = sessionStorage.getItem("param1");
		console.log("MMMMMMMMMMMMMinside Menu js, value of param1: " + add_Demoseen);
		
		_this.background = _this.add.tileSprite(0,-80,_this.world.width,_this.world.height,'background');
		_this.background.scale.setTo(1,1.5);
		
		_this.homeBtn = _this.add.sprite(35,35,'CommonHomeBtn');
		_this.homeBtn.scale.setTo(1,1);
		_this.homeBtn.anchor.setTo(0.5);
		_this.homeBtn.inputEnabled = true;
        _this.homeBtn.frame = 0;
        
		_this.homeBtn.events.onInputDown.add(function()
        {
			_this.homeBtn.events.onInputDown.removeAll();
			_this.clickSound = _this.add.audio('sounds/ClickSound');
            _this.clickSound.play();
            //RI.gotoEndPage();
		    telInitializer.tele_end();

        },_this);
        
        
        _this.grade6_text = _this.add.text(355,15,"Grade 6", { fontSize: '25px', font: "Akzidenz-Grotesk BQ"});
        _this.grade6_text.fill = '#000000';
        
        _this.intro_text = _this.add.text(10,75,"Numbers:", { fontSize: '20px', font: "Akzidenz-Grotesk BQ"});
        _this.intro_text.fill = '#000000';
        
        _this.add_text = _this.add.text(10,145,"Integers:", { fontSize: '20px', font: "Akzidenz-Grotesk BQ"});
        _this.add_text.fill = '#000000';
        
        _this.oe_text = _this.add.text(10,215," ", { fontSize: '20px', font: "Akzidenz-Grotesk BQ"});
        _this.add_text.fill = '#000000';

        _this.prm_text = _this.add.text(10,255,"   ", { fontSize: '20px', font: "Akzidenz-Grotesk BQ"});
        _this.add_text.fill = '#000000';
        
        _this.nsf_text = _this.add.text(10,360,"Fractions:", { fontSize: '20px', font: "Akzidenz-Grotesk BQ"});
        _this.add_text.fill = '#000000';
		
//* 1 - OE-1
        _this.oddeven1 = _this.add.button(155,65,'OE-1');
        _this.oddeven1.scale.setTo(0.4,0.4);
        _this.oddeven1.inputEnabled =true;
        _this.oddeven1.input.useHandCursor = true;
        _this.oddeven1.events.onInputDown.add(_this.numClickedoe1);
        _this.oe_1 = _this.add.text(120,61,"1", {fontSize: '20px', font:'Akzidenz-Grotesk BQ'});
        _this.oe_1.fill='#000000';
        _this.oddeven1.addChild(_this.oe_1);
        
        _this.fm1 = _this.add.button(250,65,'FM-1');
        _this.fm1.scale.setTo(0.4,0.4);
        _this.fm1.inputEnabled =true;
        _this.fm1.input.useHandCursor = true;
        _this.fm1.events.onInputDown.add(_this.numClickedfm1);
        _this.fm_1 = _this.add.text(120,61,"2", {fontSize: '20px', font:'Akzidenz-Grotesk BQ'});
        _this.fm_1.fill='#000000';
        _this.fm1.addChild(_this.fm_1);
        
//        _this.fm2 = _this.add.button(350,65,'FM-1');
//        _this.fm2.scale.setTo(0.4,0.4);
//        _this.fm2.inputEnabled =true;
//        _this.fm2.input.useHandCursor = true;
//        _this.fm2.events.onInputDown.add(_this.numClickedfm2);
//        _this.fm_2 = _this.add.text(120,61,"2", {fontSize: '20px', font:'Akzidenz-Grotesk BQ'});
//        _this.fm_2.fill='#000000';
//        _this.fm2.addChild(_this.fm_2);
        
        _this.hcf = _this.add.button(350,65,'HCF-1');
        _this.hcf.scale.setTo(0.4,0.4);
        _this.hcf.inputEnabled =true;
        _this.hcf.input.useHandCursor = true;
        _this.hcf.events.onInputDown.add(_this.numClickedhcf);
        _this.hcf_1 = _this.add.text(120,61,"3", {fontSize: '20px', font:'Akzidenz-Grotesk BQ'});
        _this.hcf_1.fill='#000000';
        _this.hcf.addChild(_this.hcf_1);

        _this.prm1 = _this.add.button(450,65,'PRM-1');
        _this.prm1.scale.setTo(0.4,0.4);
        _this.prm1.inputEnabled =true;
        _this.prm1.input.useHandCursor = true;
        _this.prm1.events.onInputDown.add(_this.numClickedprm1);
        _this.prm_1 = _this.add.text(120,61,"4", {fontSize: '20px', font:'Akzidenz-Grotesk BQ'});
        _this.prm_1.fill='#000000';
        _this.prm1.addChild(_this.prm_1);        

        _this.fm3 = _this.add.button(550,65,'FM-3');
        _this.fm3.scale.setTo(0.4,0.4);
        _this.fm3.inputEnabled =true;
        _this.fm3.input.useHandCursor = true;
        _this.fm3.events.onInputDown.add(_this.numClickedfm3);
        _this.fm_3 = _this.add.text(120,61,"5", {fontSize: '20px', font:'Akzidenz-Grotesk BQ'});
        _this.fm_3.fill='#000000';
        _this.fm3.addChild(_this.fm_3); 

        _this.fm4 = _this.add.button(650,65,'FM-1');
        _this.fm4.scale.setTo(0.4,0.4);
        _this.fm4.inputEnabled =true;
        _this.fm4.input.useHandCursor = true;
        _this.fm4.events.onInputDown.add(_this.numClickedfm4);
        _this.fm_4 = _this.add.text(120,61,"6", {fontSize: '20px', font:'Akzidenz-Grotesk BQ'});
        _this.fm_4.fill='#000000';
        _this.fm4.addChild(_this.fm_4); 

        _this.lcm1 = _this.add.button(750,65,'LCM-1');
        _this.lcm1.scale.setTo(0.4,0.4);
        _this.lcm1.inputEnabled =true;
        _this.lcm1.input.useHandCursor = true;
        _this.lcm1.events.onInputDown.add(_this.numClickedlcm1);
        _this.lcm_1 = _this.add.text(120,61,"7", {fontSize: '20px', font:'Akzidenz-Grotesk BQ'});
        _this.lcm_1.fill='#000000';
        _this.lcm1.addChild(_this.lcm_1);

        _this.numbg1 = _this.add.image(155,135,'INT-1');
        _this.numbg1.scale.setTo(0.4,0.4);
        _this.numbg1.inputEnabled = true;
        _this.numbg1.input.useHandCursor = true;
        _this.numbg1.events.onInputDown.add(_this.numClicked1);
        _this.int_1 = _this.add.text(120,61,"1", { fontSize: '20px', font: "Akzidenz-Grotesk BQ"});
        _this.int_1.fill = '#000000';
        _this.numbg1.addChild(_this.int_1);
        
        _this.numbg2 = _this.add.image(250,135,'INT-3');
         _this.numbg2.scale.setTo(0.4,0.4);
        _this.numbg2.inputEnabled = true;
        _this.numbg2.input.useHandCursor = true;
        _this.numbg2.events.onInputDown.add(_this.numClicked2);
        _this.int_2 = _this.add.text(120,61,"2", { fontSize: '20px', font: "Akzidenz-Grotesk BQ"});
        _this.int_2.fill = '#000000';
        _this.numbg2.addChild(_this.int_2);
        
        
        _this.numbg3 = _this.add.image(350,135,'INT-5');
        _this.numbg3.scale.setTo(0.4,0.4);
        _this.numbg3.inputEnabled = true;
        _this.numbg3.input.useHandCursor = true;
        _this.numbg3.events.onInputDown.add(_this.numClicked3);
        _this.int_3 = _this.add.text(120,61,"3", { fontSize: '20px', font: "Akzidenz-Grotesk BQ"});
        _this.int_3.fill = '#000000';
        _this.numbg3.addChild(_this.int_3);
        
        _this.numbg4 = _this.add.image(450,135,'INT-6');
        _this.numbg4.scale.setTo(0.4,0.4);
        _this.numbg4.inputEnabled = true;
        _this.numbg4.input.useHandCursor = true;
        _this.numbg4.events.onInputDown.add(_this.numClicked4);
        _this.int_4 = _this.add.text(120,61,"4", { fontSize: '20px', font: "Akzidenz-Grotesk BQ"});
        _this.int_4.fill = '#000000';
        _this.numbg4.addChild(_this.int_4);
        
//* integrate 3 hornbil games ...........................................
//* .....................................................................
        
        _this.numbg7 = _this.add.image(155,205,'INT-7');
        _this.numbg7.scale.setTo(0.4,0.4);
        _this.numbg7.inputEnabled = true;
        _this.numbg7.input.useHandCursor = true;
        _this.numbg7.events.onInputDown.add(_this.numClicked7);
        _this.int_7 = _this.add.text(120,61,"8", { fontSize: '20px', font: "Akzidenz-Grotesk BQ"});
        _this.int_7.fill = '#000000';
        _this.numbg7.addChild(_this.int_7);

        
        _this.numbg8 = _this.add.image(250,205,'INT-8');
        _this.numbg8.scale.setTo(0.4,0.4);
        _this.numbg8.inputEnabled = true;
        _this.numbg8.input.useHandCursor = true;
        _this.numbg8.events.onInputDown.add(_this.numClicked8);  
        _this.int_8 = _this.add.text(120,61,"9", { fontSize: '20px', font: "Akzidenz-Grotesk BQ"});
        _this.int_8.fill = '#000000';
        _this.numbg8.addChild(_this.int_8);
        

    
        _this.numbg9 = _this.add.button(350,205,'INT-9');
        _this.numbg9.scale.setTo(0.4,0.4);
        _this.numbg9.inputEnabled = true;
        _this.numbg9.input.useHandCursor = true;
        _this.numbg9.events.onInputDown.add(_this.numClicked9);  
        _this.int_9 = _this.add.text(108,61,"10", { fontSize: '20px', font: "Akzidenz-Grotesk BQ"});
        _this.int_9.fill = '#000000';
        _this.numbg9.addChild(_this.int_9);
    
        
        _this.numbg10 = _this.add.image(450,205,'INT-10');
        _this.numbg10.scale.setTo(0.4,0.4);
        _this.numbg10.inputEnabled = true;
        _this.numbg10.input.useHandCursor = true;
        _this.numbg10.events.onInputDown.add(_this.numClicked10);  
        _this.int_10 = _this.add.text(108,61,"11", { fontSize: '20px', font: "Akzidenz-Grotesk BQ"});
        _this.int_10.fill = '#000000';
        _this.numbg10.addChild(_this.int_10); 

        
        _this.numbg11 = _this.add.button(550,205,'INT-11');
        _this.numbg11.scale.setTo(0.4,0.4);
        _this.numbg11.inputEnabled = true;
        _this.numbg11.input.useHandCursor = true;
        _this.numbg11.events.onInputDown.add(_this.numClicked11);  
        _this.int_11 = _this.add.text(108,61,"12", { fontSize: '20px', font: "Akzidenz-Grotesk BQ"});
        _this.int_11.fill = '#000000';
        _this.numbg11.addChild(_this.int_11); 
        
        _this.numbg12 = _this.add.button(650,205,'INT-12');
        _this.numbg12.scale.setTo(0.4,0.4);
        _this.numbg12.inputEnabled =true;
        _this.numbg12.input.useHandCursor = true;
        _this.numbg12.events.onInputDown.add(_this.numClicked12);
        _this.int_12 = _this.add.text(108,61,"13", {fontSize: '20px', font:'Akzidenz-Grotesk BQ'});
        _this.int_12.fill='#000000';
        _this.numbg12.addChild(_this.int_12);
        
        
//* integrate 1 game of hornbill here............................................
//* .............................................................................
        

        _this.nsf2 = _this.add.button(155,355,'FSM-2');
        _this.nsf2.scale.setTo(0.4,0.4);
        _this.nsf2.inputEnabled =true;
        _this.nsf2.input.useHandCursor = true;
        _this.nsf2.events.onInputDown.add(_this.numClickednsf2);
        _this.nsf_2 = _this.add.text(120,61,"2", {fontSize: '20px', font:'Akzidenz-Grotesk BQ'});
        _this.nsf_2.fill='#000000';
        _this.nsf2.addChild(_this.nsf_2);
        
        _this.nsf5 = _this.add.button(250,355,'FSM-5');
        _this.nsf5.scale.setTo(0.4,0.4);
        _this.nsf5.inputEnabled =true;
        _this.nsf5.input.useHandCursor = true;
        _this.nsf5.events.onInputDown.add(_this.numClickednsf5);
        _this.nsf_5 = _this.add.text(120,61,"5", {fontSize: '20px', font:'Akzidenz-Grotesk BQ'});
        _this.nsf_5.fill='#000000';
        _this.nsf5.addChild(_this.nsf_5);

	},
    
    numClickedoe1:function(){
        console.log("calling int oe");
        _this.oddeven1.events.onInputDown.removeAll();
        _this.state.start('preloader_oe_1a'); //*
////        location.href = "OtherIntegerGames/NS-INT-13-G6/web-mobile/index-1.html"; 
//          location.href = "http://localhost:8080/Hornbill/NS-INT-5-G6/web-mobile/";
    },
    
    numClickedfm1:function(){
        console.log("calling int fm1");
        _this.oddeven1.events.onInputDown.removeAll();
        _this.state.start('preloader_fm_1'); //* 
    },
    
//    numClickedfm2:function(){         //* merged with FM1
//        console.log("calling int fm2");
//        _this.oddeven1.events.onInputDown.removeAll();
//        _this.state.start('preloader_fm_2');
//    },
    

    numClickedhcf:function(){
        console.log("calling int hcf");
        _this.lcm1.events.onInputDown.removeAll();
        _this.state.start('preloader_hcf_1'); 
        
    },
    
    numClickedlcm1:function(){
        console.log("calling int lcm1");
        _this.lcm1.events.onInputDown.removeAll();
        _this.state.start('preloader_lcm_1');
    },

    numClickedprm1:function(){
        console.log("calling int prm1");
        _this.oddeven1.events.onInputDown.removeAll();
        _this.state.start('preloader_prm_1');
    },
    
    numClickedfm3:function(){
        console.log("calling int fm3");
        _this.oddeven1.events.onInputDown.removeAll();
        _this.state.start('preloader_fm_3');
    },
    
    numClickedfm4:function(){
        console.log("calling int fm4");
        _this.oddeven1.events.onInputDown.removeAll();
        _this.state.start('preloader_fm_4a');
    },
    
    numClicked1:function()
    {
        console.log("calling preloader int 1");
        _this.numbg1.events.onInputDown.removeAll();
        _this.state.start('preloader_int_1');
        //_this.state.start('NS_INT_1_G6level1',true,false); 
    },
    
    numClicked2:function()
    {
        console.log("calling int 3");
        _this.numbg2.events.onInputDown.removeAll();
        _this.state.start('preloader_int_3');
        //_this.state.start('NS_INT_3_G6level1',true,false); 
    },
    
    numClicked3:function()
    {
        console.log("calling int 5");
        _this.numbg3.events.onInputDown.removeAll();
        _this.state.start('preloader_int_5');
    },
    
    numClicked4:function()
    {
        console.log("calling int 6");
        _this.numbg4.events.onInputDown.removeAll();
        _this.state.start('preloader_int_6');
    },
    
    numClicked7:function()
    {
        console.log("calling int 7");
        _this.numbg7.events.onInputDown.removeAll();
        _this.state.start('preloader_int_7'); 
    },
    
    numClicked8:function()
    {
        console.log("calling int 8");
        _this.numbg8.events.onInputDown.removeAll();
        _this.state.start('preloader_int_8'); 
    },

    numClicked9:function()
    {
        console.log("calling int 9");
        _this.numbg9.events.onInputDown.removeAll();
        _this.state.start('preloader_int_9'); 
    },

    numClicked10:function()
    {
        console.log("calling int 10");
        _this.numbg10.events.onInputDown.removeAll();
        _this.state.start('preloader_int_10'); 
    },
    
    numClicked11:function()
    {
        console.log("calling int 11");
        _this.numbg11.events.onInputDown.removeAll();
        _this.state.start('preloader_int_11'); 
    },
    
    numClicked12:function(){
        _this.numbg12.events.onInputDown.removeAll();
        _this.state.start('preloader_int_12');
    },

    numClickednsf2:function(){
        console.log("calling int nsf2");
        _this.oddeven1.events.onInputDown.removeAll();
        _this.state.start('preloader_nsf_2');
    //_this.load.htmlInterfaceObj('hornbill', 'integergame1/index1.html', 512, 512); //*for testing. doesnt work.
    },
    
    numClickednsf5:function(){
        console.log("calling int nsf5");
        _this.oddeven1.events.onInputDown.removeAll();
        _this.state.start('preloader_nsf_5');
    },
    
	shutdown:function()
	{
		_this.background = null;
		_this = null;
	}

};