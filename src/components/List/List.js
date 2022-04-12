import React from 'react';

import PropTypes from 'prop-types';
import ListItem from '../ListItem/ListItem';

import './List.css';

export default function List({ tarefas, handleEdit, handleDelete }) {
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

List.propTypes = {
    handleDelete: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired,
    tarefas: PropTypes.instanceOf(Array).isRequired
};
