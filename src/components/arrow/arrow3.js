import { Box} from '@mui/material';
import styled from 'styled-components'

const Arrow3 = ({ top, img }) => {
    return (
        <StyledContainer top={top}>
            <img src={img}></img>
        </StyledContainer>
    )
}

const StyledContainer = styled(Box)`
    position: absolute;
    width: 110px;
    height: 38.66px;
    left: 185px;
`
export default Arrow3