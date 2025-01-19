import HabitCard from "./HabitCard"

const SuggestedHabits = (props) => {
    const habits = props.habits

    const today = new Date().getDate()
    
    const overdueHabits = habits.filter(habit => {
        const lastPerfomed = habit.history[0].getDate()
        if (!lastPerfomed) {
            return true
        } else if (habit.frequency <= today - lastPerfomed) {
            habit.overdue = (today - lastPerfomed) - habit.frequency
            return true
        } else {
            return false
        }
    })

    const suggestionOrder = () => {
        const overdueOrder = overdueHabits.sort((a, b) => a.overdue - b.overdue)

        return (
            overdueOrder.map(habit => (
                <div key={habit.id}>
                    <HabitCard habit={habit}/>
                    {habit.overdue ? (
                        <p>{habit.name} overdue by: {habit.overdue}</p>
                    ) : (
                        <p>{habit.name} due today</p>
                    )}
                    <br/>
                </div>
            ))
        )
    }

    return (
        <>
            <h1>Suggested Habits</h1>
            {suggestionOrder()}
        </>
    )
}

export default SuggestedHabits