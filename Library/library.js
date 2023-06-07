const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Library');

// creating the schema-----
const library = mongoose.Schema({
bname:String,
bauthor:String,
publisher:String,
publishedYear:Number,
price:Number,
category:String,
latestEdition:String
});

// creating the model--------
const Library = mongoose.model('books', library);

// Insert function for add book-----

const insertBook = async () =>{
    const book = new Library({
        bname: ' Introduction to Algorithms',
        bauthor: 'Thomas H. Cormen, Charles E. Leiserson',
        publisher: 'The MIT Press',
        publishedYear: 2007,
        price: 1000,
        category: 'Algorithms',
        latestEdition: 'Third',
    }) 
    let result = await book.save();
    console.log(result)
}
//  insertBook();

// Update function for books------
const updateBook = async () =>{
    const book = await Library.updateOne(
        {category:'Algorithms'},
        {$set:{latestEdition:'Fourth'}}
        
    ) 
    console.log(book);
    console.log('updated');
}
// updateBook();

// Delet function for books----------

const deleteBook = async () =>{
    const book = await Library.deleteOne(
        {category:'Algorithms'}
    )
    console.log(book);
    console.log('deleted')
}
// deleteBook();

// Find the book data---------

const findBook = async () =>{
    const book = await Library.findOne(
        {category:'Programming'}
    )
    console.log(book)
}
// findBook();

// Find All books----------

const findAllBooks = async () =>{
    const book = await Library.find()
    console.log(book)
}
// findAllBooks();