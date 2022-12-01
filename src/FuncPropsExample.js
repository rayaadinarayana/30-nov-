import PropsExample from "./PropsExample";

function FuncPropsExample(Props){
    console.log(Props)
    return(
        <div>
            <p>{Props.framework}</p>
            <p>{Props.number}</p>
        </div>
    )
}
export default FuncPropsExample