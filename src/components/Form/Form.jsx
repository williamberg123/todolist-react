import React from 'react';
import PropTypes from 'prop-types';

import { FaPlus } from 'react-icons/fa';

import './Form.css';

export default function Form({ handleSubmit, handleChange, novaTarefa, searchInputRef }){
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
					ref={searchInputRef}
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
    novaTarefa: PropTypes.string.isRequired,
	searchInputRef: PropTypes.node.isRequired
};
