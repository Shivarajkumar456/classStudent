class Student {
    constructor(name, age, phone, marks) {
      this.name = name;
      this.age = age;
      this.phone = phone;
      this.marks = marks;
      this.eligible = this.isEligible();
      Student.count++;
    }
  
    isEligible() {
      return this.marks > 40;
    }
  
    eligibleForPlacements(minMarks) {
    //   return (age) => {
    //     if(this.marks > minMarks && this.age > age){
    //         console.log("Eligible");
    //     }
    //     else console.log("Not eligible");
    // }
    return (age) => this.marks > minMarks && this.age > age;
  }
}
  
  // Initialize the count property to keep track of the number of students created
  Student.count = 0;
  
  const student1 = new Student('Shiva', 19, '984545', 55);
  const student2 = new Student('Raj', 18, '901920', 35);
  const student3 = new Student('Kumar', 20, '789225', 75);
  const student4 = new Student('Ram', 18, '789324', 65);
  const student5 = new Student('Shyam', 22, '789447', 20);
  
//   const checkEligibility = student1.eligibleForPlacements(45);
//   console.log(checkEligibility(18)); // Outputs true
  
  const students = [student1, student2, student3, student4, student5];
//   students.forEach((student) => {
//     console.log(`${student.name} - Marks: ${student.marks}, Age: ${student.age}`);
//   });
  
  const eligibleStudents = students.filter((student) => student.eligibleForPlacements(40)(18));
  console.log(eligibleStudents);
  
  console.log(eligibleStudents.map((student) => student.name)); // Outputs ['Alice', 'Dave']
  