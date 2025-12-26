// import axios from 'axios'
// const encodedParams = new URLSearchParams();

// const tiktokVideoDownloader = async (url) => {
//   const options = {
//   method: 'GET',
//   url: 'https://tiktok-video-no-watermark2.p.rapidapi.com/',
//     params:{
//     url: url,
//     hd: '0'
//   },
//   headers: {
//     'x-rapidapi-key': '1a51286a9fmshc212bc86e6c32f6p1966f5jsn715bfe19f994',
//     'x-rapidapi-host': 'tiktok-video-no-watermark2.p.rapidapi.com',
//     'Content-Type': 'application/x-www-form-urlencoded'
//   },

//   data: encodedParams,
// };
// async function fetchdata() {
// 	try {
// 		const response = await axios.request(options);
// 		return response;
// 	} catch (error) {
// 	 throw error
// 	}
// }
// fetchdata();
// }


// export default tiktokVideoDownloader;


import axios from "axios";

const tiktokVideoDownloader = async (url) => {
  try {
    const response = await axios.get(
      "https://tiktok-video-no-watermark2.p.rapidapi.com/",
      {
        params: {
          url: url,
          hd: "0",
        },
        headers: {
          "x-rapidapi-key": "1a51286a9fmshc212bc86e6c32f6p1966f5jsn715bfe19f994",
          "x-rapidapi-host": "tiktok-video-no-watermark2.p.rapidapi.com",
        },
      }
    );

    return response.data; // ✅ MUST return
  } catch (error) {
    throw error;
  }
};

export default tiktokVideoDownloader;
