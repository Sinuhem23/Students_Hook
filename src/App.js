import './App.css';
import { useState } from 'react';

function App() {
  const [studentData, setStudentData] = useState({
    students: [
      {
        name: 'Cait Yomorta',
        bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. ',
        scores: [
          {
            date: '2018-02-08',
            score: 77,
          },
          {
            date: '2018-04-22',
            score: 92,
          },
          {
            date: '2018-09-15',
            score: 68,
          },
        ],
      },
      {
        name: 'Holly Baird',
        bio: ' Eos id possimus accusantium, earum animi modi hic.',
        scores: [
          {
            date: '2018-12-14',
            score: 88,
          },
          {
            date: '2019-01-09',
            score: 79,
          },
          {
            date: '2019-02-23',
            score: 91,
          },
          {
            date: '2019-03-01',
            score: 95,
          },
        ],
      },
      {
        name: 'Wes Mungia',
        bio: 'Enim repellendus ut veniam?',
        scores: [
          {
            date: '2018-10-11',
            score: 62,
          },
          {
            date: '2018-11-24',
            score: 74,
          },
          {
            date: '2018-12-19',
            score: 85,
          },
        ],
      },
    ],
  });

  return (
    <div className='App'>
      <h1>hello</h1>
    </div>
  );
}

export default App;
