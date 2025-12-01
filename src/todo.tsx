import { useContext, useState } from "react";
import TodoItem from "./todoItem";
import type { TodoType } from "./todoType";
import CreateTodo from "./createTodo";
import { TodoContext } from "./todocontext";

function Todo() {

    const use = useContext(TodoContext)


    const [todo, SetTodo] = useState<TodoType[]>([])

    const createTodo = (text: string) => {
        [
            SetTodo([
                ...todo,
                {
                    id: todo.length + 1,
                    title: text,
                }
            ])
        ]
    }

    const deleteTodo = (id: number) => {

        const finalTodoList = todo.filter(item => item.id != id)

        SetTodo(finalTodoList)
    }

    const editTodo = (id: number, title: string) => {

        const Edittodo = todo.map(item => item.id == id ? { ...item, title: title } : item)

        SetTodo(Edittodo)

    }


    return (
        <>
            <CreateTodo onCreateTodo={createTodo} />
            <div className="max-w-[300px] mx-auto">
                {
                    todo.map((item) => <TodoItem key={item.id} item={item} deleteTodo={deleteTodo} editTodo={editTodo} />)
                }
            </div>
            <p className="py-3 mt-16 bg-blue-400 text-center text-shadow-indigo-200">
                {use}
            </p>
        </>

    );
}

export default Todo;