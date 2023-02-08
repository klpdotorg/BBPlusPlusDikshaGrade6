Game.preloader_nsf_4=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_nsf_4.prototype={
	preload:function()
    {
        console.log("inside preloader of nsf4");
        
        
        this.load.image('prgressbarOutLine', 'assets/commonAssets/prgressbarOutLine.png');
        this.load.image('preloadBar','assets/commonAssets/prgressbar.png'); 
        this.load.image('Level42C_Topbar','assets/commonAssets/topbar.png');
        this.load.image('Level42C_timer','assets/commonAssets/timer.png');
        
//        if(!window.grade5NSF5)
//        {        
//             var preloadGrp = this.add.group();
//             this.preloadBarOutline = this.add.sprite(this.world.centerX,this.world.centerY,'prgressbarOutLine');
//             //_this.preloadBarOutline.anchor.setTo(0.5,0.5);
//             this.preloadBars = this.add.sprite(this.world.centerX,this.world.centerY,'preloadBar');
//
//             //_this.preloadBar.anchor.setTo(0.5,0.5);
//             this.time.advanceTiming=true;
//             this.load.setPreloadSprite(this.preloadBars);
//
//             preloadGrp.add(this.preloadBarOutline);
//             preloadGrp.add(this.preloadBars);
//
//             preloadGrp.x -= 105;
//        }
    },

	create:function()
    {
        console.log("starting nsf4 level1");
		this.state.start('NSF_4_G6level1');
    },
}