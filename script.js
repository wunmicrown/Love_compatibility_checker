const form = document.getElementById('form');
const resultDisplay = document.getElementById('disp');
const messageDisplay = document.getElementById('messa');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const lovePercentage = Math.round(Math.random() * 101);
   resultDisplay.innerHTML = `<div class="percentage-body">
   <div>Percentage of love between</div> 
   <div style="color:black">${firstInput.value} & ${secondInput.value}</div>
   <div class="center-container">
  <div class="percentage-container">
    <div class="percentage">
      <span>${lovePercentage}%</span>
    </div>
  </div>
</div>
   </div>`;
    let message = '';
    if (lovePercentage < 50) {
        message = 'Sorry, it seems your love is not meant to be.';
    } else if (lovePercentage < 80) {
        message = `
        Love will paint your world with vibrant colors, turning ordinary moments into extraordinary memories.`;
    } else {
        message = 'Together, you will write a love saga, with chapters filled with passion, resilience, and unwavering commitment.';
    }
    messageDisplay.innerHTML = message;
    form.reset();
});
