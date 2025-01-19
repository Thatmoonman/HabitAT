import { useState } from "react"

const CalendarBox = (props) => {
    const habit = props.habit
    const [habitPerformed, setHabitPerformed] = useState(props.performed)

    const handlePerformHabit = (event) => {
        setHabitPerformed(event.target.checked)
        props.performHabit(habit, props.date)
    }

    return (
        <input 
            type="checkbox" 
            value={habit.name} 
            // onChange={() => performHabit(habit, i, j, dates[j + 1])}
            onChange={handlePerformHabit}
            checked={habitPerformed}
        />
    )
}

export default CalendarBox