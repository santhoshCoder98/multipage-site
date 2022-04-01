import { useTheme } from '../hooks/useTheme'
import backgroundColor from '../assets/toggleBackground.svg'

import './ThemeCollector.css'

export default function ThemeCollector() {
    const { changeColor, changeBackground, mode } = useTheme()

    const themeColors = ["#58249c", "#2496cb", "#b70233"]

    const toggleBackground = () => {
        changeBackground(mode === "dark" ? "light" : "dark")
    }

    console.log(mode);

    return (
        <div className="theme-selector">
            <div className="background-toggle">
                <img
                    onClick={toggleBackground}
                    src={backgroundColor}
                    alt="dark/light toggle icon"
                    style={{ filter: mode === "dark" ? 'invert(100%)' : 'invert(20%)' }}
                />
            </div>
            <div className="theme-buttons">
                {themeColors.map(color => (
                    <div key={color}
                        onClick={() => changeColor(color)}
                        style={{ background: color }}
                    />
                ))}
            </div>
        </div>
    )
}
