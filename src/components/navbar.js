import React, {useState} from 'react';
import {Button} from "./button";
import {Link} from "react-router-dom";
import "./navbar.css";
import Dropdown from "./dropdown";

function Navbar() {
    const [click,setClick] = useState(false);

    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    }

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    }

    const extendElement = () => {
        dropdown ? setDropdown(false) : setDropdown(true);
      }

    return (
			<>
				<nav className="navbar">
					<Link to="/" className="navbar-logo">
						Kronicles
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? "fas fa-times" : "fas fa-bars"} />
					</div>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="nav-item">
							<Link to="/" className="nav-links" onClick={closeMobileMenu}>
								Home
							</Link>
						</li>
						<li
							className="nav-item"
							onMouseEnter={onMouseEnter}
							onMouseLeave={onMouseLeave}
							onClick={extendElement}
						>
							<Link
								to="/services"
								className="nav-links"
								// onClick={closeMobileMenu}
							>
								Services <i className="fas fa-caret-down" />
							</Link>
							{dropdown && <Dropdown onCloseMobileMenu={closeMobileMenu}/>}
						</li>
                        <li className="nav-item">
							<Link
								to="/products"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Products
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/contact-us"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Contact Us
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/signup"
								className="nav-links-mobile"
								onClick={closeMobileMenu}
							>
								Sign Up
							</Link>
						</li>
					</ul>
					<Button />
				</nav>
			</>
		);
}

export default Navbar
   

