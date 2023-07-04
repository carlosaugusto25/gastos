import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue-dark);
`;

export const Content = styled.div`
    max-width: 1120px;
    padding: 2rem 1rem 12rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo-and-name {
        display: flex;
        align-items: center;

        .icon {
            color: var(--white);
            font-size: 3rem;
            margin: 0;
        }

        p {
            font-family:'Bebas Neue', sans-serif;
            color: var(--white);
            font-size: 3.5rem;
            margin-bottom: -5px;
            padding: 0;
            margin-left: 10px;
        }

        img {
            width: 40px;
        }
    }

    button {
            font-size: 1rem;
            color: var(--white);
            background-color: var(--blue-medium);
            border: none;
            padding: 0 2rem;
            border-radius: 0.25rem;
            height: 3rem;

            transition: filter .2s;

            &:hover {
                filter: brightness(0.9);
            }
        }
`;