import React from 'react';

function Student(props) {
  return (
    <div>
      {props.all_students.map((studentData) => {
        // console.log(props.all_students);
        console.log(studentData.name);
        console.log(studentData.scores);
        return <h1> Hello {studentData.name}!</h1>;

        // setStudentData(studentData);
        // return <Student all_students={studentData} />;
      })}
      <h1> Hello !</h1>
    </div>
  );
}

export default Student;
