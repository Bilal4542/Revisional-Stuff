import { useState } from "react"
import tiktokVideoDownloader from "./api";

function App() {

  const [url, setUrl] = useState('');
  const [data, setData] = useState('');
  const [error, serError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await tiktokVideoDownloader(url)
      setData(response.data.data.play)
      console.log(response.data)
    } catch (error) {
      serError('Something Went Wrong...')
    }
  }
  return (
    <>
        <div className="">
          <div className="flex flex-col items-center justify-center space-y-2 mt-6">
            <h1 className="font-bold text-2xl">TikTok Video Downloader</h1>
            <h3 className="font-semibold text-lg">Without WaterMark</h3>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center space-x-2">
              <input value={url} onChange={(e)=>setUrl(e.target.value)} className="p-2 border border-gray-300 outline-none rounded-xl w-[300px]" type="text" placeholder="Enter TikTok Video URL" />
            <button className="bg-blue-500 py-2 px-3 rounded-xl font-semibold text-white hover:bg-blue-400 transition-all ease-in-out duration-300 cursor-pointer" type="submit">Download</button>
            </form>
            {error && <p className="font-bold text-lg text-red-600">{error}</p>}
              {data && (
                <div className="video-container">
                <video controls width='640' height='360'>
                  <source src={data} type="video/mp4" />
                  Your Browser Does not Support the video tag.
                </video>
              </div>
              )}
          </div>
        </div>
    </>
  )
}

export default App
