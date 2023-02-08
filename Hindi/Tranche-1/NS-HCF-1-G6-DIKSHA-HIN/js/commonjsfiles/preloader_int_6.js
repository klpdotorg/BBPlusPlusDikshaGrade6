Game.preloader_int_6=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_int_6.prototype={
	preload:function(){
		
        this.load.video('int_4_1','demoVideos/NS-INT-4-G6_1.mp4');  //* +ve num of fruits
        this.load.video('int_4_2','demoVideos/NS-INT-4-G6_2.mp4');  //* -ve num of fruits
        this.load.video('int_4_3','demoVideos/NS-INT-4-G6_3.mp4');  //* zero fruits

		this.load.image('skipArrow','assets/commonAssets/skipArrow.png');
        
		this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,game6Json.backbtnJson);
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,game6Json.speakerJson);
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null,game6Json.starAnimJson);
        this.load.atlas('replay','assets/commonAssets/reply.png' ,null,game6Json.replyJson);
        this.load.atlas('btn','assets/commonAssets/btn.png',null,game6Json.btnJson);
        
        this.load.image('tittleBar','assets/commonAssets/tittleBar.png');
        this.load.image('background','assets/commonAssets/bg.png');
        this.load.image('navBar','assets/commonAssets/navBar.png');
        this.load.image('timebg','assets/commonAssets/timebg.png');
        this.load.image('topicOutline','assets/commonAssets/topicOutline.png');

        //game assets.
        //this.load.image('BG_01', 'assets/gradeAssets/NS-INT-6-G6/BG_01.png');
        this.load.image('practice','assets/gradeAssets/NS-INT-6-G6/practice.png');
        this.load.image('topic','assets/gradeAssets/NS-INT-6-G6/topic.png');
        //this.load.image('Tick', 'assets/gradeAssets/2.1.1/Tick.png');
        

        this.load.atlas('Tick', 'assets/gradeAssets/NS-INT-6-G6/tick.png', null,game6Json.tickJson);
            
        
        this.load.image('Q4_bg', 'assets/gradeAssets/NS-INT-6-G6/Bg.png');
         
        this.load.atlas('ScreenTextBox','assets/gradeAssets/NS-INT-6-G6/ScreenTextBox.png',null,game6Json.ScreenTextBox);
        
        
        this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, game6Json.homebtnJson);
        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, game6Json.nextbtnJson);


        this.load.image('DragBox', 'assets/gradeAssets/NS-INT-6-G6/dragingBox.png');
        this.load.image('minusCounter', 'assets/gradeAssets/NS-INT-6-G6/minusCounter.png');
        this.load.image('plusCounter', 'assets/gradeAssets/NS-INT-6-G6/plusCounter.png');
        this.load.image('overLap', 'assets/gradeAssets/NS-INT-6-G6/timebg.png');
        this.load.image('gaadi', 'assets/gradeAssets/NS-INT-6-G6/street  food gaadi.png');
        this.load.image('base', 'assets/gradeAssets/NS-INT-6-G6/main panale.png');
        this.load.image('box', 'assets/gradeAssets/NS-INT-6-G6/Box panle.png');
        this.load.image('plus', 'assets/gradeAssets/NS-INT-6-G6/+ symbol.png');
        this.load.image('minus', 'assets/gradeAssets/NS-INT-6-G6/- symbol.png');
        this.load.image('zero', 'assets/gradeAssets/NS-INT-6-G6/o symbol.png');
        this.load.image('apple', 'assets/gradeAssets/NS-INT-6-G6/apple.png');
        this.load.image('numpadbg','assets/commonAssets/numbg.png');
        this.load.image('thoughtBubble','assets/gradeAssets/NS-INT-6-G6/cloude.png');
        this.load.image('tray','assets/gradeAssets/NS-INT-6-G6/tray.png');
        this.load.image('mapple','assets/gradeAssets/NS-INT-6-G6/new _apple1.png');
        this.load.image('papple','assets/gradeAssets/NS-INT-6-G6/new _apple2.png');
 
        this.load.atlas('Store_man','assets/gradeAssets/NS-INT-6-G6/store man anim.png',null,game6Json.storeManJson);
        this.load.atlas('BoyGirl','assets/gradeAssets/NS-INT-6-G6/boy and girl.png',null,game6Json.boyGirlJson);
        this.load.atlas('plusMinusZero','assets/gradeAssets/NS-INT-6-G6/Symbol +-O.png',null,game6Json.plusMinusZeroJson);
        this.load.atlas('Numberpad','assets/gradeAssets/NS-INT-6-G6/Numberpad.png',null,game6Json.numberpadJson);
        this.load.atlas('lightApple','assets/gradeAssets/NS-INT-6-G6/Light_apple_anm_1.png',null,game6Json.lightAppleJson);
        this.load.atlas('spriteApple','assets/gradeAssets/NS-INT-6-G6/apple_anm_1.png',null,game6Json.appleJson);
        this.load.atlas('plusApple','assets/gradeAssets/NS-INT-6-G6/apple_anm_+.png',null,game6Json.plusAppleJson);
        this.load.atlas('minusApple','assets/gradeAssets/NS-INT-6-G6/apple_anm_-.png',null,game6Json.minusAppleJson);
        this.load.atlas('Bellanim','assets/gradeAssets/NS-INT-6-G6/Bell anim.png',null,game6Json.BellanimJson);
        this.load.atlas('minusGlow','assets/gradeAssets/NS-INT-6-G6/- symbol_glow.png',null,game6Json.minusglowJson);
        this.load.atlas('plusGlow','assets/gradeAssets/NS-INT-6-G6/+ symbol_glow.png',null,game6Json.plusglowJson);
       
	},

	create:function(){
		
		this.state.start('NS_INT_4_G6demo');
        
    },
}