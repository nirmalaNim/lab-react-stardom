import React, {Component} from 'react'

import './Prostar.css'

class Prostar extends Component {

 Prostars(){
          return this.props.data.map((value)=>
          <tr key={value.id}>
              <td><img src={value.pictureUrl}/></td>
              <td>{value.name}</td>
              <td>{value.popularity}</td>
              <td><button className="btn">Delete</button></td>
          </tr>
          )

 }
    render(){
    return (
        <table className="stars">
              
                  <tr>
                      <th>Picture</th>
                      <th>Name</th>
                      <th>Popularity</th>
                      <th>Action</th>
                  </tr>
              
              {this.Prostars()}
          </table>
      )
}
}
export default Prostar;
