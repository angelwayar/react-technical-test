import { useEffect, useState } from 'react';
import './App.css';
import { getPeople } from './datasource/datasource';
import People from './models/people';

function App() {
  const [people, setPeople] = useState<People[]>([]);
  const [page, setPageState] = useState<number>(1);

  useEffect(() => {
    /// Calls the data source to obtain the data
    getPeople(page).then((data) => setPeople(data));
  }, []);

  const onChangePage = (previousOrNextPage: number) => {
    if ((previousOrNextPage < 1) || (previousOrNextPage > 9)) { return };
    getPeople(previousOrNextPage).then((data) => {
      setPageState(previousOrNextPage);
      setPeople(data);
    });
  }

  return (
    <div className="App">
      <ul>
        {
          people.map((person) => {
            return (
              <li key={person.name}>
                {person.name}
              </li>
            );
          })
        }
      </ul>
      <section>
        <button onClick={() => onChangePage(page - 1)}>previous</button>
        |{page}|
        <button onClick={() => onChangePage(page + 1)}>next</button>
      </section>
    </div>
  )
}

export default App
