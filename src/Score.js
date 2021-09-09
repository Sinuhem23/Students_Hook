import React from 'react';

export default function Score(props) {
  return props.object.scores.map((scoreInfo, idx) => (
    <div key={idx}>
      <p className='date'>
        {' '}
        Date: <strong className='inner_date'>{scoreInfo.date}</strong>
      </p>
      <p className='score_inner_text'>
        Score: <strong className='score'>{scoreInfo.score}</strong>
      </p>
    </div>
  ));
}
