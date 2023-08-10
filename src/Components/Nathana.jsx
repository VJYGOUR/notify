import Nathana from "../images/avatar-nathan-peterson.webp";
export default function Fotter() {
  return (
    <div className="flex mb-2 rounded-lg gap-2 p-2">
      <span className="w-16 md:w-11">
        <img src={Nathana} />
      </span>
      <div>
        <p>
          <span
            className=" font-extrabold mr-1"
            style={{ color: "hsl(224, 21%, 14%)" }}
          >
            Nathan Peterson
          </span>
          <span>reacted to your recent post</span>
          <span>5 end-game startegies to increase your win rate</span>
        </p>
        <span className="align" style={{ color: "hsl(219, 14%, 63%)" }}>
          2 weeks ago
        </span>
      </div>
    </div>
  );
}
