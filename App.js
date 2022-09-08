import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import './app.css'
import { useState, useEffect,useRef } from "react";
const App = () => {
  var colors = ['#16a085','#27ae60','#2c3e50','#f39c12','#e74c3c',
  '#9b59b6','#FB6964','#342224','#472E32','#BDBB99',
  '#77B1A9','#73A857'];
  const randomColor = useRef()
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')
  const url ="https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
     const getQuote = () => {
      fetch(url)
      .then(res => res.json())
       .then(data =>{
        let number = Math.floor(Math.random() * 103);
        const quotesData = data.quotes[number]
        setQuote(quotesData.quote) 
        setAuthor(quotesData.author)
       })
     }
  useEffect(() => {
        getQuote()
      }, [])
  useEffect(() => {
        randomColor.current.style.color =
         colors[Math.floor(Math.random() * colors.length )]
        
      }, [getQuote])

    return ( 
      <div className="app" rel="randomColor">
        <div id="quote-box">
        <div className='quoteSection' ref={randomColor}>
        <h1  id="text">"{quote}</h1>
         <p id="author">-{author}</p>
        </div>
        <div className='inline'>
         <button id="tweet-quote">
          <a 
          
          href={`https://twitter.com/compose/tweet?text=${quote}%0A%0A-${author}.`}
          target="_blank"
          rel="nooperner noreferrer"
          >
             Tweet it
            <ShareTwoToneIcon className="icon"/>
            </a>
            </button>
        <button id="new-quote" onClick={getQuote}>New Quote</button>
        </div>
        </div>
         
    </div> );
}
 
export default App;