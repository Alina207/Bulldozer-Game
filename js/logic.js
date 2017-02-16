function SokobanGame() {
  this.board = [                      // ROW Index
    [ "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w" ], // 0
    [ "w",  null, null, null, null, null, null, null, null, null, null, null, null, null, null, "w" ], // 1
    [ "w",  null, null, null, null, null, null, null, "s", null, null, null, null, null, null,  "w" ], // 2
    [ "w",  null, null, null, null, "t" , null, null, "b" , null, "s" , null, null, null, null, "w" ], // 3
    [ "w",  null, null, null, null, null, null, null, null, null, null, null, null, null, null, "w" ], // 4
    [ "w",  null, null, null, null, null, null, null, null, null, null, null, null, null, null, "w" ], // 5
    [ "w",  null, null, null, null, null, null, null, null, null, null, null, null, null, null, "w" ], // 6
    [ "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w" ], // 7
    //   0     1     2     3     4    5     6     7    8     9    10     11   12     13   14    15
]; // COL Index
this.direction = "Up";
// this.movement = "";
}


// Turn //
SokobanGame.prototype.changeDirection = function (x) {
  console.log( "Bulldozer is currently rotated at: " +  this.direction );
  switch(x) {
    case 'Up':
      this.direction = 'Up';
      break;
    case 'Right':
      this.direction = 'Right';
      break;
    case 'Left':
      this.direction = 'Left';
      break;
    case 'Down':
      this.direction = 'Down';
      break;
  }
  console.log("Bulldozer is now rotated at: " + this.direction);
};

// Movement //
SokobanGame.prototype.movement = function () {
  var currentLoc = this._getCurrentLocation();
  var row = currentLoc[0];
  var col = currentLoc[1];
  console.log("The bulldozer position is:" + currentLoc);
    switch(this.direction) {
      case 'Up':
        if ((this.board[row - 1][col]) === null) {
          this.board[row][col] = null;
          this.board[row - 1 ][col] = "b";
        } else if ((this.board[row - 1][col]) === "s"){
          this.board[row][col] = null;
          this.board[row - 1 ][col] = "b";
          this.board[row - 2 ][col] = "s";
        } else if ((this.board[row - 1][col]) === "t"){
          this.board[row][col] = null;
          this.board[row - 1 ][col] = "b";
        } else {
          return;
        }
        break;
      case 'Right':
        if ((this.board[row][col + 1]) === null){
          this.board[row][col] = null;
          this.board[row][col + 1] = "b";
        } else if ((this.board[row][col + 1]) === "s"){
          this.board[row][col] = null;
          this.board[row][col + 1] = "b";
          this.board[row][col + 2] = "s";
        } else if ((this.board[row][col + 1]) === "t"){
          this.board[row][col] = null;
          this.board[row][col + 1] = "b";
        } else {
          return;
        }
        break;
      case 'Down':
        if ((this.board[row + 1][col]) === null){
          this.board[row][col] = null;
          this.board[row + 1 ][col] = "b";
        } else if ((this.board[row + 1][col]) === "s"){
          this.board[row][col] = null;
          this.board[row + 1 ][col] = "b";
          this.board[row + 2 ][col] = "s";
        } else if ((this.board[row + 1][col]) === "t"){
          this.board[row][col] = null;
          this.board[row + 1 ][col] = "b";
        } else {
          return;
        }
        break;
      case 'Left':
        if ((this.board[row][col - 1]) === null){
          this.board[row][col] = null;
          this.board[row][col - 1] = "b";
        } else if ((this.board[row][col - 1]) === "s"){
          this.board[row][col] = null;
          this.board[row][col - 1] = "b";
          this.board[row][col - 2] = "s";
        } else if ((this.board[row][col - 1]) === "t"){
          this.board[row][col] = null;
          this.board[row][col - 1] = "b";
        } else {
          return;
        }
        break;
    }
    console.log("The new bulldozer position is: " + currentLoc);
    this.updateBoard;
  };



// Loop through all the positions and find bulldozer location
SokobanGame.prototype._getCurrentLocation = function () {
  var gottenLoc;
  this.board.forEach(function (row, rowIndex) {
    row.forEach(function (cell, colIndex) {
      if (cell === "b") {
        gottenLoc = [rowIndex, colIndex];
      }
    });
  });

  return gottenLoc;
};

SokobanGame.prototype.updateBoard = function () { // just prints out everything in each row
  var items = [];
  this.board.forEach(function (row, rowIndex) {
    row.forEach(function (cell, colIndex) {
      if (cell !== null && cell !== "b" ) {
        items.push( [rowIndex, colIndex, cell] );
      }
    });
  });

  return items;
};
