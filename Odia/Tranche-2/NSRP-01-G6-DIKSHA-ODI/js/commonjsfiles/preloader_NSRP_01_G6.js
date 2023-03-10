Game.preloader_NSRP_01_G6 = function (game) {
        this.preloadBar = null;



};

var chime, clockTick;
Game.preloader_NSRP_01_G6.prototype = {
        preload: function () {


                this.load.image('prgressbarOutLine', 'assets/commonAssets/prgressbarOutLine.png');
                this.load.image('preloadBar', 'assets/commonAssets/prgressbar.png');


                this.load.atlas('backbtn', 'assets/commonAssets/backbtn.png', null, NSRP_01_G6_JSON.backbtnJson);
                this.load.atlas('CommonSpeakerBtn', 'assets/commonAssets/speaker.png', null, NSRP_01_G6_JSON.speakerJson);
                this.load.atlas('starAnim', 'assets/commonAssets/starAnim.png', null, NSRP_01_G6_JSON.starAnimJson);
                this.load.atlas('replay', 'assets/commonAssets/reply.png', null, NSRP_01_G6_JSON.replyJson);

                this.load.image('navBar', 'assets/commonAssets/navBar.png');
                this.load.image('timebg', 'assets/commonAssets/timebg.png');
                this.load.image('hand', 'assets/commonAssets/hand.png');


                this.load.atlas('CommonHomeBtn', 'assets/commonAssets/homeBtn.png', null, NSRP_01_G6_JSON.homebtnJson);
                this.load.atlas('CommonNextBtn', 'assets/commonAssets/nextBtn.png', null, NSRP_01_G6_JSON.nextbtnJson);

                this.load.image('bg', 'assets/gradeAssets/NSRP-01-G6/Bg.png');
                this.load.image('bg2', 'assets/gradeAssets/NSRP-01-G6/BG1.png');
                this.load.atlas('TickBtn', 'assets/gradeAssets/NSRP-01-G6/TickBtn.png', null, NSRP_01_G6_JSON.tickJson);


                this.load.atlas('Text box_1', 'assets/gradeAssets/NSRP-01-G6/text box_1.png', null, NSRP_01_G6_JSON.textbox1);
                this.load.atlas('Text box_2', 'assets/gradeAssets/NSRP-01-G6/text box_2.png', null, NSRP_01_G6_JSON.textbox2);

                // 1.5 and 1.6
                this.load.image('image1', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.5-G6 all image/image_1.png');
                this.load.image('image2', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.5-G6 all image/image_2.png');
                this.load.image('image3', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.5-G6 all image/image_3.png');
                this.load.image('image4', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.5-G6 all image/image_4.png');
                this.load.image('image5', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.5-G6 all image/image_5.png');


                // 1.1
                this.load.atlas('image1_11', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.1-G6 all Images/Photo_1.1.png', null, NSRP_01_G6_JSON.image1_11);
                this.load.atlas('image1_12', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.1-G6 all Images/Photo_1.2.png', null, NSRP_01_G6_JSON.image1_12);
                this.load.atlas('image1_13', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.1-G6 all Images/Photo_1.3.png', null, NSRP_01_G6_JSON.image1_13);

                this.load.atlas('image1_21', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.1-G6 all Images/Photo_2.1.png', null, NSRP_01_G6_JSON.image1_21);
                this.load.atlas('image1_22', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.1-G6 all Images/Photo_2.2.png', null, NSRP_01_G6_JSON.image1_22);
                this.load.atlas('image1_23', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.1-G6 all Images/Photo_2.3.png', null, NSRP_01_G6_JSON.image1_23);

                this.load.atlas('image1_31', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.1-G6 all Images/Photo_3.1.png', null, NSRP_01_G6_JSON.image1_31);
                this.load.atlas('image1_32', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.1-G6 all Images/Photo_3.2.png', null, NSRP_01_G6_JSON.image1_32);
                this.load.atlas('image1_33', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.1-G6 all Images/Photo_3.3.png', null, NSRP_01_G6_JSON.image1_33);

                this.load.atlas('image1_41', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.1-G6 all Images/Photo_4.1.png', null, NSRP_01_G6_JSON.image1_41);
                this.load.atlas('image1_42', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.1-G6 all Images/Photo_4.2.png', null, NSRP_01_G6_JSON.image1_42);
                this.load.atlas('image1_43', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.1-G6 all Images/Photo_4.3.png', null, NSRP_01_G6_JSON.image1_43);

                this.load.atlas('image1_51', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.1-G6 all Images/Photo_5.1.png', null, NSRP_01_G6_JSON.image1_51);
                this.load.atlas('image1_52', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.1-G6 all Images/Photo_5.2.png', null, NSRP_01_G6_JSON.image1_52);
                this.load.atlas('image1_53', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.1-G6 all Images/Photo_5.3.png', null, NSRP_01_G6_JSON.image1_53);

                this.load.atlas('image1_61', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.1-G6 all Images/Photo_6.1.png', null, NSRP_01_G6_JSON.image1_61);
                this.load.atlas('image1_62', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.1-G6 all Images/Photo_6.2.png', null, NSRP_01_G6_JSON.image1_62);
                this.load.atlas('image1_63', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.1-G6 all Images/Photo_6.3.png', null, NSRP_01_G6_JSON.image1_63);

                this.load.atlas('image1_71', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.1-G6 all Images/Photo_7.1.png', null, NSRP_01_G6_JSON.image1_71);
                this.load.atlas('image1_72', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.1-G6 all Images/Photo_7.2.png', null, NSRP_01_G6_JSON.image1_72);
                this.load.atlas('image1_73', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.1-G6 all Images/Photo_7.3.png', null, NSRP_01_G6_JSON.image1_73);

                this.load.atlas('image1_81', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.1-G6 all Images/Photo_8.1.png', null, NSRP_01_G6_JSON.image1_81);
                this.load.atlas('image1_82', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.1-G6 all Images/Photo_8.2.png', null, NSRP_01_G6_JSON.image1_82);
                this.load.atlas('image1_83', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.1-G6 all Images/Photo_8.3.png', null, NSRP_01_G6_JSON.image1_83);


                // 1.2
                this.load.atlas('image2_11', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.2-G6 all image/Pic_1.1.png', null, NSRP_01_G6_JSON.image2_11);
                this.load.atlas('image2_12', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.3-G6 all image/Image_1.2.png', null, NSRP_01_G6_JSON.image2_12);
                this.load.atlas('image2_13', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.2-G6 all image/Pic_1.3.png', null, NSRP_01_G6_JSON.image2_13);

                this.load.atlas('image2_21', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.2-G6 all image/Pic_2.1.png', null, NSRP_01_G6_JSON.image2_21);
                this.load.atlas('image2_22', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.3-G6 all image/Image_2.2.png', null, NSRP_01_G6_JSON.image2_22);
                this.load.atlas('image2_23', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.2-G6 all image/Pic_2.3.png', null, NSRP_01_G6_JSON.image2_23);

                this.load.atlas('image2_31', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.2-G6 all image/Pic_3.1.png', null, NSRP_01_G6_JSON.image2_31);
                this.load.atlas('image2_32', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.3-G6 all image/Image_3.2.png', null, NSRP_01_G6_JSON.image2_32);
                this.load.atlas('image2_33', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.2-G6 all image/Pic_3.3.png', null, NSRP_01_G6_JSON.image2_33);

                this.load.atlas('image2_41', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.2-G6 all image/Pic_4.1.png', null, NSRP_01_G6_JSON.image2_41);
                this.load.atlas('image2_42', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.3-G6 all image/Image_4.2.png', null, NSRP_01_G6_JSON.image2_42);
                this.load.atlas('image2_43', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.2-G6 all image/Pic_4.3.png', null, NSRP_01_G6_JSON.image2_43);

                this.load.atlas('image2_51', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.2-G6 all image/Pic_5.1.png', null, NSRP_01_G6_JSON.image2_51);
                this.load.atlas('image2_52', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.3-G6 all image/Image_5.2.png', null, NSRP_01_G6_JSON.image2_52);
                this.load.atlas('image2_53', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.2-G6 all image/Pic_5.3.png', null, NSRP_01_G6_JSON.image2_53);

                this.load.atlas('image2_61', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.2-G6 all image/Pic_6.1.png', null, NSRP_01_G6_JSON.image2_61);
                this.load.atlas('image2_62', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.3-G6 all image/Image_6.2.png', null, NSRP_01_G6_JSON.image2_62);
                this.load.atlas('image2_63', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.2-G6 all image/Pic_6.3.png', null, NSRP_01_G6_JSON.image2_63);

                this.load.atlas('image2_71', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.2-G6 all image/Pic_7.1.png', null, NSRP_01_G6_JSON.image2_71);
                this.load.atlas('image2_72', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.3-G6 all image/Image_7.2.png', null, NSRP_01_G6_JSON.image2_72);
                this.load.atlas('image2_73', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.2-G6 all image/Pic_7.3.png', null, NSRP_01_G6_JSON.image2_73);

                this.load.atlas('image2_81', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.2-G6 all image/Pic_8.1.png', null, NSRP_01_G6_JSON.image2_81);
                this.load.atlas('image2_82', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.3-G6 all image/Image_8.2.png', null, NSRP_01_G6_JSON.image2_82);
                this.load.atlas('image2_83', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.2-G6 all image/Pic_8.3.png', null, NSRP_01_G6_JSON.image2_83);


                // 1.2
                this.load.atlas('image3_11', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.3-G6 all image/Image_1.1.png', null, NSRP_01_G6_JSON.image3_11);
                this.load.atlas('image3_12', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.3-G6 all image/Image_1.2.png', null, NSRP_01_G6_JSON.image3_12);
                this.load.atlas('image3_13', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.3-G6 all image/Image_1.3.png', null, NSRP_01_G6_JSON.image3_13);

                this.load.atlas('image3_21', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.3-G6 all image/Image_2.1.png', null, NSRP_01_G6_JSON.image3_21);
                this.load.atlas('image3_22', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.3-G6 all image/Image_2.2.png', null, NSRP_01_G6_JSON.image3_22);
                this.load.atlas('image3_23', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.3-G6 all image/Image_2.3.png', null, NSRP_01_G6_JSON.image3_23);

                this.load.atlas('image3_31', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.3-G6 all image/Image_3.1.png', null, NSRP_01_G6_JSON.image3_31);
                this.load.atlas('image3_32', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.3-G6 all image/Image_3.2.png', null, NSRP_01_G6_JSON.image3_32);
                this.load.atlas('image3_33', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.3-G6 all image/Image_3.3.png', null, NSRP_01_G6_JSON.image3_33);

                this.load.atlas('image3_41', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.3-G6 all image/Image_4.1.png', null, NSRP_01_G6_JSON.image3_41);
                this.load.atlas('image3_42', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.3-G6 all image/Image_4.2.png', null, NSRP_01_G6_JSON.image3_42);
                this.load.atlas('image3_43', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.3-G6 all image/Image_4.3.png', null, NSRP_01_G6_JSON.image3_43);

                this.load.atlas('image3_51', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.3-G6 all image/Image_5.1.png', null, NSRP_01_G6_JSON.image3_51);
                this.load.atlas('image3_52', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.3-G6 all image/Image_5.2.png', null, NSRP_01_G6_JSON.image3_52);
                this.load.atlas('image3_53', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.3-G6 all image/Image_5.3.png', null, NSRP_01_G6_JSON.image3_53);

                this.load.atlas('image3_61', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.3-G6 all image/Image_6.1.png', null, NSRP_01_G6_JSON.image3_61);
                this.load.atlas('image3_62', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.3-G6 all image/Image_6.2.png', null, NSRP_01_G6_JSON.image3_62);
                this.load.atlas('image3_63', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.3-G6 all image/Image_6.3.png', null, NSRP_01_G6_JSON.image3_63);

                this.load.atlas('image3_71', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.3-G6 all image/Image_7.1.png', null, NSRP_01_G6_JSON.image3_71);
                this.load.atlas('image3_72', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.3-G6 all image/Image_7.2.png', null, NSRP_01_G6_JSON.image3_72);
                this.load.atlas('image3_73', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.3-G6 all image/Image_7.3.png', null, NSRP_01_G6_JSON.image3_73);

                this.load.atlas('image3_81', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.3-G6 all image/Image_8.1.png', null, NSRP_01_G6_JSON.image3_81);
                this.load.atlas('image3_82', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.3-G6 all image/Image_8.2.png', null, NSRP_01_G6_JSON.image3_82);
                this.load.atlas('image3_83', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.3-G6 all image/Image_8.3.png', null, NSRP_01_G6_JSON.image3_83);


                //      1.4
                this.load.atlas('image4_11', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.4-G6 all images/PC_1.2.png', null, NSRP_01_G6_JSON.image4_11);
                this.load.atlas('image4_12', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.1-G6 all Images/Photo_1.2.png', null, NSRP_01_G6_JSON.image4_12);
                this.load.atlas('image4_13', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.4-G6 all images/PC_1.3.png', null, NSRP_01_G6_JSON.image4_13);

                this.load.atlas('image4_21', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.4-G6 all images/PC_2.2.png', null, NSRP_01_G6_JSON.image4_21);
                this.load.atlas('image4_22', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.1-G6 all Images/Photo_2.2.png', null, NSRP_01_G6_JSON.image4_22);
                this.load.atlas('image4_23', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.4-G6 all images/PC_2.3.png', null, NSRP_01_G6_JSON.image4_23);

                this.load.atlas('image4_31', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.4-G6 all images/PC_3.2.png', null, NSRP_01_G6_JSON.image4_31);
                this.load.atlas('image4_32', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.1-G6 all Images/Photo_3.2.png', null, NSRP_01_G6_JSON.image4_32);
                this.load.atlas('image4_33', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.4-G6 all images/PC_3.3.png', null, NSRP_01_G6_JSON.image4_33);

                this.load.atlas('image4_41', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.4-G6 all images/PC_4.2.png', null, NSRP_01_G6_JSON.image4_41);
                this.load.atlas('image4_42', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.1-G6 all Images/Photo_4.2.png', null, NSRP_01_G6_JSON.image4_42);
                this.load.atlas('image4_43', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.4-G6 all images/PC_4.3.png', null, NSRP_01_G6_JSON.image4_43);

                this.load.atlas('image4_51', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.4-G6 all images/PC_5.2.png', null, NSRP_01_G6_JSON.image4_51);
                this.load.atlas('image4_52', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.1-G6 all Images/Photo_5.2.png', null, NSRP_01_G6_JSON.image4_52);
                this.load.atlas('image4_53', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.4-G6 all images/PC_5.3.png', null, NSRP_01_G6_JSON.image4_53);

                this.load.atlas('image4_61', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.4-G6 all images/PC_6.2.png', null, NSRP_01_G6_JSON.image4_61);
                this.load.atlas('image4_62', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.1-G6 all Images/Photo_6.2.png', null, NSRP_01_G6_JSON.image4_62);
                this.load.atlas('image4_63', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.4-G6 all images/PC_6.3.png', null, NSRP_01_G6_JSON.image4_63);

                this.load.atlas('image4_71', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.4-G6 all images/PC_7.2.png', null, NSRP_01_G6_JSON.image4_71);
                this.load.atlas('image4_72', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.1-G6 all Images/Photo_7.2.png', null, NSRP_01_G6_JSON.image4_72);
                this.load.atlas('image4_73', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.4-G6 all images/PC_7.3.png', null, NSRP_01_G6_JSON.image4_73);

                this.load.atlas('image4_81', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.4-G6 all images/PC_8.2.png', null, NSRP_01_G6_JSON.image4_81);
                this.load.atlas('image4_82', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.1-G6 all Images/Photo_8.2.png', null, NSRP_01_G6_JSON.image4_82);
                this.load.atlas('image4_83', 'assets/gradeAssets/NSRP-01-G6/NSRP-1.4-G6 all images/PC_8.3.png', null, NSRP_01_G6_JSON.image4_83);


        },

        create: function () {

                this.state.start('NSRP_01_G6level1');

        },
}