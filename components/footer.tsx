import { FC } from "react";
import Link from "next/link";

type Props = {
    nextLink?: String;
    prevLink?: String;
}

export const Footer: FC<Props> = (props) => {
    return (
        <div className='footer'>
            {props.prevLink && <button>prev</button>}
            {props.nextLink && <button>next</button>}
        </div>
    );
};