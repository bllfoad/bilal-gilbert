'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'utopianTree' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function utopianTree(n) {
    let totalcounter = 0;
    let sumhight = 1;
    while (totalcounter <= n) {
        if(totalcounter === 0){
            sumhight =1;
            totalcounter++;
            continue;
        }
        if (totalcounter %2){
            sumhight = sumhight *2;}
        else {
            sumhight = sumhight+1;
        }



        totalcounter++;
    }
    return sumhight;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const result = utopianTree(n);

        ws.write(result + '\n');
    }

    ws.end();
}