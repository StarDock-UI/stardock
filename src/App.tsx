import { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.setAttribute('data-theme', darkMode ? 'light' : 'dark');
  }


  return (
    <div>
      <button onClick={toggleTheme}>Dark Mode</button>
    </div>
  )
}

export default App
