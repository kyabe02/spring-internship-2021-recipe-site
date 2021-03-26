/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { FC } from "react";

type Props = {
    ings?: {
        name: string,
        quantity: string,
    }[]
}

export const Ings: FC<Props> = (props) => {
    const Ing = styled.tr({
        ':nth-of-type(odd)': {
            backgroundColor: '#eee',
        }
    })

    const IngTable = styled.table({
        borderSpacing: 0,
        width: '100%',
        border: 'dotted 3px gray',
        borderWidth: '4px 0',
    })

    const Td = styled.td({
        padding: '10px',
    })

    const Bold = styled.span({
        fontWeight: 'bold',
    })

    if(props.ings === null){
        return(
            <div>
                <h3>材料</h3>
                <IngTable>
                    <tbody>                      
                        <Ing><Td align='left'>----</Td><Td align='right'>---- </Td></Ing>
                        <Ing><Td align='left'>----</Td><Td align='right'>---- </Td></Ing> 
                        <Ing><Td align='left'>----</Td><Td align='right'>---- </Td></Ing>                  
                    </tbody>
                </IngTable>
            </div>
        )
    }
    return (
        <div>
            <h3>材料</h3>
            <IngTable>
                <tbody>
                    {props.ings.map((ing, i) => (
                        ing.name &&
                        <Ing key={i}>
                            {ing.quantity ? <Td align='left'>{ing.name}</Td> : <Bold><Td align='left'>{ing.name}</Td></Bold>}
                            {ing.quantity && <Td align='right'>{ing.quantity} </Td>}
                        </Ing>
                        
                    ))}
                </tbody>
            </IngTable>
        </div>
    );
};