const Manager = require('../lib/Manager');

describe('Manager', () =>{
    it('Creates a new instance of Manager', () => {
        const e = new Manager();
        expect(typeof(e)).toEqual('object')
    })
    it('Sets name, id, email via constructor argument', () => {
        const name = 'Sam'
        const id = 32
        const email = 'sam@gmail.com'
        const e = new Manager(name, id, email)
        expect(e.name).toBe(name)
        expect(e.id).toBe(id)
        expect(e.email).toBe(email)
    })
    it('Gets name via getName()', () => {
        const name = 'Sam';
        const e = new Manager(name);
        expect(e.getName()).toBe(name)
    })
    it('Gets id via getId()', () => {
        const id = 32;
        const e = new Manager('Sam',id);
        expect(e.getId()).toBe(id)
    })
    it('Gets email via getEmail()', () => {
        const email = 'Sam@gmail.com';
        const e = new Manager('sam', 32 ,email);
        expect(e.getEmail()).toBe(email)
    })
    it('Gets role via getRole()', () => {
        const role  = 'Manager';
        const e = new Manager('Sam', 32, 'sam@gmail.com',role);
        expect(e.getRole()).toBe(role)
    })
})