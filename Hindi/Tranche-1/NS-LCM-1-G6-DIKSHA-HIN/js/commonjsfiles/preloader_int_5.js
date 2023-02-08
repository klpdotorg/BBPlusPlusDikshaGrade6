Game.preloader_int_5=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_int_5.prototype={
	preload:function(){
        

        this.load.video('int_3_1','demoVideos/NS-INT-3-G6_1.mp4');  //* intro to game
        this.load.video('int_3_2','demoVideos/NS-INT-3-G6_2.mp4');  //* int5 game playing

		this.load.image('skipArrow','assets/commonAssets/skipArrow.png');
		
        this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,game5Json.backbtnJson);
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,game5Json.speakerJson);
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null,game5Json.starAnimJson);
        this.load.atlas('replay','assets/commonAssets/reply.png' ,null,game5Json.replyJson);
        this.load.atlas('btn','assets/commonAssets/btn.png',null,game5Json.btnJson);
        
        this.load.image('tittleBar','assets/commonAssets/tittleBar.png');
        this.load.image('background','assets/commonAssets/bg.png');
        this.load.image('navBar','assets/commonAssets/navBar.png');
        this.load.image('timebg','assets/commonAssets/timebg.png');
        this.load.image('topicOutline','assets/commonAssets/topicOutline.png');
        this.load.image('Transparent','assets/commonAssets/transparent.png'); 

        //game assets.
        //this.load.image('BG_01', 'assets/gradeAssets/NS-INT-5-G6/BG_01.png');
        this.load.image('practice','assets/gradeAssets/NS-INT-5-G6/practice.png');
        this.load.image('topic','assets/gradeAssets/NS-INT-5-G6/topic.png');
        //this.load.image('Tick', 'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.atlas('Tick', 'assets/gradeAssets/NS-INT-5-G6/tick.png', null,game5Json.tickJson);
        
        this.load.image('Q5_bg', 'assets/gradeAssets/NS-INT-5-G6/Q3_bg.png');
        this.load.image('level_scale', 'assets/gradeAssets/NS-INT-5-G6/Scale.png');

        this.load.atlas('Fish_1', 'assets/gradeAssets/NS-INT-5-G6/Fish_1.png', null, game5Json.fish_1Json);
        this.load.atlas('Fish_2', 'assets/gradeAssets/NS-INT-5-G6/Fish_2.png', null, game5Json.fish_2Json);
        this.load.atlas('Fish_3', 'assets/gradeAssets/NS-INT-5-G6/Fish_3.png', null, game5Json.fish_3Json);

        this.load.image('swimselect1', 'assets/gradeAssets/NS-INT-5-G6/swimselect1.png');
        this.load.image('swimselect2', 'assets/gradeAssets/NS-INT-5-G6/swimselect2.png');
        this.load.image('swimselect3', 'assets/gradeAssets/NS-INT-5-G6/swimselect3.png');
        
        this.load.image('kingfisher_sitting1', 'assets/gradeAssets/NS-INT-5-G6/kingfishersitting1.png');
        this.load.image('kingfisher_sitting2', 'assets/gradeAssets/NS-INT-5-G6/kingfishersitting2.png');
        this.load.image('kingfisher_sitting3', 'assets/gradeAssets/NS-INT-5-G6/kingfishersitting3.png');
        
        this.load.image('sitselect1', 'assets/gradeAssets/NS-INT-5-G6/sitselect1.png');
        this.load.image('sitselect2', 'assets/gradeAssets/NS-INT-5-G6/sitselect2.png');
        this.load.image('sitselect3', 'assets/gradeAssets/NS-INT-5-G6/sitselect3.png');        
        
        this.load.atlas('KingFisher_JumpingWater1', 'assets/gradeAssets/NS-INT-5-G6/JumpingWater1.png', null, game5Json.jumpingWaterJson1);
        this.load.atlas('KingFisher_JumpingWater2', 'assets/gradeAssets/NS-INT-5-G6/JumpingWater2.png', null, game5Json.jumpingWaterJson2); 
        this.load.atlas('KingFisher_JumpingWater3', 'assets/gradeAssets/NS-INT-5-G6/JumpingWater3.png', null, game5Json.jumpingWaterJson3); 
                
        this.load.atlas('KingFisher_InsideWater','assets/gradeAssets/NS-INT-5-G6/InsideWater.png',null,game5Json.insideWaterJson);
        
        this.load.atlas('KingFisher_ComingUpWater1', 'assets/gradeAssets/NS-INT-5-G6/ComingupWater1.png', null, game5Json.comingupWaterJson1);
        this.load.atlas('KingFisher_ComingUpWater2', 'assets/gradeAssets/NS-INT-5-G6/ComingupWater2.png', null, game5Json.comingupWaterJson2);
        this.load.atlas('KingFisher_ComingUpWater3','assets/gradeAssets/NS-INT-5-G6/ComingupWater3.png', null, game5Json.comingupWaterJson3);
        
        this.load.atlas('KingFisher_ComingUp1', 'assets/gradeAssets/NS-INT-5-G6/ComingUp1.png', null, game5Json.comingUpJson1);
        this.load.atlas('KingFisher_ComingUp2', 'assets/gradeAssets/NS-INT-5-G6/ComingUp2.png', null, game5Json.comingUpJson2);
        this.load.atlas('KingFisher_ComingUp3', 'assets/gradeAssets/NS-INT-5-G6/ComingUp3.png', null, game5Json.comingUpJson3);
        
        this.load.atlas('KingFisher_Eatingfish1', 'assets/gradeAssets/NS-INT-5-G6/EatingFish1.png', null, game5Json.eatingfishJson1); 
        this.load.atlas('KingFisher_Eatingfish2', 'assets/gradeAssets/NS-INT-5-G6/EatingFish2.png', null, game5Json.eatingfishJson2);         
        this.load.atlas('KingFisher_Eatingfish3', 'assets/gradeAssets/NS-INT-5-G6/EatingFish3.png', null, game5Json.eatingfishJson3);    
        
        this.load.atlas('SplashWater','assets/gradeAssets/NS-INT-5-G6/SplashWater.png',null,game5Json.SplashWater);

        this.load.image('flyselect1', 'assets/gradeAssets/NS-INT-5-G6/flyselect1.png');
        this.load.image('flyselect2', 'assets/gradeAssets/NS-INT-5-G6/flyselect2.png');
        this.load.image('flyselect3', 'assets/gradeAssets/NS-INT-5-G6/flyselect3.png');      
    
        this.load.atlas('kingfisher_hovering1', 'assets/gradeAssets/NS-INT-5-G6/kingfisherhovering1.png', null, game5Json.kingfisherhoveringJson);       
        this.load.atlas('kingfisher_hovering2', 'assets/gradeAssets/NS-INT-5-G6/kingfisherhovering2.png', null, game5Json.kingfisherhoveringJson); 
        this.load.atlas('kingfisher_hovering3', 'assets/gradeAssets/NS-INT-5-G6/kingfisherhovering3.png', null, game5Json.kingfisherhoveringJson); 
        
        this.load.atlas('Numberpad','assets/gradeAssets/NS-INT-5-G6/Numberpad.png',null,game5Json.numberpadJson);
        this.load.image('numpadbg','assets/commonAssets/numbg.png');
        this.load.atlas('ScreenTextBox','assets/gradeAssets/NS-INT-5-G6/ScreenTextBox.png',null,game5Json.ScreenTextBox);
        
        this.load.atlas('KingFisher_ComingUp', 'assets/gradeAssets/NS-INT-5-G6/ComingUp.png', null, game5Json.comingUpJson); 
        this.load.atlas('KingFisher_Eatingfish', 'assets/gradeAssets/NS-INT-5-G6/EatingFish.png', null, game5Json.eatingfishJson); 
        this.load.atlas('Bubbles', 'assets/gradeAssets/NS-INT-5-G6/Bubble anim.png', null, game5Json.bubbleAnimJSon);  
        
        this.load.image('HiddenZone', 'assets/gradeAssets/NS-INT-5-G6/Hiddenzone.png');
        
        
	},

	create:function(){
		
		this.state.start('NS_INT_3_G6demo');
        
    },
}