import Image from "next/image";
import "./homepage.css";

export default function Home() {
  return (
    <div className="main">
      <div className="top">
        <p>あ</p>
      </div>
      <header className="header">
        {/**<Image
          className="top_picture"
          src="/top.png"
          alt={"かわよい"} 
          width={1344}
          height={896}
        />*/}
        <h1>音ゲーブログ</h1>
      </header>
    </div>
  );
}
