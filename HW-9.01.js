const xmlString = ` <list> <student> <name lang="en"> <first>Ivan</first> <second>Ivanov</second> </name> <age>35</age> <prof>teacher</prof> </student> <student> <name lang="ru"> <first>Петр</first> <second>Петров</second> </name> <age>58</age> <prof>driver</prof> </student> </list> `;
const parseXML = (xmlString) => {
  constparser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, "text/xml");
  const list = Array.from(xmlDoc.getElementsByTagName("student")).map(
    (student) => {
      const nameNode = student.getElementsByTagName("name")[0];
      const lang = nameNode.getAttribute("lang");
      const firstName = nameNode.getElementsByTagName("first")[0].textContent;
      const secondName = nameNode.getElementsByTagName("second")[0].textContent;
      const age = parseInt(
        student.getElementsByTagName("age")[0].textContent,
        10
      );
      const prof = student.getElementsByTagName("prof")[0].textContent;
      return { name: `${firstName} ${secondName}`, age, prof, lang };
    }
  );
  return { list };
};
const result = parseXML(xmlString);
console.log(result);