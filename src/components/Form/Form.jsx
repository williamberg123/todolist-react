import React from 'react';
import PropTypes from 'prop-types';

import { FaPlus } from 'react-icons/fa';

import './Form.css';

export default function Form({ handleSubmit, handleChange, novaTarefa }){
    return (
        <form onSubmit={handleSubmit} className="Form" action="#">
            <div className="Form-div-input">
                <input
                    onChange={handleChange}
                    type="text"
                    value={novaTarefa}
                    id="inputTarefa"
                    placeholder="Digite as tarefas aqui"
					autoComplete="off"
                />
                <button type="submit">
                    <FaPlus />
                </button>
            </div>
        </form>
    );
}

Form.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    novaTarefa: PropTypes.string.isRequired
};
