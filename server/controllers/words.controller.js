// getting the testdata file
const testData = require('../TestData.json');

// GET LIST
exports.getWords = (req, res) => {

    // getting the list of words
    words = testData.wordList;
    
    // picking 10 random words from the list
    const selectedWords = [];
    while (selectedWords.length < 10) {
        const randomIndex = Math.floor(Math.random() * words.length);
        const word = words[randomIndex];
        if ((!selectedWords.find(item => item.word === word.word)) && (!selectedWords.find(item => item.pos === word.pos) || selectedWords.length >= 4)) {
            selectedWords.push(word);
        }
    }
    res.status(200).json(selectedWords);
}