import { useState } from "react"
import CalendarBox from "./CalendarBox"


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
                                        <CalendarBox habit={habits[i]} performed={cell} performHabit={performHabit} date={dates[j + 1]}/>
                                    </td>
                                ))}
                            </>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }

    const performHabit = (habit, date) => {
        //perform UPDATE here
        console.log(`habit updated for ${habit.name} on ${date}`)
    }

    return buildCalendarTable()
}

export default HabitCalendar