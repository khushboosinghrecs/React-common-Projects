//book store add book, boooktitle,
//read, unread, editTitle, deleteBook

import { useEffect, useState } from "react";

export const Book = () => {
    const [book, setBook] = useState([]);
    const [inputVal, setInputVal] = useState("");

    const addBook = (e) => {
        e.preventDefault();
        let allBooks = [...book];
        const bookObj = { status: false, value: inputVal }
        allBooks.push(bookObj);
        setBook(allBooks);
        setInputVal("");
        console.log(allBooks, book, 'jjjjjjj');
    };
    const deleteBook = (bookName, i) => {
        console.log(i, book, 'bvoooooook');
        let deletedBook = book.filter((bookName, index) => index != i);
        setBook(deletedBook);
    };
    const checkBookStatus = (bookNames, i) => {
        // let deletedBook = book.map((bookName, index) => { if (index == i)  {status: !bookName.status , value: bookName.value} 
       console.log(book, 'statusssssssss');
        let changedBookStatus = book.map((bookName, index) => {
            let obj = { status: bookName.status, value: bookName.value }
            if (index == i) {
                obj.status = !bookName.status;
                obj.value = bookName.value
            }

            return obj})
            console.log(changedBookStatus, 'statusssssssss222222');
setBook(changedBookStatus)
        };
        return (
            <div className="book">
                <form onSubmit={(e) => addBook(e)}>
                    <input type="text" onChange={(e) => setInputVal(e.target.value)} />
                    <button>Add Book</button>
                </form>
                {book && book.length > 0 && (
                    <div>
                        {book.map((bookName, i) => (
                            < div key={i}>
                                <p onClick={()=>checkBookStatus(bookName, i)}>{bookName.value}</p>
                                {bookName.status ? <button>read</button> : <button> unread </button>}

                                <button onClick={() => deleteBook(bookName, i)}>
                                    delete Book
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    };
