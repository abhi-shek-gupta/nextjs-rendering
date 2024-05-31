import Image from "next/image";
import { Inter } from "next/font/google";
import Nav from "../components/Nav";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="wrapper">
      <h1 className="font-extrabold"> Next Js Rendering </h1>
      <ul className="list-disc m-11">
        <li>SSG</li>
        <li>SSR</li>
        <li>ISR</li>
        <li>CSR</li>
      </ul>
    </div>
  );
}
