import React, { Component } from 'react';
import {Event} from "./Tracking";

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
    }

    return (
      <section id="contact">
         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">Contact Me for more details!</p>

            </div>

         </div>

         <div className="row">

            <div className="eight columns">

               <form method="post" id="contactForm" name="contactForm" data-netlify="true">

					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange}/>
                  </div>
                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="10" id="contactMessage" name="contactMessage"></textarea>
                  </div>

                  <div>
                     <button className="submit" onClick={()=> Event("CONTACT", "Contact Form Submit Clicked", "CONTACT_PAGE")}>Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
           <div id="message-success">
               <i className="fa fa-check"></i>Your message was sent, thank you!<br />
           </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span>
					   </p>
				   </div>

               <div className="widget widget_tweets">
                  <h4 className="widget-title"></h4>
                  <ul id="twitter">
                     <li>
                        <span>
                        <a href="#"></a>
                        </span>
                        <b><a href="#"></a></b>
                     </li>
                     <li>
                        <span>
                        <a href="#"></a>
                        </span>
                        <b><a href="#"></a></b>
                     </li>
                  </ul>
		         </div>
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
