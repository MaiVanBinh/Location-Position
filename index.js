const axios = require("axios");
const API_KEY = "deb477d5f611269ca626d6450ca5228d";

const position = { latitude: 10.81691, longitude: 106.63832 };
const isGetLocation = false;

const getLocationByPosition = ({ latitude, longitude }, callback) => {
  axios
    .get(
      `http://api.positionstack.com/v1/reverse?access_key=${API_KEY}&query=${latitude},${longitude}`
    )
    .then((res) => callback(res.data))
    .catch((err) => console.log(err));
};

const getPositionByLocation = (name, callback) => {
  axios
    .get(
      `http://api.positionstack.com/v1/forward?access_key=${API_KEY}&query=${encodeURI(
        name
      )}`
    )
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

if (isGetLocation) {
  getLocationByPosition(position, (result) => {
    // result is list location order by confidence -> get highest confidence
    // print highest confidence item
    console.log(result.data[0]);
  });
} else {
  getPositionByLocation("Thu Duc District, Ho Chi Minh City", (result) => {
    // result is list location order by confidence -> get highest confidence
    // print highest confidence item
    console.log(result.data[0]);
  });
}
