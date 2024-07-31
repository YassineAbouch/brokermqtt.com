import React from "react";
import Header from "./components/header";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-full w-full ">
      <Header />
      <div className="mx-auto w-full max-w-screen-3xl  lg:h-[calc(100dvh-3.5rem)]  overflow-hidden  [&>*]:h-full [&>*]:w-full [&>*]:overflow-auto">
        {children}
      </div>
    </main>
  );
}
