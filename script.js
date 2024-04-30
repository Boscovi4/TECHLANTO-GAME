// Fisher-Yates shuffle algorithm
function fisherYatesShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Function to create glasses
  function createGlasses() {
    const glassesData = [
      'beer',
      'tequila',
      'choose_person',
      'all_women',
      'all_men',
      'craziest_thing',
      'king_rule',
      'safe',
      'safe',
      'choose_color',
      'portuguese',
      'truth_or_dare',
      'truth_or_dare'
    ];
  
    const glassesContainer = document.getElementById('glasses');
    glassesData.forEach(glassType => {
      const glassDiv = document.createElement('div');
      glassDiv.classList.add('glass');
      glassDiv.dataset.type = glassType;
      glassDiv.innerHTML = `<img src="glass-${glassType}.jpg" alt="">`;
      glassDiv.addEventListener('click', () => revealContent(glassType));
      glassesContainer.appendChild(glassDiv);
    });
  }
  
  // Function to reveal content of glasses
  function revealContent(glassType) {
    let message;
    switch(glassType) {
      case 'beer':
        message = 'Beer';
        break;
      case 'tequila':
        message = 'Tequila Shot';
        break;
      case 'choose_person':
        message = 'Choose someone to drink (Tequila or Beer)';
        break;
      case 'all_women':
        message = 'All Women Drink';
        break;
      case 'all_men':
        message = 'All Men Drink';
        break;
      case 'craziest_thing':
        message = 'Ask the person on your left: "What\'s the craziest thing you\'ve ever done?"';
        break;
      case 'king_rule':
        message = 'I am the KING - Follow my rule for 2 minutes';
        break;
      case 'safe':
        message = 'You are safe';
        break;
      case 'choose_color':
        message = 'Choose someone with black/blue/white shirt to do 10 push-ups on your count';
        break;
      case 'portuguese':
        message = 'Everyone speaks Portuguese for 5 minutes';
        break;
      case 'truth_or_dare':
        message = 'Truth or dare - Choose 2 people';
        break;
      default:
        message = 'No action';
    }
    alert(message);
    shuffleGlasses(); // Shuffle the glasses after someone chooses
  }
  
  // Function to shuffle glasses
  function shuffleGlasses() {
    const glassesContainer = document.getElementById('glasses');
    const glasses = Array.from(glassesContainer.querySelectorAll('.glass'));
    fisherYatesShuffle(glasses); // Use Fisher-Yates shuffle algorithm
    glasses.forEach(glass => {
      glassesContainer.appendChild(glass);
    });
  }
  
  // Function to start the game
  function startGame() {
    document.querySelector('.container').classList.add('hidden');
    document.getElementById('game-container').classList.remove('hidden');
    createGlasses();
  }
  
  // Function to show game rules
  