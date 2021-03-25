/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { FC } from "react";



export const Header: FC = () => {
    const Header = styled.div({
        backgroundColor: 'lightgray',
        height: '50px',
        position: 'fixed',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        transform: 'translate(-8px, -10px)',
    });

    const Logo = styled.div({
        float: 'left',
        margin: 'auto 30px',
        fontSize: 'large',
    });

    const Search = styled.input({
        float: 'right',
        width: '200px',
        height: '35px',
        margin: 'auto 20px auto 0',
    })
    return (
        <Header>
            <Logo>クックックパッド</Logo>
            <Search placeholder='検索はこちら'　/>
        </Header>
    );
};