import { Mail, ArrowRight } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import SkillCard from "../components/SkillCard";
import ProjectCard from "../components/ProjectCard";

import kopoImage from "../assets/images/kopo-ntheledi-img.jpg";

import { starterProjects } from "../data/projects";

export default function Portfolio() {
    return (
        <>
            <Navbar />

            <main id="top">

                {/* HERO */}
                <section className="hero">
                    <div>
                        <p className="kicker">
                            WEB DEVELOPER • JOHANNESBURG
                        </p>

                        <h1>
                            I build digital experiences that are{" "}
                            <em>useful, polished</em> and easy to use.
                        </h1>

                        <p className="lead">
                            I’m Kopo Ntheledi, a web developer with professional
                            experience across CMS development, frontend interfaces
                            and database-backed web applications.
                        </p>

                        <div className="actions">
                            <a
                                className="btn primary"
                                href="#projects"
                            >
                                View my work
                                <ArrowRight size={18} />
                            </a>

                            <a
                                className="btn"
                                href="#contact"
                            >
                                <Mail size={18} />
                                Contact me
                            </a>
                        </div>
                    </div>

                    <div className="portrait">
                        <img
                            src={kopoImage}
                            alt="Kopo Ntheledi"
                            className="portrait-image"
                        />
                    </div>
                </section>


                {/* ABOUT */}
                <section id="about">
                    <SectionTitle
                        eyebrow="ABOUT"
                        title="Developer with a practical approach."
                    />

                    <div className="two-col">
                        <p className="big-copy">
                            I enjoy turning ideas into responsive websites and web
                            applications that solve real business problems.
                        </p>

                        <p>
                            My background includes content and web development work
                            at R-E-D, where I worked with Joomla, WordPress,
                            HTML/CSS and later backend and development technologies
                            including PHP, SQL, Python and JavaScript. I also build
                            modern React, Next.js and Supabase applications.
                        </p>
                    </div>
                </section>


                {/* SKILLS */}
                <section id="skills">
                    <SectionTitle
                        eyebrow="SKILLS"
                        title="What I work with"
                    />

                    <div className="grid3">

                        <SkillCard
                            title="Frontend"
                            items={[
                                "React",
                                "Next.js",
                                "JavaScript",
                                "HTML",
                                "CSS",
                                "Tailwind CSS",
                            ]}
                        />

                        <SkillCard
                            title="Backend & Data"
                            items={[
                                "Supabase",
                                "PHP",
                                "SQL",
                                "Python",
                                "REST APIs",
                                "PHPMyAdmin",
                            ]}
                        />

                        <SkillCard
                            title="Tools & CMS"
                            items={[
                                "Git",
                                "GitHub",
                                "Joomla",
                                "WordPress",
                                "Vite",
                                "Netlify",
                            ]}
                        />

                    </div>
                </section>


                {/* EXPERIENCE */}
                <section id="experience">
                    <SectionTitle
                        eyebrow="EXPERIENCE"
                        title="Professional journey"
                    />

                    <article className="experience">
                        <div>
                            <strong>2024 — 2026</strong>
                        </div>

                        <div>
                            <h3>
                                Junior Web Developer · R-E-D
                            </h3>

                            <p>
                                Started in content operations working with Joomla
                                and WordPress, then moved into the development team.
                                Worked across site maintenance, backend development
                                and web technologies including PHP, PHPMyAdmin,
                                SQL, Python and JavaScript.
                            </p>
                        </div>
                    </article>

                    <article className="experience">
                        <div>
                            <strong>2023</strong>
                        </div>

                        <div>
                            <h3>
                                Software Engineering · CodeSpace Academy
                            </h3>

                            <p>
                                Completed JavaScript Engineering / Software
                                Engineering training, building a foundation in
                                modern web development.
                            </p>
                        </div>
                    </article>
                </section>


                {/* PROJECTS */}
                <section id="projects">
                    <SectionTitle
                        eyebrow="SELECTED WORK"
                        title="Projects I’ve built"
                        copy="A selection of websites and web applications I’ve designed and developed."
                    />

                    <div className="projects">
                        {starterProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                            />
                        ))}
                    </div>
                </section>


                {/* CONTACT */}
                <section
                    id="contact"
                    className="contact"
                >
                    <div>
                        <p className="kicker">
                            LET’S CONNECT
                        </p>

                        <h2>
                            Have an opportunity or a project in mind?
                        </h2>

                        <p>
                            I’m open to web development opportunities,
                            collaborations and digital projects.
                        </p>
                    </div>

                    <a
                        className="btn light"
                        href="mailto:kopontheledi@gmail.com"
                    >
                        <Mail size={18} />
                        kopontheledi@gmail.com
                    </a>
                </section>

            </main>

            <Footer />
        </>
    );
}