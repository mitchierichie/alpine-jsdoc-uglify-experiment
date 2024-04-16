/**
 * @type {Person} person
 */
const person = {
    name: 'Joe',
    age: 32
}

/**
 * @type {DropdownState} dropdown
 */
const dropdown = {
    open: false,
    
    toggle() {
        this.open = ! this.open
    }
}

window.Alpine.data('dropdown', () => ({...dropdown}));

