import React from 'react';

import PropTypes from 'prop-types';

import { FaEdit, FaWindowClose } from 'react-icons/fa';
import './ListItem.css';

export default function ListItem({ handleDelete, handleEdit, tarefa, index }) {
    return (
        <li key={`tarefa${index + 1}`} className="ListItem">
            <div className="ListItem-tarefa">{tarefa}</div>
            <div className="ListItem-div-buttons">
                <FaEdit
                    onClick={(e) => handleEdit(e, index)}
                    className="ListItem-button edit"
                />
                <FaWindowClose
                    onClick={(e) => handleDelete(e, index)}
                    className="ListItem-button delete"
                />
            </div>
        </li>
    );
}

ListItem.propTypes = {
    handleDelete: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired,
    tarefa: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
};
