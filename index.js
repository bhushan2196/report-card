// Constructor function for Student
function Student(name, roll_no, className, section, marks) {
    this.name = name;
    this.roll_no = roll_no;
    this.class = className;
    this.section = section;
    this.marks_of_5_subjects = marks;

    
    this.printTop3Subjects = function () {
     
        const subjectsSortedByMarks = Object.keys(this.marks_of_5_subjects).sort(
            (a, b) => this.marks_of_5_subjects[b] - this.marks_of_5_subjects[a]
        );

       
        console.log("Top Three Subjects:");
        for (let i = 0; i < 3; i++) {
            console.log(subjectsSortedByMarks[i]);
        }
    };

 
    this.printReportCard = function () {
      
        const totalMarks = Object.values(this.marks_of_5_subjects).reduce((sum, mark) => sum + mark, 0);
        const percentage = (totalMarks / 500) * 100;

      
        console.log("+--------------------+");
        console.log("|     REPORT CARD    |");
        console.log("+--------------------+");
        console.log("| Name     -", this.name);
        console.log("| Roll no. -", this.roll_no);
        console.log("| Class    -", this.class);
        console.log("| Section  -", this.section);

      
        for (const subject in this.marks_of_5_subjects) {
            console.log(`| ${subject.charAt(0).toUpperCase() + subject.slice(1)} - ${this.marks_of_5_subjects[subject]}`);
        }

        console.log("| Percentage -", percentage.toFixed(1), "%");
        console.log("+--------------------+");
    };
}


const student1 = new Student("Bhushan", 32, "6", "d", {
    science: 80,
    maths: 75,
    social_science: 79,
    english: 80,
    hindi: 55
});
const student2 = new Student("mohan", 20, "7", "b", {
    science: 80,
    maths: 75,
    social_science: 79,
    english: 80,
    hindi: 55
});


student1.printTop3Subjects();
student1.printReportCard();

student2.printTop3Subjects();
student2.printReportCard();
