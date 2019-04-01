import styled, { css } from 'styled-components';

export const MainBackground = styled.img`
    position: relative,
    url: url(${props => props.src}),
    opacity: 0,
    width:100%
`

export const Container = styled.div`
    padding: 2em;
`

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    ${props =>
        props.show &&
        css`
            background: lime;
        `
    };
    ${props =>
        props.centered &&
        css`
            justify-content: center;
        `
    };
    ${props =>
        props.padded &&
        css`
            padding: 20px;
        `
    };
`;

export const Text = styled.div`
    ${props =>
        props.medium &&
        css`
            font-size: 1.3em;
        `
    };
    ${props =>
        props.large &&
        css`
            font-size: 3em;
        `
    };
    ${props =>
        props.verylarge &&
        css`
            font-size: 6em;
        `
    };
    ${props =>
        props.centered &&
        css`
            text-align: center;
        `
    };
`

export const Button = styled.button`
    background: red;
    border-radius: 3px;
    border: 2px solid red;
    color: white;
    margin: 0 1em;
    padding: 0.25em 1em;
    

    ${props =>
        props.large &&
        css`
            font-size: 1.5em;
        `};
    ${props =>
        props.medium &&
        css`
            font-size: 1em;
        `};
`

export const LogoImage = styled.img`
    url: url(${props => props.src}),
    width: ${props => props.height}
`;