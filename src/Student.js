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
          <div id={'stu' + idx} key={idx}>
            <h1> Welcome {studentData.name}!</h1>
            <h1> Bio: [{studentData.bio}]</h1>
            <h2>Scores</h2>
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
