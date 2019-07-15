import React from "react";
import "./App.css";

const TopRow = (countObj) => {
    return (
        <section className="buttons">
            <div className="homeButtons">
            {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
            <button onClick={() => countObj.counts.homeCounter(countObj.counts.homeCount + 7)} className="homeButtons__touchdown">Home Touchdown</button>
            <button onClick={() => countObj.counts.homeCounter(countObj.counts.homeCount + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
            </div>
            <div className="awayButtons">
            <button onClick={() => countObj.counts.awayCounter(countObj.counts.awayCount + 7)} className="awayButtons__touchdown">Away Touchdown</button>
            <button onClick={() => countObj.counts.awayCounter(countObj.counts.awayCount + 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
            </div>
        </section>
    )
}

export default TopRow;