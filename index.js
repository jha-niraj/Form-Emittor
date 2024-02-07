const tBody = document.getElementById('tbody');
let rowCounter = 0;

const btn = document.getElementById("btn");
btn.addEventListener("click", handleInputs);

function handleInputs() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    const country = document.getElementById("country").value;
    const place = document.getElementById("place").value;

    const tableRow = document.createElement("tr");
    const tableData1 = document.createElement("td");
    const tableData2 = document.createElement("td");
    const tableData3 = document.createElement("td");
    const tableData4 = document.createElement("td");
    const tableData5 = document.createElement("td");

    tableData1.textContent = firstName;
    tableData2.textContent = lastName;
    tableData3.textContent = age;
    tableData4.textContent = country;
    tableData5.textContent = place;

    tBody.appendChild(tableRow);
    rowCounter++;

    if(rowCounter > 2) {
        alert("Table size exceeded!!!");
        return;
    }

    tableRow.appendChild(tableData1);
    tableRow.appendChild(tableData2);
    tableRow.appendChild(tableData3);
    tableRow.appendChild(tableData4);
    tableRow.appendChild(tableData5);

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("age").value = "";
    document.getElementById("country").value = "";
    document.getElementById("place").value = "";
}