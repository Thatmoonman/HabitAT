import { useState } from "react"

const NewHabit = () => {
    const[showNewHabitForm, setShowNewHabitForm] = useState(false)
    const [name, setName] = useState("")
    const [frequency, setFrequency] = useState("")
    const [category, setCategory] = useState("")

    const handleNewHabit = (e) => {
        e.preventDefault()

        const newHabit = {
            name: name,
            frequency: frequency,
            category: category,
            history: []
        }

        console.log(newHabit)
        //post new habit to server
        setShowNewHabitForm(false)
    }

    return (
        <>
        {showNewHabitForm ? (
            <form className="modal">
                <input onChange={(e) => setName(e.target.value)} value={name} placeholder="Habit Name"/>
                <input onChange={(e) => setFrequency(e.target.value)} value={frequency} placeholder="Habit Frequency"/>
                <input onChange={(e) => setCategory(e.target.value)} value={category} placeholder="Habit Category"/>
                <button onClick={handleNewHabit}>Add Habit</button>
            </form>
        ) : (
            <button onClick={() => setShowNewHabitForm(true)}>ADD NEW HABIT</button>
        )}
        </>
    )
}

export default NewHabit