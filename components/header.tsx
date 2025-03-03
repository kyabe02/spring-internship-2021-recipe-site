/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


export const Header: FC = () => {

    function handleSaerch() {
        <Link href={"./search/"}></Link>
    }

    const Header = styled.div({
        backgroundColor: '#ffda71',
        height: '50px',
        position: 'fixed',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        transform: 'translate(-8px, -10px)',
        borderBottom: 'solid',
    });

    const Logo = styled.a({
        float: 'left',
        margin: 'auto 0 auto 30px',
        fontSize: 'large',
        textDecoration: 'none',
        color: 'black',
    });

    const SearchContainer = styled.form({
        boxSizing: 'border-box',
        position: 'relative',
        border: '1px solid #999',
        display: 'block',
        borderRadius: '20px',
        height: '35px',
        width: '170px',
        overflow: 'hidden',
        margin: 'auto 20px',
    })

    const Search = styled.input({
        border: 'none',
        height: '40px',
        paddingLeft: '1.1em',
        width: '120px',
        marginTop: '-2px',
        marginLeft: '-2px',
    });

    const Submit = styled.button({
        cursor: 'pointer',
        border: 'none',
        background: '#3879D9',
        color: '#fff',
        position: 'absolute',
        width: '2.5em',
        height: '3.0em',
        outline : 'none',
        right: '0px',
        top: '-3px',

      })
      
    

    return (
        <Header>
            <Logo href='/'>クックックパッド</Logo>
            <SearchContainer method='get' action='/search'>
            <Search placeholder='検索はこちら' name='q'/>
            <Submit type='submit'><FontAwesomeIcon icon={faSearch} /></Submit>
            </SearchContainer>
        </Header>
    );
};