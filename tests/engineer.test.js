const Engineer = require('../lib/Engineer');

describe('Engineer', () =>{
    it('Creates a new instance of Engineer', () => {
        const e = new Engineer();
        expect(typeof(e)).toEqual('object')
    })
    it('Sets name, id, email via constructor argument', () => {
        const name = 'Sam'
        const id = 32
        const email = 'sam@gmail.com'
        const e = new Engineer(name, id, email)
        expect(e.name).toBe(name)
        expect(e.id).toBe(id)
        expect(e.email).toBe(email)
    })
    it('Gets name via getName()', () => {
        const name = 'Sam';
        const e = new Engineer(name);
        expect(e.getName()).toBe(name)
    })
    it('Gets id via getId()', () => {
        const id = 32;
        const e = new Engineer('Sam',id);
        expect(e.getId()).toBe(id)
    })
    it('Gets email via getEmail()', () => {
        const email = 'Sam@gmail.com';
        const e = new Engineer('sam', 32 ,email);
        expect(e.getEmail()).toBe(email)
    })
    it('Gets role via getRole()', () => {
        const role  = 'Engineer';
        const e = new Engineer('Sam', 32, 'sam@gmail.com',role);
        expect(e.getRole()).toBe(role)
    })
})