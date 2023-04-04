// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onSubmiteClick);

function onSubmiteClick(event) {
  event.preventDefault();
  const { delay, step, amount } = event.target;
  console.log(event.target);
  console.log(event.target.delay.value);
  let firstDelay = Number(delay.value);
  console.log(firstDelay);
  const delayStep = Number(step.value);
  console.log(delayStep);
  const amountValue = Number(amount.value);
  console.log(amountValue);
  makePromises(firstDelay, delayStep, amountValue);
  event.target.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function makePromises(delay, step, amount) {
  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += step;
  }
}
