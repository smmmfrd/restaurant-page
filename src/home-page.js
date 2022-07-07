function about(){

    let about = document.createElement('div');
    about.id = 'about';

    about.innerHTML = '<p>Here at Fakerino\'s we create the finest pizza for our fellow human beings. All our ingredients are sourced and produced in house!</p> <br><p>Recently it has been reported online that Fakerino\'s has been a part of a conspiracy to abduct, convert, or experiment on people. These claims are unsubstantiated and are likely the work of internet trolls due to our unconventional policies and methods not being accepted in their feeble human minds.</p>'

    return about;
}

function news(){

    let news = document.createElement('div');
    news.id = 'news';

    let announcementA = document.createElement('div');
    announcementA.innerHTML = '<strong>NEW!</strong> Try our Stuffed Crust Pizza!<hr>';
    news.appendChild(announcementA);

    let announcementB = document.createElement('div');
    announcementB.innerHTML = '<strong>ANNOUNCEMENT!</strong> Join us for our Glartharan Independence Day!<hr>';
    news.appendChild(announcementB);

    let announcementC = document.createElement('div');
    announcementC.innerHTML = '<strong>NEW LOCATION!</strong> We opened our first establishment on Earth!';
    news.appendChild(announcementC);

    return news;
}

function address(){
    let address = document.createElement('div');
    address.id = 'address';
    address.innerHTML = '<em><strong>Find us at:</strong><br> 17071 Real Street<br>Unique City, JL</em>'
    return address;
}

export default function homePage(){
    let homeContent = document.createElement('div');
    homeContent.id = 'home-content';

    // ABOUT
    homeContent.appendChild(about());
    homeContent.appendChild(news());
    homeContent.appendChild(address());

    return homeContent;
}