import HtmlSvg from "../img/html.svg";
import CssSvg from "../img/css.svg";
import JavaScriptSvg from "../img/javascript.svg";
import GitHubSvg from "../img/git-hub.svg"
import NodeJsSvg from "../img/node-js.svg";
import MySqlSvg from "../img/mysql.svg";
import ReactSvg from "../img/react.svg";
import PythonSvg from "../img/python.svg";
import NpmSvg from "../img/npm.svg";
import "../css/Skills.css";

export const Skills = () => {
    return (
        <section id="skills">
            <h1 className="titles">Skills</h1>
            <div className="cards-skills">
                <div className="card">
                    <img src={HtmlSvg} alt="" />
                </div>
                <div className="card">
                    <img src={CssSvg} alt="" />
                </div>
                <div className="card">
                    <img src={JavaScriptSvg} alt="" />
                </div>
                <div className="card">
                    <img src={NodeJsSvg} alt="" />
                </div>
                <div className="card">
                    <img src={ReactSvg} alt="" />
                </div>
                <div className="card">
                    <img src={MySqlSvg} alt="" />
                </div>
                <div className="card">
                    <img src={PythonSvg} alt="" />
                </div>
                <div className="card">
                    <img src={GitHubSvg} alt="" />
                </div>
                <div className="card">
                    <img src={NpmSvg} alt="" />
                </div>
            </div>
        </section>
    )
}