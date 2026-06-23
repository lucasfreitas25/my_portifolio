import NavBar from "./components/NavBar/NavBar"
import Skout from "./pages/About/Skout"
import Home from "./pages/Home/Home"
import Projects from "./pages/Projects/Projects"
import Footer from "./components/Footer/Footer"


const App = () => {
 

  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
      <Skout></Skout>
      <Projects></Projects>
      <Footer />
    </>
  )
}

export default App

