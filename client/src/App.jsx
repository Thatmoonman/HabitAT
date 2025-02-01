// import { Outlet } from "react-router-dom";
// import Navbar from "./components/Navbar";
import MyHabits from "./components/Habits/MyHabits";
import habits from "../../server/testing/mockData/mockHabitData";
import SuggestedHabits from "./components/Habits/SuggestedHabits";
import HabitCalendar from "./components/Calendar/HabitCalendar";

const App = () => {
  return (
    <div className="w-full p-6">
      {/* <Navbar /> */}
      <HabitCalendar habits={habits}/>
      <SuggestedHabits habits={habits}/>
      <MyHabits habits={habits}/>
      {/* <Outlet /> */}
    </div>
  );
};
export default App
