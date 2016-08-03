function sentenceAnalyzer(sentence) {

    let wordCount = sentence.split(' ').length;
    let characterCount = sentence.split('').length;
    let wordArray = sentence.split(' ');
    let wordAvg = 0;
    for (var i = 0; i < wordCount; i++) {
        wordAvg += wordArray[i].length;
    }
    let avgWordLength = wordAvg / wordCount;

    let answer = {"WordCount": wordCount,
                  "CharacterCount": characterCount,
                  "AvgWordLength": avgWordLength
                 }
    return JSON.stringify(answer);
}
module.exports = sentenceAnalyzer;
