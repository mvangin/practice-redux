const mockData = [
    {
        name: "Barry Johnson",
        age: 43,
    },
    {
        name: "Chris Evan",
        age: 25,
    },
    {
        name: "Teresa Middleton",
        age: 29,
    },
];

const addListing = (name, age) => {
    const listing = {
        name, age
    }
    return listing;
}


const getAll = () => {
    return mockData;
};
export default {getAll, addListing};