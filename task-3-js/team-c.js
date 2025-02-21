/** Collaborators: Collaborators: Tianshun Wu and Jolene Bodika */
setup_C();
/** THEME: SERENITY  */
function setup_C() {
  console.log("in c");
  /**************************************************** */
  //get the buttons
  activateButtons_C(`#TEAM_C`, "ani_canvC");

  /**************************************************** */
  /* NO NEED TO MODIFY THIS FUNCTION :) */
  /*** helper function to activate buttons */
  /**************************************************** */
  function activateButtons_C(team, teamCanvas) {
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

    const canvas = document.createElement("canvas");
    canvas.width = 375;
    canvas.height = 375;
    parentCanvas.appendChild(canvas);

    const ctx = canvas.getContext("2d");


    let circles = [];
    let running = false;
    let frameCount = 0;
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;


    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    });

    canvas.style.cursor = 'none';


    function draw() {
      if (!running) return;


      ctx.fillStyle = 'rgba(0, 0, 50, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);


      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.ellipse(mouseX, mouseY, 80, 80, 0, 0, Math.PI * 2);
      ctx.fill();


      if (frameCount % 60 === 0) {
        circles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: 120,
          color: `hsl(${Math.random() * 360}, 70%, 60%)`,
          shrinking: false
        });
      }


      circles = circles.filter(circle => {

        const dx = mouseX - circle.x;
        const dy = mouseY - circle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);


        if (distance < 190) {
          circle.shrinking = true;

          circle.x += dx * 0.11;
          circle.y += dy * 0.11;
          circle.size -= 3;
        }


        ctx.fillStyle = circle.color;
        ctx.beginPath();
        ctx.ellipse(circle.x, circle.y, circle.size / 2, circle.size / 2, 0, 0, Math.PI * 2);
        ctx.fill();

        return circle.size > 0;
      });

      frameCount++;
      requestAnimationFrame(draw);
    }

    const button = document.createElement("button");
    button.textContent = "▶ Start Animation";
    button.classList.add("TEAM_C_animation-button");
    parentCanvas.appendChild(button);


    button.addEventListener("click", () => {
      running = !running;
      button.textContent = running ? "⏹ Stop Animation" : "▶ Start Animation";

      if (running) {
        circles = [];
        frameCount = 0;
        requestAnimationFrame(draw);
      }
    });


    ctx.fillStyle = 'rgba(0, 0, 50)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
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
    let counter = 0;
    let squares = []
    let shades = [
      "#FC6C85",
      "#FF007F",
      "#C154C1"
    ];
    function drawSquares() {
      //offset
      let offset = 80;

      //make a grid of squares - STATIC
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          let square = document.createElement("div");// creates a single square
          square.classList.add("TEAM_C_square");

          //  decreases the opcity of the hovered element
          square.addEventListener('mouseover', () => {
            square.style.opacity = 0.5;
          });
          //  resets the opcity of the previously hovered element
          square.addEventListener('mouseout', () => {
            square.style.opacity = 1;
          });

          // deletes the selected square element
          square.addEventListener('click', () => {
            square.remove();
          })

          square.style.left = `${offset + i * 25}px`;
          square.style.top = `${offset + j * 25}px`;

          parentCanvas.appendChild(square);
          squares.push(square);
        }
      }
    };

    /*Function that switches the colours of the elements */  
    function alternateColours() {
      let columns = 9;

      squares.forEach((square, i) => {
        let colorIndex = (Math.floor(i / columns) + counter) % shades.length;
        square.style.background = shades[colorIndex];
      });

      counter++;
      if (counter >= shades.length) {
        counter = 0;
      }
    }

    drawSquares();
    setInterval(alternateColours, 1000);


    window.addEventListener("keydown", function (event) {

      if (event.code === 'ArrowRight') {// randomizes the width of the squares through 1-50px
        squares.forEach((square) => {
          square.style.width = `${Math.ceil(Math.random() * 50)}px`;
        });
      } else if (event.code === 'ArrowLeft') {// resets the width of the squares to 20px
        squares.forEach((square) => {
          square.style.width = `${20}px`;
        })
      } else if (event.code === 'ArrowUp') {// randomizes the height of the squares through 1-50px
        squares.forEach((square) => {
          square.style.height = `${Math.ceil(Math.random() * 50)}px`;
        })
      } else if (event.code === 'ArrowDown') {// resets the height of the squares to 20px
        squares.forEach((square) => {
          square.style.height = `${20}px`;
        })
      }
    });
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

