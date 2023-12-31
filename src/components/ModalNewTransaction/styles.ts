import styled from "styled-components";
import { darken, transparentize } from "polished";

interface ButtonProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

export const Container = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background-color: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        ::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type=submit] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background-color: var(--green-primary);
        color: white;
        border-radius: 0.25rem;
        border: none;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`;

export const TransactionTypeContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap:0.5rem;
    margin: 1rem 0;

    
`;

const colors = {
    green: '#5adb94',
    red: '#e52e4d',
}

export const ButtonComponent = styled.button<ButtonProps>`
    
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    background-color: ${(props)=> props.isActive ? transparentize(0.9,colors[props.activeColor]) : 'transparent'};

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    transition: border-color .2s;

    &:hover {
        border-color: ${darken(0.1, '#d7d7d7')};
    }

    .up-arrow {
        font-size: 1.5rem;
        color: var(--green-primary);
    }

    .down-arrow {
        font-size: 1.5rem;
        color: var(--red-primary);
    }

    span {
        display: inline-block;
        font-size: 1rem;
        color: var(--text-title);
    }
    
`;