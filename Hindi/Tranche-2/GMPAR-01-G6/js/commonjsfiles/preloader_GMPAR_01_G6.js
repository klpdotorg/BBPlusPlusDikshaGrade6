Game.preloader_GMPAR_01_G6=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_GMPAR_01_G6.prototype={
	preload:function(){

        this.load.video('gmpar01_1','demoVideos/GMPAR-01-G6_1.mp4');   //* include demo video of nsf-5 game.
        this.load.video('gmpar01_2','demoVideos/GMPAR-01-G6_2.mp4');   //* include demo video of nsf-5 game.
        this.load.video('gmpar01_3','demoVideos/GMPAR-01-G6_3.mp4');   //* include demo video of nsf-5 game.
        this.load.video('gmpar01_4','demoVideos/GMPAR-01-G6_4.mp4');   //* include demo video of nsf-5 game.
        this.load.image('skipArrow','assets/commonAssets/skipArrow.png');
        
        this.load.atlas('bulb','assets/commonAssets/bulb.png',null,GMPAR_01_G6_JSON.bulbBtnJson);
		
	this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null, GMPAR_01_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null, GMPAR_01_G6_JSON.speakerJson);
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null, GMPAR_01_G6_JSON.starAnimJson);
        this.load.atlas('replay','assets/commonAssets/reply.png' ,null, GMPAR_01_G6_JSON.replyJson);
        
        this.load.image('navBar','assets/commonAssets/navBar.png');
        this.load.image('timebg','assets/commonAssets/timebg.png');
        this.load.image('hand','assets/commonAssets/hand.png');

        this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, GMPAR_01_G6_JSON.homebtnJson);
        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, GMPAR_01_G6_JSON.nextbtnJson);
      
        //this.load.atlas('textbox3','assets/gradeAssets/GMPAR-01-G6/new box.png',null,GMPAR_01_G6_JSON.SquareBoxJson);
        this.load.atlas('textbox5','assets/gradeAssets/GMPAR-01-G6/Text box_5.png',null,GMPAR_01_G6_JSON.textBox5Json);
        this.load.atlas('table', 'assets/gradeAssets/GMPAR-01-G6/all box.png',null,GMPAR_01_G6_JSON.AllBoxJson); 
        this.load.atlas('pinkline', 'assets/gradeAssets/GMPAR-01-G6/line1.png',null,GMPAR_01_G6_JSON.line1Json); 
        this.load.atlas('greenline1', 'assets/gradeAssets/GMPAR-01-G6/green line_1.png',null,GMPAR_01_G6_JSON.greenLines1Json); 
        this.load.atlas('greenline2', 'assets/gradeAssets/GMPAR-01-G6/green line_2.png',null,GMPAR_01_G6_JSON.greenLines2Json); 
        this.load.atlas('greenline3', 'assets/gradeAssets/GMPAR-01-G6/green line_3.png',null,GMPAR_01_G6_JSON.greenLines3Json); 

        this.load.image('bg', 'assets/gradeAssets/GMPAR-01-G6/BG.png');
        this.load.image('mainbord', 'assets/gradeAssets/GMPAR-01-G6/main bord.png');
        // keep it for the table
        this.load.image('textBox1', 'assets/gradeAssets/GMPAR-01-G6/Text box_1.png');
        this.load.image('textbox2', 'assets/gradeAssets/GMPAR-01-G6/Text box_2.png');
        this.load.image('textbox4', 'assets/gradeAssets/GMPAR-01-G6/Text box_4.png');
        this.load.image('textbox', 'assets/gradeAssets/GMPAR-01-G6/Text box_4.png');
        
        this.load.image('eraser', 'assets/gradeAssets/GMPAR-01-G6/eraser.png');
        this.load.image('pinkPencil', 'assets/gradeAssets/GMPAR-01-G6/pink Pencil.png');
        this.load.image('Greenpencil', 'assets/gradeAssets/GMPAR-01-G6/Green pencil.png'); 
        this.load.image('dote_1', 'assets/gradeAssets/GMPAR-01-G6/dote_1.png');
        this.load.image('dote_2', 'assets/gradeAssets/GMPAR-01-G6/dote_2.png');
        this.load.image('L_line', 'assets/gradeAssets/GMPAR-01-G6/L_line.png');
        this.load.image('B_line', 'assets/gradeAssets/GMPAR-01-G6/B_line.png');
        this.load.image('S_line_1', 'assets/gradeAssets/GMPAR-01-G6/S_line_1.png');
        this.load.image('S_line_2', 'assets/gradeAssets/GMPAR-01-G6/B_line.png');
        this.load.image('tri_line1', 'assets/gradeAssets/GMPAR-01-G6/S_line_1.1.png');
        this.load.image('tri_line2', 'assets/gradeAssets/GMPAR-01-G6/S_line_1.2.png');
        this.load.image('tri_line3', 'assets/gradeAssets/GMPAR-01-G6/S_line_1.3.png');

        this.load.atlas('TickBtn','assets/gradeAssets/GMPAR-01-G6/TickBtn.png',null,GMPAR_01_G6_JSON.TickbtnJson);
        
        this.load.image('BlueBg','assets/gradeAssets/GMPAR-01-G6/blue box.png');

        this.load.image('numpadbg','assets/gradeAssets/GMPAR-01-G6/numbg.png');
        this.load.atlas('Numberpad','assets/gradeAssets/GMPAR-01-G6/number pad.png',null,GMPAR_01_G6_JSON.numberpadJson);
        },

	create:function(){
		
		this.state.start('GMPAR_01_G6level1');  
    },
}