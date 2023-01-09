const statistics =() => {
    const {good_counter, neutral_counter,bad_counter} = props
    const all = () => good+neutral+bad
    const average = () => (good-bad)/ all()
    const positive = () => (good/all()) * 100
    return (
        <>
        <h2>statistics</h2>
        <p>good: {good_counter}</p>
        <p>neutral: {neutral_counter}</p>
        <p>bad: {bad_counter}</p>
        <p>all: {allCount()}</p>
        </>
    )
}
export default statistics