import React from 'react';

import Logo from '../../assets/Alfred.png';

import { Button } from './styles';

export interface Props {
    selected?: boolean;
    isHome?: boolean;
    isImg?: number;
    hasNotifications?: boolean;
    mentions?: number;
}

const ServerButton: React.FC<Props> = ({
    selected,
    isHome,
    isImg,
    hasNotifications,
    mentions
}) => {
    return (
        <Button
            isHome={isHome}
            isImg={isImg}
            hasNotifications={hasNotifications}
            mentions={mentions}
            className={selected ? 'active' : '' }
        >
            {isHome && <img src={Logo} alt="User" />}
            {isImg && <img src={`https://picsum.photos/id/${isImg}/350/350`} alt="User" />}
            
        </Button>
    )
}

export default ServerButton;