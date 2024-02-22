import { useEffect, useState } from "react";
import { InfoContainer1 } from "./infoContainer1";
import { InfoContainer2 } from "./infoContainer2";
import { InfoContainer3 } from "./infoContainer3";
import { InfoContainer4 } from "./infoContainer4";
import { InfoContainer5 } from "./infoContainer5";
import { InfoContainer6 } from "./infoContainer6";
import { InfoContainer7 } from "./infoContainer7";
import { InfoContainer8 } from "./infoCotainer8";

export const WinningInfo=()=>{
    const [components, setComponents] = useState([
        <InfoContainer8 key={8} />,
        <InfoContainer7 key={7} />,
        <InfoContainer6 key={6} />,
        <InfoContainer5 key={5} />,
        <InfoContainer4 key={4} />,
        <InfoContainer3 key={3} />,
        <InfoContainer2 key={2} />,
        <InfoContainer1 key={1} />,
      ]);
      
    
      // Function to cycle components
      const cycleComponents = () => {
        // Remove the last component
        setComponents(prevComponents => {
          let newComponents = [...prevComponents];
          const newComponent = newComponents[components.length - 1];
          newComponents = [newComponent, ...prevComponents];
          newComponents.pop();
          return newComponents;
        });
      };
    
      // Cycle components at intervals
      useEffect(() => {
        const interval=setInterval(cycleComponents, 1500); // Change duration as needed
    
        // Clean up interval on unmount
        return () => clearInterval(interval);
      }, []);
    return(<>
            <h5 className="nav-heading winning-heading" >Winning Information</h5>
            <div className="winning-info">
                {/* <InfoContainer1 />
                <InfoContainer3 />
                <InfoContainer8 />
                <InfoContainer2 />
                <InfoContainer4 />
                <InfoContainer8 />
                <InfoContainer5 />
                <InfoContainer1 />
                <InfoContainer6 />
                <InfoContainer1 />
                <InfoContainer7 />
                <InfoContainer8 />
                <InfoContainer1 /> */}
                {components}
            </div>
    </>);
}