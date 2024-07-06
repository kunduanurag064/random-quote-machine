import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [colorTheme, setTheme] = useState("black");
  const [change,setChange] = useState(true);
  const [quote,setQuote] = useState('');
  const [writer,setWriter] = useState('');
  const myQuotes = [
    { "quote": "The only way to do great work is to love what you do.", "writer": "Steve Jobs" },
    { "quote": "The journey of a thousand miles begins with one step.", "writer": "Lao Tzu" },
    { "quote": "Life is what happens when you're busy making other plans.", "writer": "John Lennon" },
    { "quote": "In the end, we will remember not the words of our enemies, but the silence of our friends.", "writer": "Martin Luther King Jr." },
    { "quote": "The purpose of our lives is to be happy.", "writer": "Dalai Lama" },
    { "quote": "Life is really simple, but we insist on making it complicated.", "writer": "Confucius" },
    { "quote": "Success is not how high you have climbed, but how you make a positive difference to the world.", "writer": "Roy T. Bennett" },
    { "quote": "In three words I can sum up everything I've learned about life: it goes on.", "writer": "Robert Frost" },
    { "quote": "Good friends, good books, and a sleepy conscience: this is the ideal life.", "writer": "Mark Twain" },
    { "quote": "The best way to predict your future is to create it.", "writer": "Peter Drucker" },
    { "quote": "Happiness is not something ready made. It comes from your own actions.", "writer": "Dalai Lama" },
    { "quote": "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", "writer": "Buddha" },
    { "quote": "The only limit to our realization of tomorrow is our doubts of today.", "writer": "Franklin D. Roosevelt" },
    { "quote": "We do not remember days, we remember moments.", "writer": "Cesare Pavese" },
    { "quote": "Life isn't about finding yourself. Life is about creating yourself.", "writer": "George Bernard Shaw" },
    { "quote": "You must be the change you wish to see in the world.", "writer": "Mahatma Gandhi" },
    { "quote": "Life is a journey that must be traveled no matter how bad the roads and accommodations.", "writer": "Oliver Goldsmith" },
    { "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.", "writer": "Nelson Mandela" },
    { "quote": "To live is the rarest thing in the world. Most people exist, that is all.", "writer": "Oscar Wilde" },
    { "quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us.", "writer": "Ralph Waldo Emerson" },
    { "quote": "Your time is limited, don't waste it living someone else's life.", "writer": "Steve Jobs" },
    { "quote": "Do not take life too seriously. You will never get out of it alive.", "writer": "Elbert Hubbard" },
    { "quote": "It is our choices that show what we truly are, far more than our abilities.", "writer": "J.K. Rowling" },
    { "quote": "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", "writer": "Helen Keller" },
    { "quote": "The only impossible journey is the one you never begin.", "writer": "Tony Robbins" },
    { "quote": "To love and be loved is to feel the sun from both sides.", "writer": "David Viscott" },
    { "quote": "Life is short, and it is up to you to make it sweet.", "writer": "Sarah Louise Delany" },
    { "quote": "Life is ten percent what happens to us and ninety percent how we respond to it.", "writer": "Charles R. Swindoll" },
    { "quote": "Life itself is the most wonderful fairy tale.", "writer": "Hans Christian Andersen" },
    { "quote": "The best revenge is massive success.", "writer": "Frank Sinatra" }
  ];
  

  const colors = ["Crimson","Teal","Turquoise","Salmon","Olive","Gold","Coral","Periwinkle","Lavender","Sienna","Fuchsia","Chartreuse"];
  

  useEffect(()=>{
    showQuote();
  },[change])

  const showQuote = ()=>{
    const indexofquote = Math.floor(Math.random()*30);
    setQuote(myQuotes[indexofquote].quote);
    setWriter(myQuotes[indexofquote].writer);

    const indexofcolor = Math.floor(Math.random()*12);
    setTheme(colors[indexofcolor]);
  }

  return (
    <>
      <div className="container" style={{backgroundColor:colorTheme}}>
        <div className="myquote-box" style={{color:colorTheme}}>
          <div className="quotetext">`{quote}`
          <br/>
          <h3 style={{float:"right",marginRight:"30px"}}>-{writer}</h3>
          </div>
              <br/>
          <div className="function-buttons">
            <button className='social-media-buttons' style={{color:"white",backgroundColor:colorTheme}}>Twitter</button>
            <button className='social-media-buttons' style={{color:"white",backgroundColor:colorTheme}}>Insta</button>
            <button className='newquotebutton' onClick={(e)=>setChange(!change)} style={{color:"white",backgroundColor:colorTheme}}>New Quote</button>
          </div>


        </div>
      </div>
    </>
  )
}

export default App
