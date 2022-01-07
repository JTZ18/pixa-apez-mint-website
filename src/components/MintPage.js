import { getByPlaceholderText } from '@testing-library/dom'
import React, { useState } from 'react'
import styled from 'styled-components'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function MintPage() {
    const [amountToMint, setAmountToMint] = useState(0)
    return (
        <Container>
          <MintWrapper>
            <CustomImage src="/images/placeholder.gif"/>
            <h3>AMOUNT TO MINT</h3>
            <ButtonGroup>
                <LeftButton onClick={() => setAmountToMint(amountToMint - 1)}/>
                <p style={{color: "#433A38"}}>{amountToMint}</p>
                <RightButton onClick={() => setAmountToMint(amountToMint + 1)}/>
            </ButtonGroup>
            <MintButton>
                MINT
            </MintButton>
          </MintWrapper>
        </Container>
    )
}

export default MintPage

const Container = styled.div`
    left: 0;
    right: 0;
    bottom: 0;
    display: grid;
    grid-template-columns: repeat(1,minmax(0, 1));
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    padding-top: 100px;
`

const MintWrapper = styled.div`
    background-color: rgba(255,255,255,0.2);
    border-radius: 15px;
    backdrop-filter: blur(8px);
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h3 {
        color: #433A38;
    }

`

const CustomImage = styled.img`
    height: 300px;
    padding-top: 30px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 30px;
    border-radius: 45px;
    display: flex;
`

const ButtonGroup = styled.div`
    //border: 1px solid #F3EFEE;
    background-color: rgba(255,255,255,0.3);
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    margin-bottom: 15px;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    width: 80%

`

const LeftButton = styled(ChevronLeftIcon)`
    padding-left: 25px;
    cursor: pointer;
    color: #433A38;
`
const RightButton = styled(ChevronRightIcon)`
    padding-right: 25px;
    cursor: pointer;
    color: #433A38;
`
const MintButton = styled.button`
    cursor: pointer;
    width: 80%;
    border: none;
    background-color: rgba(255,255,255,0.3);
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    padding: 10px 10px;
    letter-spacing: .15rem;
    font-weight: 600;
    margin-bottom: 30px;
    color: #433A38;
`
