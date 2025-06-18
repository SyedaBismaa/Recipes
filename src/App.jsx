import Navbar from "./components/Navbar"
import MainRoutes from "./pages/routes/MainRoutes"
const App = () => {
  return (
    <div className="font-thin text-2xl py-8 px-[8%] bg-gray-800 text-white h-screen w-screen" >
      <Navbar/>
      <MainRoutes/>
    </div>
  )
}

export default App