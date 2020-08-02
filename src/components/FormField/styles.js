import styled, { css, keyframes } from 'styled-components';

const BounceKeyframes = keyframes`
    0% {
        transform: scale(1) rotateY(0deg);
    }

    20% {
        transform: scale(1.05) rotateY(20deg);
    }

    100% {
        transform: scale(1) rotateY(0deg);
    }
`;

export const Wrapper = styled.div`
    position: relative;
    textarea {
        min-height: 150px;
    }
    input[type="color"] {
        padding-left: 56px;
    }
`;

export const Label = styled.label``;
Label.Text = styled.span`
    color: #E5E5E5;
    height: 57px;
    position: absolute;
    top: 0;
    left: 16px;

    display: flex;
    align-items: center;

    transform-origin: 0% 0%;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;

    transition: .1s ease-in-out;
`;

export const Input = styled.input`
    background: #535850;
    color: #F5F5F5;
    display: block;
    width: 100%;
    height: 57px;
    font-size: 18px;

    outline: 0;
    border: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid #535850;

    padding: 16px 16px;
    margin-bottom: 45px;

    resize: none;
    border-radius: 4px;
    transition: border-color .5s;

    &:focus {
        border-bottom-color: var(--primary);
        animation: ${BounceKeyframes} 1s ease-out;
    }
    &:focus:not([type='color']) + ${Label.Text} {
        color: #CACACA;
        transform: scale(.6) translateY(-10px);
    }
    ${({ value }) => {
        const hasValue = value.length > 0;
        return hasValue && css`
            &:not([type='color']) + ${Label.Text} {
                transform: scale(.6) translateY(-12px);
            }
        `;
    }}
`;