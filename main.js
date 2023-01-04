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
      if(this.marks > 40) return "Eligible";
      else return "Not Eligible";
    }
  }
  
  // Initialize the count property to keep track of the number of students created
  Student.count = 0;
  
  const student1 = new Student('Shiva', 12, '984545', 55);
  const student2 = new Student('Raj', 13, '901920', 35);
  const student3 = new Student('Kumar', 13, '789225', 75);
  const student4 = new Student('Ram', 12, '789324', 65);
  const student5 = new Student('Shyam', 11, '789447', 20);
  console.log(student1.isEligible()); //true
  console.log(student2.isEligible()); //false
  console.log(Student.count); // Outputs 5
  