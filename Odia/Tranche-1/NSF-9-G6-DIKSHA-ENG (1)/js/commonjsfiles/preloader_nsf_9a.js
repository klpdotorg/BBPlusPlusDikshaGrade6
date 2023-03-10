Game.preloader_nsf_9a=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_nsf_9a.prototype={
	preload:function(){
		
        this.load.video('nsf9_1','demoVideos/NSF-9-G6_1.mp4');   //* include demo video of nsf-9 game.
        this.load.image('skipArrow','assets/commonAssets/skipArrow.png');
        this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,NSF_9A_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,NSF_9A_G6_JSON.speakerJson);
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null,NSF_9A_G6_JSON.starAnimJson);
        this.load.image('NumberBox1','assets/gradeAssets/NSF-9A-G6/number box_1.png');
        this.load.image('yellowtextbox','assets/gradeAssets/NSF-9A-G6/yellow text box.png');
        this.load.image('numpadbg','assets/commonAssets/numbg.png');
        this.load.image('hand','assets/commonAssets/hand.png');
        this.load.image('QuesBox','assets/gradeAssets/NSF-9A-G6/text box.png');
        this.load.image('arrow','assets/gradeAssets/NSF-9A-G6/arrow.png');
        this.load.image('scale','assets/gradeAssets/NSF-9A-G6/transparent scale.png');


        this.load.atlas('Numberpad','assets/gradeAssets/NSF-9A-G6/number pad.png',null,NSF_9A_G6_JSON.numberpadJson);
        this.load.atlas('replay','assets/commonAssets/reply.png' ,null,NSF_9A_G6_JSON.replyJson);
        this.load.atlas('btn','assets/commonAssets/btn.png',null,NSF_9A_G6_JSON.btnJson);
        this.load.atlas('SquareBox','assets/gradeAssets/NSF-9A-G6/NSF-9A-G6 new box.png',null,NSF_9A_G6_JSON.SquareBoxJson);
        // this.load.atlas('scale','assets/gradeAssets/NSF-9A-G6/scale.png',null,NSF_9A_G6_JSON.scaleJson);

        this.load.atlas('Rightbtn','assets/gradeAssets/NSF-9A-G6/Right btn0002.png',null,NSF_9A_G6_JSON.RightBtnJson);
  
        //navbar
        this.load.image('navBar','assets/commonAssets/navBar.png');

        //time
        this.load.image('timebg','assets/commonAssets/timebg.png');

        //background
        this.load.image('bg', 'assets/gradeAssets/NSF-9A-G6/Bg.png');

        //tray
        this.load.image('Tray', 'assets/gradeAssets/NSF-9A-G6/tray.png');


        this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, NSF_9A_G6_JSON.homebtnJson);
        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, NSF_9A_G6_JSON.nextbtnJson); 

        // Calling preloader for nsf-9b game
        this.preloader_nsf_9b();
       
       
	},

	create:function(){
	
		this.state.start('NSF_9A_G6level1');
        
    },

    preloader_nsf_9b:function(){

      this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,NSF_9B_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,NSF_9B_G6_JSON.speakerJson);
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null,NSF_9B_G6_JSON.starAnimJson);
        
        this.load.image('hand','assets/commonAssets/hand.png');
        this.load.image('QuesBox','assets/gradeAssets/NSF-9B-G6/text box.png');
        this.load.image('arrow','assets/gradeAssets/NSF-9B-G6/arrow.png');
        this.load.image('scale','assets/gradeAssets/NSF-9B-G6/transparent scale.png');
        this.load.image('BlueLine','assets/gradeAssets/NSF-9B-G6/blue line.png');
        this.load.image('WhiteLine','assets/gradeAssets/NSF-9B-G6/white line.png');




        // this.load.atlas('Numberpad','assets/gradeAssets/NSF-9B-G6/number pad.png',null,NSF_9B_G6_JSON.numberpadJson);
        this.load.atlas('replay','assets/commonAssets/reply.png' ,null,NSF_9B_G6_JSON.replyJson);
        this.load.atlas('btn','assets/commonAssets/btn.png',null,NSF_9B_G6_JSON.btnJson);
        this.load.atlas('TextBox2','assets/gradeAssets/NSF-9B-G6/text box_2.png',null,NSF_9B_G6_JSON.TextBox2);

        this.load.atlas('Rightbtn','assets/gradeAssets/NSF-9B-G6/Right btn0002.png',null,NSF_9B_G6_JSON.RightBtnJson);


        
        //navbar
        this.load.image('navBar','assets/commonAssets/navBar.png');

        //time
        this.load.image('timebg','assets/commonAssets/timebg.png');

        //background
        this.load.image('bg', 'assets/gradeAssets/NSF-9B-G6/Bg.png');


        this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, NSF_9B_G6_JSON.homebtnJson);
        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, NSF_9B_G6_JSON.nextbtnJson);

    },

 
}