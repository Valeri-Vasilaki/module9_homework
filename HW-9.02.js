const jsonString = ` { "list": [ { "name": "Petr", "age": "20", "prof": "mechanic" }, { "name": "Vova", "age": "60", "prof": "pilot" } ] } `;
const parseJSON = (jsonString) => {
  const jsonObject = JSON.parse(jsonString);
  const list = jsonObject.list.map((item) => {
    return { name: item.name, age: parseInt(item.age, 10), prof: item.prof };
  });
  return { list };
};
const resultJSON = parseJSON(jsonString);
console.log(resultJSON);