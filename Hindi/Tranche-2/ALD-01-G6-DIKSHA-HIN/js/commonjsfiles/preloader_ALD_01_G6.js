Game.preloader_ALD_01_G6=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_ALD_01_G6.prototype={
	preload:function(){
	
        this.load.video('ald01_1','demoVideos/ALD-01-G6_1.mp4');   
        this.load.video('ald01_2','demoVideos/ALD-01-G6_2.mp4');   
        this.load.video('ald01_3','demoVideos/ALD-01-G6_3.mp4');  
        this.load.image('skipArrow','assets/commonAssets/skipArrow.png');
        this.load.atlas('bulb','assets/commonAssets/bulb.png',null,ALD_01_G6_JSON.bulbBtnJson); 

	this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,ALD_01_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,ALD_01_G6_JSON.speakerJson);
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null,ALD_01_G6_JSON.starAnimJson);
        this.load.atlas('replay','assets/commonAssets/reply.png' ,null,ALD_01_G6_JSON.replyJson);
        this.load.atlas('nextBtn','assets/commonAssets/nextBtn.png' ,null,ALD_01_G6_JSON.nextbtnJson);
        this.load.atlas('homeBtn','assets/commonAssets/homeBtn.png' ,null,ALD_01_G6_JSON.homeBtnJson);
        
        this.load.image('navBar','assets/commonAssets/navBar.png');
        this.load.image('timebg','assets/commonAssets/timebg.png');
        // this.load.image('topicOutline','assets/commonAssets/topicOutline.png');

        // this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, NS_FM_1_G6_JSON.homebtnJson);
        // this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, NS_FM_1_G6_JSON.nextbtnJson);

        this.load.image('bg', 'assets/gradeAssets/ALD-01-G6/BG.png');

//GAME OBJECTS...
        this.load.image('aquiriumBox','assets/gradeAssets/ALD-01-G6/aquarium box.png')
        this.load.image('sand','assets/gradeAssets/ALD-01-G6/sand.png')
        this.load.atlas('BlueFish','assets/gradeAssets/ALD-01-G6/Blue fish.png',null,ALD_01_G6_JSON.BlueFishJson);
        this.load.atlas('RedFishAnim','assets/gradeAssets/ALD-01-G6/Orenge  fish anim.png',null,ALD_01_G6_JSON.RedFishAnimJson);
        this.load.atlas('BlueFishAnim','assets/gradeAssets/ALD-01-G6/BlueFishAnim.png',null,ALD_01_G6_JSON.BlueFishAninJson);
        // this.load.atlas('BlueFish','assets/gradeAssets/ALM-01-MCQ-G6/Blue fish anim.png',null,ALM_01_MCQ_G6_JSON.BlueFishAninJson);
        
        this.load.atlas('FishBowl','assets/gradeAssets/ALD-01-G6/Fish bowl.png',null,ALD_01_G6_JSON.fishBowlJson);
        this.load.atlas('Grass_1','assets/gradeAssets/ALD-01-G6/grass_1.png',null,ALD_01_G6_JSON.GrassOneJson);
        this.load.image('Plant','assets/gradeAssets/ALD-01-G6/plant.png')
        this.load.atlas('Grass_2','assets/gradeAssets/ALD-01-G6/grass_2.png',null,ALD_01_G6_JSON.GrassTwoJson);
        this.load.image('Text box_1','assets/gradeAssets/ALD-01-G6/Text box_1.png');
        this.load.image('Text box_2','assets/gradeAssets/ALD-01-G6/Text box _2.png');
        // this.load.image('Text box_3','assets/gradeAssets/ALA-01-g6/Text box_3.png');
        this.load.atlas('Text box_4','assets/gradeAssets/ALD-01-G6/Text box_4.png',null,ALD_01_G6_JSON.TextBox4Json);
        this.load.atlas('TickBtn','assets/gradeAssets/ALD-01-G6/TickBtn.png',null,ALD_01_G6_JSON.TickbtnJson);
        
        this.load.image('BlueBg','assets/gradeAssets/ALD-01-G6/blue box.png');
        this.load.image('small_text_box','assets/gradeAssets/ALD-01-G6/small_text box.png');

        this.load.image('butonBg','assets/gradeAssets/ALD-01-G6/Main box.png');
        this.load.image('Ereser','assets/gradeAssets/ALD-01-G6/Ereser.png');
        //this.load.image('pot_EraserBg','assets/gradeAssets/ALM-01-MCQ-G6/pot and ereser Box.png');
        this.load.image('pot_EraserBg','assets/gradeAssets/ALD-01-G6/Text box _4.png');
        this.load.image('Potbtn','assets/gradeAssets/ALD-01-G6/Fish pot.png');

        this.load.image('hand','assets/gradeAssets/ALD-01-G6/hand.png');

        this.load.image('numpadbg','assets/gradeAssets/ALD-01-G6/numbg.png');
        this.load.atlas('Numberpad','assets/gradeAssets/ALD-01-G6/number pad.png',null,ALD_01_G6_JSON.numberpadJson);
        this.load.atlas('bubbles','assets/gradeAssets/ALD-01-G6/bubbels.png',null,ALD_01_G6_JSON.bubblesJson);
        this.load.atlas('glowingTxtBox','assets/gradeAssets/ALD-01-G6/glowingTextBox.png',null,ALD_01_G6_JSON.GlowingBoxJson);
},

        create:function()
        {
		
		this.state.start('ALD_01_G6level1');
        },
}