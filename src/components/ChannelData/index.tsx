import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMassage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Carlos Henrique"
            date="21/06/2020"
            content="Bora codar!"
          />
        ))}

        <ChannelMessage
          author="Alfred"
          date="21/06/2020"
          content={
            <>
              <Mention>@Carlos Henrique</Mention> Só se for agora !!
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversarem #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
