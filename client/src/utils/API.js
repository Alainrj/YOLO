
// import React from 'React'
import axios from "axios";
import ajax from 'ajax'
// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

const credentials = {

    // Alan
    'x-app-id': 'a49cbcf2',
    'x-app-key': '8fbb4486f5134e84e81d6f3918835982'

    // Camilo
    // 'x-app-id': '7af0b356',
    // 'x-app-key': '59c8379f40e5797d62d756d0b858bc5b',
    // 'x-app-key': '6dd125bab9d995bde5f71cc6399ddbd8'

    // Rob
    // 'x-app-id': 'e0a12c3e',
    // 'x-app-key': 'ecea00b679c66c1d11b141d4833d152d',
}

export default {
    // Get restaurants based on geolocation
    getRestaurants: (lat, lng) => {


        const config = {
            headers: Object.assign({}, credentials),
            url: "https://trackapi.nutritionix.com/v2/locations",
            method: 'GET',
            contentType: 'application/json',
            params: {
                ll: `${lat},${lng}`,
                distance: '5mi',
                limit: 50
            }
        }

        return axios(config)
    },


    getRestaurantsByBrandId: (brandIds, querySearch) => {
        const config = {
            headers: Object.assign({}, credentials),
            url: "https://trackapi.nutritionix.com/v2/search/instant",
            method: 'GET',
            query: querySearch,
            contentType: 'application/json',
            params: {
                query: querySearch,
                branded: true,
                self: false,
                common: false,
                brand_ids: brandIds,
                branded_region: 1,
            }
        }

        return axios(config)
    },

    getFoodItemByItemId: function (itemId) {

        const config = {
            headers: Object.assign({}, credentials),
            url: `https://trackapi.nutritionix.com/v2/search/item?nix_item_id=${itemId}`,
            // nix_item_id: itemId,
            upc: 0,
            claims: true,
            method: 'GET',
            contentType: 'application/json',
        }

        return axios(config)
    },

    getFoodByQuery: (query) => {

        const config = {
            headers: Object.assign({}, credentials),
            url: `https://trackapi.nutritionix.com/v2/search/instant`,
            line_delimited: false,
            query: query,
            method: 'GET',
            contentType: 'application/json',
            params: {
                query: query,
                branded: true,
                self: true,
                common: true,
                branded_region: 1,
            },
        }

        return axios(config)
    }
}
