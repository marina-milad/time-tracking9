import "./multiplediv.css"
import Sigment from "../sigment/sigment"
import Workimg from "../../assets/icon-work.svg"
import Playimg from "../../assets/icon-play.svg"
import  Studyimg from "../../assets/icon-study.svg"
import Exerciseimg from "../../assets/icon-exercise.svg"
import Socialimg from "../../assets/icon-social.svg"
import Selfcareimg from "../../assets/icon-self-care.svg"
import { useEffect, useState } from "react"
function  multiplediv  (){
const [arrayofobject,setarrayofobject]=useState ([{"uniqueid":1,
    "Sigmentname":"work",
    "sigmenthead": "32hrs",
    "sigmentlabel":"last week-36hrs",
    "sigmentimg":Workimg,
    "sigmentcolor":" hsl(15, 100%, 70%)"},
    {"uniqueid": 2,
    "Sigmentname":"play",
    "sigmenthead": "10hrs",
    "sigmentlabel":"last week-8hrs",
    "sigmentimg":Playimg,
    "sigmentcolor":"hsl(195, 74%, 62%)"},
    {"uniqueid":3,
    "Sigmentname":"study",
    "sigmenthead": "4hrs",
    "sigmentlabel":"last week-7hrs",
    "sigmentimg":Studyimg,
    "sigmentcolor":" hsl(348, 100%, 68%)"},
    {"uniqueid":4,
    "Sigmentname":"Exercise",
        "sigmenthead": "4hrs",
        "sigmentlabel":"last week-5hrs",
        "sigmentimg": Exerciseimg,
        "sigmentcolor":" hsl(145, 58%, 55%)"},
        {"uniqueid":5,
            "Sigmentname":"Social",
    "sigmenthead": "5hrs",
    "sigmentlabel":"last week-10hrs",
    "sigmentimg":Socialimg,
    "sigmentcolor":"  hsl(264, 64%, 52%)"
        },
        {"uniqueid":6,
    "Sigmentname":"Self Care",
    "sigmenthead": "2hrs",
    "sigmentlabel":"last week-2hrs",
    "sigmentimg":Selfcareimg,
    "sigmentcolor":"hsl(43, 84%, 65%)"
        }]);
    return (
        <div id="multible">
        {arrayofobject.map((item) => {
            return(
                <Sigment 
                key = {item.uniqueid}
                Sigmentname ={item.Sigmentname}
                sigmenthead ={item.sigmenthead}
                sigmentlabel={item.sigmentlabel}
                sigmentimg={item.sigmentimg}
                sigmentcolor ={item.sigmentcolor}
                >
                </Sigment>
            )
        })}
        
        </div>
    )
}
export default multiplediv