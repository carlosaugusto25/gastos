import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem; // aumenta o espaço entre as linhas, inclusive separando cada estilização entre uma linha e outra;

        th {
            color: var(--text-body);
            font-weight: 500;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td {
            padding: 1rem 2rem;
            border: none;
            background-color: var(--white);
            color: var(--text-body);
            border-radius: 0.25rem;

            &:first-child {
                color: var(--text-title);
            }

            &.deposit {
                color: var(--green-primary);
            }

            &.withdraw {
                color: var(--red-primary);
            }
        }
    }
`;