import styles from "./minecraft-button.module.css"

function MinecraftButton(data: { onClick: () => void, label: string }) {
    return <button className={styles.minecraftButton} onClick={data.onClick}>
        {data.label}
    </button>
}

export default MinecraftButton