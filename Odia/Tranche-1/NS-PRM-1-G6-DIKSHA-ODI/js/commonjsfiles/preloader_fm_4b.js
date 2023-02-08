Game.preloader_fm_4b=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_fm_4b.prototype={
	preload:function(){
		
		this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,NS_FM_4B_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,NS_FM_4B_G6_JSON.speakerJson);
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null,NS_FM_4B_G6_JSON.starAnimJson);
        this.load.image('numpadbg','assets/commonAssets/numbg.png');
        this.load.image('TextBox','assets/gradeAssets/NS-FM-4B-G6/text box2.png');
        this.load.atlas('Numberpad','assets/gradeAssets/NS-FM-4B-G6/number pad.png',null,NS_FM_4B_G6_JSON.numberpadJson);
        this.load.atlas('thumbsdown','assets/gradeAssets/NS-FM-4B-G6/thums down.png',null,NS_FM_4B_G6_JSON.thumbsdownJson);
        this.load.atlas('Numberbox','assets/gradeAssets/NS-FM-4B-G6/Nuber box.png',null,NS_FM_4B_G6_JSON.NumberJson);
        this.load.atlas('thumbsup','assets/gradeAssets/NS-FM-4B-G6/thums Up.png',null,NS_FM_4B_G6_JSON.thumbsupJson);
        this.load.atlas('rightbtn','assets/gradeAssets/NS-FM-4B-G6/Right Btn.png',null,NS_FM_4B_G6_JSON.RightbtnJson);
        this.load.atlas('replay','assets/commonAssets/reply.png' ,null,NS_FM_4B_G6_JSON.replyJson);
        this.load.atlas('btn','assets/commonAssets/btn.png',null,NS_FM_4B_G6_JSON.btnJson);
        this.load.atlas('Tick', 'assets/gradeAssets/NS-FM-4B-G6/tick.png', null,NS_FM_4B_G6_JSON.tickJson);
        
        this.load.image('tittleBar','assets/commonAssets/tittleBar.png');
        this.load.image('background','assets/commonAssets/bg7.2.png');
        this.load.image('navBar','assets/commonAssets/navBar.png');
        this.load.image('timebg','assets/commonAssets/timebg.png');
        this.load.image('bg', 'assets/gradeAssets/NS-FM-4B-G6/BG.png');
        this.load.atlas('FactorBox','assets/gradeAssets/NS-FM-4B-G6/3 Box.png',null,NS_FM_4B_G6_JSON.factorBoxJson);
        this.load.atlas('FourColorBox','assets/gradeAssets/NS-FM-4B-G6/4 color box.png',null,NS_FM_4B_G6_JSON.fourColorBox);

        this.load.image('EmptyBox', 'assets/gradeAssets/NS-FM-4B-G6/image_2.png');
        this.load.image('EmptyBox_Glow', 'assets/gradeAssets/NS-FM-4B-G6/image_4.png');
        this.load.image('RedBox', 'assets/gradeAssets/NS-FM-4B-G6/Red box.png');

        this.load.image('EmptyBox_l_2', 'assets/gradeAssets/NS-FM-4B-G6/Box_2.png');
        this.load.image('EmptyBox_l_3', 'assets/gradeAssets/NS-FM-4B-G6/Box_3.png');
        this.load.image('EmptyBox_l_4', 'assets/gradeAssets/NS-FM-4B-G6/Box_4.png');
        this.load.image('EmptyBox_l_5', 'assets/gradeAssets/NS-FM-4B-G6/Box_5.png');
        this.load.image('EmptyBox_l_6', 'assets/gradeAssets/NS-FM-4B-G6/Box_6.png');
        this.load.image('EmptyBox_l_7', 'assets/gradeAssets/NS-FM-4B-G6/Box_7.png');
        this.load.image('EmptyBox_l_8', 'assets/gradeAssets/NS-FM-4B-G6/Box_8.png');
        this.load.image('EmptyBox_l_9', 'assets/gradeAssets/NS-FM-4B-G6/Box_9.png');
        this.load.image('EmptyBox_l_10', 'assets/gradeAssets/NS-FM-4B-G6/Box_10.png');
        this.load.image('EmptyBox_l_11', 'assets/gradeAssets/NS-FM-4B-G6/Box_11.png');
        this.load.image('EmptyBox_l_12', 'assets/gradeAssets/NS-FM-4B-G6/Box_12.png');
        this.load.image('EmptyBox_l_13', 'assets/gradeAssets/NS-FM-4B-G6/Box_13.png');
        this.load.image('EmptyBox_l_14', 'assets/gradeAssets/NS-FM-4B-G6/Box_14.png');
        this.load.image('EmptyBox_l_15', 'assets/gradeAssets/NS-FM-4B-G6/Box_15.png');
        this.load.image('EmptyBox_l_16', 'assets/gradeAssets/NS-FM-4B-G6/Box_16.png');
        this.load.image('EmptyBox_l_17', 'assets/gradeAssets/NS-FM-4B-G6/Box_17.png');
        this.load.image('EmptyBox_l_18', 'assets/gradeAssets/NS-FM-4B-G6/Box_18.png');
        this.load.image('EmptyBox_l_19', 'assets/gradeAssets/NS-FM-4B-G6/Box_19.png');
        this.load.image('EmptyBox_l_20', 'assets/gradeAssets/NS-FM-4B-G6/Box_20.png');
        this.load.image('EmptyBox_l_21', 'assets/gradeAssets/NS-FM-4B-G6/Box_21.png');
        this.load.image('EmptyBox_l_22', 'assets/gradeAssets/NS-FM-4B-G6/Box_22.png');

        this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, NS_PRM_1_G6_JSON.homebtnJson);
        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, NS_PRM_1_G6_JSON.nextbtnJson);

	},

	create:function(){
		
		this.state.start('NS_FM_4B_G6level1');
    },
}