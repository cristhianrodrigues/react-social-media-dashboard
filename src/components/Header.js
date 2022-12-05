import { theme,  setTheme} from '../App'

export default function Header(props){

    const themeToggle = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
      };
    return (
        <section class="header">
            <div class="description">
                <h2>{props.title}</h2>
                <p>{props.subtitle}</p> 
            </div>
            <div class="dark-mode">
                <p class="dark-mode-tittle">Dark Mode</p>
                <label class="dark-mode-button" onClick={() => themeToggle()}>
                    <span class="dark-mode-switcher"></span>
                </label>
            </div>
        </section>
    )
};