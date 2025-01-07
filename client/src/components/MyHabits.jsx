
//get habits, placeholder below
const habit1 = {name: "read book x", frequency: 3}
const habit2 = {name: "code project y", frequency: 2}
const habit3 = {name: "go to the gym", frequency: 4}
const habits = [habit1, habit2, habit3]

export default function MyHabits () {
    return (
        <>
            <h1>MY HABITS</h1>
            <ul>
                <li>{habit1.name}</li>
                <li>{habit2.name}</li>
                <li>{habit3.name}</li>
            </ul>
            <p>Thoughts: either need to learn this structural style, benefits being to learn something new but negatives being it will take longer</p>
            <p>alternatively, I can use the existing react/redux methodology I learned at AA to get moving on this project.</p>
            <p>FLOW: list existing habits, show square readout of habit performance, hover over to see deets and edit</p>
            <p>allow for suggestions?</p>
        </>
    )
}