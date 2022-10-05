import logo from "../../assets/logo.png"
import './header.css'

export default function Header() {
    return(
        <div className="header">
            <div className="main_header">
                <div className="left_header">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className="right_header">
                    <p>Login / Register</p>
                </div>
            </div>
        </div>
    )
}