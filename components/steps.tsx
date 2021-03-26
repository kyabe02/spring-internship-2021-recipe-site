/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { FC } from "react";

type Props = {
    steps?: string[],
}

export const Steps: FC<Props> = (props) => {
    const Step = styled.li({
        borderBottom: 'dashed 1px',
        padding: '10px',
    });

    const Ol = styled.ol({
        listStylePosition: 'inside',
        padding: 0,
    })

    if(props.steps === null){
        return(
            <div>
                <h3>手順</h3>
                <Ol>
                <Step>------------</Step>
                <Step>------------</Step>
                <Step>------------</Step>
                </Ol>
            </div>
        )
    }
    return (
        <div>
            <h3>手順</h3>
            <Ol>
            {props.steps.map((step, i) => (
                <Step key={i}>{step}</Step>
            ))}
            </Ol>
        </div>
    );
};