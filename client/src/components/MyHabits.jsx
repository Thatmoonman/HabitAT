import { useEffect, useState } from "react"
import habits from "../../../server/testing/mockData/mockHabitData"

export default function MyHabits () {
    const [selector, setSelector] = useState('name')
    const [selectionAscending, setSelectionAscending] = useState(false)
    let habitOrder = habits

    const sortHabits = () => {
        switch (selector) {
            case "name":
                if (selectionAscending) {
                    habitOrder = habits.sort((a, b) => a.name.localeCompare(b.name))
                } else {
                    habitOrder = habits.sort((a, b) => b.name.localeCompare(a.name))
                }
                break;
            case "frequency":
                if (selectionAscending) {
                    habitOrder = habits.sort((a, b) => a.frequency - b.frequency)
                } else {
                    habitOrder = habits.sort((a, b) => b.frequency - a.frequency)
                }
                break;
            case "category":
                if (selectionAscending){
                    habitOrder = habits.sort((a, b) => a.category.localeCompare(b.category))
                } else {
                    habitOrder = habits.sort((a, b) => b.category.localeCompare(a.category))
                }
                break;
            case "history":
                if (selectionAscending) {
                    habitOrder = habits.sort((a, b) => a.history[0] - b.history[0])
                } else {
                    habitOrder = habits.sort((a, b) => b.history[0] - a.history[0])
                }
                break;
            default:
                break;
        }
    }
    sortHabits()

    useEffect(() => {
        sortHabits()
    }, [selector])

    const handleSelection = (event) => {
        setSelector(event.target.value)
    }


    return (
        <>
            <h1>MY HABITS</h1>
            <label>
                <input type="radio" value="name" onChange={handleSelection} checked={selector === "name"}/>
                Name
            </label>
            <label>
                <input type="radio" value="frequency" onChange={handleSelection} checked={selector === "frequency"}/>
                Frequency
            </label>
            <label>
                <input type="radio" value="category" onChange={handleSelection} checked={selector === "category"}/>
                Category
            </label>
            <label>
                <input type="radio" value="history" onChange={handleSelection} checked={selector === "history"}/>
                History
            </label>
            <label>
                <input type="radio" onChange={() => setSelectionAscending(true)} checked={selectionAscending}/>
                Ascending
            </label>
            <label>
                <input type="radio" onChange={() => setSelectionAscending(false)} checked={!selectionAscending}/>
                Descending
            </label>
            <ul>
                {habitOrder.map(habit => (
                    <li key={habit.id}>Name: {habit.name}, Frequency: {habit.frequency}, Category: {habit.category}</li>
                ))}
            </ul>
        </>
    )
}