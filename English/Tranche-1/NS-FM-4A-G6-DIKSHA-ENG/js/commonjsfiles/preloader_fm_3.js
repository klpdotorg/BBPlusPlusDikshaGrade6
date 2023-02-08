Game.preloader_fm_3=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_fm_3.prototype={
	preload:function(){
		
    window.NS_FM_3_G6level1 = true;

        this.load.video('fm_3_1','demoVideos/NS-FM-3-G6_1.mp4');  //* how to play the game

		this.load.image('skipArrow','assets/commonAssets/skipArrow.png');

//common for all games.
this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,NS_FM_3_G6_JSON.backbtnJson);
this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,NS_FM_3_G6_JSON.speakerJson);
        
this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null, NS_FM_3_G6_JSON.starAnimJson);
                
this.load.atlas('replay','assets/commonAssets/reply.png' ,null, NS_FM_3_G6_JSON.replayJson);
        
this.load.atlas('btn','assets/commonAssets/btn.png',null, NS_FM_3_G6_JSON.btnJson);

this.load.image('background1','assets/commonAssets/bg.png');
this.load.image('tittleBar','assets/commonAssets/tittleBar.png');
this.load.image('navBar','assets/commonAssets/navBar.png');
this.load.image('timebg','assets/commonAssets/timebg.png');

this.load.atlas('erase','assets/gradeAssets/NS-FM-3-G6/erase.png' ,null, NS_FM_3_G6_JSON.eraserJson);

this.load.atlas('rightmark','assets/gradeAssets/NS-FM-3-G6/rightmark.png' ,null, NS_FM_3_G6_JSON.rightmarkJson);
this.load.image('numBG','assets/commonAssets/numbg.png');
this.load.atlas('numberpad','assets/gradeAssets/NS-FM-3-G6/calNum.png', null, NS_FM_3_G6_JSON.calNumJson);
this.load.atlas('numbers1','assets/gradeAssets/NS-FM-3-G6/numbers1.png',null, NS_FM_3_G6_JSON.numbers1Json);

//game assets.
this.load.image('bg','assets/gradeAssets/NS-FM-3-G6/Bg.png');
             
this.load.atlas('imageBox','assets/gradeAssets/NS-FM-3-G6/imageBox.png',null, NS_FM_3_G6_JSON.imageBoxJson);
this.load.image('whiteBox','assets/gradeAssets/NS-FM-3-G6/whiteBox.png');
this.load.atlas('numberBox','assets/gradeAssets/NS-FM-3-G6/numberBox.png',null,NS_FM_3_G6_JSON.numberBoxJson);
this.load.atlas('squareBox','assets/gradeAssets/NS-FM-3-G6/numberBoxHL.png',null,NS_FM_3_G6_JSON.SquareBoxJson);

this.load.image('fullimage1','assets/gradeAssets/NS-FM-3-G6/image1Shapes/full image1.png');
this.load.image('shape1_1','assets/gradeAssets/NS-FM-3-G6/image1Shapes/shape1.png');
this.load.image('shape2_1','assets/gradeAssets/NS-FM-3-G6/image1Shapes/shape2.png');
this.load.image('shape3_1','assets/gradeAssets/NS-FM-3-G6/image1Shapes/shape3.png');
this.load.image('shape4_1','assets/gradeAssets/NS-FM-3-G6/image1Shapes/shape4.png');
this.load.image('shape5_1','assets/gradeAssets/NS-FM-3-G6/image1Shapes/shape5.png');
this.load.image('shape6_1','assets/gradeAssets/NS-FM-3-G6/image1Shapes/shape6.png');
this.load.image('shape7_1','assets/gradeAssets/NS-FM-3-G6/image1Shapes/shape7.png');
this.load.image('shape8_1','assets/gradeAssets/NS-FM-3-G6/image1Shapes/shape8.png');
this.load.image('shape9_1','assets/gradeAssets/NS-FM-3-G6/image1Shapes/shape9.png');

this.load.image('fullimage2','assets/gradeAssets/NS-FM-3-G6/image2Shapes/full image2.png');
this.load.image('shape1_2','assets/gradeAssets/NS-FM-3-G6/image2Shapes/shape1.png');
this.load.image('shape2_2','assets/gradeAssets/NS-FM-3-G6/image2Shapes/shape2.png');
this.load.image('shape3_2','assets/gradeAssets/NS-FM-3-G6/image2Shapes/shape3.png');
this.load.image('shape4_2','assets/gradeAssets/NS-FM-3-G6/image2Shapes/shape4.png');
this.load.image('shape5_2','assets/gradeAssets/NS-FM-3-G6/image2Shapes/shape5.png');
this.load.image('shape6_2','assets/gradeAssets/NS-FM-3-G6/image2Shapes/shape6.png');
this.load.image('shape7_2','assets/gradeAssets/NS-FM-3-G6/image2Shapes/shape7.png');
this.load.image('shape8_2','assets/gradeAssets/NS-FM-3-G6/image2Shapes/shape8.png');
this.load.image('shape9_2','assets/gradeAssets/NS-FM-3-G6/image2Shapes/shape9.png');

this.load.image('fullimage3','assets/gradeAssets/NS-FM-3-G6/image3Shapes/full image3.png');
this.load.image('shape1_3','assets/gradeAssets/NS-FM-3-G6/image3Shapes/shape1.png');
this.load.image('shape2_3','assets/gradeAssets/NS-FM-3-G6/image3Shapes/shape2.png');
this.load.image('shape3_3','assets/gradeAssets/NS-FM-3-G6/image3Shapes/shape3.png');
this.load.image('shape4_3','assets/gradeAssets/NS-FM-3-G6/image3Shapes/shape4.png');
this.load.image('shape5_3','assets/gradeAssets/NS-FM-3-G6/image3Shapes/shape5.png');
this.load.image('shape6_3','assets/gradeAssets/NS-FM-3-G6/image3Shapes/shape6.png');
this.load.image('shape7_3','assets/gradeAssets/NS-FM-3-G6/image3Shapes/shape7.png');
this.load.image('shape8_3','assets/gradeAssets/NS-FM-3-G6/image3Shapes/shape8.png');
this.load.image('shape9_3','assets/gradeAssets/NS-FM-3-G6/image3Shapes/shape9.png');

this.load.image('fullimage4','assets/gradeAssets/NS-FM-3-G6/image4Shapes/full image4.png');
this.load.image('shape1_4','assets/gradeAssets/NS-FM-3-G6/image4Shapes/shape1.png');
this.load.image('shape2_4','assets/gradeAssets/NS-FM-3-G6/image4Shapes/shape2.png');
this.load.image('shape3_4','assets/gradeAssets/NS-FM-3-G6/image4Shapes/shape3.png');
this.load.image('shape4_4','assets/gradeAssets/NS-FM-3-G6/image4Shapes/shape4.png');
this.load.image('shape5_4','assets/gradeAssets/NS-FM-3-G6/image4Shapes/shape5.png');
this.load.image('shape6_4','assets/gradeAssets/NS-FM-3-G6/image4Shapes/shape6.png');
this.load.image('shape7_4','assets/gradeAssets/NS-FM-3-G6/image4Shapes/shape7.png');
this.load.image('shape8_4','assets/gradeAssets/NS-FM-3-G6/image4Shapes/shape8.png');
this.load.image('shape9_4','assets/gradeAssets/NS-FM-3-G6/image4Shapes/shape9.png');

this.load.image('fullimage5','assets/gradeAssets/NS-FM-3-G6/image5Shapes/full image5.png');
this.load.image('shape1_5','assets/gradeAssets/NS-FM-3-G6/image5Shapes/shape1.png');
this.load.image('shape2_5','assets/gradeAssets/NS-FM-3-G6/image5Shapes/shape2.png');
this.load.image('shape3_5','assets/gradeAssets/NS-FM-3-G6/image5Shapes/shape3.png');
this.load.image('shape4_5','assets/gradeAssets/NS-FM-3-G6/image5Shapes/shape4.png');
this.load.image('shape5_5','assets/gradeAssets/NS-FM-3-G6/image5Shapes/shape5.png');
this.load.image('shape6_5','assets/gradeAssets/NS-FM-3-G6/image5Shapes/shape6.png');
this.load.image('shape7_5','assets/gradeAssets/NS-FM-3-G6/image5Shapes/shape7.png');
this.load.image('shape8_5','assets/gradeAssets/NS-FM-3-G6/image5Shapes/shape8.png');
this.load.image('shape9_5','assets/gradeAssets/NS-FM-3-G6/image5Shapes/shape9.png');

this.load.image('fullimage6','assets/gradeAssets/NS-FM-3-G6/image6Shapes/full image6.png');
this.load.image('shape1_6','assets/gradeAssets/NS-FM-3-G6/image6Shapes/shape1.png');
this.load.image('shape2_6','assets/gradeAssets/NS-FM-3-G6/image6Shapes/shape2.png');
this.load.image('shape3_6','assets/gradeAssets/NS-FM-3-G6/image6Shapes/shape3.png');
this.load.image('shape4_6','assets/gradeAssets/NS-FM-3-G6/image6Shapes/shape4.png');
this.load.image('shape5_6','assets/gradeAssets/NS-FM-3-G6/image6Shapes/shape5.png');
this.load.image('shape6_6','assets/gradeAssets/NS-FM-3-G6/image6Shapes/shape6.png');
this.load.image('shape7_6','assets/gradeAssets/NS-FM-3-G6/image6Shapes/shape7.png');
this.load.image('shape8_6','assets/gradeAssets/NS-FM-3-G6/image6Shapes/shape8.png');
this.load.image('shape9_6','assets/gradeAssets/NS-FM-3-G6/image6Shapes/shape9.png');

this.load.image('fullimage7','assets/gradeAssets/NS-FM-3-G6/image7Shapes/full image7.png');
this.load.image('shape1_7','assets/gradeAssets/NS-FM-3-G6/image7Shapes/shape1.png');
this.load.image('shape2_7','assets/gradeAssets/NS-FM-3-G6/image7Shapes/shape2.png');
this.load.image('shape3_7','assets/gradeAssets/NS-FM-3-G6/image7Shapes/shape3.png');
this.load.image('shape4_7','assets/gradeAssets/NS-FM-3-G6/image7Shapes/shape4.png');
this.load.image('shape5_7','assets/gradeAssets/NS-FM-3-G6/image7Shapes/shape5.png');
this.load.image('shape6_7','assets/gradeAssets/NS-FM-3-G6/image7Shapes/shape6.png');
this.load.image('shape7_7','assets/gradeAssets/NS-FM-3-G6/image7Shapes/shape7.png');
this.load.image('shape8_7','assets/gradeAssets/NS-FM-3-G6/image7Shapes/shape8.png');
this.load.image('shape9_7','assets/gradeAssets/NS-FM-3-G6/image7Shapes/shape9.png');

this.load.image('fullimage8','assets/gradeAssets/NS-FM-3-G6/image8Shapes/full image8.png');
this.load.image('shape1_8','assets/gradeAssets/NS-FM-3-G6/image8Shapes/shape1.png');
this.load.image('shape2_8','assets/gradeAssets/NS-FM-3-G6/image8Shapes/shape2.png');
this.load.image('shape3_8','assets/gradeAssets/NS-FM-3-G6/image8Shapes/shape3.png');
this.load.image('shape4_8','assets/gradeAssets/NS-FM-3-G6/image8Shapes/shape4.png');
this.load.image('shape5_8','assets/gradeAssets/NS-FM-3-G6/image8Shapes/shape5.png');
this.load.image('shape6_8','assets/gradeAssets/NS-FM-3-G6/image8Shapes/shape6.png');
this.load.image('shape7_8','assets/gradeAssets/NS-FM-3-G6/image8Shapes/shape7.png');
this.load.image('shape8_8','assets/gradeAssets/NS-FM-3-G6/image8Shapes/shape8.png');
this.load.image('shape9_8','assets/gradeAssets/NS-FM-3-G6/image8Shapes/shape9.png');

this.load.image('fullimage9','assets/gradeAssets/NS-FM-3-G6/image9Shapes/full image9.png');
this.load.image('shape1_9','assets/gradeAssets/NS-FM-3-G6/image9Shapes/shape1.png');
this.load.image('shape2_9','assets/gradeAssets/NS-FM-3-G6/image9Shapes/shape2.png');
this.load.image('shape3_9','assets/gradeAssets/NS-FM-3-G6/image9Shapes/shape3.png');
this.load.image('shape4_9','assets/gradeAssets/NS-FM-3-G6/image9Shapes/shape4.png');
this.load.image('shape5_9','assets/gradeAssets/NS-FM-3-G6/image9Shapes/shape5.png');
this.load.image('shape6_9','assets/gradeAssets/NS-FM-3-G6/image9Shapes/shape6.png');
this.load.image('shape7_9','assets/gradeAssets/NS-FM-3-G6/image9Shapes/shape7.png');
this.load.image('shape8_9','assets/gradeAssets/NS-FM-3-G6/image9Shapes/shape8.png');
this.load.image('shape9_9','assets/gradeAssets/NS-FM-3-G6/image9Shapes/shape9.png');

this.load.image('fullimage10','assets/gradeAssets/NS-FM-3-G6/image10Shapes/full image10.png');
this.load.image('shape1_10','assets/gradeAssets/NS-FM-3-G6/image10Shapes/shape1.png');
this.load.image('shape2_10','assets/gradeAssets/NS-FM-3-G6/image10Shapes/shape2.png');
this.load.image('shape3_10','assets/gradeAssets/NS-FM-3-G6/image10Shapes/shape3.png');
this.load.image('shape4_10','assets/gradeAssets/NS-FM-3-G6/image10Shapes/shape4.png');
this.load.image('shape5_10','assets/gradeAssets/NS-FM-3-G6/image10Shapes/shape5.png');
this.load.image('shape6_10','assets/gradeAssets/NS-FM-3-G6/image10Shapes/shape6.png');
this.load.image('shape7_10','assets/gradeAssets/NS-FM-3-G6/image10Shapes/shape7.png');
this.load.image('shape8_10','assets/gradeAssets/NS-FM-3-G6/image10Shapes/shape8.png');
this.load.image('shape9_10','assets/gradeAssets/NS-FM-3-G6/image10Shapes/shape9.png');

this.load.image('fullimage11','assets/gradeAssets/NS-FM-3-G6/image11Shapes/full image11.png');
this.load.image('shape1_11','assets/gradeAssets/NS-FM-3-G6/image11Shapes/shape1.png');
this.load.image('shape2_11','assets/gradeAssets/NS-FM-3-G6/image11Shapes/shape2.png');
this.load.image('shape3_11','assets/gradeAssets/NS-FM-3-G6/image11Shapes/shape3.png');
this.load.image('shape4_11','assets/gradeAssets/NS-FM-3-G6/image11Shapes/shape4.png');
this.load.image('shape5_11','assets/gradeAssets/NS-FM-3-G6/image11Shapes/shape5.png');
this.load.image('shape6_11','assets/gradeAssets/NS-FM-3-G6/image11Shapes/shape6.png');
this.load.image('shape7_11','assets/gradeAssets/NS-FM-3-G6/image11Shapes/shape7.png');
this.load.image('shape8_11','assets/gradeAssets/NS-FM-3-G6/image11Shapes/shape8.png');
this.load.image('shape9_11','assets/gradeAssets/NS-FM-3-G6/image11Shapes/shape9.png');

this.load.image('fullimage12','assets/gradeAssets/NS-FM-3-G6/image12Shapes/full image12.png');
this.load.image('shape1_12','assets/gradeAssets/NS-FM-3-G6/image12Shapes/shape1.png');
this.load.image('shape2_12','assets/gradeAssets/NS-FM-3-G6/image12Shapes/shape2.png');
this.load.image('shape3_12','assets/gradeAssets/NS-FM-3-G6/image12Shapes/shape3.png');
this.load.image('shape4_12','assets/gradeAssets/NS-FM-3-G6/image12Shapes/shape4.png');
this.load.image('shape5_12','assets/gradeAssets/NS-FM-3-G6/image12Shapes/shape5.png');
this.load.image('shape6_12','assets/gradeAssets/NS-FM-3-G6/image12Shapes/shape6.png');
this.load.image('shape7_12','assets/gradeAssets/NS-FM-3-G6/image12Shapes/shape7.png');
this.load.image('shape8_12','assets/gradeAssets/NS-FM-3-G6/image12Shapes/shape8.png');
this.load.image('shape9_12','assets/gradeAssets/NS-FM-3-G6/image12Shapes/shape9.png');

this.load.image('fullimage13','assets/gradeAssets/NS-FM-3-G6/image13Shapes/full image13.png');
this.load.image('shape1_13','assets/gradeAssets/NS-FM-3-G6/image13Shapes/shape1.png');
this.load.image('shape2_13','assets/gradeAssets/NS-FM-3-G6/image13Shapes/shape2.png');
this.load.image('shape3_13','assets/gradeAssets/NS-FM-3-G6/image13Shapes/shape3.png');
this.load.image('shape4_13','assets/gradeAssets/NS-FM-3-G6/image13Shapes/shape4.png');
this.load.image('shape5_13','assets/gradeAssets/NS-FM-3-G6/image13Shapes/shape5.png');
this.load.image('shape6_13','assets/gradeAssets/NS-FM-3-G6/image13Shapes/shape6.png');
this.load.image('shape7_13','assets/gradeAssets/NS-FM-3-G6/image13Shapes/shape7.png');
this.load.image('shape8_13','assets/gradeAssets/NS-FM-3-G6/image13Shapes/shape8.png');
this.load.image('shape9_13','assets/gradeAssets/NS-FM-3-G6/image13Shapes/shape9.png');

this.load.image('fullimage14','assets/gradeAssets/NS-FM-3-G6/image14Shapes/full image14.png');
this.load.image('shape1_14','assets/gradeAssets/NS-FM-3-G6/image14Shapes/shape1.png');
this.load.image('shape2_14','assets/gradeAssets/NS-FM-3-G6/image14Shapes/shape2.png');
this.load.image('shape3_14','assets/gradeAssets/NS-FM-3-G6/image14Shapes/shape3.png');
this.load.image('shape4_14','assets/gradeAssets/NS-FM-3-G6/image14Shapes/shape4.png');
this.load.image('shape5_14','assets/gradeAssets/NS-FM-3-G6/image14Shapes/shape5.png');
this.load.image('shape6_14','assets/gradeAssets/NS-FM-3-G6/image14Shapes/shape6.png');
this.load.image('shape7_14','assets/gradeAssets/NS-FM-3-G6/image14Shapes/shape7.png');
this.load.image('shape8_14','assets/gradeAssets/NS-FM-3-G6/image14Shapes/shape8.png');
this.load.image('shape9_14','assets/gradeAssets/NS-FM-3-G6/image14Shapes/shape9.png');

this.load.image('fullimage15','assets/gradeAssets/NS-FM-3-G6/image15Shapes/full image15.png');
this.load.image('shape1_15','assets/gradeAssets/NS-FM-3-G6/image15Shapes/shape1.png');
this.load.image('shape2_15','assets/gradeAssets/NS-FM-3-G6/image15Shapes/shape2.png');
this.load.image('shape3_15','assets/gradeAssets/NS-FM-3-G6/image15Shapes/shape3.png');
this.load.image('shape4_15','assets/gradeAssets/NS-FM-3-G6/image15Shapes/shape4.png');
this.load.image('shape5_15','assets/gradeAssets/NS-FM-3-G6/image15Shapes/shape5.png');
this.load.image('shape6_15','assets/gradeAssets/NS-FM-3-G6/image15Shapes/shape6.png');
this.load.image('shape7_15','assets/gradeAssets/NS-FM-3-G6/image15Shapes/shape7.png');
this.load.image('shape8_15','assets/gradeAssets/NS-FM-3-G6/image15Shapes/shape8.png');
this.load.image('shape9_15','assets/gradeAssets/NS-FM-3-G6/image15Shapes/shape9.png');

this.load.image('fullimage16','assets/gradeAssets/NS-FM-3-G6/image16Shapes/full image16.png');
this.load.image('shape1_16','assets/gradeAssets/NS-FM-3-G6/image16Shapes/shape1.png');
this.load.image('shape2_16','assets/gradeAssets/NS-FM-3-G6/image16Shapes/shape2.png');
this.load.image('shape3_16','assets/gradeAssets/NS-FM-3-G6/image16Shapes/shape3.png');
this.load.image('shape4_16','assets/gradeAssets/NS-FM-3-G6/image16Shapes/shape4.png');
this.load.image('shape5_16','assets/gradeAssets/NS-FM-3-G6/image16Shapes/shape5.png');
this.load.image('shape6_16','assets/gradeAssets/NS-FM-3-G6/image16Shapes/shape6.png');
this.load.image('shape7_16','assets/gradeAssets/NS-FM-3-G6/image16Shapes/shape7.png');
this.load.image('shape8_16','assets/gradeAssets/NS-FM-3-G6/image16Shapes/shape8.png');
this.load.image('shape9_16','assets/gradeAssets/NS-FM-3-G6/image16Shapes/shape9.png');


	},

	create:function(){
		
		this.state.start('NS_FM_3_G6demo');
        
    },
}