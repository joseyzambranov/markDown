import './App.css';
import React, {useState} from "react";
import {marked} from "marked";
import { render } from "react-dom";
import  { Prism } from "prism-react-renderer";


marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
});
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

const firstText =`# Hello I am Jose Zambrano!
## This is my markdown
### you can learn more about marked in [links](https://www.npmjs.com/package/marked) 
### in React it is installed 

\`npm i marked\`

### the following function is used 

\`\`\`js
function Preview ({markedDown}){
  return(
  <div dangerouslySetInnerHTML={{__html: marked.parse(markedDown)}}></div>
  )} 
\`\`\` 
### The frameworks used are:
- React 
- Boostrap 
- marked

### this is my [Portfolio](https://josezambrano.netlify.app/)  ![jose zambrano Logo](https://josezambrano.netlify.app/assets/img/iconazul.svg)
> "Do not be anxious about tomorrow, for tomorrow will be anxious for itself. Let the day's own trouble be sufficient for the day."

> Jesus Christ

**Thank you!**
`

function App() {
  const [text, setText] = useState(firstText);
  
  return(

  
  <div className="text-center px-4">  
 <h1 className='title'>Mark Down Previewer</h1>
 <textarea id="editor" name="text" value={text} onChange={(e)=>setText(e.target.value)} rows="5" cols="20"></textarea>
 <h2 className="subtitle">Output</h2>
 <Preview id="preview" markedDown={text}/>
 </div>
 
  );
}
function Preview ({markedDown}){
  return(
  <div dangerouslySetInnerHTML={{__html: marked(markedDown,{renderer:renderer})}} id ="preview">
  </div>
  )} 

export default App;
