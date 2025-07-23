import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="main">
      <header>
        <Image
          src="/top.png"
          alt={"かわよい"} 
          width={1344}
          height={896}
        />
        <h1>音ゲーブログ</h1>
      </header>
    </div>
  );
}
