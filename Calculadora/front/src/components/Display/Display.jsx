import styles from './Display.module.css'
function Display({d1,d2}) {
  

  return (
    <>
      <div className={styles.display}>
            <div className={styles.f1}><span>{d1}</span></div>
            <div className={styles.f2}><span>{d2}</span></div>
      </div>
    </>
  );
}

export default Display;
