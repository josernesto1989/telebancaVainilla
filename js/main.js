

// const banksName = {
//     BANDEC:'BANDEC',
//     BPA:'BPA',
//     BM:'BM'
//   }

let bandecContainer = document.getElementById("BANDEC");
let bpaContainer = document.getElementById("BPA");

let  bandecOperations = operation.filter(value => value.banks.includes(banksName.BANDEC));
let  bpaOperations = operation.filter(value => value.banks.includes(banksName.BPA));

populateDiv(bandecOperations, bandecContainer);
populateDiv(bpaOperations, bpaContainer);


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


