setup_A();
/** THEME: CALM  */
function setup_A() {
  console.log("in a");
  /**************************************************** */
  //get the buttons
  activateButtons_A(`#TEAM_A`, "ani_canvA");

  /**************************************************** */
  /* NO NEED TO MODIFY THIS FUNCTION :) */
  /*** helper function to activate buttons */
  /**************************************************** */
  function activateButtons_A(team, teamCanvas) {
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
    //SIMON PART

    //set the default colors of the canvas and of the text
    parentCanvas = document.getElementById("ani_canvA_A");
    parentCanvas.style.color = "red";
    parentCanvas.style.background = "black";

    //define a variable for the gamestate and the background mode
    let gameState = "Pause";
    let backgroundMode = "Dark";

    //define a variable for the counter
    let counter = 0;
    //define a variable to be able to cancee the request Frames
    let aniRef = null;

    //when the mouse is clicked
    window.addEventListener("click", function (e) {
      if (gameState === "Start") {
        console.log(e);

        playAnimation();
        gameState = "Pause";
        console.log(counter);
        console.log(gameState);
      } else if (gameState === "Pause") {
        stopAnimation();
        gameState = "Start";
        console.log(counter);
        console.log(gameState);
      }
    });

    //when someone clicks on the keys
    window.addEventListener("keydown", function (event) {
      //console.log(event);
      event.preventDefault();

      if (
        event.code === "Space" &&
        gameState === "Start" &&
        gameState !== "Pause"
      ) {
        playAnimation();
        gameState = "Pause";
        console.log(gameState);
      } else if (
        event.code === "Space" &&
        gameState === "Pause" &&
        gameState !== "Start"
      ) {
        stopAnimation();
        gameState = "Start";
        console.log(gameState);
      } else if (event.key === "Shift" && backgroundMode === "Intense") {
        //changes the background color to black and the text color to red
        parentCanvas.style.background = "black";
        parentCanvas.style.color = "red";
        backgroundMode = "Dark";
      } else if (event.key === "Shift" && backgroundMode === "Dark") {
        //changes the background color to red and the text color to black
        parentCanvas.style.background = "red";
        parentCanvas.style.color = "black";
        backgroundMode = "Intense";
      }
    });

    //the animation that is repeated (Help Me text)
    function addTextDynamic() {
      console.log("adding");
      // console.log(speed);

      let HelpMeP = document.createElement("HelpMeP");
      HelpMeP.textContent = " HELP ME ";
      HelpMeP.classList.add("appearInText");
      document.getElementById("ani_canvA_A").appendChild(HelpMeP);

      counter += 1;

      if (counter < 100) {
        aniRef = window.requestAnimationFrame(addTextDynamic);
        // console.log(counter)
      } else {
        stopAnimation();
        counter = 0;
        aniRef = window.requestAnimationFrame(addTextDynamic);
      }
    }

    //plays the animation
    function playAnimation() {
      aniRef = window.requestAnimationFrame(addTextDynamic);
    }

    //stops the animation
    function stopAnimation() {
      window.cancelAnimationFrame(aniRef);

      let HMparagraphs = document.querySelectorAll("HelpMeP");

      for (let i = 0; i < HMparagraphs.length; i++) {
        HMparagraphs[i].remove();
      }
      counter = 200;
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
    let boundingBoxParent = parentCanvas.getBoundingClientRect();
    let currentRow = 20;
    //create an array to store all the rectangles
    let allRects = [];
    for (let i = 20; i < boundingBoxParent.width; i += 20) {
      for (let j = 20; j < boundingBoxParent.height; j += 20) {
        let rect = document.createElement("div");
        rect.classList.add("TEAM_A_b_cell");
        parentCanvas.appendChild(rect);
        //set the position of the rectangle within the canvas
        rect.style.left = `${j}px`;
        rect.style.top = `${i}px`;
        //set the initial size of the rectangle
        rect.style.width = "5px";
        rect.style.height = "5px";
        rect.setAttribute("isactive", "false");
        rect.addEventListener("click", clickEventHandlerOnRec);
        //push the rectangle and its row information into the array
        allRects.push({ rect, row: i });
      }
    }
    //row growth animation
    let rowInterval = setInterval(() => {
      let currentRects = allRects.filter((item) => item.row === currentRow);
      currentRects.forEach(({ rect }) => {
        let growthInterval = setInterval(() => {
          let currentSize = parseInt(rect.style.width);
          if (currentSize < 15) {
            currentSize += 1;
            rect.style.width = `${currentSize}px`;
            rect.style.height = `${currentSize}px`;
          } else {
            clearInterval(growthInterval);
          }
        }, 50);
      });
      currentRow += 20;
      if (currentRow >= boundingBoxParent.width) {
        clearInterval(rowInterval);
      }
    }, 500);
    /****** callback for click on a rect in the grid **********/
    function clickEventHandlerOnRec() {
      if (this.getAttribute("isactive") === "false") {
        this.style.width = "5px";
        this.style.height = "5px";
        this.setAttribute("isactive", "true");
        let growthInterval = setInterval(() => {
          let currentSize = parseInt(this.style.width);
          if (currentSize < 10) {
            currentSize += 1;
            this.style.width = `${currentSize}px`;
            this.style.height = `${currentSize}px`;
          } else {
            clearInterval(growthInterval);
          }
        }, 50);
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
    /*** THIS IS THE CALLBACK FOR KEY DOWN ( DO NOT CHANGE THE NAME..) */
    windowKeyDownRef = function (e) {

      e.preventDefault()
      //code for key down in here
     // console.log(e);
      //SAMPLE KEY CHECK (you do not have to use)
      if (e.code === "Space") {
        console.log("team-space down");
      }

      let newX = playerX;
      let newY = playerY;

      if (e.code == "ArrowUp" && playerY > 0) newY--;
      if (e.code === "ArrowDown" && playerY < gridSize - 1) newY++;

      if (e.code === "ArrowLeft" && playerX > 0) newX--;
      if (e.code === "ArrowRight" && playerX < gridSize - 1) newX++;

      if (newX !== playerX || newY !== playerY) {
        playerX = newX;
        playerY = newY;
        createTrail(playerX, playerY);
      }
    };

    /*** THIS IS THE CALLBACK FOR KEY UP ( DO NOT CHANGE THE NAME..) */
    windowKeyUpRef = function (e) {
      //SAMPLE KEY CHECK (you do not have to use)
      if (e.code === "Space") {
        console.log("space up");
        console.log("team-space up");
        parentCanvas.style.background = "orange"; //delete*
      }
    };

    //DO NOT REMOVE
    window.addEventListener("keydown", windowKeyDownRef);
    window.addEventListener("keyup", windowKeyUpRef);

    //start of the porject

    let speedX = 5;

    //create grid
    let gridArray = [];
    let gridSize = 15;
    for (let i = 0; i < gridSize; i++) {
      //for each x - make a column of changing y's
      let gridCol = [];
      for (let j = 0; j < gridSize; j++) {
        //create a grid cell with a div

        let d = document.createElement("div");
        d.classList.add("grid-cell");
        parentCanvas.appendChild(d);

        d.style.left = (i + 1) * 23.5 + "px"; //modifired to fit in the canvas
        d.style.top = (j + 1) * 23.5 + "px"; //modifired to fit in the canvas
        d.style.background = "yellow";
        gridCol[j] = d;
      }
      //put each grid row into the grid array
      gridArray[i] = gridCol;
    }
    console.log(gridArray);

    //the divisor
    // let num=2;
    let playerX = 0;
    let playerY = 0;
    let trailColor = "red";

    //create tail effect
    function createTrail(x, y) {
      gridArray[x][y].style.background = trailColor;
    }

    //createTrail(playerX, playerY);
  }
}
