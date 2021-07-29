const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');

describe("Engineer Class", () => {
    it("Can be Instantiated", () => {
        const engineer = new Engineer(1, 'Dave', 'dave@hotmail.com', 'dave486');
        expect(typeof (engineer)).toBe("object");
        expect(engineer instanceof Engineer).toBe(true);
    })

    it('Should Have a Github Property That Can Be Set on Instantiation', () => {
        const engineer = new Engineer(1, 'Dave', 'dave@hotmail.com', 'dave486');
        expect(engineer.github).toBe('dave486');
    })

    it('Should Have an Id Property That Can Be Set on Instantiation', () => {
        const engineer = new Engineer(1, 'Dave', 'dave@hotmail.com', 'dave486');
        expect(engineer.id).toBe(1);
    })

    it('Should Have a Function to Get the Github Username That Can Be Called After Instantiation', () => {
        const engineer = new Engineer(1, 'Dave', 'dave@hotmail.com', 'dave486');
        expect(engineer.getGithub(1)).toBe('dave486');
    })

    it('Should Have a Function to Get the Role That Can Be Called After Instantiation', () => {
        const engineer = new Engineer(1, 'Dave', 'dave@hotmail.com', 'dave486');
        expect(engineer.getRole(1)).toBe('Engineer');
    })
});