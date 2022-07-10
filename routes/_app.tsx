/** @jsx h */
import { h } from "preact";
import styles from "./App.css.ts";
import { Head } from "$fresh/runtime.ts";

interface Props {
  Component: Function; // Yeah this is shit i know, just afraid of it not compiling when i use "any"
}

export default function App(props: Props) {
  return (
    <div style={styles.App.style}>
      {props.Component()}
      <Head>
        <link href="/index.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans&family=Open+Sans:wght@300;400&family=Poppins:wght@100;200;300;400;600&family=Roboto:wght@100;300&display=swap"
          rel="stylesheet"
        />
      </Head>
    </div>
  );
}
