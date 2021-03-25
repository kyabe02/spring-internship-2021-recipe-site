/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { FC } from "react";

type Props = {
    ings: {
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
    })

    const Td = styled.td({
        padding: '10px',
    })

    const Bold = styled.span({
        fontWeight: 'bold',
    })

    console.log(props.ings);
    return (
        <div>
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