Game.preloader_oe_1a=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_oe_1a.prototype={
	preload:function(){
        
        console.log("this is for test preloader oe 1a");
        
        this.load.video('oe_1_1','demoVideos/NS-OE-1-G6_1.mp4');  //* playing oe1
        this.load.video('oe_1_2','demoVideos/NS-OE-1-G6_2.mp4');  //* playing oe2

		this.load.image('skipArrow','assets/commonAssets/skipArrow.png');
        
		
		this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,NS_OE_1_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,NS_OE_1_G6_JSON.speakerJson);
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null,NS_OE_1_G6_JSON.starAnimJson);
        this.load.atlas('replay','assets/commonAssets/reply.png' ,null,NS_OE_1_G6_JSON.replyJson);
        this.load.atlas('btn','assets/commonAssets/btn.png',null,NS_OE_1_G6_JSON.btnJson);
        
        this.load.image('tittleBar','assets/commonAssets/tittleBar.png');
        this.load.image('background','assets/commonAssets/bg.png');
        this.load.image('navBar','assets/commonAssets/navBar.png');
        this.load.image('timebg','assets/commonAssets/timebg.png');
        this.load.image('topicOutline','assets/commonAssets/topicOutline.png');

        this.load.atlas('Tick', 'assets/gradeAssets/NS-OE-1-G6/tick.png', null,NS_OE_1_G6_JSON.tickJson);
            
        
        this.load.image('bg', 'assets/gradeAssets/NS-OE-1-G6/Bg.png');
         
        this.load.atlas('ScreenTextBox','assets/gradeAssets/NS-OE-1-G6/ScreenTextBox.png',null,NS_OE_1_G6_JSON.ScreenTextBox);
        
        
        this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, NS_OE_1_G6_JSON.homebtnJson);
        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, NS_OE_1_G6_JSON.nextbtnJson);


        this.load.image('Appletray','assets/gradeAssets/NS-OE-1-G6/Apple Blocks.png');
        this.load.image('Eggtray','assets/gradeAssets/NS-OE-1-G6/Egg Blocks.png');

        this.load.atlas('Egg','assets/gradeAssets/NS-OE-1-G6/egg.png',null,NS_OE_1_G6_JSON.eggJson);
        this.load.atlas('Apple','assets/gradeAssets/NS-OE-1-G6/apple.png',null,NS_OE_1_G6_JSON.appleJson);
        this.load.image('Basket','assets/gradeAssets/NS-OE-1-G6/basket.png');
        this.load.image('BasketF','assets/gradeAssets/NS-OE-1-G6/Front part.png');
        this.load.image('BasketB','assets/gradeAssets/NS-OE-1-G6/Back part.png');
        this.load.image('NumberBox','assets/gradeAssets/NS-OE-1-G6/Number Box.png');
        this.load.atlas('eggBasket', 'assets/gradeAssets/NS-OE-1-G6/eggBasket.png',null, NS_OE_1_G6_JSON.eggBasketJson);
        this.load.atlas('appleBasket', 'assets/gradeAssets/NS-OE-1-G6/appleBasket.png',null, NS_OE_1_G6_JSON.appleBasketJson);
        // this.load.atlas('tickButton', 'assets/gradeAssets/NS-OE-1-G6/tick.png',null, NS_OE_1_G6_JSON.appleBasketJson);
        this.load.atlas('Tick', 'assets/gradeAssets/NS-OE-1-G6/tick.png', null,NS_OE_1_G6_JSON.tickJson);
       
        this.load.atlas('ThumbsUp','assets/gradeAssets/NS-OE-1-G6/thumbs_up.png',null, NS_OE_1_G6_JSON.thumbsUp);
        this.load.atlas('ThumbsDown','assets/gradeAssets/NS-OE-1-G6/thumbs_down.png',null, NS_OE_1_G6_JSON.thumbsDown);
        
        this.preloader_oe_1b();
	},
    
    preloader_oe_1b: function()
    {
//		this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,NS_OE_1B_G6_JSON.backbtnJson);
//        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,NS_OE_1B_G6_JSON.speakerJson);
//        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null,NS_OE_1B_G6_JSON.starAnimJson);
//        this.load.atlas('replay','assets/commonAssets/reply.png' ,null,NS_OE_1B_G6_JSON.replyJson);
//        this.load.atlas('btn','assets/commonAssets/btn.png',null,NS_OE_1B_G6_JSON.btnJson);
        
    
        
//        this.load.image('tittleBar','assets/commonAssets/tittleBar.png');
//        this.load.image('background','assets/commonAssets/bg.png');
//        this.load.image('navBar','assets/commonAssets/navBar.png');
//        this.load.image('timebg','assets/commonAssets/timebg.png');
//        this.load.image('topicOutline','assets/commonAssets/topicOutline.png');

//        this.load.atlas('Tick', 'assets/gradeAssets/NS-OE-1B-G6/tick.png', null,NS_OE_1B_G6_JSON.tickJson);
        this.load.atlas('newNumBox', 'assets/gradeAssets/NS-OE-1-G6/Number Box new.png', null,NS_OE_1_G6_JSON.NumberBoxnewJson);
            
        
//        this.load.image('bg', 'assets/gradeAssets/NS-OE-1B-G6/Bg.png');
//  this.load.atlas('ScreenTextBox' , 'assets/gradeAssets/NS-OE-1B-G6/ScreenTextBox.png', null, NS_OE_1B_G6_JSON.ScreenTextBox);
        
        
//        this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, NS_OE_1B_G6_JSON.homebtnJson);
//        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, NS_OE_1B_G6_JSON.nextbtnJson);


        this.load.image('AppletrayVert','assets/gradeAssets/NS-OE-1-G6/apple blocks2.png');
        this.load.image('EggtrayVert','assets/gradeAssets/NS-OE-1-G6/Egg blocks 2.png');

//        this.load.atlas('Egg','assets/gradeAssets/NS-OE-1B-G6/egg.png',null,NS_OE_1B_G6_JSON.eggJson);
//        this.load.atlas('Apple','assets/gradeAssets/NS-OE-1B-G6/apple.png',null,NS_OE_1B_G6_JSON.appleJson);
//        this.load.image('Basket','assets/gradeAssets/NS-OE-1B-G6/basket.png');
//        this.load.image('BasketF','assets/gradeAssets/NS-OE-1B-G6/Front part.png');
//        this.load.image('BasketB','assets/gradeAssets/NS-OE-1B-G6/Back part.png');
        //this.load.image('NumberBox','assets/gradeAssets/NS-OE-1B-G6/Number Box new.png');
        //this.load.atlas('eggBasket', 'assets/gradeAssets/NS-OE-1B-G6/eggBasket.png',null, NS_OE_1B_G6_JSON.eggBasketJson);
        //this.load.atlas('appleBasket', 'assets/gradeAssets/NS-OE-1B-G6/appleBasket.png',null, NS_OE_1B_G6_JSON.appleBasketJson);
        // this.load.atlas('tickButton', 'assets/gradeAssets/NS-OE-1B-G6/tick.png',null, NS_OE_1B_G6_JSON.appleBasketJson);
//        this.load.atlas('Tick', 'assets/gradeAssets/NS-OE-1B-G6/tick.png', null,NS_OE_1B_G6_JSON.tickJson);
       
//        this.load.atlas('ThumbsUp','assets/gradeAssets/NS-OE-1B-G6/thumbs_up.png',null, NS_OE_1B_G6_JSON.thumbsUp);
//        this.load.atlas('ThumbsDown','assets/gradeAssets/NS-OE-1B-G6/thumbs_down.png',null, NS_OE_1B_G6_JSON.thumbsDown);

    },

	create:function(){
		
        //this.state.start('NS_OE_1A_G6level1', true, false);
		this.state.start('NS_OE_1_G6demo', true, false); //* transition with clear world but not cache
        
    },
}