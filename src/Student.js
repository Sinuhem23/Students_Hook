import React from 'react';

function Student(props) {
  props.all_students.forEach((studentData) => {
    // console.log(props.all_students);
    console.log(studentData.name);
    console.log(studentData.bio);

    // setStudentData(studentData);
    // return <Student all_students={studentData} />;
  });
  return (
    <div>
      <h1> Hello {props.all_students.name}!</h1>
      <h1> Hello !</h1>
    </div>
  );
}

export default Student;
