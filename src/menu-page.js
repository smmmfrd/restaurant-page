function importAllImages(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
  
const images = importAllImages(require.context('./menu-images', false, /\.(png|jpe?g|svg)$/));

function menuItem(name, pic){
    let menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    let img = new Image();
    img.src = pic;
    img.style = '"width: 256; height: 256;"'
    menuItem.appendChild(img);

    let title = document.createElement('p');
    title.textContent = name.toUpperCase();
    menuItem.appendChild(title);

    return menuItem;
}

export default function menuPage(){
    let menuContent = document.createElement('div');
    menuContent.id = 'menu-content';

    for(const [key, value] of Object.entries(images)){
        // console.log(`${key.replace('.png','').split("-").join(' ')}: ${value}`);
        menuContent.appendChild(menuItem(key.replace('.png','').split("-").join(' '), value))
    }
    
    return menuContent;
}