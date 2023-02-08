Game.preloader_nsf_12=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_nsf_12.prototype={
	preload:function(){
		
        this.load.video('nsf12_1','demoVideos/NSF-12-G6.mp4');   //* include demo video of nsf-5 game.
        this.load.image('skipArrow','assets/commonAssets/skipArrow.png');
	      this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,NSF_12_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,NSF_12_G6_JSON.speakerJson);
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null,NSF_12_G6_JSON.starAnimJson);
        this.load.atlas('replay','assets/commonAssets/reply.png' ,null,NSF_12_G6_JSON.replyJson);
        this.load.atlas('btn','assets/commonAssets/btn.png',null,NSF_12_G6_JSON.btnJson);
        
        this.load.image('tittleBar','assets/commonAssets/tittleBar.png');
        this.load.image('background','assets/commonAssets/bg.png');
        this.load.image('navBar','assets/commonAssets/navBar.png');
        this.load.image('timebg','assets/commonAssets/timebg.png');
        this.load.image('topicOutline','assets/commonAssets/topicOutline.png');
        

        this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, NSF_12_G6_JSON.homebtnJson);
        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, NSF_12_G6_JSON.nextbtnJson);

        this.load.image('bg', 'assets/gradeAssets/NSF-12-G6/Bg.png');
        //this.load.atlas('Tick', 'assets/gradeAssets/NS-FM-1-G6/tick.png', null,NS_FM_1_G6_JSON.tickJson);
  
       //NSF-2B-G6
       this.load.image('bigBox','assets/gradeAssets/NSF-12-G6/tary_1.png');
       this.load.image('Green_cube','assets/gradeAssets/NSF-12-G6/green briks single.png');
       this.load.image('bigBox_2','assets/gradeAssets/NSF-12-G6/tary_3.png');
       this.load.image('bigBox_1','assets/gradeAssets/NSF-12-G6/tary_2.png');
       this.load.image('smallBox','assets/gradeAssets/NSF-12-G6/small_box.png');
       this.load.image('smallBox_1','assets/gradeAssets/NSF-12-G6/small box.png');
       this.load.image('numberBox','assets/gradeAssets/NSF-12-G6/number box.png');
       this.load.atlas('fraction_Bg','assets/gradeAssets/NSF-12-G6/number box 5 new.png',null,NSF_12_G6_JSON.background_fractionJson);
       this.load.atlas('YG_Hz','assets/gradeAssets/NSF-12-G6/yellow&green Blocks_2.png',null,NSF_12_G6_JSON.cube_Hz_YGJson);
       this.load.atlas('4-colour-cube','assets/gradeAssets/NSF-12-G6/4 color briks.png',null,NSF_12_G6_JSON.cubes_4_verticalJson);
       this.load.atlas('4-colour-cube_Horizontal','assets/gradeAssets/NSF-12-G6/4 color briks_Horizontal.png',null,NSF_12_G6_JSON.cubes_4_HorizontalJson);

       this.load.atlas('YG_Ver','assets/gradeAssets/NSF-12-G6/yellow&green Blocks_1.png',null,NSF_12_G6_JSON.cube_Ver_YGJson);
       this.load.atlas('YB_Ver','assets/gradeAssets/NSF-12-G6/yellow&blue Blocks_1.png',null,NSF_12_G6_JSON.cube_Ver_YBJson);

       this.load.atlas('YB_Hz','assets/gradeAssets/NSF-12-G6/yellow&blue Blocks_2.png',null,NSF_12_G6_JSON.cube_Hz_YBJson);
       this.load.atlas('Thumbs_UP','assets/gradeAssets/NSF-12-G6/thums Up.png',null,NSF_12_G6_JSON.thums_upJSon);
       this.load.atlas('Thumbs_Down','assets/gradeAssets/NSF-12-G6/thums down.png',null,NSF_12_G6_JSON.thums_downJson);
       this.load.image('numpadbg','assets/gradeAssets/NSF-12-G6/numbg.png');
       this.load.atlas('Numberpad','assets/gradeAssets/NSF-12-G6/number pad.png',null,NSF_12_G6_JSON.numberpadJson);
       this.load.atlas('newBox','assets/gradeAssets/NSF-12-G6/NSF-2B-G6 new box.png',null,NSF_12_G6_JSON.newBoxJson);
       this.load.image('blueLine','assets/gradeAssets/NSF-12-G6/Line_1.png');
       this.load.image('hand','assets/gradeAssets/NSF-12-G6/hand.png');
},

	create:function(){
		
		this.state.start('NSF_12_G6level1');
        
    },
}