/*
    
Name:   
Email:  

*/

function calculate () {
     
     // YOUR CODE GOES HERE

     let amt = document.getElementById("amt").value;
     let interest = document.getElementById("interest").value/100;
     let goal = Number(document.getElementById("goal").value);
     // let result = 0;
     // var count = 0;
     // goal = amt(1+interest)**t

     if (!amt || amt <= 0 || !interest || interest <= 0 
          || !goal || goal <= 0) {
               var h3Ele = document.createElement("h3");
               h3Ele.textContent = "Result"; 
               h3Ele.style.color = "green";
               h3Ele.style.marginTop = "30px";
               h3Ele.style.marginBottom = "20px";
          
               var table = document.createElement("TABLE");
               table.setAttribute("id", "table");
               table.className = "table table-bordered"; // Optional: Bootstrap styling
          
               let firstRow = table.insertRow();
               firstRow.innerHTML += `
               
                    <th>You will achieve your goal in (years)</th>
                    <td>-</td>
               
               `;
          
               let secondRow = table.insertRow();
               secondRow.innerHTML +=
               `
               
               <th>You will get ($)</th>
               <td>0.00</td>
               
               `;
          
          
          
               var container = document.getElementById("container");
               container.appendChild(h3Ele);
               container.appendChild(table);
     } else {
          let time = Math.ceil(Math.log(goal/amt) / Math.log(1+interest));
          let finalAmt = (amt * (1+interest)**time).toFixed(2);
     
          console.log(amt);
          console.log(interest);
          console.log(goal);
          console.log(time);
          console.log(finalAmt);
     
          var h3Ele = document.createElement("h3");
          h3Ele.textContent = "Result"; 
          h3Ele.style.color = "green";
          h3Ele.style.marginTop = "30px";
          h3Ele.style.marginBottom = "20px";
     
          var table = document.createElement("TABLE");
          table.setAttribute("id", "table");
          table.className = "table table-bordered"; // Optional: Bootstrap styling
     
          let firstRow = table.insertRow();
          firstRow.innerHTML += `
          
               <th>You will achieve your goal in (years)</th>
               <td>${time}</td>
          
          `;
     
          let secondRow = table.insertRow();
          secondRow.innerHTML +=
          `
          
          <th>You will get ($)</th>
          <td>${finalAmt}</td>
          
          `;
     
     
     
          var container = document.getElementById("container");
          container.appendChild(h3Ele);
          container.appendChild(table);
     }
     
     

     // document.getElementById("result").innerHTML += 
     // `<h3 style="color:green;margin-top:30px;margin-bottom:20px;">
     // Result</h3>`;

     // document.getElementById("result").innerHTML +=
     // `<`;
       
}