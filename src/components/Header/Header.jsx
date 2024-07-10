import css from './Header.module.css'
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
    return (
        <header className={css.d1}>
            <form>
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                
                <button type="submit">
                <AiOutlineSearch />
                </button>
            </form>
        </header>

    )
}

export default Header