import { useEffect, useState } from "react"
import HabitCard from "./HabitCard"

export default function MyHabits (props) {
    const habits = props.habits
    let habitOrder = habits
    const CATEGORIES = ["Name", "Frequency", "Category", "History"]

    const [selector, setSelector] = useState('name')
    const [selectionAscending, setSelectionAscending] = useState(false)

    const sortHabits = () => {
        switch (selector) {
            case "Name":
                if (selectionAscending) {
                    habitOrder = habits.sort((a, b) => b.name.localeCompare(a.name))
                } else {
                    habitOrder = habits.sort((a, b) => a.name.localeCompare(b.name))
                }
                break;
            case "Frequency":
                if (selectionAscending) {
                    habitOrder = habits.sort((a, b) => b.frequency - a.frequency)
                } else {
                    habitOrder = habits.sort((a, b) => a.frequency - b.frequency)
                }
                break;
            case "Category":
                if (selectionAscending){
                    habitOrder = habits.sort((a, b) => b.category.localeCompare(a.category))
                } else {
                    habitOrder = habits.sort((a, b) => a.category.localeCompare(b.category))
                }
                break;
            case "History":
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

            {CATEGORIES.map((category, i) => (
                <label key={i}>
                    <input type="radio" value={category} onChange={handleSelection} checked={selector === category}/>
                    {category}
                </label>
            ))}
            <label>
                <input type="radio" onChange={() => setSelectionAscending(true)} checked={selectionAscending}/>
                Ascending
            </label>
            <label>
                <input type="radio" onChange={() => setSelectionAscending(false)} checked={!selectionAscending}/>
                Descending
            </label>
            <ul>
                {habitOrder.map(habit => <HabitCard habit={habit} key={habit.id}/>)}
            </ul>

            <br/><br/>
            <p>TODO: </p>
            <p>- Styling of habit cards</p>
            <p>- Today's suggested habits based on history</p>
            <p>- CRUD functionality for habits</p>
            <p>- Generate Habit grid with color coding for history and frequency</p>
            <p>- Connect to proper backend db</p>
            <br/><br/>
        </>
    )
}