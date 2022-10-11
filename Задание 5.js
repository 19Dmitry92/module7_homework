class device {
    constructor(type, brand,use){
        this.type = type
	    this.brand = brand  
        this.use = use
    }
}
device.prototype.power='220 вольт';
device.prototype.turn = function(){
    return "Включен в сеть"
}
const router = new device('роутер','D-Link','доступ в интернет')
const phone = new device('Телефон','Realme GT','для работы')
console.log(`${phone.type} ${phone.brand} использую ${phone.use}, ${router.use} с помощью ${router.type}а ${router.brand}. Питание от сети ${router.power}.`)