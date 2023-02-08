Game.preloader_nsf_9b=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_nsf_9b.prototype={
	preload:function(){
		
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

	create:function(){
		
		this.state.start('NSF_9B_G6level1');
        
    },
       
}