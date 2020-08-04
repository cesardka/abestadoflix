import React  from 'react';
import styled from 'styled-components';
import TextoSeparado from '../TextoSeparado';

const LoadingWrapper = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    min-height: 50vh;
`;

function Loading() {
    return (
        <LoadingWrapper>
            <TextoSeparado texto="Calma, abestado..." label="Text" role="Loading" />
        </LoadingWrapper>
    )
}

export default Loading;