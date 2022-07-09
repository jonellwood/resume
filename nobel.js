const nobelButton = document.querySelector(".getNobel");
const nobelHolder = document.querySelector(".nobel p");

const nobelButtonText = ["Niiiiice", "way to go"];

async function fetchNobel() {
  const response = await fetch("https://api.nobelprize.org/2.1/nobelPrizes", {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();
  // console.log(data);
  return data;
}

function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  if (item === not) {
    return randomItemFromArray(arr, not);
  }
  return item;
}

async function handleClick() {
  const nobelData = await fetchNobel();
  console.log(nobelData);
  const nobelYear = nobelData.noblePrizes.awardYear;
  console.log(nobelYear);
  // const nobels = nobelData.map((nobel) => `${nobel.nobelPrizes.awardYear}`);
  // console.table(nobels);

  // nobelButton.textContent = randomItemFromArray(
  //   nobelButtonText,
  //   nobelButton.textContent
  // );
}

nobelButton.addEventListener("click", handleClick);
