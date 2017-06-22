import React from 'react'
import { Link } from 'react-router'

export default class Menu extends React.Component {
    render () {
        return (
              
                <div className="container" style={{padding:'5px'}}>
                    <div className="row">
					    <div className="col-md-3"><Link to={'/ariel_24hrs/'}>Ariel24Hrs</Link></div> 
					    <div className="col-md-3"><Link to={'/ariel_topload/'}>Ariel Topload</Link></div> 
					    <div className="col-md-3"><Link to={'/ariel_brilliant/'}>Ariel Brilliant</Link></div> 
					    <div className="col-md-3"><Link to={'/ariel_matic/'}>Ariel Matic</Link></div> 
                        <div className="col-md-3 "><Link to={'/about-us/'}>About Us</Link></div>
                        <div className="col-md-3"><Link to={'/contact-us/'}>Contact Us</Link></div>                        
                    </div>
                </div>             
   
    )
}
}
