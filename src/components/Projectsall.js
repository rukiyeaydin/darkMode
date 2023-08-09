import React from 'react';
import Advancedhero from './Advancedhero';
import Heroprojects from './Heroprojects';
import Advanced from "./Advanced";
import Forbeginners from "./Forbeginners";
import Forbeginnershero from './Forbeginnershero';

const Projectsall = () => {
  return (
    <div>
        <Heroprojects />
        <Advanced />
        <Advancedhero />
        <Forbeginners />
        <Forbeginnershero />
    </div>
  )
}

export default Projectsall
