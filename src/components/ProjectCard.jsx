import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-art">
        <span>{project.category || "Project"}</span>
      </div>

      <div className="project-body">
        <p className="kicker">{project.category}</p>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="tags">
          {(project.tech || []).map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-links">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={17} />
              Live site
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={17} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}