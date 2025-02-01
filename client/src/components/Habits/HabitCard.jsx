import { useState } from "react"

const HabitCard = (props) => {
    const habit = props.habit

    const [editHabit, setEditHabit] = useState(null)
    const handleUpdate = (value, field) => {
        console.log(value, field)
        switch (field) {
            case "name":
                habit.name = value
                break;
            default:
                break;
        }

        setEditHabit(null)
    }
    
    return (
        <>
            {editHabit === 'name' ? (
                <form>
                    <input onSubmit={(e) => handleUpdate(e.target.value, "name")}/>
                </form>
            ) : (
                <h1 onClick={() => setEditHabit("name")}>{habit.name}</h1>
            )}
            <h3>{habit.category}</h3>
            <h3>At least every {habit.frequency} day(s)</h3>
            {/* <h3>Last done: {habit.history[0]}</h3> */}
            <br/>
        </>
    )
}

export default HabitCard