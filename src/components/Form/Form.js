import React from 'react';

import { FaPlus } from 'react-icons/fa';
import './Form.css';

export default function Form(props){
    const { handleSubmit, handleChange, novaTarefa } = props;

    return (
        <form onSubmit={handleSubmit} className="Form" action="#">
            <div className="Form-div-input">
                <input
                    onChange={handleChange}
                    type="text"
                    value={novaTarefa}
                    id="inputTarefa"
                    placeholder="Digite as tarefas aqui"
                />
                <button type="submit">
                    <FaPlus />
                </button>
            </div>
        </form>
    );
}
