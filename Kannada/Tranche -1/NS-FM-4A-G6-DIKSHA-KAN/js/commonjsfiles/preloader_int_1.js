Game.preloader_int_1=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_int_1.prototype={
	preload:function(){
        
        console.log('inside preloader int 1');
        
        this.load.video('int_1_1','demoVideos/NS-INT-1-G6_1.mp4');  //* intro to game
        this.load.video('int_1_2','demoVideos/NS-INT-1-G6_2.mp4');  //* 1st part of game INT_1
        this.load.video('int_1_3','demoVideos/NS-INT-1-G6_3.mp4');  //* 2nd part of game INT_2

		this.load.image('skipArrow','assets/commonAssets/skipArrow.png');
        
		this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,game1Json.backbtnJson);
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,game1Json.speakerJson);
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null,game1Json.starAnimJson);
        this.load.atlas('replay','assets/commonAssets/reply.png' ,null,game1Json.replyJson);
        this.load.atlas('btn','assets/commonAssets/btn.png',null,game1Json.btnJson);
        
        this.load.image('tittleBar','assets/commonAssets/tittleBar.png');
        
        this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, game2Json.homebtnJson);
        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, game2Json.nextbtnJson);     
        //Q2
        this.load.image('background','assets/commonAssets/bg.png');
        this.load.image('navBar','assets/commonAssets/navBar.png');
        this.load.image('timebg','assets/commonAssets/timebg.png');
        this.load.image('topicOutline','assets/commonAssets/topicOutline.png');
        this.load.image('Transparent','assets/commonAssets/transparent.png'); 
        
        


        //Q1

        this.load.atlas('Numberpad','assets/gradeAssets/NS-INT-1-G6/Numberpad.png',null,game1Json.numberpadJson);
        this.load.atlas('RightBtn','assets/gradeAssets/NS-INT-1-G6/rightmark.png',null,game1Json.RightBtnJson);
        this.load.atlas('EraseBtn','assets/gradeAssets/NS-INT-1-G6/erase.png',null,game1Json.EraseBtnJson);

        this.load.image('shelf', 'assets/gradeAssets/NS-INT-1-G6/Shelf.png');
        this.load.atlas('underground', 'assets/gradeAssets/NS-INT-1-G6/Under ground.png', null, game1Json.undergroundJson); 
        this.load.atlas('groundfloor', 'assets/gradeAssets/NS-INT-1-G6/Ground floor.png', null, game1Json.groundfloorJson); 
        
        this.load.atlas('ball', 'assets/gradeAssets/NS-INT-1-G6/Ball.png', null, game1Json.ball); 
        this.load.atlas('cat', 'assets/gradeAssets/NS-INT-1-G6/Cat.png', null, game1Json.cat); 
        this.load.atlas('dog', 'assets/gradeAssets/NS-INT-1-G6/Dog.png', null, game1Json.dog); 
        this.load.atlas('cloth', 'assets/gradeAssets/NS-INT-1-G6/Cloth.png', null, game1Json.cloth); 
        this.load.atlas('rabbit', 'assets/gradeAssets/NS-INT-1-G6/Rabbit.png', null, game1Json.rabbit);


        this.load.image('zn', 'assets/gradeAssets/NS-INT-1-G6/eg.png');
        this.load.image('floorarea', 'assets/gradeAssets/NS-INT-1-G6/floorarea.png');

        this.load.image('Numbr_-1', 'assets/gradeAssets/NS-INT-1-G6/Numbr_-1.png');
        this.load.image('Numbr_-2', 'assets/gradeAssets/NS-INT-1-G6/Numbr_-2.png');
        this.load.image('Numbr_-3', 'assets/gradeAssets/NS-INT-1-G6/Numbr_-3.png');
        this.load.image('Numbr_-4', 'assets/gradeAssets/NS-INT-1-G6/Numbr_-4.png');
        this.load.image('Numbr_-5', 'assets/gradeAssets/NS-INT-1-G6/Numbr_-5.png');
        this.load.image('Numbr_0', 'assets/gradeAssets/NS-INT-1-G6/Numbr_0.png');
        this.load.image('Numbr_1', 'assets/gradeAssets/NS-INT-1-G6/Numbr_1.png');
        this.load.image('Numbr_2', 'assets/gradeAssets/NS-INT-1-G6/Numbr_2.png');
        this.load.image('Numbr_3', 'assets/gradeAssets/NS-INT-1-G6/Numbr_3.png');
        this.load.image('Numbr_4', 'assets/gradeAssets/NS-INT-1-G6/Numbr_4.png');
        this.load.image('Numbr_5', 'assets/gradeAssets/NS-INT-1-G6/Numbr_5.png');

        this.load.atlas('doganim', 'assets/gradeAssets/NS-INT-1-G6/Dog anim.png', null, game1Json.doganim); 
        this.load.atlas('catanim', 'assets/gradeAssets/NS-INT-1-G6/Cat anim.png', null, game1Json.catanim); 
        this.load.atlas('ballanim', 'assets/gradeAssets/NS-INT-1-G6/Ball anim.png', null, game1Json.ballanim); 
        this.load.atlas('clothanim', 'assets/gradeAssets/NS-INT-1-G6/Cloth anim.png', null, game1Json.clothanim); 
        this.load.atlas('rabbitanim', 'assets/gradeAssets/NS-INT-1-G6/Rabbit anim.png', null, game1Json.rabbitanim); 
        
        // load additional objects for game 2
        this.preloader_int_2();

	},

	create:function(){
		
        console.log( 'starting int 1 G6 level1');
		//this.state.start('NS_INT_1_G6level1');
        this.state.start('NS_INT_1_G6demo');
        
    },
    
    preloader_int_2:function(){
        
        this.load.image('unity2_1_1a_background','assets/commonAssets/bg.png');
        this.load.image('Transparent','assets/commonAssets/transparent.png');   
  
        this.load.image('numpadbg','assets/commonAssets/numbg.png');
        this.load.atlas('ScreenTextBox','assets/gradeAssets/NS-INT-2-G6/ScreenTextBox.png', null,  game2Json.ScreenTextBox);

        this.load.atlas('bottomfloor', 'assets/gradeAssets/NS-INT-2-G6/Bottom floor.png', null, game2Json.bottomfloorJson); 
        this.load.atlas('topfloor', 'assets/gradeAssets/NS-INT-2-G6/Top floor.png', null, game2Json.topfloorJson); 
        
    }
}