
function equals3(a, b, c) {
  return (a == b && b == c && a != '');
}

function equals3_v2() {
  return (a == b && b == c && a != '');
}

function checkWinner(model) {
  let winner = 'XO';

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (model[i][j] == '') {
        winner = null;
        break
      }
    }
    if (winner == null) {
      break
    }
  }
  if (winner == 'XO') {
    return winner
  }

  // horizontal
  for (let i = 0; i < 3; i++) {
    a = model[i][0];
    b = model[i][1];
    c = model[i][2];
    let equals3_func = equals3_v2();
    if (equals3_func) {
      winner = model[i][0];
    }
  }

  // vertical
  for (let i = 0; i < 3; i++) {
    a = model[0][i];
    b = model[1][i];
    c = model[2][i];
    let equals3_func = equals3_v2();
    if (equals3_func) {
      winner = model[0][i];
    }
  }

  // diagonal
  if (equals3(model[0][0], model[1][1], model[2][2])) {
    winner = model[0][0];
  }
  if (equals3(model[0][2], model[1][1], model[2][0])) {
    winner = model[0][2];
  }

  return winner;
}

const game = () => {
  const model = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  const playerX = 'X';
  const playerO = 'O';
  let currentPlayer = playerX;

  const $game = document.querySelector('#game');
  const $table = document.createElement('table');

  for (let i = 0; i < 3; i++) {
    const $tr = document.createElement('tr');
    $tr.dataset.index = i;

    for (let j = 0; j < 3; j++) {
      const $td = document.createElement('td');
      $td.dataset.index = j;
      $tr.appendChild($td);
    }

    $table.appendChild($tr);
  }

  $game.appendChild($table);

  $table.addEventListener('click', (e) => {
    const row = e.target.parentNode.dataset.index;
    const column = e.target.dataset.index;

    if (model[row][column] == '') {
      model[row][column] = currentPlayer;
      e.target.innerHTML = currentPlayer;
    }

    const winner = checkWinner(model);
    if (winner && winner != 'XO') {
      alert(`Winner: ${winner}`);
    } else if (winner && winner == 'XO') {
      alert(`There are no losers!`);
    }
    // 1. tie

    currentPlayer = currentPlayer === playerX ? playerO : playerX;
  });
}

window.onload = () => {
  game();
};
