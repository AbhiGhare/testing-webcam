import React,{useRef} from 'react';
import './App.css'

function App() {
  // const webcamRef = useRef(null);

  // const handleCapture = async () => {
  //   try {
  //     const stream = await navigator.mediaDevices.getUserMedia({ video: true });

  //     if (stream) {
  //       // Access granted, proceed with webcam capture
  //       const imageSrc = webcamRef.current.getScreenshot();
  //       // Use imageSrc as needed (e.g., display it in an image tag or send it to a server)
  //       console.log(imageSrc);
  //     }
  //   } catch (error) {
  //     if (error.name === 'NotAllowedError' || error.name === 'NotFoundError') {
  //       alert('Webcam access is disabled. Please enable it in your browser settings.');
  //     } else {
  //       console.error('Error accessing webcam:', error);
  //     }
  //   }
  // };

  // return (
  //   <div>
  //     <video ref={webcamRef} style={{ display: 'none' }}></video>
  //     <button onClick={handleCapture}>Capture photo</button>
  //   </div>
  // );

  // const webcamRef = useRef(null);

  // const handleCapture = async () => {
  //   try {
  //     const stream = await navigator.mediaDevices.getUserMedia({ video: true });

  //     if (stream) {
  //       // Access granted, proceed with webcam capture
  //       const imageSrc = webcamRef.current.getScreenshot();
  //       // Use imageSrc as needed (e.g., display it in an image tag or send it to a server)
  //       console.log(imageSrc);
  //     }
  //   } catch (error) {
  //     if (error.name === 'NotAllowedError' || error.name === 'NotFoundError') {
  //       const enableCamera = window.confirm(
  //         'Webcam access is disabled. Do you want to enable it? Click "OK" and navigate to your browser settings.'
  //       );

  //       if (enableCamera) {
  //         window.location.href = 'chrome://settings/content/camera';
  //         // You can replace the URL with other browser settings URLs based on the browser being used
  //       }
  //     } else {
  //       console.error('Error accessing webcam:', error);
  //     }
  //   }
  // };

  // return (
  //   <div>
  //     <video ref={webcamRef} style={{ display: 'none' }}></video>
  //     <button onClick={handleCapture}>Capture photo</button>
  //   </div>
  // );

 
    // const webcamRef = useRef(null);
  
    // const handleCapture = async () => {
    //   try {
    //     const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  
    //     if (stream) {
    //       // Access granted, proceed with webcam capture
    //       const imageSrc = webcamRef.current.getScreenshot();
    //       // Use imageSrc as needed (e.g., display it in an image tag or send it to a server)
    //       console.log(imageSrc);
    //     }
    //   } catch (error) {
    //     if (error.name === 'NotAllowedError' || error.name === 'NotFoundError') {
    //       const enableCamera = window.confirm(
    //         'Webcam access is disabled. Do you want to enable it? Follow these steps:\n\n1. Open a new tab in your browser.\n2. Type chrome://settings/content/camera in the address bar and press Enter.\n3. Find Camera and click on it.\n4. Enable the setting for Ask before accessing (recommended).\n5. Try capturing the photo again.'
    //       );
  
    //       if (enableCamera) {
    //         // Open a new tab/window with instructions
    //         window.open('https://support.google.com/chrome/answer/2693767?hl=en');
    //       }
    //     } else {
    //       console.error('Error accessing webcam:', error);
    //     }
    //   }
    // };
  
    // return (
    //   <div>
    //     <video ref={webcamRef} style={{ display: 'none' }}></video>
    //     <button onClick={handleCapture}>Capture photo</button>
    //   </div>
    // )

//  I understand that you may want to guide users to enable webcam access after they click "OK" on the confirmation dialog. However, as of my last knowledge update in January 2022, and according to the current browser security and privacy policies, you cannot programmatically enable webcam access without user interaction.

// When a user clicks "OK" in response to a confirmation dialog, the browser will prompt them to allow or deny access to the webcam. The user must manually grant permission through the browser's user interface. This behavior is in place to protect user privacy and security.

// If the user initially denies access, you can provide instructions in the confirmation dialog on how to manually enable webcam access in their browser settings. For example, you can include a message like:

const webcamRef = useRef(null);

  const getBrowserName = () => {
    const userAgent = navigator.userAgent;
    if (userAgent.indexOf('Chrome') > -1) return 'Chrome';
    if (userAgent.indexOf('Firefox') > -1) return 'Firefox';
    if (userAgent.indexOf('Safari') > -1) return 'Safari';
    if (userAgent.indexOf('Edge') > -1) return 'Edge';
    if (userAgent.indexOf('MSIE') > -1 || userAgent.indexOf('Trident/') > -1) return 'Internet Explorer';
    return 'Unknown';
  };

  const handleCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      if (stream) {
        // Access granted, proceed with webcam capture
        const imageSrc = webcamRef.current.getScreenshot();
        // Use imageSrc as needed (e.g., display it in an image tag or send it to a server)
        console.log(imageSrc);
      }
    } catch (error) {
      if (error.name === 'NotAllowedError' || error.name === 'NotFoundError') {
        const browserName = getBrowserName();
        let message = '';

        switch (browserName) {
          case 'Chrome':
            message = 'Webcam access is disabled in Chrome. Do you want to enable it? Click "OK" and navigate to your browser settings.';
            break;
          case 'Firefox':
            message = 'Webcam access is disabled in Firefox. Do you want to enable it? Click "OK" and navigate to your browser settings.';
            break;
          // Add cases for other browsers as needed

          default:
            message = 'Webcam access is disabled. Do you want to enable it? Click "OK" and navigate to your browser settings.';
            break;
        }

        const enableCamera = window.confirm(message);

        if (enableCamera) {
          // Provide instructions or URL based on the detected browser
          switch (browserName) {
            case 'Chrome':
              window.location.href = 'chrome://settings/content/camera';
              break;
            case 'Firefox':
              window.location.href = 'about:preferences#privacy';
              break;
            // Add cases for other browsers as needed
            default:
              break;
          }
        }
      } else {
        console.error('Error accessing webcam:', error);
      }
    }
  };

  return (
    <div>
      <video ref={webcamRef} style={{ display: 'block' }}></video>
      <button onClick={handleCapture}>Capture photo</button>
    </div>
  );
  
}

export default App
