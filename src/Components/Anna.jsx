import anna from "../images/avatar-anna-kim.webp";
export default function Last() {
  return (
    <div className="flex mb-2 rounded-lg gap-2 p-2">
      <div className="w-10">
        <img src={anna}></img>
      </div>
      <div>
        <p>
          <span
            className=" font-extrabold mr-1"
            style={{ color: "hsl(224, 21%, 14%)" }}
          >
            Anna Kim
          </span>
          <span>left the group</span>
          <span
            className=" font-extrabold ml-1"
            style={{ color: "hsl(219, 85%, 26%)" }}
          >
            chess club
          </span>
        </p>
        <p style={{ color: "hsl(219, 14%, 63%)" }}>2 weeks ago</p>
      </div>
    </div>
  );
}
