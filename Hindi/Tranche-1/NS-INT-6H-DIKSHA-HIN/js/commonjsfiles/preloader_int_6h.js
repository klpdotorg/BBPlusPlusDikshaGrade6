Game.preloader_int_6h=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_int_6h.prototype={
	preload:function(){
		
		    this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,NS_INT_6H_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,NS_INT_6H_G6_JSON.speakerJson);
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null,NS_INT_6H_G6_JSON.starAnimJson);
        this.load.image('numpadbg','assets/commonAssets/numbg.png');
        this.load.atlas('replay','assets/commonAssets/reply.png' ,null,NS_INT_6H_G6_JSON.replyJson);
        this.load.atlas('btn','assets/commonAssets/btn.png',null,NS_INT_6H_G6_JSON.btnJson);
        this.load.image('hand','assets/commonAssets/hand.png');

        // Header and footer
        this.load.image('header', 'assets/gradeAssets/NS-INT-6H-G6/header.png');
        this.load.image('footer', 'assets/gradeAssets/NS-INT-6H-G6/footer.png');
        this.load.image('close', 'assets/gradeAssets/NS-INT-6H-G6/close.png');


        //navbar
        this.load.image('navBar','assets/commonAssets/navBar.png');

        //time
        this.load.image('timebg','assets/commonAssets/timebg.png');

        //background
        this.load.image('bg', 'assets/gradeAssets/NS-INT-6H-G6/bg.png');

        // Dicebox
        this.load.image('dicebox', 'assets/gradeAssets/NS-INT-6H-G6/dice.png');

        // Skipbtn
        this.load.image('skip','assets/commonAssets/skipArrow.png');
        
        

        // Frogs
        this.load.image('frog', 'assets/gradeAssets/NS-INT-6H-G6/frog.png');
        this.load.image('leftfrog', 'assets/gradeAssets/NS-INT-6H-G6/flipleft.png');
        this.load.image('rightfrog', 'assets/gradeAssets/NS-INT-6H-G6/flipright.png');
        this.load.image('flipfrog', 'assets/gradeAssets/NS-INT-6H-G6/frogFlip.png');



        // Grid boxes
        this.load.image('outerbox', 'assets/gradeAssets/NS-INT-6H-G6/outerbox.png');
        this.load.image('box', 'assets/gradeAssets/NS-INT-6H-G6/box.png');
        this.load.image('greenbox', 'assets/gradeAssets/NS-INT-6H-G6/bgplain.png');

       
        // number and signs
        this.load.image('numberplate', 'assets/gradeAssets/NS-INT-6H-G6/numberwithsign.png');
        this.load.image('lesser', 'assets/gradeAssets/NS-INT-6H-G6/lesser.png');
        this.load.image('greater', 'assets/gradeAssets/NS-INT-6H-G6/greater.png');

        // Blue Box
        this.load.image('blueBox', 'assets/gradeAssets/NS-INT-6H-G6/Group 1846-2.png');



        this.load.image('lightFrog', 'assets/gradeAssets/NS-INT-6H-G6/frog - Copy.png');
        // Arrows
        this.load.image('arrow1', 'assets/gradeAssets/NS-INT-6H-G6/arrow-1.png');
        this.load.image('arrow2', 'assets/gradeAssets/NS-INT-6H-G6/arrow-2.png');
        this.load.image('arrow2Flipped', 'assets/gradeAssets/NS-INT-6H-G6/arrow-2Flip.png');

        this.load.image('arrow3', 'assets/gradeAssets/NS-INT-6H-G6/arrow-3.png');



        // Tick 
        this.load.image('tick', 'assets/gradeAssets/NS-INT-6H-G6/tick.png');
         
        this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, NS_INT_6H_G6_JSON.homebtnJson);
        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, NS_INT_6H_G6_JSON.nextbtnJson);
       
	},

	create:function(){
		
		this.state.start('NS_INT_6H_G6level1');
        
    },
}