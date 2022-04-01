// const colors = [{
        
//     normal: "#A8A878",
//     {
//         label: '#F08030',
//         key: 'fire',
//         index: 1
//     }, {
//     fire: "#F08030",
//     fighting: "#C03028",
//     water: "#6890F0",
//     flying: "#A890F0",
//     grass: "#78C850",
//     poison: "#A040A0",
//     eletric: "#F8D030",
//     ground: "#E0C068",
//     psychic: "#F85888",
//     rock: "#B8A038",
//     ice: "#98D8D8",
//     bug: "#A8B820",
//     dragon: "#7038F8",
//     ghost: "#705898",
//     dark: "#705848",
//     steel: "#B8B8D0",
//     fairy: "#EE99AC"

// }]

const colors = [{
    label: "#A8A878",
    key: 'normal',
    index: 1
}, {
    label: '#F08030',
    key: 'fire',
    index: 2
}, {
    label: "#C03028",
    key: "fighting",
    index: 3,
}]

const cor = function(ObjColor) {
    pokecards?.types?.map(it => {
        if('fire' === ObjColor.find( type => type.key)) {
            console.log("deubom")
        }
    })
}

console.log(cor(colors))