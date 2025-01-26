import { useState } from "react"
import CalendarBox from "./CalendarBox"


const HabitCalendar = (props) => {
    const habits = props.habits
    const CALENDARSTART = 14
    const CALENDAREND = 7
    let dates = [""]
    
    const buildCalendarBody = () => {
        let calendarBody = []

        for (let i = 0; i <= CALENDARSTART; i++) {
            const nextDate = new Date()
            nextDate.setDate(new Date().getDate() - CALENDARSTART + i)
            dates.push(nextDate.toLocaleDateString())
        }

        for (let j = 1; j <= CALENDAREND; j++) {
            const nextDate = new Date()
            nextDate.setDate(new Date().getDate() + j)
            dates.push(nextDate.toLocaleDateString())
        }

        for (let i = 0; i < habits.length; i++) {
            const habitRow = []
            const habit = habits[i]

            for (let j = 0; j <= CALENDARSTART + CALENDAREND; j++) {
                let date = dates[j]
                habitRow.push(habit.history.includes(date))
            }

            calendarBody.push(habitRow)
        }
        
        return calendarBody
    }

    const [calendar, setCalendar] = useState(buildCalendarBody())
    const [hoveredColumn, setHoveredColumn] = useState(null);
    const [hoveredRow, setHoveredRow] = useState(null);

    const buildCalendarTable = () => {
        const currentDate = new Date().toLocaleDateString();

        return (
            <table className="table-auto border-collapse">
                <thead>
                    <tr>
                    {dates.map((date, i) => (
                        <th key={i} 
                            className={`${date === currentDate ? "bg-emerald-200" : ""} 
                                ${hoveredColumn === i ? "bg-gray-300" : ""}`}
                            onMouseEnter={() => setHoveredColumn(i)}
                            onMouseLeave={() => setHoveredColumn(null)}
                            style={{writingMode: "vertical-rl"}}
                        >
                            {date}
                        </th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                    {calendar.map((row, i) => (
                        <tr key={i}
                        className={`${
                            hoveredRow === i ? "bg-gray-300" : ""
                        }`}
                        onMouseEnter={() => setHoveredRow(i)}
                        onMouseLeave={() => setHoveredRow(null)}
                        >
                            <>
                                <td>{habits[i].name}</td>
                                {row.map((cell, j) => (
                                    <td key={j}
                                        className={`${dates[j + 1] === currentDate ? "bg-emerald-200" : ""}
                                            ${hoveredColumn === j + 1 ? "bg-gray-300" : ""}`}
                                        onMouseEnter={() => {setHoveredColumn(j + 1)}}
                                        onMouseLeave={() => {setHoveredColumn(null)}}
                                    >
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