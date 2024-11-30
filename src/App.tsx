import { useEffect, useState } from "react";
import Navbar from "./components/Navbar"

function App() {

  const [selectedPage, setSelectedPage] = useState<string>("#home");
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {

    function handleScroll() {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("#home")
      } else {
        setIsTopOfPage(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="app bg-gray-20">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

    </div>
  )
}

export default App
