import { useState } from "react";

const CalendarBox = (props) => {
    const habit = props.habit;
    const [habitPerformed, setHabitPerformed] = useState(props.performed);
    

    // Helper function to find the most recent performed date
    const getMostRecentPerformedDate = () => {
        if (habit.history.length === 0) return null;
        return new Date(habit.history[0]); // Assume history is sorted, and [0] is the latest date
    };

    // Function to calculate the color for unchecked boxes
    const calculateBackgroundColor = () => {
    const mostRecentDate = getMostRecentPerformedDate();

    if (!mostRecentDate) {
        return "red"; // Default to red if no performed history exists
    }

    const currentDate = new Date(props.date);

    // Convert both dates to the start of the day for accurate comparison
    const currentDateStart = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate()
    );
    const mostRecentStart = new Date(
        mostRecentDate.getFullYear(),
        mostRecentDate.getMonth(),
        mostRecentDate.getDate() + 1
    );

    // Gray for days strictly before the most recent performed date
    if (currentDateStart < mostRecentStart) {
        return "gray";
    }

    // Calculate day difference (exclude the performed day itself)
    const dayDifference = Math.floor(
        (currentDateStart - mostRecentStart) / (1000 * 60 * 60 * 24)
    );

    if (dayDifference < habit.frequency) {
        return "green"; // Within range
    } else if (dayDifference === habit.frequency) {
        return "yellow"; // Last valid day in range
    } else {
        return "red"; // Beyond the allowed range
    }
};


    const handlePerformHabit = (event) => {
        setHabitPerformed(event.target.checked);
        props.performHabit(habit, props.date);
    };

    return (
        <div>
            <input
                type="checkbox"
                id={`styled-checkbox-${habit.id}-${props.date}`}
                checked={habitPerformed}
                onChange={handlePerformHabit}
                style={{ display: "none" }} // Hide the native checkbox
            />
            <label
                htmlFor={`styled-checkbox-${habit.id}-${props.date}`}
                style={{
                    display: "inline-block",
                    width: "24px",
                    height: "24px",
                    backgroundColor: habitPerformed
                        ? "blue" // Performed color
                        : calculateBackgroundColor(), // Dynamic color for unchecked boxes
                    border: "2px solid #000",
                    borderRadius: "4px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                }}
            ></label>
        </div>
    );
};

export default CalendarBox;
