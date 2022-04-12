import React, { Component } from 'react';
import './Main.css';

import Form from '../Form/Form';
import List from '../List/List';

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

        const tarefasSalvas = [...tarefas];
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

                <Form
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    novaTarefa={novaTarefa}
                />

                <List
                    handleEdit={this.handleEdit}
                    handleDelete={this.handleDelete}
                    tarefas={tarefas}
                />

            </div>
        );
    }
}
