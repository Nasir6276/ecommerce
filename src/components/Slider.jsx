import React from 'react'
import { styled } from 'styled-components'
import ArrowLeftOutlinedIcon from '@material-ui/icons/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
`

const Slider = () => {
  return (
    <Container>
        <Arrow>
            <ArrowLeftOutlinedIcon />
        </Arrow>
        <Arrow>
            <ArrowRightOutlinedIcon />
        </Arrow>
    </Container>
  )
}

export default Slider