import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 2rem;
    margin-top: -10rem;

    div {
        background-color: var(--white);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .icon-up {
                color: var(--green-primary);
                font-size: 1.5rem;
            }

            .icon-down {
                color: var(--red-primary);
                font-size: 1.5rem;
            }

            .money {
                color: var(--white);
                font-size: 1.5rem;
            }
        }

        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &.total-card {
            background-color: var(--green-primary);
            color: var(--white);
        }
    }
`;