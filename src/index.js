import { home, menu, contact } from "./modules";

home()

function clearDOM(button) {

    const content = document.querySelector('.content')
    const divs = content.querySelectorAll('div')
    for (let i = 0; i < divs.length; i++) {
        let classNames = divs[i].getAttribute('class')
        if (classNames != 'nav') {
            divs[i].remove()
        }
    }
    switch (button) {
        case 'home': home()
            break;
        case 'menu': menu()
            break;
        case 'contact': contact()
            break;
    }


}

const next = document.querySelectorAll('.buttons')
const buttons = Array.from(next)

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', e=>{
        clearDOM(buttons[i].getAttribute('id'))
    })

}
