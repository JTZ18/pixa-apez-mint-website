import React from 'react'
import styled from 'styled-components' 

function Header() {
    return (
        <Container>
            <Wrapper>
                <h1>Logo Image</h1>
            </Wrapper>
        </Container>
    )
}

export default Header


const Container = styled.div`
    //display: flex;
    top: 0;
    align-items: center;
    justify-content: center;
    display: flex;
    z-index: -1;

`

const Wrapper = styled.div`
    //padding: 5px;
    background-color: rgba(255,255,255,0.2);
    //border: 1px solid #f8f8ff;
    backdrop-filter: blur(8px);
    border-radius: 15px;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
    margin-top: 20px;
    margin-left: 30px;
    margin-right: 30px;
    width: 300px;
    display: flex;
    flex: 1;
    z-index: -1;


    h1 {
        align-items: center;
        justify-content: center;
        font-size: 24px;
        display: flex;
        flex: 1;
        color: #433A38;
        z-index: 1;

    }
`

