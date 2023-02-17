var addBtn = document.querySelector('.add');
var inputTitle = document.querySelector('.new-note input');


addBtn.addEventListener('click', check);
function check() {
if (inputTitle.value != "") {
addNote();
}else{
let youtubeid = {
  name: ""
}

// store the objects
browser.storage.local.set({youtubeid})
  .then(youtubeiddeleted, onError);
  function youtubeiddeleted() {
alert("youtube ID deleted");
  };
  function onError(error) {
  console.log(error)
}
};
}

function addNote() {
function setItem() {
  console.log("youtube ID saved");
}

function gotyoutubeid(item) {
  alert("your saved id is: "+`${item.youtubeid.name}`);
}

function onError(error) {
  console.log(error)
}

// define 2 objects

let youtubeid = {
  name: inputTitle.value
}

// store the objects
browser.storage.local.set({youtubeid})
  .then(setItem, onError);

browser.storage.local.get("youtubeid")
  .then(gotyoutubeid, onError);

}



