import { container } from './example.css';

export default function Home() {
  return (
    <main>
      <div className={container}>test</div>
      <div className={container}>난 누굴까</div>
      <li>
        <ol>1</ol>
        <ol>2</ol>
        <ol>3</ol>
      </li>
    </main>
  );
}
