import { CountUp, CountUpOptions } from "countup.js";

window.addEventListener("load", init, false);

const countUpOptions: CountUpOptions = {
  formattingFn: (n) => {
    return n.toLocaleString();
    // return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
};

function init() {
  animateSavings();
}

function animateSavings() {
  const depositsElement = document.querySelector("#deposits-value");
  const countUpDeposits = new CountUp(
    "deposits-value",
    parseInt(depositsElement.textContent),
    countUpOptions
  );
  const investmentsElement = document.querySelector("#investments-value");
  const countUpInvestments = new CountUp(
    "investments-value",
    parseInt(investmentsElement.textContent),
    countUpOptions
  )
  const amountElement = document.querySelector("#amount-value");
  const countUpAmount = new CountUp(
    "amount-value",
    parseInt(amountElement.textContent),
    countUpOptions
  )

  if (countUpDeposits.error || countUpInvestments.error || countUpAmount.error) {
    console.log(countUpDeposits.error);
    console.log(countUpInvestments.error);
    console.log(countUpAmount.error);
  } else {
    countUpDeposits.start();
    countUpInvestments.start();
    countUpAmount.start();
  }
}
