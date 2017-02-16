// 1. Create Game Object
  //  Create a new game when the player opens the browser/the page loads. AKA Create game object
  // When do we create the game object? When document ready AKA window.onload

var mySokobanGame = new SokobanGame();

$(document).ready(function () {

// 2. Calls the function that takes the initial tiles and puts them on the screen
  updateBoard();

  var dozerEl = $('.dozer');
  console.log(dozerEl);
// 3. Calls the function that handles keyboard events
  $(document).keydown(arrowControl);
});


// 4. Keyboard events
  // 4a. Prevent arrow key scrolling
  function arrowControl (ev) {
    var acceptableKeys = [ 37, 65, 38, 87, 39, 68, 40, 83 ];
    if (!acceptableKeys.includes(ev.keyCode)) {
      return;
    }
    ev.preventDefault();
  // 4b. Move object based on keypresses
    switch (ev.keyCode) {
      // case for space bar
      case 37:  // left arrow
      case 65:  // a
        mySokobanGame.changeDirection("Left");
         // append css to rotate 270
        break;
      case 38:  // up arrow (Forward key)
      case 87:  // w
        mySokobanGame.changeDirection("Up");
        break;
      case 39:  // right arrow
      case 68:  // d
        mySokobanGame.changeDirection("Right");
        break;
      case 40:  // down arrow
      case 83:  // s
        mySokobanGame.changeDirection("Down");
        break;
    }
  // 4c. Update the screen based on new board state
    updateBoard();
}

// 5. Update the tile when a piece on the board moves
function updateBoard () {
  // 5a. Clears out existing tiles in the DOM
  $(".map").empty();
  mySokobanGame.board.forEach(function (row, rowIndex) {
    var rowDiv = $('<div class="row"></div>');
    $('.map').append(rowDiv);
    row.forEach(function (cell, cellIndex) {
      if (cell === "d") {
        var dozerEl = $('<div/>').addClass('tile').addClass('dozer');
        if (mySokobanGame.direction === 'Up') {
          dozerEl.css('transform', 'rotate(0deg)');
        }
        if (mySokobanGame.direction === 'Right') {
          dozerEl.css('transform', 'rotate(90deg)');
        }
        if (mySokobanGame.direction === 'Left') {
          dozerEl.css('transform', 'rotate(270deg)');
        }
        if (mySokobanGame.direction === 'Down') {
          dozerEl.css('transform', 'rotate(180deg)');
        }
          rowDiv.append(dozerEl);
      } else if (cell === "w") {
        rowDiv.append('<div class="tile wall"></div> ');
      } else if (cell === "t") {
        rowDiv.append('<div class="tile target"></div> ');
      } else if (cell === "s") {
        rowDiv.append('<div class="tile stone"></div> ');
      } else {
        rowDiv.append('<div class="tile"></div> ');
      }
  });

function moveDozer () {

  mySokobanGame.movement("Left");
}

});
}
