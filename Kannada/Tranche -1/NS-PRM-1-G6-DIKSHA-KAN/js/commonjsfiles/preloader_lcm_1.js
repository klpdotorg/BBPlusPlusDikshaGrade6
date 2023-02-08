Game.preloader_lcm_1=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_lcm_1.prototype={
	preload:function(){
		
        this.load.video('lcm_1_1','demoVideos/NS-LCM-1-G6_1.mp4');  //* intro to LCM
        this.load.video('lcm_1_2','demoVideos/NS-LCM-1-G6_2.mp4');  //* PLAYING THE GAME

        this.load.image('skipArrow','assets/commonAssets/skipArrow.png');        

		this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,NS_LCM_1_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,NS_LCM_1_G6_JSON.speakerJson);
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null,NS_LCM_1_G6_JSON.starAnimJson);
        this.load.image('numpadbg','assets/commonAssets/numbg.png');
        this.load.image('TextBox','assets/gradeAssets/NS-LCM-1-G6/text box2.png');
        this.load.atlas('Numberpad','assets/gradeAssets/NS-LCM-1-G6/number pad.png',null,NS_LCM_1_G6_JSON.numberpadJson);
        this.load.atlas('replay','assets/commonAssets/reply.png' ,null,NS_LCM_1_G6_JSON.replyJson);
        this.load.atlas('btn','assets/commonAssets/btn.png',null,NS_LCM_1_G6_JSON.btnJson);
        
        this.load.image('tittleBar','assets/commonAssets/tittleBar.png');
        this.load.image('background','assets/commonAssets/bg7.2.png');
        this.load.image('navBar','assets/commonAssets/navBar.png');
        this.load.image('timebg','assets/commonAssets/timebg.png');
        this.load.image('bg', 'assets/gradeAssets/NS-LCM-1-G6/BG.png');

        this.load.atlas('FourColorBox','assets/gradeAssets/NS-LCM-1-G6/4 color box.png',null,NS_LCM_1_G6_JSON.fourColorBox);

        this.load.image('EmptyBox', 'assets/gradeAssets/NS-LCM-1-G6/image_2.png');
        this.load.image('EmptyBox_Glow', 'assets/gradeAssets/NS-LCM-1-G6/image_4.png');
        this.load.image('RedBox', 'assets/gradeAssets/NS-LCM-1-G6/Red box.png');

        this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, NS_PRM_1_G6_JSON.homebtnJson);
        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, NS_PRM_1_G6_JSON.nextbtnJson);
        this.load.image('hand','assets/gradeAssets/NS-LCM-1-G6/hand.png');

	},

	create:function(){
		
		this.state.start('NS_LCM_1_G6demo');
    },
}