import './style.css';
import homePage from './home-page';


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
  
const images = importAll(require.context('./header-images', false, /\.(png|jpe?g|svg)$/));

function header(){
    let header = document.createElement('div');
    header.id = 'header';

    // LINKS
    let links = document.createElement('div');
    links.id = 'links';

    let home = document.createElement('div');
    home.textContent = 'Home';
    home.addEventListener('click', () =>{
        buildPage('home');
    });
    links.appendChild(home);

    let menu = document.createElement('div');
    menu.textContent = 'Menu';
    menu.addEventListener('click', () =>{
        buildPage('menu');
    });
    links.appendChild(menu);

    let contact = document.createElement('div');
    contact.textContent = 'Contact';
    contact.addEventListener('click', () =>{
        buildPage('contact');
    });
    links.appendChild(contact);
    
    header.appendChild(links);

    // TITLE
    let titleHolder = document.createElement('div');
    titleHolder.id = 'title-holder';

    let picA = new Image();
    picA.src = images['eldritch_pizza_chef.png'];
    titleHolder.appendChild(picA);

    let title = document.createElement('h1');
    title.innerHTML = 'Fakerino\'s<br>Pizza<br>and Others';
    titleHolder.appendChild(title);

    let picB = new Image();
    picB.src = images['eldritch_pizza_logo.png'];
    titleHolder.appendChild(picB);

    header.appendChild(titleHolder);

    return header;
}

function buildPage(page){
    const content = document.querySelector('#content');
    content.innerHTML = '';
    content.appendChild(header());

    console.log(`Building: ${page}`);
    if(page === 'home'){
        content.appendChild(homePage());
    }
}

buildPage('home');