import React, { useState } from 'react'
import { PopupModal } from "react-calendly";

const Clendalycomp = (props) => {
 const[isOpen,setIsOpen] =useState(false)
  return (
    <div><button
    style={{ display: "block", margin: "0 auto",backgroundColor:'ButtonShadow', color:'green' }}
    onClick={() =>setIsOpen(true)}
  >
  Click Me Schedule meeting
  </button>
  <PopupModal
          url="https://calendly.com/ahmedtausef98/project-synccloud-discussion"
          pageSettings={props.pageSettings}
          utm={props.utm}
          prefill={props.prefill}
          onModalClose={() =>setIsOpen(false)}
          open={isOpen}
          /*
           * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
           * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
           */
          rootElement={document.getElementById("root")}
        />
  
  </div>
  )
}

export default Clendalycomp