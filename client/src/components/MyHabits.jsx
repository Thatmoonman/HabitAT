import { useEffect } from "react"
import habits from "../../../server/testing/mockData/mockHabitData"

export default function MyHabits () {
    const selector = "abc"
    let habitOrder = habits.sort((a, b) => a.name.localeCompare(b.name))

    useEffect(() => {
        switch (selector) {
            case "abc":
                habitOrder = habits.sort((a, b) => a.name.localeCompare(b.name))
                break;
            case "frequency":
                habitOrder = habits.sort((a, b) => a.frequency - b.frequency)
                break;
            default:
                break;
        }
    }, [selector])
    return (
        <>
            
            <h1>MY HABITS</h1>
            <ul>
                {habitOrder.map(habit => (
                    <li key={habit.id}>{habit.name}</li>
                ))}
            </ul>
        </>
    )
}