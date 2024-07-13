"use client";

import Button from "@/components/button";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl font-bold">Hello World</h1>
      <Button count={count} onClick={handleClick}/>
      <Button count ={count} onClick={handleClick}/>
    </main>
  );
}
