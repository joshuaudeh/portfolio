import styles from "./Main.module.css";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
function Main() {
  return (
    <main>
      <div className={styles.main} id="Home">
        <div className={styles.main__Content}>
          <h1>Joshua Udeh</h1>
          <p>Front End Developer</p>
          <div className={styles.main__Icons}>
            {/* <LinkedInIcon className={styles.main__Icon} /> */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
