/*eslint-disable*/
import React from "react";
import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./ChatFeed";

import LoginForm from "./LoginForm";

import "../styles/Apps.css";

const projectID = "6ae581e3-d915-4c62-9c91-fee25114a39d";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      // userName={localStorage.getItem("username")}
      userName="rahul"
      userSecret="12341234"
      // userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
    />
  );
};

export default App;
