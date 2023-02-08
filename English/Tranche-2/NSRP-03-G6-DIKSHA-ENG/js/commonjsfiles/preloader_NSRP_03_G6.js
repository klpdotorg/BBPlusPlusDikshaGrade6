Game.preloader_NSRP_03_G6 = function (game) {
        this.preloadBar = null;



};

var chime, clockTick;
Game.preloader_NSRP_03_G6.prototype = {
        preload: function () {
                this.load.video('nsrp03_1','demoVideos/NSRP-03-G6.mp4');   //* include demo video of game.
                this.load.image('skipArrow','assets/commonAssets/skipArrow.png');
                
                this.load.atlas('bulb','assets/commonAssets/bulb.png',null,NSRP_03_G6_JSON.bulbBtnJson);

                this.load.atlas('backbtn', 'assets/commonAssets/backbtn.png', null, NSRP_03_G6_JSON.backbtnJson);
                this.load.atlas('CommonSpeakerBtn', 'assets/commonAssets/speaker.png', null, NSRP_03_G6_JSON.speakerJson);
                this.load.atlas('starAnim', 'assets/commonAssets/starAnim.png', null, NSRP_03_G6_JSON.starAnimJson);
                this.load.atlas('replay', 'assets/commonAssets/reply.png', null, NSRP_03_G6_JSON.replyJson);

                this.load.image('navBar', 'assets/commonAssets/navBar.png');
                this.load.image('timebg', 'assets/commonAssets/timebg.png');
                this.load.image('hand', 'assets/commonAssets/hand.png');


                this.load.atlas('CommonHomeBtn', 'assets/commonAssets/homeBtn.png', null, NSRP_03_G6_JSON.homebtnJson);
                this.load.atlas('CommonNextBtn', 'assets/commonAssets/nextBtn.png', null, NSRP_03_G6_JSON.nextbtnJson);

                this.load.image('bg', 'assets/gradeAssets/NSRP-03-G6/Bg.png');
                this.load.atlas('TickBtn', 'assets/gradeAssets/NSRP-03-G6/TickBtn.png', null, NSRP_03_G6_JSON.tickJson);

                this.load.image('Text box_2', 'assets/gradeAssets/NSRP-03-G6/text box_2.png');

                this.load.atlas('Numberpad', 'assets/gradeAssets/NSRP-03-G6/number pad.png', null, NSRP_03_G6_JSON.numberpadJson)
                this.load.image('numpadbg', 'assets/gradeAssets/NSRP-03-G6/numbg.png');

                this.load.atlas('white-box', 'assets/gradeAssets/NSRP-03-G6/new box.png', null, NSRP_03_G6_JSON.SquareBoxJson);


                // Trays
                this.load.image('GreenPlate', 'assets/gradeAssets/NSRP-03-G6/plate_Green.png');
                this.load.image('OrangePlate', 'assets/gradeAssets/NSRP-03-G6/plate_Orange.png');
                this.load.image('WhitePlate', 'assets/gradeAssets/NSRP-03-G6/plate_white.png');
                this.load.image('GreenTray', 'assets/gradeAssets/NSRP-03-G6/tray_green.png');
                this.load.image('OrangeTray', 'assets/gradeAssets/NSRP-03-G6/tray_Orange.png');
                this.load.image('WhiteTray', 'assets/gradeAssets/NSRP-03-G6/tray_white.png');


                // cake piecses
                this.load.image('RectCake', 'assets/gradeAssets/NSRP-03-G6/cake pice.png');
                this.load.image('1pieceCake', 'assets/gradeAssets/NSRP-03-G6/1 piece cake/1 piece cake.png');

                this.load.image('3pieceCake1', 'assets/gradeAssets/NSRP-03-G6/3 piece Cake/Piece_1.png');
                this.load.image('3pieceCake2', 'assets/gradeAssets/NSRP-03-G6/3 piece Cake/Piece_3.png');
                this.load.image('3pieceCake3', 'assets/gradeAssets/NSRP-03-G6/3 piece Cake/Piece_2.png');

                this.load.image('5pieceCake1', 'assets/gradeAssets/NSRP-03-G6/5 piece Cake/Piece_1.png');
                this.load.image('5pieceCake2', 'assets/gradeAssets/NSRP-03-G6/5 piece Cake/Piece_5.png');
                this.load.image('5pieceCake3', 'assets/gradeAssets/NSRP-03-G6/5 piece Cake/Piece_2.png');
                this.load.image('5pieceCake4', 'assets/gradeAssets/NSRP-03-G6/5 piece Cake/Piece_4.png');
                this.load.image('5pieceCake5', 'assets/gradeAssets/NSRP-03-G6/5 piece Cake/Piece_3.png');

                this.load.image('7pieceCake1', 'assets/gradeAssets/NSRP-03-G6/7 piece Cake/Piece_1.png');
                this.load.image('7pieceCake2', 'assets/gradeAssets/NSRP-03-G6/7 piece Cake/Piece_7.png');
                this.load.image('7pieceCake3', 'assets/gradeAssets/NSRP-03-G6/7 piece Cake/Piece_6.png');
                this.load.image('7pieceCake4', 'assets/gradeAssets/NSRP-03-G6/7 piece Cake/Piece_2.png');
                this.load.image('7pieceCake5', 'assets/gradeAssets/NSRP-03-G6/7 piece Cake/Piece_3.png');
                this.load.image('7pieceCake6', 'assets/gradeAssets/NSRP-03-G6/7 piece Cake/Piece_5.png');
                this.load.image('7pieceCake7', 'assets/gradeAssets/NSRP-03-G6/7 piece Cake/Piece_4.png');

                this.load.image('8pieceCake1', 'assets/gradeAssets/NSRP-03-G6/8 piece Cake/Piece_1.png');
                this.load.image('8pieceCake2', 'assets/gradeAssets/NSRP-03-G6/8 piece Cake/Piece_8.png');
                this.load.image('8pieceCake3', 'assets/gradeAssets/NSRP-03-G6/8 piece Cake/Piece_7.png');
                this.load.image('8pieceCake4', 'assets/gradeAssets/NSRP-03-G6/8 piece Cake/Piece_2.png');
                this.load.image('8pieceCake5', 'assets/gradeAssets/NSRP-03-G6/8 piece Cake/Piece_3.png');
                this.load.image('8pieceCake6', 'assets/gradeAssets/NSRP-03-G6/8 piece Cake/Piece_6.png');
                this.load.image('8pieceCake7', 'assets/gradeAssets/NSRP-03-G6/8 piece Cake/Piece_4.png');
                this.load.image('8pieceCake8', 'assets/gradeAssets/NSRP-03-G6/8 piece Cake/Piece_5.png');












        },

        create: function () {

                this.state.start('NSRP_03_G6level1');

        },
}