/*
 Name: 
 Email: 
 */
 
 // DO NOT EDIT: START
const jokeTable = document.getElementById("joke-table");
const jokeTableTbody = jokeTable.getElementsByTagName("tbody")[0];
const jokeText = document.getElementById("jokeText");
// DO NOT EDIT: END

function getSampleJokes() {
  // DO NOT EDIT: START
  while (jokeTableTbody.lastChild) {
    jokeTableTbody.lastChild.remove();
  }
  
  let serial = 1;
  // DO NOT EDIT: END
  
  // To be completed...
  

  for(let i=0;i<sampleJokes.length;i++){
    if (sampleJokes[i].type == "twopart"){
      var tr = document.createElement("tr");
      var td_sn = document.createElement("td");
      td_sn.innerText = `${serial}`;
      var td_cat = document.createElement("td");
      td_cat.innerText += `${sampleJokes[i].category}`;
      var td_setup = document.createElement("td");
      td_setup.innerText += `${sampleJokes[i].setup}`;
      var td_del = document.createElement("td");
      td_del.innerText += `${sampleJokes[i].delivery}`;
      serial += 1;
      tr.appendChild(td_sn);
      tr.appendChild(td_cat);
      tr.appendChild(td_setup);
      tr.appendChild(td_del);
      jokeTableTbody.appendChild(tr);
      // var category = document.createTextNode(sampleJokes[i].category);
      // var setup = document.createTextNode(sampleJokes[i].setup);
      // var delivery = document.createTextNode(sampleJokes[i].delivery);
      // var serialNode = document.createTextNode(serial);
      // td.appendChild(td.innerText);
      // td.appendChild(category);
      // td.appendChild(setup);
      // td.appendChild(delivery);
    }

  }
  // for(let i=0;i<sampleJokes.length;i++){
  //   jokeTableTbody.innerHTML += `<td>${sampleJokes[i].type}</td>`;
  // }
}
// console.log(jokeTable);
// console.log(jokeTableTbody);
// console.log(jokeText);
// console.log(sampleJokes)

function getJoke() {
  // To be completed...  
  var categoryValue = document.getElementById("categoriesDD").value;

  // for(let i=0;i<sampleJokes.length;i++){
    axios.post(`q3_getJoke.php?query=${categoryValue}`,{
      category: categoryValue
    })
    .then(function (response){
      var p = document.createElement("p");
      p.innerText = response.data;
      jokeText.appendChild(p);
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  // }

}

