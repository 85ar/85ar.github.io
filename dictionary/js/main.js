const engWord = document.getElementById("eng"),
  rusWord = document.getElementById("rus"),
  inputs = document.getElementsByClassName("input"),
  addButton = document.getElementById("add-word-btn"),
  table = document.getElementById("table");

let words;
let btnsDelete;

localStorage.length < 1 ? words = [] : words = JSON.parse(localStorage.getItem('words'));

const addEventDelete = () => {
  if (words.length > 0) {
    btnsDelete = document.querySelectorAll(".btn-delete");
    for (let btn of btnsDelete) {
      btn.addEventListener("click", (e) => {
        deleteWord(e);
      });
    }
  }
};

const addWordtoTable = index => {
  table.innerHTML += `
    <tr class="tr">
      <td class="eng-word">${words[index].english}</td>
      <td class="rus-word">${words[index].russian}</td>
      <td><button class="btn-delete"></button></td>
    </tr>
  `;
  addEventDelete();
}

words.forEach((element, i) => {
  addWordtoTable(i);
});

addButton.addEventListener('click', () => {
  if(engWord.value.length < 1 ||
    rusWord.value.length < 1 ||
    !isNaN(engWord.value) ||
    !isNaN(rusWord.value)) {
      for(let key of inputs) {
        key.classList.add('error')
      }
    } else {
      for (let key of inputs) {
        key.classList.remove("error");
      }
      words.push(new CreateWord(engWord.value, rusWord.value));
      localStorage.setItem('words', JSON.stringify(words));
      addWordtoTable(words.length - 1);
      engWord.value = null;
      rusWord.value = null;
    }
})

function CreateWord(english, russian) {
  this.english = english;
  this.russian = russian;
}

const deleteWord = e => {
  const rowIndex = e.target.parentNode.parentNode.rowIndex;
  e.target.parentNode.parentNode.parentNode.remove();
  words.splice(rowIndex, 1);
  localStorage.removeItem('words');
  localStorage.setItem('words', JSON.stringify(words));

}



addEventDelete();