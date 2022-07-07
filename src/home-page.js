function about(){

    let about = document.createElement('div');
    about.id = 'about';

    about.innerHTML = '<p>Here at Fakerino\'s we create the finest pizza for our fellow human beings. All our ingredients are sourced and produced in house!</p>'

    return about;
}

export default function homePage(){
    // CONTENT
    let homeContent = document.createElement('div');
    homeContent.id = 'home-content';
    homeContent.appendChild(about());

    let news = document.createElement('div');
    news.id = 'news';
    homeContent.appendChild(news);

    let address = document.createElement('div');
    address.id = 'address';
    homeContent.appendChild(address);

    return homeContent;
}