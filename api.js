const axios = require("axios");

async function getDetails(id) {
    try {
        const response = await axios.get(
            `https://tera.ronok.workers.dev/?link=${id}&apikey=0b010c132e2cbd862cbd8a6ae430dd51d3a0d5ea`
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    getDetails,
    
};
