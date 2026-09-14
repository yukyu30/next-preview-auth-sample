'use client';
import { useState } from 'react';
import Link from 'next/link';
export default function Page() {
 const [count,setCount] = useState(0);
 return <main><p className="eyebrow">Next.js · Preview Sample</p><h1>認証後のページ</h1><p>このプルリクエストのプレビューで、パスワード認証を試せます。</p><button onClick={()=>setCount(count+1)}>カウント {count}</button><p><Link href="/about">別のページへ</Link></p></main>;
}
