const Employee = require('../lib/employee');

describe("Employee Class", () => {
    it("Can be Instantiated", () => {
        const employee = new Employee();
        expect(typeof (employee)).toBe("object");
        expect(employee instanceof Employee).toBe(true);
    })

    it('Should Have a Name Property That Can Be Set on Instantiation', () => {
        const employee = new Employee('Dave');
        expect(employee.name).toBe('Dave');
    })

    it('Should Have an Id Property That Can Be Set on Instantiation', () => {
        const employee = new Employee('Dave', 1);
        expect(employee.id).toBe(1);
    })

    it('Should Have an Email Property That Can Be Set on Instantiation', () => {
        const employee = new Employee('Dave', 1, 'dave@hotmail.com');
        expect(employee.email).toBe('dave@hotmail.com');
    })

    it('Should Have a Function to Get the Name That Can Be Called After Instantiation', () => {
        const employee = new Employee('Dave', 1, 'dave@hotmail.com');
        expect(employee.getName(1)).toBe('Dave');
    })

    it('Should Have a Function to Get the Id That Can Be Called After Instantiation', () => {
        const employee = new Employee('Dave', 1, 'dave@hotmail.com');
        expect(employee.getId('dave@hotmail.com')).toBe(1);
    })

    it('Should Have a Function to Get the Email That Can Be Called After Instantiation', () => {
        const employee = new Employee('Dave', 1, 'dave@hotmail.com');
        expect(employee.getEmail(1)).toBe('dave@hotmail.com');
    })

    it('Should Have a Function to Get the Role That Can Be Called After Instantiation', () => {
        const employee = new Employee('Dave', 1, 'dave@hotmail.com');
        expect(employee.getRole(1)).toBe('Employee');
    })
});