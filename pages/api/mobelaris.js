// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  let url = 'https://www.mobelaris.com/es/iluminacion/pendant-lighting';
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'User-Agent': 'hieu test'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error    
  });
  const text = await response.text();
  if (text.includes('Artichoke Lamp - Glass White')) {
    res.status(200).json({ name: 'site up' });  
  } else {
    res.status(404).json({ name: 'site down' });
  }
  
}
