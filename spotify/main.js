const topBar = document.querySelector('.topbar');


window.addEventListener('scroll', () => {
	if (window.scrollY > 0) {
		topBar.classList.add('transparent');
	} else {
		topBar.classList.remove('transparent');
	}
});


let topbarHeight = topBar.offsetHeight;

const mainContent = document.querySelector('.main-content');
mainContent.style.paddingTop = `${topbarHeight + 20}px`;


const containerConcentracion = document.querySelectorAll(
	'.card-concentracion'
);
const containerSpotifyPlaylists = document.querySelectorAll(
	'.card-spotify-playlists'
);


const createButton = card => {
	
	const button = document.createElement('button');
	button.innerHTML = '<i class="fa-solid fa-play"></i>';

	
	card.appendChild(button);

	
	button.style.display = 'none';
	button.classList.add('btn-play');

	
	card.addEventListener('mouseover', () => {
		button.style.display = 'block';
	});

	card.addEventListener('mouseout', () => {
		button.style.display = 'none';
	});
};


containerConcentracion.forEach(card => {
	createButton(card);
});

containerSpotifyPlaylists.forEach(card => {
	createButton(card);
});