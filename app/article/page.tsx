"use client"; 
// ↑ クライアントコンポーネントを使う宣言
//   （useStateなどReact Hooksを使う場合に必要）

import { useState } from "react";
import Image from "next/image";

// -------------------------
// データ型定義
// -------------------------
interface Product {
  id: number;
  name: string;
  description: string;
  date: string;  // 日付（例: "2025-07-01"）
  image: string; // 画像URL（publicフォルダ内）
}

// -------------------------
// サンプルデータ（サイト内の商品）
// -------------------------
const products: Product[] = [
  {
    id: 1,
    name: "Apple iPhone",
    description: "スマートフォン（iOS搭載）",
    date: "2025-07-01",
    image: "/images/iphone.jpg",
  },
  {
    id: 2,
    name: "Samsung Galaxy",
    description: "Androidスマートフォン",
    date: "2025-07-15",
    image: "/images/galaxy.jpg",
  },
  {
    id: 3,
    name: "Sony Headphones",
    description: "ノイズキャンセリングヘッドホン",
    date: "2025-07-20",
    image: "/images/headphones.jpg",
  },
];

// -------------------------
// 文字列正規化関数
// 1. 全角 → 半角
// 2. ひらがな → カタカナ
// 3. 大文字小文字を区別しない
// 4. 全角数字も半角に統一される
// -------------------------
function normalizeText(text: string): string {
  return text
    .normalize("NFKC") // 全角英数字・記号 → 半角
    .replace(/[\u3041-\u3096]/g, (ch) =>
      // ひらがな → カタカナ
      String.fromCharCode(ch.charCodeAt(0) + 0x60)
    )
    .toLowerCase(); // 英字を小文字に
}

export default function Page() {
  const [query, setQuery] = useState(""); // 検索キーワード
  const [results, setResults] = useState<Product[]>(products); // 検索結果

  // -------------------------
  // 検索処理
  // -------------------------
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = event.target.value;
    setQuery(keyword);

    // 入力が空なら全件表示
    if (keyword.trim() === "") {
      setResults(products);
      return;
    }

    // 入力文字を正規化
    const normalizedKeyword = normalizeText(keyword);

    // 商品データを正規化して検索
    const filtered = products.filter((item) => {
      const name = normalizeText(item.name);
      const desc = normalizeText(item.description);
      const date = normalizeText(item.date);

      return (
        name.includes(normalizedKeyword) ||
        desc.includes(normalizedKeyword) ||
        date.includes(normalizedKeyword)
      );
    });

    setResults(filtered);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>商品検索</h1>

      {/* 検索ボックス */}
      <input
        type="text"
        placeholder="商品名・説明・日付で検索"
        value={query}
        onChange={handleSearch}
        style={{ padding: 8, width: "100%", marginBottom: 20 }}
      />

      {/* 検索結果表示 */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {results.map((product) => (
          <li
            key={product.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "20px",
              borderBottom: "1px solid #ccc",
              paddingBottom: "10px",
            }}
          >
            {/* 画像表示 */}
            <Image
              src={product.image}
              alt={product.name}
              width={100}
              height={100}
              style={{ borderRadius: "8px" }}
            />
            <div>
              <strong>{product.name}</strong>
              <p>{product.description}</p>
              <small>{product.date}</small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
