import React from 'react';
import '../../styles/about.css';
import { SiHtml5, SiCss3, SiBootstrap, SiSass, SiJavascript, SiReact, SiPython, SiFlask, SiSqlalchemy, SiFirebase, SiVite, SiGit, SiGithub } from "react-icons/si";
import { Link } from "react-router-dom";
import Resume from "../../img/Resume.pdf"

const iconComponents = {
    Html: <SiHtml5 />,
    Css: <SiCss3 />,
    Bootstrap: <SiBootstrap />,
    Sass: <SiSass />,
    Javascript: <SiJavascript />,
    React: <SiReact />,
    Python: <SiPython />,
    Flask: <SiFlask />,
    SqlAlchemy: <SiSqlalchemy />,
    Firebase: <SiFirebase />,
    Vite: <SiVite />,
    Git: <SiGit />,
    Github: <SiGithub />
}

const getTecnologiesIcon = (tecn) => {
    return iconComponents[tecn];
}

const tecn = ['Html', 'Css', 'Bootstrap', 'Sass', 'Javascript', 'React', 'Python', 'Flask', 'SqlAlchemy', 'Firebase', 'Vite', 'Git', 'Github'];

export const Info = () => {
    return (
        <>
            <div className='own-container'>
                <h1 className='text-center'>ABOUT ME</h1>
                <p>
                    Hi! I'm Sebastian Fretes, a Web Developer based in Asunción, Paraguay. I enjoy programming interesting, functional, and efficient software using current technologies. My passion for technology led me to obtain a Full-Stack development certification, where I acquired, practiced, and improved my skills in both Frontend and Backend technologies. Feel free to view some of my showcased projects and their code. Additionally, you can take a look at my <Link to={Resume} target="_blank">Resume</Link> or reach out to me via email. I am a native Spanish speaker, but I also communicate in English and Portuguese.</p>
                <div>
                    <h1 className="text-center">MY TECH STACK</h1>
                    <div className="tech-stack">
                        {tecn.map((tech, index) => (
                            <div key={index} className="tech-item" title={tech}>
                                {getTecnologiesIcon(tech)}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}