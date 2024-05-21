import React from 'react';
import '../../styles/about.css';
import { SiHtml5, SiCss3, SiBootstrap, SiSass, SiJavascript, SiReact, SiPython, SiFlask, SiSqlalchemy, SiFirebase, SiGit, SiGithub } from "react-icons/si";

const iconComponents = {
    Html: <SiHtml5 />,
    Css: <SiCss3 />,
    Bootstrap: <SiBootstrap />,
    Sass: <SiSass />,
    Javascript: <SiJavascript />,
    React: <SiReact />,
    Python: <SiPython />,
    Flask: <SiFlask />,
    Sqlalchemy: <SiSqlalchemy />,
    Firebase: <SiFirebase />,
    Git: <SiGit />,
    Github: <SiGithub />
}

const getTecnologiesIcon = (tecn) => {
    return iconComponents[tecn];
}

const tecn = ['Html', 'Css', 'Bootstrap', 'Sass', 'Javascript', 'React', 'Python', 'Flask', 'Sqlalchemy', 'Firebase', 'Git', 'Github'];

export const Info = () => {
    return (
        <>
            <div className='own-container'>
                <h1 className='text-center'>ABOUT ME</h1>
                <p>I am Sebastián Fretes, a Full-Stack Developer with a degree in Communication Sciences, and experience in communication, marketing, and the tourism sector. My profile uniquely combines technical and communication skills, allowing me to approach projects from multiple perspectives.
                    My passion for technology led me to obtain a Full-Stack development certification, where I learned and practiced Frontend and Backend technologies. Driven by the desire to make a tangible impact, I have developed some web projects applying my technical skills to solve concrete challenges. My experience in customer-facing roles has given me a deep understanding of their needs, enabling me to translate these needs into effective and efficient solutions.
                    In addition to being a native Spanish speaker, I am also proficient in English and Portuguese, which adds value to any team looking for a versatile and well-rounded developer. My communication skills, problem-solving abilities, and entrepreneurial spirit make me an ideal candidate for tackling challenging and rewarding roles in the dynamic and ever-evolving tech landscape.
                </p>
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