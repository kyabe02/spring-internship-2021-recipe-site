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
    const Ing = styled.div({
        borderBottom: 'dashed 1px',
    })
    const Bold = styled.span({
        fontWeight: 'bold',
    })

    console.log(props.ings);
    return (
        <div>
            {props.ings.map((ing, i) => (
                <Ing key={i}>{ing.quantity ? `${ing.name}:${ing.quantity}` : <Bold>{ing.name}</Bold>}</Ing>
            ))}
        </div>
    );
};