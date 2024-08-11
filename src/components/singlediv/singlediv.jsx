import "./singlediv.css"
import Image from "../../assets/image-jeremy.png"

function  singlediv (){

    return (
        <div id="single">
            <div id="datadiv">
<img  id="photo" src={Image} />
<div>
<label id="report">Report for</label>
<h1>Jeremy Robson</h1>
</div>
            </div>
            <div id="extra">
            <label> Daily</label>
            <label>Weekly</label>
            <label> Monthly</label>
            </div>
            
        </div>
    )
}
export default singlediv