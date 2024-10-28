import { CreateTodoButtom } from "./CreateTodoButtom";

function TodoCreate() {
    return (
        <>
            <h1>Create new task</h1>
            <h3>Task name</h3>
            <input
                placeholder="Llorar con la Llorona"
            ></input>
            <CreateTodoButtom />
        </>
    );
}

export { TodoCreate };