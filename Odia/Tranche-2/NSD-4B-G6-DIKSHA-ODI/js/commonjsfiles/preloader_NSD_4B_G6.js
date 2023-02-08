Game.preloader_NSD_4B_G6=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_NSD_4B_G6.prototype={
	preload:function(){
	
        this.load.video('nsd4b_1','demoVideos/NSD-4B-G6.mp4');
        this.load.image('skipArrow','assets/commonAssets/skipArrow.png');
        this.load.atlas('bulb','assets/commonAssets/bulb.png',null,NSD_4B_G6_JSON.bulbBtnJson);

	this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,NSD_4B_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,NSD_4B_G6_JSON.speakerJson);
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null,NSD_4B_G6_JSON.starAnimJson);
        this.load.atlas('replay','assets/commonAssets/reply.png' ,null,NSD_4B_G6_JSON.replyJson);
        
        this.load.image('navBar','assets/commonAssets/navBar.png');
        this.load.image('timebg','assets/commonAssets/timebg.png');
        this.load.image('hand','assets/commonAssets/hand.png');

       
        this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, NSD_4B_G6_JSON.homebtnJson);
        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, NSD_4B_G6_JSON.nextbtnJson);

        this.load.image('bg', 'assets/gradeAssets/NSD-4B-G6/Bg.png');

        this.load.atlas('white-box','assets/gradeAssets/NSD-4B-G6/new box.png',null,NSD_4B_G6_JSON.SquareBoxJson);

        this.load.image('Text box_1','assets/gradeAssets/NSD-4B-G6/Text box _1.png');
        this.load.image('Text box_2','assets/gradeAssets/NSD-4B-G6/Text box _2.png');

        // this.load.atlas('TickBtn','assets/gradeAssets/NSD-4B-G6/TickBtn.png',null,NSD_4B_G6_JSON.tickJson);
        

        this.load.image('numpadbg','assets/gradeAssets/NSD-4B-G6/numbg.png');
        this.load.atlas('Numberpad','assets/gradeAssets/NSD-4B-G6/number pad.png',null,NSD_4B_G6_JSON.numberpadJson);

        this.load.image('scale','assets/gradeAssets/NSD-4B-G6/Scale.png');
        this.load.image('blueline','assets/gradeAssets/NSD-4B-G6/Blue Line.png');

        

        },

	create:function(){
		
		this.state.start('NSD_4B_G6level1');
        
    },
}