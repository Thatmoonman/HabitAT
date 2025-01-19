// import { Outlet } from "react-router-dom";
// import Navbar from "./components/Navbar";
import MyHabits from "./components/MyHabits";
import habits from "../../server/testing/mockData/mockHabitData";
import SuggestedHabits from "./components/SuggestedHabits";
import HabitCalendar from "./components/HabitCalendar";

const App = () => {
  return (
    <div className="w-full p-6">
      {/* <Navbar /> */}
      {/* <Outlet /> */}
      <MyHabits habits={habits}/>
      {/* <SuggestedHabits habits={habits}/> */}
      <HabitCalendar habits={habits}/>
    </div>
  );
};
export default App
