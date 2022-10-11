function dev(type, brand, use) { //определяем переменные и их значения
	this.type = type
	this.brand = brand
    this.use = use
}
dev.prototype.power='220 вольт'  //определяем прототипы для сети питания и вкдючения приборов
dev.prototype.turn = function(){
    return "Включен в сеть"
}
const router = new dev('роутер','D-Link','доступ в интернет') //задаем параметры переменных (параметры приборов)
const phone = new dev('Телефон','Realme GT','для работы')
console.log(`${phone.type} ${phone.brand} использую ${phone.use}, ${router.use} с помощью ${router.type}а ${router.brand}. Питание от сети ${router.power}.`) // как смог...