Game.preloader_nsf_11=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_nsf_11.prototype={
	preload:function(){

        this.load.video('nsf11','demoVideos/NSF-11-G6.mp4');   //* include demo video of nsf-11 game.
	this.load.image('skipArrow','assets/commonAssets/skipArrow.png');	
	this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,NSF_11_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,NSF_11_G6_JSON.speakerJson);
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null,NSF_11_G6_JSON.starAnimJson);
        this.load.image('numberBox','assets/gradeAssets/NSF-11-G6/number box_1.png');
        this.load.image('yellowtextbox','assets/gradeAssets/NSF-11-G6/yellow text box.png');
        this.load.image('numpadbg','assets/commonAssets/numbg.png');
        this.load.atlas('Numberpad','assets/gradeAssets/NSF-11-G6/number pad.png',null,NSF_11_G6_JSON.numberpadJson);
        this.load.atlas('replay','assets/commonAssets/reply.png' ,null,NSF_11_G6_JSON.replyJson);
        this.load.atlas('btn','assets/commonAssets/btn.png',null,NSF_11_G6_JSON.btnJson);
        this.load.atlas('SquareBox','assets/gradeAssets/NSF-11-G6/NSF-11-G6 new box.png',null,NSF_11_G6_JSON.SquareBoxJson);
        this.load.image('hand','assets/commonAssets/hand.png');

        this.load.atlas('HorizontalCube','assets/gradeAssets/NSF-11-G6/all color briks_1.png',null,NSF_11_G6_JSON.HorizontalCubeJson);
       this.load.atlas('VerticalCube','assets/gradeAssets/NSF-11-G6/all color briks_2.1.png',null,NSF_11_G6_JSON.verticalCubeJson);
        
        
        //navbar
        this.load.image('navBar','assets/commonAssets/navBar.png');

        //time
        this.load.image('timebg','assets/commonAssets/timebg.png');

        //background
        this.load.image('bg', 'assets/gradeAssets/NSF-11-G6/BG.png');

        //tray
        this.load.image('Tray', 'assets/gradeAssets/NSF-11-G6/Tray.png');

        
        
      
        this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, NSF_11_G6_JSON.homebtnJson);
        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, NSF_11_G6_JSON.nextbtnJson);
       
	},

	create:function(){
		
		this.state.start('NSF_11_G6level1');
        
    },
}