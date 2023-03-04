import { useEffect } from "react";
// import { typeWriter } from "../functions/typewriter";
import "../css/AboutMe.css";
import Jhan from "../img/jhan.png";

export const AboutMe = () => {

    useEffect(() => {
        // typeWriter('presentation', 'Hola me llamo Jhan Carlos')
    }, [])

    return (
        <section id="about">
            {/* <h1 className="titles">About me</h1> */}

            <div className="container-about-me">
                <div className="about-me">
                    <div className="about-me-text">
                        {/* <p className="typewriter" id="presentation"></p> */}
                        <h1>I am a web developer!</h1>
                        <p>I am passionate about technology, I consider myself a highly qualified and experienced web developer. I pride myself on being an efficient person who is committed to every project I undertake, always looking for solutions that are perfectly tailored to the specific needs of my clients. The most important thing for me when I work is to establish clear and effective communication with my clients. I believe that communication is essential to fully understand the needs of each project and ensure that the end result meets all expectations.</p>
                    </div>
                    <div className="about-me-img">
                        <img src={Jhan} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}