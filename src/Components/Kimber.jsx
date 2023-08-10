import Kimber from "../images/avatar-kimberly-smith.webp";
import Chess from "../images/image-chess.webp";
export default function AboveFotter() {
  return (
    <div className="flex mb-2 rounded-lg gap-2 p-2 relative">
      <span className="w-10">
        <img src={Kimber} />
      </span>
      <div>
        <p>
          <span
            className=" font-extrabold"
            style={{ color: "hsl(224, 21%, 14%)" }}
          >
            Kimberly Smith
          </span>
          <span className="ml-1">commented on your picture</span>
        </p>
        <span className="align" style={{ color: "hsl(219, 14%, 63%)" }}>
          1 week ago
        </span>
      </div>

      <span className="w-10 absolute right-0">
        <img src={Chess} />
      </span>
    </div>
  );
}
