Game.preloader_fm_2=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_fm_2.prototype={
	preload:function(){
		
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

	},

	create:function(){
		
		this.state.start('NS_FM_2_G6level1');
        
    },
}