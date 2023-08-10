import jacob from "../images/avatar-jacob-thompson.webp";
export default function Jacob() {
  return (
    <div
      className="flex mb-2 rounded-lg gap-2 p-2"
      style={{ backgroundColor: " hsl(210, 60%, 98%)" }}
    >
      <div className="w-11 md:w-10">
        <img src={jacob}></img>
      </div>
      <div>
        <p>
          <span className="mr-1 font-extrabold">Jacob Thompson</span>
          <span>has joined your group</span>
          <span
            className="ml-1 font-extrabold"
            style={{ color: "hsl(219, 85%, 26%)" }}
          >
            chess club{" "}
            <div
              className="w-2 h-2 inline-block rounded-full ml-1"
              style={{ backgroundColor: "hsl(1, 90%, 64%)" }}
            ></div>
          </span>
        </p>
        <p style={{ color: "hsl(219, 14%, 63%)" }}>1 day ago</p>
      </div>
    </div>
  );
}
