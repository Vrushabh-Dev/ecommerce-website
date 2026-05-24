import { FaShoppingCart, FaSearch } from "react-icons/fa"

const Navbar = () => {

    return(

        <>

            <div className="bg-gray-900 text-white px-8 py-5 sticky top-0 z-50 shadow-lg">

                <div className="max-w-7xl mx-auto flex justify-between items-center gap-6">

                    {/* LOGO */}

                    <h1 className="text-3xl font-bold cursor-pointer select-none">

                        Shop<span className="text-orange-500">Easy</span>

                    </h1>

                    {/* SEARCH BAR */}

                    <div className="hidden md:flex flex-1 max-w-xl">

                        <input
                            type="text"
                            placeholder="Search Products..."
                            className="w-full px-5 py-2 rounded-l-xl text-black bg-white outline-none border-2 border-transparent focus:border-orange-500"
                        />

                        <button
                            className="bg-orange-500 px-5 rounded-r-xl hover:bg-orange-600 transition duration-300 flex items-center justify-center"
                        >

                            <FaSearch size={18} />

                        </button>

                    </div>

                    {/* NAV LINKS */}

                    <ul className="hidden lg:flex gap-8 text-lg font-medium">

                        <li className="cursor-pointer hover:text-orange-500 transition duration-300 hover:underline underline-offset-8 decoration-2">

                            Home

                        </li>

                        <li className="cursor-pointer hover:text-orange-500 transition duration-300 hover:underline underline-offset-8 decoration-2">

                            Products

                        </li>

                        <li className="cursor-pointer hover:text-orange-500 transition duration-300 hover:underline underline-offset-8 decoration-2">

                            About

                        </li>

                        <li className="cursor-pointer hover:text-orange-500 transition duration-300 hover:underline underline-offset-8 decoration-2">

                            Contact

                        </li>

                    </ul>

                    {/* CART */}

                    <div className="relative cursor-pointer hover:text-orange-500 transition duration-300">

                        <FaShoppingCart size={28} />

                        <span className="absolute -top-3 -right-3 bg-red-500 text-sm w-6 h-6 rounded-full flex items-center justify-center">

                            0

                        </span>

                    </div>

                </div>

            </div>

        </>

    )

}

export default Navbar