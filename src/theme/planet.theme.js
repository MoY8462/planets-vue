const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addComponents}){
    addComponents({
        ".planet-header": {
            "@apply px-12 h-[100px] flex justify-between border-b-4 border-white": {},
            ".planet-header__title": {
                "@apply flex items-center text-white text-4xl font-medium": {}
            },
            ".planet-header__items": {
                "@apply flex items-center gap-6 text-white text-base": {}
            }
        }
    })
})