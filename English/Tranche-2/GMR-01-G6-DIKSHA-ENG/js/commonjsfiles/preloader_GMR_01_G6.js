Game.preloader_GMR_01_G6=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_GMR_01_G6.prototype={
	preload:function(){
		
	this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,GMR_01_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,GMR_01_G6_JSON.speakerJson);
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null,GMR_01_G6_JSON.starAnimJson);
        this.load.atlas('replay','assets/commonAssets/reply.png' ,null,GMR_01_G6_JSON.replyJson);
        
        this.load.image('navBar','assets/commonAssets/navBar.png');
        this.load.image('timebg','assets/commonAssets/timebg.png');
        this.load.image('hand','assets/commonAssets/hand.png');
 
        this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, GMR_01_G6_JSON.homebtnJson);
        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, GMR_01_G6_JSON.nextbtnJson);

        this.load.image('bg', 'assets/gradeAssets/GMR-01-G6/Bg.png');

        // Orange text boxes
        // this.load.image('Text box_1','assets/gradeAssets/GMR-01-G6/Text Box_1.png');
        // this.load.image('Text box_2','assets/gradeAssets/GMR-01-G6/Text Box_2.png');
        // this.load.image('Text box_3','assets/gradeAssets/GMR-01-G6/Text Box_3.png');
        // this.load.image('Text box_4','assets/gradeAssets/GMR-01-G6/Text Box_4.png');
        // this.load.image('Symbol','assets/gradeAssets/GMR-01-G6/Symbol  New.png');
        // this.load.image('box1','assets/gradeAssets/GMR-01-G6/Box_1.png');
        // this.load.image('textMeter','assets/gradeAssets/GMR-01-G6/Text meeter.png');

        this.load.atlas('TickBtn','assets/gradeAssets/GMR-01-G6/TickBtn.png',null,GMR_01_G6_JSON.tickJson);
        

        this.load.atlas('banana','assets/gradeAssets/GMR-01-G6/banana.png',null,GMR_01_G6_JSON.bananaJson);
        this.load.atlas('boot','assets/gradeAssets/GMR-01-G6/boot.png',null,GMR_01_G6_JSON.bootJson);
        this.load.atlas('can','assets/gradeAssets/GMR-01-G6/can.png',null,GMR_01_G6_JSON.canJson);
        this.load.atlas('comb','assets/gradeAssets/GMR-01-G6/comb.png',null,GMR_01_G6_JSON.combJson);
        this.load.atlas('cup','assets/gradeAssets/GMR-01-G6/cup.png',null,GMR_01_G6_JSON.cupJson);
        this.load.atlas('hammer','assets/gradeAssets/GMR-01-G6/hammer.png',null,GMR_01_G6_JSON.hammerJson);
        this.load.atlas('hand','assets/gradeAssets/GMR-01-G6/hand.png',null,GMR_01_G6_JSON.handJson);
        this.load.atlas('horizontal','assets/gradeAssets/GMR-01-G6/horizontal.png',null,GMR_01_G6_JSON.horizontalJson);
        this.load.atlas('key','assets/gradeAssets/GMR-01-G6/key.png',null,GMR_01_G6_JSON.keyJson);
        this.load.atlas('leg','assets/gradeAssets/GMR-01-G6/leg.png',null,GMR_01_G6_JSON.legJson);
        this.load.image('mirror','assets/gradeAssets/GMR-01-G6/mirror.png');
        this.load.atlas('triangle','assets/gradeAssets/GMR-01-G6/triangle.png',null,GMR_01_G6_JSON.triangleJson);
        this.load.atlas('umbrella','assets/gradeAssets/GMR-01-G6/umbrella.png',null,GMR_01_G6_JSON.umbrellaJson);
        this.load.atlas('vertical','assets/gradeAssets/GMR-01-G6/vertical.png',null,GMR_01_G6_JSON.verticalJson);
        this.load.image('water','assets/gradeAssets/GMR-01-G6/water.png');
        this.load.atlas('watercan','assets/gradeAssets/GMR-01-G6/watercan.png',null,GMR_01_G6_JSON.watercanJson);
        this.load.atlas('bubbleanimation','assets/gradeAssets/GMR-01-G6/BubbleAni.png',null,GMR_01_G6_JSON.bubbleAniJson);
        this.load.image('bubble','assets/gradeAssets/GMR-01-G6/Bubble.png');
    








},

	create:function(){	
		this.state.start('GMR_01_G6level1');
    },
}