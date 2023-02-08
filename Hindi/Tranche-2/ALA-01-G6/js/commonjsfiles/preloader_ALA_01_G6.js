Game.preloader_ALA_01_G6=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_ALA_01_G6.prototype={
	preload:function(){

        this.load.video('ala01_1','demoVideos/ALA-01-G6.mp4');   //* include demo video of nsf-5 game.
        this.load.image('skipArrow','assets/commonAssets/skipArrow.png');        
        this.load.atlas('bulb','assets/commonAssets/bulb.png',null,ALA_01_G6_JSON.bulbBtnJson);

        this.load.atlas('homebtn','assets/commonAssets/homeBtn.png' ,null,ALA_01_G6_JSON.HomeBtnJson);
        this.load.atlas('nextbtn','assets/commonAssets/nextBtn.png' ,null,ALA_01_G6_JSON.nextbtnJson);
		
	this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,ALA_01_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,ALA_01_G6_JSON.speakerJson);
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null,ALA_01_G6_JSON.starAnimJson);
        this.load.atlas('replay','assets/commonAssets/reply.png' ,null,ALA_01_G6_JSON.replyJson);
        
        this.load.image('navBar','assets/commonAssets/navBar.png');
        this.load.image('timebg','assets/commonAssets/timebg.png');
        // this.load.image('topicOutline','assets/commonAssets/topicOutline.png');

        // this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, NS_FM_1_G6_JSON.homebtnJson);
        // this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, NS_FM_1_G6_JSON.nextbtnJson);

        this.load.image('bg', 'assets/gradeAssets/ALA-01-G6/Bg.jpeg');

//GAME OBJECTS...
        this.load.image('aquiriumBox','assets/gradeAssets/ALA-01-G6/aquarium box.png')
        this.load.image('sand','assets/gradeAssets/ALA-01-G6/sand.png')
        this.load.atlas('BlueFish','assets/gradeAssets/ALA-01-G6/Blue fish.png',null,ALA_01_G6_JSON.BlueFishJson);
        this.load.atlas('BlueFishAnim','assets/gradeAssets/ALA-01-G6/Blue fishAnim.png',null,ALA_01_G6_JSON.BlueFishAnimJson);
        this.load.atlas('RedFishAnim','assets/gradeAssets/ALA-01-G6/Orenge  fish anim.png',null,ALA_01_G6_JSON.orangefishanimJson);
        this.load.atlas('RedFish','assets/gradeAssets/ALA-01-G6/Red fish.png',null,ALA_01_G6_JSON.RedFishJson);
        this.load.atlas('Grass_1','assets/gradeAssets/ALA-01-G6/grass_1.png',null,ALA_01_G6_JSON.GrassOneJson);
        this.load.image('Plant','assets/gradeAssets/ALA-01-G6/plant.png')
        this.load.atlas('Grass_2','assets/gradeAssets/ALA-01-G6/grass_2.png',null,ALA_01_G6_JSON.GrassTwoJson);
        this.load.image('Text box_1','assets/gradeAssets/ALA-01-G6/Text box_1.png');
        this.load.image('Text box_2','assets/gradeAssets/ALA-01-G6/Text box_2.png');
        this.load.image('Text box_3','assets/gradeAssets/ALA-01-G6/Text box_3.png');
        this.load.atlas('Text box_4','assets/gradeAssets/ALA-01-G6/Text box_4.png',null,ALA_01_G6_JSON.TextBox4Json);
        this.load.atlas('TickBtn','assets/gradeAssets/ALA-01-G6/TickBtn.png',null,ALA_01_G6_JSON.TickbtnJson);
        
        this.load.image('BlueBg','assets/gradeAssets/ALA-01-G6/blue box.png');
        this.load.image('small_text_box','assets/gradeAssets/ALA-01-G6/small_text box.png');

        this.load.image('numpadbg','assets/gradeAssets/ALA-01-G6/numbg.png');
        this.load.atlas('Numberpad','assets/gradeAssets/ALA-01-G6/number pad.png',null,ALA_01_G6_JSON.numberpadJson);
        this.load.atlas('bubbles','assets/gradeAssets/ALA-01-G6/bubbels.png',null,ALA_01_G6_JSON.bubblesJson);
        this.load.atlas('glowingTxtBox','assets/gradeAssets/ALA-01-G6/glowingTextBox.png',null,ALA_01_G6_JSON.GlowingBoxJson);
},

        create:function()
        {
		
		this.state.start('ALA_01_G6level1');
        },
}