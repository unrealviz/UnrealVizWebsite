import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Large 404 Visual / Icon */}
        <div className="text-[120px] font-extralight tracking-tighter opacity-20 leading-none">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">
            Page Not Found
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            The link you followed may be broken, or the page may have been
            removed. Check the URL and try again.
          </p>
        </div>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="/"
            className="px-8 py-3 bg-white text-black font-medium hover:bg-gray-200 transition-colors duration-200 rounded-sm"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
