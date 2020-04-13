import axios from "axios";

//const apiKey = "46a90fc8552f8562d902b260f25ed692";
const apiKey = "5ad98cbbeebb6dcbdcfd7ea7841ac387";

/*
  Problème :
[
  {
    "title": "Unauthorized",
    "status": 401,
    "cause": "Invalid User key or no user key",
    "details": "Place your key in the header of the requests ex: \"user-key\": YOURKEY"
  }
]
*/

const ApiHelper = {
  search: searchText => {
    const url = `https://api-v3.igdb.com/games/`;

    return axios.get(url, {
      headers: {
        'Accept': 'application/json',
        'user-key': apiKey
      },
      params: {
        name: searchText
      },
      data: 'name'
    }).then(response => {
      console.log(response.data.text());
    })
      .catch(err => {
        console.error(err);
      });
  }
};

export default ApiHelper;
