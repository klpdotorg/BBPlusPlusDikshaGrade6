Game.preloader_nsf_10=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_nsf_10.prototype={
	preload:function(){
        this.load.video('nsf10','demoVideos/NSF-10-G6.mp4') //* include demo video of nsf-10 game.
        this.load.image('skipArrow','assets/commonAssets/skipArrow.png');
	this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,NSF_10_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,NSF_10_G6_JSON.speakerJson);
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null,NSF_10_G6_JSON.starAnimJson);
        this.load.image('NumberBox1','assets/gradeAssets/NSF-10-G6/number box_1.png');
        this.load.image('yellowtextbox','assets/gradeAssets/NSF-10-G6/yellow text box.png');
        this.load.image('numpadbg','assets/commonAssets/numbg.png');
        this.load.image('hand','assets/commonAssets/hand.png');

        this.load.atlas('Numberpad','assets/gradeAssets/NSF-10-G6/number pad.png',null,NSF_10_G6_JSON.numberpadJson);
        this.load.atlas('replay','assets/commonAssets/reply.png' ,null,NSF_10_G6_JSON.replyJson);
        this.load.atlas('btn','assets/commonAssets/btn.png',null,NSF_10_G6_JSON.btnJson);
        this.load.atlas('SquareBox','assets/gradeAssets/NSF-10-G6/NSF-10-G6 new box.png',null,NSF_10_G6_JSON.SquareBoxJson);
        
        //navbar
        this.load.image('navBar','assets/commonAssets/navBar.png');

        //time
        this.load.image('timebg','assets/commonAssets/timebg.png');

        //background
        this.load.image('bg', 'assets/gradeAssets/NSF-10-G6/Bg.png');

        //tray
        this.load.image('Tray', 'assets/gradeAssets/NSF-10-G6/Tray.png');

        //rectangle
        this.load.image('1x3traypiecesblue', 'assets/gradeAssets/NSF-10-G6/1X3 tray pieces blue.png');
        this.load.image('1x4traypiecesblue', 'assets/gradeAssets/NSF-10-G6/1X4 tray pieces blue.png');
        this.load.image('1x5traypieces', 'assets/gradeAssets/NSF-10-G6/1X5 tray pieces blue.png');
        this.load.image('1x6traypieces', 'assets/gradeAssets/NSF-10-G6/1X6tray pieces pink.png');
        this.load.image('1x9traypieces', 'assets/gradeAssets/NSF-10-G6/1X9 tray pieces.png');
        this.load.image('1x7traypieces', 'assets/gradeAssets/NSF-10-G6/1X7 tray pieces.png');
        this.load.image('1x8traypieces', 'assets/gradeAssets/NSF-10-G6/1X8 tray pieces.png');


        this.load.image('1x9base', 'assets/gradeAssets/NSF-10-G6/1X9 base.png');
        this.load.image('1x6base', 'assets/gradeAssets/NSF-10-G6/1X6 base.png');
        this.load.image('1x5base', 'assets/gradeAssets/NSF-10-G6/1X5 base.png');
        this.load.image('1x4baseblue', 'assets/gradeAssets/NSF-10-G6/1X4  blue base.png');
        this.load.image('1x3baseblue', 'assets/gradeAssets/NSF-10-G6/1X3 blue base.png');
        this.load.image('1x7base', 'assets/gradeAssets/NSF-10-G6/1X7  orange base.png');
        this.load.image('1x8base', 'assets/gradeAssets/NSF-10-G6/1X8  orange base.png');

        

        this.load.image('1x3piecesblue', 'assets/gradeAssets/NSF-10-G6/1X3 pieces blue.png');
        this.load.image('1x4piecesblue', 'assets/gradeAssets/NSF-10-G6/1X4 pieces blue.png');
        this.load.image('1x5pieces', 'assets/gradeAssets/NSF-10-G6/1X5 pieces.png');
        this.load.image('1x6pieces', 'assets/gradeAssets/NSF-10-G6/1X6 pieces.png');
        this.load.image('1x7pieces', 'assets/gradeAssets/NSF-10-G6/1X7 pieces.png');
        this.load.image('1x8pieces', 'assets/gradeAssets/NSF-10-G6/1X8 pieces.png');
        this.load.image('1x9pieces', 'assets/gradeAssets/NSF-10-G6/1X9 pieces.png');

        //square
        this.load.image('1x4traypiecespink', 'assets/gradeAssets/NSF-10-G6/1X4 tray pieces pink.png');

        this.load.image('1x4base', 'assets/gradeAssets/NSF-10-G6/1X4 base.png');

        this.load.image('1X4piecespink', 'assets/gradeAssets/NSF-10-G6/1X4 pieces pink.png');

        //circle
        this.load.image('1x3traypiecesgreen', 'assets/gradeAssets/NSF-10-G6/1X3 tray pieces green.png');
        this.load.image('1x4traypiecesgreen', 'assets/gradeAssets/NSF-10-G6/1X4 tray pieces.png');

        this.load.image('Ovalbase', 'assets/gradeAssets/NSF-10-G6/Oval base.png');
        this.load.image('1x3basegreen', 'assets/gradeAssets/NSF-10-G6/1X3  green circle  base.png');
        
        this.load.image('1X3greenpieces_1', 'assets/gradeAssets/NSF-10-G6/1X3 green pieces_1.png');
        this.load.image('1X3greenpieces_2', 'assets/gradeAssets/NSF-10-G6/1X3 green pieces_2.png');
        this.load.image('1X3greenpieces_3', 'assets/gradeAssets/NSF-10-G6/1X3 green pieces_3.png');
        this.load.image('1X4pieces_1', 'assets/gradeAssets/NSF-10-G6/1X4 pieces_1.png');
        this.load.image('1X4pieces_2', 'assets/gradeAssets/NSF-10-G6/1X4 pieces_2.png');
        this.load.image('1X4pieces_3', 'assets/gradeAssets/NSF-10-G6/1X4 pieces_3.png');
        this.load.image('1X4pieces_4', 'assets/gradeAssets/NSF-10-G6/1X4 pieces_4.png');

        this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, NSF_10_G6_JSON.homebtnJson);
        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, NSF_10_G6_JSON.nextbtnJson);
       
	},

	create:function(){
		
		this.state.start('NSF_10_G6level1');
        
    },
}