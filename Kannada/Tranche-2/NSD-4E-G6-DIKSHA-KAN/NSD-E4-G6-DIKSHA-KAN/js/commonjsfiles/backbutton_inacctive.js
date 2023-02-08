Game.Backbutton=function(game){

};

//*------------------------------------------------------------------------------------------
//* This is run when the backbutton is pressed to go back to menu in the App / stop in Diksha
//* This version is for APP to destroy the game and show the menu back on
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
            //* make the block which shows the menu visible now to show the html menu again.
            //* it is suppresed to display=none in boot.js while calling the game.
            //* give a small delay since this backbutton is right on top of home button on the menu.
            //* if back button is pressed for little longer, it takes as home button as pressed also.
            _this.time.events.add(450,function()
            {
                document.getElementById("first").style.display = "block";
                
            }); 
            
            //* use javascript timeout to destroy the game since phaser time object
            //* will not exist after game destroy and hence give time related error.
            setTimeout(function() 
            {
              _this.game.destroy();
            }, 550);	            
	},

	shutdown:function()
	{
        //telInitializer.tele_end();
	}

};