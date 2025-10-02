import { commentData } from "../utils/commentData";
import Comments from "./Comments";

const CommentsContainer = () => {
  return (
    <div className="shadow-2xl p-4">
      <h1 className="font-bold text-xl mb-4">Comments</h1>
      <div className="w-full">
        {commentData.map((comment, index) => (
          <Comments key={index} data={comment}
           />
        ))}
      </div>
    </div>
  );
};

export default CommentsContainer;
