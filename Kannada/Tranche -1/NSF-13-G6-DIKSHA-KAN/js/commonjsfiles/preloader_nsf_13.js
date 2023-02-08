Game.preloader=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader.prototype={
	preload:function(){

        this.load.video('nsf13_1','demoVideos/NSF-13-G6_1.mp4');   //* include demo video of nsf-13 game.
        this.load.image('skipArrow','assets/commonAssets/skipArrow.png');
		    this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,NSF_13_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,NSF_13_G6_JSON.speakerJson);
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null,NSF_13_G6_JSON.starAnimJson);
        this.load.image('NumberBox1','assets/gradeAssets/NSF-13-G6/number box_1.png');
        this.load.image('yellowtextbox','assets/gradeAssets/NSF-13-G6/yellow text box.png');
        this.load.image('numpadbg','assets/commonAssets/numbg.png');
        this.load.image('hand','assets/commonAssets/hand.png');
        
        this.load.atlas('Numberpad','assets/gradeAssets/NSF-13-G6/number pad.png',null,NSF_13_G6_JSON.numberpadJson);
        this.load.atlas('replay','assets/commonAssets/reply.png' ,null,NSF_13_G6_JSON.replyJson);
        this.load.atlas('btn','assets/commonAssets/btn.png',null,NSF_13_G6_JSON.btnJson);
        this.load.atlas('tickbtn','assets/commonAssets/tick.png',null,NSF_13_G6_JSON.tickJson);

        this.load.atlas('SquareBox','assets/gradeAssets/NSF-13-G6/NSF-13-G6 new box.png',null,NSF_13_G6_JSON.SquareBoxJson);
        
        //navbar
        this.load.image('navBar','assets/commonAssets/navBar.png');

        //time
        this.load.image('timebg','assets/commonAssets/timebg.png');

        //background
        this.load.image('bg', 'assets/gradeAssets/NSF-13-G6/Bg.png');

        //tray
        this.load.image('Tray', 'assets/gradeAssets/NSF-13-G6/Tray.png');

        //rectangle
        this.load.atlas('1x9rectangle', 'assets/gradeAssets/NSF-13-G6/1X9 rectangle.png', null, NSF_13_G6_JSON.Rectangle9Json);
        this.load.image('1x9pieces1', 'assets/gradeAssets/NSF-13-G6/1X9 pieces1.png');
        this.load.image('1x9rectanglebase', 'assets/gradeAssets/NSF-13-G6/1X9 rectangle base.png');
        this.load.image('1x6rectanglebase', 'assets/gradeAssets/NSF-13-G6/1X6 rectangle base.png');
        this.load.image('1x6piecesblue', 'assets/gradeAssets/NSF-13-G6/1X6 piecesblue.png');
        this.load.atlas('1x6traypiecesblue', 'assets/gradeAssets/NSF-13-G6/1X6 traypiecesblue.png', null, NSF_13_G6_JSON.Rectangle6Json);

        
        //square
        this.load.atlas('1x4traypiecespink', 'assets/gradeAssets/NSF-13-G6/1X4traypiecespink.png', null, NSF_13_G6_JSON.Square4Json);

        this.load.image('1x4squarebase', 'assets/gradeAssets/NSF-13-G6/1X4 square base.png');

        this.load.image('1X4piecespink', 'assets/gradeAssets/NSF-13-G6/1X4piecespink.png');

        //1X3
        this.load.atlas('1x3pieces', 'assets/gradeAssets/NSF-13-G6/1X3 sprit.png', null, NSF_13_G6_JSON.oneThreeJson);
        this.load.image('1x3rectangle', 'assets/gradeAssets/NSF-13-G6/1X3 pieces blue.png');
        this.load.image('1x3Base', 'assets/gradeAssets/NSF-13-G6/1X3 blue base.png');
        
        //1X5
        this.load.atlas('1x5pieces', 'assets/gradeAssets/NSF-13-G6/1X5 sprit.png', null, NSF_13_G6_JSON.oneFiveJson);
        this.load.image('1x5rectangle', 'assets/gradeAssets/NSF-13-G6/1X5 pieces.png');
        this.load.image('1x5Base', 'assets/gradeAssets/NSF-13-G6/1X5 base.png');
        
        //1X7
         this.load.atlas('1x7pieces', 'assets/gradeAssets/NSF-13-G6/1X7sprit.png', null, NSF_13_G6_JSON.oneSevenJson);
         this.load.image('1x7rectangle', 'assets/gradeAssets/NSF-13-G6/1X7 pieces.png');
         this.load.image('1x7Base', 'assets/gradeAssets/NSF-13-G6/1X7  orange base.png');
         
        //1X8
         this.load.atlas('1x8pieces', 'assets/gradeAssets/NSF-13-G6/1X8 sprit.png', null, NSF_13_G6_JSON.oneEightJson);
         this.load.image('1x8rectangle', 'assets/gradeAssets/NSF-13-G6/1X8 pieces.png');
         this.load.image('1x8Base', 'assets/gradeAssets/NSF-13-G6/1X8  orange base.png');
         
        //circle
        this.load.image('1x4circlebase', 'assets/gradeAssets/NSF-13-G6/1X4circlebase.png');
        this.load.atlas('1X4traypieces1', 'assets/gradeAssets/NSF-13-G6/1X4traypieces1.png', null, NSF_13_G6_JSON.Circle11Json);
        this.load.atlas('1X4traypieces2', 'assets/gradeAssets/NSF-13-G6/1X4traypieces2.png', null, NSF_13_G6_JSON.Circle12Json);
        this.load.atlas('1X4traypieces3', 'assets/gradeAssets/NSF-13-G6/1X4traypieces3.png', null, NSF_13_G6_JSON.Circle13Json);
        this.load.atlas('1X4traypieces4', 'assets/gradeAssets/NSF-13-G6/1X4traypieces4.png', null, NSF_13_G6_JSON.Circle14Json);

        this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, NSF_13_G6_JSON.homebtnJson);
        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, NSF_13_G6_JSON.nextbtnJson);
       
	},

	create:function(){
		
		this.state.start('NSF_13_G6level1');
        
    },
}