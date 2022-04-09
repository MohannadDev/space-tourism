module.exports = {
    purge: [
      './*.html',
      './src/**/*.js'
    ],
    darkMode: false,
    theme: {
      extend: {
        fontFamily: {
          bellefair: ["Bellefair", "sans-serif"],
          barlowCondensed: ["Barlow Condensed", "sans-serif"]
        },
        colors: {
          midnightExpress: "#0B0D17",
          lavender: "#D0D6F9",
          arsenic: "#383b4b",
          spanishGray: "#979797"
        },
        backgroundImage: {
          'homeBGMobile': "url('/src/Components/pages/assets/home/background-home-mobile.jpg')",
          'homeBGDesktop': "url('/src/Components/pages/assets/home/background-home-desktop.jpg')",
          'destinationBGMobile': "url('/public/assets/destination/background-destination-mobile.jpg')",
          'destinationBGTablet': "url('/public/assets/destination/background-destination-tablet.jpg')",
          'destinationBGDesktop': "url('/public/assets/destination/background-destination-desktop.jpg')",
          'crewBGMobile': "url('/public/assets/crew/background-crew-mobile.jpg')",
          'crewBGTablet': "url('/public/assets/crew/background-crew-tablet.jpg')",
          'crewBGDesktop': "url('/public/assets/crew/background-crew-desktop.jpg')",
          'technologyBGMobile': "url('/public/assets/technology/background-technology-mobile.jpg')",
          'technologyBGTablet': "url('/public/assets/technology/background-technology-tablet.jpg')",
          'technologyBGDesktop': "url('/public/assets/technology/background-technology-desktop.jpg')",
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }