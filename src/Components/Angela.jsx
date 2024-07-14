import angela from "../images/avatar-angela-gray.webp";
export default function Angela() {
  return (
    <div
      className="flex mb-2 rounded-lg gap-2 p-2"
      style={{ backgroundColor: " hsl(210, 60%, 98%)" }}
    >
      <div className="w-10">
        <img src={angela}></img>
      </div>
      <div>
        <p>
          <span
            className="font-extrabold"
            style={{ color: "hsl(224, 21%, 14%)" }}
          >
            Angela kishy
          </span>
          <span className="ml-1">
            followed you{" "}
            <div
              className="w-2 h-2 inline-block rounded-full ml-1"
              style={{ backgroundColor: "hsl(1, 90%, 64%)" }}
            ></div>
          </span>
        </p>
        <p style={{ color: "hsl(219, 14%, 63%)" }}>5m ago</p>
      </div>
    </div>
  );
}
