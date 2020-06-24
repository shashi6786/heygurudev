import React, { Component } from 'react';

class Certificates extends Component {

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var certificate = this.props.data.certificates.map(function(certificates){
        return <div key={certificates.name}><h4>{certificates.name}</h4>
        <p className="info">{certificates.issuing_organization} <span>&bull;</span><em className="date">{certificates.issue_date}</em></p>
        </div>
      })
    }

    return (
      <section id="certificate">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Certification</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {certificate}
               </div>
            </div>
         </div>
      </div>


   </section>
    );
  }
}

export default Certificates;
