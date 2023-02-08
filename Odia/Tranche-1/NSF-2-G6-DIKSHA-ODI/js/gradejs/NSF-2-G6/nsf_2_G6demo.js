//* NOT USED HERE
Game.NSF_2_G6demo = function () {};

Game.NSF_2_G6demo.prototype = {

    init: function (game) 
    {
        _this = this;

        //* THIS GAME PLAYS DEMO VIDEO FOR NSF2 GAME
        //* User can skip the video to go to the game. Backbutton takes back to the menu.
        
//************************************** to be used in the Addition-Subtraction games.***********
//        //* get the session parameter if the demo is already seen.
//        //* if it is already seen, then set the parameter to 1 and skip the demo now.
//		var addDemoseen = sessionStorage.getItem("param1");
//        
//        if (addDemoseen == 1) _this.state.start('NS_INT_1_G6level1');   //* skip to game.
//        else                                                            //* set flg and continue demo
//        {
//            addDemoseen = 1;
//            sessionStorage.setItem("param1", addDemoseen);
//        }
//*************************************************************************************************
        
        _this.languageSelected = document.getElementById("LANGUAGE").innerHTML;
        
        if (_this.languageSelected == null 
            || _this.languageSelected == " "
            || _this.languageSelected == "")
        {
            _this.languageSelected = "ENG";
        }
        else console.log("Language selected: " + _this.languageSelected);
        console.log("inside nsf 2 demo video module");
    },

    create: function (game) 
    {        
        _this.DemoVideo();  //* call the function to show the video
    },
    
    DemoVideo: function()
    {
        _this.game.paused = true;
        //* This game introduces the concept of Fraction as part of a collection
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", "questionSounds/NSF-2-G6/" + 
                                         _this.languageSelected + "/NSF-2-G6-demo.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src); 

        //* how many cubes are there
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", "questionSounds/NSF-2-G6/" + 
                                         _this.languageSelected + "/NSF-2-G6-a.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);
        
        //* represent the colored cubes as a fraction
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", "questionSounds/NSF-2-G6/" + 
                                         _this.languageSelected + "/NSF-2-G6-b.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);
        
        _this.showDemoVideo();  //* call the function to show the video
        
        _this.backbtn = _this.add.sprite(5,6,'backbtn');         //* back button at the top.
        _this.backbtn.inputEnabled = true;
        _this.backbtn.input.useHandCursor = true;
        _this.backbtn.events.onInputDown.add(function ()
        {
            //_this.clickSound.play();
            _this.stopVideo();
            _this.stopAudio();
            _this.videoWorld.destroy();
            _this.skip.destroy();
            //_this.game.paused = false;  //* restart the game
            _this.state.start('NSF_2_G6level1');  //* start the game now.

        });
            
        _this.skip = _this.add.image(870, 390, 'skipArrow');       //* skip button shown at the bottom
        _this.skip.inputEnabled = true;
        _this.skip.input.useHandCursor = true;
        _this.skip.events.onInputDown.add(function ()
        {
            //_this.clickSound.play();
            _this.stopVideo();
            _this.stopAudio();
            _this.videoWorld.destroy();
            _this.skip.destroy();
            //_this.game.paused = false;  //* restart the game
            _this.state.start('NSF_2_G6level1'); //* start the game now.
        });
    },
    
    //* function to stop the video and audio if they are playing.
    stopVideo: function()
    {
        console.log("inside stop video");
        if (_this.demoVideo_1)
        {
            console.log("removing the video");
            _this.demoVideo_1.destroy();
            _this.videoWorld.destroy();
        }
    },
    
    stopAudio: function()
    {    
        //* clear all the timers first
        
        if (_this.q2Timer) clearTimeout(_this.q2Timer);      
        
        if (_this.dVTimer) clearTimeout(_this.dVTimer);
        
        if (_this.demoAudio1)
        {
            console.log("removing the demo audio1");
            _this.demoAudio1.pause();
            _this.demoAudio1.removeEventListener('ended', _this.dA1);
            _this.demoAudio1 = null;
            _this.demoAudio1src = null;
        }
        
        if (_this.q1Sound)
        {
            console.log("removing the q1");
            _this.q1Sound.pause();
            _this.q1Sound.removeEventListener('ended', _this.qA1);
            _this.q1Sound = null;
            _this.q1Soundsrc = null;
        }
        //_this.time.events.removeAll(); cannot remove time events...animations wont work if removed
        _this.skip.events.onInputDown.removeAll();
    },
    
    //* event functions for demo audio and question audios. 
    //* do the action as required for synching with video. See showVideo
    //* function & actual videos/audios to understand the flow of audio and video.
    dA1: function()
    {
        _this.q1Sound.play();
    },
    
    showDemoVideo: function()
    {
        //* As _this.game is paused, phaser time events cannot be used since its timer is stopped.
        //* so we have to use js timers as required
        _this.demoAudio1.play(); 
        _this.demoVideo_1 = _this.add.video('nsf2_1');              
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource("demoVideos/NSF-2-G6_1.MP4");
        _this.videoWorld = _this.demoVideo_1.addToWorld();
        
        _this.demoAudio1.addEventListener('ended', _this.dA1);  //* play question 1
        
        _this.q2Timer = setTimeout(function()    //* q2 js timer to play q2 after 15 seconds.
        {
            clearTimeout(_this.q2Timer);         //* clear the time once its used.
            _this.q2Sound.play();
        }, 15000); 
        
        _this.dVTimer = setTimeout(function()   //* dvTimer - add a js timer to stop demovideo after 25 seconds.
        {
            _this.stopAudio();                  //* stop timers and audios
            _this.demoVideo_1.stop(false);      //* stop vide.
            _this.skip.events.onInputDown.removeAll();
            _this.videoWorld.destroy();         //* destroy the video, gets removed from screen.
            _this.skip.destroy();               //* skip button destroyed
            _this.demoVideo_1.destroy();        //* video destroyed
            //_this.game.paused = false;          //* now, unpause the game, so that it continues.
            console.log("starting the game now from demo video module");
            _this.state.start('NSF_2_G6level1'); //* start the game now.
            
        }, 25000); 
    }
}

//* video related commands     
//        _this.video.changeSource("assets/demoVideos/7_1_1.mp4");
//        _this.videoWorld = this.video.addToWorld();
//        _this.video2.stop(false);
//        _this.video2.onComplete.add(function() {})
//        _this.video3.playbackRate = 1; 
//        _this.game.paused = true; //* pauses the game.
//        _this.videoWorld.destroy(); //* removes video from screen
    
