import { useState } from "react"

const NewHabit = () => {
    const[showNewHabitForm, setShowNewHabitForm] = useState(false)
    const [name, setName] = useState("")
    const [frequency, setFrequency] = useState("")
    const [category, setCategory] = useState("")

    const submitNewHabit = async (habit) => {
        try {
          const response = await fetch(`http://localhost:5050/habits`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(habit),
          });
      
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        } catch (error) {
          console.error('A problem occurred with your fetch operation: ', error);
        }
    }

    const resetForm = () => {
        setName("")
        setFrequency("")
        setCategory("")
    }

    const handleNewHabit = (e) => {
        e.preventDefault()

        const newHabit = {
            name: name,
            frequency: frequency,
            category: category
        }
        
        submitNewHabit(newHabit)
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