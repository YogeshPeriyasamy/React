import { useState } from "react";

function ListGroup() {
    let initialLists = ["paris", "germany", "usa", "london", "tamilnadu"];
    
    // State to track list items
    const [lists, setLists] = useState(initialLists);

    const handleClick = (index: number) => {
        // Create a new array with updated text at the clicked index
        const updatedLists = lists.map((item, i) => 
            i === index ? `Clicked ${item}` : item
        );

        // Update state
        setLists(updatedLists);
    };

    return (
        <>
            <h1>All Places</h1>
            {lists.length === 0 ? <p>No places found</p> : null}
            <ul className="list-group">
                {lists.map((item, index) => (
                    <li 
                        className="places" 
                        key={index} 
                        onClick={() => handleClick(index)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
