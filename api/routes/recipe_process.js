var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    res.json(
        [{
           id: 1, "recipe_name": "KaduKarela",
            "recipe_process": "1. Boil kadu. 2. Boil Karela. 3. Mix kadu and Karela"
        },
        {
           id: 2, "recipe_name": "Pancake",
            "recipe_process": "1. Mix ingredients. 2. Put in oven. 3. Bake."
        },
        {
            id: 3,"recipe_name": "Tacos",
            "recipe_process": "1. Cook Chicken. 2. Warm up tacos. 3. Mix and serve"
        }
    ]

);
});

module.exports = router;