Game.preloader_NSD_5B_G6 = function (game) {
    this.preloadBar = null;
};

Game.preloader_NSD_5B_G6.prototype = {
    preload: function () {

        this.load.video('nsd5b_1','demoVideos/NSD-5B-G6.mp4');   //* include demo video of nsf-5 game.
        this.load.image('skipArrow','assets/commonAssets/skipArrow.png');        
        this.load.atlas('bulb','assets/commonAssets/bulb.png',null,NSD_5B_G6_JSON.bulbBtnJson);

        this.load.json('translations','js/lang.json');

        this.load.atlas('backbtn', 'assets/commonAssets/backbtn.png', null, NSD_5B_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn', 'assets/commonAssets/speaker.png', null, NSD_5B_G6_JSON.speakerJson);
        this.load.atlas('starAnim', 'assets/commonAssets/starAnim.png', null, NSD_5B_G6_JSON.starAnimJson);
        this.load.atlas('replay', 'assets/commonAssets/reply.png', null, NSD_5B_G6_JSON.replyJson);
        this.load.image('navBar', 'assets/commonAssets/navBar.png');
        this.load.image('timebg', 'assets/commonAssets/timebg.png');
        this.load.image('hand', 'assets/commonAssets/hand.png');
        this.load.atlas('newCommonBackBtnForAll', 'assets/commonAssets/newBackBtn.png', null, NSD_5B_G6_JSON.HomeBtnJson);
        this.load.atlas('CommonHomeBtn', 'assets/commonAssets/homeBtn.png', null, NSD_5B_G6_JSON.homebtnJson);
        this.load.atlas('CommonNextBtn', 'assets/commonAssets/nextBtn.png', null, NSD_5B_G6_JSON.nextbtnJson);


        // Loading all gradeAssets
        this.load.image('coin_3', 'assets/gradeAssets/NSD-5B-G6/Coin_3.png');
        this.load.image('coin_2', 'assets/gradeAssets/NSD-5B-G6/Coin_2.png');
        this.load.image('coin_1', 'assets/gradeAssets/NSD-5B-G6/Coin_1.png');
      

        this.load.image('4_color_box1', 'assets/gradeAssets/NSD-5B-G6/4 colore Box_1.png');
        this.load.image('4_color_box2', 'assets/gradeAssets/NSD-5B-G6/4 colore Box_2.png');
        this.load.image('BG', 'assets/gradeAssets/NSD-5B-G6/BG.png');
        this.load.atlas('green_coin_anim', 'assets/gradeAssets/NSD-5B-G6/Green coin going.png', null, NSD_5B_G6_JSON.GreenCoinAnimJSON);
        this.load.atlas('green_lever', 'assets/gradeAssets/NSD-5B-G6/Green Liver.png', null, NSD_5B_G6_JSON.GreenLeverJson);
        this.load.image('green_money_box', 'assets/gradeAssets/NSD-5B-G6/green Mony Box.png');
        this.load.image('green_coin', 'assets/gradeAssets/NSD-5B-G6/Coin_2.png');
        this.load.atlas('orange_coin_anim', 'assets/gradeAssets/NSD-5B-G6/Orange coin going.png', null, NSD_5B_G6_JSON.OrangeCoinAnimJson);
        this.load.image('orange_coin', 'assets/gradeAssets/NSD-5B-G6/Coin_3.png');
        this.load.image('orange_money_box', 'assets/gradeAssets/NSD-5B-G6/Orange Mony Box.png');
        this.load.atlas('orange_lever', 'assets/gradeAssets/NSD-5B-G6/Orenge Liver.png', null, NSD_5B_G6_JSON.OrangeLeverJson);
        this.load.atlas('coinExhange', 'assets/gradeAssets/NSD-5B-G6/coininsertbox.png', null, NSD_5B_G6_JSON.Exchange);

        this.load.atlas('yellow_coin_anim', 'assets/gradeAssets/NSD-5B-G6/Yellow coin going.png', null, NSD_5B_G6_JSON.YellowCoinAnimJson);
        this.load.atlas('yellow_lever', 'assets/gradeAssets/NSD-5B-G6/Yellow Liver.png', null, NSD_5B_G6_JSON.YellowLeverJson);
        this.load.image('yellow_money_box', 'assets/gradeAssets/NSD-5B-G6/Yellow Mony Box.png');
        this.load.image('yellow_coin', 'assets/gradeAssets/NSD-5B-G6/Coin_1.png');
        this.load.image('panel1', 'assets/gradeAssets/NSD-5B-G6/panle_1.png');
        this.load.image('panel2', 'assets/gradeAssets/NSD-5B-G6/panle_2.png');
        this.load.image('panel4', 'assets/gradeAssets/NSD-5B-G6/panle_4.png');
        this.load.image('panel5', 'assets/gradeAssets/NSD-5B-G6/panle_5.png');
        this.load.image('panel6', 'assets/gradeAssets/NSD-5B-G6/panle_6.png');
        this.load.image('side_panel', 'assets/gradeAssets/NSD-5B-G6/side pnale.png');
        this.load.image('coin_machine_panel', 'assets/gradeAssets/NSD-5B-G6/coinMachinePannel1.png');
        this.load.image('text_box1', 'assets/gradeAssets/NSD-5B-G6/Text box_1.png');
        this.load.image('square_text_box', 'assets/gradeAssets/NSD-5B-G6/Text box_2.png');
        this.load.atlas('counter_box', 'assets/gradeAssets/NSD-5B-G6/Text box_5.png', null, NSD_5B_G6_JSON.CounterBoxJson );
        this.load.image('text_box4', 'assets/gradeAssets/NSD-5B-G6/Text box_4.png');
        this.load.image('glow', 'assets/gradeAssets/NSD-5B-G6/glow.png');
        this.load.image('plus_sign', 'assets/gradeAssets/NSD-5B-G6/plusSign.png');

        this.load.atlas('numberVSmall', 'assets/gradeAssets/NSD-5B-G6/numberVSmall.png', null, NSD_5B_G6_JSON.NumberVSmallJson );
        this.load.atlas('tickbtn', 'assets/commonAssets/tickBtn.png', null, NSD_5B_G6_JSON.TickbtnJson);
        this.load.image('numpadbg', 'assets/commonAssets/numbg.png');
        this.load.atlas('Numberpad', 'assets/commonAssets/number pad.png', null, NSD_5B_G6_JSON.numberpadJson);

    },

    create: function () {

        this.state.start('NSD_5B_G6level1');

    },

}