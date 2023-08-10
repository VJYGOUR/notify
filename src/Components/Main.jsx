export default function Main() {
  return (
    <div className="flex mb-3 relative h-10 items-center md:mb-4 md:mt-2">
      <h1 className="absolute left-0 min-h-min">
        <span className="h-full text-xl font-black"> Notifications</span>
        <span className="h-full px-2 bg-blue-900 text-white mx-2 text-lg rounded-md">
          3
        </span>
      </h1>
      <p className="absolute right-0">Mark all as read</p>
    </div>
  );
}
