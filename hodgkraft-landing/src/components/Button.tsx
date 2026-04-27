import '../App.css'
function Button({bg, color, title, fn, href}: {bg: string, color: string, title: string, fn?: () => void, href?: string }) {
    const style = {
        backgroundColor: bg,
        color: color,
    }
    if (href) {
        fn = () => window.location.assign(href);
    }
  return (
    <button style={style} onClick={fn}>{title}</button>
  )
}

export default Button
