Game.preloader_GMS_03_G6 = function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_GMS_03_G6.prototype=
{
	preload:function()
    {
		
    console.log("inside preloader of nsf");
        
            //this.load.video('nsf2_1','demoVideos/NSF-2-G6_1.mp4');   //* include demo video of nsf-2 game.
            //_this.load.atlas('backbtn','assets/commonAssets/backbtn.png','assets/commonAssets/bkbtn.json');
             //  this.load.image('skipArrow','assets/commonAssets/skipArrow.png');
            this.load.image('commonBg2','assets/commonAssets/commonBg2.png');
        
            this.load.audio('WrongCelebrationSound', 'sounds/WrongCelebrationSound.mp3');
            this.load.audio('ClickSound', 'sounds/ClickSound.mp3');
            this.load.audio('celebration', 'sounds/celebration.mp3');
    },

	create:function()
    {
		
		this.state.start('GMS_03_G6level1');
        
    },
}