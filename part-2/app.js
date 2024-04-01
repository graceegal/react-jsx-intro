"use strict";

function App() {
  return (
    <Tweet tweets={ [
      { username: "user1", name: "u1", date: "4-1-24", message: "first message!"},
      { username: "user2", name: "u2", date: "4-2-24", message: "second message!"},
      { username: "user3", name: "u3", date: "4-3-24", message: "third message!"},
    ]} />
  )
}