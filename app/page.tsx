import Image from "next/image";
import "./homepage.css";

export default function Home() {
  return (
    <div className="main">
      <header className="header">
        <p>A</p>
      </header>
      <div className="top">
        <div className="top-image">
          <Image
            src="/top.png"
            alt="kawaii"
            width={1344}
            height={896}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
}
