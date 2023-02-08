Game.preloader_NSD_4E_G6=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_NSD_4E_G6.prototype={
	preload:function(){
	
        this.load.video('nsd4e_1','demoVideos/NSD-4E-G6.mp4');
        this.load.image('skipArrow','assets/commonAssets/skipArrow.png');
        this.load.atlas('bulb','assets/commonAssets/bulb.png',null,NSD_4E_G6_JSON.bulbBtnJson);

	this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,NSD_4E_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,NSD_4E_G6_JSON.speakerJson);
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null,NSD_4E_G6_JSON.starAnimJson);
        this.load.atlas('replay','assets/commonAssets/reply.png' ,null,NSD_4E_G6_JSON.replyJson);
        
        this.load.image('navBar','assets/commonAssets/navBar.png');
        this.load.image('timebg','assets/commonAssets/timebg.png');
        this.load.image('hand','assets/commonAssets/hand.png');
 
        this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, NSD_4E_G6_JSON.homebtnJson);
        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, NSD_4E_G6_JSON.nextbtnJson);

        this.load.image('bg', 'assets/gradeAssets/NSD-4E-G6/Bg.jpg');

        // Orange text boxes
        this.load.image('Text box_1','assets/gradeAssets/NSD-4E-G6/Text Box_1.png');
        this.load.image('Text box_2','assets/gradeAssets/NSD-4E-G6/Text Box_2.png');
        this.load.image('Text box_3','assets/gradeAssets/NSD-4E-G6/Text Box_3.png');
        this.load.image('Text box_4','assets/gradeAssets/NSD-4E-G6/Text Box_4.png');
        this.load.atlas('lesserSign','assets/gradeAssets/NSD-4E-G6/sym_1.png',null,NSD_4E_G6_JSON.lesserSign);

        this.load.atlas('Numberpad','assets/gradeAssets/NSD-4E-G6/number pad.png',null,NSD_4E_G6_JSON.numberpadJson)
        this.load.image('numpadbg','assets/gradeAssets/NSD-4E-G6/numbg.png');

        this.load.image('Symbol','assets/gradeAssets/NSD-4E-G6/Symbol  New.png');
        this.load.image('box1','assets/gradeAssets/NSD-4E-G6/Box_1.png');
        this.load.image('textMeter','assets/gradeAssets/NSD-4E-G6/Text meeter.png');

        this.load.atlas('TickBtn','assets/gradeAssets/NSD-4E-G6/TickBtn.png',null,NSD_4E_G6_JSON.tickJson);
        this.load.atlas('Symbol-','assets/gradeAssets/NSD-4E-G6/Symbol Minus.png', null,  NSD_4E_G6_JSON.symbol1);
        this.load.atlas('Symbol+','assets/gradeAssets/NSD-4E-G6/Symbol Plus.png', null,  NSD_4E_G6_JSON.symbol2);
        this.load.atlas('bucket','assets/gradeAssets/NSD-4E-G6/Bucket anim new.png',null,NSD_4E_G6_JSON.bucketAnim);
        },

	create:function(){	
		this.state.start('NSD_4E_G6level1');
    },
}