import { Box} from '@mui/material';
import styled from 'styled-components'

const Cloud_Text = ({ pos_x, pos_y, text1,text2 }) => {
    return (
        <StyledContainer left={pos_x} top={pos_y}>
            <Text1_style>{text1}</Text1_style>
            <Text2_style>{text2}</Text2_style>
        </StyledContainer>
    )
}

const Text2_style = styled(Box)
`
position: static;
width: 713.37px;
height: 52px;
left: 0px;
top: 161px;

font-family: 'Euclid Circular A', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 22px;
line-height: 120%;
/* or 26px */


color: #8779B1;


/* Inside Auto Layout */

flex: none;
order: 1;
flex-grow: 0;
margin: 32px 0px;
`

const Text1_style = styled(Box)
`
position: static;
width: 713.37px;
height: 129px;
left: 0px;
top: 0px;

font-family: 'Euclid Circular A', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 120%;
/* or 43px */


/* wgite */

color: #FFFFFF;


/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 32px 0px;
`

const StyledContainer = styled(Box)`
    position: absolute;
    width:713.37px;
    height:213px;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
`

export default Cloud_Text