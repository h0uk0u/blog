"use client";

import './Footer.css'

export default function Footer(){
    return(
        <div className="footer">
            <h1>砲口の音ゲーブログ</h1>
            <ul className="list">
                <li className="item">
                    <a href="/">TOP</a>
                </li>
                <li className="item">
                    <a href="/article">ARTICLE</a>
                </li>
                <li className="item">
                    <a href="/about">ABOUT</a>
                </li>
            </ul>
        </div>
    )
}
    
