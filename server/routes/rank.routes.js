const  rankController  = require("../controllers/rank.controller");

module.exports = (app) => {
    // GET RANK
    app.post('/api/rank', rankController.getRank);
}
