const Intern = require('../lib/Intern');

describe('Intern', () =>{
    it('Creates a new instance of Intern', () => {
        const e = new Intern();
        expect(typeof(e)).toEqual('object')
    })
    it('Sets name, id, email via constructor argument', () => {
        const name = 'Sam'
        const id = 32
        const email = 'sam@gmail.com'
        const e = new Intern(name, id, email)
        expect(e.name).toBe(name)
        expect(e.id).toBe(id)
        expect(e.email).toBe(email)
    })
    it('Gets name via getName()', () => {
        const name = 'Sam';
        const e = new Intern(name);
        expect(e.getName()).toBe(name)
    })
    it('Gets id via getId()', () => {
        const id = 32;
        const e = new Intern('Sam',id);
        expect(e.getId()).toBe(id)
    })
    it('Gets email via getEmail()', () => {
        const email = 'Sam@gmail.com';
        const e = new Intern('sam', 32 ,email);
        expect(e.getEmail()).toBe(email)
    })
    it('Gets role via getRole()', () => {
        const role  = 'Intern';
        const e = new Intern('Sam', 32, 'sam@gmail.com',role);
        expect(e.getRole()).toBe(role)
    })
})