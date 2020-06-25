import React from 'react';

import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettingsIcon } from './styles';

const UserInfo: React.FC = () => {
    return (
        <Container>
            
            <Profile>
                <Avatar>
                    <img src={'https://picsum.photos/id/3/350/350'} alt="User" />
                </Avatar>
                <UserData>
                    <strong>Dev Carlos</strong>
                    <span> #3377 </span>
                </ UserData>
            </ Profile>

            <Icons>
                <MicIcon />
                <HeadphoneIcon />
                <SettingsIcon />
            </Icons> 
        </Container>
    )
}

export default UserInfo;

