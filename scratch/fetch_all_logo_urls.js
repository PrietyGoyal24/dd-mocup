const https = require('https');

https.get('https://dd.mocup.in/clientele', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    // Extract all img src from data
    const imgMatches = data.match(/<img[^>]+src=["']([^"']+)["']/g) || [];
    console.log("Total image tags found on page:", imgMatches.length);
    
    const logoUrls = [];
    imgMatches.forEach(tag => {
      const m = tag.match(/src=["']([^"']+)["']/);
      if (m && m[1] && (m[1].includes('clientele') || m[1].includes('uploads') || m[1].includes('assets'))) {
        let url = m[1];
        if (!url.startsWith('http')) {
          url = 'https://dd.mocup.in' + (url.startsWith('/') ? '' : '/') + url;
        }
        logoUrls.push(url);
      }
    });

    console.log("Extracted logo URLs count:", logoUrls.length);
    console.log(JSON.stringify(logoUrls, null, 2));
  });
}).on('error', (e) => {
  console.error("Error fetching page:", e);
});
