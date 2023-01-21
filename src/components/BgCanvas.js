import React, { useRef, useEffect } from "react";
import { useCallback } from "react";

// constants
const COLOR_SPACE = "black";
const COLOR_STARS = "white";
const STAR_NUM = 200; // number of stars in the starfield
const STAR_SIZE = 0.005; // max star size as a fraction of screen width
const STAR_SPEED = 0.4; // fraction of screen width per second
var stars = [];
function randomSign() {
  return Math.random() >= 0.5 ? 1 : -1;
}

const Canvas = (props) => {
  const canvasRef = useRef(null);
  var timeDelta,
    timeLast = 0;
  const draw = useCallback((context, timeNow) => {
    const canvas = canvasRef.current;
    // calculate the time difference
    timeDelta = timeNow - timeLast;
    timeLast = timeNow;

    // space background
    context.fillStyle = COLOR_SPACE;
    context.fillRect(0, 0, canvas.width, canvas.height);

    // draw the stars
    context.fillStyle = COLOR_STARS;
    for (let i = 0; i < STAR_NUM; i++) {
      context.beginPath();
      context.arc(stars[i].x, stars[i].y, stars[i].r, 0, Math.PI * 2);
      context.fill();

      // update the star's x position
      stars[i].x += stars[i].xv * timeDelta * 0.001;

      // reposition the star to the other side if it goes off screen
      if (stars[i].x < 0 - stars[i].r) {
        stars[i].x = canvas.width + stars[i].r;
      } else if (stars[i].x > canvas.width + stars[i].r) {
        stars[i].x = 0 - stars[i].r;
      }

      // update the star's y position
      stars[i].y += stars[i].yv * timeDelta * 0.001;

      // reposition the star to the other side if it goes off screen
      if (stars[i].y < 0 - stars[i].r) {
        stars[i].y = canvas.height + stars[i].r;
      } else if (stars[i].y > canvas.height + stars[i].r) {
        stars[i].y = 0 - stars[i].r;
      }
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.height = document.documentElement.clientHeight;
    canvas.width = document.documentElement.clientWidth;

    // set up the stars

    var starSpeed = STAR_SPEED * canvas.width;
    var xv = starSpeed * randomSign() * Math.random();
    // Using Pythagoras' theorem, yv = sqrt(starSpeed^2 - xv^2)
    var yv = Math.sqrt(Math.pow(starSpeed, 2) - Math.pow(xv, 2)) * randomSign();
    for (let i = 0; i < STAR_NUM; i++) {
      let speedMult = Math.random() * 1.5 + 0.5;
      stars[i] = {
        r: (Math.random() * STAR_SIZE * canvas.width) / 2,
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        xv: xv * speedMult,
        yv: yv * speedMult,
      };
    }

    let frameCount = 0;
    let animationFrameId;

    //Our draw came here
    const render = () => {
      frameCount++;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
