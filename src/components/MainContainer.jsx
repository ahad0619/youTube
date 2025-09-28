import { useEffect, useState } from "react"
import useFetchVideos from "../../hooks/useFetchVideos"
import VideoCard from "./VideoCard"

const MainContainer = () => {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    const getVideos = async () => {
      const videoData = await useFetchVideos()
      setVideos(videoData)
    }
    getVideos()
  }, [])

  // console.log(videos)
  return (
    <div className="w-[90vw]  flex gap-3 flex-wrap mb-6 ml-12">
      {videos.map((movie) => {
        return <VideoCard key={movie.id} data={movie} />
      })}

    </div>
  )
}

export default MainContainer
