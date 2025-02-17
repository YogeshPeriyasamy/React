
import './App.css'
import Message from './Message'
function App() {
 //here we r retruning jsx which looks like html 
 //jsx==javascript xml
 // we can return duynamic content
 let name=''
 if(name)return <div><Message></Message></div>
 else return <h1> hello world</h1>

}

export default App
