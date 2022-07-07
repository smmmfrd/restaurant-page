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
    let links = document.createElement('ul');
    let home = '<li>Home</li>';
    let menu = '<li>Menu</li>';
    let about = '<li>About</li>';
    links.innerHTML = home + menu + about;
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

function buildPage(){
    const content = document.querySelector('#content');
    content.appendChild(header());
    content.appendChild(homePage());
}

buildPage();