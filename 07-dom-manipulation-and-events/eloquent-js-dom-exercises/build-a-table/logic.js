const MOUNTAINS = [
    { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
    { name: "Everest", height: 8848, place: "Nepal" },
    { name: "Mount Fuji", height: 3776, place: "Japan" },
    { name: "Vaalserberg", height: 323, place: "Netherlands" },
    { name: "Denali", height: 6168, place: "United States" },
    { name: "Popocatepetl", height: 5465, place: "Mexico" },
    { name: "Mont Blanc", height: 4808, place: "Italy/France" }
];

// Initialize the <table>
const table = document.createElement("table");
// To it, based on the length of MOUNTAINS, initialize that many <tr> children of <table>, + 1
for (let i = 0; i <= MOUNTAINS.length; i++) {
    const tableRow= document.createElement("tr");
    table.appendChild(tableRow);
}
// Then, initialize the heading cells within the first <tr> child of table, pulling them however we can
const tableHeaderRow = table.firstChild;
const headers = Object.getOwnPropertyNames(MOUNTAINS[0]);
for (let header of headers) {
    const tableHeader = document.createElement("th");
    tableHeader.innerText = header;
    tableHeaderRow.appendChild(tableHeader);
}
// Then from the 2nd <tr> to the last <tr> child of table,
let mtnIndex = 0;
const tableRows = table.children;
for (tr of tableRows) {
    if (tr === table.firstElementChild) continue;
    // Populate table data cells accordingly
    for (let header of headers) {
        const tableData = document.createElement("td");
        tableData.innerText = MOUNTAINS[mtnIndex][header];
        // Extra - right align cells that contain number values by setting their style.textAlign property to "right".
        if (typeof MOUNTAINS[mtnIndex][header] === "number") { tableData.style.textAlign = "right"; }
        tr.appendChild(tableData);
    }
    mtnIndex++;
}

// Add the <table> to the div with id mountains
const divMountains = document.querySelector("div[id='mountains']");
divMountains.appendChild(table);