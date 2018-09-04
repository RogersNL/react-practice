import React from "react";
import PropTypes from "prop-types";


function Navitem(props){
  return (
    <div>
     <h3>{props.name}</h3>

    </div>
  );
}
Navitem.propTypes={
  name: PropTypes.string
};
export default Navitem;
