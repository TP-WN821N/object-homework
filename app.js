// 1. array ichidagi 2 dan katta bo'lgan sonlarni boshqa array ga ko'chiring
const resolv = () => {
	let newArr = []
	let arr = [1,2,3,4,5,6,7,8,-3]
	for(let i=0; i<arr.length; i++){
		if(arr[i] > 2) {
			newArr.push(arr[i])
		}
	}
	console.log(newArr)
}
// resolv()



// 2. ixtiyoriy array yarating va uning ichidagi juft va toq sonlar yigindisini toping va promt da kiritilgan son bilan array ichidagi sonlar yigindisi o'rtasidagi farq ni toping 
const operator = () => {
	let arr = [1,2,3,4,5,6,7,8,-3, 5]
	let son = +prompt("Biror son kiriting.")
	let sum = 0
	let juftSum = 0
	let toqSum = 0
	for(let i=0; i < arr.length; i++) {
		sum += arr[i]
		if(arr[i] % 2 == 0) {
			juftSum+=arr[i]
		}else {
			toqSum+=arr[i]
		}
	}
	let ayirma = Math.abs(sum-son)

	console.log(`Juft ${juftSum} Toq ${toqSum} farqi ${ayirma}`)
}
// operator()


// 3. foydalanuvchi 2 ta son kiritadi va shu 2 ta son oralig’idagi juft sonlar ye’g’indisini chiqaruvchi algaritm tuzing faqat 1 son 2 son dan kichikligini tekshiring
const orasidagiYigindi = () => {
	let a = +prompt("a = ")
	let b = +prompt("b = ")
	let sum = 0
	if(a < b) {
		for(let i = a + 1; i < b; i++) {
			if(i % 2 == 0) {
				sum += i
			}
		}
	}
	console.log(sum)
}
// orasidagiYigindi()




// 4. function argument tiga berilgan qiymatlar orasida faqat number larni alohida array ga ko'chiring va return qiling
const myFunction = (a, b) => {
	let newArr = []
	for (let i = a + 1; i < b; i++) {
		newArr.push(i)
	}
	return newArr
}
// myFunction(1, 7)




// 5. argument sifatida berilgan object ni value larinidan tashkil topgan array ni qaytaradigan function yarating 
// 6. argument sifatida berilgan object ni key larinidan tashkil topgan array ni qaytaradigan function yarating
const objFunction = () => {
	let values = []
	let keys = []
	const obj = {name: "Alik", age: 15, class: "7A"}

	// 1-usul
	for(let key in obj) {
		values.push(obj[key])
		keys.push(key)
	}
	console.log(values)
	console.log(keys)

	// 2-usul
	// keys
	// let keys = Object.keys(obj)
	// values
	// values = Object.values(obj)
}
// objFunction()




// 7. [5, 16, 7, 4, 10, 3, 4, 4, 14, 5, 14, 4, 44, 4] shu arraydan 4 soni olib tashlansin
const remove = (num) => {
	let err = [5, 16, 7, 4, 10, 3, 4, 4, 14, 5, 14, 4, 44, 4]
	for (let i = 0; i < err.length; i++) {
		if(err[i] === num) {
			err.splice(i, 1)
			if(err[i] === num) {
				i--
			}
		}
	}
	return err
}
// remove(4)





// 8. Ixtiyoriy object yaratilsin key va value lari 6 tadan kam bo'lmasin 1. value lar ro'yxati chiqarilsin 2. value larining yig'indisi topilsin
const object = () => {
	let sum = 0
	const obj = {
		num1: 12,
		num2: 8,
		num3: 3,
		num4: 9,
		num5: 10,
		num6: 11
	}	
	let values = Object.values(obj)
	for(let i = 0; i < values.length; i++) {
		sum += values[i]
	}
	console.log(values)
	console.log(sum)
}
// object()
