import { styled } from '@mui/material';

export const TituloStyled = styled('h1')`
    font-size: 20px;
    text-align: center;
    margin-top: ${({ theme }) => theme.spacing(5) };
`;

export const Subtitulo = styled('h2')`
    font-size: 18px;
    text-align: center;
    margin-bottom: ${({ theme }) => theme.spacing(5) };
    font-weight: normal;
    color: ${({ theme }) => theme.palette.text.secondary };
`;