import { ParseData } from "../src/index";
const resData = {
  data: [
    {
      teacher_id: 4,
      course_id: 13,
      score_date: "2022-09-28",
      score: [{ studentId: 76, studentName: "李雨辰", courseScore: "23" }],
    },
    {
      teacher_id: 4,
      course_id: 13,
      score_date: "2022-09-27",
      score: [{ studentId: 99, studentName: "黄乔苹", courseScore: "66" }],
    },
    {
      teacher_id: 4,
      course_id: 13,
      score_date: "2022-09-26",
      score: [
        { studentId: 76, studentName: "李雨辰", courseScore: "74.5" },
        { studentId: 86, studentName: "汤刘恺", courseScore: "86.5" },
        { studentId: 99, studentName: "黄乔苹", courseScore: "99" },
      ],
    },
  ],
  code: 200,
  message: "success",
};
let res = {
  categories: ["2022-09-26", "2022-09-27", "2022-09-28"],
  series: [
    {
      name: "李雨辰",
      data: [74.5, undefined, 23],
    },
    {
      name: "汤刘恺",
      data: [86.5, undefined, undefined],
    },
    {
      name: "黄乔苹",
      data: [99, 66, undefined],
    },
  ],
};
const idArr = [76, 86, 99];
test("test Main1", () => {
  expect(ParseData(resData.data, idArr)).toStrictEqual(res);
});
