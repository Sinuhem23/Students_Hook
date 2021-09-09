import React from 'react';

export default function Score(props) {
  return props.object.scores.map((scoreInfo, idx) => (
    <div key={idx}>
      Score Date: {scoreInfo.date}
      <p className='score'>
        Score: <strong>{scoreInfo.score}</strong>
      </p>
    </div>
  ));
}
