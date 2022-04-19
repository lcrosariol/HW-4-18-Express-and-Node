const vegetables = [
    {vegetable: 'Tomato', planted: true},
    {vegetable: 'Carrot', planted: false},
    {vegetable: 'Brocolli', planted: false},
    {vegetable: 'Lettuce', planted: true},
    {vegetable: 'Cabbage', planted: false},
    {vegetable: 'Squash', planted: true}
];

module.exports = {
    getAll: function() {
        return vegetables;

    }
};