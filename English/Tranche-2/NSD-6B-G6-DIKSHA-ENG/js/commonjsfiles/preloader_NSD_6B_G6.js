Game.preloader_NSD_6B_G6=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_NSD_6B_G6.prototype={
	preload:function(){
        this.load.video('nsd6b_1','demoVideos/NSD-6B-G6.mp4');   //* include demo video of game.
        this.load.image('skipArrow','assets/commonAssets/skipArrow.png');
        
        this.load.atlas('bulb','assets/commonAssets/bulb.png',null,NSD_6B_G6_JSON.bulbBtnJson);
		
	this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,NSD_6B_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,NSD_6B_G6_JSON.speakerJson);
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null,NSD_6B_G6_JSON.starAnimJson);
        this.load.atlas('replay','assets/commonAssets/reply.png' ,null,NSD_6B_G6_JSON.replyJson);
        
        this.load.image('navBar','assets/commonAssets/navBar.png');
        this.load.image('timebg','assets/commonAssets/timebg.png');
        this.load.image('hand','assets/commonAssets/hand.png');
 
        this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, NSD_6B_G6_JSON.homebtnJson);
        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, NSD_6B_G6_JSON.nextbtnJson);

        this.load.image('bg', 'assets/gradeAssets/NSD-6B-G6/BG.png');

        // Orange text boxes
        this.load.image('Text box_1','assets/gradeAssets/NSD-6B-G6/Text Box_1.png');
        this.load.image('Text box_2','assets/gradeAssets/NSD-6B-G6/Text Box_2.png');
        this.load.image('Text box 2','assets/gradeAssets/NSD-6B-G6/Text box 2.png');

        this.load.image('Text box_3','assets/gradeAssets/NSD-6B-G6/Text box_3.png');

        this.load.image('Text box','assets/gradeAssets/NSD-6B-G6/text box.png');

        this.load.atlas('Text box_4','assets/gradeAssets/NSD-6B-G6/Text box_4.png',null,NSD_6B_G6_JSON.textbox4);
        this.load.atlas('TickBtn','assets/gradeAssets/NSD-6B-G6/TickBtn.png',null,NSD_6B_G6_JSON.tickJson);

        this.load.atlas('Numberpad','assets/gradeAssets/NSD-6B-G6/number pad.png',null,NSD_6B_G6_JSON.numberpadJson)
        this.load.image('numpadbg','assets/gradeAssets/NSD-6B-G6/numbg.png');

        this.load.atlas('white-box','assets/gradeAssets/NSD-6B-G6/new box.png',null,NSD_6B_G6_JSON.SquareBoxJson);


        this.load.image('greenBox','assets/gradeAssets/NSD-6B-G6/Green box 10.png');
        this.load.image('OrangeBox','assets/gradeAssets/NSD-6B-G6/orenge box 1.png');
        this.load.image('grayBox','assets/gradeAssets/NSD-6B-G6/gray box.png');
        this.load.image('grayGridBox','assets/gradeAssets/NSD-6B-G6/Graye box 10X10.png');
        this.load.image('TextTable1','assets/gradeAssets/NSD-6B-G6/Text Table_1.png');
        this.load.image('TextTable2','assets/gradeAssets/NSD-6B-G6/Text Table_2.png');
        
        this.load.image('yellowBox','assets/gradeAssets/NSD-6B-G6/yellow box.png');

        this.load.image('grid','assets/gradeAssets/NSD-6B-G6/Gray grid.png');


        this.load.atlas('2X1_a','assets/gradeAssets/NSD-6B-G6/2X1_a.png',null,NSD_6B_G6_JSON.box2X1_a);
        this.load.atlas('2X1_b','assets/gradeAssets/NSD-6B-G6/2X1_b.png',null,NSD_6B_G6_JSON.box2X1_b);

        this.load.atlas('4X1_a','assets/gradeAssets/NSD-6B-G6/4X1_a.png',null,NSD_6B_G6_JSON.box4X1_a);
        this.load.atlas('4X1_b','assets/gradeAssets/NSD-6B-G6/4X1_b.png',null,NSD_6B_G6_JSON.box4X1_b);
        this.load.atlas('yellowbox2','assets/gradeAssets/NSD-6B-G6/yellow box 10X10.png',null,NSD_6B_G6_JSON.yellowBox);


        this.load.atlas('5X1_a','assets/gradeAssets/NSD-6B-G6/5X1_a.png',null,NSD_6B_G6_JSON.box5X1_a);
        this.load.atlas('5X1_b','assets/gradeAssets/NSD-6B-G6/5X1_b.png',null,NSD_6B_G6_JSON.box5X1_b);

        this.load.atlas('10X1_a','assets/gradeAssets/NSD-6B-G6/10X1_a.png',null,NSD_6B_G6_JSON.box10X1_a);
        this.load.atlas('10X1_b','assets/gradeAssets/NSD-6B-G6/10X1_b.png',null,NSD_6B_G6_JSON.box10X1_b);

      

        
        },

	create:function(){	
		this.state.start('NSD_6B_G6level1');
    },
}