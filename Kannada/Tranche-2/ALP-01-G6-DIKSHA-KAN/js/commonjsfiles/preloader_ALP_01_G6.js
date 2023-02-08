Game.preloader_ALP_01_G6=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_ALP_01_G6.prototype={
	preload:function(){
	
        this.load.video('alp01_1','demoVideos/ALP-01-G6_1.mp4');   //* include demo video of nsf-5 game.
        this.load.video('alp01_2','demoVideos/ALP-01-G6_2.mp4');   //* include demo video of nsf-5 game.
        this.load.video('alp01_3','demoVideos/ALP-01-G6_3.mp4');  
        this.load.image('skipArrow','assets/commonAssets/skipArrow.png');
        this.load.atlas('bulb','assets/commonAssets/bulb.png',null,ALP_01_G6_JSON.bulbBtnJson);      
	this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,ALP_01_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,ALP_01_G6_JSON.speakerJson);
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null,ALP_01_G6_JSON.starAnimJson);
        this.load.atlas('replay','assets/commonAssets/reply.png' ,null,ALP_01_G6_JSON.replyJson);
   
        this.load.image('navBar','assets/commonAssets/navBar.png');
        this.load.image('timebg','assets/commonAssets/timebg.png');
        this.load.image('hand','assets/commonAssets/hand.png');

        this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, ALP_01_G6_JSON.homebtnJson);
        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, ALP_01_G6_JSON.nextbtnJson);
        this.load.atlas('match1','assets/gradeAssets/ALP-01-G6/Maches_1.png', null, ALP_01_G6_JSON.matchJson);
        this.load.atlas('matchLine','assets/gradeAssets/ALP-01-G6/LineMaches.png', null, ALP_01_G6_JSON.LineJson);

        this.load.image('bg', 'assets/gradeAssets/ALP-01-G6/Bg.png');
        this.load.image('match3', 'assets/gradeAssets/ALP-01-G6/Maches_3.png');
        this.load.image('column1', 'assets/gradeAssets/ALP-01-G6/column_1.png');
        this.load.image('column2', 'assets/gradeAssets/ALP-01-G6/column_2.png');
        this.load.image('textBox', 'assets/gradeAssets/ALP-01-G6/Text box_32.png');
        this.load.image('Blue', 'assets/gradeAssets/ALP-01-G6/Blue Column.png');

        this.load.image('match2','assets/gradeAssets/ALP-01-G6/Maches_2.png');
        this.load.atlas('textbox','assets/gradeAssets/ALP-01-G6/Text box_4.png',null,ALP_01_G6_JSON.TextBox);
        this.load.atlas('white-box','assets/gradeAssets/ALP-01-G6/new box.png',null,ALP_01_G6_JSON.SquareBoxJson);
        this.load.atlas('Text box_1','assets/gradeAssets/ALP-01-G6/Text box_1.png', null, ALP_01_G6_JSON.BoxJson);
        this.load.image('Text box_2','assets/gradeAssets/ALP-01-G6/Text box_2.png');
        this.load.image('Text box_3','assets/gradeAssets/ALP-01-G6/Text box_3.png');
        this.load.image('white-box2','assets/gradeAssets/ALP-01-G6/white text box 1.png');

        this.load.atlas('TickBtn','assets/gradeAssets/ALP-01-G6/TickBtn.png',null,ALP_01_G6_JSON.TickbtnJson);
        this.load.image('BlueBg','assets/gradeAssets/ALP-01-G6/blue box.png');
        this.load.image('numpadbg','assets/gradeAssets/ALP-01-G6/numbg.png');
        this.load.atlas('Numberpad','assets/gradeAssets/ALP-01-G6/number pad.png',null,ALP_01_G6_JSON.numberpadJson);
        },

	create:function(){
		
		this.state.start('ALP_01_G6level1');
        
    },
}