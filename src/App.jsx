import { BrowserRouter} from "react-router-dom"
import { useTheme } from "./context/ThemeContext"
import Particles from "./components/particles"

import Home from "./pages/Home"

function App() {
  const { isDarkMode } = useTheme();

  return (
    <main className={`${isDarkMode ? 'bg-black' : 'bg-white' }`}>
      <BrowserRouter>
        <Home />

        <Particles />
      </BrowserRouter>
    </main>
  )
}

export default App
