import React from 'react';

import ServerButton from '../ServerButton';

import { Container, Separator }  from './styles';

const ServerList: React.FC = () => {
    return (
        <Container>
            <ServerButton isImg={3}/>

            <Separator/>

            {Array.from(Array(15).keys()).map((n) => (
                <ServerButton       
                isImg={n + 151}
                mentions={ (Math.random() >= 0.5)
                    ? Math.floor(Math.random() * (99 - 0 + 1)) + 0
                    : 0 
                } 
          />
        ))}
        </Container> 
    )
};

export default ServerList;