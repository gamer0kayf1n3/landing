import styles from './tag-list.module.css'

function TagList({ children }: { children: React.ReactNode }) {
    return <div className={styles.tagList}>
        {children}
    </div>
}

export default TagList