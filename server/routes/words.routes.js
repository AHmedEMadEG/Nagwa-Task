const  wordsController  = require("../controllers/words.controller");

module.exports = (app) => {
    // GET WORDS
    app.get('/api/words', wordsController.getWords);
}
