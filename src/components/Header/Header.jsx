import css from './Header.module.css'
import { AiOutlineSearch } from "react-icons/ai";

const Header = ({ onAdd }) => {

    const handleSubmit = (event) => {
        
        const inputValue = event.target.elements.search.value;
        event.preventDefault();
        onAdd(inputValue);
        // console.log(inputValue)
    }

    

    return (
        <header className={css.d1}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    name='search'
                />

                <button type="submit">
                    <AiOutlineSearch className={css.icon} />
                </button>
            </form>
        </header>

    )
}

export default Header