import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent() {
    
    const display = false;
    //Ternary operator
    return display ? <Welcome /> : <Code />;

    //Conditional Rendering Using Element Variables
    // let message;
    // if (display) {
    //     message = <h1>True</h1>;
    // } else {
    //     message = <h1>False</h1>;
    // }
    // return message;
     
    // Conditionally Rendering JSX & Components
    // if (display) {
    //    return <Welcome />
    // } else {
    //    return  <Code />
    // }

    // if (display) {
    //     return (
    //         <div>
    //             <h3>This is a conditional component</h3>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div>
                
    //             <h3>Code everyday!</h3>
    //         </div>
    //     );
    // }
    
}