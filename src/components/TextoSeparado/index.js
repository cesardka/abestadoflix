import React                 from 'react';
import styled, { keyframes } from 'styled-components';

const letrasPulantes = keyframes`
    0% {
        bottom: -0.2em;
        opacity: 0.5;
        font-size: 30px;
    }

    50% {
        bottom: 0.2em;
        opacity: 1;
        font-size: 50px;
    }

    100% {
        bottom: -0.2em;
        opacity: 0.5;
        font-size: 30px;
    }
`;

const LetraWrapper = styled.span`
    letter-spacing: 0.6em;
`;

const LetraSpan = styled.span`
    color: tomato;
    position: relative;
    opacity: 0;
    text-shadow: 2px 2px #ff0000;
    animation: ${letrasPulantes} 2s forwards infinite;
    :nth-child(n)  { color: yellow;        }
    :nth-child(2n) { color: lightseagreen; }
    :nth-child(3n) { color: orange;        }
    :nth-child(4n) { color: dodgerblue;    }
    :nth-child(5n) { color: blueviolet;    }
`;

function TextoSeparado({ texto, label, role }) {
    return (
        <LetraWrapper
            aria-label={label}
            role={role}
        >
        {texto.split("").map((letra, i) => {
            let delay = {"animation-delay": (0.5 + i / 10) + "s"}

            return (
                <LetraSpan
                    aria-hidden="true"
                    key={`${i}_${letra}`}
                    style={delay}
                >
                    {letra}
                </LetraSpan>
            );
        })}
        </LetraWrapper>
    );
}

export default TextoSeparado;