Game.preloader_GMS_01_G6=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_GMS_01_G6.prototype={
	preload:function(){
	
        this.load.video('gms01_1','demoVideos/GMS-01-G6.mp4');
        this.load.image('skipArrow','assets/commonAssets/skipArrow.png');
        this.load.atlas('bulb','assets/commonAssets/bulb.png',null,GMS_01_G6_JSON.bulbBtnJson); 
        this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,GMS_01_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,GMS_01_G6_JSON.speakerJson);
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null,GMS_01_G6_JSON.starAnimJson);
        this.load.image('numpadbg','assets/commonAssets/numbg.png');
        // this.load.atlas('Numberpad','assets/gradeAssets/NS-INT-13H-G6/Numberpad.png',null,GMS_01_G6_JSON.numberpadJson);

        this.load.atlas('replay','assets/commonAssets/reply.png' ,null,GMS_01_G6_JSON.replyJson);
        this.load.atlas('btn','assets/commonAssets/btn.png',null,GMS_01_G6_JSON.btnJson);
        this.load.image('hand','assets/commonAssets/hand.png');

        
        //navbar
        this.load.image('navBar','assets/commonAssets/navBar.png');

        //time
        this.load.image('timebg','assets/commonAssets/timebg.png');

        //background
        this.load.image('bg', 'assets/commonAssets/BG.png');

      
        // Skipbtn
        this.load.image('skip','assets/commonAssets/skipArrow.png');

        
        this.load.atlas("GMS_01_G6_image_anim1", "assets/gradeAssets/GMS-01-G6/1.png", null, GMS_01_G6_JSON.Json1);

        this.load.atlas("GMS_01_G6_image_anim2", "assets/gradeAssets/GMS-01-G6/2.png", null, GMS_01_G6_JSON.Json2);

        this.load.atlas("GMS_01_G6_image_anim3", "assets/gradeAssets/GMS-01-G6/3.png", null, GMS_01_G6_JSON.Json3);

        this.load.atlas("GMS_01_G6_image_anim4", "assets/gradeAssets/GMS-01-G6/4.png", null, GMS_01_G6_JSON.Json4);

        //        this.load.image("image5","assets/gradeAssets/GMS_01_G6/image_5.png");
        this.load.atlas("GMS_01_G6_image_anim5", "assets/gradeAssets/GMS-01-G6/5.png", null, GMS_01_G6_JSON.Json5);

        //        this.load.image("image6","assets/gradeAssets/GMS_01_G6/image_6.png");
        this.load.atlas("GMS_01_G6_image_anim6", "assets/gradeAssets/GMS-01-G6/6.png", null, GMS_01_G6_JSON.Json6);

        //        this.load.image("image7","assets/gradeAssets/GMS_01_G6/image_7.png");
        this.load.atlas("GMS_01_G6_image_anim7", "assets/gradeAssets/GMS-01-G6/7.png", null, GMS_01_G6_JSON.Json7);

        //        this.load.image("image8","assets/gradeAssets/GMS_01_G6/image_8.png");
        this.load.atlas("GMS_01_G6_image_anim8", "assets/gradeAssets/GMS-01-G6/8.png", null, GMS_01_G6_JSON.Json8);

        //        this.load.image("image9","assets/gradeAssets/GMS_01_G6/image_9.png");
        this.load.atlas("GMS_01_G6_image_anim9", "assets/gradeAssets/GMS-01-G6/9.png", null, GMS_01_G6_JSON.Json9);

        //        this.load.image("image10","assets/gradeAssets/GMS_01_G6/image_10.png");
        this.load.atlas("GMS_01_G6_image_anim10", "assets/gradeAssets/GMS-01-G6/10.png", null, GMS_01_G6_JSON.Json10);

        //        this.load.image("image11","assets/gradeAssets/GMS_01_G6/image_11.png");
        this.load.atlas("GMS_01_G6_image_anim11", "assets/gradeAssets/GMS-01-G6/11.png", null, GMS_01_G6_JSON.Json11);

        //        this.load.image("image12","assets/gradeAssets/GMS_01_G6/image_12.png");
        this.load.atlas("GMS_01_G6_image_anim12", "assets/gradeAssets/GMS-01-G6/12.png", null, GMS_01_G6_JSON.Json12);
        this.load.atlas("GMS_01_G6_image_animHr1", "assets/gradeAssets/GMS-01-G6/5.png", null, GMS_01_G6_JSON.JsonHr1);
        this.load.atlas("GMS_01_G6_image_animHr5", "assets/gradeAssets/GMS-01-G6/9.png", null, GMS_01_G6_JSON.JsonHr5);

        this.load.atlas("GMS_01_G6_image_animHr3", "assets/gradeAssets/GMS-01-G6/8.png", null, GMS_01_G6_JSON.JsonHr3);

        this.load.atlas("GMS_01_G6_image_animHr4", "assets/gradeAssets/GMS-01-G6/11.png", null, GMS_01_G6_JSON.JsonHr4);




        this.load.image("GMS_01_G6_Pencil", "assets/gradeAssets/GMS-01-G6/pencil.png");
        this.load.image("GMS_01_G6_Eraser", "assets/gradeAssets/GMS-01-G6/eraser.png");
        this.load.image("GMS_01_G6_Board", "assets/gradeAssets/GMS-01-G6/Board.png");
        this.load.atlas("GMS_01_G6_TickMark", "assets/gradeAssets/GMS-01-G6/tick.png", null, GMS_01_G6_JSON.tickJson);
   
               
        this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, GMS_01_G6_JSON.homebtnJson);
        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, GMS_01_G6_JSON.nextbtnJson);
       
	},

	create:function(){
		
		this.state.start('GMS_01_G6level1');
        
    },
}