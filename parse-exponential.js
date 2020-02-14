// Use https://www.csvjson.com/csv2json to convert csv data to JSON format
// Add that converted data to this folder in a file named exponentialRaw.json
// exponentialSkillGroups.json is a starter fie in the format needed for the skillGroups array
// within the softSkills[number].ts files within the /data folder. Run this script, and
// then copy paste the output array into the appropriate softSkill.ts file

const fs = require("fs");

var rawData = require("./exponentialRaw.json");
var skillGroups = require("./baseConfigs/exponentialSkillGroups.json");

const outFileName = process.argv[2] || "exponential.json";

const makeSkill = data => {
  const newSkill = {
    domain: "head",
    allCompany: {},
    engineering: {},
    product: {},
    strategy: {},
    business: {},
    operations: {}
  };

  newSkill.skillId = data["ID"];
  newSkill.skillName = data["Skill Name"];
  newSkill.allCompany.notPrioritized = data["Not Prioritized"];
  newSkill.allCompany.learning = data["Learning"];
  newSkill.allCompany.fluent = data["Fluent"];
  newSkill.allCompany.goal = data["Goal"];

  newSkill.engineering.learning = data["E:Learning"];
  newSkill.engineering.fluent = data["E:Fluent"];
  newSkill.engineering.notPrioritized = data["E:Not Prioritized"];

  newSkill.product.learning = data["P:Learning"];
  newSkill.product.fluent = data["P:Fluent"];
  newSkill.product.notPrioritized = data["P:Not Prioritized"];

  newSkill.strategy.learning = data["S:Learning"];
  newSkill.strategy.fluent = data["S:Fluent"];
  newSkill.strategy.notPrioritized = data["S:Not Prioritized"];

  newSkill.business.learning = data["C:Learning"];
  newSkill.business.fluent = data["C:Fluent"];
  newSkill.business.notPrioritized = data["C:Not Prioritized"];

  newSkill.operations.learning = data["O:Learning"];
  newSkill.operations.fluent = data["O:Fluent"];
  newSkill.operations.notPrioritized = data["O:Not Prioritized"];

  return newSkill;
};

rawData.forEach(skillData => {
  const groupName = skillData["Group"];

  const foundGroup = skillGroups.find(
    skillGroup => skillGroup.groupName === skillData["Group"]
  );

  if (foundGroup) {
    foundGroup.skills.push(makeSkill(skillData));
    foundGroup.skills.forEach(skill => console.log(skill));
  } else {
    throw new Error(`Cant find group for `, skillData["Group"]);
  }
});

fs.writeFileSync(
  `configs/${outFileName}`,
  JSON.stringify(skillGroups, null, 2),
  "utf-8"
);
console.log(`New config in /configs/${outFileName}`);
