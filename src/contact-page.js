const catering = {
    title: 'Catering',
    phone: '1-555-555-5555',
    email: 'catering@fakerino.alien',
    twitter: '@fakerinospizzandothers'
};
const earth = {
    title: 'Earth Location',
    phone: '1-234-567-890',
    email: 'earth00001@fakerino.alien',
    twitter: '@fakerinospizzandothers.earth'
};

function contactInfo(info){
    let contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');
    
    let t = document.createElement('h2');
    t.textContent = info.title;
    contactInfo.appendChild(t);

    let p = document.createElement('p');
    p.textContent = `Phone Number #: ${info.phone}`;
    contactInfo.appendChild(p);

    let e = document.createElement('p');
    e.textContent = `Email: ${info.email}`;
    contactInfo.appendChild(e);

    let twit = document.createElement('p');
    twit.textContent = `Twitter @: ${info.twitter}`;
    contactInfo.appendChild(twit);

    return contactInfo;
}


export default function contactPage(){
    let contactContent = document.createElement('div');
    contactContent.id = 'contact-content';
    
    let contactUs = document.createElement('h1');
    contactUs.textContent = 'Contact Us';
    contactContent.appendChild(contactUs);

    let infoDiv = document.createElement('div');
    infoDiv.appendChild(contactInfo(catering));
    infoDiv.appendChild(contactInfo(earth));
    contactContent.appendChild(infoDiv);

    return contactContent;
}