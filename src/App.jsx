import Navbar from "./components/Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import MainRoutes from "./pages/routes/MainRoutes"
const App = () => {
  return (
    <div className=" font-thin text-2xl py-8 px-[2%] bg-gray-100  text-white h-screen w-screen text-black"  >
      <Navbar/>
      <MainRoutes/>
    </div>
  )
}

export default App