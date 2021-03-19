import axios from "axios";

// Export an object containing methods we'll use for accessing the GitHub Jobs API

// eslint-disable-next-line import/no-anonymous-default-export
// export default  {
//   getList: function() {
//     return axios.get(
//       "https://randomuser.me/api/?inc=name,email,phone&results=50"
//     )
//       .then(res => console.log('//////////// API Response /////////', res))
//       .catch(err => console.log('//////////// API Error /////////', err));
//   }
// };

// eslint-disable-next-line import/no-anonymous-default-export
export default  {
  getList: async function() {
    try {
      const res = await axios.get(
        "https://randomuser.me/api/?inc=name,email,phone&results=50"
      );
      console.log('//////////// API Response /////////', res);
      return res;
    } catch (err) {
      return console.log('//////////// API Error ////////////', err);
    }
  }
};