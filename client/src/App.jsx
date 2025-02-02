// import { Outlet } from "react-router-dom";
// import Navbar from "./components/Navbar";
import MyHabits from "./components/Habits/MyHabits";
import habits from "../../server/testing/mockData/mockHabitData";
import SuggestedHabits from "./components/Habits/SuggestedHabits";
import HabitCalendar from "./components/Calendar/HabitCalendar";
import NewHabit from "./components/Habits/NewHabit";

const App = () => {
  return (
    <div className="w-full p-6">
      {/* <Navbar /> */}
      <NewHabit />
      <HabitCalendar habits={habits}/>
      <SuggestedHabits habits={habits}/>
      <MyHabits habits={habits}/>
      {/* <Outlet /> */}
    </div>
  );
};
export default App
