'use client';

import { useEffect, useState } from 'react';
import { container } from './example.css';

export default function Home() {
  const [qqq, setQqq] = useState();

  useEffect(() => setQqq(1), []);

  return (
    <main>
      <div className={container}>test</div>
      <div className={container}>난 누굴까</div>
      <div className={container}>난 누굴까</div>
      <div className={container}>난 누굴까</div>
      <div className={container}>난 누굴까</div>
      <div className={container}>난 누굴까</div>
      <div className={container}>난 누굴까</div>
      <div className={container}>난 누굴까</div>
      <div className={container}>난 누굴까</div>
      <div className={container}>난 누굴까</div>
      <li>
        <ol>1</ol>
        <ol>2</ol>
        <ol>3</ol>
      </li>
      <li>
        <ol>1</ol>
        <ol>2</ol>
        <ol>3</ol>
      </li>
      <li>
        <ol>1</ol>
        <ol>2</ol>
        <ol>3</ol>
      </li>
    </main>
  );
}
