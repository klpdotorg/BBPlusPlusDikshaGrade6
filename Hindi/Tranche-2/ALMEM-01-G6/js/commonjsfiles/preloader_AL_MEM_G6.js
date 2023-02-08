Game.preloader_AL_MEM_G6=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_AL_MEM_G6.prototype={
	preload:function(){

        //this.load.video('nsf15_1','demoVideos/AL-MEM01-G6_1.mp4');   //* include demo video of nsf-5 game.
        this.load.image('skipArrow','assets/commonAssets/skipArrow.png');
		
	      this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,AL_MEM_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,AL_MEM_G6_JSON.speakerJson);
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null,AL_MEM_G6_JSON.starAnimJson);
        this.load.atlas('replay','assets/commonAssets/reply.png' ,null,AL_MEM_G6_JSON.replyJson);
        this.load.atlas('btn','assets/commonAssets/btn.png',null,AL_MEM_G6_JSON.btnJson);
        this.load.image('hand','assets/commonAssets/hand.png');
        
        this.load.image('tittleBar','assets/commonAssets/tittleBar.png');
        this.load.image('background','assets/commonAssets/bg.png');
        this.load.image('navBar','assets/commonAssets/navBar.png');
        this.load.image('timebg','assets/commonAssets/timebg.png');
        this.load.image('topicOutline','assets/commonAssets/topicOutline.png');
        
        this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, AL_MEM_G6_JSON.homebtnJson);
        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, AL_MEM_G6_JSON.nextbtnJson);
        //this.load.atlas('Tick', 'assets/gradeAssets/NS-FM-1-G6/tick.png', null,NS_FM_1_G6_JSON.tickJson);
  
       //NSF-2B-G6

       this.load.image('numberBox','assets/gradeAssets/AL-MEM-G6/number box.png');
       this.load.image('BG','assets/gradeAssets/AL-MEM-G6/AL-memory game BG.gif');
       this.load.image('outside','assets/gradeAssets/AL-MEM-G6/Image 1.1.png');
       this.load.image('inside','assets/gradeAssets/AL-MEM-G6/Image 1.0.png');
       this.load.image('in','assets/gradeAssets/AL-MEM-G6/Image 1.2.png');
       this.load.image('inHighlight','assets/gradeAssets/AL-MEM-G6/Image 2.2.png');

      // this.load.atlas('YB_Hz','assets/gradeAssets/AL-MEM-G6/yellow&blue Blocks_2.png',null,AL_MEM_G6_JSON.cube_Hz_YBJson);
       this.load.atlas('Thumbs_UP','assets/gradeAssets/AL-MEM-G6/thums Up.png',null,AL_MEM_G6_JSON.thums_upJSon);
       this.load.atlas('Thumbs_Down','assets/gradeAssets/AL-MEM-G6/thums down.png',null,AL_MEM_G6_JSON.thums_downJson);
       this.load.image('numpadbg','assets/gradeAssets/AL-MEM-G6/numbg.png');
       this.load.atlas('Numberpad','assets/gradeAssets/AL-MEM-G6/number pad.png',null,AL_MEM_G6_JSON.numberpadJson);
       this.load.atlas('newBox','assets/gradeAssets/AL-MEM-G6/NSF-2B-G6 new box.png',null,AL_MEM_G6_JSON.newBoxJson);
       this.load.image('hand','assets/gradeAssets/AL-MEM-G6/hand.png');
},

	create:function(){
		
		this.state.start('AL_MEM_G6level1');
        
    },
}