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
// Exercise 3 Section for (let i = 0; i < nums.length; i++) {} 

let sentence = "This quick brown fox jumps over the lazy dog";
