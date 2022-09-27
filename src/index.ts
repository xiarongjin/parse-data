interface Score {
  studentId: number;
  studentName: string;
  courseScore: string;
}
interface RawData {
  teacher_id: number;
  course_id: number;
  score_date: string;
  score: Score[];
}

interface NameData {
  name: string;
  data: (number | undefined)[];
}
interface Parse {
  categories: string[];
  series: NameData[];
}

export const ParseData = (rawData: RawData[], idArr: number[]) => {
  let resData: Parse = {
    categories: [],
    series: [],
  };
  let studentNames: any = {};
  idArr.forEach((ele) => {
    studentNames[ele] = {
      name: "",
      data: new Array(rawData.length).fill(undefined),
    };
  });
  resData.categories = rawData
    .map((res, i) => {
      res.score.map((ele) => {
        studentNames[ele.studentId].name = ele.studentName;
        studentNames[ele.studentId].data[rawData.length - 1 - i] = Number(
          ele.courseScore
        );
      });
      return res.score_date;
    })
    .reverse();
  resData.series = Object.values(studentNames);
  return resData;
};
