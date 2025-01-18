//model: {
// id: number
// name: string,
// frequency: number (ex: 1 = every '1' day; 4 = every '4' days),
// category: string,
// history: [date-time]
//}

const today = new Date()
const yesterday = new Date()
yesterday.setDate(today.getDate() - 1)
const threedaysago = new Date()
threedaysago.setDate(today.getDate() - 3)
const almostweekago = new Date()
almostweekago.setDate(today.getDate() - 6)
const weekago = new Date()
weekago.setDate(today.getDate() - 7)

const habits = [
    {
        id: 1,
        name: "read book 1",
        frequency: 1,
        category: "reading",
        history: [today, yesterday, weekago]
    },
    {
        id: 2,
        name: "read book 2",
        frequency: 3,
        category: "reading",
        history: [almostweekago]
    },
    {
        id: 3,
        name: "yoga",
        frequency: 7,
        category: "exercise",
        history: [almostweekago, weekago]
    },
    {
        id: 4,
        name: "habitAT",
        frequency: 3,
        category: "programming",
        history: [threedaysago]
    }
]

export default habits