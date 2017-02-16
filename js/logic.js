function SokobanGame() {
  this.board = [                      // ROW Index
    [ "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w" ], // 0
    [ "w",  null, null, null, null, null, null, null, null, null, null, null, null, null, null, "w" ], // 1
    [ "w",  null, null, null, null, null, null, null, null, null, null, null, null, null, null, "w" ], // 2
    [ "w",  null, null, null, null, "t" , null, null, "d" , null, "s" , null, null, null, null, "w" ], // 3
    [ "w",  null, null, null, null, null, null, null, null, null, null, null, null, null, null, "w" ], // 4
    [ "w",  null, null, null, null, null, null, null, null, null, null, null, null, null, null, "w" ], // 5
    [ "w",  null, null, null, null, null, null, null, null, null, null, null, null, null, null, "w" ], // 6
    [ "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w" ], // 7
    //   0     1     2     3     4    5     6     7    8     9    10     11   12     13   14    15
]; // COL Index
this.direction = "Up";
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
  console.log("The bulldozer position is:" + currentLoc);
    switch(this.direction) {
      case 'Up':      //x (colIndex)  //y (rowIndex)
        if ((this.board[currentLoc[0]][currentLoc[1] + 1]) === null){
          this.board[currentLoc[0]][currentLoc[1]] = null;
          this.board[currentLoc[0]][currentLoc[1] + 1] = "b";
        } else {
          return;
        }
        break;
      case 'Right':
        if ((this.board[currentLoc[1] + 1][currentLoc[0]]) === null){
          this.board[currentLoc[1]][currentLoc[0]] = null;
          this.board[currentLoc[1] + 1][currentLoc[0]] = "b";
        } else {
          return;
        }
        break;
      case 'Down':
        if ((this.board[currentLoc[0]][currentLoc[1] - 1]) === null){
          this.board[currentLoc[0]][currentLoc[1]] = null;
          this.board[currentLoc[0]][currentLoc[1] - 1] = "b";
        } else {
          return;
        }
        break;
      case 'Left':
        if ((this.board[currentLoc[1] - 1][currentLoc[0]]) === null){
          this.board[currentLoc[1]][currentLoc[0]] = null;
          this.board[currentLoc[1] - 1][currentLoc[0]]= "b";
        } else {
          return;
        }
        break;
    }
    console.log("The new bulldozer position is: " + currentLoc);
  };



// Loop through all the positions and check if they are empty, any that are empty are stored in emptyTiles
SokobanGame.prototype._getCurrentLocation = function () {
  this.board.forEach(function (row, rowIndex) {
    row.forEach(function (cell, colIndex) {
      if (cell === "b") {
        return currentLoc;
      }
    });
  });
};

SokobanGame.prototype._renderBoard = function () { // just prints out everything in each row
  this.board.forEach(function(row) {
    console.log(row);
  });
};
