class Book {
    constructor(title, author, ISBN, numCopies) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    }

    getAvailability() {
        if (this.numCopies === 0) {
            return 'Out of stock';
        } else if (this.numCopies < 10) {
            return 'Low stock';
        } else {
            return 'In stock';
        }
    }

    sell(quantity=1) {
        this.numCopies -= quantity;
    }

    restock(quantity=4) {
        this.numCopies += quantity;
    }
}


class TechnicalBook extends Book {
    constructor(title, author, ISBN, numCopies, edition) {
        super(title, author, ISBN, numCopies);
        this.edition = edition;
    }

    getEdition() {
        return `${this.title} ${this.edition}`;
    }
}


const PythonCrashCourse = new TechnicalBook(
    'Python Crash Course', 'Eric Matthes', 1593279280, 4, 'Special Edition');

console.log(PythonCrashCourse.getAvailability());
PythonCrashCourse.restock(8);
console.log(PythonCrashCourse.getAvailability());
PythonCrashCourse.sell(12);
console.log(PythonCrashCourse.getAvailability());
console.log(PythonCrashCourse.getEdition());
