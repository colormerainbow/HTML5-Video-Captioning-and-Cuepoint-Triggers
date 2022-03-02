/**
 * main.js
 * The init script for this HTML5 Video Application
 * This app is used as a demo for creating a video application utilizing the video API
 * built into HTML5. It is inspired by Bruce Lawson's example hack for creating video captions.
 * I added the ability to associate custom callbacks with moments in time of the video.
 *
 * 
 * @NOTE: Mozilla released Popcorn and Butter for doing the same thing right after I got this working.
 * @UPDATE: Popcorn and Butter are dead. This is now useful again. I've updated it to be vanilla JS with no dependencies. by Troy Bennett 7-2010 (updated 12-2021)
 */

import { cueTimer } from "./modules/cuepoints.js";

document.addEventListener("DOMContentLoaded", (e) => {

    var myCues = [
        { seconds: 2, callback: func1 },
        { seconds: 9, callback: func2 },
        { seconds: 15, callback: func3 },
        { seconds: 25, callback: func6 },
        { seconds: 37, callback: func4 },
        { seconds: 50, callback: func5 },
    ];

    cueTimer.setup("vid", myCues);

    const vid = document.querySelector("#vid");
    const selectList = document.querySelector("#video_select");

    selectList.addEventListener("change", (e) => {
        selectVideo(e, vid);
    });

});



//the custom callback functions to trigger when a cuepoint is hit.
//You can code up whatever behavior you need in your own callbacks

function func1() {
    document.querySelector("#vid").style = "outline : 10px solid red";
}

function func2() {
    let pop = document.querySelector(".pop");
    pop.innerHTML = "<p>Ohh Snap!</p>";
    document.querySelector(".pop").classList.toggle("hide");
    setTimeout(() => {
        document.querySelector(".pop").classList.toggle("hide");
    }, 2000);
}

function func3() {
    const pop = document.querySelector(".pop");
    pop.innerHTML = "<p>E=MC<sup>2</sup> is NOT Statistical Data!!</p>";
    pop.classList.toggle("hide");
    setTimeout(() => {
        document.querySelector(".pop").classList.toggle("hide");
    }, 2000);
    document.querySelector("#vid").style = "outline: 0px solid red";
    document.querySelector("#web").src =
        "https://en.wikipedia.org/wiki/Albert_Einstein";
}

function func4() {
    document.querySelector("#web").src =
        "https://en.wikipedia.org/wiki/Paradigm_shift";
}

function func5() {
    document.querySelector("#web").src =
        "https://en.wikipedia.org/wiki/Domestic_violence";
}

function func6() {
    document.querySelector("#web").src = "images/koljr-banana-splits-400.jpg";
}
