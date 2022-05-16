import React from 'react';

import PropTypes from 'prop-types';
import ListItem from '../ListItem/ListItem';

import './List.css';

export default function List({ tarefas = [], handleEdit, handleDelete }) {
	console.log('list');
    const listChildren = tarefas?.map((item, index) => (
            <ListItem
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                tarefa={item}
                index={index}
                key={`tarefa${index}`}
            />
        )
    );

    return (
        <ul className="List">
            {listChildren}
        </ul>
    );
}

List.propTypes = {
    handleDelete: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired,
    tarefas: PropTypes.instanceOf(Array)
};
