

const VideoCard = (props) => {
    // console.log(props.data.snippet)
    const { title, channelTitle, publishedAt } = props.data.snippet
    const { url } = props.data.snippet.thumbnails.medium
    return (
        <div className="shadow-xl w-80  h-80">
            <img
                src={url}
                alt=""
                className="rounded-2xl mb-3" />
            <ul>
                <li className="m-2 font-bold">{title}</li>
                <li className="m-2">{channelTitle}</li>
                <li className="m-2 text-gray-500">Uploaded on - {publishedAt.split("T")[0]}</li>
            </ul>
        </div>
    )
}

export default VideoCard
