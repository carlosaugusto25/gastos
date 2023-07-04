import styled from "styled-components";

export const Container = styled.header`
    background: var(--red-header);
    border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo-and-name {
        display: flex;
        align-items: center;

        p {
            font-family:'Bebas Neue', sans-serif;
        }
    }
`;