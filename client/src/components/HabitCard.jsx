
const HabitCard = (props) => {
    const habit = props.habit
    
    return (
        <>
            <h1>{habit.name}</h1>
            <h3>{habit.category}</h3>
            <h3>At least every {habit.frequency} day(s)</h3>
            {/* <h3>Last done: {habit.history[0]}</h3> */}
            <br/>
        </>
    )
}

export default HabitCard