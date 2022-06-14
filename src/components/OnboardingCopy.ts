
interface OnboardingCopyFields {
  [number:number]: {
    headerText: string,
    copyText: string[]
  }
}

export const OnboardingCopy: OnboardingCopyFields = {
  1: {
    headerText: 'Welcome to Concorder!',
    copyText: [
      'Concorder is the music player that allows a group of users to',
      'seamlessly generate a play queue where all users have a fair share',
      'of their own musical choices.'
    ]
  },
  2: {
    headerText: 'How it Works',
    copyText: [
      'There are two parts to Concorder: the Host App and the Client App.'
    ]
  },
  3: {
    headerText: 'The Host App',
    copyText: [
      'The Host App (that\'s this one) is the command centre of Concorder.',
      'It is the music player and where the play queue is generated',
    ]
  },
  4: {
    headerText: 'The Client App',
    copyText: [
      
    ]
  },
  5: {
    headerText: 'The Play Queue',
    copyText: [
      
    ]
  },
  6: {
    headerText: 'The User\'s Pool',
    copyText: [
      
    ]
  },
  7: {
    headerText: 'Jukebox Mode',
    copyText: [
      
    ]
  },
  8: {
    headerText: 'Soundtrack Mode',
    copyText: [
      'Spotify mode allows users to log in with their Spotify accounts to',
      'they can create their pools by selecting songs from their playlists',
      'and top tracks.'
    ]
  },
  9: {
    headerText: 'Flex Mode',
    copyText: [
      'Flex mode gives users more flexibility, allowing them to populate',
      'their individual pools by either choosing them from the Jukebox',
      'catalogue, or by logging in with their Spotify accounts.'
    ]
  },
  10: {
    headerText: 'That\'s it!',
    copyText: [
     'You will now be required to perform a short initial setup so that',
     'Concorder can be optimised to your specific needs'
    ]
  }
}
