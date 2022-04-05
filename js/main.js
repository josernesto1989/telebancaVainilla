

// const banksName = {
//     BANDEC:'BANDEC',
//     BPA:'BPA',
//     BM:'BM'
//   }
const version = '1.0.0';
const storageKey = `telebanca${version}`;
let adsRemain=10;
let cards = [];
if(localStorage.getItem(storageKey) === null){
  console.log('no hay datos');
  localStorage.setItem(storageKey, JSON.stringify(
    {
      'adsRemain':adsRemain,
      "cards":cards
    }
    ));
}else{
  console.log('else');
  let item = JSON.parse(localStorage.getItem(storageKey));
  adsRemain = item.adsRemain-1;
  saveState();
  cards = item.cards;

}
console.log("ads",adsRemain);
if(adsRemain<=0){
  alert('You have '+adsRemain+' ads left');
  adsRemain=10;
  saveState();
}

function saveState(){
  localStorage.setItem(storageKey, JSON.stringify(
    {
      'adsRemain':adsRemain,
      "cards":cards
    }
    ));
  }

let bandecContainer = document.getElementById("BANDEC");
let bpaContainer = document.getElementById("BPA");

let  bandecOperations = operation.filter(value => value.banks.includes(banksName.BANDEC));
let  bpaOperations = operation.filter(value => value.banks.includes(banksName.BPA));

populateDiv(bandecOperations, bandecContainer);
populateDiv(bpaOperations, bpaContainer);

document.getElementById("tarjeta").addEventListener("keyup", () => {
  
  let cardRegExp=/[\d]{16}/;
  let cardNumberLink = document.getElementById("tarjeta");
  console.log(cardNumberLink.value);
  if(cardRegExp.test(cardNumberLink.value) && cardNumberLink.value.length === 16){
    document.getElementById("register-card-btn").hidden = false;
    document.getElementById("register-card-btn").href = `tel:/*444*40*03*${cardNumberLink.value}#`;
  }
  else{
    document.getElementById("register-card-btn").hidden = true;
  }

});

function populateDiv(operations, container){
  operations.forEach(operation => {
 

    let div = document.createElement("div");
    div.className = "operation";
    div.innerHTML = `<div class= "operationcard">
    <a href="${operation.link}">
    <div class="title">${operation.title}</div>
    <div class="description">${operation.description}</div>
    </a>
    </div>`;
    container.appendChild(div);
  });
}


