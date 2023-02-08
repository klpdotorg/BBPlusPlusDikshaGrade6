Game.preloader_NSD_2A_G6=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_NSD_2A_G6.prototype={
	preload:function(){
		
        this.load.video('nsd2a_1','demoVideos/NSD-2A-G6.mp4');   //* include demo video of nsf-5 game.
        this.load.image('skipArrow','assets/commonAssets/skipArrow.png');        
        this.load.atlas('bulb','assets/commonAssets/bulb.png',null,NSD_2A_G6_JSON.bulbBtnJson);
                        
	this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,NSD_2A_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,NSD_2A_G6_JSON.speakerJson);
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null,NSD_2A_G6_JSON.starAnimJson);
        this.load.atlas('replay','assets/commonAssets/reply.png' ,null,NSD_2A_G6_JSON.replyJson);
        
        this.load.image('navBar','assets/commonAssets/navBar.png');
        this.load.image('timebg','assets/commonAssets/timebg.png');
        this.load.image('hand','assets/commonAssets/hand.png');

       
        this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, NSD_2A_G6_JSON.homebtnJson);
        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, NSD_2A_G6_JSON.nextbtnJson);

        this.load.image('bg', 'assets/gradeAssets/NSD-2A-G6/Bg.png');
        this.load.image('divisionline', 'assets/gradeAssets/NSD-2A-G6/divisionline.png');
        this.load.image('brownbox', 'assets/gradeAssets/NSD-2A-G6/singlebox.png');
        this.load.image('tensbox', 'assets/gradeAssets/NSD-2A-G6/TensBox.png');
        this.load.image('Scorebox1', 'assets/gradeAssets/NSD-2A-G6/Scorebox1.png');
        this.load.image('sidebox', 'assets/gradeAssets/NSD-2A-G6/whitebox.png');




        // Box with frame
        this.load.atlas('white-box','assets/gradeAssets/NSD-2A-G6/new box.png',null,NSD_2A_G6_JSON.SquareBoxJson);

       
        this.load.atlas('TickBtn','assets/gradeAssets/NSD-2A-G6/TickBtn.png',null,NSD_2A_G6_JSON.TickbtnJson);
        

        this.load.image('numpadbg','assets/gradeAssets/NSD-2A-G6/numbg.png');
        this.load.atlas('Numberpad','assets/gradeAssets/NSD-2A-G6/number pad.png',null,NSD_2A_G6_JSON.numberpadJson);

        // Game objects
        this.load.atlas('gray-box','assets/gradeAssets/NSD-2A-G6/GrayBox.png',null,NSD_2A_G6_JSON.grayboxJson);
        this.load.atlas('fraction-score-box1','assets/gradeAssets/NSD-2A-G6/fractionscorebox.png',null,NSD_2A_G6_JSON.fractionScoreBox);
        this.load.atlas('fraction-score-box2','assets/gradeAssets/NSD-2A-G6/fractionscorebox2.png',null,NSD_2A_G6_JSON.fractionScoreBox2);
        this.load.atlas('box1','assets/gradeAssets/NSD-2A-G6/b1.png',null,NSD_2A_G6_JSON.box1);
        this.load.atlas('brownbox1','assets/gradeAssets/NSD-2A-G6/singlebox1.png',null,NSD_2A_G6_JSON.brownbox1Json);
       
        },

	create:function(){
		
		this.state.start('NSD_2A_G6level1');
        
    },
}