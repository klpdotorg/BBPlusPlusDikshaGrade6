Game.preloader_NSD_3B_G6=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_NSD_3B_G6.prototype={
	preload:function(){
		
	this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,NSD_3B_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,NSD_3B_G6_JSON.speakerJson);
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null,NSD_3B_G6_JSON.starAnimJson);
        this.load.atlas('replay','assets/commonAssets/reply.png' ,null,NSD_3B_G6_JSON.replyJson);
        
        this.load.image('navBar','assets/commonAssets/navBar.png');
        this.load.image('timebg','assets/commonAssets/timebg.png');
        this.load.image('hand','assets/commonAssets/hand.png');

       
        this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, NSD_3B_G6_JSON.homebtnJson);
        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, NSD_3B_G6_JSON.nextbtnJson);

        this.load.image('bg', 'assets/gradeAssets/NSD-3B-G6/Bg.png');

        // this.load.image('Text box_1','assets/gradeAssets/NSD-3B-G6/text box_1.png');
        // this.load.image('Text box_2','assets/gradeAssets/NSD-3B-G6/text box_2.png');
        // this.load.image('white-box2','assets/gradeAssets/NSD-3B-G6/white text box.png');
        this.load.image('QuesBox','assets/gradeAssets/NSD-3B-G6/QuesBox.png');

        this.load.image('box1','assets/gradeAssets/NSD-3B-G6/Text table1.png');
 
        this.load.atlas('TickBtn','assets/gradeAssets/NSD-3B-G6/TickBtn.png',null,NSD_3B_G6_JSON.tickJson);
        this.load.atlas('Option-box','assets/gradeAssets/NSD-3B-G6/TexT box 1.png',null,NSD_3B_G6_JSON.textBox);

        
        // Game objects

        this.load.image('note10','assets/gradeAssets/NSD-3B-G6/10 note.png');
        this.load.image('note1','assets/gradeAssets/NSD-3B-G6/1 note.png');
        this.load.image('coin10th','assets/gradeAssets/NSD-3B-G6/coin 10.png');
        this.load.image('coin100th','assets/gradeAssets/NSD-3B-G6/coin 1.png');
        this.load.image('note100','assets/gradeAssets/NSD-3B-G6/100 note.png');

        this.load.image('Table1','assets/gradeAssets/NSD-3B-G6/table1.png');
        this.load.image('Table2','assets/gradeAssets/NSD-3B-G6/Table2.png');


        },

	create:function(){
		
		this.state.start('NSD_3B_G6level1');
        
    },
}