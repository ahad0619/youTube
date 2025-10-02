import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { TfiAlignJustify, ImYoutube2, FaUserCircle, IoIosNotificationsOutline, CiSearch, FaMicrophone } from '../utils/icons'
import { useEffect, useState } from 'react'
import useFetchSearchApi from '../../hooks/useFetchSearchApi'
import { cacheResults } from '../utils/searchSlice'
import { Link } from 'react-router-dom'


const Header = () => {
    const [inputText, setInputText] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestion, setShowSuggestion] = useState(false)
    const dispatch = useDispatch()
    const cacheData = useSelector(store => store.search)

    const handleToggleMenu = () => {
        dispatch(toggleMenu())
    }


    useEffect(() => {
        if (!inputText) {
            setSuggestions([]);
            return;
        }
        const timer = setTimeout(() => {
            if (cacheData[inputText]) {
                setSuggestions(cacheData[inputText]);
            } else {
                const fetchApiData = async () => {
                    const data = await useFetchSearchApi(inputText);
                    setSuggestions(data[1]);
                    dispatch(cacheResults({ [inputText]: data[1] }));
                };
                fetchApiData();
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [inputText]);

    useEffect(() => {
        const handleScroll = () => {
            setShowSuggestion(false)
        }
        window.addEventListener("scroll", handleScroll)
    })

    return (
        <>
            <div
                className="grid grid-cols-3 items-center px-4 py-1 ">
                <div
                    className="m-3 flex gap-6 ">
                    <TfiAlignJustify
                        className="text-3xl hover:bg-gray-200 cursor-pointer w-14 rounded-4xl"
                        onClick={handleToggleMenu} />
                       
                    <Link to="/">  <ImYoutube2
                        className="text-7xl text-red-600 -mt-5" /></Link>
                   
                </div>
                <div className='flex relative'>
                    <div
                        className="flex">
                        <input
                            className="border border-gray-300 h-10 w-96 rounded-l-3xl p-2 "
                            placeholder="Search"
                            type="text"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            onFocus={() =>
                                setShowSuggestion(true)
                            }
                            onBlur={() => setTimeout(() => setShowSuggestion(false), 100)}
                        />
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
                </div>
                {showSuggestion && <div className='absolute top-16 w-89 left-96 ml-36 bg-white pt-2 rounded-xl'>


                    {suggestions.map(
                        (suggestion) => <li key={suggestion}
                            className='flex gap-2 items-center pl-1 pb-1'>
                            <CiSearch />{suggestion}
                        </li>)}

                </div>}

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
