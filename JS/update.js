function GetRecords(){
    fetch('http://localhost:8003/readall')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
        for (let i =0; i<data.length;i++) {
          console.log("id",data[i].studentId);
          console.log("name",data[i].studentName);
          console.log("address",data[i].studentAddress);
  
          let para = document.createElement("P"); // Create a <p> element
          para.className ="data alert alert-danger col-md-8";
          para.innerText = `
          ${(document.querySelector("#resp").innerHTML = data[i].studentId)}
          ${(document.querySelector("#resp").innerHTML = data[i].studentName)}
          ${(document.querySelector("#resp").innerHTML = data[i].studentAddress)}
          `
        let myDiv = document.getElementById("readall");
          myDiv.appendChild(para);
        }
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

  document.querySelector("form.empForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let x = document.querySelector("form.empForm").elements;
 
    let noteNam = x["noteName"].value;
    let noteDesc = x["noteDescription"].value;
 
    console.log(noteNam);
    console.log(noteDesc);
  
    const data = {
      "name": noteNam,
      "description": noteDesc,
    }
 
    fetch("http://localhost:9000/notes", {
      method: "POST",
      headers: {
        "Content-type": " application/json;",
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(function (data) {
        console.log("Request succeeded with JSON response", data);
      })
      .catch(function (error) {
        console.log("Request failed", error);
      });
  });