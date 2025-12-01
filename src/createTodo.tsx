import { useState } from "react";

type CreateTodoProps = {
    onCreateTodo: (text: string) => void;
};


function CreateTodo({ onCreateTodo }: CreateTodoProps) {

    const [text, SetText] = useState("")


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        SetText(event.target.value)
    }

    console.log(text);


    const handleTodo = () => {
        onCreateTodo(text)
        SetText("")
    }


    return (
        <div className="flex gap-2 mt-3.5 max-w-[300px] mx-auto">
            <input
                type="text"
                className="w-[250px] py-2 px-3.5 border-[2.5px] border-cyan-300 text-purple-600"
                value={text}
                onChange={handleChange}
            />
            <button onClick={handleTodo} className="bg-cyan-300 rounded-[3px] py-1.5 px-5 cursor-pointer">Create</button>
        </div>
    );
}

export default CreateTodo;