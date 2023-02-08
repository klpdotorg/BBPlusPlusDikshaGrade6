Game.Backbutton=function(game){

};

//*------------------------------------------------------------------------------------------
//* This is run when the backbutton is pressed to go back to menu in the App / stop in Diksha
//* This version is for DIKSHA PORTAL to stop the game without any scores given
//*------------------------------------------------------------------------------------------ 


Game.Backbutton.prototype={
	preload:function(game)
	{

	},

	create:function(game)
    {
		_this = this;
    
        _this.StopGame();
	},
    
    //* score update function calls the telemetry api to initiate the question and save the score.
    
    StopGame: function()
    {
        telInitializer.tele_end();		            
	},

	shutdown:function()
	{
        telInitializer.tele_end();
	}

};