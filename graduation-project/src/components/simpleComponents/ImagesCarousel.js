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
        for (let i = 0; i < bgImageArrayHome.length; i++) {
          setTimeout(function() {
            document.getElementsByClassName(".main-bg").style.s({
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
    return <div className="main-bg"> </div>;
  }
}

export default ImagesCarousel;
