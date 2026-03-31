const btn = document.getElementById('rollBtn');
const resultDiv = document.getElementById('result');
const sound = document.getElementById('rollSound');

btn.addEventListener('click', () => {
  resultDiv.classList.add('rolling');
  sound.currentTime = 0;
  sound.play();

  setTimeout(rollDice, 500);
});

function rollDice() {
  const quantity = parseInt(document.getElementById('quantity').value);
  const sides = parseInt(document.getElementById('diceType').value);

  let results = [];
  let total = 0;
  let critical = false;

  for (let i = 0; i < quantity; i++) {
    let roll = Math.floor(Math.random() * sides) + 1;
    if (roll === 20 && sides === 20) critical = true;
    results.push(roll);
    total += roll;
  }

  resultDiv.classList.remove('rolling');
  resultDiv.classList.toggle('critical', critical);

  resultDiv.innerHTML = `Resultados: [${results.join(', ')}]<br>Total: ${total}`;
}