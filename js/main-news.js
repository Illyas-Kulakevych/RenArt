const cardList = [
    {
        id: 1,
        date: 'JULY 18, 2023',
        description: 'RenArt Gallery has launched a new virtual tour experience. The tour allows visitors to explore the gallery\'s collection of over 1,000 paintings from the Renaissance period.',
        title: 'Immerse Yourself in the Timeless Beauty',
        image: 'img/img-news/timeless-beaty.webp'
    },
    {
        id: 2,
        date: 'MAY 22, 2022',
        description: 'Step into a world of sophistication, elegance, and creativity as you wander through the corridors of RenArt Gallery with an exquisite collection of Renaissance masterpieces.',
        title: 'New Captivating Art Collection at RenArt',
        image: 'img/img-news/captivating-art.webp'
    },
    {
        id: 3,
        date: 'JUNE 02, 2023',
        description: 'Prepare to embark on an enchanting journey as we venture deep into the heart of RenArt, a treasure trove of Renaissance art and its new "Love for Life" exhibition.',
        title: 'RenArt Gallery Launches Virtual Tour Experience',
        image: 'img/img-news/gallery-launches.webp'
    }
];

function renderCardList(cardList) {
    let cardListHtml = '';
    const cardListContainer = document.querySelector('.news-image')
    for (const card of cardList) {
        cardListHtml += ` <div class="news-image-beaty">
        <div class="image-beaty image-beaty__midle">
            <img src="${card.image}" alt="Timeless Beaty">
        </div>
        <div class="beaty-text">
            <p>${card.date}</p>
            <h4>${card.title}</h4>
            <p>${card.description}</p>
        </div>
    </div>`;
    }
    cardListContainer.innerHTML = cardListHtml;
}

renderCardList(cardList)