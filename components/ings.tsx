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
    return (
        <div>
            {props.ings.map((ing, i) => (
                <Ing key={i}>{ing.name}: {ing.quantity}</Ing>
            ))}
        </div>
    );
};