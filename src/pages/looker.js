// Filename - pages/looker.js

import { useEffect, useState } from "react";


function Looker(){
    const [dashboardURL, setdashboardURL] = useState(null);
    const [selectedName, setselectedName] = useState(null);
    useEffect(() => {
        const handleMessage = (event) => {
          // Access the received data
          const receivedData = event.data;
          console.log('Received message in React:', receivedData);
          if (receivedData.type === "productName") {
            setdashboardURL(receivedData?.data?.dashboardUrl);
            setselectedName(receivedData?.data.name);
            // Scroll to the second iframe
            scrollToSelector('.childIframe');
          }
        };
        // Add an event listener for the 'message' event
        window.addEventListener('message', handleMessage);
        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, []);
    useEffect(() => {
        console.log('Product Name is', selectedName, dashboardURL);
    }, [selectedName, dashboardURL]);
    // Function to scroll to a specific selector
    const scrollToSelector = (selector) => {
        const element = document.querySelector(selector);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    }; 
    return (
        <div className="container">
            <div className="iframe1">
                <iframe src="https://af275b30-12c8-4614-a455-57e58e0c8ecd.looker.app/embed/dashboards/5" title="product_details" width="100%" height="800px"/>
            </div>
            <div className="childIframe">
            { dashboardURL ? (
                <iframe className="iframeChild" src={dashboardURL} title="product_info" width="100%" height="800px" />
            ): (
                <p>Loading...</p>
            )}
            </div>
        </div>
    )
}

export default Looker;