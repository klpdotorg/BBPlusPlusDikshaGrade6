Game.preloader_AL_MAZE_G6=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_AL_MAZE_G6.prototype={
	preload:function(){

        //this.load.video('nsf15_1','demoVideos/AL-MAZE-G6_1.mp4');   //* include demo video of nsf-5 game.
        this.load.image('skipArrow','assets/commonAssets/skipArrow.png');
		
	      this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,AL_MAZE_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,AL_MAZE_G6_JSON.speakerJson);
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null,AL_MAZE_G6_JSON.starAnimJson);
        this.load.atlas('replay','assets/commonAssets/reply.png' ,null,AL_MAZE_G6_JSON.replyJson);
        this.load.atlas('btn','assets/commonAssets/btn.png',null,AL_MAZE_G6_JSON.btnJson);
        this.load.image('hand','assets/commonAssets/hand.png');
        
        this.load.image('tittleBar','assets/commonAssets/tittleBar.png');
        this.load.image('background','assets/commonAssets/bg.png');
        this.load.image('navBar','assets/commonAssets/navBar.png');
        this.load.image('timebg','assets/commonAssets/timebg.png');
        this.load.image('topicOutline','assets/commonAssets/topicOutline.png');
        

        this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, AL_MAZE_G6_JSON.homebtnJson);
        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, AL_MAZE_G6_JSON.nextbtnJson);

        this.load.image('bg', 'assets/gradeAssets/AL-MAZE-G6/Bg.png');
       
       this.load.image('BlueBox','assets/gradeAssets/AL-MAZE-G6/Blue box.png');

       this.load.atlas('down','assets/gradeAssets/AL-MAZE-G6/Down arrow.png', null, AL_MAZE_G6_JSON.downJson);
       this.load.atlas('left','assets/gradeAssets/AL-MAZE-G6/Left arrow.png', null, AL_MAZE_G6_JSON.leftJson);
       this.load.atlas('right','assets/gradeAssets/AL-MAZE-G6/Right arrow.png', null, AL_MAZE_G6_JSON.rightsideJson);
       this.load.atlas('up','assets/gradeAssets/AL-MAZE-G6/Up arrow.png', null, AL_MAZE_G6_JSON.upJson);

       this.load.atlas('level1','assets/gradeAssets/AL-MAZE-G6/Maze Level/Level 1.png', null, AL_MAZE_G6_JSON.level1Json);
       this.load.atlas('level2','assets/gradeAssets/AL-MAZE-G6/Maze Level/Level 2.png', null, AL_MAZE_G6_JSON.level2Json);
       this.load.atlas('level3','assets/gradeAssets/AL-MAZE-G6/Maze Level/Level 3.png', null, AL_MAZE_G6_JSON.level3Json);
       this.load.atlas('level4','assets/gradeAssets/AL-MAZE-G6/Maze Level/Level 4.png', null, AL_MAZE_G6_JSON.level4Json);
       this.load.atlas('level5','assets/gradeAssets/AL-MAZE-G6/Maze Level/Level 5.png', null, AL_MAZE_G6_JSON.level5Json);
       this.load.atlas('level6','assets/gradeAssets/AL-MAZE-G6/Maze Level/Level 6.png', null, AL_MAZE_G6_JSON.level6Json);
       this.load.atlas('level7','assets/gradeAssets/AL-MAZE-G6/Maze Level/Level 7.png', null, AL_MAZE_G6_JSON.level7Json);
       this.load.atlas('level8','assets/gradeAssets/AL-MAZE-G6/Maze Level/Level 8.png', null, AL_MAZE_G6_JSON.level8Json);

       //this.load.image('Green_cube','assets/gradeAssets/AL-MAZE-G6/green briks single.png');
       this.load.image('Red','assets/gradeAssets/AL-MAZE-G6/Red dote.png');
       this.load.image('bigBox_1','assets/gradeAssets/AL-MAZE-G6/Text box 1.png');
       this.load.image('bigBox_2','assets/gradeAssets/AL-MAZE-G6/Text box 2.png');
       this.load.image('arrow','assets/gradeAssets/AL-MAZE-G6/Start arrow.png');
       this.load.image('smallBox_1','assets/gradeAssets/AL-MAZE-G6/small box.png');
       this.load.image('numberBox','assets/gradeAssets/AL-MAZE-G6/number box.png');
       this.load.atlas('fraction_Bg','assets/gradeAssets/AL-MAZE-G6/number box 5 new.png',null,AL_MAZE_G6_JSON.background_fractionJson);
      
       this.load.atlas('text','assets/gradeAssets/AL-MAZE-G6/NSF-2B-G6 new box.png',null,AL_MAZE_G6_JSON.textJson);
       this.load.atlas('tick','assets/gradeAssets/AL-MAZE-G6/Right Btn.png',null,AL_MAZE_G6_JSON.rightJson);

       this.load.image('numpadbg','assets/gradeAssets/AL-MAZE-G6/numbg.png');
       this.load.atlas('Numberpad','assets/gradeAssets/AL-MAZE-G6/number pad.png',null,AL_MAZE_G6_JSON.numberpadJson);
       this.load.atlas('newBox','assets/gradeAssets/AL-MAZE-G6/NSF-2B-G6 new box.png',null,AL_MAZE_G6_JSON.newBoxJson);
       this.load.image('blueLine','assets/gradeAssets/AL-MAZE-G6/Line_1.png');
       this.load.image('hand','assets/gradeAssets/AL-MAZE-G6/hand.png');
        
       this.load.atlas('WinAnim','assets/gradeAssets/AL-MAZE-G6/winning_animation.png', null,AL_MAZE_G6_JSON.winning_animation);
},

	create:function(){
		
		this.state.start('AL_MAZE_G6level1');
        
    },
}