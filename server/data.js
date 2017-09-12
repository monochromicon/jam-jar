export const title = 'When It Counts'

export const event = 39

export const theme = 'Running out of Power'

export const url = 'https://ldjam.com/events/ludum-dare/39/when-it-counts'

export const stats = [
  {
    name: 'overall',
    place: '489th',
    average: 3.263,
    votes: 21
  },
  {
    name: 'fun',
    place: '683rd',
    average: 2.737,
    votes: 21
  },
  {
    name: 'theme',
    place: '388th',
    average: 3.526,
    votes: 21
  },
  {
    name: 'mood',
    place: '284th',
    average: 3.474,
    votes: 21
  },
  {
    name: 'graphics',
    place: '469th',
    average: 3.389,
    votes: 20
  },
  {
    name: 'innovation',
    place: '280th',
    average: 3.316,
    votes: 21
  }
]

export const metrics = {
  qualified: true,
  karma: 3,
  given: 15.75,
  received: 20.8333,
  classic: 103.7749,
  smart: -9.0055
}

export const description = [
  'A game about the hero’s life after the quest. You saved the world, and now you’re back home, but your sacrifices are catching up with you. Speak with whoever matters to you most.',
  'Arrow keys or A/D to move. Space/Enter to interact or skip.',
  'There is no secret ending. Choose your own objective.',
  'Made with Phaser + ES6 + Webpack.'
]

export const links = [
  {
    type: 'Source code',
    url: 'https:/github.com/monochromicon/ludum-dar39'
  },
  {
    type: 'HTML5 (web)',
    url: 'https://monochromicon.github.io/ludum-dare39/'
  }
]

export const authors = [
  'http404error',
  'PureGarlic',
  'Dplusminus',
  'Mamamacsparkles'
].map(a => {
  return {
    name: a,
    handle: a.replace(/ /, '-').toLowerCase()
  }
})

export const comments = [
  {
    id: 0,
    commenter: {
      name: 'Jason Kennedy',
      handle: 'jason-kennedy'
    },
    text: [
      'more of an interactive fiction then a game. but a very interesting interactive fiction'
    ],
    time: '5 weeks ago',
    likes: 1,
    photo: 'https://static.jam.vg/other/dummy/user64.png'
  },
  {
    id: 1,
    commenter: {
      name: 'Angela He',
      handle: 'angela-he'
    },
    text: [
      'This was a very interesting story :D They all want to say my name!! I like how the NPCs have unique characters and you can learn more about yourself by talking to them.'
    ],
    time: '5 weeks ago',
    likes: 1,
    photo: 'https://static.jam.vg/content/241/8/z/4d0f.jpg'
  }
]
