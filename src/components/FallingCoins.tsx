// 'use client';

// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';

// const coinImages = [
//   '/coins/eth.png',
//   '/coins/bitcoin.png',
//   '/coins/connect.png',
// ];

// const generateCoin = () => ({
//   id: Math.random().toString(36).substr(2, 9),
//   src: coinImages[Math.floor(Math.random() * coinImages.length)],
//   left: `${Math.random() * 100}%`,
//   size: 20 + Math.random() * 30,
//   duration: 5 + Math.random() * 5,
//   delay: Math.random() * 5,
// });

// export default function FallingCoins() {
//   const [coins, setCoins] = useState(() => Array.from({ length: 20 }, generateCoin));

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCoins((prev) => {
//         const newCoins = [...prev];
//         newCoins.shift(); // remove the oldest
//         newCoins.push(generateCoin()); // add a new one
//         return newCoins;
//       });
//     }, 2000); // add a new coin every 2 sec

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div style={{
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       width: '100%',
//       height: '100%',
//       overflow: 'hidden',
//       pointerEvents: 'none',
//       zIndex: -1,
//     }}>
//       {coins.map((coin) => (
//         <motion.img
//           key={coin.id}
//           src={coin.src}
//           initial={{ y: '-10%', opacity: 0 }}
//           animate={{ y: '110%', opacity: 1 }}
//           transition={{
//             duration: coin.duration,
//             delay: coin.delay,
//             ease: 'easeInOut',
//           }}
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             overflow: 'hidden',
//             pointerEvents: 'none',
//             zIndex: -1,
//           }}
          
//         />
//       ))}
//     </div>
//   );
// }
