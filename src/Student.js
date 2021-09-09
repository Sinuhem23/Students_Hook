import React from 'react';
import Score from './Score';

function Student(props) {
  return (
    <div>
      {props.all_students.map((studentData, idx) => {
        // console.log(props.all_students);
        console.log(studentData.name);
        console.log(studentData.scores);
        return (
          <div className='' key={idx}>
            <h2>{'Welcome ' + studentData.name + '! '}</h2>
            <h3>{' Bio: ' + [studentData.bio]}</h3>
            <h4>Scores</h4>
            <div>
              <Score object={studentData} />
            </div>
          </div>
        );

        // setStudentData(studentData);
        // return <Student all_students={studentData} />;
      })}
    </div>
  );
}

export default Student;
