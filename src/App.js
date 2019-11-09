import React, {useEffect, useState} from 'react';
import axios from 'axios';
import "./App.css"
import api from "./api"
import quotes from "./quotes"
import QuoteAndAuthor from './QuoteAndAuthor';

// const App = () => {
//     const [message, setMessage] = useState([]);
    
//     useEffect(() => {
//       axios.get("https://api.chucknorris.io/jokes/random").then(resp => {

//     console.log(resp.data.icon_url);
//     }); 
//   })

// return (
//     <div>
      
//     </div>
//   )
// }
// export default App
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: quotes[0].quote,

    };
  }
  randomQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
    
  }
  shuffleQuotes(array){
    return array.sort(()=>Math.random()-0.5)
  }

  handleClick = () => {
    const generateRandomQuote = this.randomQuote();
    this.setState({
      quote: generateRandomQuote.quote,
      author: generateRandomQuote.author
    });
    this.shuffleQuotes(quotes)
  };

  randomColor() {
    const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`;
    return color;
  }
  
  render() {
    return (
      <div>
        <QuoteAndAuthor
          displayColor={this.randomColor}
          handleClick={this.handleClick}
          {...this.state}
        />
      </div>
    );
  }
}

export default App;