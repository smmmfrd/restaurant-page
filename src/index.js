import './style.css';
import ProfilePic from './eldritch_pizza_chef.png';

console.log("heyo");

function homePage(){
    var holder = document.createElement('div');

    // HEADER
    let header = document.createElement('div');
    header.id = 'header';
    let title = document.createElement('h1');
    title.textContent = 'Fakerino\'s';
    header.appendChild(title);
    holder.appendChild(header);

    // CONTENT
    let homeContent = document.createElement('div');
    homeContent.id = 'home-content';
    homeContent.innerHTML = 'The best and totally real pizza place!<br>Made with reality and pizza ingredients!';

    let profilePicture = new Image();
    profilePicture.src = ProfilePic;
    profilePicture.style = '"width: 256px; height: 256px;"';
    homeContent.appendChild(profilePicture);

    holder.appendChild(homeContent);

    return holder;
}

function buildPage(){
    const content = document.querySelector('#content');
    
    content.appendChild(homePage());
}

buildPage();