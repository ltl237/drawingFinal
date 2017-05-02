var matches = document.querySelector('#matches');

var warriors = document.querySelector('#gsw');
var sas = document.querySelector('#sas');
var uta = document.querySelector('#uta');
var hou = document.querySelector('#hou');

var warriorMatch = ['away', 'away', 'away', 'away' ];

var sasMatch = ['away', 'away', 'home', 'home', 'away', 'away'];

var jazzMatch = ['home', 'away', 'away', 'home', 'home',  'away', 'home' ];

var rockets = ['away', 'away', 'home', 'away', 'away'];

// for(var i = 0; i < warriorMatch.length; i++){
// 	div
// }

warriors.addEventListener('click', function(){
	matches.innerHTML = "";
	var gameTitle = document.createElement('h2');
	gameTitle.textContent = "GSW vs POR";
	matches.appendChild(gameTitle);

	for(var i =0; i < warriorMatch.length;i++){
		var awayTeam = document.createElement('div');
		var homeTeam = document.createElement('div');
		awayTeam.innerHTML = '<img src="team-photos/warriors.png" width="40px" height="40px"><p>GSW</p>';
		homeTeam.innerHTML = '<img src="team-photos/trailblazers.png" width="40px" height="40px"><p>POR</p>'
		var matchHeader = document.createElement('h3');
		matchHeader.textContent = "Game " + (i+1);
		var oneMatch = document.createElement('div');
		awayTeam.className = "away-team";
		homeTeam.className = "home-team";
		if(warriorMatch[i] == 'away'){
			awayTeam.classList.add('match-win');
			homeTeam.classList.add('match-lose');
		}
		else {
			awayTeam.classList.add('match-win');
			homeTeam.classList.add('match-lose');
		}

		matches.appendChild(matchHeader);
		oneMatch.appendChild(awayTeam);
		oneMatch.appendChild(homeTeam);
		matches.appendChild(oneMatch);
	}
});

sas.addEventListener('click', function(){
	matches.innerHTML = "";
	var gameTitle = document.createElement('h2');
	gameTitle.textContent = "SAS vs MEM";
	matches.appendChild(gameTitle);

	for(var i =0; i < sasMatch.length;i++){
		var awayTeam = document.createElement('div');
		var homeTeam = document.createElement('div');
		awayTeam.innerHTML = '<img src="team-photos/spurs.png" width="40px" height="40px"><p>SAS</p>';
		homeTeam.innerHTML = '<img src="team-photos/memphis.png" width="40px" height="40px"><p>MEM</p>';
		var matchHeader = document.createElement('h3');
		matchHeader.textContent = "Game " + (i+1);
		var oneMatch = document.createElement('div');
		awayTeam.className = "away-team";
		homeTeam.className = "home-team";
		if(sasMatch[i] == 'away'){
			awayTeam.classList.add('match-win');
			homeTeam.classList.add('match-lose');
		}
		else {
			awayTeam.classList.add('match-lose');
			homeTeam.classList.add('match-win');
		}

		matches.appendChild(matchHeader);
		oneMatch.appendChild(awayTeam);
		oneMatch.appendChild(homeTeam);
		matches.appendChild(oneMatch);
	}
});

hou.addEventListener('click', function(){
	matches.innerHTML = "";
	var gameTitle = document.createElement('h2');
	gameTitle.textContent = "HOU vs OKC";
	matches.appendChild(gameTitle);

	for(var i =0; i < rockets.length;i++){
		var awayTeam = document.createElement('div');
		var homeTeam = document.createElement('div');
		awayTeam.innerHTML = '<img src="team-photos/rockets.png" width="40px" height="45px"><p>HOU</p>';
		homeTeam.innerHTML = '<img src="team-photos/okc.png" width="40px" height="40px"><p>OKC</p>';
		var matchHeader = document.createElement('h3');
		matchHeader.textContent = "Game " + (i+1);
		var oneMatch = document.createElement('div');
		awayTeam.className = "away-team";
		homeTeam.className = "home-team";
		if(rockets[i] == 'away'){
			awayTeam.classList.add('match-win');
			homeTeam.classList.add('match-lose');
		}
		else {
			awayTeam.classList.add('match-lose');
			homeTeam.classList.add('match-win');
		}

		matches.appendChild(matchHeader);
		oneMatch.appendChild(awayTeam);
		oneMatch.appendChild(homeTeam);
		matches.appendChild(oneMatch);
	}
});

uta.addEventListener('click', function(){
	matches.innerHTML = "";
	var gameTitle = document.createElement('h2');
	gameTitle.textContent = "LAC vs UTA";
	matches.appendChild(gameTitle);

	for(var i =0; i < jazzMatch.length;i++){
		var awayTeam = document.createElement('div');
		var homeTeam = document.createElement('div');
		awayTeam.innerHTML = '<img src="team-photos/clippers.png" width="40px" height="40px"><p>LAC</p>';
		homeTeam.innerHTML = '<img src="team-photos/jazz.png" width="40px" height="26px"><p id="utah">UTA</p>';
		var matchHeader = document.createElement('h3');
		matchHeader.textContent = "Game " + (i+1);
		var oneMatch = document.createElement('div');
		awayTeam.className = "away-team";
		homeTeam.className = "home-team";
		if(jazzMatch[i] == 'away'){
			awayTeam.classList.add('match-win');
			homeTeam.classList.add('match-lose');
		}
		else {
			awayTeam.classList.add('match-lose');
			homeTeam.classList.add('match-win');
		}

		matches.appendChild(matchHeader);
		oneMatch.appendChild(awayTeam);
		oneMatch.appendChild(homeTeam);
		matches.appendChild(oneMatch);
	}
});



