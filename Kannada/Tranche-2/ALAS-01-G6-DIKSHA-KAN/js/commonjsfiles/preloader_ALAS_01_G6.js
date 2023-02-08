Game.preloader_ALAS_01_G6=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_ALAS_01_G6.prototype={
	preload:function(){
        
        this.load.video('alas01_1','demoVideos/ALAS-01-G6_1.mp4');   //* include demo video of game.
        this.load.video('alas01_2','demoVideos/ALAS-01-G6_2.mp4');   //* include demo video of game.
      
        this.load.image('skipArrow','assets/commonAssets/skipArrow.png');
        
        this.load.atlas('bulb','assets/commonAssets/bulb.png',null,ALAS_01_G6_JSON.bulbBtnJson);
	this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,ALAS_01_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,ALAS_01_G6_JSON.speakerJson);
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null,ALAS_01_G6_JSON.starAnimJson);
        this.load.image('numpadbg','assets/commonAssets/numbg.png');
        this.load.image('hand','assets/commonAssets/hand.png');
        
        this.load.atlas('Numberpad','assets/gradeAssets/ALAS-01-G6/number pad.png',null,ALAS_01_G6_JSON.numberpadJson);
        this.load.atlas('replay','assets/commonAssets/reply.png' ,null,ALAS_01_G6_JSON.replyJson);
        this.load.atlas('btn','assets/commonAssets/btn.png',null,ALAS_01_G6_JSON.btnJson);
        this.load.atlas('tickbtn','assets/commonAssets/tick.png',null,ALAS_01_G6_JSON.tickJson);
        
        //navbar
        this.load.image('navBar','assets/commonAssets/navBar.png');

        //time
        this.load.image('timebg','assets/commonAssets/timebg.png');

        //background
        this.load.image('Bg new','assets/gradeAssets/ALAS-01-G6/Bg new.jpg');

        //tray
        this.load.image('Tray', 'assets/gradeAssets/ALAS-01-G6/Tray.png');

        //text boxes
        this.load.image('textbox1','assets/gradeAssets/ALAS-01-G6/Text box_1.png');
        this.load.image('textbox2','assets/gradeAssets/ALAS-01-G6/Text box_2.png'); //
        this.load.image('textbox3','assets/gradeAssets/ALAS-01-G6/Text box_3.png');

        //Adding weight 
        this.load.image('base','assets/gradeAssets/ALAS-01-G6/weight gauge part_4.png');
        this.load.image('beam','assets/gradeAssets/ALAS-01-G6/weight gauge part_3.png');
        this.load.image('weight gauge part_1','assets/gradeAssets/ALAS-01-G6/weight gauge part_1.png');
        this.load.image('weight gauge part_2','assets/gradeAssets/ALAS-01-G6/weight gauge part_2.png');
        this.load.image('bigg box','assets/gradeAssets/ALAS-01-G6/bigg box.png');
        this.load.image('box tray','assets/gradeAssets/ALAS-01-G6/box tray.png'); 
        this.load.image('cup','assets/gradeAssets/ALAS-01-G6/Green cup.png');
        this.load.image('cake','assets/gradeAssets/ALAS-01-G6/Green cake.png');
        this.load.image('car','assets/gradeAssets/ALAS-01-G6/Green car.png');
        this.load.image('greenBottle','assets/gradeAssets/ALAS-01-G6/Green bottle.png');
        this.load.image('orangecar','assets/gradeAssets/ALAS-01-G6/orenge car.png');
        this.load.image('orangecake','assets/gradeAssets/ALAS-01-G6/orenge cake.png');
        this.load.image('orangejar','assets/gradeAssets/ALAS-01-G6/orenge cup.png');
        this.load.image('orangebottle','assets/gradeAssets/ALAS-01-G6/orange bottle.png');
	},

	create:function(){
		
		this.state.start('ALAS_01_G6level1');
        
    },
}