import styles from "./Skills.module.css";
import {
  htmlLogo,
  cssLogo,
  jsLogo,
  reactLogo,
  gitLogo,
  reduxLogo,
} from "./images";
import Skill from "./Skill";

function Skills() {
  return (
    <section>
      <h2 style={{ textAlign: "center", marginBottom: "10px" }}>Skills</h2>
      <div className={styles.skills}>
        <Skill name="HTML" image={htmlLogo} />
        <Skill name="CSS" image={cssLogo} />
        <Skill name="JAVASCRIPT" image={jsLogo} />
        <Skill name="REACT" image={reactLogo} />
        <Skill name="GIT" image={gitLogo} />
        <Skill name="REDUX" image={reduxLogo} />
      </div>
    </section>
  );
}

export default Skills;
