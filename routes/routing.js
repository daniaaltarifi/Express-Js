const express=require('express')


const router=express.Router();
let books = [{
    name: 'Anna',
    books: 'Harry Potter',
    age: 21,
    id:1
}, {
    name: 'Bob',
    books: 'Romeo and Juliet',
    age: 26,
    id:2
}, {
    name: 'Alice',
    books: 'The Shining',
    age: 18,
    id:3
}];

router.get('/books',(req,res)=>{
    try {
    res.send(books)
    }
     catch (error) {
        res.status(404).send( "404 NOT FOUND")
    }

})

router.post("/books/create", (req, res) => {
    let index;
    for ( index = 3; index < books.length; index++) {
        
        
    }
    index++
    const message = req.body; // get the message from the req.body
    const newBook = {
      message: message,
       // generate an id for the new book
    };
    books.push(newBook); // push the new book to the books array
    router.get('/books/create',(req,res)=>{
        res.send(newBook); 
        
    })
    res.status(201).json(books);
  });
  router.delete('/books/:id/delete',(req,res)=>{
let id=req.params.id;
const newBooks=books.find((books)=>{
   books.id==id
       
})
res.send(books.splice(newBooks,1))
res.status(200).json(books)
})

router.patch('/books/:id/edit', (req, res) => {
    let id = req.params.id;
    let changes = req.body;
    const editBook = books.find((book) => book.id == id);
    if (editBook) {
      for (let key in changes) {
        editBook[key] = changes[key];
      }
      res.send(editBook);
    } else {
      res.status(404).send('Book not found');
    }
  });
  
module.exports=router