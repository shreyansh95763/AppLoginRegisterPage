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
          const newComponents = [...prevComponents];
          if((components[0]).key===1){components.push(<InfoContainer2 key={2} />)}
          else if((components[0]).key===2){components.push(<InfoContainer3 key={3} />)}
          else if((components[0]).key===3){components.push(<InfoContainer4 key={4} />)}
          else if((components[0]).key===4){components.push(<InfoContainer5 key={5} />)}
          else if((components[0]).key===5){components.push(<InfoContainer6 key={6} />)}
          else if((components[0]).key===6){components.push(<InfoContainer7 key={7} />)}
          else if((components[0]).key===7){components.push(<InfoContainer8 key={8} />)}
          else if((components[0]).key===8){components.push(<InfoContainer1 key={1} />)}
          newComponents.pop();
          return newComponents;
        });
    
        // Add a new component to the top
        const newComponent = components[components.length - 1];

        setComponents(prevComponents => [newComponent, ...prevComponents]);
      };
    
      // Cycle components at intervals
      useEffect(() => {
        setInterval(cycleComponents, 2000); // Change duration as needed
    
        // Clean up interval on unmount
        // return () => clearInterval(interval);
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