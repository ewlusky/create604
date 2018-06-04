const frag = document.createDocumentFragment()
const newArt = document.createElement('article');
newArt.setAttribute('id', 'messages');
console.log(newArt);
for (let i = 0; i < 5; i++){
    let sect = document.createElement('section');
    sect.setAttribute('class', 'message');
    sect.textContent = i.toString();
    newArt.appendChild(sect);
}
frag.appendChild(newArt);
document.body.appendChild(frag);