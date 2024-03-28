import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('Books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div className="mx-auto max-w-[1200px]">
            <div className="text-center">
                <h2 className="text-[40px] font-bold my-6">Books </h2>
            </div>
            <div className="grid grid-cols-3 gap-6 ">
                {
                    books.map(book => <Book key={book.id} book={book} ></Book>)
                }
            </div>

        </div>
    );
};

export default Books;