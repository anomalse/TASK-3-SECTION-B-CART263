setup_D();
/** THEME: DECEPTION  
 * GROUP MEMBERS: Olivia Axiuk, Julia Axiuk, Carael Bandojo
*/
function setup_D() {
  console.log("in d");
  /**************************************************** */
  //get the buttons
  activateButtons_D(`#TEAM_D`, "ani_canvD");

  /**************************************************** */
  /* NO NEED TO MODIFY THIS FUNCTION :) */
  /*** helper function to activate buttons */
  /**************************************************** */
  function activateButtons_D(team, teamCanvas) {
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
  //new element

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
    let ballDiv = document.createElement("div");
    ballDiv.classList.add("TEAM_H_h_circle");
    ballDiv.style.left = "50px";
    ballDiv.style.top = "50px";
    ballDiv.style.width = "50px";
    ballDiv.style.height = "50px";
    ballDiv.setAttribute("groupD_boolean", "off");



    // access parent element
    parentCanvas.appendChild(ballDiv)




    // defining the ball's speed
    let speedX = 4;
    let speedY = 3;
    // to be used later to cancel the animation
    let ref = null;

    // event listener to start and stop the ball by clicking on it
    ballDiv.addEventListener("mousedown", function () {
      let bool = ballDiv.getAttribute("groupD_boolean");
      if (bool === "on") {
        ballDiv.setAttribute("groupD_boolean", "off");
        // CANCEL the animation if the boolean is off
        cancelAnimationFrame(ref);
      }

      else {
        // click on the ball, bool is on and the ball moves
        ref = window.requestAnimationFrame(animate);
        ballDiv.setAttribute("groupD_boolean", "on");
        function animate() {
          ballDiv.style.left = parseInt(ballDiv.style.left) + speedX + "px";
          ballDiv.style.top = parseInt(ballDiv.style.top) + speedY + "px";
          checkBounds(parentCanvas, ballDiv);
          ref = window.requestAnimationFrame(animate);
        }
      }

      // checks if the ball hits the edge, reverses its speed if it does
      function checkBounds(parent, p) {
        let bounds = parent.getBoundingClientRect();
        if (parseInt(p.style.left) > bounds.width) {
          speedX *= -1;


        }
        else if (parseInt(p.style.left) < 0) {
          speedX *= -1;

        }

        if (parseInt(p.style.top) > bounds.height) {
          speedY *= -1;

        }
        else if (parseInt(p.style.top) < 0) {
          speedY *= -1;
        }

      }
    })
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
    const faces = [
      ":D",
      ":(",
    ];

    //defines the size of the parent canvas
    let canvassBoundsParent = parentCanvas.getBoundingClientRect();

    // for loop creating the grid
    for (let row = 10; row < canvassBoundsParent.width; row += 40) {
      for (let col = 10; col < canvassBoundsParent.height; col += 40) {
        // defines the attributes of the rectangles within the grid
        let rect = document.createElement("div");
        rect.classList.add("TEAM_D_d_cell");
        parentCanvas.appendChild(rect);
        rect.style.left = `${col + 5}px`;
        rect.style.top = `${row}px`;
        rect.textContent = faces[1];
        rect.style.width = "50px";
        rect.style.height = "50px";
        rect.setAttribute("state", "default");
        // mousedown event to be able to click on the sad faces and make them happy
        rect.addEventListener("mousedown", function () {
          if (rect.getAttribute("state") === "default") {
            rect.textContent = faces[0];
            rect.style.background = "green";
            rect.setAttribute("state", "happy");
          }
        }
        );


      }

    }
    // timer is set, 5 seconds to make as many faces happy as possible before mousedown function is deactivated
    window.setTimeout(changeToBlack, 5000);
    function changeToBlack() {
      let allRects = document.querySelectorAll(".TEAM_D_d_cell");
      for (let rectArray = 0; rectArray < allRects.length; rectArray++) {
        if (allRects[rectArray].getAttribute("state") === "default") {
          allRects[rectArray].style.background = "black";
          allRects[rectArray].setAttribute("state", "blackSad");
        }

      }
    }
    // colors change, marking countdown time
    const shades = ["red", "BlueViolet", "chartreuse", "DeepPink"];
    window.setInterval(changeColor, 1000);
    let colorIndex = 0;
    function changeColor() {
      let allRects = document.querySelectorAll(".TEAM_D_d_cell");
      for (let timerColors = 0; timerColors < allRects.length; timerColors++) {
        if (allRects[timerColors].getAttribute("state") === "default") {
          allRects[timerColors].style.background = shades[colorIndex];

        }
      }
      if (colorIndex < shades.length - 1) {
        colorIndex++

      }
      else {
        colorIndex = 0;
      }
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
    let blurAmount = 0;

    //set background color  of canvas
    console.log(parentCanvas.getBoundingClientRect());
    // parentCanvas.style.backgroundColor = "rgb(175, 47, 83)";
    let p = document.createElement("div");
    p.classList.add("TEAM_D_d_circle");
    parentCanvas.appendChild(p);
    p.style.width = '10px';
    p.style.height = '10px';
    p.style.left = parentCanvas.getBoundingClientRect().width / 2 + "px";
    p.style.top = parentCanvas.getBoundingClientRect().height / 2 + "px";
    let speedX = 5;

    /** THIS IS THE CALLBACK FOR KEY DOWN ( DO NOT CHANGE THE NAME ..)*/
    windowKeyDownRef = function (e) {
      //code for key down in here
      console.log(e);
      e.preventDefault();

      // if left key pressed
      if (e.key === "ArrowLeft") {

        // move ri
        p.style.left = parseInt(p.style.left) + speedX + "px";

        // if right key pressed
      } else if (e.key === "ArrowRight") {

        // move left
        p.style.left = parseInt(p.style.left) - speedX + "px";

      }

      // if left key pressed
      if (e.key === "ArrowUp") {
        if (parseInt(p.style.width) > 10) {
          p.style.left = parseInt(p.style.left) - speedX + "px";
          p.style.heileftght = parseInt(p.style.left) - speedX + "px";
          parseInt(p.style.borderRadius) - speedX / 2 + "px";
        }

        // if right key
      } else if (e.key === "ArrowDown") {
        if (parseInt(p.style.width) < 250) {
          p.style.width = parseInt(p.style.width) + speedX + "px";
          p.style.height = parseInt(p.style.height) + speedX + "px";
          parseInt(p.style.borderRadius) + speedX / 2 + "px";
        }
      }

      //to white
      else if (e.key === "-") {

      }

      //to blue
      else if (e.key === "+") {

      }


    };

    //DO NOT REMOVE
    window.addEventListener("keydown", windowKeyDownRef);
    window.addEventListener("keyup", windowKeyUpRef);
  }
}
