const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

for (const person of people) {
    switch (person) {
        case "Phil":
        case "Lola":
            refused.textContent += person + ", ";
            break;
        default:
            admitted.textContent += person + ", ";
    }
}
