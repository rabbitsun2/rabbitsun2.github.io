function getWeekday(sDate) {

    var yy = parseInt(sDate.substr(0, 4), 10);
    var mm = parseInt(sDate.substr(5, 2), 10);
    var dd = parseInt(sDate.substr(8), 10);

    var d = new Date(yy, mm - 1, dd);
    var weekday=new Array(7);
    weekday[0]="일";
    weekday[1]="월";
    weekday[2]="화";
    weekday[3]="수";
    weekday[4]="목";
    weekday[5]="금";
    weekday[6]="토";

    return weekday[d.getDay()];
}

function serverLink(url){
	
	var today = new Date();   
	
	var year = today.getFullYear();
	var month = ('0' + (today.getMonth() + 1)).slice(-2);
	var day = ('0' + today.getDate()).slice(-2);

	var dateString = year + '-' + month  + '-' + day;

	var hours = ('0' + today.getHours()).slice(-2); 
	var minutes = ('0' + today.getMinutes()).slice(-2);
	var seconds = ('0' + today.getSeconds()).slice(-2); 
	
	var weekdays = getWeekday(dateString);
	//alert(weekdays);
	
	var timeString = hours + ':' + minutes  + ':' + seconds;
	
	alert('서버 운영은 평일 09:00~18:00에 운영되고 있습니다.');

	//alert(weekdays);
	//alert(weekdays.indexOf("토"));
	
	if(hours <= 17 &&
		minutes <= 59 &&
		seconds <= 59 &&
		(weekdays.indexOf("토") == -1 && weekdays.indexOf("일") == -1 )) 
		{
		
		location.href = url;
	}
	else{
		alert('현재는 서버 운영시간이 아닙니다.');
	}

}
