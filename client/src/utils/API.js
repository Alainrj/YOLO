
// import React from 'React'
import axios from "axios";
import ajax from 'ajax'
// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

const credentials = {

    // Alan
    // 'x-app-id': 'a49cbcf2',
    // 'x-app-key': '8fbb4486f5134e84e81d6f3918835982'

    // Camilo
    // 'x-app-id': '7af0b356',
    // 'x-app-key': '59c8379f40e5797d62d756d0b858bc5b',
    // 'x-app-key': '6dd125bab9d995bde5f71cc6399ddbd8'

    // Rob
    'x-app-id': 'e0a12c3e',
    'x-app-key': 'ecea00b679c66c1d11b141d4833d152d',
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

    getFoodItemByItemId: (itemId) => {

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

    getDailyCalories: () => {

        // const url = `https://www.calculator.net/calorie-calculator.html?ctype=standard&cage=${this.state.age}&csex=${this.state.gender}&cheightfeet=${this.state.heightFeet}&cheightinch=${this.state.heightInch}&cpound=${this.state.weight}&cactivity=1.465&cmop=0&coutunit=c&cformula=m&cfatpct=20&printit=0&x=64&y=18`
        const url = "https://www.calculator.net/calorie-calculator.html?ctype=standard&cage=23&csex=m&cheightfeet=11&cheightinch=0&cpound=112&cactivity=1.465&cmop=0&coutunit=c&cformula=m&cfatpct=20&printit=0&x=64&y=18"
        // const url = "http://www.google.com"

        console.log("look at this", url)

        const config = {
            headers: { "Access-Control-Allow-Origin": "*" },
            url: url,
            method: 'GET',
            crossorigin: true   ,
            // contentType: 'application/json',
            // crossDomain: true,
        }

        return axios(config).then((response, err) => {
            console.log('response', response)
            console.log('error', err)

            // return axios.post(url, { crossDomain: false })
            // return ajax.get(url, function (response, err) {
            // const $ = cheerio.load(response.data);

            // console.log('response', response)
            // console.log('error', err)
            //   console.log('take a look',$)


        })

    }
}
