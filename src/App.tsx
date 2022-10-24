import styles from './App.module.scss';

import {cipsumSentence, cipsumParagraph} from "./cipsum";
import React, {useEffect, useState} from "react";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const initial = [
    cipsumSentence(), cipsumSentence(3), cipsumSentence(6), cipsumParagraph(4)
  ]

  const [texts] = useState(initial)

  const copy = (index: number, e?: React.MouseEvent) => {

    let text = texts[index];
    if (Array.isArray(text)) {
      text = text.join(' ');
    }
    navigator.clipboard.writeText(text)
    if (e) {
      const button = e.target as HTMLButtonElement;
      button.innerText = '...';
      setTimeout(() => button.innerText = '✔', 200);
      setTimeout(() => button.innerText = 'copy', 2000);
    }

  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const key = parseInt(e.key);
      if (key > 0 && key < 4) {
        copy(key - 1);
        toast("Copied!")

      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, []);

  return (
      <div className={styles.app}>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
        <h1>Corporate Ipsum</h1>

        {texts.map((text, i) => <div className={styles.row}>
          <span className={styles.number}>
              {i + 1}
            </span>
          <span className={styles.text}>
            {
              Array.isArray(text) ? text.map((p) => <p>{p}</p>) :
                  <p>{text}</p>
            }</span>
          <button {...(i === 0 && {autoFocus: true})} className={styles.button} onClick={(e) => copy(i, e)}>Copy</button>
        </div>)}
        <em>You can also copy by pressing "1", "2", "3" or "4".</em>

      </div>
  )
}

export default App
