Game.preloader_gmcr_01 = function (game) {
        this.preloadBar = null;
};

var chime, clockTick;
Game.preloader_gmcr_01.prototype = {
        preload: function () {

                this.load.image('table', 'assets/gradeAssets/GMCR-01-G6/bg 2.png');
                this.load.atlas('circle1', 'assets/gradeAssets/GMCR-01-G6/01.png', 'assets/commonAssets/01.json');
                this.load.atlas('circle', 'assets/gradeAssets/GMCR-01-G6/1.png', 'assets/commonAssets/1.json');
                this.load.atlas('circle2', 'assets/gradeAssets/GMCR-01-G6/2.png', 'assets/commonAssets/2.json');
                this.load.image('commonBg2','assets/commonAssets/commonBg2.png');
                this.load.image('Level42C_Topbar', 'assets/commonAssets/Topbar.png');
                this.load.atlas('newCommonBackBtnForAll', 'assets/commonAssets/newBackBtn.png','assets/commonAssets/newBackBtn.json');
                this.load.image('Level42C_timer', 'assets/commonAssets/timerBg.png');
		this.load.atlas('grade11_speaker','assets/commonAssets/grade11_speaker.png', 'assets/commonAssets/grade11_speaker.json');
                this.load.atlas('starAnim1', 'assets/commonAssets/starAnim1.png', 'assets/commonAssets/starAnim1.json');


                this.load.atlas('rightBtn', 'assets/gradeAssets/GMCR-01-G6/tickBtn.png', 'assets/commonAssets/tickBtn.json');
                this.load.image('skipArrow', 'assets/commonAssets/skipArrow.png');
                this.load.atlas('backbtn', 'assets/commonAssets/backbtn.png', null, GMCR_01_G6_JSON.backbtnJson);
                this.load.atlas('CommonSpeakerBtn', 'assets/commonAssets/speaker.png', null, GMCR_01_G6_JSON.speakerJson);
                this.load.atlas('starAnim', 'assets/commonAssets/starAnim.png', null, GMCR_01_G6_JSON.starAnimJson);
                this.load.image('hand', 'assets/commonAssets/hand.png');

                this.load.atlas('replay', 'assets/commonAssets/replayBtn.png', null, GMCR_01_G6_JSON.replayJson);
                // this.load.atlas('btn', 'assets/commonAssets/btn.png', null, GMCR_01_G6_JSON.btnJson);
                this.load.atlas('tickbtn', 'assets/commonAssets/tick.png', null, GMCR_01_G6_JSON.tickJson);


                //navbar
                this.load.image('navBar', 'assets/commonAssets/navBar.png');

                //time
                //this.load.image('timebg', 'assets/commonAssets/timebg.png');

                this.load.audio('wrongSound', 'sounds/WrongCelebrationSound.mp3');
                this.load.audio('ClickSound', 'sounds/ClickSound.mp3');
                this.load.audio('celebrationSound', 'sounds/celebration.mp3');


        },

        create: function () {

                this.state.start('GMCR_01_G6level1');

        },
}