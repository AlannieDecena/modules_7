import React, {useState, useEffect, useContext} from 'react'
import { ThemeContext, themes } from '../context/ThemeContext'

function Counter() {

    const [count, setCount] = useState(0)
    const themeContext = useContext(ThemeContext)
    const darkMode = themeContext.theme.background === themes.dark.background

    useEffect(() => {
        document.title = `You clicked ${count} times`

        return function cleanUp() {
            document.title = 'My React App'
        }

    }, [count])

    return (
        <div className="Counter componentBox" style={{backgroundColor: themeContext.theme.background, color: themeContext.theme.foreground}}>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count+1)}>Click Me!</button>
            <button onClick={() => setCount(0)}>Rest!</button>
            
            <input type="checkbox" value={themeContext.theme.background === themes.dark.background} 
            onChange={() => darkMode ? themeContext.setTheme(themes.light) : themeContext.setTheme(themes.dark)} /> dark mode?

            {/* how could we make a reset button to reset the count back to zero? */}
        </div>
    )
}

export default Counter