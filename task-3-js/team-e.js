setup_E();
/** THEME: SARCASM  */
function setup_E() {
  console.log("in e");
  /**************************************************** */
  //get the buttons
  activateButtons_E(`#TEAM_E`, "ani_canvE");

  /**************************************************** */
  /* NO NEED TO MODIFY THIS FUNCTION :) */
  /*** helper function to activate buttons */
  /**************************************************** */
  function activateButtons_E(team, teamCanvas) {
    let teamButtons = document.querySelectorAll(`${team} .team-nav p`);
    //2:
    console.log(teamButtons);
    for (let button of teamButtons) {
      button.addEventListener("click", buttonCallBack);

      function buttonCallBack(e) {
        switch (this.textContent) {
          case "1": {
            console.log("A");
            //reset the canvases
            resetCanvases(`${team} .aniCanvas`);
            //reset buttons
            resetButtons(teamButtons, this);
            //activate canvas A
            document.getElementById(`${teamCanvas}_A`).style.display = "block";
            //run first
            aniA(document.getElementById(`${teamCanvas}_A`));

            break;
          }
          case "2": {
            console.log("B");
            resetCanvases(`${team} .aniCanvas`);
            //reset buttons
            resetButtons(teamButtons, this);
            //activate canvas B
            document.getElementById(`${teamCanvas}_B`).style.display = "block";
            //run second
            aniB(document.getElementById(`${teamCanvas}_B`));
            break;
          }
          case "3": {
            console.log("C");
            //reset the canvases
            resetCanvases(`${team} .aniCanvas`);
            //reset buttons
            resetButtons(teamButtons, this);
            //activate canvas C
            document.getElementById(`${teamCanvas}_C`).style.display = "block";
            //run third
            aniC(document.getElementById(`${teamCanvas}_C`));
            break;
          }
          case "4": {
            console.log("D");
            break;
          }
          case "5": {
            console.log("E");
            break;
          }
          case "6": {
            console.log("F");
            break;
          }
        }
      }
    } //for
  }
  /**************** ANI A ************************************ */
  /** PUT ALL YOUR CODE FOR ANIMATION A INSIDE  HERE */
  /**************** ANI A ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: use the function window.requestAnimationFrame() to create an animation
   * i.e. a reoccuring pattern - you can use simple shapes and colors, images etc...
   * 2: create a way to start and stop the animation using a
   * custom made button and add a mouse click event listener to either start/stop the animation
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  function aniA(parentCanvas) {
    console.log("in A");

    let distanceToMouse = 10


    let velocity = [1,1];
    let speedX = 1;
    let speedY = 2;
    let sizeWidth = 70;
    let sizeHeight = 40;
    let p_color = getRandomColour()

    let p = document.createElement("div")

    p.style.width = sizeWidth + "px"
    p.style.height = sizeHeight + "px"
    p.style.left = "0px"
    p.style.top = "0px"
    p.style.position = "absolute"
    p.style.background = p_color
    p.style.border = "ridge"
    p.style.borderColor = "black"
    p.style.textAlign = "center"
    p.style.fontSize = "15px"
    p.innerText = "Don't Touch Me"
    parentCanvas.appendChild(p)


    window.requestAnimationFrame(animate);
    p.addEventListener('mousemove', function(event){
      speedX *= 1.1;
      speedY *= 1.1;
    })
 
    function animate() {
      p.style.left = parseFloat(p.style.left) + (speedX * velocity[0]) + "px";
      p.style.top = parseFloat(p.style.top) + (speedY * velocity[1]) + "px";
      window.requestAnimationFrame(animate);

      testBounds()

      if (speedX > 10){
        stopWait()
      }


    }

    function testBounds(){
      let bounds = parentCanvas.getBoundingClientRect();

      if (parseInt(p.style.left) + sizeWidth> (bounds.width)) {
        velocity[0] = -1;
        bounced();
      }
      else if(parseInt(p.style.left) < 0){
        velocity[0] = 1;
        bounced();
      }

      if (parseInt(p.style.top) + sizeHeight> (bounds.height) ) {
        velocity[1] = -1;
        bounced();
      }
      else if (parseInt(p.style.top) < 0){
        velocity[1] = 1;
        bounced();
      }
    }

    function getRandomColour(){
      var letters = '0123456789ABCDEF';
      var colour = '#';
      for (let i = 0; i < 6; i++){
        colour += letters[Math.floor(Math.random() * 16)]
      }
      return colour;
    }

    function bounced(){
      p_color = getRandomColour()
      p.style.background = p_color
      console.log(velocity)
    }

    function stopWait(){
      speedX = 0;
      speedY = 0;
      p.innerText = "Please let me be"
      window.setTimeout(() => {
        speedX = 1;
        speedY = 2;
        p.innerText = "Don't touch me"
      }, 2000);
    }


  }
  /**************** ANI B ************************************ */
  /** PUT ALL YOUR CODE FOR ANIMATION B INSIDE  HERE */
  /**************** ANI B ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: use the function window.setInterval() to create a pattern that changes over time
   * i.e. fading out/ in, growing bigger/smaller, appear/disappear, add, remove...
   *  - you can use simple shapes and colors, images etc...
   * 2: add in a / some mouse click event listener(s) somewhere to make the sketch interactive

   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/
  function aniB(parentCanvas) {
    console.log("in B");

    window.requestAnimationFrame(animate);

    let speedX = 2;
    let speedY = 3;
    let sizeWidth = 70;
    let sizeHeight = 40;

    let p = document.createElement("div");

    let resumeSpeedX = 2;
    let resumeSpeedY = 3;

    parentCanvas.appendChild(p);
    p.style.width = sizeWidth + "px";
    p.style.height = sizeHeight + "px";
    p.style.position = "absolute";
    p.style.left = parentCanvas.offsetWidth / 2 + "px";
    p.style.top = parentCanvas.offsetHeight / 2 + "px";
    p.style.transform = "translate(-50%, -50%)";
    p.style.background = "black";
    p.style.border = "ridge";
    p.style.borderColor = "white";
    p.style.textAlign = "center";
    p.style.fontSize = "15px";
    p.innerText = "ughhh";

    // toggle pause and resume on click
    window.addEventListener("click", function () {
      if (speedX === 0 && speedY === 0) {
        resume();
      } else {
        pause();
      }
    });

    let velocity = [1, 1]; // Add velocity for aniB

    function animate() {
      p.style.left = parseFloat(p.style.left) + speedX * velocity[0] + "px";
      p.style.top = parseFloat(p.style.top) + speedY * velocity[1] + "px";
      window.requestAnimationFrame(animate);

      testBounds(); // Use the same testBounds function

    }

    function testBounds() {
      let bounds = parentCanvas.getBoundingClientRect();
      let elementRect = p.getBoundingClientRect();

      // Calculate the element's position relative to the parent
      let elementLeft = elementRect.left - bounds.left;
      let elementTop = elementRect.top - bounds.top;


      if (elementLeft + sizeWidth > bounds.width) {
        velocity[0] = -1;
      } else if (elementLeft < 0) {
        velocity[0] = 1;
      }

      if (elementTop + sizeHeight > bounds.height) {
        velocity[1] = -1;
      } else if (elementTop < 0) {
        velocity[1] = 1;
      }
    }

    function pause() {
      // pause for a second and then resume
      resumeSpeedX = speedX;
      resumeSpeedY = speedY;
      speedX = 0;
      speedY = 0;

      window.setInterval(function () {
        sizeWidth = 70 + Math.sin(Date.now() / 100) * 10;
        sizeHeight = 40 + Math.sin(Date.now() / 100) * 10;
        p.style.width = sizeWidth + "px";
        p.style.height = sizeHeight + "px";
      }, 100);

      p.innerText = "man whatever";
    }

    function resume() {
      // randomize direction
      let randomX = Math.random();
      let randomY = Math.random();

      speedX = resumeSpeedX;
      speedY = resumeSpeedY;

      if (randomX < 0.5) {
        velocity[0] = velocity[0] * -1;
      }
      if (randomY < 0.5) {
        velocity[1] = velocity[1] * -1;
      }

      // randomize background color
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      parentCanvas.style.backgroundColor = "#" + randomColor;

      p.innerText = "ughhh";
    }
  }
  /**************** ANI C ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN C INSIDE  HERE */
  /**************** ANI C ************************************ */
  /**************** TASK *******************************************
    * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
    * 1: use the PROVIDED keyup/down callbacks `windowKeyDownRef` and/or `windowKeyUpnRef` to handle keyboard events
    * 2: create an interactive pattern/sketch based on keyboard input. Anything goes.
    * do not use  requestAnimationFrame(), setInterval() nor setTimeout() -> meaning keep it simple ;)
    * 
    * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
    * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
    * this is so that your styles are not overriden by other teams.
    * NOTE::: All your code is to be added here inside this function -
    * remember you can define other functions inside....
    * Do not change any code above or the HTML markup.
    * **/


  function aniC(parentCanvas) {

    console.log("in C");
    /*** THIS IS THE CALLBACK FOR KEY DOWN ( DO NOT CHANGE THE NAME..) */
    windowKeyDownRef = function (e) {
      //code for key down in here
      console.log(e)
      //SAMPLE KEY CHECK (you do not have to use)
      if (e.code === "Space") {
        console.log("team-space down")
      }
    };

    /*** THIS IS THE CALLBACK FOR KEY UP ( DO NOT CHANGE THE NAME..) */
    windowKeyUpRef = function (e) {
      //SAMPLE KEY CHECK (you do not have to use)
      if (e.code === "Space") {
        console.log("space up");
        console.log("team-space up")
      }

    };

    //DO NOT REMOVE
    window.addEventListener("keydown", windowKeyDownRef);
    window.addEventListener("keyup", windowKeyUpRef);
  }
}
