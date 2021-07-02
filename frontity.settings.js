const settings = {
  "name": "my-first-frontity-project",
  "state": {
    "frontity": {
      "url": "https://cdelubot.server2.trinchera.dev/",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/frontity-chakra-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Inicio",
              "/"
            ],
            [
              "Grupo 1",
              "/category/grupos/grupo-1/"
            ],
            [
              "Grupo 2",
              "/category/grupos/grupo-2/"
            ],
            [
              "Grupo 3",
              "/category/grupos/grupo-3/"
            ],
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://cdelubot.server2.trinchera.dev/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
