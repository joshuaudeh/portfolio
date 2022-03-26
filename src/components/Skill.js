import styles from "./Skill.module.css";

function Skill({ name, image }) {
  return (
    <div className={styles.skill} id="Skill">
      <img src={image} alt="logo" />
      <h4>{name}</h4>
    </div>
  );
}

export default Skill;
