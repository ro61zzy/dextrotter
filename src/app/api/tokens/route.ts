// // src/app/api/tokens/route.ts
// import { NextResponse } from 'next/server';

// export async function GET() {
//   try {
//     const res = await fetch(
//       'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
//     );

//     if (!res.ok) {
//       return NextResponse.json({ error: 'Failed to fetch tokens' }, { status: 500 });
//     }

//     const data = await res.json();

  
//     const tokens = data.map((coin: any) => ({
//       name: coin.name,
//       symbol: coin.symbol.toUpperCase(),
//       address: coin.id,
//       decimals: 18, 
//       logoURI: coin.image,
//     }));

//     return NextResponse.json(tokens);
//   } catch (error) {
//     console.error('CoinGecko fetch error:', error);
//     return NextResponse.json({ error: 'Internal error' }, { status: 500 });
//   }
// }

