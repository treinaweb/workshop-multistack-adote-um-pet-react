import { styled } from '@mui/material';

export const CabecalhoContainer = styled('header')`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #f0f0f0;
    padding: ${({theme}) => theme.spacing(6)};
`;



export const Logo = styled('img')`
    width: 230px;
`;