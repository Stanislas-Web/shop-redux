import React from "react";
import { connect } from "react-redux";
import phone from "../images/phone.jpg";
import { buyPhone } from '../redux/phone/actionPhone';

const PhoneComponent = (props) => {

  console.log(props);
  return (
      <div className="child">
        <img
          width="300"
          height="200"
          src={phone}
          alt="phone"
        />
        <p>
          Disponibilité : <span id="count">{props.phones}</span>
        </p>
        <button onClick={()=> props.buyPhone()} id="buy-phone">Achetter</button>
      </div>
  );
};

const mapStateToProps = state => {
  return {
    phones: state.phones
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyPhone: () => dispatch(buyPhone())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneComponent);
