document.getElementById('rollBtn').addEventListener('click', rollDice);

function rollDice() {
  const quantity = parseInt(document.getElementById('quantity').value);
  const sides = parseInt(document.getElementById('diceType').value);

  let results = [];
  let total = 0;

  for (let i = 0; i < quantity; i++) {
    let roll = Math.floor(Math.random() * sides) + 1;
    results.push(roll);
    total += roll;
  }

  document.getElementById('result').innerHTML = 
    `Resultados: [${results.join(', ')}] <br> Total: ${total}`;
}
