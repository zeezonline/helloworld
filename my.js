// Put your custom code here


var days = 0;
var today = new XDate().clearTime();

	var newDate = new XDate(2013,5,17);
	
	var diff = today.diffDays(newDate);
	days = diff;
	h1 = new Date(2013,1,18); //Feb Recess
	h2 = new Date(2013,2,29); //Good Friday
	h3 = new Date(2013,3,15); //Spring Recess
	h4 = new Date(2013,3,16); //Spring Recess
	h5 = new Date(2013,3,17); //Spring Recess
	h6 = new Date(2013,3,18); //Spring Recess
	h7 = new Date(2013,3,19); //Spring Recess
	h8 = new Date(2013,4,27); //Memorial Day Holiday
	//Profesional Days
	h9 = new Date(2013,1,19);
	h10 = new Date(2013,3,22);
	

function dateNinja()
{	
}

function schoolDays(){
	for (c = 0; c <diff; c++)
	{	
		newDays = new Date.today().add(c).days();
		if(!newDays.isWeekday()){	
			days = days - 1;	
		}else{
			if(newDays.equals(h1) || newDays.equals(h2) || newDays.equals(h3) || newDays.equals(h4) || newDays.equals(h5) || newDays.equals(h6) || newDays.equals(h7) || newDays.equals(h8)  || newDays.equals(h9) || newDays.equals(h10))
			{
				days = days - 1;			
			}
		}	
	}
	return days+1;
}

function totalDays(){
	return diff;
}

function teacherInService(){
	tdays = diff;
	for (c = 0; c <diff; c++)
	{		
		newDays = new Date.today().add(c).days();
		if(!newDays.isWeekday()){	
			tdays = tdays - 1;	
		}else{
			if(newDays.equals(h1) || newDays.equals(h2) || newDays.equals(h3) || newDays.equals(h4) || newDays.equals(h5) || newDays.equals(h6) || newDays.equals(h7) || newDays.equals(h8))
			{
				tdays = tdays - 1;			
			}
		}	
	}
	return tdays+1;	
}

function nextDayOff(){
	ndays = diff;
	for (c = 0; c<diff; c++)
	{
		newDays = new Date.today().add(c).days();
		if (newDays.equals(h1))
		{
			return "February Recess";
		}
	}
}