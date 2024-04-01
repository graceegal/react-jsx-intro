"use strict";

function Tweet({ tweets }) {
  const styles = {
    color: "green",
    backgroundColor: "red"
  };

  return (
    <ul style={styles}>
      {tweets.map(t => {
        return <li>
          <span>{t.username}</span><br />
          <span>{t.name}</span><br />
          <span>{t.date}</span><br />
          <span>{t.message}</span><br />
        </li>
      })}
    </ul>
  );
}