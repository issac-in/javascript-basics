let output = document.querySelector(".output");
output.innerHTML = '';

let i = 10;
while (i >= 0) {
    const para = document.createElement('p');
    switch (i) {
        case 10:
            para.textContent = "Countdown 10";
            break;
        case 0:
            para.textContent = "Blast off!";
            break;
        default:
            para.textContent = i;
    }
    output.appendChild(para);
    i--;
}