import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios';

export default function Home() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState('');
  return (
    <div className={styles.container}>
      <Head>
        <title>Medium to Markdown</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Medium to Markdown
        </h1>
        <h3>Input URL:</h3>
        <input style={{margin:"20px", width:"80%"}} value={url} onChange={e=>setUrl(e.target.value)}/>
        <button style={{margin:"20px", width:"80px", height:"40px"}} onClick={()=>{
          axios.get('/api/mediumToMarkdown?url=' + url).then(ret=>{
            console.log(ret.data);
            setUrl('');
            setResult(ret.data);
          }).catch(console.error);

        }}>Convert</button>
        <textarea value={result} readOnly style={{margin:"20px", width:"100%", height:"80%"}}  rows={10}/>
      </main>
    </div>
  )
}
