function filterAVG(students) {
  let hightscore = [];
  for (i = 0; i < students.length; i++) {
    let student = students[i];
    let { math, english, literature } = student.scores;
    let avg = (math + english + literature) / 3;
    if (avg >= 8) {
      hightscore.push(student);
    }
  }

  return hightscore;
}

let students = [
  { name: `Tran Tri Duong`, scores: { math: 9, english: 8, literature: 7 } },

  { name: `Ha Bich Ngoc`, scores: { math: 3, english: 2, literature: 5 } },

  { name: `Bui Thai Son`, scores: { math: 9.5, english: 9, literature: 9 } },
];

let hightscore = filterAVG(students);
console.log(`Danh sach cac hs co diem tb lon hon 8:`, hightscore);
