export default function Loading() {
  return (
    <div className="flex justify-center items-center h-[50vh] flex-col">
      <div className="relative w-12 h-12">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-primary border-opacity-20 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-text">Loading Lalina Kids Cafe...</p>
    </div>
  );
}
