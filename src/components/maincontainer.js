import React,{Component} from 'react';
import InfoContainer from '../components/infovalue.js';
import '../styles/index.css';
import logoMobile from '../images/image-header-mobile.jpg';
import logoDesktop from '../images/image-header-desktop.jpg';


class MainContainer extends Component{
  render(){
    return(
    <section className="main-container">
      <div className="info--container" >
        <h2 className="main-title">Get <span className="important--keyword">insigths</span> that help your business growth.</h2>
        <p>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall eficiency</p>
        <article className="info--items">
          <InfoContainer />
          </article>
        </div>
      <picture>
        <source media="(min-width:650px)" srcset={logoDesktop} />
        <img className="main-img"alt="logo" src={logoMobile}/>
        </picture>
    </section>
    )
  
  }

}


export default MainContainer;
