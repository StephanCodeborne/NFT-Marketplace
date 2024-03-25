const artists = document.querySelector('.artists-container');

const userNames = ['Keepitreal', 'DigiLab', 'GravityOne', 'Juanie', 'BlueWhale', 'MrFox', 'Shroomie', 'Robotica', 'RustyRobot', 'Animakid', 'Dotgu', 'Ghiblier'];

const avatarLinks = [
    '/avatars/top%201%20artist.png',
    '/avatars/top%202%20artist.png',
    '/avatars/top%203%20artist.png',
    '/avatars/top%204%20artist.png',
    '/avatars/top%205%20artist.png',
    '/avatars/top%206%20artist.png',
    '/avatars/top%207%20artist.png',
    '/avatars/top%208%20artist.png',
    '/avatars/top%209%20artist.png',
    '/avatars/top%2010%20avatar.png',
    '/avatars/top%2011%20avatar.png',
    '/avatars/top%2012%20avatar.png'
  ];
  

for (let i = 0; i < 12; i++) {
    const artistCard = document.createElement('div');
    artistCard.classList.add('artist-card');
    artistCard.classList.add('card');

    const rankingNum = document.createElement('div');
    rankingNum.classList.add('ranking-number');
    rankingNum.innerText = `${i + 1}`;

    const avatar = document.createElement('div');
    avatar.classList.add('avatar');
    avatar.style.background = `url(${avatarLinks[i]}) center center /cover`; 

    const userName = document.createElement('h3');
    userName.classList.add('user-name');
    userName.innerText = userNames[i];

    const totalSales = document.createElement('div');
    totalSales.classList.add('total-sales');
    totalSales.innerHTML = 
    `<span class="label">Total Sales:</span>
    <span class="sales">34.53 ETH</span>`;

    
    artistCard.appendChild(rankingNum);
    artistCard.appendChild(avatar);
    artistCard.appendChild(userName);
    artistCard.appendChild(totalSales);

    const a = document.createElement('a');
    a.setAttribute('href', '#')
    a.appendChild(artistCard)
    artists.appendChild(a);
}
