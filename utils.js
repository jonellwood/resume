function fetchDate() {
  let now = new Date();
  let time = now.getHours() + ":" + now.getMinutes();
  let date = now.getMonth() + 1 + "/" + now.getDate() + "/" + now.getFullYear();

  document.querySelector("#date").innerHTML = date + " " + time;
}
