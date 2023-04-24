<!DOCTYPE html>
<html>
  <head>
    <title>Double - Jogo de Dados</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
    <div id="game-board">
      <div id="dice-board">
        <div class="dice"></div>
      </div>
    </div>
    <div id="betting-area">
      <label>
        <input type="radio" name="bet-type" value="lower" checked>
        Menor (1-3)
      </label>
      <label>
        <input type="radio" name="bet-type" value="higher">
        Maior (4-6)
      </label>
      <label>
        <input type="radio" name="bet-type" value="zero">
        Zero (0)
      </label>
      <br>
      <label>
        Quantidade de Apostas: 
        <input type="number" id="bet-amount" value="10">
      </label>
      <br>
      <button id="place-bet">Colocar Apostas</button>
    </div>
    <div id="control-panel">
      <button id="roll-button">Jogar</button>
    </div>
    <script src="game.js"></script>
  </body>
</html>
