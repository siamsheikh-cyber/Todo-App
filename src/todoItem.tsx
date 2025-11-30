import { useState } from "react";
import type { TodoType } from "./todoType";

type TodoItemProps = {
    item: TodoType;
    deleteTodo: (id: number) => void;
    editTodo: (id: number, title: string) => void;
};
function TodoItem({ item, deleteTodo, editTodo }: TodoItemProps) {

    const [edit, setEdit] = useState(false)

    const [newTitle, setNewTitle] = useState("")

    const newtext = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.target.value)
    }

    const GetText = () => {
        editTodo(item.id, newTitle)
        setEdit(false)
    }


    return (
        <div className="flex items-center gap-4 w-[500px] mx-auto mt-10">
            <span>{item.id} :</span>
            <p>

                {edit == false ?
                    item.title
                    :
                    <div>
                        <input
                            type="tex"
                            value={newTitle}
                            onChange={newtext}
                        /> <button onClick={GetText} className="bg-green-800 py-1.5 px-3.5 rounded-[3px] cursor-pointer">Done</button>
                    </div>
                }
            </p>
            <button onClick={() => deleteTodo(item.id)} className="bg-red-500 rounded-[3px] py-1.5 px-5 cursor-pointer">Delete</button>
            <button onClick={() => setEdit(true)} className="bg-green-500 rounded-[3px] py-1.5 px-5 cursor-pointer">Edit</button>
        </div>
    );
}

export default TodoItem;