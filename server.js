const PORT = 8000;

// const calculator = require('./calculator')
const age = require('./age');
const http = require('http');
const calculator = require('./calculator');
const md5 = require('md5');
const sentenceAnalyzer = require('./sentenceAnalyzer');

let server = http.createServer((req, res) => {


    let urlParts = req.url.match(/[^/]+/g) || [];
    let path = urlParts[0];

    switch (path) {
        case 'calculator':

            let num1 = parseInt(urlParts[1]);
            let operator = urlParts[2];
            let num2 = parseInt(urlParts[3]);

            res.write(calculator(num1, operator, num2) + '\n');
            res.end();
            break;

        case 'age':
            //do the age stuff
            let birthStr = urlParts[1];
            res.write(age(birthStr));
            res.end();
            break;
        case 'sentenceAnalyzer':

            let sentence = decodeURI(urlParts[1]);

            res.write(sentenceAnalyzer(sentence));

            res.end();
            break;
        case 'gravatar':

            let email = urlParts[1];
            let gravy = 'http://www.gravatar.com/avatar/';
            let answer = (gravy + md5(email));
            res.write(answer);
            res.end();
            break;

        default:
            res.statusCode = 404;
            res.end('Not found.\n');
    }
});
server.listen(PORT, err => {
    console.log(err || `Server listening on port ${PORT}`);
});
