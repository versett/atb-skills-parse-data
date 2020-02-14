// Use https://www.csvjson.com/csv2json to convert csv data to JSON format
// Add that converted data to this folder in a file named rawData.json
// leapSkillGroups.json is a starter fie in the format needed for the skillGroups array
// within the softSkills[number].ts files within the /data folder. Run this script, and
// then copy paste the output array into the appropriate softSkill.ts file

const fs = require("fs");

var data = require("./leapRaw.json");
var skillData = require("./baseConfigs/leapSkillGroups.json");

const outFileName = process.argv[2] || "leap.json";

const updateData = (foundSkill, data) => {
  foundSkill.allCompany.notPrioritized = data["Not Prioritized"];
  foundSkill.allCompany.learning = data["Learning"];
  foundSkill.allCompany.fluent = data["Fluent"];
  foundSkill.allCompany.goal = data["Goal"];

  foundSkill.engineering.learning = data["E:Learning"];
  foundSkill.engineering.fluent = data["E:Fluent"];
  foundSkill.engineering.notPrioritized = data["E:Not Prioritized"];

  foundSkill.product.learning = data["P:Learning"];
  foundSkill.product.fluent = data["P:Fluent"];
  foundSkill.product.notPrioritized = data["P:Not Prioritized"];

  foundSkill.strategy.learning = data["S:Learning"];
  foundSkill.strategy.fluent = data["S:Fluent"];
  foundSkill.strategy.notPrioritized = data["S:Not Prioritized"];

  foundSkill.business.learning = data["C:Learning"];
  foundSkill.business.fluent = data["C:Fluent"];
  foundSkill.business.notPrioritized = data["C:Not Prioritized"];

  foundSkill.operations.learning = data["O:Learning"];
  foundSkill.operations.fluent = data["O:Fluent"];
  foundSkill.operations.notPrioritized = data["O:Not Prioritized"];
};

skillData.forEach(skillGroup => {
  skillGroup.skills.forEach(skill => {
    const dataToUpdate = data.find(dataPiece => {
      return dataPiece["ID"] === skill.skillId;
    });

    if (!dataToUpdate) {
      throw new Error("MISSING DATA FOR", skill);
    } else {
      updateData(skill, dataToUpdate);
    }
  });
});

fs.writeFileSync(
  `configs/${outFileName}`,
  JSON.stringify(skillData, null, 2),
  "utf-8"
);
console.log(`New config in /configs/${outFileName}`);
