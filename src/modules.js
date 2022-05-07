

const body = document.querySelector('.content')

const home = (() =>{

    const homepage = document.createElement('div')
    homepage.classList.add('home')
    body.append(homepage)

    const pageHeader = document.createElement('div');
    pageHeader.classList.add('text')
    homepage.append(pageHeader)

    const title = document.createElement('h1')
    pageHeader.append(title)
    title.textContent = 'We are a coffee shop'

    const subTitle = document.createElement('p')
    pageHeader.append(subTitle)
    subTitle.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aliquid laudantium corporis quam officia corrupti, voluptates laborum deleniti perferendis quisquam, doloremque eveniet. Suscipit, quia natus et ipsa vitae autem commodi!'

    const button = document.createElement('button')
    pageHeader.append(button)
    button.textContent = 'Order now!'


})


const menu = (() => {

    const menuPage = document.createElement('div')
    menuPage.classList.add('info')
    body.append(menuPage)

    const title = document.createElement('h1')
    menuPage.append(title)
    title.textContent = 'Available meals!'

    const subTitle = document.createElement('p')
    menuPage.append(subTitle)
    subTitle.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea alias quasi quas illo ab tenetur, veniam id at totam rem fuga asperiores autem debitis quam ipsa earum. Rerum, consequuntur voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga laborum eligendi reprehenderit quasi libero doloribus, nostrum sunt dicta sint ipsam! Quod placeat animi voluptatum, dolorum dolor autem inventore tempora?'

    const food = document.createElement('div')
    food.classList.add('food')
    menuPage.append(food)

    for(let x =0;x < 6; x++){
    const item = document.createElement('div')
    item.classList.add('item')
    const itemName = document.createElement('h1')
    itemName.textContent = 'Chicken sandwich'
    item.append(itemName)
    const itemInfo = document.createElement('p')
    itemInfo.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsum sit neque animi! Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    item.append(itemInfo)
    const itemPrice = document.createElement('h2')
    itemPrice.textContent = '$ 8.90'
    item.append(itemPrice)

    food.append(item)
    }

})

const contact = (()=>{

const contactPage = document.createElement('div')
contactPage.classList.add('info')
body.append(contactPage)

const title = document.createElement('h1')
contactPage.append(title)
title.textContent = 'Contact Us!'

const subTitle = document.createElement('p')
contactPage.append(subTitle)
subTitle.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea alias quasi quas illo ab tenetur, veniam id at totam rem fuga asperiores autem debitis quam ipsa earum. Rerum, consequuntur voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga'

const contacts = document.createElement('div')
contacts.classList.add('con')
contactPage.append(contacts)

const telephoneNumber = document.createElement('p')
contacts.append(telephoneNumber)
telephoneNumber.textContent ='Telephone : +12 012313223'


const email = document.createElement('p')
contacts.append(email)
email.textContent ='Email: coffeeshop@email.com'

const locations = document.createElement('p')
contacts.append(locations)
locations.textContent ='Location: Harare'

const country = document.createElement('p')
contacts.append(country)
country.textContent ='Country: Zimbabwe, South Africa'


})

export {home, menu, contact}