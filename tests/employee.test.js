const Employee = require('../lib/Employee');

describe('Employee', () =>{
    it('Creates a new instance of Employee', () => {
        const e = new Employee();
        expect(typeof(e)).toEqual('object')
    })
    it('Sets name, id, email via constructor argument', () => {
        const name = 'Sam'
        const id = 32
        const email = 'sam@gmail.com'
        const e = new Employee(name, id, email)
        expect(e.name).toBe(name)
        expect(e.id).toBe(id)
        expect(e.email).toBe(email)
    })
    it('Gets name via getName()', () => {
        const name = 'Sam';
        const e = new Employee(name);
        expect(e.getName()).toBe(name)
    })
    it('Gets id via getId()', () => {
        const id = 32;
        const e = new Employee('Sam',id);
        expect(e.getId()).toBe(id)
    })
    it('Gets email via getEmail()', () => {
        const email = 'Sam@gmail.com';
        const e = new Employee('sam', 32 ,email);
        expect(e.getEmail()).toBe(email)
    })
    it('Gets role via getRole()', () => {
        const role  = 'Employee';
        const e = new Employee('Sam', 32, 'sam@gmail.com',role);
        expect(e.getRole()).toBe(role)
    })
})