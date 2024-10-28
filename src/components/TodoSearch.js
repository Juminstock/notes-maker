function TodoSearch({ searchValue, setSearchValue }) {
    return (
        <input 
            placeholder="Llorar con la Llorona" 
            className="TodoSearch"
            value={ searchValue }
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
        />
    );
}

export { TodoSearch };