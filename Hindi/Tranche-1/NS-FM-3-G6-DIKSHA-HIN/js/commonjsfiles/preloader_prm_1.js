Game.preloader_prm_1=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_prm_1.prototype={
	preload:function(){
		
        this.load.video('prm_1_1','demoVideos/NS-PRM-1-G6_1.mp4');  //* intro to finding if num is prime
        this.load.video('prm_1_2','demoVideos/NS-PRM-1-G6_2.mp4');  //* playing the game.is it composit?

		this.load.image('skipArrow','assets/commonAssets/skipArrow.png');
        
		this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,NS_PRM_1_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,NS_PRM_1_G6_JSON.speakerJson);
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null,NS_PRM_1_G6_JSON.starAnimJson);
        this.load.atlas('replay','assets/commonAssets/reply.png' ,null,NS_PRM_1_G6_JSON.replyJson);
        this.load.atlas('btn','assets/commonAssets/btn.png',null,NS_PRM_1_G6_JSON.btnJson);
        
        // this.load.image('tittleBar','assets/commonAssets/tittleBar.png');
        this.load.image('background','assets/commonAssets/bg.png');
        this.load.image('navBar','assets/commonAssets/navBar.png');
        this.load.image('timebg','assets/commonAssets/timebg.png');
		    
        
        this.load.image('bg', 'assets/gradeAssets/NS-PRM-1-G6/bg7.2.png');
        this.load.image('RedBox', 'assets/gradeAssets/NS-PRM-1-G6/Red Box.png');
        this.load.image('EggTray', 'assets/gradeAssets/NS-PRM-1-G6/16X10 Egg Box.png');
        this.load.image('MainBox', 'assets/gradeAssets/NS-PRM-1-G6/Main Box.png');
		this.load.image('2x16EggTray','assets/gradeAssets/NS-PRM-1-G6/16X2 Egg Box.png');
        this.load.image('3x16EggTray','assets/gradeAssets/NS-PRM-1-G6/egg_3X16.png');
        this.load.image('5x16EggTray','assets/gradeAssets/NS-PRM-1-G6/16X5 Egg Box.png');
        this.load.image('7x16EggTray','assets/gradeAssets/NS-PRM-1-G6/16X7 Egg Box.png');
        this.load.image('10x11EggTray','assets/gradeAssets/NS-PRM-1-G6/egg_11X10.png');
        this.load.image('10x13EggTray','assets/gradeAssets/NS-PRM-1-G6/egg_10X13.png');

        this.load.image('2x16AppleTray','assets/gradeAssets/NS-PRM-1-G6/apple_2X16.png');
        this.load.image('3x16AppleTray','assets/gradeAssets/NS-PRM-1-G6/apple_3X16.png');
        this.load.image('5x16AppleTray','assets/gradeAssets/NS-PRM-1-G6/apple_5X16.png');
        this.load.image('7x16AppleTray','assets/gradeAssets/NS-PRM-1-G6/apple_7X16.png');
        this.load.image('10x11AppleTray','assets/gradeAssets/NS-PRM-1-G6/apple_11X10.png');
        this.load.image('10x13AppleTray','assets/gradeAssets/NS-PRM-1-G6/apple_10X13.png');
        this.load.image('AppleTray','assets/gradeAssets/NS-PRM-1-G6/apple_10X16.png');

        this.load.atlas('Thumsup','assets/gradeAssets/NS-PRM-1-G6/thums Up.png',null,NS_PRM_1_G6_JSON.thumsup);
        this.load.atlas('Thumsdown','assets/gradeAssets/NS-PRM-1-G6/thums down.png',null,NS_PRM_1_G6_JSON.thumsdown);
        this.load.atlas('Rightbtn','assets/gradeAssets/NS-PRM-1-G6/Right Btn.png',null,NS_PRM_1_G6_JSON.rightbutton);
        this.load.atlas('FactorBox','assets/gradeAssets/NS-PRM-1-G6/3 Box.png',null,NS_PRM_1_G6_JSON.factorBox);
        this.load.atlas('Egg','assets/gradeAssets/NS-PRM-1-G6/egg.png',null,NS_PRM_1_G6_JSON.egg);
        this.load.atlas('Eraser','assets/gradeAssets/NS-PRM-1-G6/Eraser box.png',null,NS_PRM_1_G6_JSON.eraser);
        this.load.atlas('Apple','assets/gradeAssets/NS-PRM-1-G6/apple new.png',null,NS_PRM_1_G6_JSON.apple);
        
        
        this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, NS_PRM_1_G6_JSON.homebtnJson);
        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, NS_PRM_1_G6_JSON.nextbtnJson);

	},

	create:function(){
		
		this.state.start('NS_PRM_1_G6demo');
        
    },
}