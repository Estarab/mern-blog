import React, { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
} from 'react-icons/fa';

import logo from '../assets/inauguration/logo.jpeg';
import leftImg from '../assets/inauguration/logo.jpeg';
import rightImg from '../assets/inauguration/logo.jpeg';
import detailsBg from '../assets/inauguration/img4.jpg';
import cardBg from '../assets/inauguration/img4.jpg';

const InaugurationCard = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [imgDataUrl, setImgDataUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      alert('Image must be less than 10MB.');
      return;
    }
    if (file.size < 300 * 1024) {
      alert('Image is quite small and might appear blurry.');
    }

    setLoading(true);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImgDataUrl(reader.result);
      setLoading(false);
    };
    reader.readAsDataURL(file);
  };

  const downloadCard = () => {
    const card = document.getElementById('avatar-card');
    html2canvas(card, {
      useCORS: true,
      backgroundColor: '#ffffff',
      scale: 2,
    })
      .then((canvas) => {
        const image = canvas.toDataURL('image/jpeg', 1.0);
        const link = document.createElement('a');
        link.href = image;
        link.download = `${name || 'avatar'}_card.jpg`;
        link.click();
      })
      .catch((err) => {
        console.error('Download failed:', err);
        alert('Error generating the image.');
      });
  };

  const styles = {
    container: {
      padding: 20,
      fontFamily: 'Segoe UI, sans-serif',
      background: 'linear-gradient(to bottom right, #1e3c72, #2a5298)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
    },
    card: {
      backgroundImage: `url(${cardBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: '#333',
      borderRadius: 16,
      padding: 20,
      width: '100%',
      maxWidth: 600,
      position: 'relative',
      boxShadow: '0 4px 25px rgba(0,0,0,0.2)',
      marginBottom: 30,
      overflow: 'hidden',
    },
    logo: {
      position: 'absolute',
      top: 15,
      right: 15,
      width: 50,
      display: isMobile ? 'none' : 'block',
    },
    avatarRect: {
      width: isMobile ? '70%' : '40%',
      height: 250,
      objectFit: 'cover',
      borderRadius: 8,
      border: '3px solid black',
      marginBottom: 20,
      filter: 'brightness(1.05) contrast(1.1)',
      imageRendering: 'auto',
      backgroundColor: '#fff',
      display: 'block',
      margin: '0 auto',
    },
    placeholder: {
      height: 250,
      background: '#e0e0e0',
      color: '#777',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      marginBottom: 20,
      fontSize: 18,
      fontWeight: '600',
      userSelect: 'none',
    },
    flyerContent: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 10,
      flexWrap: 'wrap',
    },
    decorImg: {
      width: '25%',
      maxWidth: 120,
      borderRadius: 10,
      objectFit: 'cover',
      filter: 'brightness(0.9) saturate(1.1)',
      userSelect: 'none',
      display: isMobile ? 'none' : 'block',
    },
    centerText: {
      width: isMobile ? '100%' : '50%',
      textAlign: 'center',
      minWidth: 200,
      padding: 25,
      borderRadius: 10,
      backgroundImage: `url(${detailsBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backdropFilter: 'brightness(1.1)',
      boxShadow: '0 0 8px rgba(0,0,0,0.2)',
      margin: '0 auto',
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 4,
      color: '#1e3c72',
      userSelect: 'text',
    },
    title: {
      fontSize: 18,
      fontStyle: 'italic',
      color: '#666',
      marginBottom: 20,
      userSelect: 'text',
    },
    detailRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 2,
      fontSize: 12,
      marginBottom: 10,
      color: '#1e3c72',
      userSelect: 'text',
    },
    controls: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      width: '100%',
      maxWidth: 600,
    },
    input: {
      padding: 10,
      borderRadius: 5,
      border: 'none',
      color: 'black',
      width: '100%',
      fontSize: 15,
    },
    button: {
      padding: 12,
      background: 'gold',
      border: 'none',
      color: '#1e3c72',
      fontWeight: 'bold',
      borderRadius: 5,
      cursor: 'pointer',
      fontSize: 16,
      transition: 'background-color 0.3s ease',
    },
    buttonDisabled: {
      background: '#ccc',
      color: '#666',
      cursor: 'not-allowed',
    },
    loader: {
      height: 250,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#007BFF',
      fontWeight: 'bold',
      fontSize: 18,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card} id="avatar-card">
        <img src={logo} alt="Logo" style={styles.logo} crossOrigin="anonymous" />

        {loading ? (
          <div style={styles.loader}>Uploading...</div>
        ) : imgDataUrl ? (
          <img
            src={imgDataUrl}
            alt="Uploaded"
            style={styles.avatarRect}
            crossOrigin="anonymous"
            draggable={false}
          />
        ) : (
          <div style={styles.placeholder}>Upload a photo to begin</div>
        )}

        <div style={styles.flyerContent}>
          <img src={leftImg} style={styles.decorImg} alt="left" crossOrigin="anonymous" draggable={false} />

          <div style={styles.centerText}>
            <div style={styles.name}>{name || 'Your Name'}</div>
            <div style={styles.title}>{title || 'Your Title'}</div>
            <div style={styles.detailRow}>
              We Are The World Zambia Inauguration and Leaders Induction/Dinner
            </div>
            <div style={styles.detailRow}>
              <FaClock /> 27th June, 14hrs
            </div>
            
            {/* <div style={styles.detailRow}>
              DM Gardens,New Kasama
            </div> */}
          </div>

          <img src={rightImg} style={styles.decorImg} alt="right" crossOrigin="anonymous" draggable={false} />
        </div>
      </div>

      <div style={styles.controls}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          spellCheck={false}
        />
        <select
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.input}
        >
          <option value="">Select Title</option>
          <option value="Guest">Guest</option>
          <option value="VVIP">VVIP</option>
          <option value="Official">Official</option>
        </select>

        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          style={styles.input}
        />
        <button
          onClick={downloadCard}
          disabled={!imgDataUrl}
          style={{
            ...styles.button,
            ...( !imgDataUrl ? styles.buttonDisabled : {} )
          }}
          title={!imgDataUrl ? 'Upload an image to download' : 'Download your flyer'}
        >
          Download Card as .JPG
        </button>
      </div>
    </div>
  );
};

export default InaugurationCard;




// import React, { useState } from 'react';
// import html2canvas from 'html2canvas';
// import {
//   FaCalendarAlt,
//   FaMapMarkerAlt,
//   FaClock,
//   FaUserTie,
// } from 'react-icons/fa';

// import logo from '../assets/inauguration/logo.jpeg';
// import leftImg from '../assets/inauguration/logo.jpeg';
// import rightImg from '../assets/inauguration/logo.jpeg';
// import detailsBg from '../assets/inauguration/img4.jpg';
// import cardBg from '../assets/inauguration/img3.jpg'; // new background for entire card



// const InaugurationCard = () => {
//   const [name, setName] = useState('');
//   const [title, setTitle] = useState('');
//   const [imgDataUrl, setImgDataUrl] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleUpload = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     if (file.size > 10 * 1024 * 1024) {
//       alert('Image must be less than 10MB.');
//       return;
//     }
//     // Optional: Warn if image might be too low res
//     if (file.size < 300 * 1024) {
//       alert('Image is quite small and might appear blurry. Consider using a higher-resolution photo.');
//     }

//     setLoading(true);
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImgDataUrl(reader.result);
//       setLoading(false);
//     };
//     reader.readAsDataURL(file);
//   };

//   const downloadCard = () => {
//     const card = document.getElementById('avatar-card');
//     html2canvas(card, {
//       useCORS: true,
//       backgroundColor: '#ffffff',
//       scale: 2, // increase resolution
//     })
//       .then((canvas) => {
//         const image = canvas.toDataURL('image/jpeg', 1.0);
//         const link = document.createElement('a');
//         link.href = image;
//         link.download = `${name || 'avatar'}_card.jpg`;
//         link.click();
//       })
//       .catch((err) => {
//         console.error('Download failed:', err);
//         alert('Error generating the image. Check console for details.');
//       });
//   };

//   const styles = {
//     container: {
//       padding: 20,
//       fontFamily: 'Segoe UI, sans-serif',
//       background: 'linear-gradient(to bottom right, #1e3c72, #2a5298)',
//       color: 'white',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       minHeight: '100vh',
//     },
//     card: {
//       backgroundImage: `url(${cardBg})`,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   backgroundRepeat: 'no-repeat',
//   color: '#333',
//   borderRadius: 16,
//   padding: 20,
//   width: '100%',
//   maxWidth: 600,
//   position: 'relative',
//   boxShadow: '0 4px 25px rgba(0,0,0,0.2)',
//   marginBottom: 30,
//   overflow: 'hidden',
      
//     },
//     logo: {
//       position: 'absolute',
//       top: 15,
//       right: 15,
//       width: 2,
//     },
//     avatarRect: { 
//   width: '35%',
//   height: 250,
//   objectFit: 'cover',
//   borderRadius: 8,
//   border: '3px solid black',
//   marginBottom: 20,
//   filter: 'brightness(1.05) contrast(1.1)',
//   imageRendering: 'auto',
//   backgroundColor: '#fff',
//   display: 'block',
//   margin: '0 auto',
// },

//     // avatarRect: {
//     //   width: '40%',
//     //   height: 250,
//     //   objectFit: 'cover',
//     //   borderRadius: 8,
//     //   border: '3px solid gold',
//     //   marginBottom: 20,
//     //   filter: 'brightness(1.05) contrast(1.1)',
//     //   imageRendering: 'auto',
//     //   backgroundColor: '#fff',
//     // },
//     placeholder: {
//       height: 250,
//       background: '#e0e0e0',
//       color: '#777',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       borderRadius: 8,
//       marginBottom: 20,
//       fontSize: 18,
//       fontWeight: '600',
//       userSelect: 'none',
//     },
//     flyerContent: {
//       position: 'relative',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'flex-start',
//       gap: 10,
//       flexWrap: 'wrap',
//     },
//     decorImg: {
//       width: '25%',
//     //   height: 250,
//       maxWidth: 120,
//       borderRadius: 10,
//       objectFit: 'cover',
//       filter: 'brightness(0.9) saturate(1.1)',
//       userSelect: 'none',
//     },
//     centerText: {
//       width: '50%',
//   textAlign: 'center',
//   minWidth: 200,
//   padding: 15,
//   borderRadius: 10,
//   backgroundImage: `url(${detailsBg})`,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   backgroundRepeat: 'no-repeat',
//   backdropFilter: 'brightness(1.1)',
//   boxShadow: '0 0 8px rgba(0,0,0,0.2)',
//     },
//     name: {
//       fontSize: 24,
//       fontWeight: 'bold',
//       marginBottom: 4,
//       color: '#1e3c72',
//       userSelect: 'text',
//     },
//     title: {
//       fontSize: 18,
//       fontStyle: 'italic',
//       color: '#666',
//       marginBottom: 20,
//       userSelect: 'text',
//     },
//     detailRow: {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       gap: 8,
//       fontSize: 15,
//       marginBottom: 10,
//       color: '#1e3c72',
//       userSelect: 'text',
//     },
//     controls: {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: 12,
//       width: '100%',
//       maxWidth: 600,
//     },
//     input: {
//       padding: 10,
//       borderRadius: 5,
//       border: 'none',
//       color: 'black',
//       width: '100%',
//       fontSize: 15,
//     },
//     button: {
//       padding: 12,
//       background: 'gold',
//       border: 'none',
//       color: '#1e3c72',
//       fontWeight: 'bold',
//       borderRadius: 5,
//       cursor: 'pointer',
//       fontSize: 16,
//       transition: 'background-color 0.3s ease',
//     },
//     buttonDisabled: {
//       background: '#ccc',
//       color: '#666',
//       cursor: 'not-allowed',
//     },
//     loader: {
//       height: 250,
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       color: '#007BFF',
//       fontWeight: 'bold',
//       fontSize: 18,
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.card} id="avatar-card">
//         <img src={logo} alt="Logo" style={styles.logo} crossOrigin="anonymous" />

//         {loading ? (
//           <div style={styles.loader}>Uploading...</div>
//         ) : imgDataUrl ? (
//           <img
//             src={imgDataUrl}
//             alt="Uploaded"
//             style={styles.avatarRect}
//             crossOrigin="anonymous"
//             draggable={false}
//           />
//         ) : (
//           <div style={styles.placeholder}>Upload a photo to begin</div>
//         )}

//         <div style={styles.flyerContent}>
//           <img src={leftImg} style={styles.decorImg} alt="left" crossOrigin="anonymous" draggable={false} />

//           <div style={styles.centerText}>
//             <div style={styles.name}>{name || 'Your Name'}</div>
//             <div style={styles.title}>{title || 'Your Title'}</div>
//             <div style={styles.detailRow}>
//             We Are The World Zambia Inauguration and Leaders Induction/Dinner
//               {/* <FaCalendarAlt /> June 27, 2025 */}
//             </div>
//             <div style={styles.detailRow}>
//               <FaClock /> 27th June, 14hrs
//             </div>
//             <div style={styles.detailRow}>
//               <FaMapMarkerAlt /> DM Gardens, New Kasama
//             </div>
//             {/* <div style={styles.detailRow}>
//               <FaUserTie /> Dress Code: Formal
//             </div> */}
//           </div>

//           <img src={rightImg} style={styles.decorImg} alt="right" crossOrigin="anonymous" draggable={false} />
//         </div>
//       </div>

//       <div style={styles.controls}>
//         <input
//           type="text"
//           placeholder="Enter your name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           style={styles.input}
//           spellCheck={false}
//         />
//         <select
//   value={title}
//   onChange={(e) => setTitle(e.target.value)}
//   style={styles.input}
// >
//   <option value="">Select Title</option>
//   <option value="Guest">Guest</option>
//   <option value="VVIP">VVIP</option>
//   <option value="Official">Official</option>
// </select>

//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleUpload}
//           style={styles.input}
//         />
//         <button
//           onClick={downloadCard}
//           disabled={!imgDataUrl}
//           style={{ 
//             ...styles.button,
//             ...( !imgDataUrl ? styles.buttonDisabled : {} )
//           }}
//           title={!imgDataUrl ? 'Upload an image to download' : 'Download your flyer'}
//         >
//           Download Card as .JPG
//         </button>
//       </div>
//     </div>
//   );
// };

// export default InaugurationCard;



// import React, { useState } from 'react';
// import html2canvas from 'html2canvas';
// import {
//   FaCalendarAlt,
//   FaMapMarkerAlt,
//   FaClock,
//   FaUserTie,
// } from 'react-icons/fa';

// import logo from '../assets/about image/vision.jpeg';
// import leftImg from '../assets/programs/support.jpg';
// import rightImg from '../assets/bg/freepik-export-20241019115739maUF.jpeg';

// const InaugurationCard = () => {
//   const [name, setName] = useState('');
//   const [title, setTitle] = useState('');
//   const [imgDataUrl, setImgDataUrl] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleUpload = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     if (file.size > 10 * 1024 * 1024) {
//       alert('Image must be less than 10MB.');
//       return;
//     }

//     setLoading(true);
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImgDataUrl(reader.result);
//       setLoading(false);
//     };
//     reader.readAsDataURL(file);
//   };

//   const downloadCard = () => {
//     const card = document.getElementById('avatar-card');
//     html2canvas(card, {
//       useCORS: true,
//       backgroundColor: '#ffffff',
//     })
//       .then((canvas) => {
//         const image = canvas.toDataURL('image/jpeg', 1.0);
//         const link = document.createElement('a');
//         link.href = image;
//         link.download = `${name || 'avatar'}_card.jpg`;
//         link.click();
//       })
//       .catch((err) => {
//         console.error('Download failed:', err);
//         alert('Error generating the image. Check console for details.');
//       });
//   };

//   const styles = {
//     container: {
//       padding: 20,
//       fontFamily: 'Segoe UI, sans-serif',
//       background: 'linear-gradient(to bottom right, #1e3c72, #2a5298)',
//       color: 'white',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       minHeight: '100vh',
//     },
//     card: {
//       background: 'linear-gradient(to bottom, #ffffff, #e6f0ff)',
//       color: '#333',
//       borderRadius: 16,
//       padding: 20,
//       width: '100%',
//       maxWidth: 600,
//       position: 'relative',
//       boxShadow: '0 4px 25px rgba(0,0,0,0.2)',
//       marginBottom: 30,
//       overflow: 'hidden',
//     },
//     logo: {
//       position: 'absolute',
//       top: 15,
//       right: 15,
//       width: 60,
//     },
//     avatarRect: {
//       width: '50%',
//       height: '40%',
//       maxHeight: 250,
//       objectFit: 'cover',
//       borderRadius: 8,
//       border: '3px solid gold',
//       marginBottom: 20,
//     },
//     placeholder: {
//       height: 250,
//       background: '#e0e0e0',
//       color: '#777',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       borderRadius: 8,
//       marginBottom: 20,
//     },
//     flyerContent: {
//       position: 'relative',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'flex-start',
//       gap: 10,
//     },
//     decorImg: {
//       width: '25%',
//       maxWidth: 120,
//       borderRadius: 10,
//     },
//     centerText: {
//       width: '50%',
//       textAlign: 'center',
//     },
//     name: {
//       fontSize: 24,
//       fontWeight: 'bold',
//       marginBottom: 4,
//       color: '#1e3c72',
//     },
//     title: {
//       fontSize: 18,
//       fontStyle: 'italic',
//       color: '#666',
//       marginBottom: 20,
//     },
//     detailRow: {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       gap: 8,
//       fontSize: 15,
//       marginBottom: 10,
//       color: '#1e3c72',
//     },
//     controls: {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: 12,
//       width: '100%',
//       maxWidth: 600,
//     },
//     input: {
//       padding: 10,
//       borderRadius: 5,
//       border: 'none',
//       width: '100%',
//       fontSize: 15,
//     },
//     button: {
//       padding: 12,
//       background: 'gold',
//       border: 'none',
//       color: '#1e3c72',
//       fontWeight: 'bold',
//       borderRadius: 5,
//       cursor: 'pointer',
//       fontSize: 16,
//     },
//     loader: {
//       height: 250,
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       color: '#007BFF',
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.card} id="avatar-card">
//         <img src={logo} alt="Logo" style={styles.logo} crossOrigin="anonymous" />

//         {loading ? (
//           <div style={styles.loader}>Uploading...</div>
//         ) : imgDataUrl ? (
//           <img
//             src={imgDataUrl}
//             alt="Uploaded"
//             style={styles.avatarRect}
//             crossOrigin="anonymous"
//           />
//         ) : (
//           <div style={styles.placeholder}>Upload a photo to begin</div>
//         )}

//         <div style={styles.flyerContent}>
//           <img src={leftImg} style={styles.decorImg} alt="left" crossOrigin="anonymous" />
          
//           <div style={styles.centerText}>
//             <div style={styles.name}>{name || 'Your Name'}</div>
//             <div style={styles.title}>{title || 'Your Title'}</div>
//             <div style={styles.detailRow}>
//               <FaCalendarAlt /> June 27, 2025
//             </div>
//             <div style={styles.detailRow}>
//               <FaClock /> 7:00 PM – 10:00 PM
//             </div>
//             <div style={styles.detailRow}>
//               <FaMapMarkerAlt /> Grand Ballroom, City Convention Center
//             </div>
//             <div style={styles.detailRow}>
//               <FaUserTie /> Dress Code: Formal
//             </div>
//           </div>

//           <img src={rightImg} style={styles.decorImg} alt="right" crossOrigin="anonymous" />
//         </div>
//       </div>

//       <div style={styles.controls}>
//         <input
//           type="text"
//           placeholder="Enter your name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           style={styles.input}
//         />
//         <input
//           type="text"
//           placeholder="Enter your title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           style={styles.input}
//         />
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleUpload}
//           style={styles.input}
//         />
//         <button
//           onClick={downloadCard}
//           disabled={!imgDataUrl}
//           style={styles.button}
//         >
//           Download Card as .JPG
//         </button>
//       </div>
//     </div>
//   );
// };

// export default InaugurationCard;





// import React, { useState } from 'react';
// import html2canvas from 'html2canvas'; // install via npm install html2canvas

// function InaugurationAvatarCard() {
//   const [name, setName] = useState('');
//   const [title, setTitle] = useState('');
//   const [file, setFile] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [imgDataUrl, setImgDataUrl] = useState(null);

//   const eventDate = 'June 27, 2025';
//   const programDetails = `Join us for an elegant dinner and inauguration ceremony starting at 7 PM. Enjoy speeches, performances, and a celebratory toast to mark the new beginnings. Dress code: Formal.`;

//   const handleFileChange = async (e) => {
//     const f = e.target.files[0];
//     if (!f) return;
//     if (f.size > 10 * 1024 * 1024) {
//       alert('File size exceeds 10 MB. Please choose a smaller image.');
//       return;
//     }
//     setLoading(true);
//     const reader = new FileReader();
//     reader.onload = (ev) => {
//       setImgDataUrl(ev.target.result);
//       setLoading(false);
//     };
//     reader.readAsDataURL(f);
//   };

//   const handleDownload = () => {
//     const card = document.getElementById('avatar-card');
//     html2canvas(card).then(canvas => {
//       const link = document.createElement('a');
//       link.download = `${name || 'avatar'}_avatar.png`;
//       link.href = canvas.toDataURL('image/png');
//       link.click();
//     });
//   };

//   return (
//     <div style={styles.container}>
//       <h2>🎉 Dinner & Inauguration – {eventDate}</h2>
//       <div id="avatar-card" style={styles.card}>
//         {/* top-right logo */}
//         {/* <img
//           src="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
//           alt="Logo"
//           style={styles.logo}
//         /> */}
//         {/* Left decorative image */}
//         {/* <img
//           src="https://via.placeholder.com/100x100.png?text=🎭"
//           alt="Left Decoration"
//           style={styles.decorationLeft}
//         /> */}
//         {/* Right decorative image */}
//         {/* <img
//           src="https://via.placeholder.com/100x100.png?text=🎉"
//           alt="Right Decoration"
//           style={styles.decorationRight}
//         /> */}

//         {/* Avatar upload/display */}
//         <div style={styles.avatarSection}>
//           {loading ? (
//             <div style={styles.loader}>Loading image…</div>
//           ) : imgDataUrl ? (
//             <img src={imgDataUrl} alt="Avatar" style={styles.avatarImage}/>
//           ) : (
//             <div style={styles.avatarPlaceholder}>Your photo here</div>
//           )}
//         </div>

//         {/* Text details */}
//         <div style={styles.detailsSection}>
//           <h3 style={{ margin: '8px 0' }}>{name || 'Your Name'}</h3>
//           <p style={{ margin: '4px 0', fontStyle: 'italic' }}>{title || 'Your Title'}</p>
//           <p style={{ marginTop: 12 }}>{programDetails}</p>
//         </div>
//       </div>

//       {/* Inputs and buttons */}
//       <div style={styles.inputSection}>
//         <input
//           type="text"
//           placeholder="Enter your name"
//           value={name}
//           onChange={e => setName(e.target.value)}
//           style={styles.input}
//         />
//         <input
//           type="text"
//           placeholder="Enter your title"
//           value={title}
//           onChange={e => setTitle(e.target.value)}
//           style={styles.input}
//         />
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleFileChange}
//           style={styles.fileInput}
//         />
//         <button onClick={handleDownload} style={styles.downloadBtn} disabled={!imgDataUrl || !name}>
//           Download Avatar
//         </button>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     fontFamily: '"Helvetica Neue", Arial, sans-serif',
//     width: 600,
//     margin: '20px auto',
//     textAlign: 'center',
//     padding: 20,
//     border: '1px solid #ddd',
//     borderRadius: 8,
//     background: '#fefefe',
//   },
//   card: {
//     position: 'relative',
//     width: '100%',
//     minHeight: 360,
//     padding: 20,
//     border: '2px solid #aaa',
//     borderRadius: 10,
//     background: '#fff',
//     marginBottom: 20,
//     overflow: 'hidden',
//   },
//   logo: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
//     width: 60,
//     height: 60,
//   },
//   decorationLeft: {
//     position: 'absolute',
//     bottom: 10,
//     left: 10,
//     width: 80,
//     height: 80,
//   },
//   decorationRight: {
//     position: 'absolute',
//     bottom: 10,
//     right: 10,
//     width: 80,
//     height: 80,
//   },
//   avatarSection: {
//     margin: '40px auto 20px',
//     width: 150,
//     height: 150,
//     border: '2px solid #bbb',
//     borderRadius: '50%',
//     overflow: 'hidden',
//     background: '#eee',
//   },
//   avatarPlaceholder: {
//     width: '100%',
//     height: '100%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: '#888',
//     fontSize: 14,
//   },
//   avatarImage: {
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//   },
//   detailsSection: {
//     marginTop: 10,
//     textAlign: 'center',
//     padding: '0 20px',
//   },
//   loader: {
//     width: '100%',
//     height: '100%',
//     lineHeight: '150px',
//     color: '#555',
//   },
//   inputSection: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     gap: 12,
//   },
//   input: {
//     width: '80%',
//     padding: 8,
//     fontSize: 14,
//     borderRadius: 4,
//     border: '1px solid #ccc',
//   },
//   fileInput: {
//     fontSize: 14,
//   },
//   downloadBtn: {
//     padding: '8px 16px',
//     fontSize: 14,
//     background: '#007BFF',
//     color: '#fff',
//     border: 'none',
//     borderRadius: 4,
//     cursor: 'pointer',
//     opacity: 1,
//   },
// };

// export default InaugurationAvatarCard;
