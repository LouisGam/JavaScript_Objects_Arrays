// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const numbers = [1, 2, 3, 4, 5]

function arraySum(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        
        console.log(sum);
    }

    return sum;

    }

    console.log(arraySum(numbers));

    
    
    // Exercise 2 Section

console.log("EXERCISE 2:\n==========\n");

const book = {
    title: "Tender is the Flesh",
    author: "Agustina Bazterrica",
    pages: 224,
    read: 1,

    bookSent() {
        console.log(`The book ${this.title} by ${this.author} has ${this.pages} pages. I have read it ${this.read} `)
    
    }
}

book.info = function() {
return `${this.title} by ${this.author} has ${this.pages} pages. And has been read ${this.read} time(s)`;
}
console.log(book.info());

/* Exercise 3 Section  Reverse ever word in a sentence */
let sentence = "The quick brown fox jumps over the lazy dog";

function reverseWords(sentence) {
    let result = [];
    // Identify the words based on spaces
let words = sentence.split(" ");
for (let i = 0; i < words.length; i++) {
 let letters = words[i].split("") // ex: "The" ["T", "h","e"]
 letters.reverse(); // ex: ["e", "h", "T"]
 let reverseWord = letters.join("");
 result.push(reverseWord); // adds the given value to the end of the array
    }

 return result.join(" ");

}

console.log(reverseWords(sentence));

// Exercise 4  (can be) String .split (can be) Arrays .join

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function parseCSV(csvString) {
const lines = csvData.split("\n");
console.log(lines);


const headers = lines[0].split(",");
console.log(headers);
const resultArray = [];
for (let i = 1; i< lines.length; i++) {
    const data = lines[i].split(",");
    console.log(data);
    const temObj = {
        name: data[0],
        age: [1]
    }
     resultArray.push(tempObj);
}
console.log(resultArray);
return resultArray;
}

console.log(parseCSV(csvData));













