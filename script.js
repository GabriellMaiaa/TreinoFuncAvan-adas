//alert("Estou revisando Javascript")
//prompt('Digite a sua idade')
document.write("Estou dando uma revisada em JavaScript")

const teste1 = document.getElementById("#teste")


///Função FILTER - Ela retorna um array com base no filtro que vc der

const arr = [1,2,3,4,5,6,7]

const highNumbers = arr.filter((n) => {
    if(n > 3) {
        return n
    }
})
console.log(highNumbers)

const users = [
    {nome: "João", available: false},
    {nome: "Pedro", available: true},
    {nome: "Jamilton", available: true},
    {nome: "Kevyn", available: false}     
]

const teste = users.filter((n) => {
    if(n = true) {
        return "Deu tudo certo!"
    } else {
        return "Deu melda"
    }
})
console.log(teste)

const availableUser = users.filter((user) => user.available)
console.log(availableUser)
const notAvailableUser = users.filter((user) => !user.available)
console.log(notAvailableUser)


// 2 - MAP
const products = [
    {name:'CAMISA', price: 20.99, category: 'Roupas'},
    {name:'CHALEIRA ELÉTRICA', price: 220.99, category: 'Eletro'},
    {name:'FOGÁO', price: 510, category: 'Eletro'},
    {name:'CALÇA JEANS', price: 89.90, category: 'Roupas'}
]

products.map((product) => {
    if(product.category === 'Roupas') {
        product.onSale = true
    }
})
console.log(products)


// 3- TEMPLATE LITERALS/STRINGS

const userName = 'Matheus'
const age = 30 
console.log(`O nome do garoto é ${userName}, e ele tem ${age} anos`)