import Styled from 'styled-components';

export const Wrapper = Styled.div`
    padding-bottom: 1.2rem;
    color: white;
    border-bottom: solid 1px rgb(254,69,49);

    h1 {
        font-size: 1.7rem;
        margin-bottom: 1rem;
        font-weight: 900;
    }

    div {
        display: flex;
        align-items: center;
    }

    img {
        height: 100px;
        width: 100px;
        border-radius: 50%;
        margin-right: 1.2rem;
        margin-bottom: 0;
    }

    h2 {
        margin: 0;
        font-size: 1.4rem;
    }

    p {
        font-family: Monserrat, sans-serif;
        margin: 0;
        font-size: 1em;
    }
`