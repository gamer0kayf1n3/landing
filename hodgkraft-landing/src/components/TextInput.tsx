import '../App.css'
function TextInput({allowEdit, text}: {allowEdit: boolean, text: string}) {
    return (
        <input type="text" value={text} disabled={!allowEdit} />
    )
}
export default TextInput
