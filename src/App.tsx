
import './App.css';
import Message from './Message';
import ListGroup from './components/ListGroup';
function App() {
  interface Exp{
    heading:string;
    word:string;
    date:string;
    month:string;
    year:string;
  }
  let date=new Date(2025,1,1).getDate().toString();
  let month=new Date(2025,1,1).getMonth().toString();
  let year=new Date(2025,1,1).getFullYear().toString();
   let messages:Exp[]=[{heading:"water",word:"cold",date:date,month:month,year:year},{heading:"fire",word:"hot",date:date,month:month,year:year}];
    return (
      <div>
        <div> 
          {
            messages.map((mess)=>{
              return(
              <div>
              <Message heading={mess.heading} word={mess.word} date={mess.date} month={mess.month} year={mess.year} />
              {mess.heading === "fire" ? <ListGroup /> : null} 
              </div>
              )
            })
          }
 
        </div>
      </div>
    );
  }
  
  export default App;
  
