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

// Extra Exercise
admitted.textContent = admitted.textContent.substring(0, admitted.textContent.length - 2);
refused.textContent = refused.textContent.substring(0, refused.textContent.length - 2);
