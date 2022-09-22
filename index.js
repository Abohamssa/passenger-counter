let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
  let countStr = count + " - ";
  // 3. Render the variable in the saveEl using innerText
  // saveEl.innerText += countStr;
  saveEl.textContent += countStr;
  // Reset the count to 0
  count = 0;
  countEl.textContent = count;
}
