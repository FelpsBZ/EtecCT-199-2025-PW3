import styles from './Keyboard.module.css'
function Keyboard({calc}) {
  const buttons = [
    "C", "±", "%", "/",
    "7", "8", "9", "X",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "←", "="
  ];
  
  return (
    <div className={styles.keyboard}>
      <div className={styles.container}>
      {buttons.map((btn, index) => (
        <button key={index} value={btn} onClick={(e) => calc(e.target.value)}>
          {btn}
        </button>
      ))}
      </div>
    </div>
  );
}

export default Keyboard;
