'use client';

import { useEffect, useState } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 3; // الحد الأقصى لإعادة التحميل

  useEffect(() => {
    if (retryCount < MAX_RETRIES) {
      const timeout = setTimeout(() => {
        setRetryCount((prev) => prev + 1);
        reset(); // محاولة إعادة التحميل
      }, 3000); // إعادة المحاولة بعد 3 ثوانٍ

      return () => clearTimeout(timeout);
    }
  }, [retryCount, reset]);

  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <h2>Attempting to reload... ({retryCount}/{MAX_RETRIES})</h2>

        {retryCount >= MAX_RETRIES ? (
          <>
            <p>We couldn&apos;t recover from this error.</p>
            <button onClick={() => window.location.reload()}>Reload Page</button>
          </>
        ) : (
          <p>Retrying in a few seconds...</p>
        )}
      </body>
    </html>
  );
}
