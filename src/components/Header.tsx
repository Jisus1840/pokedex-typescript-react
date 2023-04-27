import styles from './header.module.css';

type HeaderPops = {
    query: string,
    setQuery: (query: string) => void;
}

const Header = ({ query, setQuery }: HeaderPops) => {
    return (
        <header className={styles.header}>
            <input className={styles.input} type="text" placeholder='Search a Pokemon' value={query} onChange={(event) => setQuery(event.target.value)}/>
        </header>
    );
};

export default Header;