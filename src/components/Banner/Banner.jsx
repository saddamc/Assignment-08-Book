

const Banner = () => {
    return (
        <div className="flex max-w-[1200px] mx-auto gap-8 justify-evenly my-12 bg-gray-200 rounded-lg py-24 mb-[100px]">
            <div className="justify-center text-left">
                <h2 className="text-left text-6xl font-bold my-5 mb-12"> Books to freshen up <br /> your bookshelf</h2>
                <button className="py-2 px-4 bg-[#23BE0A] rounded-lg text-xl font-bold text-white ">View The List</button>
            </div>
            <div>
                <img className="w-[318px] h-[394px] " src="https://i.ibb.co/0rQn9tr/1-The-Great-Gatsby.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;