import "./sigment.css"
import icon from "../../assets/icon-ellipsis.svg"
function sigment (props){

    return (
        <div className="sigment"
        style={{backgroundColor:props.sigmentcolor
        ,backgroundImage:`url(${props.sigmentimg})`
        ,backgroundRepeat:"no-repeat",backgroundPosition:"top right",
        backgroundSize:"50px"}}>
            <div id="minisigment">
            <div id="topdiv">
    <label id="namelabel">{props.Sigmentname} </label>
    <img src={icon}/>
</div>
<h1>{props.sigmenthead} </h1>
<label id="media"> {props.sigmentlabel} </label>
            </div>
        </div>
    )
}
export default sigment