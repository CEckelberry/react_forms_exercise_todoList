import React, {useState} from "react";
import { v4 as uuid } from 'uuid';

const NewToDoForm = ({ createToDo }) => {
    const [formData, setFormData] = useState({
        task: ""
    });

    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const gatherInput = evt => {
        evt.preventDefault();
        let newID = uuid();
        createToDo({...formData, key: newID, id: newID});
        newID = "";
        setFormData({task: ""});
    }

    return (
        <div>
            <form onSubmit={gatherInput}>
                <div>
                    <label htmlFor="task">Todo Task:</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="task"
                        value={formData.task}
                        id="task"
                     />
                     <button>Add Task</button>
                </div>
            </form>
        </div>
    )
}

export default NewToDoForm;