Game.preloader_int_3=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_int_3.prototype={
	preload:function(){
        
        console.log('going to start preload 3');
        
        this.load.video('int_2_1','demoVideos/NS-INT-2-G6_1.mp4');  //* intro to game
        this.load.video('int_2_2','demoVideos/NS-INT-2-G6_2.mp4');  //* int3 game playing
        this.load.video('int_2_3','demoVideos/NS-INT-2-G6_3.mp4');  //* int4 game playing

		this.load.image('skipArrow','assets/commonAssets/skipArrow.png');
		
		this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,game3Json.backbtnJson);
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,game3Json.speakerJson);
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null,game3Json.starAnimJson);
        this.load.atlas('replay','assets/commonAssets/reply.png' ,null,game3Json.replyJson);
        this.load.atlas('btn','assets/commonAssets/btn.png',null,game3Json.btnJson);
        
    
        this.load.image('tittleBar','assets/commonAssets/tittleBar.png');
        this.load.image('background','assets/commonAssets/bg.png');
        this.load.image('navBar','assets/commonAssets/navBar.png');
        this.load.image('timebg','assets/commonAssets/timebg.png');
        this.load.image('topicOutline','assets/commonAssets/topicOutline.png');
        
        this.load.image('Transparent','assets/commonAssets/transparent.png'); 
        this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, game3Json.homebtnJson);
        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, game3Json.nextbtnJson);

        //game assets.
        //this.load.image('unity2_1_1a_BG_01', 'assets/gradeAssets/NS-INT-3-G6/BG_01.png');
        this.load.atlas('level_scale', 'assets/gradeAssets/NS-INT-3-G6/Scaleanim.png', null, game3Json.level_scale); 
        this.load.image('practice','assets/gradeAssets/NS-INT-3-G6/practice.png');
        this.load.image('topic','assets/gradeAssets/NS-INT-3-G6/topic.png');
        //this.load.image('Tick', 'assets/gradeAssets/2.1.1/Tick.png');
        
        
        this.load.atlas('Tick', 'assets/gradeAssets/NS-INT-3-G6/tick.png', null,game3Json.tickJson);
        
        this.load.image('Q3_bg', 'assets/gradeAssets/NS-INT-3-G6/Q3_bg.png');
        //this.load.image('level_scale', 'assets/gradeAssets/NS-INT-3-G6/scale.png');
        
        this.load.atlas('Fish_1', 'assets/gradeAssets/NS-INT-3-G6/Fish 1.png', null, game3Json.Fish_1 );
        
        this.load.image('kingfisher_sitting', 'assets/gradeAssets/NS-INT-3-G6/kingfishersitting.png');
        this.load.atlas('KingFisher_JumpingWater', 'assets/gradeAssets/NS-INT-3-G6/JumpingWater.png', null, game3Json.jumpingWaterJson); 
        this.load.atlas('kingfisher_hovering', 'assets/gradeAssets/NS-INT-3-G6/kingfisherhovering.png', null, game3Json.kingfisherhoveringJson); 
              
        
        this.load.atlas('Numberpad','assets/gradeAssets/NS-INT-3-G6/Numberpad.png',null,game3Json.numberpadJson);
        this.load.image('numpadbg','assets/commonAssets/numbg.png');
        this.load.atlas('ScreenTextBox','assets/gradeAssets/NS-INT-3-G6/ScreenTextBox.png',null,game3Json.ScreenTextBox);
        
        this.load.atlas('KingFisher_ComingUp', 'assets/gradeAssets/NS-INT-3-G6/ComingUp.png', null, game3Json.comingUpJson); 
        this.load.atlas('KingFisher_Eatingfish', 'assets/gradeAssets/NS-INT-3-G6/EatingFish.png', null, game3Json.eatingfishJson); 
        
        this.load.atlas('Bubbles','assets/gradeAssets/NS-INT-3-G6/Bubbles.png',null,game3Json.bubblesJson);
        this.load.atlas('KingFisher_InsideWater','assets/gradeAssets/NS-INT-3-G6/InsideWater.png',null,game3Json.insideWaterJson);
        this.load.atlas('KingFisher_ComingUpWater','assets/gradeAssets/NS-INT-3-G6/ComingupWater.png',null,game3Json.comingupWaterJson);
        this.load.atlas('SplashWater','assets/gradeAssets/NS-INT-3-G6/SplashWater.png',null,game3Json.SplashWater);
        
        // load additional objects for game 4
        this.preloader_int_4();
        
	},

	create:function(){
		
        console.log('going to start Q3');
		this.state.start('NS_INT_2_G6demo');
        
    },
    
    preloader_int_4: function()
    {
        
		//this.load.atlas('unity2_1_1_backbtn','assets/commonAssets/backbtn.png' ,null,game4Json.backbtnJson);
        //this.load.atlas('unity2_1_1a_CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,game4Json.speakerJson);
        //this.load.atlas('unity2_1_1a_starAnim','assets/commonAssets/starAnim.png',null,game4Json.starAnimJson);
        //this.load.atlas('unity2_1_1a_replay','assets/commonAssets/reply.png' ,null,game4Json.replyJson);
        //this.load.atlas('unity2_1_1a_btn','assets/commonAssets/btn.png',null,game4Json.btnJson);
        
        //this.load.image('unity2_1_1a_tittleBar','assets/commonAssets/tittleBar.png');
        //this.load.image('unity2_1_1a_background','assets/commonAssets/bg.png');
        //this.load.image('unity2_1_1a_navBar','assets/commonAssets/navBar.png');
        //this.load.image('unity2_1_1a_timebg','assets/commonAssets/timebg.png');
        //this.load.image('unity2_1_1a_topicOutline','assets/commonAssets/topicOutline.png');

        //game assets.
        //this.load.image('unity2_1_1a_BG_01', 'assets/gradeAssets/NS-INT-4-G6/BG_01.png');
        //this.load.image('unity2_1_1a_practice','assets/gradeAssets/NS-INT-4-G6/practice.png');
        //this.load.image('unity2_1_1a_topic','assets/gradeAssets/NS-INT-4-G6/topic.png');
        //this.load.image('Tick', 'assets/gradeAssets/2.1.1/Tick.png');
        

        //this.load.atlas('unity2_1_1a_Tick', 'assets/gradeAssets/NS-INT-4-G6/tick.png', null,game4Json.tickJson);
        //this.load.image('Q4_bg', 'assets/gradeAssets/NS-INT-4-G6/Bg.png');
       // this.load.image('level_scale', 'assets/gradeAssets/NS-INT-4-G6/Scale.png');
        
        //this.load.atlas('level_scale', 'assets/gradeAssets/NS-INT-4-G6/Scaleanim.png', null, game4Json.level_scale); 
        
        //this.load.atlas('Fish_1', 'assets/gradeAssets/NS-INT-4-G6/Fish 1.png', null, game4Json.Fish_1 );
        this.load.image('Fish_1_image', 'assets/gradeAssets/NS-INT-4-G6/Fish_1_image.png');
        this.load.image('nest', 'assets/gradeAssets/NS-INT-4-G6/number.png');
        this.load.image('pondplace', 'assets/gradeAssets/NS-INT-4-G6/timebg.png');
        this.load.image('zone', 'assets/gradeAssets/NS-INT-4-G6/Hiddenzone.png');
        
        //this.load.image('kingfisher_sitting', 'assets/gradeAssets/NS-INT-4-G6/kingfishersitting.png');
        //this.load.atlas('KingFisher_JumpingWater', 'assets/gradeAssets/NS-INT-4-G6/JumpingWater.png', null, game4Json.jumpingWaterJson); 
        //this.load.atlas('kingfisher_hovering', 'assets/gradeAssets/NS-INT-4-G6/kingfisherhovering.png', null, game4Json.kingfisherhoveringJson); 
              
        
        //this.load.atlas('Numberpad','assets/gradeAssets/NS-INT-4-G6/Numberpad.png',null,game4Json.numberpadJson);
       // this.load.image('numpadbg','assets/commonAssets/numbg.png');
        //this.load.atlas('ScreenTextBox','assets/gradeAssets/NS-INT-4-G6/ScreenTextBox.png',null,game4Json.ScreenTextBox);
        
        //this.load.atlas('KingFisher_ComingUp', 'assets/gradeAssets/NS-INT-4-G6/ComingUp.png', null, game4Json.comingUpJson); 
        //this.load.atlas('KingFisher_Eatingfish', 'assets/gradeAssets/NS-INT-4-G6/EatingFish.png', null, game4Json.eatingfishJson);
        //this.load.atlas('Bubbles', 'assets/gradeAssets/NS-INT-4-G6/Bubble anim.png', null, game4Json.bubbleAnimJSon);  
        
        
        //this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, game4Json.homebtnJson);
        //this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, game4Json.nextbtnJson);
        //this.load.atlas('KingFisher_InsideWater','assets/gradeAssets/NS-INT-4-G6/InsideWater.png',null,game4Json.insideWaterJson);
        //this.load.atlas('KingFisher_ComingUpWater','assets/gradeAssets/NS-INT-4-G6/ComingupWater.png',null,game4Json.comingupWaterJson);
        //this.load.atlas('SplashWater','assets/gradeAssets/NS-INT-4-G6/SplashWater.png',null,game4Json.SplashWater);

        this.load.atlas('Nest','assets/gradeAssets/NS-INT-4-G6/Nest.png',null,game4Json.NestJson);
        
        
    }
}