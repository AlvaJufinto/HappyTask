import { FC } from 'react';
import { Link } from "react-router-dom";

import Image from '../atoms/Image';


interface IState {
    LinkIconSrc: string,
    LinkTo: string,
}

const LinkIcon: FC<IState> = ({ LinkIconSrc, LinkTo }) => {
    return (
        <Link to={LinkTo}>
            <Image imageSrc={LinkIconSrc} />
        </Link>
    );
}

export default LinkIcon;