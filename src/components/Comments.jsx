import { FaUserCircle } from "react-icons/fa";

const Comments = ({ data }) => {
  // Check if data is valid
  if (!data || !data.name || !data.text) return null;

  const replies = Array.isArray(data.reply) ? data.reply : [];

  return (
    <div className="mt-4 p-2">
      {/* Main comment */}
      <div className="flex gap-3 ">
        <FaUserCircle className="text-6xl text-gray-700" />
        <div>
          <h2 className="font-semibold">{data.name}</h2>
          <p>{data.text}</p>
        </div>
      </div>

      {/* Replies (recursive) */}
      {replies.length > 0 && (
        <div className="ml-6 border-l-2 border-gray-200 pl-4">
          {replies.map((reply, index) => (
            <Comments key={index} data={reply} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comments;
