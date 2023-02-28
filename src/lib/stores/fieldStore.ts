import { writable } from 'svelte/store';

const showFieldsStore = writable({
    category_index: null,
    collection_index: null,
    showField: false,
    showForm: false
});



export default showFieldsStore;