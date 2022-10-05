import board from "../../assets/board.png"
import wheel from "../../assets/wheel.png"
import truck from "../../assets/truck.png"
import hardware from "../../assets/hardware.png"
import griptape from "../../assets/griptape.png"
import exit from "../../assets/exit.svg"
import consultation from "../../assets/consultation.svg"
import './menubar.css'
import '../action'

export default function MenuBar() {
    return (
        <>
            <div className="menubar">
                <div className="main_menubar">
                    <div className="list">
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                    <ul>
                        <li className="board">
                            <img src={board} alt="" />
                            <p id="id">Boards</p>
                        </li>
                        <li className="wheel">
                            <img src={wheel} alt="" />
                            <p id="id">Wheels</p>
                        </li>
                        <li className="truck">
                            <img src={truck} alt="" />
                            <p id="id">Trucks</p>
                        </li>
                        <li className="hardware">
                            <img src={hardware} alt="" />
                            <p id="id">Hardware</p>
                        </li>
                        <li className="griptape">
                            <img src={griptape} alt="" />
                            <p id="id">Griptape</p>
                        </li>
                    </ul>
                </div>
                <div className="bottom_menubar">
                    <ul>
                        <li>
                            <img src={consultation} alt="" />
                            <p>Consulation</p>
                        </li>
                        <li>
                            <img src={exit} alt="" />
                            <p>Exit</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="hidden_model">
                <div className="title">
                    <p id="board" className="label">Boards</p>
                    <p id="wheel" className="label">Wheels</p>
                    <p id="truck" className="label">Trucks</p>
                    <p id="hardware" className="label">Hardware</p>
                    <p id="griptape" className="label">Griptape</p>
                    <p className="close">X</p>
                </div>
                <div id="card_board" className="content">
                    <div className="models">
                        <div className="card">
                            <img src="" alt="No Board" />
                        </div>
                        <div className="card">
                            <img src="" alt="No Board" />
                        </div>
                    </div>
                    <div className="models">
                        <div className="card">
                            <img src="" alt="No Board" />
                        </div>
                        <div className="card">
                            <img src="" alt="No Board" />
                        </div>
                    </div>
                    <div className="models">
                        <div className="card">
                            <img src="" alt="No Board" />
                        </div>
                        <div className="card">
                            <img src="" alt="No Board" />
                        </div>
                    </div>
                </div>
                <div id="card_wheel" className="content">
                    <div className="models">
                        <div className="card">
                            <img src="" alt="No Wheel" />
                        </div>
                        <div className="card">
                            <img src="" alt="No Wheel" />
                        </div>
                    </div>
                    <div className="models">
                        <div className="card">
                            <img src="" alt="No Wheel" />
                        </div>
                        <div className="card">
                            <img src="" alt="No Wheel" />
                        </div>
                    </div>
                    <div className="models">
                        <div className="card">
                            <img src="" alt="No Wheel" />
                        </div>
                        <div className="card">
                            <img src="" alt="No Wheel" />
                        </div>
                    </div>
                </div>
                <div id="card_truck" className="content">
                    <div className="models">
                        <div className="card">
                            <img src="" alt="No Truck" />
                        </div>
                        <div className="card">
                            <img src="" alt="No Truck" />
                        </div>
                    </div>
                    <div className="models">
                        <div className="card">
                            <img src="" alt="No Truck" />
                        </div>
                        <div className="card">
                            <img src="" alt="No Truck" />
                        </div>
                    </div>
                    <div className="models">
                        <div className="card">
                            <img src="" alt="No Truck" />
                        </div>
                        <div className="card">
                            <img src="" alt="No Truck" />
                        </div>
                    </div>
                </div>
                <div id="card_hardware" className="content">
                    <div className="models">
                        <div className="card">
                            <img src="" alt="No Hardware" />
                        </div>
                        <div className="card">
                            <img src="" alt="No Hardware" />
                        </div>
                    </div>
                    <div className="models">
                        <div className="card">
                            <img src="" alt="No Hardware" />
                        </div>
                        <div className="card">
                            <img src="" alt="No Hardware" />
                        </div>
                    </div>
                    <div className="models">
                        <div className="card">
                            <img src="" alt="No Hardware" />
                        </div>
                        <div className="card">
                            <img src="" alt="No Hardware" />
                        </div>
                    </div>
                </div>
                <div id="card_griptape" className="content">
                    <div className="models">
                        <div className="card">
                            <img src="" alt="No Griptape" />
                        </div>
                        <div className="card">
                            <img src="" alt="No Griptape" />
                        </div>
                    </div>
                    <div className="models">
                        <div className="card">
                            <img src="" alt="No Griptape" />
                        </div>
                        <div className="card">
                            <img src="" alt="No Griptape" />
                        </div>
                    </div>
                    <div className="models">
                        <div className="card">
                            <img src="" alt="No Griptape" />
                        </div>
                        <div className="card">
                            <img src="" alt="No Griptape" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}