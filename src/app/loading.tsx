import LoadingSpinner from '@/components/LoadingSpinner';

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-[50vh] flex-col">
      <LoadingSpinner size="large" message="Loading Lalina Kids Cafe..." />
    </div>
  );
}
