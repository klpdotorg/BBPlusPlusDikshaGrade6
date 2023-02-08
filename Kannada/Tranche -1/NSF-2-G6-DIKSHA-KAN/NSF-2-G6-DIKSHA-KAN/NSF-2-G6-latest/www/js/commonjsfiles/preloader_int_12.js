Game.preloader_int_12=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_int_12.prototype={
	preload:function(){
        		
        console.log("calling correct preload int 7");
         
        this.load.video('int_7_1','demoVideos/NS-INT-7-G6_1.mp4');  //* intro to operations
        this.load.video('int_7_2','demoVideos/NS-INT-7-G6_2.mp4');  //* count the counters and answer
        this.load.video('int_7_3','demoVideos/NS-INT-7-G6_3.mp4');  //* nullify +ve & -ve and answer
        this.load.video('int_7_4','demoVideos/NS-INT-7-G6_4.mp4');  //* subtraction: flip, nullify and answer

		this.load.image('skipArrow','assets/commonAssets/skipArrow.png');       
        
	    this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,NS_INT_07_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,NS_INT_07_G6_JSON.speakerJson);
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null,NS_INT_07_G6_JSON.starAnimJson);
        this.load.atlas('replay','assets/commonAssets/reply.png' ,null,NS_INT_07_G6_JSON.replyJson);
        this.load.atlas('btn','assets/commonAssets/btn.png',null,NS_INT_07_G6_JSON.btnJson);
        
        this.load.image('tittleBar','assets/commonAssets/tittleBar.png');
        this.load.image('background','assets/commonAssets/bg.png');
        this.load.image('navBar','assets/commonAssets/navBar.png');
        this.load.image('timebg','assets/commonAssets/timebg.png');
//        this.load.image('topicOutline','assets/commonAssets/topicOutline.png');

        this.load.atlas('minus_anm','assets/gradeAssets/NS-INT-7-G6/- animation.png' ,null,NS_INT_07_G6_JSON.minus_animationJson);
        this.load.atlas('plus_anm', 'assets/gradeAssets/NS-INT-7-G6/+ animation.png' ,null, NS_INT_07_G6_JSON.plus_animationJson);
        
        this.load.atlas('flipbtn','assets/gradeAssets/NS-INT-7-G6/+ and -Box.png',null,NS_INT_07_G6_JSON.flipbtnJson);

        //game assets.

        this.load.image('practice','assets/gradeAssets/NS-INT-7-G6/practice.png');
        this.load.image('topic','assets/gradeAssets/NS-INT-7-G6/topic.png');
        //this.load.image('Tick', 'assets/gradeAssets/2.1.1/Tick.png');
        

        this.load.atlas('Tick', 'assets/gradeAssets/NS-INT-7-G6/tick.png', null,NS_INT_07_G6_JSON.tickJson);
            
        
        this.load.image('bg', 'assets/gradeAssets/NS-INT-7-G6/Bg.png');
         
        this.load.atlas('ScreenTextBox','assets/gradeAssets/NS-INT-7-G6/ScreenTextBox.png',null,NS_INT_07_G6_JSON.ScreenTextBox);
        
        
        this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, NS_INT_07_G6_JSON.homebtnJson);
        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, NS_INT_07_G6_JSON.nextbtnJson);


//        this.load.image('DragBox', 'assets/gradeAssets/NS-INT-7-G6/dragingBox.png');

//        this.load.image('base', 'assets/gradeAssets/NS-INT-7-G6/Main panel.png');
        this.load.image('hand', 'assets/gradeAssets/NS-INT-7-G6/hand.png');

        this.load.image('numpadbg','assets/commonAssets/numbg.png');
        this.load.atlas('Numberpad','assets/gradeAssets/NS-INT-7-G6/Numberpad.png',null,NS_INT_07_G6_JSON.numberpadJson);

        this.load.atlas('RectangleBox','assets/gradeAssets/NS-INT-7-G6/Rectangle box.png',null,NS_INT_07_G6_JSON.rectangleBoxJson);
        //this.load.atlas('QnABox','assets/gradeAssets/NS-INT-7-G6/Q n A Box.png',null,NS_INT_07_G6_JSON.questionAndAnswerBoxJson);
        this.load.atlas('SquareBox','assets/gradeAssets/NS-INT-7-G6/Square Box.png',null,NS_INT_07_G6_JSON.squareBoxJson);
        
        this.load.image('highlightBox','assets/gradeAssets/NS-INT-7-G6/Highlight_Box.png');
        this.load.atlas('plus','assets/gradeAssets/NS-INT-7-G6/+ symbol.png',null,NS_INT_07_G6_JSON.plusglowJson);
        this.load.atlas('minus','assets/gradeAssets/NS-INT-7-G6/- symbol.png',null,NS_INT_07_G6_JSON.minusglowJson);
        this.load.atlas('QnABox','assets/gradeAssets/NS-INT-7-G6/Q n A Box.png',null,NS_INT_07_G6_JSON.questionAndAnswerBoxJson);
	},

	create:function(){
		
        //* this variable is used in NS_INT_7_G6demo to start appropriate games
        //* GameNumer & Games: 7 - INT-7   8 - INT-8   9 - INT-9   10 - INT-10  11 - INT-11
        //*                    12 - INT-12
		var GameNumber = 12;  
        
		this.state.start('NS_INT_7_G6demo', false, false,GameNumber);   //* pass game number.
        
        
    },
}