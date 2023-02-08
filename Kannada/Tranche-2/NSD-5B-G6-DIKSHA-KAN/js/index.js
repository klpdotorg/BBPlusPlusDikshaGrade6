var app = {
    // Application Constructor
    initialize: function () {


        this.receivedEvent();

        // document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    receivedEvent: function (id) {

        console.log("Inside index.js");

        var game = new Phaser.Game(960,540,Phaser.CANVAS,'');

        game.state.add('boot', Game.boot);
        game.state.add('preloader_nsd_5b_G6', Game.preloader_NSD_5B_G6);
        game.state.add('NSD_5B_G6level1', Game.NSD_5B_G6level1);
        game.state.add('score',Game.Score);
        game.state.add('Backbutton',Game.Backbutton);


        game.state.start('boot');
    },

};


app.initialize();