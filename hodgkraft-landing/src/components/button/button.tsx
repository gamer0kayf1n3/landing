import styles from "./button.module.css"

function Button({icon, text, fn, bg}: {icon: string, text: string, fn: () => void, bg: string}) {
    return (
        <button className={styles.btn} onClick={fn} style={{
            backgroundColor: bg
        }}>
            <div className="icon">
                <img src={icon} alt={`${text} icon`} />
            </div>
            <span>{text}</span>
        </button>
    )
}
export default Button