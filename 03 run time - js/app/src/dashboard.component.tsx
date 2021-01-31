import React from "react";
import { css } from "emotion";
import WorldImage from "./assets/img/world.svg";
import { MicrofrontendRender } from "./microfrontend-render.component";

const styles = {
  container: css`
    margin: 1rem;
    display: grid;
    grid-auto-flow: row;
    grid-gap: 2rem;
    justify-content: center;
    align-items: center;
  `,
  header: css`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 1rem;
    justify-content: center;
    align-items: center;
  `,
  title: css`
    font-family: Anton, san-serif;
    font-size: 3rem;
  `,
  image: css`
    width: 3rem;
    height: 3rem;
  `,
  widget: css``,
};

export const Dashboard: React.FC = () => {
  const [name] = React.useState("Dashboard");

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <img src={WorldImage} className={styles.image} />
        <h1 className={styles.title}>{`Welcome to my ${name}!`}</h1>
      </div>
      <MicrofrontendRender microfrontend="MicrofrontendClock" />
      <MicrofrontendRender microfrontend="MicrofrontendQuote" />
    </main>
  );
};
