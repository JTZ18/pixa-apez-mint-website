import React from 'react'
import styled from 'styled-components'
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
    return (
        <Container>
            <IconWrapper>
                <img src ="/images/discord-logo.png"/>
            </IconWrapper>
            <IconWrapper>
                <img src ="/images/twitter-logo.png"/>
            </IconWrapper>
            <IconWrapper>
                <img src ="/images/opensea-logo.png"/>
            </IconWrapper>
            <IconWrapper>
                <img src ="/images/etherscan-logo.png"/>
            </IconWrapper>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    bottom: 0;
    left: 0;
    right: 0;
    margin-top: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255,255,255,0.2);
    //border: 1px solid #f8f8ff;
    backdrop-filter: blur(8px);
    border-radius: 15px;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
    margin-left: 250px;
    margin-right: 250px;


`
const IconWrapper = styled.div`
    height: 20px;
    padding: 25px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        height: 30px;
        cursor: pointer;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

        &:hover {
            transform: scale(1.25);
        }
    }
`