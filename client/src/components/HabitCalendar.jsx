

const HabitCalendar = (props) => {
    const habits = props.habits
    const CALENDARLENGTH = 14

    const performHabit = (habit) => {
        console.log(habit)
    }
    
    const buildCalendarBody = () => {
        const calendar = []
        let dates = [""]

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
            calendar.push(habitRow)
        }

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
                                    <td key={j} onClick={() => performHabit(habits[i])}>{cell ? 'X' : 'O'}</td>
                                ))}
                            </>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }

    return buildCalendarBody()
}

export default HabitCalendar