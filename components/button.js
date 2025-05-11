import styled, { css } from 'styled-components'


export const StyleButton = styled.button`
    background-color: #9f4291;
    color: #fff;
    line-height: 20px;
    font-size: 11px;
    height: 36px;
    margin-bottom: 10px;
    text-align: center;
    padding: 10px 37px;
    letter-spacing: 0.5px;
    border-radius: ${ props => props.roundedFull ? "200px" : "10px"};
    border: 1px solid transparent;
    cursor: pointer;

    &:hover {
        background-color: #fff;
        border-color: #000;
        color: #000;
    }
`

export const StyleButtonLink = styled.a`
    background-color: #9f4291;
    color: #fff;
    line-height: 20px;
    font-size: 11px;
    height: 36px;
    margin-bottom: 20px;
    text-align: center;
    padding: 15px 37px;
    letter-spacing: 0.5px;
    border-radius: ${ props => props.roundedFull ? "200px" : "10px"};
    border: 1px solid transparent;
    cursor: pointer;
    transition: all .2s ease-in-out;

    ${ props => {
        return props.large && css`
            display: block;
            height: auto;
            max-width: 300px;
            font-size: 20px;
        `
    }}

    &:hover {
        background-color: #eee;
        /* border-color: #000; */
        font-weight: bold;
        color: #000;
        box-shadow: 0 2px 10px rgba(0,0,0, .4);
        transform: translateY(-4px);
    }

    &:active {
        transform: translateY(-2px);
    }
`


