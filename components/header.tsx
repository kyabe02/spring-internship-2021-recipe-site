/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { FC } from "react";



export const Header: FC = () => {
    const Header = styled.div({
        backgroundColor: 'blue',
        height: '50px',
        position: 'fixed',
        width: '100%',
    })
    return (
        <Header>
            クックックパッド
        </Header>
    );
};