function TodoCounter({ total, completed }) {
    return (
        <h1>
            You have completed { completed } of { total } Tasks
        </h1>
    );
}

export { TodoCounter };