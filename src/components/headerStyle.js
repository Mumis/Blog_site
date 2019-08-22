import Styled from 'styled-components';

export const Wrapper = Styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;

    @media(max-width: 700px) {
        display: block;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    h1 {
        order: 2;
        font-size: 1.9rem;
        font-weight: 900;
        margin-bottom: 0;

        @media(max-width: 700px) {
            margin-bottom: 2rem;
        }
    }

    div {
        display: flex;
        align-items: center;
    }

    img {
        object-fit: cover;
        height: 80px;
        width: 80px;
        border-radius: 50%;
        margin-right: 1.2rem;
        margin-bottom: 0;
    }

    h3 {
        margin: 0;
        font-size: 1rem;
        font-weight: normal;
        color: #ffff90;

        span {
            color: white;
        }
    }

    p {
        margin: 0;
        font-size: .9rem;
    }
`