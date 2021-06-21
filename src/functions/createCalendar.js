
export default function createCalendar(year, month, activeDates = []){
  // console.log(year, month);
  var currentDate = new Date(year, month),//дата, переданная в ф-цию. при первом ее вызове или из формы при изменении
      nextDate = new Date(year, month + 1),// месяц, следующий за текущим
      currentDateDay = new Date(year, month, 1),//первое число текущего месяца
      periodMs = nextDate - currentDate,//разница в милисекундах м/у первыми числами текущего и следующего месяца
      days = parseInt(periodMs/(60*60*1000*24)),//количество дней в текущем месяце
      daysNames = ['ВC', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'],
      n = currentDateDay.getDay() - 1,
      arr = [],
      startDay = currentDateDay.getDay();
  
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
    var cell = {dayOfWeekInd: i + 1, dayName: daysNames[n], dayOfMonth: n, isActiveDay: activeDate};
    arr.push(cell);
  }
  
  return arr;

}
