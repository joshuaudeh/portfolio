import React from "react";
import styles from "./About.module.css";
function About() {
  return (
    <section>
      <div className={styles.about} id="About">
        <h2>About me</h2>
        <p>
          Hi, I'm Joshua udeh, a frontend developer focused on creating
          beautiful and user friendly application while writing clean code.
        </p>
      </div>
    </section>
  );
}

export default About;
