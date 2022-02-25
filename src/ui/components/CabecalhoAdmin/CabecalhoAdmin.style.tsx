import { styled } from '@mui/material';

export const CabecalhoContainer = styled('header')`
    height: 115px;
    background-color: #f6f6f6;
    padding: ${({ theme }) => theme.spacing(2) };

    div {
        height: 100%;
        max-width: 970px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: ${({ theme }) => theme.spacing(2) };
    }

    a{
        font-size: 14px;
    }
`;

export const Logo = styled('img')`
    width: 125px;
`;

export const LinksContainer = styled('nav')`
    display: flex;
    gap: ${({ theme }) => theme.spacing(2) };
    flex-wrap: wrap;
    justify-content: flex-end;
`;