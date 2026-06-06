import { motion, AnimatePresence } from 'motion/react'
import styles from './toast.module.css'

function Toast({ message, show }: { message: string, show: boolean }) {
    return <AnimatePresence>
        {show && <motion.div
            className={styles.toast}
            style={{ left: '50%', x: '-50%' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
        >
            {message}
        </motion.div>}
    </AnimatePresence>
}

export default Toast