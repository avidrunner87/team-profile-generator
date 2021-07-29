const Employee = require('../lib/employee');
const Intern = require('../lib/intern');

describe("Intern Class", () => {
    it("Can be Instantiated", () => {
        const intern = new Intern(1, 'Dave', 'dave@hotmail.com', 'University of Development');
        expect(typeof (intern)).toBe("object");
        expect(intern instanceof Intern).toBe(true);
    })

    it('Should Have a School Property That Can Be Set on Instantiation', () => {
        const intern = new Intern(1, 'Dave', 'dave@hotmail.com', 'University of Development');
        expect(intern.school).toBe('University of Development');
    })

    it('Should Have an Id Property That Can Be Set on Instantiation', () => {
        const intern = new Intern(1, 'Dave', 'dave@hotmail.com', 'University of Development');
        expect(intern.id).toBe(1);
    })

    it('Should Have a Function to Get the School That Can Be Called After Instantiation', () => {
        const intern = new Intern(1, 'Dave', 'dave@hotmail.com', 'University of Development');
        expect(intern.getSchool(1)).toBe('University of Development');
    })

    it('Should Have a Function to Get the Role That Can Be Called After Instantiation', () => {
        const intern = new Intern(1, 'Dave', 'dave@hotmail.com', 'University of Development');
        expect(intern.getRole(1)).toBe('Intern');
    })
});