const type = [
  'planet',
  'land',
  'jungle',
  'village',
  'cathedral',
  'metropolis',
  'cavern',
  'fishing village',
  'barn',
  'settlement',
  'tower',
  'cellar',
  'country',
  'forest',
  'palace',
  'house',
  'train station',
  'university',
  'garden',
  'terrace',
  'theatre',
  'town hall',
  'stadium',
  'bazaar',
  'spacecraft',
  'tomb',
  'cemetery',
  'tent',
  'tiny continent',
  'fort',
  'castle',
  'corridor',
  'waterfall',
  'hangar',
  'bunker',
  'mill',
  'museum',
  'nest',
  'dungeon'
]

const material = [
  'crystal',
  'gold',
  'porcelain',
  'stone',
  'wood',
  'an incredibly durable material',
  'human bodies',
  'glass',
  'foil',
  'steel',
  'marble',
  'meat',
  'blocks',
  'small people stacked on top of each other',
  'paper',
  'plastic',
  'human bones',
  'matches',
  'empty cartons',
  'recycled bottles',
  'sheets',
  'blankets',
  'dried grass',
  'tiles',
  'loose materials',
  'bones',
  'rubber',
  'beaver\'s tails',
  'feathers',
  'wool',
  'fishing nets',
  'bamboo',
  'fiberglass',
  'a million of Nokias 3310 glued together',
  'human skin',
  'real mink fur',
  'terracotta',
  'a sticky substance',
  'mirrors'
]

const position = [
  'in a forgotten place',
  'in another universe',
  'in the desert',
  'in the fourth dimension',
  'at the north pole',
  'under the earth',
  'in the sky',
  'under the sea',
  'in the post apocalyptic wilderness',
  'near Cleveland',
  'in Birmingham',
  'near the sea',
  'on Mars',
  'in space',
  'on the Moon',
  'in Africa',
  'close to the earth\'s core',
  "a stone's throw away",
  'right behind Tesco',
  'somewhere abroad',
  'in a parallel universe',
  'in Australia',
  'in the basement',
  'in the suburbs',
]

const inhabitants = [
  'aliens',
  'apes',
  'completely normal people',
  'fairies',
  'ghosts',
  'giants',
  'insects',
  'smart plants',
  'robots',
  'cyborgs',
  'mushroom people',
  'miners',
  'giant prawns',
  'bodybuilders',
  'unicorns',
  'old people',
  'barbarians',
  'feminists',
  'hard working dwarves',
  'extremely shy dolphins',
  'poets',
  'malicious crabs',
  'suspiciously lively corpses',
  'flightless birds',
  'useful mutants bred with radiation',
  'zombie babies',
  'homeless people',
  'people laying eggs',
  'hairless men',
  'Jedi knights',
  'colourful zebras',
  'extraverted skeletons',
  'sad clowns',
  'behemoths',
  'miniature giants (so basically normal-sized people)',
  'devious penguins',
  'sneaky gnomes',
  'a highly advanced civilization',
  'all the kids that used to make fun of you',
  'lazy ants',
  'Muppets',
  'shapeshifters',
  'superheroes',
  'miniature elephants',
  'killer bees',
  'people with chainsaws for hands',
]

const govt = [
  'an evil corporation',
  'a not-so-advanced AI',
  'the anarchists',
  'a god',
  'the Masons',
  'a magic elite',
  'the communists',
  'a 3yr old child wise beyond their years',
  'the Wizard of Oz',
  'a brain in a jar',
  'three kids stacked on top of each other under a trench coat',
  'the FIFA',
  'the Little Marmaid',
  'an eccentric billionaire',
  'a lottery machine',
  'the three stooges',
  'the leader of a dangerous cult',
  'the Night King',
  'an android running on Windows Vista',
  'poor life choices',
  'a serial axe murderer',
  'obesity',
  'a sadistic Roman emperor',
  'a super intelligent cricket',
  'two guys in a horse costume',
  'the Avengers',
  'your mother',
  'Amazon\'s Alexa',
  'Satan in tutu',
  'a clockwork robot',
  'Norse Gods',
  'a swarm of hornets',
  'natural selection',
  'a sentient virus',
  'puppies',
  'over-tanned people',
  'the Duracell Bunny',
  'Lady Gaga',
  'Cthulhu',
  'Putin in a kimono',
  'RoboGandhi',
  'Darth Vader',
  'Bono',
  'William Shatner',
  'Mother Teresa of Calcutta',
  'Dalai Lama on steroids',
  'Angela Merkel',
  'Microsoft',
  'spoiled six-year-olds',
  'Siamese twins who can\'t stand each other',
  'incompetent politicians',
  'the gay agenda',
  'the Lego guy',
  'Arnold Schwarzeneger',
  'a cat with actual human-like opposable thumbs',
  'a lumberjack in womens clothes',
  'a mad scientist',
  'sleepy Beyoncé',
  'Harambe',
];

const special = [
  'everybody is happy',
  'everyone is insane',
  'there is no violence',
  'education is illegal',
  'alcohol is banned',
  'the only language is dance',
  'guests are greeted with a complimentary tutu',
  'dubstep is a religion',
  'marshmallow is the new gold',
  'dancing on ice resolves disputes',
  'gladiator fights are broadcast on national TV',
  'Disney princesses can\'t sing',
  'rap battles are the only way to settle things in courts',
  'shower can only be taken in wetsuits',
  'you have magical powers but only if you ate spinach when you were young',
  'yodeling lessons are compulsory',
  'dying is prohibited',
  'the internet has to be harvested',
  'not having a mustache is illegal',
  'everyone has a voice like Morgan Freeman',
  'a mosquito bite causes explosive diarrhea',
  'clothing is edible',
  'only seals can be used as draft animals',
  'a herring is the only dessert option',
  'christmas trees are decorated with human organs',
  'steroids are eaten like candy',
  'you must sing on the phone to order a pizza',
  'specially trained pelicans are used as instruments',
  'rain is caused by burning redheads as a sacrifice',
  'everyone listens to hip hop',
  'every floor is an illuminated disco dance floor',
  'archers use aggressive squirrels instead of arrows',
  'the main cause of death is constipation',
  'size doesn\'t matter',
  'looking in the mirror causes soreness',
  'everyone has an evil twin',
  'you have to pay the tax on your earwax',
  'every dice roll produces 4',
  'there is a constant war',
  'underwear is made of barbed wire',
  'left-handed people are ostracized',
  'the grass grows sideways',
  'murder is legal on Wednesdays',
  'kittens grow on trees',
  'umbrellas are made of concrete',
  'sawfishes and hammerhead sharks work at construction sites'
]

const maintext = document.querySelector('#maintext');

function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateFantasyLand() {
  const text =
        `A ${getRandom(type)} made of ${getRandom(material)}, ${getRandom(position)}, ` +
        `inhabited by ${getRandom(inhabitants)}, ruled by ${getRandom(govt)}, where ${getRandom(special)}.`;

  maintext.innerHTML = text;
}

document.querySelector('button').addEventListener('click', generateFantasyLand);

document.addEventListener('keyup', function (e) {
  if (document.activeElement.tagName !== 'BUTTON'
      && (e.keyCode === 13 || e.keyCode === 32))
    generateFantasyLand();
});

if (!document.documentMode && !/Edge/.test(navigator.userAgent)) {
  maintext.classList.add('copyable');
  maintext.setAttribute('title', 'Click to copy');
  maintext.setAttribute('data-tip', 'Copied!');

  maintext.addEventListener('click', function () {
    const range = document.createRange();
    range.selectNode(maintext);
    window.getSelection().addRange(range);

    try {
      if (document.execCommand('copy')) {
        maintext.classList.add('copied');
        setTimeout(function () {
          maintext.classList.remove('copied');
        }, 600);
      }
    }
    catch (err) {
      console.log('unable to copy');
    }

    window.getSelection().removeAllRanges();
  });
}

generateFantasyLand();
