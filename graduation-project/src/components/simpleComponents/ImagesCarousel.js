import React, { Component } from "react";

export class ImagesCarousel extends Component {
  componentDidMount() {
    (function() {
      var bgImageArrayHome = [
          "about_bkg_pic1.jpg",
          "about_bkg_pic1-1.jpg",
          "about_bkg_pic2.jpg"
        ],
        base = "../images/",
        secs = 5;

      bgImageArrayHome.forEach(function(img) {
        new Image().src = base + img;
      });

      function backgroundSequenceD() {
        window.clearTimeout();
        var k = 0;
        for (i = 0; i < bgImageArrayHome.length; i++) {
          setTimeout(function() {
            $(".main-bg").css({
              "background-image": "url(" + base + bgImageArrayHome[k] + ")"
            });
            if (k + 1 === bgImageArrayHome.length) {
              setTimeout(function() {
                backgroundSequenceD();
              }, secs * 1000);
            } else {
              k++;
            }
          }, secs * 1000 * i);
        }
      }

      backgroundSequenceD();
    })();
  }

  render() {
    return <div />;
  }
}

export default ImagesCarousel;
