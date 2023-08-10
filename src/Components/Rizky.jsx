import rizky from "../images/avatar-rizky-hasanuddin.webp";
export default function Centre() {
  return (
    <div className="mb-3">
      <div className="flex  rounded-lg gap-2 p-2">
        <span className="w-10 ">
          <img src={rizky} />
        </span>
        <div>
          <p>
            <span
              className=" font-extrabold mr-1"
              style={{ color: "hsl(224, 21%, 14%)" }}
            >
              Rizky Hassananuddin
            </span>
            <span>sent you a private mesage</span>
          </p>
          <span className="align" style={{ color: "hsl(219, 14%, 63%)" }}>
            5 days ago
          </span>
        </div>
      </div>
      <div className="text-right">
        <span className="inline-block w-10/12 text-left border-2 border-solid border-gray-300 p-2 hover:bg-slate-400 cursor-pointer">
          Hello thanks for setting up the chess club. I have been a member for a
          weeks now and i'm having a lots of fun and improving my game.
        </span>
      </div>
    </div>
  );
}
