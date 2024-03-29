import { GrLocation } from "react-icons/gr";
import { BsFillPeopleFill } from "react-icons/bs";
import { TbPageBreak } from "react-icons/tb";
import { SlPeople } from "react-icons/sl";
import PropTypes from 'prop-types';

const ListedBook = ({ listed }) => {
    const { image, bookName, tags, yearOfPublishing } = ListedBook;
    return (
        <div className="flex my-8 border rounded-xl">
            <div className="bg-gray-200 rounded-xl w-[230px] m-5 h-[230px]  ">
                <img className="w-[130px] h-[172px] p-2 mx-auto mt-6  " src={listed.image} alt="" />

            </div>
            <div className="m-5 space-y-2">
                <h2 className="text-2xl font-bold"> {listed.bookName} </h2>
                <p> By : {listed.author} </p>
                <div>

                    <div className="flex  items-center space-x-6">
                        <p className="font-bold"> Tag  </p>
                        <a className="mr-4 p-2 text-[#60d84e] font-semibold py-2 rounded-2xl  bg-slate-100" href="">#{listed.tags[0]} </a>
                        <a className="mr-4 p-2 text-[#60d84e] font-semibold py-2 rounded-2xl  bg-slate-100" href="">#{listed.tags[1]} </a>
                        <div className="flex items-center text-center space-x-2">
                            <GrLocation>  </GrLocation>
                            <p className="opacity-60">Year of Publishing: {listed.yearOfPublishing}</p>
                        </div>
                    </div>

                </div>
                <div className="opacity-60 flex items-center space-x-4">
                    <BsFillPeopleFill></BsFillPeopleFill>
                    <p>Publisher: {listed.publisher} </p>
                    <TbPageBreak></TbPageBreak>
                    <p>Page: {listed.totalPages} </p>
                </div>
                <hr />
                <div className="space-x-3">
                    <button className="px-4 py-3 bg-[#c0cfe0] text-[#328EFF] font-bold text-sm opacity-70 rounded-full ">Category: {listed.category} </button>
                    <button className="px-4 py-3 bg-[#f0e5d5] text-[#FEAC33] font-bold text-sm opacity-70 rounded-full ">Rating: {listed.rating} </button>
                    <button className="px-4 py-3 bg-[#23BE0A] text-white font-bold text-sm opacity-70 rounded-full ">View Details </button>
                </div>

            </div>
        </div>
    );
};

ListedBook.propTypes = {
    listed: PropTypes.object
}

export default ListedBook;