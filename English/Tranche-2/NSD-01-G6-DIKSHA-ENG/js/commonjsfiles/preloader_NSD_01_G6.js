Game.preloader_NSD_01_G6=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_NSD_01_G6.prototype={
	preload:function(){

        this.load.video('nsd01_1','demoVideos/NSD-1-G6.mp4');
        this.load.image('skipArrow','assets/commonAssets/skipArrow.png');
        this.load.atlas('bulb','assets/commonAssets/bulb.png',null,NSD_1_G6_JSON.bulbBtnJson); 
		
	this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,NSD_1_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,NSD_1_G6_JSON.speakerJson);
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null,NSD_1_G6_JSON.starAnimJson);
        this.load.atlas('replay','assets/commonAssets/reply.png' ,null,NSD_1_G6_JSON.replyJson);
        
        this.load.image('navBar','assets/commonAssets/navBar.png');
        this.load.image('timebg','assets/commonAssets/timebg.png');
        this.load.image('hand','assets/commonAssets/hand.png');

       
        this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, NSD_1_G6_JSON.homebtnJson);
        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, NSD_1_G6_JSON.nextbtnJson);

        this.load.image('bg', 'assets/gradeAssets/NSD-01-G6/Bg.png');

        // Box with frame
        this.load.atlas('white-box','assets/gradeAssets/NSD-01-G6/new box.png',null,NSD_1_G6_JSON.SquareBoxJson);

        this.load.image('Text box_1','assets/gradeAssets/NSD-01-G6/text box_1.png');
        this.load.image('Text box_2','assets/gradeAssets/NSD-01-G6/text box_2.png');
        this.load.image('Text box_3','assets/gradeAssets/NSD-01-G6/Text Box_3.png');

        this.load.image('white-box2','assets/gradeAssets/NSD-01-G6/white text box 1.png');

        this.load.atlas('TickBtn','assets/gradeAssets/NSD-01-G6/TickBtn.png',null,NSD_1_G6_JSON.TickbtnJson);
        

        this.load.image('numpadbg','assets/gradeAssets/NSD-01-G6/numbg.png');
        this.load.atlas('Numberpad','assets/gradeAssets/NSD-01-G6/number pad.png',null,NSD_1_G6_JSON.numberpadJson);

        // Game objects
        this.load.image('gray-box','assets/gradeAssets/NSD-01-G6/Graye box 10X10.png');
        this.load.image('green-box','assets/gradeAssets/NSD-01-G6/Green box 10.png');
        this.load.image('orange-box','assets/gradeAssets/NSD-01-G6/orenge box 1.png');
        this.load.atlas('yellow-box','assets/gradeAssets/NSD-01-G6/yellow box 10X10.png',null,NSD_1_G6_JSON.YellowBoxJson);
        this.load.image('TextTable1','assets/gradeAssets/NSD-01-G6/Text Table_1.png');
        this.load.image('TextTable2','assets/gradeAssets/NSD-01-G6/Text Table_2.png');


        },

	create:function(){
		
		this.state.start('NSD_1_G6level1');
        
    },
}