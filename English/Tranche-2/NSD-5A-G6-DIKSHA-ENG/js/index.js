var app = {
    // Application Constructor
    initialize: function () {


        this.receivedEvent();

        // document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    receivedEvent: function (id) {

        console.log("Inside index.js");

        var game = new Phaser.Game(960, 540, Phaser.CANVAS, 'phaser_canvas', { preload: this.preload, create: this.create }, false, true, null);

        game.state.add('boot', Game.boot);
        game.state.add('preloader_nsd_01', Game.preloader_NSD_5A_G6);
        game.state.add('NSD_5A_G6level1', Game.NSD_5A_G6level1);
        game.state.add('score',Game.Score);
        game.state.add('Backbutton',Game.Backbutton);


        game.state.start('boot');
    },

    // create: function (game) {

    // game.input.maxPointers = 1;

    // game.stage.disableVisibilityChange = true;

    // //setting scale and orientation for the game.
    // game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    // game.scale.pageAlignHorizontally = true;
    // game.scale.pageAlignVertically = true;
    // game.scale.updateLayout(true);
    // game.scale.forceOrientation(true, false);


    // game.stage.backgroundColor = '#71c5cf';
    // var splash = game.add.sprite(game.world.centerX, game.world.centerY, 'splash');
    // splash.scale.setTo(1);
    // splash.anchor.setTo(0.5);

    // console.log(game);

    // this.game.add.text(0, 0, "hack", { font: "1px myfont", fill: "#FFFFFF" });
    // this.game.add.text(0, 0, "hack", { font: "1px gradefont", fill: "#FFFFFF" });
    // this.game.add.text(0, 0, "hack", { font: "1px regfont1", fill: "#FFFFFF" });
    // this.game.add.text(0, 0, "hack", { font: "1px regfont2", fill: "#FFFFFF" });
    // this.game.add.text(0, 0, "hack", { font: "1px regfont3", fill: "#FFFFFF" });
    // this.game.add.text(0, 0, "hack", { font: "1px regfont4", fill: "#FFFFFF" });



    // game.time.events.add(300, function () {
    //     game.time.events.removeAll();
    //     /*game.width = 960;
    //     game.height = 540;
    //     console.log(game);

    //     screen.orientation.lock('landscape');*/

    //     game.state.start('boot');
    // }, this);

};


app.initialize();