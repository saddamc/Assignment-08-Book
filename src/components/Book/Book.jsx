import { CiStar } from "react-icons/ci";

const Book = ({ book }) => {
    const { image, tags, bookName, author, rating, category } = book;
    return (
        <div className="card  border rounded-lg">

            <img className="mx-auto my-4 rounded-xl w-[326px] h-[230px] py-8 px-24 bg-[#F3F3F3]" src={image} alt="" />
            <div className="space-y-2 mx-10 pb-4 ">
                <div className="text-[#23BE0A] font-semibold py-2">
                    <a className="mr-4 p-2 rounded-2xl  bg-slate-200" href="">{tags[0]} </a>
                    <a className="mr-4 p-2 rounded-2xl  bg-slate-200" href="">{tags[1]} </a>
                </div>
                <h1 className="text-2xl font-bold "> {bookName} </h1>
                <h3>By: {author}  </h3>
                <hr className="border-dashed border-[1px]"></hr>
                <div className="space-y-2 flex text-center items-center justify-between ">
                    <p> {category} </p>
                    <p className="flex justify-center text-center items-center"> {rating} <CiStar className="ml-2"></CiStar> </p>
                </div>
            </div>



        </div>
    );
};

export default Book;