"use client";

import Link from "next/link";
import { useEffect } from "react";

const ErrorPage = ({ error, reset }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Minimalist Icon / Visual */}
        <div className="text-6xl font-light tracking-tighter opacity-50">!</div>

        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">
            System Interruption
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Something went wrong on our end. We&apos;ve been notified and are
            looking into it.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="/"
            className="px-8 py-3 bg-white text-black font-medium hover:bg-gray-200 transition-colors duration-200 rounded-sm"
          >
            Try Again
          </Link>
          <Link
            href="/"
            className="px-8 py-3 border border-white/20 text-white font-medium hover:bg-white/10 transition-colors duration-200 rounded-sm"
          >
            Return Home
          </Link>
        </div>

        {/* Optional: Error Digest for Debugging */}
        {error.digest && (
          <p className="pt-8 text-[10px] uppercase tracking-widest text-gray-600">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;
