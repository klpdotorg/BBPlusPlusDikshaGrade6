Game.preloader_hcf_1=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_hcf_1.prototype={
	preload:function(){
        
        this.load.video('hcf_1_1','demoVideos/NS-HCF-1-G6_1.mp4');  //* intro to game
        this.load.video('hcf_1_2','demoVideos/NS-HCF-1-G6_2.mp4');  //* hcf game playing

		this.load.image('skipArrow','assets/commonAssets/skipArrow.png');
		
		this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,NS_HCF_1_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,NS_HCF_1_G6_JSON.speakerJson);
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null,NS_HCF_1_G6_JSON.starAnimJson);
        this.load.atlas('replay','assets/commonAssets/reply.png' ,null,NS_HCF_1_G6_JSON.replyJson);
        this.load.image('numpadbg','assets/commonAssets/numbg.png');
        this.load.image('TextBox','assets/gradeAssets/NS-HCF-1-G6/text box2.png');
        this.load.atlas('Numberpad','assets/gradeAssets/NS-HCF-1-G6/number pad.png',null,NS_HCF_1_G6_JSON.numberpadJson);
        this.load.atlas('FactorBox','assets/gradeAssets/NS-HCF-1-G6/3 Box.png',null,NS_HCF_1_G6_JSON.factorBoxJson);
        this.load.atlas('Eraser','assets/gradeAssets/NS-HCF-1-G6/Eraser box.png',null,NS_HCF_1_G6_JSON.eraserJson);
        // this.load.atlas('replay','assets/commonAssets/reply.png' ,null,NS_HCF_1_G6_JSON.replyJson);
        // this.load.atlas('btn','assets/commonAssets/btn.png',null,NS_HCF_1_G6_JSON.btnJson);
        
        // this.load.image('tittleBar','assets/commonAssets/tittleBar.png');
        // this.load.image('background','assets/commonAssets/bg7.2.png');
        this.load.image('navBar','assets/commonAssets/navBar.png');
        this.load.image('timebg','assets/commonAssets/timebg.png');
        this.load.image('bg', 'assets/gradeAssets/NS-HCF-1-G6/BG.png');

        this.load.atlas('FourColorBox','assets/gradeAssets/NS-HCF-1-G6/4 color box.png',null,NS_HCF_1_G6_JSON.fourColorBox);

        this.load.image('EmptyBox', 'assets/gradeAssets/NS-HCF-1-G6/18 gray.png');
        this.load.image('EmptyBox_Glow', 'assets/gradeAssets/NS-HCF-1-G6/18 yellow.png');
        this.load.image('RedBox', 'assets/gradeAssets/NS-HCF-1-G6/Red box.png');
        this.load.image('MainBox', 'assets/gradeAssets/NS-HCF-1-G6/Main Box.png');
        
        this.load.image('EmptyBox_l_2', 'assets/gradeAssets/NS-HCF-1-G6/Box_2.png');
        this.load.image('EmptyBox_l_3', 'assets/gradeAssets/NS-HCF-1-G6/Box_3.png');
        this.load.image('EmptyBox_l_4', 'assets/gradeAssets/NS-HCF-1-G6/Box_4.png');
        this.load.image('EmptyBox_l_5', 'assets/gradeAssets/NS-HCF-1-G6/Box_5.png');
        this.load.image('EmptyBox_l_6', 'assets/gradeAssets/NS-HCF-1-G6/Box_6.png');
        this.load.image('EmptyBox_l_7', 'assets/gradeAssets/NS-HCF-1-G6/Box_7.png');
        this.load.image('EmptyBox_l_8', 'assets/gradeAssets/NS-HCF-1-G6/Box_8.png');
        this.load.image('EmptyBox_l_9', 'assets/gradeAssets/NS-HCF-1-G6/Box_9.png');
        this.load.image('EmptyBox_l_10', 'assets/gradeAssets/NS-HCF-1-G6/Box_10.png');
        this.load.image('EmptyBox_l_11', 'assets/gradeAssets/NS-HCF-1-G6/Box_11.png');
        this.load.image('EmptyBox_l_12', 'assets/gradeAssets/NS-HCF-1-G6/Box_12.png');
        this.load.image('EmptyBox_l_13', 'assets/gradeAssets/NS-HCF-1-G6/Box_13.png');
        this.load.image('EmptyBox_l_14', 'assets/gradeAssets/NS-HCF-1-G6/Box_14.png');
        this.load.image('EmptyBox_l_15', 'assets/gradeAssets/NS-HCF-1-G6/Box_15.png');
        this.load.image('EmptyBox_l_16', 'assets/gradeAssets/NS-HCF-1-G6/Box_16.png');
        this.load.image('EmptyBox_l_17', 'assets/gradeAssets/NS-HCF-1-G6/Box_17.png');
        this.load.image('EmptyBox_l_18', 'assets/gradeAssets/NS-HCF-1-G6/Box_18.png');
        this.load.image('EmptyBox_l_19', 'assets/gradeAssets/NS-HCF-1-G6/Box_19.png');
        this.load.image('EmptyBox_l_20', 'assets/gradeAssets/NS-HCF-1-G6/Box_20.png');
        this.load.image('EmptyBox_l_21', 'assets/gradeAssets/NS-HCF-1-G6/Box_21.png');
        this.load.image('EmptyBox_l_22', 'assets/gradeAssets/NS-HCF-1-G6/Box_22.png');

        this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, NS_HCF_1_G6_JSON.homebtnJson);
        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, NS_HCF_1_G6_JSON.nextbtnJson);
       
	},

	create:function(){
		
		this.state.start('NS_HCF_1_G6demo');
        
    },
}