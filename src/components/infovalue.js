import React,{Component} from 'react';


const arrayValue = [
  { value: '10K+',
    info: 'companies'
  },
  {
    value:'314',
    info: 'template'
  },
  {
    value: '12M+',
    info: 'queries'
  }],
  someOther= (value, info) =><div><h3 className>{value}</h3><span className="info--detail">{info}</span></div>;
     


class InfoContainer extends Component {
  render(){
    return(
      arrayValue.map(e=>someOther(e.value,e.info))
    )
  }
}


  export default InfoContainer;
