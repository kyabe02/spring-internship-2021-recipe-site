/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { FC } from "react";
import Link from "next/link";

type Props = {
    nextLink?: String;
    prevLink?: String;
}

export const Footer: FC<Props> = (props) => {

    const Footer = styled.div({
        width: '100%',
        height: '50px',
        textAlign: 'center',
        backgroundColor: '#ffda71',
    })

    const Logo = styled.a({
        margin: 'auto',
        fontSize: 'large',
        textDecoration: 'none',
        color: 'black',
    })

    return (
        <Footer>
            <Logo href="/">クックックパッド</Logo>
        </Footer>
    );
};