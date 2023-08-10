import mark from "../images/avatar-mark-webber.webp";
export default function Header() {
  return (
    <div
      className="flex mb-2 rounded-lg p-2 gap-2"
      style={{ backgroundColor: " hsl(210, 60%, 98%)" }}
    >
      <span>
        <img src={mark} alt="mark webber" className="w-16 md:w-10 " />
      </span>
      <div>
        <p>
          <span
            className="font-extrabold inline-block  mr-1"
            style={{ color: "hsl(224, 21%, 14%)" }}
          >
            Mark webber
          </span>
          <span className="">reacted to your recent post</span>
          <span className="font-medium ml-1">
            My first tournament today!
            <div
              className="w-2 h-2 inline-block rounded-full ml-1"
              style={{ backgroundColor: "hsl(1, 90%, 64%)" }}
            ></div>
          </span>
        </p>
        <span
          className="align block text-left"
          style={{ color: "hsl(219, 14%, 63%)" }}
        >
          1m ago
        </span>
      </div>
    </div>
  );
}
