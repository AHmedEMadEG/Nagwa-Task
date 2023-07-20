// getting the testdata file
const testData = require('../TestData.json');


// GET RANK
exports.getRank = (req, res) => {
    // getting the list of scores
    const scores = testData.scoresList;
    // calculating the rank
    let countOfLessScores = 0;
    scores.forEach(score => {
        if (req.body.finalScore > score) countOfLessScores++;
    })
    const rank = ((countOfLessScores / 30) * 100).toFixed(2);
    res.status(200).json(rank);
}