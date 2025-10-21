import ComputadorContainer from "./computador/ComputadorContainer"
import "./services.css"

const Services = () => {
   return (
      <div className="services">
         <div className="sSection left"></div>
         <div className="sSection right">
            <ComputadorContainer />
         </div>

      </div>
   );
};

export default Services;