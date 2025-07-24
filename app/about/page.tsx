'use client'
import Image from "next/image"
import "./about.css"
import Header from "@/components/Header/Header"

export default function about() {
    return(
        <div className="main">
            <Header
                title="ABOUT"
                backgroundImage="/header/header-1.png"
            />
            <div className="about-me">
                <h2>私について</h2>
                <p>音ゲーが好きな人。このウェブサイトも趣味です。</p>
                <p>2022頃に東方ダンマクカグラから音ゲーをはじめ、それ以降ほぼずっと音ゲーをやっている。</p>
            </div>
            <div className="game">
                <h2>メインでやっている音ゲー</h2>
                <p>CHUNITHM</p>
                <p>SDVX</p>
                <p>Arcaea</p>
                <p>プロセカ</p>
            </div>
        </div>
    )
}