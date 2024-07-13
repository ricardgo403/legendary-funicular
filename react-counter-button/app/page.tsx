"use client";

import Image from "next/image";
import { useState } from "react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl font-bold">Hello World</h1>
      <Button />
    </main>
  );
}

function Button() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
}

  return (
    <button
    onClick={handleClick}
    type="button"
    className="bg-blue-500 hover:bg-blue-700 rounded text-white font-bold px-4 py-2">
      I have been clicked {count} times
    </button>);
}
