import React from "react";

export default function SliderLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto mt-10 px-4 lg:px-10">{children}</div>
  );
}
