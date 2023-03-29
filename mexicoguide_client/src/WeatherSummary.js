import React, { Component } from 'react';
import fetch from "node-fetch";

class WeatherSummary extends React.Component {


    constructor(props) {
        super(props);
        this.state = 
        { employees: [] };
      }

      async componentDidMount() {

       fetch('https://localhost:7127/api/Employee').then(res => res.json()).then((result) => 
        {
          console.log(result);
          this.setState({
            employees: result
          });
        }
      );

    }

    render(){
       return (
         <div>
         <h2>Employees Data...</h2>
         <table>
           <thead>
             <tr>
               <th>Id</th>
               <th>Name</th>
               <th>Location</th>
               <th>Salary</th>
             </tr>
           </thead>
           <tbody> 
        
           {this.state.employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.location}</td>
              <td>{emp.salary}</td>
              </tr>
  ))}       
           </tbody>
         </table>
       </div>
        );
     }
    }



export default WeatherSummary;