//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import TopRow from "./TopRow"
import Buttons from "./Buttons"

function App() {
  //TODO: STEP 2 - Establish your applictation's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [home_count, setHomeCount] = useState(3); 
  const [away_count, setAwayCount] = useState(7); 

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow counts = {{homeCount: home_count, awayCount: away_count}} />
        <BottomRow />
      </section>
      <Buttons counts = {{homeCount: home_count, awayCount: away_count, homeCounter: setHomeCount, awayCounter: setAwayCount}}/>
    </div>
  );
}

export default App;
