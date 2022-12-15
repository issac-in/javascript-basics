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
// To it, based on the length of MOUNTAINS, initialize that many <tr> children of <table>, + 1
// Then, initialize the heading cells within the first <tr> child of table, pulling them however we can
// Then from the 2nd <tr> to the last <tr> child of table,
// initialize and populate <td> cells with values accordingly
// Add the <table> to the div with id mountains

// Extra - right align cells that contain number values by setting their style.textAlign property to "right".