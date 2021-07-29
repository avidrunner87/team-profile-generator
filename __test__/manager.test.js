const Employee = require('../lib/employee');
const Manager = require('../lib/manager');

describe("Manager Class", () => {
    it("Can be Instantiated", () => {
        const manager = new Manager(1, 'Dave', 'dave@hotmail.com', 2342);
        expect(typeof (manager)).toBe("object");
        expect(manager instanceof Manager).toBe(true);
    })

    it('Should Have an Office Number Property That Can Be Set on Instantiation', () => {
        const manager = new Manager(1, 'Dave', 'dave@hotmail.com', 2342);
        expect(manager.officeNumber).toBe(2342);
    })

    it('Should Have an Id Property That Can Be Set on Instantiation', () => {
        const manager = new Manager(1, 'Dave', 'dave@hotmail.com', 2342);
        expect(manager.id).toBe(1);
    })

    it('Should Have a Function to Get the Office Number That Can Be Called After Instantiation', () => {
        const manager = new Manager(1, 'Dave', 'dave@hotmail.com', 2342);
        expect(manager.getOfficeNum(1)).toBe(2342);
    })

    it('Should Have a Function to Get the Role That Can Be Called After Instantiation', () => {
        const manager = new Manager(1, 'Dave', 'dave@hotmail.com', 2342);
        expect(manager.getRole(1)).toBe('Manager');
    })
});