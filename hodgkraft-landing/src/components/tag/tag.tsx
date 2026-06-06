import styles from './tag.module.css'

function Tag(data: { name: string, icon?: string, backgroundColor?: string }) {
    const customStyle = {
        backgroundColor: data.backgroundColor
    }
    return <div className={styles.tag} style={customStyle}>
        {data.icon && <div className={styles.logoContainer}>
                <img src={data.icon} alt={`${data.name} icon`} className={styles.tagIcon} />
            </div>}
        <span>{data.name}</span>
    </div>
}

export default Tag