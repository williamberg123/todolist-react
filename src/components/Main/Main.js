import React, { Component } from 'react';
import './Main.css';

import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component {
    state = {
        novaTarefa: '',
        tarefas: [],
        index: -1
    };

    componentDidMount() {
        const tarefas = JSON.parse(localStorage.getItem('tarefas'));

        this.setState({
            tarefas
        });
    }

    componentDidUpdate(prevProps, prevState) {
        const { tarefas } = this.state;

        if(tarefas === prevState.tarefas) return;

        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }

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
                            placeholder="Digite as tarefas aqui"
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
