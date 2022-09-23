import axios from 'axios';

const BASE_API_URL = 'http://localhost:5000';

/*  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {
  static async getSnacks() {
    const snacksData = await axios.get(`${BASE_API_URL}/snacks`);
    return snacksData.data.snacks;
  }

  static async getDrinks() {
    const drinksData = await axios.get(`${BASE_API_URL}/drinks`);
    return drinksData.data.drinks;
  }
}

export default SnackOrBoozeApi;
