import React, { useEffect, useState } from 'react'

function DisplayData() {

    const [jsonOrderData, setJsonOrderData] = useState([]);
    const [jsonTicketData, setJsonTicketData] = useState([]);

    useEffect(() => {
        Promise.all([
            fetch("http://localhost:5000/api/orders")
            .then(results => results.json())
            .then(data => {
                setJsonOrderData(data)
            }),
            fetch("http://localhost:5000/api/tickets")
            .then(results => results.json())
            .then(data => {
                setJsonTicketData(data)
            })
        ])
        
        
    }, []);

    let elements = [];

    for (let index = 0; index < jsonOrderData.length; index++) {
        const orderTickets = jsonTicketData.filter(t => t.orderId === jsonOrderData[index].id && !jsonTicketData.includes(t.ticketNumber));
        console.log("order tickets");
        console.log(orderTickets);
        let ticketElements = [];
        for (let ticketIndex = 0; ticketIndex < orderTickets.length; ticketIndex++) {
            if (ticketIndex === 0) {
                ticketElements = [
                <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Event Date</th>
                    <th scope="col">Ticket Number</th>
                </tr>];
            }
            const tElement = 
            <tr>
                <td>{jsonTicketData[ticketIndex].firstName}</td>
                <td>{jsonTicketData[ticketIndex].lastName}</td>
                <td>{jsonTicketData[ticketIndex].eventDate.replace("T", " ")}</td>
                <td>{jsonTicketData[ticketIndex].ticketNumber}</td>
            </tr>            
            ticketElements.push(tElement);
        }
        const element = 
        <>
            <tr>
                <th scope="col">Order Id</th>
            </tr>
            <tr>
            <td>{jsonOrderData[index].id}</td>
                {ticketElements}
            </tr>
        </>
        console.log(jsonOrderData[index].name);
        elements.push(element);
    }
    // console.log(window.location.origin);

    console.log(jsonOrderData);

    

    return (
        <div className="container justify-content-center">
            <table className="table">
                <tbody>
                    {elements}
                </tbody>
            </table>
        </div>
    )
}

export default DisplayData;