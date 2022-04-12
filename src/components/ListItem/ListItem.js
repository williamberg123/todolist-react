import React from 'react';

import './ListItem.css';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default function ListItem(props) {
    const { handleDelete, handleEdit, tarefa, index } = props;

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
    )
}
