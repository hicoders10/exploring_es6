const dates = [
    {
        year: '2016',
        monthIndex: 2,
        detail: [23,11,50,10,800]
    },
    {
        year: '2017',
        monthIndex: 6,
        detail: [10,6,30,10,200]
    }
];

const mappedDates = dates.map(({year, monthIndex, detail}) => new Date(year, monthIndex, ...detail));

// Date reference --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

console.log(mappedDates);