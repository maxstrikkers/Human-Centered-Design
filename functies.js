const fs = require('fs').promises;

async function getClothesData(fileName) {
    const dataUrl = '/public/data/' + fileName + '.json';
    const data = await fs.readFile(dataUrl, 'utf-8');
    return JSON.parse(data);
}

// EXPORTS ALL OF THE FUNCTIONS
module.exports = {
    getClothesData
};