"use client";

import Button from "@/components/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl font-bold">Hello World</h1>
      <Button />
    </main>
  );
}
