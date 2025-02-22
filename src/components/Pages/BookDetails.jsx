import { useLoaderData, useParams } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { saveBookList } from "../../Utility/localstorage";


const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams()
    const idInt = parseInt(id);
    const book = books.find(book => book.id == id);
    console.log(book);

    const handleApplyRead = () => {
        saveBookList(idInt);
        toast.success('Added successfully in Read list !', {
            position: 'top-center'
        });
    }

    const handleApplyWishlist = () => {
        toast.success('Added successfully in Wish List !', {
            position: 'top-center'
        })
    }


    return (
        <div className="m-16 text-left  flex gap-10 max-w-[1200px] mx-auto">
            <div className="w-1/2 shadow-md bg-gray-200 rounded-lg">
                <img className=" mx-auto  px-12 py-14 text-center items-center w-[425px] h-[564px] " src={book.image} alt="" />

            </div>
            <div className="space-y-3">
                <h1 className="text-4xl font-bold">{book.bookName} </h1>
                <p className="text-lg">By : {book.author} </p>
                <hr />
                <p className="text-lg"> {book.category} </p>
                <hr />
                <p><span className="font-bold">Review : </span>{book.review} </p>
                <div className="text-[#27cc0d] font-semibold py-2">
                    <a className="text-black mr-7 font-bold" href="">Tag</a>
                    <a className="mr-4 p-2 rounded-2xl  bg-slate-200" href="">#{book.tags[0]} </a>
                    <a className="mr-4 p-2 rounded-2xl  bg-slate-200" href="">#{book.tags[1]} </a>
                </div>
                <hr />
                <table className="w-2/4 ">
                    <tr className="h-8 ">
                        <td className=" font-light">Number of Pages: </td>
                        <td>{book.totalPages} </td>
                    </tr>
                    <tr className="h-8 ">
                        <td className="font-light">Publisher:</td>
                        <td>{book.publisher}</td>
                    </tr>
                    <tr className="h-8 ">
                        <td className="font-light">Year of Publishing:</td>
                        <td> {book.yearOfPublishing} </td>
                    </tr>
                    <tr className="h-8 ">
                        <td className="font-light">Rating:</td>
                        <td> {book.rating} </td>
                    </tr>

                </table>
                <div className="flex gap-8 ml-2">
                    <button onClick={handleApplyRead} className="btn font-bold border-2 bg-white px-4">Read</button>
                    <button onClick={handleApplyWishlist} className="btn font-bold bg-[#50B1C9] text-white ">Wishlist</button>
                </div>


            </div>
            <ToastContainer />

        </div>
    );
};

export default BookDetails;