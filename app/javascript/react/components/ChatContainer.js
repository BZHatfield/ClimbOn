import React, { useState, useEffect } from 'react';
import Message from './Message';
import TextFieldWithSubmit from './TextFieldWithSubmit';

const ChatContainer = (props) => {
  const [user, setUser] = useState({})
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch("/api/v1/users/current", {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then((response) => {
      let { ok } = response;
      if (ok) {
        return response.json();
      }
    })
    .then((data) => {
      setUser(data)
    })

    App.chatChannel = App.cable.subscriptions.create(
      // Info that is sent to the subscribed method
      {
        channel: "ChatChannel",
        chat_id: 1
        // currently this is hardcoded
        // If you had router to a show page, you could do:
        // chat_id: props.match.params["id"]
      },
      {
        connected: () => console.log("ChatChannel connected"),
        disconnected: () => console.log("ChatChannel disconnected"),
        received: data => {
          // debugger
          // Data broadcasted from the chat channel
          console.log(data)
          handleMessageReceipt(data)
        }
      }
    );
  }, [])


  const handleMessageReceipt = (messagesObjects) => {
    setMessages(messagesObjects)
  }

  const handleClearForm = () => {
    setMessage("")
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // debugger
    // Send info to the receive method on the back end
    App.chatChannel.send({
     message: message,
     user: user
    })

    handleClearForm();
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value)
  }

  let messagesComponents = messages.map(message => {
    return(
      <Message
        key={message.messageId}
        username={message.user.username}
        message={message.message}
      />
    )
  }, this);

  return(
    <div>
      <div className='callout chat' id='chatWindow'>
        {messagesComponents}
      </div>
      <form onSubmit={handleFormSubmit}>
        <TextFieldWithSubmit
          content={message}
          name='message'
          handlerFunction={handleMessageChange}
        />
      </form>
    </div>
  );
}

export default ChatContainer;
