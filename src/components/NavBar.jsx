import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import "../css/NavBar.css";

export const NavBar = () => {

    const [ list, setList ] = useState("nav-list")

    const toggle = () => {
        switch (list) {
            case "nav-list active":
                setList("nav-list")
                break;
            case "nav-list":
                setList("nav-list active")
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setList("nav-list")
        })
    })

    return (
        <header id="home">
            <div className="container container-navbar">
                <nav className="nav">
                    <div className="logo-container">
                        <div className="logo">
                            <h1>Jhan C.</h1>
                        </div>
                        <div className="bars" onClick={toggle}>
                            <FaBars/>
                        </div>
                    </div>
                    <div className={list}>
                        <ul>
                            <li><HashLink to="/portfolio-jhan" className="link">Home</HashLink>
                            </li>
                            <li>
                                <HashLink to="/portfolio-jhan/#about" className="link">About me</HashLink>
                            </li>
                            <li>
                                <HashLink to="/portfolio-jhan/#skills" className="link">Skills</HashLink>
                            </li>
                            <li>
                                <HashLink to="/portfolio-jhan/#projects" className="link">Projects</HashLink>
                            </li>
                            <li>
                                <HashLink to="/portfolio-jhan/#form-contact" className="link">Contact</HashLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}