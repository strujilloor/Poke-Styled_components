import React, { useState} from 'react';
import styled, { css } from 'styled-components';

// REACT WITH TYPESCRIPT

// Escribir de manera más corta este tipo de descripciones
type FormElement = React.FormEvent<HTMLFormElement>;

// Definimos la forma de una Task
interface ITask {
    name: string,
    done: boolean
}

// Explicación genéricos en interfaces
// interface React.FC<T> {
//     props: T
//     ... 
// }
export const AppPrueba: React.FC<{ message: string }> = ({ message }) => {
    
    //                     Estamos recibiendo un string
    const [newTask, setNewTask] = useState<string>('');
    //                     Estamos recibiendo un Arreglo de ITask
    const [tasks, setTasks] = useState<ITask[]>([]);

    // FormEvent to onSubmit
    const handleSubmit = (e : FormElement) => {
        e.preventDefault();
        console.log('enviando...' + newTask);
        addTask( newTask );
        setNewTask( '' );
    }

    const addTask = (name: string) => {
        // newTasks es un arreglo de ITask s
        const newTasks: ITask[] = [...tasks, { name, done: false }];
        setTasks(newTasks);
    }

    // ChangeEvent to onChange
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setNewTask( e.target.value );
    }

    return (
        <>
            <h1>{ message }</h1>
            <form onSubmit={ handleSubmit }>
                <input type="text" onChange={ handleChange } value={ newTask } />
                <input type="submit" value="Save"/>
            </form>
        </>
    )
}

// ___

// STYLED COMPONENTS

// Ejemplo código css dinámico 
const flex = css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
`;


// Definir atributos por defecto para los styled components
const Input = styled.input.attrs( props => ({
    placeholder: props.placeholder || 'Ingresa un texto',
    type: props.type || 'text'
}))`
    padding: 1em;
    height: 46px;
`;



// Custom Props with TypeScript to Style Components
interface ButtonProps {
    readonly bg?: string
};
const Button = styled.button<ButtonProps>`
    padding: 1em 2.5em;
    margin: 1em;
    background-color: ${ props => props.bg || '' };
    /* border: none; */
`;
// También se puede hacer de la siguiente forma:
const Button2 = styled.button<ButtonProps>(props => `
    padding: 1em 2.5em;
    margin: 1em;
    background-color: ${ props.bg || '' };
`)

interface Props {
    message: string
};
const Prueba: React.FC<Props> = () => {
    return (
        <div>

            <main></main> {/* preguntar sobre el main */}
        </div>
    );
};

export default Prueba;
