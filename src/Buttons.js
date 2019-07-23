import React from "react";
import "./App.css";

const TopRow = (countObj) => {
    function incrementTeam(team, amount){
        countObj.counts[team + 'Counter'](countObj.counts[team + 'Count'] + amount)
    }
    return (
        <section className="buttons">
            <div className="homeButtons">
            {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
            <button onClick={() => incrementTeam('home', 7)} className="homeButtons__touchdown">Home Touchdown</button>
            <button onClick={() => incrementTeam('home', 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
            </div>
            <div className="awayButtons">
            <button onClick={() => incrementTeam('away', 7)} className="awayButtons__touchdown">Away Touchdown</button>
            <button onClick={() => incrementTeam('away', 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
            </div>
        </section>
    )
}

export default TopRow;