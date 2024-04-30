import ActiveLabel from './components/ActiveLabel';
import NotActiveLabel from './components/NotActiveLabel';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home Page</h1>
      <ActiveLabel>Active</ActiveLabel>
      <NotActiveLabel>Not Active</NotActiveLabel>
    </main>
  );
}
