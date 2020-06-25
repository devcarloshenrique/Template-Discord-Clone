import React from 'react';

import { Container, Role, User, Avatar } from './styles';

var faker = require('faker');
var randomName = () => {
  return faker.name.findName(); 
}
interface UserProps {
    nickname: string;
    isBot?: boolean;
    isImg?: number;
};


const UserRow: React.FC<UserProps> = ( { nickname, isBot, isImg}) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''}>

                {isImg && <img src={`https://picsum.photos/id/${isImg}/350/350`} alt="User" />}

            </ Avatar> 

            <strong>{ nickname }</strong>

            {isBot && <span> Bot </span>}
        </User>
    );
};

const UserList: React.FC = () => {
    return (
        <Container>
            <Role> Disponivel - 2 </ Role>
            
            <UserRow nickname="Dev Carlos" isImg={3}/>
            <UserRow nickname="Alfred" isBot isImg={1}/>

            <Role> Offline - 15 </ Role>


            {Array.from(Array(15).keys()).map((n) => (
                <UserRow nickname={randomName()}  isImg={n + 151} />
        ))}

        </Container>
    );
};

export default UserList;

