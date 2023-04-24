const rollButton = document.getElementById('roll-button');
rollButton.addEventListener('click', function() {
  const dice = document.querySelector('.dice');
  const betType = document.querySelector('input[name="bet-type"]:checked').value;
  const betAmount = document.getElementById('bet-amount').value;
  let payout = 0;
  const randomNumber = getWeightedRandomNumber();
  dice.textContent = randomNumber;
  dice.classList.remove('animate__animated', 'animate__backInRight');
  setTimeout(() => {
      dice.classList.add('animate__animated', 'animate__backInRight');
  }, 10);
  

  if (betType === 'lower') {
    if (randomNumber < 4 && randomNumber > 0) { // Verifica se o número sorteado é menor que 4 e maior que 0
      payout = betAmount * 0.7;
      document.getElementById('resultado').textContent = 'Você ganhou!';
    } else {
      document.getElementById('resultado').textContent = 'Você perdeu!';
    }
  } else if (betType === 'higher') {
    if (randomNumber >= 4) {
      payout = betAmount * 0.7;
      document.getElementById('resultado').textContent = 'Você ganhou!';
    } else {
      document.getElementById('resultado').textContent = 'Você perdeu!';
    }
  } else if (betType === 'zero') {
    if (randomNumber == 0) {
      payout = betAmount * 4;
      document.getElementById('resultado').textContent = 'Você ganhou!';
    } else {
      document.getElementById('resultado').textContent = 'Você perdeu!';
    }
  }

  updateBalance(payout);
});



function getWeightedRandomNumber() {
    const probabilityList = [0, 1, 2, 3, 4, 5, 6];
    const weights = [30, 10, 10, 10, 10, 10, 10]; // Probabilidade do número 0 ser sorteado é 30, enquanto a probabilidade dos outros números é 10
    const weightedList = [];
  
    for (let i = 0; i < probabilityList.length; i++) {
      for (let j = 0; j < weights[i]; j++) {
        weightedList.push(probabilityList[i]);
      }
    }
  
    const randomIndex = Math.floor(Math.random() * weightedList.length);
    const randomNumber = weightedList[randomIndex];
  
    return randomNumber;
  }
  
function updateBalance(payout) {
    const balanceDisplay = document.getElementById('balance');
    if (balanceDisplay !== null) {
      const currentBalance = Number(balanceDisplay.textContent);
      const newBalance = currentBalance + payout;
      balanceDisplay.textContent = newBalance;
    }
  }
  
