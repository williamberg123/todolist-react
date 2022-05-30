import React, { useState, useEffect, useCallback, useRef } from 'react';

import Header from './components/Header/Header';
import Main from './containers/Main/Main';
import Form from './components/Form/Form';
import List from './components/List/List';

import './App.css';

export default function App() {
    const [ newItemList, setNewItemList ] = useState('');
    const [ listItems, setListItems ] = useState([]);
    const [ index, setIndex ] = useState(-1);

	const searchInputRef = useRef(null);

    const handleSubmit = e => {
        e.preventDefault();

        const novaTarefa = newItemList.trim();

        if(index !== -1){
            const tarefasAtualizadas = [...listItems];

			if(!newItemList.length) {
				alert('Digite algo para editar a tarefa!');
				return;
			}
            tarefasAtualizadas[index] = novaTarefa;

            setListItems(tarefasAtualizadas);
            setNewItemList('');
            setIndex(-1);

            return;
        }

        const tarefasSalvas = [...listItems];

        if(!novaTarefa){
            alert('Digite uma tarefa válida');
            return;
        }

        if(tarefasSalvas.indexOf(novaTarefa) !== -1){
            alert(`Tarefa: "${novaTarefa}" já havia sido adicionada`);
            return;
        }

        tarefasSalvas.push(novaTarefa);
        searchInputRef.current.focus();

        setNewItemList('');
        setListItems(tarefasSalvas);
    };

    const handleChange = (e) => {
        e.target.value = e.target.value.toUpperCase();
        setNewItemList(e.target.value);
    };

    const handleDelete = useCallback((e, index) => {
        const tarefasAtualizadas = [...listItems];
        tarefasAtualizadas.splice(index, 1);

        setListItems(tarefasAtualizadas);
    }, [listItems]);

    const handleEdit = useCallback((e, itemIndex) => {
        setIndex(itemIndex);
        setNewItemList(listItems[itemIndex]);

        searchInputRef.current.focus();
    }, [listItems]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('tarefas'));

        if(items){
            setListItems(items);
            return;
        }
        setListItems([]);
    }, []);

    useEffect(() => {
        localStorage.setItem('tarefas', JSON.stringify(listItems));
    }, [listItems]);

    return (
        <div className="App">
            <Header />

            <Main>
                <Form
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    novaTarefa={newItemList}
					searchInputRef={searchInputRef}
                />

                <List
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    tarefas={listItems}
                />
            </Main>
        </div>
    );
}
