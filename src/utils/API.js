import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default  {
  getList: async function() {
    try {
      const res = await axios.get(
        "https://randomuser.me/api/?inc=name,email,phone,picture&results=40&nat=us,dk,fr,gb,au,br,ca,cn,de,es,us"
      );
      return res;
    } catch (err) {
      return console.log('//////////// API Error ////////////', err);
    }
  }
};