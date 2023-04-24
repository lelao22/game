const rollButton = document.getElementById('roll-button');
rollButton.addEventListener('click', function() {
  const dice = document.querySelector('.dice');
  const betType = document.querySelector('input[name="bet-type"]:checked').value;
  const betAmount = document.getElementById('bet-amount').value;
  let payout = 0;
  const randomNumber = getWeightedRandomNumber();

  dice.textContent = randomNumber;

  if (betType === 'lower') {
    if (randomNumber < 4) {
      payout = betAmount * 0.7;
    }
  } else if (betType === 'higher') {
    if (randomNumber > 3) {
      payout = betAmount * 0.7;
    }
  } else if (betType === 'zero') {
    if (randomNumber == 0) {
      payout = betAmount * 4;
    }
  }

  updateBalance(payout);
});

function getWeightedRandomNumber() {
  const probabilityList = [0, 1, 2, 3, 4, 5, 6];
  const weights = [10, 15, 15, 15, 15, 15, 15];
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
  const currentBalance = Number(balanceDisplay.textContent);
  const newBalance = currentBalance + payout;
  balanceDisplay.textContent = newBalance;
}
