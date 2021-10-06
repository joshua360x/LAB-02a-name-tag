console.log("HEllow")

const title = document.title;
console.log(title)

document.title = 'New Title'

console.log(title)
console.log(document.title)


const colorBack = document.getElementById("color-back")
const colorButton = document.getElementById("color-button")

const fontButton = document.getElementById("color-button")

const nameTag = document.getElementById("name-tag")
const nameInput = document.getElementById("id-name")
const nameDisplay = document.getElementById("name-display")
const updateButton = document.getElementById("update-button")
const greetingDisplay = document.getElementById("greeting-display")
const greetingInput = document.getElementById("greeting-input")

// console.log("nameInput")

// nameInput.value = 'felix';
// nameTag.classList.add('faded')


updateButton.addEventListener('click', () => {
  console.log('you clicked button')



  const newName = nameInput.value;
  nameDisplay.textContent = newName;

  // const newColor = nameInput.value;
  // nameDisplay.textContent = newName;

  // greetingDisplay.textContent = greetingInput.value;
})


colorButton.addEventListener('click', () => {
  console.log('you clicked color button')


  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  colorBack.style.backgroundColor = "#" + randomColor;

  // color.innerHTML = "#" + randomColor;

  // const colors = ['wheat', 'lightblue', 'purple', 'yellowgreen', 'coral']
  // let doMath = Math.floor(Math.random()*5)
  // console.log(colors[doMath])

  // colorBack.style.backgroundColor = colors[doMath]
  // greetingDisplay.textContent = greetingInput.value;
})






