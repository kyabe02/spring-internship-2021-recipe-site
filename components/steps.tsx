/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { FC } from "react";

type Props = {
    steps: string[],
}

export const Steps: FC<Props> = (props) => {
    const Step = styled.div({
        borderBottom: 'dashed 1px',
    })
    return (
        <div>
            {props.steps.map((step, i) => (
                <Step key={i}>{step}</Step>
            ))}
        </div>
    );
};