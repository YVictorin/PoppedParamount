import PropTypes from "prop-types";
import  { Gift } from "lucide-react"

import InfoSquare from "./InfoSquare";
import Diamond from "./Diamond";
import ExperienceBar from "./ExperienceBar";


// each user will have different scorecard information
const Scorecard = ({ name, level, pointsToSpend, pointsToLevelUp }) => {
    return (
        <div>
           <div className="flex flex-col items-center translate-y-16">
                <div className=" flex flex-col self-start justify-center items-center ">
                <h1 className="text-white text-6xl font-bold ml-16 mt-12">{name}</h1>
                    <div className="flex gap-2 mt-4 w-[70%] mb-16">
                        <p className="text-white">EDIT</p>
                        <p className="text-white">&#x2022;</p>
                        <p className="text-white">LOGOUT</p>
                    </div>
                </div> 
            </div>

            <div id="scorecard" className="w-[75rem] h-[28vh] ml-10 rounded-xl mt-10" style={{border: "1.5px solid gray"}}>
                <div className="w-full flex justify-between">
                    <h2 className="text-white text-4xl p-4 font-semibold mb-1">Level {level}</h2>
                    <InfoSquare color="gray"/>
                </div>
                    <div className="w-full scale-50 flex translate-x-[-17rem] translate-y-[-2rem]">
                        <div className="flex">
                        <Diamond/>
                        <p className="text-white text-5xl ml-8 mb-8">{pointsToSpend} points to spend</p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <ExperienceBar amount={50}/> 
                    <div className="flex flex-col justify-center items-center relative top-3">
                        <div style={{border: "2px solid "}} className="w-16 h-16 rounded-full flex justify-center items-center "><Gift className="text-gray-500"/></div>
                        <span className="text-gray-500 font-semibold">Lvl {level}</span>
                    </div>
                </div>

                <p className="text-gray-400 mt-3 ml-6">Earn {pointsToLevelUp} more points to level up</p>
            </div>
        </div>
    );
}


Scorecard.PropTypes = {
    name: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    pointsToSpend: PropTypes.number.isRequired,
    pointsToLevelUp: PropTypes.number.isRequired
}

export default Scorecard;
