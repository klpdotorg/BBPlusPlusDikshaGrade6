Game.preloader_GMS_02_G6=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_GMS_02_G6.prototype={
	preload:function(){

        this.load.video('gms02_1','demoVideos/GMS-02-G6.mp4');
        this.load.image('skipArrow','assets/commonAssets/skipArrow.png');
        this.load.atlas('bulb','assets/commonAssets/bulb.png',null,GMS_02_G6_JSON.bulbBtnJson);
		    this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,GMS_02_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,GMS_02_G6_JSON.speakerJson);
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null,GMS_02_G6_JSON.starAnimJson);
        this.load.image('numpadbg','assets/commonAssets/numbg.png');
        // this.load.atlas('Numberpad','assets/gradeAssets/NS-INT-13H-G6/Numberpad.png',null,GMS_02_G6_JSON.numberpadJson);

        this.load.atlas('replay','assets/commonAssets/reply.png' ,null,GMS_02_G6_JSON.replyJson);
        this.load.atlas('btn','assets/commonAssets/btn.png',null,GMS_02_G6_JSON.btnJson);
        this.load.image('hand','assets/commonAssets/hand.png');


        
        //navbar
        this.load.image('navBar','assets/commonAssets/navBar.png');

        //time
        this.load.image('timebg','assets/commonAssets/timebg.png');

        //background
        this.load.image('bg', 'assets/commonAssets/BG.png');

      
        // Skipbtn
        this.load.image('skip','assets/commonAssets/skipArrow.png');


        this.load.atlas('SquareBox','assets/gradeAssets/GMS-02-G6/new box.png',null,GMS_02_G6_JSON.SquareBoxJson);

        this.load.atlas('Numberpad','assets/gradeAssets/GMS-02-G6/number pad.png',null,GMS_02_G6_JSON.numberpadJson);
        this.load.image("GMS_02_G6_Pencil", "assets/gradeAssets/GMS-02-G6/pencil.png");

        this.load.image("butterfly", "assets/gradeAssets/GMS-02-G6/butterfly full.png");

        this.load.image("flower", "assets/gradeAssets/GMS-02-G6/flower full.png");

        this.load.image("Eraser", "assets/gradeAssets/GMS-02-G6/eraser.png");
        this.load.image("GMS_02_G6_Board", "assets/gradeAssets/GMS-02-G6/Board.png");
        this.load.image("yellowtextbox", "assets/gradeAssets/GMS-02-G6/yellow text box.png");

        this.load.atlas("GMS_02_G6_TickMark", "assets/gradeAssets/GMS-02-G6/tick.png", null, GMS_02_G6_JSON.tickJson);
   
               
        this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, GMS_02_G6_JSON.homebtnJson);
        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, GMS_02_G6_JSON.nextbtnJson);
       
	},

	create:function(){
		
		this.state.start('GMS_02_G6level1');
        
    },
}