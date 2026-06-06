import styles from "./minecraft-input.module.css"

function MinecraftInput(input: { defaultText: string; disabled?: boolean }) {
    return <input className={styles.minecraftInput} type="text" value={input.defaultText} disabled={input.disabled} />
}

export default MinecraftInput