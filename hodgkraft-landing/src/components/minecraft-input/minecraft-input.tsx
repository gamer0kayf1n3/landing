import styles from "./minecraft-input.module.css"

function MinecraftInput({ defaultText, disabled, ref }: { 
    defaultText: string
    disabled?: boolean
    ref?: React.Ref<HTMLInputElement>
}) {
    return <input 
        ref={ref}
        className={styles.minecraftInput} 
        type="text" 
        value={defaultText} 
        disabled={disabled} 
    />
}

export default MinecraftInput