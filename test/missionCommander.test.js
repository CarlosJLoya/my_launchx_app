const MissionCommander = require('./../app/missionCommander');
const myMissionCommander = new MissionCommander("Woopa")
describe("Unit Tests for Mission Commander Class", () => {
    test('1) Create a mission commander objet', () => {
        //const result = 1 + 9
        const myMissionCommander = new MissionCommander("Woopa")
        // expect(result).toBe(10);
        expect(myMissionCommander.name).toBe("Wooparrrr");
    });
})