
import { YOUTUBE_API } from '../src/utils/constants'
const useFetchVideos = async () => {
    try {
        const rawData = await fetch(YOUTUBE_API)
        const result = await rawData.json()
        return result.items
    }
    catch (err) {
        console.log("Error fetching youtube api", err)
    }

}

export default useFetchVideos
