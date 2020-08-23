import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>Amiguito mira estos recursos para el manipular el estado con React:</p>
      <ul>
        <li>
          <a href="https://medium.com/@leomedina.dev/react-administrar-el-estado-de-tu-app-bb560623fc55">
            Article en español
          </a>
        </li>
        <li>
          <a href="https://kentcdodds.com/blog/application-state-management-with-react">
            Article gringo muy bueno Primera parte
          </a>
        </li>
        <li>
          <a href="https://kentcdodds.com/blog/how-to-use-react-context-effectively">
            Article gringo muy bueno Segunda parte
          </a>
        </li>
      </ul>
    </div>
  );
}
