function SokobanGame() {
  this.board = [                      // ROW Index
    [ "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w",  "w" ], // 0
    [ "w",  null, null, null, null, null, null, null, null, null, null, null, null, null, null, "w" ], // 1
    [ "w",  null, null, null, null, null, null, null, "s", null, null, null, null, null, null,  "w" ], // 2
    [ "w",  null, null, null, null, "t" , null, null, "b" , null, "s" , null, null, null, null, "w" ], // 3
    [ "w",  null, null, null, null, null, null, null, null, null, null, null, null, null, null, "w" ], // 4
    [ "w",  null, null, "t", null, null, null, null, null, null, null, null, null, null, null, "w" ], // 5
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
  var infrontRow, infrontCol, lastRow, lastCol;
  console.log("The bulldozer position is:" + currentLoc);
    switch(this.direction) {
      case 'Up':
        infrontRow = row - 1;
        infrontCol = col;
        lastRow = row - 2;
        lastCol = col;
        break;
      case 'Right':
        infrontRow = row;
        infrontCol = col + 1;
        lastRow = row;
        lastCol = col + 2;
        break;
      case 'Down':
        infrontRow = row + 1;
        infrontCol = col;
        lastRow = row + 2;
        lastCol = col;
        break;
      case 'Left':
        infrontRow = row;
        infrontCol = col -1;
        lastRow = row;
        lastCol = col - 2;
        break;
    }
    console.log("The new bulldozer position is: " + currentLoc);

    var infront = this.board[infrontRow][infrontCol];
    var last = this.board[lastRow][lastCol];

    if (this.isInvalidMove(infront, last) === true) {
      return;
    }

    // where dozer came from
    if (this.board[row][col] === "b") {
      this.board[row][col] = null;
    } else if ((this.board[row][col] === "bt") || (this.board[row][col] === "st")) {
      this.board[row][col] = "t";
    }

    // what's in front
    if (this.board[infrontRow][infrontCol] === null) {
      this.board[infrontRow][infrontCol] = "b";
    }

    if (this.board[infrontRow][infrontCol] === "t") {
      this.board[infrontRow][infrontCol] = "bt";
    }

    if (this.board[infrontRow][infrontCol] === "s") {
      if (this.board[lastRow][lastCol] === null) {
        this.board[lastRow][lastCol] = "s";
      } else if (this.board[lastRow][lastCol] === "t") {
        this.board[lastRow][lastCol] = "st";
      }
      this.board[infrontRow][infrontCol] = "b";
    }
  };
  

SokobanGame.prototype.isInvalidMove = function (infrontCell, lastCell) {
  if (infrontCell === "w") {
    return true;
  } else if ((infrontCell === "s") && (lastCell === "s")) {
    return true;
  } else if ((infrontCell === "s") && (lastCell === "w")) {
    return true;
  } else {
    return false;
  }
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

SokobanGame.prototype.findItems = function () {
  var items = [];
  this.board.forEach(function (row, rowIndex) {
    row.forEach(function (cell, colIndex) {
      if (cell !== null && cell !== "b" ) {
        items.push( [rowIndex, colIndex, cell] );
        console.log(items);
      }
    });
  });
  return items;
};


SokobanGame.prototype._getAvailablePosition = function () {
  var emptyTiles = [];
  this.board.forEach(function (row, rowIndex) {
    row.forEach(function (cell, colIndex) {
      if (cell === null) {
        emptyTiles.push({ x: rowIndex, y: colIndex });
      }
    });
  });

  if (emptyTiles.length === 0) {
    return null;
  }
  return emptyTiles;
};
