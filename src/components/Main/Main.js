import React, { Component } from 'react';
import './Main.css';

import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component {
    state = {
        novaTarefa: '',
        tarefas: JSON.parse(localStorage.getItem('tarefas')) || [],
        index: -1
    };

    handleChange = e => {
        e.target.value = e.target.value.toUpperCase();
        this.setState({
            novaTarefa: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        const { tarefas, index } = this.state;
        let { novaTarefa } = this.state;
        novaTarefa = novaTarefa.trim();

        if(index !== -1){
            const tarefasAtualizadas = [...tarefas];
            tarefasAtualizadas[index] = novaTarefa;

            this.setState({
                tarefas: [...tarefasAtualizadas],
                novaTarefa: '',
                index: -1
            });

            localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas));
            return;
        }

        const tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];
        const inputTarefa = document.getElementById('inputTarefa');

        if(!novaTarefa){
            alert('Digite uma tarefa válida');
            return;
        }

        if(tarefasSalvas.indexOf(novaTarefa) !== -1){
            alert(`Tarefa: "${novaTarefa}" já havia sido adicionada`);
            return;
        }

        tarefasSalvas.push(novaTarefa);
        localStorage.setItem('tarefas', JSON.stringify(tarefasSalvas));
        inputTarefa.focus();

        this.setState({
            novaTarefa: '',
            tarefas: [...tarefasSalvas]
        });
    };

    handleDelete = (e, index) => {
        const { tarefas } = this.state;
        const tarefasAtualizadas = [...tarefas];
        tarefasAtualizadas.splice(index, 1);
        localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas));

        this.setState({
            tarefas: [...tarefasAtualizadas]
        });
    };

    handleEdit = (e, itemIndex) => {
        const { tarefas } = this.state;
        this.setState({
            index: itemIndex,
            novaTarefa: tarefas[itemIndex]
        });

        document.querySelector('#inputTarefa').focus();
    }

    render() {
        const { tarefas, novaTarefa } = this.state;

        return (
            <div className="Main">
                <form onSubmit={this.handleSubmit} className="Form" action="#">
                    <div className="Form-div-input">
                        <input
                            onChange={this.handleChange}
                            type="text"
                            value={novaTarefa}
                            id="inputTarefa"
                        />
                        <button type="submit">
                            <FaPlus />
                        </button>
                    </div>
                </form>

                <ul className="List">
                    {tarefas.map((item, index) => {
                        return (
                        <li key={`tarefa${index + 1}`} className="ListItem">
                            <div className="ListItem-tarefa">{item}</div>
                            <div className="ListItem-div-buttons">
                                <FaEdit
                                    onClick={(e) => this.handleEdit(e, index)}
                                    className="ListItem-button edit"
                                />
                                <FaWindowClose
                                    onClick={(e) => this.handleDelete(e, index)}
                                    className="ListItem-button delete"
                                />
                            </div>
                        </li>);
                    })
                    }
                </ul>
            </div>
        );
    }
}
