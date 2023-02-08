Game.preloader_fm_1=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_fm_1.prototype={
	preload:function(){
		
        this.load.video('fm_1_1','demoVideos/NS-FM-1-G6_1.mp4');  //* intro to game
        this.load.video('fm_1_2','demoVideos/NS-FM-1-G6_2.mp4');  //* fm1 game playing
        this.load.video('fm_1_3','demoVideos/NS-FM-1-G6_3.mp4');  //* fm2 game playing

		this.load.image('skipArrow','assets/commonAssets/skipArrow.png');
        
	    this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,NS_FM_1_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,NS_FM_1_G6_JSON.speakerJson);
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null,NS_FM_1_G6_JSON.starAnimJson);
        this.load.atlas('replay','assets/commonAssets/reply.png' ,null,NS_FM_1_G6_JSON.replyJson);
        this.load.atlas('btn','assets/commonAssets/btn.png',null,NS_FM_1_G6_JSON.btnJson);
        
        this.load.image('tittleBar','assets/commonAssets/tittleBar.png');
        this.load.image('background','assets/commonAssets/bg.png');
        this.load.image('navBar','assets/commonAssets/navBar.png');
        this.load.image('timebg','assets/commonAssets/timebg.png');
        this.load.image('topicOutline','assets/commonAssets/topicOutline.png');

        this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, NS_FM_1_G6_JSON.homebtnJson);
        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, NS_FM_1_G6_JSON.nextbtnJson);

        this.load.image('bg', 'assets/gradeAssets/NS-FM-1-G6/Bg.png');

//NS_FM_01_G6
        //this.load.image('10x16','assets/gradeAssets/NS_FM_1_G6/Egg 16X10.png');
       this.load.image('10x16', 'assets/gradeAssets/NS-FM-1-G6/egg_10X16.png');
       this.load.image('9x16', 'assets/gradeAssets/NS-FM-1-G6/egg_9X16.png');
       this.load.image('8x16', 'assets/gradeAssets/NS-FM-1-G6/egg_8X16.png');
       this.load.image('7x16', 'assets/gradeAssets/NS-FM-1-G6/egg_7X16.png');
       this.load.image('6x16', 'assets/gradeAssets/NS-FM-1-G6/egg_6X16.png');
       this.load.image('5x16', 'assets/gradeAssets/NS-FM-1-G6/egg_5X16.png');
       this.load.image('4x16', 'assets/gradeAssets/NS-FM-1-G6/egg_4X16.png');
       this.load.image('3x16', 'assets/gradeAssets/NS-FM-1-G6/egg_3X16.png');
       this.load.image('2x16', 'assets/gradeAssets/NS-FM-1-G6/egg_2X16.png');
       
       this.load.image('c_10x16', 'assets/gradeAssets/NS-FM-1-G6/counter_10X16.png');

       this.load.image('counter_10x16', 'assets/gradeAssets/NS-FM-1-G6/10X16-blocks.png');
       this.load.image('counter_9x16', 'assets/gradeAssets/NS-FM-1-G6/9X16-blocks.png');
       this.load.image('counter_8x16', 'assets/gradeAssets/NS-FM-1-G6/8X16-blocks.png');
       this.load.image('counter_7x16', 'assets/gradeAssets/NS-FM-1-G6/7X16-blocks.png');
       this.load.image('counter_6x16', 'assets/gradeAssets/NS-FM-1-G6/6X16-blocks.png');
       this.load.image('counter_5x16', 'assets/gradeAssets/NS-FM-1-G6/5X16-blocks.png');
       this.load.image('counter_4x16', 'assets/gradeAssets/NS-FM-1-G6/4X16-blocks.png');
       this.load.image('counter_3x16', 'assets/gradeAssets/NS-FM-1-G6/3X16-blocks.png');
       this.load.image('counter_2x16', 'assets/gradeAssets/NS-FM-1-G6/2X16-blocks.png');      
       


       //this.load.image('numberpad','assets/gradeAssets/NS-FM-1-G6/regular number pad.png');
//       this.load.image('BackPart','assets/gradeAssets/NS-FM-1-G6/Back part.png');
//       this.load.image('FrontPart','assets/gradeAssets/NS-FM-1-G6/Front part.png');
       this.load.image('Small_num_Box','assets/gradeAssets/NS-FM-1-G6/Red box.png');
       this.load.image('Big_num_Box','assets/gradeAssets/NS-FM-1-G6/text box1.png');
       this.load.image('TextBox','assets/gradeAssets/NS-FM-1-G6/text box2.png');



       this.load.image('numpadbg','assets/commonAssets/numbg.png');
       this.load.atlas('Numberpad','assets/gradeAssets/NS-FM-1-G6/number pad.png',null,NS_FM_1_G6_JSON.numberpadJson);
       this.load.atlas('egg_basket','assets/gradeAssets/NS-FM-1-G6/egg_basket.png',null,NS_FM_1_G6_JSON.egg_basketJson);
       this.load.atlas('egg','assets/gradeAssets/NS-FM-1-G6/egg.png',null,NS_FM_1_G6_JSON.eggJson);
       this.load.atlas('orengeCounterBasket','assets/gradeAssets/NS-FM-1-G6/orenge blocks count tray.png',null,NS_FM_1_G6_JSON.orangeCounterTrayJson);
       this.load.atlas('thumbs_Up','assets/gradeAssets/NS-FM-1-G6/thums Up.png',null,NS_FM_1_G6_JSON.thumsUpJson);
       this.load.atlas('thumbs_Down','assets/gradeAssets/NS-FM-1-G6/thums down.png',null,NS_FM_1_G6_JSON.thumbsDownJson);
       this.load.atlas('tick_btn','assets/gradeAssets/NS-FM-1-G6/tick_btn.png',null,NS_FM_1_G6_JSON.tickbtnJson);
       this.load.atlas('counter','assets/gradeAssets/NS-FM-1-G6/sweet.png',null,NS_FM_1_G6_JSON.counterJson);
	

        this.preloader_fm_2();
        
        },

	create:function(){
		
		this.state.start('NS_FM_1_G6demo', true, false); //* transition with clear world but not cache
        
    },
    
    preloader_fm_2: function()
    {
		this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,NS_FM_2_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,NS_FM_2_G6_JSON.speakerJson);
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null,NS_FM_2_G6_JSON.starAnimJson);
        this.load.atlas('replay','assets/commonAssets/reply.png' ,null,NS_FM_2_G6_JSON.replyJson);
        this.load.atlas('btn','assets/commonAssets/btn.png',null,NS_FM_2_G6_JSON.btnJson);
        
        // this.load.image('tittleBar','assets/commonAssets/tittleBar.png');
        this.load.image('background','assets/commonAssets/bg.png');
        this.load.image('navBar','assets/commonAssets/navBar.png');
        this.load.image('timebg','assets/commonAssets/timebg.png');
		    
        this.load.image('bg', 'assets/gradeAssets/NS-FM-2-G6/bg7.2.png');
        this.load.image('RedBox', 'assets/gradeAssets/NS-FM-2-G6/Red Box.png');
        this.load.image('EggTray', 'assets/gradeAssets/NS-FM-2-G6/16X10 Egg Box.png');
        this.load.image('MainBox', 'assets/gradeAssets/NS-FM-2-G6/Main Box.png');
		this.load.image('2x16EggTray','assets/gradeAssets/NS-FM-2-G6/16X2 Egg Box.png');
        this.load.image('3x16EggTray','assets/gradeAssets/NS-FM-2-G6/egg_3X16.png');
        this.load.image('4x16EggTray','assets/gradeAssets/NS-FM-2-G6/Egg 16X4.png');
        this.load.image('5x16EggTray','assets/gradeAssets/NS-FM-2-G6/16X5 Egg Box.png');
        this.load.image('6x16EggTray','assets/gradeAssets/NS-FM-2-G6/Egg 16X6.png');
        this.load.image('7x16EggTray','assets/gradeAssets/NS-FM-2-G6/16X7 Egg Box.png');
        this.load.image('8x16EggTray','assets/gradeAssets/NS-FM-2-G6/egg_8X16.png');
        this.load.image('9x16EggTray','assets/gradeAssets/NS-FM-2-G6/Egg 16X9.png');
        this.load.image('10x16EggTray','assets/gradeAssets/NS-FM-2-G6/Egg 16X10.png');
        


        this.load.image('CounterTray', 'assets/gradeAssets/NS-FM-2-G6/10X16-blocks-crate.png');
        this.load.image('2x16CounterTray','assets/gradeAssets/NS-FM-2-G6/2X16-blocks-crate.png');
        this.load.image('3x16CounterTray','assets/gradeAssets/NS-FM-2-G6/3X16-blocks-crate.png');
        this.load.image('4x16CounterTray','assets/gradeAssets/NS-FM-2-G6/4X16-blocks-crate.png');
        this.load.image('5x16CounterTray','assets/gradeAssets/NS-FM-2-G6/5X16-blocks-crate.png');
        this.load.image('6x16CounterTray','assets/gradeAssets/NS-FM-2-G6/6X16-blocks-crate.png');
        this.load.image('7x16CounterTray','assets/gradeAssets/NS-FM-2-G6/7X16-blocks-crate.png');
        this.load.image('8x16CounterTray','assets/gradeAssets/NS-FM-2-G6/8X16-blocks-crate.png');
        this.load.image('9x16CounterTray','assets/gradeAssets/NS-FM-2-G6/9X16-blocks-crate.png');
        //this.load.image('10x16CounterTray','assets/gradeAssets/NS-FM-2-G6/Egg 16X10.png');

        this.load.atlas('Thumsup','assets/gradeAssets/NS-FM-2-G6/thums Up.png',null,NS_FM_2_G6_JSON.thumsup);
        this.load.atlas('Thumsdown','assets/gradeAssets/NS-FM-2-G6/thums down.png',null,NS_FM_2_G6_JSON.thumsdown);
        this.load.atlas('Rightbtn','assets/gradeAssets/NS-FM-2-G6/Right Btn.png',null,NS_FM_2_G6_JSON.rightbutton);
        
        //this.load.atlas('FactorBox','assets/gradeAssets/NS-FM-2-G6/3 Box.png',null,NS_FM_2_G6_JSON.factorBox);
        
        this.load.atlas('FactorBox', 'assets/gradeAssets/NS-FM-2-G6/Nuber box new.png', null, NS_FM_2_G6_JSON.factorBox);
        
        this.load.atlas('Egg','assets/gradeAssets/NS-FM-2-G6/egg.png',null,NS_FM_2_G6_JSON.egg);
        this.load.atlas('Eraser','assets/gradeAssets/NS-FM-2-G6/Eraser box.png',null,NS_FM_2_G6_JSON.eraser);
        this.load.atlas('Sweet','assets/gradeAssets/NS-FM-2-G6/sweet.png',null,NS_FM_2_G6_JSON.sweet);
        
        
        this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, NS_FM_2_G6_JSON.homebtnJson);
        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, NS_FM_2_G6_JSON.nextbtnJson);
    }
}