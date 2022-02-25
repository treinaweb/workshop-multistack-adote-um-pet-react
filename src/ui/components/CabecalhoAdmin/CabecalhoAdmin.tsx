import { Link, Box } from '@mui/material';
import NextLink from 'next/link';
import {
    CabecalhoContainer,
    Logo,
    LinksContainer
} from './CabecalhoAdmin.style';

export default function CabecalhoAdmin(){
    return (
        <CabecalhoContainer>
            <div>
                <Logo src={'/imagens/logo.svg'} alt={'Adote um Pet'} />
                <LinksContainer>
                    <Link component={NextLink} href={'/pets/cadastro'} >
                        <a>Cadastrar Pet</a>
                    </Link>
                    <Link component={NextLink} href={'/pets/relatorio'} >
                        <a>
                            Relatório{' '}
                            <Box
                                component={'span'}
                                sx={{display: { sm: 'initial', xs: 'none'}}}
                            >
                            de Adoção
                            </Box>
                        </a>
                    </Link>
                </LinksContainer>
            </div>
        </CabecalhoContainer>
    )
}