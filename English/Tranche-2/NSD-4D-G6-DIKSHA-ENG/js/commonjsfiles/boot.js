var Game={};
Game.boot=function(Game){

};
var defaultLanguage = 'en';


Game.boot.prototype={
	init:function(){

		this.input.maxPointers=1;
		this.input.mouse.enabled = false;

		this.stage.disableVisibilityChange=true;

	},

	preload:function(){
		 
        
	},
	create:function(){

		
		
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.updateLayout(true);
        this.scale.forceOrientation(false, true);
		
		this.game.add.text(0, 0, "hack", {font:"1px myfont", fill:"#FFFFFF"});
		this.game.add.text(0, 0, "jack", {font:"1px Akzidenz-Grotesk BQ", fill:"#000000"});

		//this.sound.setDecodedCallback([  ], function(){
		var param1 = sessionStorage.getItem("param2");
		console.log(param1);
        
        document.getElementById("first").style.display = "none";
        
		
		if(param1 == 1)
		{
			console.log(param1);
			this.state.start('preloader_oe_1a');
		}
		else if(param1 == 2)
		{
			console.log(param1);
			this.state.start('preloader_fm_1');
		}
		else if(param1 == 3)
		{
			console.log(param1);
			this.state.start('preloader_hcf_1');
		}
		else if(param1 == 4)
		{
			console.log(param1);
			this.state.start('preloader_prm_1');
		}
		else if(param1 == 5)
		{
			console.log(param1);
			this.state.start('preloader_fm_3');
		}
		else if(param1 == 6)
		{
			console.log(param1);
			this.state.start('preloader_fm_4a');
		}
		else if(param1 == 7)
		{
			console.log(param1);
			this.state.start('preloader_lcm_1');
		}
		else if(param1 == 8)
		{
			console.log(param1);
			this.state.start('preloader_int_1');
		}
		else if(param1 == 9)
		{
			console.log(param1);
			this.state.start('preloader_int_3');
		}
		else if(param1 == 10)
		{
			console.log(param1);
			this.state.start('preloader_int_5');
		}
		else if(param1 == 11)
		{
			console.log(param1);
			this.state.start('preloader_int_6');
		}
		else if(param1 == 12)   //hornbill game1
		{
			console.log(param1);
			this.state.start('preloader_int_5h');
		}
		else if(param1 == 13)  //hornbill game2
		{
			console.log(param1);
			this.state.start('preloader_int_6h');
		}
		else if(param1 == 14)  //Calling NSD_4D_G6
		{
			console.log(param1);
			this.state.start('preloader_NSD_4D_G6');
		}
		else if(param1 == 15)
		{
			console.log(param1);
			this.state.start('preloader_int_7');
		}
		else if(param1 == 16 )
		{
			console.log(param1);
			this.state.start('preloader_int_8');
		}
		else if(param1 == 17)
		{
			console.log(param1);
			this.state.start('preloader_int_9');
		}
		else if(param1 == 18)
		{
			console.log(param1);
			this.state.start('preloader_int_10');
		}
		else if(param1 == 19)
		{
			console.log(param1);
			this.state.start('preloader_int_11');
		}
		else if(param1 == 20)
		{
			console.log(param1);
			this.state.start('preloader_int_12');
		}
		else if(param1 == 21)   //* hornbill game4
		{
			console.log(param1);
			this.state.start('preloader_int_14h');
		}
		else if(param1 == 22)
		{
			console.log(param1);
			this.state.start('NSF_1A_G6demo');
		}
		else if(param1 == 23)
		{
			console.log(param1);
			this.state.start('preloader_nsf_2');
		}
		else if(param1 == 24)
		{
			console.log(param1);
			this.state.start('NSF_3_G6demo');
		}
		else if(param1 == 25)
		{
			console.log(param1);
			this.state.start('preloader_nsf_4');
		}
		else if(param1 == 26)
		{
			console.log(param1);
			this.state.start('preloader_nsf_5');
		}
		else if(param1 == 27)
		{
			console.log(param1);
			this.state.start('NSF_6_G6demo');
		}
		else if(param1 == 28)
		{
			console.log(param1);
			this.state.start('preloader_nsf_7');
		}
		else if(param1 == 29)
		{
			console.log(param1);
			this.state.start('preloader_nsf_8');
		}
		else if(param1 == 30)
		{
			console.log(param1);
			this.state.start('preloader_nsf_9');
		}
		else if(param1 == 31)
		{
			console.log(param1);
			this.state.start('preloader_nsf_10');
		}
		else if(param1 == 32)
		{
			console.log(param1);
			this.state.start('preloader_nsf_11');
		}
		else if(param1 == 33)
		{
			console.log(param1);
			this.state.start('preloader_nsf_12');
		}
		else if(param1 == 34)
		{
			console.log(param1);
			this.state.start('preloader_nsf_13');
		}
		else if(param1 == 35)
		{
			console.log(param1);
			this.state.start('preloader_nsf_14');
		}
		else if(param1 == 36)
		{
			console.log(param1);
			this.state.start('preloader_nsf_15');
		}     

	}

}

