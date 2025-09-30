import { useEffect, useState } from "react"
import useFetchVideos from "../../hooks/useFetchVideos"
import VideoCard from "./VideoCard"
import { Link } from "react-router-dom"

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
        return <Link to={"/watch?v=" + movie.id.videoId}>
          <VideoCard key={movie.id.videoId} data={movie} />
        </Link>
      })}

    </div>
  )
}

export default MainContainer
