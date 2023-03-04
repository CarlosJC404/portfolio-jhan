import { AboutMe } from "../components/AboutMe";
import { Background } from "../components/Background";
import { FormContact } from "../components/FormContact";
import { NavBar } from "../components/NavBar";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
// import { sizeCanvas } from "../functions/canvas";
// import { typeWriter } from "../functions/typewriter";

export const HomePage = () => {
    return (<>
        <Background/>
        <NavBar/>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <FormContact/>
    </>
    )
}