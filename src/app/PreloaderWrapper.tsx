"use client";

import { useEffect, useState } from "react";
import Preloader from "./Preloader";

export default function PreloaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Preloader /> : children}</>;
}
