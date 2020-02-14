This package contains two scripts that parse json data to convert it into a config for the ATB Skills Visualization project.

`node parse-leap.js`

Requires `leapRaw.json` to be populated with a JSON export of the LEAP skills data sheet.

The base config is found in `leapSkillGroups.json`. This contains the structure for all the groups and skills, with each skill's head/hand/heart domain attribute.

`node parse-exponential.js`

Requires `leapExponential.json` to be populated with a JSON export of the Exponential skills data sheet.

The base config is found in `exponentialSkillGroups.json`. This contains a skeleton of the skill groups with no additional information.

```
{
    "domain": "head|hand|heart",
    "skillId": number,
    "skillName": string,
    "allCompany": {
        "notPrioritized": number,
        "learning": number,
        "fluent": number,
        "goal": number
    },
    "engineering": {
        "learning": number,
        "fluent": number,
        "notPrioritized": number
    },
    "product": {
        "learning": number,
        "fluent": number,
        "notPrioritized": number
    },
    "strategy": {
        "learning": number,
        "fluent": number,
        "notPrioritized": number
    },
    "business": {
        "learning": number,
        "fluent": number,
        "notPrioritized": number
    },
    "operations": {
        "learning": number,
        "fluent": number,
        "notPrioritized": number
    }
}
```
