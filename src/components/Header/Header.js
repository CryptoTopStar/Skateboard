import logo from "../../assets/logo.png"
import './header.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return(
        <div className="header">
            <div className="main_header">
                <div className="left_header">
                    <div className="logo">
                        <Link to='/' ><img src={logo} alt="" /></Link>
                    </div>
                </div>
                <div className="right_header">
                    <p><Link to='/login' >Login / Register</Link></p>
                </div>
            </div>
        </div>
    )
}