import { Link, Outlet } from "react-router-dom"
const Header: React.FC = () => {
    return (
        <header>
            header
            <nav>
                <Link to="/main" >main</Link>
                <br />
                <Link to="/sub" >sub</Link>
                <br />
                <a>test</a>
            </nav>
            <Outlet />
        </header>
    )
}
export default Header