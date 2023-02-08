Game.Score=function(game){

};

//* This is the score update game for Diksha packages. It calls the Diksha telemetry APIs
//* to update the score (mmaximum 6 questions).
//* Note that this javascript score.js has to be used only in case of Diksha packages.
//* In the android apk, use the other score js which will show the screen with Home, replay, next
//* options.

Game.Score.prototype={
	preload:function(game)
	{

	},

	create:function(game)
    {
		_this = this;
        
        console.log("inside the score of Diksha");
    
        _this.ScoreUpdate();
	},
    
    //* score update function calls the telemetry api to initiate the question and save the score.
    
    ScoreUpdate: function()
    {
        var currentgame = sessionStorage.getItem("param2");
        
        telInitializer.gameIdInit(currentgame + "1");
        console.log("game initialize 1: " + currentgame + "1" );
        
        telInitializer.tele_saveAssessment(currentgame + "1","yes", null);
        
        telInitializer.gameIdInit(currentgame + "2");
        console.log("game initialize 2 " + currentgame + "2" );
        telInitializer.tele_saveAssessment(currentgame + "2","yes", null);
        
        telInitializer.gameIdInit(currentgame + "3");
        console.log("game initialize 3 " );
        telInitializer.tele_saveAssessment(currentgame + "3","yes", null);
        
        telInitializer.gameIdInit(currentgame + "4");
        console.log("game initialize 4 " );
        telInitializer.tele_saveAssessment(currentgame + "4","yes", null);
        
        telInitializer.gameIdInit(currentgame + "5");
        console.log("game initialize 5 " );
        telInitializer.tele_saveAssessment(currentgame + "5","yes", null);
        
        telInitializer.gameIdInit(currentgame + "6");
        console.log("game initialize 6 " );
        telInitializer.tele_saveAssessment(currentgame + "6","yes", null);
            
		console.log("iiiiiiiiiiinside score of diksha");
        
        telInitializer.tele_end();		            
	},

	shutdown:function()
	{
		//_this.background = null;
		//_this = null;
        //telInitializer.tele_end();
	}

};