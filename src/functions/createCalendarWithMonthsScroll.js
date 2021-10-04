export default function horizontalCalendar(oneDayWidth){
  const monthList = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  let currentYear = new Date().getFullYear();
  let currentMonth = new Date().getMonth();
  const activeDates = [new Date(2021, 4, 5), new Date(2021, 4, 25)];
  let monthsLengthsArr = [];//массив ширин месяцев в пикс
  const dayWidth = oneDayWidth;//шририна ячейки одного дня в пикс.
  let daysArr = [];//массив месяцев, состоящий из массивов каждого отдельного месяца
  let fullYearArr = [];//массив всего года в днях (длина = 365)
  let monthCheckPoints = [];//массив границ месяцев в пикс.
  let scrolling = false;


  let createDataForCalendar = () => {
    daysArr = []; //очищаем массив дней в месяцах
    fullYearArr = [];
    
    for(var i=0; i<12; i++){
      daysArr.push(createCalendar(currentYear, i, activeDates)); //наполняем массив дней в месяцах новыми данными. Каждый эл-т. массива -- массив с днями месяца
    }
    
    daysArr.forEach((month) => {
      monthsLengthsArr.push(month.length * dayWidth);//наполняем массив ширинами всех месяцев в пикселях, исходя из заданной ширины ячейки одного дня
      month.forEach(day => {
        fullYearArr.push(day);
      });
    });
    
    monthsLengthsArr.reduce((sum, cur) =>{  
      var val = sum + cur;
      // console.log(val)
      monthCheckPoints.push(val)//наполняем массив границ, суммируя длины месяцев
      return val;
    }, 0);
    
    return {
      fullYearArr,
      monthCheckPoints
    }
  };
    
	   
let createCalendar = (year, month, activeDates) => {
    // console.log(year, month);
    var currentDate = new Date(year, month),//дата, переданная в ф-цию. при первом ее вызове или из формы при изменении
        nextDate = new Date(year, month + 1),// месяц, следующий за текущим
        currentDateDay = new Date(year, month, 1),//первое число текущего месяца
        periodMs = nextDate - currentDate,//разница в милисекундах м/у первыми числами текущего и следующего месяца
        days = parseInt(periodMs/(60*60*1000*24)),//количество дней в текущем месяце
        daysNames = ['ВC', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
        var n = currentDateDay.getDay() - 1,
        arr = [],
        startDay = currentDateDay.getDay(),
        options = {
		day: '2-digit',
		month: 'long',
		year: 'numeric',
		hour: '2-digit', 
		minute: '2-digit'
	};

    for(var i = 0; i < days; i++){
    	var activeDate = false;
    	activeDates.forEach((day) => {
    		if(day.getDate() === i){
    			activeDate = true;
    		}
    	});
    	n++;
    	if(n > 6 ) n = 0;
  		// console.log("число " + (i+1) + "день недели " + n);
	const textDate = new Intl.DateTimeFormat('ru-RU', options).format(new Date(year, month, i+1));
      var cell = {
      	dayOfWeekInd: i + 1, 
      	dayName: daysNames[n], 
      	dayOfMonth: n,
      	isActiveDay: activeDate,
      	textDate
      };
      arr.push(cell);
   }

  return arr;
    // generateNet(arr[0].dayOfMonth, arr);

};
   
return {
    init: () => {
      return createDataForCalendar();

    }
    

  }
  
  // return {
  //   init: (month = currentMonth) => {

  //     daysContainer.addEventListener('scroll',subscribeToScroll );//добавление события скролла календарю
  //     scrollThrottling();//запуск ф-ции. задержки реакции на скролл
  //     creatDataForCalendar();//запуск ф-ции. формирования всех массивов для построения календаря
  //     currYearDisplay.innerText = currentYear;
  //     render();//рендер календаря в ХТМЛ

  //     let scroll; //величина скролла к текущему месяцу
  //     if(month > 0 && month < 12){
  //       scroll = monthCheckPoints[month - 1]
  //     }
  //     if(month == 0){
  //       scroll = 3;
  //     }
  //     console.log(scroll + 3)
  //     wrapperScroll(scroll + 3)
  //   }
  // }
}
