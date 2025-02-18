interface MessageType{
    heading:string;
    word:string;
    date:string;
    month:string;
    year:string;
}
export default function Message({heading,word,date,month,year}:MessageType)

{
    return (
    // to return multiple elements enclose them inside div
    <div>
    <div>
        <h1>{heading}</h1>
    </div>
    <div>
        <p>{word}</p>
    </div>
    <div>
    <p>{date}</p>
    <p>{month}</p>
    <p>{year}</p>
    </div>
    </div>
    )
} 