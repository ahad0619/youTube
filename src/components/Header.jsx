import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import {
    TfiAlignJustify,
    ImYoutube2,
    FaUserCircle,
    IoIosNotificationsOutline,
    CiSearch,
    FaMicrophone
} from '../utils/icons'

const Header = () => {
    const dispatch = useDispatch()
    const handleToggleMenu = () => {
        dispatch(toggleMenu())
    }
    return (
        <>
            <div
                className="grid grid-cols-3 items-center px-4 py-1 ">
                <div
                    className="m-3 flex gap-6 ">
                    <TfiAlignJustify
                        className="text-3xl hover:bg-gray-200 cursor-pointer w-14 rounded-4xl"
                        onClick={handleToggleMenu} />
                    <ImYoutube2
                        className="text-7xl text-red-600 -mt-5" />
                </div>
                <div
                    className="flex">
                    <input
                        className="border border-gray-300 h-10 w-96 rounded-l-3xl p-2 "
                        placeholder="Search"
                        type="text" />
                    <button
                        className="border border-gray-300 h-10 w-16 rounded-r-3xl bg-gray-100 cursor-pointer hover:bg-gray-200">
                        <CiSearch
                            className="text-xl ml-5" />
                    </button>
                    <button
                        className="rounded-full ml-6 bg-gray-100 w-10 cursor-pointer hover:bg-gray-200">
                        <FaMicrophone
                            className="text-xl m-auto" />
                    </button>
                </div>
                <div
                    className="flex gap-5 justify-end pr-4">
                    <IoIosNotificationsOutline
                        className="text-3xl " />
                    <FaUserCircle
                        className="text-3xl" />
                </div>
            </div>
        </>

    )
}

export default Header
