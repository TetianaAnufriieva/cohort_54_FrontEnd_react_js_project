// First option example - экспорт переменных по отдельности
// export const animal = {
//   type: "Tiger",
//   fullName: "Marti",
//   age: 10,
//   color: "Orange Striped",
//   isPlanteater: false,
//   avatarURL: "https://eskipaper.com/images/tiger-13.jpg",
// };

// export const hello = "Hello, it is my first React component";

// export const getPlanteaterStatus = (isPlanteater) => {
//   if (isPlanteater) {
//     return "YES";
//   } else return "NO";
// };

// Second option example - экспорт всех переменных в одном месте в фигурных скобках
const animal = {
  type: "Tiger",
  fullName: "Marti",
  age: 10,
  color: "Orange Striped",
  isPlanteater: false,
  avatarURL: "https://eskipaper.com/images/tiger-13.jpg",
};

const hello = "Hello, it is my first React component";

const getPlanteaterStatus = (isPlanteater) => {
  if (isPlanteater) {
    return "YES";
  } else return "NO";
};

export {animal, hello};
export default getPlanteaterStatus;