function updateButton() {
    const button = document.querySelector('.js-button');
    button.innerHTML = "Loading....."
    setTimeout(function () {
      button.innerHTML = 'Finished'
    },1000)
}


let nums = '';

function countPositive(nums) {
  let positiveNumbers = 0;
  nums.forEach((num) => {
    if (num > 0) {
      positiveNumbers ++;
    }
  });
  return positiveNumbers;
}