Game.preloader_nsf_7=function(game){
	this.preloadBar=null;
};
var chime,clockTick;
Game.preloader_nsf_7.prototype={
	preload:function(){
		
        console.log("inside preloader..preload fn...");
        this.load.video('nsf7_1','demoVideos/NSF-7-G6_1.mp4');   //* include demo video of nsf-7 game.
        this.load.image('skipArrow','assets/commonAssets/skipArrow.png');
	    this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,NSF_7_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,NSF_7_G6_JSON.speakerJson);
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null,NSF_7_G6_JSON.starAnimJson);
        this.load.atlas('replay','assets/commonAssets/reply.png' ,null,NSF_7_G6_JSON.replyJson);
        this.load.atlas('btn','assets/commonAssets/btn.png',null,NSF_7_G6_JSON.btnJson);
        
        this.load.image('tittleBar','assets/commonAssets/tittleBar.png');
        this.load.image('background','assets/commonAssets/bg.png');
        this.load.image('navBar','assets/commonAssets/navBar.png');
        this.load.image('timebg','assets/commonAssets/timebg.png');
        this.load.image('topicOutline','assets/commonAssets/topicOutline.png');

        this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, NSF_7_G6_JSON.homebtnJson);
        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, NSF_7_G6_JSON.nextbtnJson);

        this.load.image('bg', 'assets/gradeAssets/NSF-7-G6/Bg.png');
        //this.load.atlas('Tick', 'assets/gradeAssets/NS-FM-1-G6/tick.png', null,NS_FM_1_G6_JSON.tickJson);
  
       //NSF-7-G6
       this.load.image('smallBox','assets/gradeAssets/NSF-7-G6/small box.png');
       this.load.image('bigBox','assets/gradeAssets/NSF-7-G6/big box.png');
      
       this.load.atlas('YG_Hz','assets/gradeAssets/NSF-7-G6/yellow&green Blocks_2.png',null,NSF_7_G6_JSON.cube_Hz_YGJson);
       
       this.load.atlas('YG_Ver','assets/gradeAssets/NSF-7-G6/yellow&green Blocks_1.png',null,NSF_7_G6_JSON.cube_Ver_YGJson);
       this.load.atlas('YB_Ver','assets/gradeAssets/NSF-7-G6/yellow&blue Blocks_1.png',null,NSF_7_G6_JSON.cube_Ver_YBJson);

       this.load.atlas('YB_Hz','assets/gradeAssets/NSF-7-G6/yellow&blue Blocks_2.png',null,NSF_7_G6_JSON.cube_Hz_YBJson);       
       this.load.atlas('newBox','assets/gradeAssets/NSF-7-G6/NSF-2B-G6 new box.png',null,NSF_7_G6_JSON.newBoxJson);
       this.load.atlas('tickbtn','assets/gradeAssets/NSF-7-G6/Right Btn.png',null,NSF_7_G6_JSON.tickBtnJson);
       this.load.atlas('lesser','assets/gradeAssets/NSF-7-G6/symbol_1.png',null,NSF_7_G6_JSON.lesserJson);
       this.load.atlas('greater','assets/gradeAssets/NSF-7-G6/symbol_2.png',null,NSF_7_G6_JSON.greaterJson);
       this.load.atlas('equal','assets/gradeAssets/NSF-7-G6/symbol_3.png',null,NSF_7_G6_JSON.equalJson);
       this.load.atlas('fraction_Bg','assets/gradeAssets/NSF-7-G6/number box 4.png',null,NSF_7_G6_JSON.fractionBgJson);
       this.load.image('hand','assets/gradeAssets/NSF-7-G6/hand.png');
    },

	create:function(){
		
		this.state.start('NSF_7_G6level1');
        
    },
}