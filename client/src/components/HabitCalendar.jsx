import { useState } from "react"


const HabitCalendar = (props) => {
    const habits = props.habits
    const CALENDARLENGTH = 14
    let dates = [""]
    
    const buildCalendarBody = () => {
        let calendarBody = []

        for (let i = 0; i <= CALENDARLENGTH; i++) {
            const nextDate = new Date()
            nextDate.setDate(new Date().getDate() - CALENDARLENGTH + i)
            dates.push(nextDate.toLocaleDateString())
        }

        for (let i = 0; i < habits.length; i++) {
            const habitRow = []
            const habit = habits[i]

            for (let j = 0; j <= CALENDARLENGTH; j++) {
                let date = dates[j]
                habitRow.push(habit.history.includes(date))
            }

            calendarBody.push(habitRow)
        }
        
        return calendarBody
    }

    const [calendar, setCalendar] = useState(buildCalendarBody())

    const buildCalendarTable = () => {
        return (
            <table>
                <thead>
                    <tr>
                    {dates.map((date, i) => (
                        <th key={i} style={{writingMode: "vertical-rl"}}>{date}</th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                    {calendar.map((row, i) => (
                        <tr key={i}>
                            <>
                                <td>{habits[i].name}</td>
                                {row.map((cell, j) => (
                                    <td key={j}>
                                        <input 
                                            type="radio" 
                                            value={habits[i].name} 
                                            onChange={() => performHabit(habits[i], i, j, dates[j + 1])}
                                            checked={calendar[i][j]}
                                        />
                                    </td>
                                    // <td key={j} onClick={() => performHabit(habits[i], i, j, dates[j + 1])}>{calendar[i][j] ? 'X' : 'O'}</td>
                                ))}
                            </>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }

    const performHabit = (habit, habitIdx, dateIdx, date) => {
        if (habit.history.includes(date)) {
            habit.history = habit.history.filter(d => d !== date)
        } else {
            habit.history.push(date)
            habit.history = habit.history.sort((a, b) => a - b)
        }

        habits[habitIdx] = habit
        calendar[habitIdx][dateIdx] = !calendar[habitIdx][dateIdx]
        setCalendar(calendar)
    }

    return buildCalendarTable()
}

export default HabitCalendar