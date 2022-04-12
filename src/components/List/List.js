import React from 'react';

import './List.css';
import ListItem from '../ListItem/ListItem';

export default function List(props) {
    const { tarefas, handleEdit, handleDelete } = props;

    return (
        <ul className="List">
            {
            tarefas.map((item, index) =>
                <ListItem
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    tarefa={item}
                    index={index}
                    key={`tarefa${index}`}
                />
            )
            }
        </ul>
    );
}
