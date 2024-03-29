import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredBook } from "../../Utility/localstorage";
import ListedBook from "./ListedBook";
import { RiArrowDropDownLine } from "react-icons/ri";



const ListedBooks = () => {
    const books = useLoaderData();

    const [appliedBooks, setAppliedBooks] = useState([]);
    const [displayBooks, setDisplayBooks] = useState([]);

    const handleBooksFilter = filter => {
        if (filter === 'rating') {
            setDisplayBooks(appliedBooks);
        }
        else if (filter === 'totalPages') {
            const pageBooks = appliedBooks.filter(book => book.totalPages === 'totalPages')
            setDisplayBooks(pageBooks);
        }
        else if (filter === 'publisher') {
            const publisherBooks = appliedBooks.filter(book => book.publisher === 'publisher');
            setDisplayBooks(publisherBooks);
        }
    }

    useEffect(() => {
        const storedBookIds = getStoredBook();
        if (books.length > 0) {

            const booksApplied = books.filter(book => storedBookIds.includes(book.id));


            setAppliedBooks(booksApplied);
            setDisplayBooks(booksApplied);
            // console.log(books, storedBookIds, booksApplied)

        }
    }, [books])
    return (
        <div>
            <div className="mx-auto max-w-[1200px] ">
                <h1 className="text-4xl text-center bg-gray-200 py-6 my-4 rounded-lg font-bold">Books </h1>

                <div className="justify-center text-center ">
                    <details className="dropdown justify-center mx-auto my-4  ">
                        <summary className="m-1 btn text-lg text-bold text-white px-16 bg-[#30e314]">Sort By <RiArrowDropDownLine className="text-4xl"></RiArrowDropDownLine> </summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-200 rounded-box w-52">
                            <li onClick={() => handleBooksFilter('rating')}><a>Rating</a></li>
                            <li onClick={() => handleBooksFilter('totalPages')}><a>Number of pages</a></li>
                            <li onClick={() => handleBooksFilter('publisher')}><a>Publisher year</a></li>
                        </ul>
                    </details>
                </div>

                <Link><button className="font-bold opacity-80 text-lg border  p-2"> Read Books</button></Link>
                <button className="font-bold opacity-80 text-lg border p-2"> Wishlist Books</button>
                <hr />

                <ul>
                    {
                        displayBooks.map(listed => <ListedBook
                            key={listed.id} listed={listed} >
                        </ListedBook>)
                    }
                </ul>





            </div>
        </div>
    );
};

export default ListedBooks;