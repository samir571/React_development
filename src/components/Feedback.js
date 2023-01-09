import { useState } from "react"
import statistics
const Feedback = () => {
    const [good_counter, setGood] = useState(0)
    const [neutral_counter, setNeutral] = useState(0)
    const [bad_counter, setBad] = useState(0)
    const [all_counter, setAll] = useState(0)
    const goodCount=() => {
        setGood(good_counter+1)
    }

    const neutralCount=() => {
        setNeutral(neutral_counter+1)
        allCount
    }

    const badCount=() => {
        setBad(bad_counter+1)
    }
    const allCount=() => {
        setAll(all_counter+good_counter+bad_counter+neutral_counter)
        return all_counter

    }
    return (
        <div>
              <h2> give feedback</h2>
        <button onClick={goodCount}>good</button>
        <button onClick={neutralCount}>neutral</button>
        <button onClick={badCount}>bad</button>
        <statistics good={goodCount}
        </div>

    )
}

export default Feedback