import styles from "./Projects.module.css";
import Project from "./Project";
import Movie from "./Movie";
import Amazon from "./Amazon";
import { huluImage, movieImage, amazonImage } from "./images";
function Projects() {
  return (
    <section>
      <div className={styles.projects} id="projects">
        <h2>Projects</h2>
        <div className={styles.project}>
          <Project
            name="Hulu clone"
            image={huluImage}
            link="https://joshuahulu.netlify.app/"
          />
          <Movie
            name="Movie App"
            image={movieImage}
            link="https://joshuamovie.netlify.app/"
          />
          <Amazon
            name="Amazon clone"
            image={amazonImage}
            link="https://silly-crepe-bcc990.netlify.app/"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
