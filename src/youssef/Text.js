export default function text(props){
    return (
        <>
        <label>{props.inputname} </label>
        <input type="text" name={props.inputlabel} />
        <div>{props.children}</div>
        </>
    )
}