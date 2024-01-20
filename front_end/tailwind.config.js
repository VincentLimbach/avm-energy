/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "src/**/*.{jsx,tsx}",
        "public/*.html"
    ],
    theme: {
        extend: {
            colors: {
                tumBlue: {
                    100:'#3070b3',
                    200:'#005293',
                    300:'#003359',
                    400:'#06164a',
                },
                AVMGold:{
                  100: '#F9BB00'
                },
                AVMBlue:{
                  100: '#06164a'
                }
            },
        },
    },
    //TAILWIND IS THE WORST
    safelist: [{
        pattern: /(bg|text|border)-tumBlue-(100|200|300)/
    },
    {
        pattern: /(mt|mb|mr|ml|my|mx|px|py|pt|pb|pl|pr)-[0-9]+/
      },
      {
        pattern: /flex-.*/
      },
      {
        pattern: /(bottom|right|top|left)-[0-9]+/
      },
      {
        pattern: /(w|h)-[0-9]+/
      }],
    plugins: [],
}
