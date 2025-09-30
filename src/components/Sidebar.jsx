import { useSelector } from "react-redux"
import SideSubSection from "./SideSubSection"
import { Link } from "react-router-dom"

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
    if (!isMenuOpen) return null
    return (
        <div className=" w-48 ml-6">
            <ul className="mb-3 ">
                <Link to="/"><li>Home</li></Link>
                <li>Shorts</li>
                <li>Videos</li>
                <li>Live</li>
            </ul>
            <hr />
            <SideSubSection />
        </div>
    )
}

export default Sidebar
