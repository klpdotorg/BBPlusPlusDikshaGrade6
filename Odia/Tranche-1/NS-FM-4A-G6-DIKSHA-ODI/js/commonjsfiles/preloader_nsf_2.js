Game.preloader_nsf_2=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_nsf_2.prototype={
	preload:function(){
		
    console.log("inside preloader of nsf");
	this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,NSF_2_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,NSF_2_G6_JSON.speakerJson);
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null,NSF_2_G6_JSON.starAnimJson);
        this.load.atlas('replay','assets/commonAssets/reply.png' ,null,NSF_2_G6_JSON.replyJson);
        this.load.atlas('btn','assets/commonAssets/btn.png',null,NSF_2_G6_JSON.btnJson);
        
        this.load.image('tittleBar','assets/commonAssets/tittleBar.png');
        this.load.image('background','assets/commonAssets/bg.png');
        this.load.image('navBar','assets/commonAssets/navBar.png');
        this.load.image('timebg','assets/commonAssets/timebg.png');
        this.load.image('topicOutline','assets/commonAssets/topicOutline.png');

        this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, NSF_2_G6_JSON.homebtnJson);
        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, NSF_2_G6_JSON.nextbtnJson);

        this.load.image('bg', 'assets/gradeAssets/NSF-2-G6/Bg.png');
        //this.load.atlas('Tick', 'assets/gradeAssets/NS-FM-1-G6/tick.png', null,NS_FM_1_G6_JSON.tickJson);

       this.load.image('numpadbg','assets/commonAssets/numbg.png');
       this.load.atlas('Numberpad','assets/gradeAssets/NSF-2-G6/number pad.png',null,NSF_2_G6_JSON.numberpadJson);
       this.load.atlas('HorizontalCube','assets/gradeAssets/NSF-2-G6/green & yellow blocks_horizontal.png',null,NSF_2_G6_JSON.HorizontalCubeJson);
       this.load.atlas('VerticalCube','assets/gradeAssets/NSF-2-G6/blue & yellow blocks_vertica.png',null,NSF_2_G6_JSON.verticalCubeJson);
       this.load.atlas('SquareBox','assets/gradeAssets/NSF-2-G6/NSF-2-G6 new box.png',null,NSF_2_G6_JSON.SquareBoxJson);
      
       this.load.image('numberBox','assets/gradeAssets/NSF-2-G6/number box.png');

        },

	create:function(){
		
		this.state.start('NSF_2_G6level1');
        
    },
}