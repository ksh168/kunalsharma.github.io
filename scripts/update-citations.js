const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

// Add delay to avoid rate limiting
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchGoogleScholarCitations(url) {
    try {
        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });
        const $ = cheerio.load(response.data);
        const citations = $('div.gs_ri div.gs_fl').text();
        const citationCount = citations.match(/Cited by (\d+)/);
        return citationCount ? parseInt(citationCount[1]) : null;
    } catch (error) {
        console.error(`Error fetching citations for ${url}:`, error.message);
        return null;
    }
}

async function updateCitations() {
    // Read the data file
    const dataPath = path.join(__dirname, '../src/data/data.json');
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    
    // Update citations for each publication
    for (const pub of data.publications) {
        const citations = await fetchGoogleScholarCitations(pub.publisherUrl);
        if (citations !== null) {
            pub.citations = citations;
            pub.lastUpdated = new Date().toISOString();
        }
        // Add delay between requests
        await delay(100000); // 100 seconds delay
    }
    
    // Write updated data back to file
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    console.log('Citations updated successfully');
}

updateCitations().catch(console.error); 