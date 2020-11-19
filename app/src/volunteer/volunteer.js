import React from 'react'
import styled from 'styled-components'; 


const StyledVolunteer = styled.div`
.title {
    margin: 1%; 
    font-size: 10rem;
}
.todo-list {
    display: flex; 
    flex-direction: column;
    margin: 1%; 
    width: 50%; 
}
.todo {
    display: flex; 
    justify-content: space-around; 
    align-items: center;
    width: 30%; 
    margin: 2%;
    font-size: 2.5rem; 
}
h2 {
    width: 80%; 
}
input {
    width: 20%; 
}
.active {
    background: red; 
    text-decoration: line-through; 
}
`

const Volunteer = () => {

  

    return (
        <StyledVolunteer>
            <div className="title">
                <h1>To-Do List</h1>
            </div>
            <div className="todo-list">
                
            </div>
            <button >Clear Completed!</button>

        </StyledVolunteer>
    )
}

export default Volunteer