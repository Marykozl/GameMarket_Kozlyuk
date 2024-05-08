//Перевірка підключеного файлу скриптів 
console.log('Перевірка підключеного файлу скриптів market.js')
// Отримання елементу з ідентифікатором items 
let itemsDiv = document.getElementById("items");
//Перевірка існування знайденого блоку
if (itemsDiv) 
    {
    //Вивід знайденого елементу
    // console.log(itemsDiv)
    //додавання відформатованого HTML коду в блок
    //itemsDiv.innerHTML+=' <div class="item"></div>'
    //itemsDiv.innerHTML+=' <div class="item"></div>'
    //itemsDiv.innerHTML+=' <div class="item"></div>'
    //itemsDiv.innerHTML+=' <div class="item"></div>'
    //for (let i = 0; i < 100; i++)
      //  {
        //itemsDiv.innerHTML += '<div class = "item"></div>'
    //}
    }
     else {
    //Вивід повідомлення про не знайдений блок
    console.log("Блок товарів не знайдено")
}
//визначення масиву товарів
let itemsArray = ['Газонокосарка 43','Електричний тример 110','Електрична газонокосарка 32','Акумуляторний оприскувач 12 N']
//виведення в консоль масиву
console.log(itemsArray)
//
for (let i = 0; i < itemsArray.length; i++)
    {
        console.log(itemsArray[i])
    }