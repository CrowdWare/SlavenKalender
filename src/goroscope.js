function count_moon()
{
var day = document.getElementById("day");
var A_Day = day.selectedIndex +1;

var month = document.getElementById("month");
var A_Month = month.selectedIndex;

var year = document.getElementById("year");
var A_Year = year.selectedIndex + 1850;

var hour = document.getElementById("hour");
var A_Hour = hour.selectedIndex;

var min = document.getElementById("min");
var A_Min = min.selectedIndex;

var LonLat = GetLonLat();
var A_Lat = LonLat.lat;
var A_Lon = LonLat.lon;
var A_UTC = LonLat.UTC;

    var date = new Date(A_Year, A_Month, A_Day, A_Hour, A_Min, 0,0); 

	var Mjuls = mjd(A_Day, A_Month+1, A_Year, 0.0);
	
	Rise_Time = find_moonrise_set(Mjuls, A_UTC, A_Lon, A_Lat);
	
	var Rise_Hour = Math.floor(Rise_Time);
	var Rise_Min = (Rise_Time - Rise_Hour)*60;
	Rise_Date = new Date(A_Year, A_Month, A_Day, Rise_Hour, Rise_Min,0,0);

	NM_date = NewMoon(date,A_UTC);		
		
		
	var NM_Day = NM_date.getDate();
	var NM_Month = NM_date.getMonth();
	var NM_Year = NM_date.getFullYear();
	var NMjuls = mjd(NM_Day, NM_Month+1, NM_Year, 0.0);
	NM_Rise_Time = find_moonrise_set(NMjuls, A_UTC, A_Lon, A_Lat);	
	var NM_Rise_Hour = Math.floor(NM_Rise_Time);
	var NM_Rise_Min = (NM_Rise_Time-NM_Rise_Hour)*60;
	NM_Rise_Date = new Date(NM_Year, NM_Month, NM_Day, NM_Rise_Hour, NM_Rise_Min,0,0);
	
	var CountDays = 1; 
	if (NM_Rise_Date !== "no rise") 
	{if (NM_Rise_Date.getTime() > NM_date.getTime()) CountDays = 2;};

	date1 =  new Date(NM_Year, NM_Month, NM_Day+1, 0, 0,0,0); 
	while (date1.getTime() <= date.getTime())
	{			
	var Day1 = date1.getDate();
	var Month1 = date1.getMonth();
	var Year1 = date1.getFullYear();	
    var Mjuls1 = mjd (Day1, Month1+1, Year1, 0.0); 
	Rise_Time1 = find_moonrise_set(Mjuls1, A_UTC, A_Lon, A_Lat);
	
	var Rise_Hour1 = Math.floor(Rise_Time1);
	var Rise_Min1 = (Rise_Time1-Rise_Hour1)*60;
	Rise_Date1 = new Date(Year1, Month1, Day1, Rise_Hour1, Rise_Min1,0,0);
	 	if ((Rise_Time1 !== "no rise")&&(Rise_Date1.getTime() <= date.getTime()))
		{	
		 	 CountDays = CountDays+1;	 		 
		}
	 date1 = new Date(Year1, Month1, Day1+1, 0, 0, 0,0);	
	 }
	return(CountDays);	  
}

function readDate()
{
var Mir = "Рђ";
var S_Mir = "Рђ";
var M_Mir = "Рђ";
var Krug = "0";

var day = document.getElementById("day");
var S_Day = day.options[day.selectedIndex].text;
var N_Day = day.selectedIndex +1;

var month = document.getElementById("month");
var S_Month = month.options[month.selectedIndex].text;
var N_Month = month.selectedIndex +1;

var year = document.getElementById("year");
var S_Year = year.options[year.selectedIndex].text;
var N_Year = year.selectedIndex + 1849;
var M_Day = count_moon();
var B_Day = S_Day + "." + N_Month;



if (B_Day == "1.1" || B_Day == "5.1" || B_Day == "10.1" || B_Day == "14.1" || B_Day == "15.1" || B_Day == "17.1" || B_Day == "20.1" || B_Day == "23.1" || B_Day == "25.1" || B_Day == "28.1" || 
B_Day == "2.2" || B_Day == "4.2" || B_Day == "5.2" || B_Day == "9.2" || B_Day == "14.2" || B_Day == "23.2" || B_Day == "25.2"|| 
B_Day == "1.3" || B_Day == "2.3" || B_Day == "3.3" || B_Day == "4.3" || B_Day == "7.3" || B_Day == "8.3" || B_Day == "12.3" || B_Day == "15.3" || B_Day == "17.3" || B_Day == "18.3" || B_Day == "19.3" || B_Day == "26.3" || B_Day == "28.3" || B_Day == "29.3" || 
B_Day == "3.4" || B_Day == "11.4" || B_Day == "12.4" || B_Day == "13.4" || B_Day == "20.4" || B_Day == "26.4" || B_Day == "28.4" || B_Day == "30.4" || 
B_Day == "5.5" || B_Day == "12.5" || B_Day == "13.5" || B_Day == "17.5" || B_Day == "19.5" || B_Day == "20.5" || B_Day == "21.5" || B_Day == "23.5" || B_Day == "28.5" || B_Day == "29.5" || B_Day == "30.5" || 
B_Day == "3.6" || B_Day == "6.6" || B_Day == "9.6" || B_Day == "13.6" || B_Day == "18.6" || B_Day == "22.6" || B_Day == "27.6" || B_Day == "29.6" || 
B_Day == "2.7" || B_Day == "4.7" || B_Day == "6.7" || B_Day == "9.7" || B_Day == "10.7" || B_Day == "11.7" || B_Day == "16.7" || B_Day == "21.7" || B_Day == "26.7" || B_Day == "29.7" ||B_Day == "30.7" || 
B_Day == "6.8" || B_Day == "9.8" || B_Day == "12.8" || B_Day == "17.8" || B_Day == "20.8" || B_Day == "21.8" || B_Day == "24.8" || B_Day == "25.8" || 
B_Day == "1.9" || B_Day == "2.9" || B_Day == "3.9" || B_Day == "4.9" || B_Day == "5.9" || B_Day == "7.9" || B_Day == "8.9" || B_Day == "11.9" || B_Day == "16.9" || B_Day == "18.9" || B_Day == "19.9" || B_Day == "21.9" || B_Day == "24.9" || B_Day == "25.9" || B_Day == "26.9" || 
B_Day == "3.10" || B_Day == "11.10" || B_Day == "14.10" || B_Day == "17.10" || B_Day == "18.10" || B_Day == "24.10" || B_Day == "27.10" || B_Day == "31.10" || 
B_Day == "1.11" || B_Day == "2.11" || B_Day == "7.11" || B_Day == "12.11" || B_Day == "13.11" || B_Day == "18.11" || B_Day == "22.11" || B_Day == "29.11" || 
B_Day == "5.12" || B_Day == "6.12" || B_Day == "9.12" || B_Day == "12.12" || B_Day == "16.12" || B_Day == "19.12" || B_Day == "20.12" || B_Day == "23.12" || B_Day == "24.12" || B_Day == "25.12") 

{S_Mir = "B";} 

if (B_Day == "2.1" || B_Day == "4.1" || B_Day == "7.1" || B_Day == "11.1" || B_Day == "12.1" || B_Day == "21.1" || B_Day == "22.1" || B_Day == "24.1" || B_Day == "29.1" || B_Day == "31.1"|| 
B_Day == "1.2" || B_Day == "13.2" || B_Day == "16.2" || B_Day == "17.2" || B_Day == "20.2" || B_Day == "26.2" || B_Day == "27.2" || B_Day == "28.2" || 
B_Day == "5.3" || B_Day == "6.3" || B_Day == "9.3" || B_Day == "10.3" || B_Day == "11.3" || B_Day == "20.3" || B_Day == "21.3" || B_Day == "22.3" || B_Day == "23.3" || B_Day == "27.3" || 
B_Day == "2.4" || B_Day == "5.4" || B_Day == "10.4" || B_Day == "17.4" || B_Day == "18.4" || B_Day == "19.4" || B_Day == "23.4" || B_Day == "29.4" || 
B_Day == "4.5" || B_Day == "6.5" || B_Day == "8.5" || B_Day == "10.5" || B_Day == "11.5" || B_Day == "18.5" || B_Day == "22.5" || B_Day == "24.5" || B_Day == "25.5" || B_Day == "27.5" || 
B_Day == "2.6" || B_Day == "5.6" || B_Day == "11.6" || B_Day == "12.6" || B_Day == "16.6" || B_Day == "20.6" || B_Day == "21.6" || B_Day == "23.6" || B_Day == "25.6" || 
B_Day == "3.7" || B_Day == "8.7" || B_Day == "13.7" || B_Day == "14.7" || B_Day == "18.7" || B_Day == "19.7" || B_Day == "22.7" || B_Day == "23.7" || B_Day == "25.7" || B_Day == "27.7" || B_Day == "28.7" || 
B_Day == "5.8" || B_Day == "11.8" || B_Day == "15.8" || B_Day == "18.8" || B_Day == "22.8" || B_Day == "23.8" || B_Day == "26.8" || B_Day == "28.8" || B_Day == "29.8" || 
B_Day == "6.9" || B_Day == "9.9" || B_Day == "13.9" || B_Day == "17.9" || B_Day == "20.9" || B_Day == "22.9" || B_Day == "23.9" || B_Day == "27.9" || B_Day == "30.9" || 
B_Day == "4.10" || B_Day == "6.10" || B_Day == "7.10" || B_Day == "9.10" || B_Day == "12.10" || B_Day == "15.10" || B_Day == "20.10" || B_Day == "23.10" || B_Day == "25.10" || B_Day ==
"26.10" || B_Day == "29.10" || 
B_Day == "3.11" || B_Day == "5.11" || B_Day == "6.11" || B_Day == "8.11" || B_Day == "10.11" || B_Day == "11.11" || B_Day == "16.11" || B_Day == "19.11" || B_Day == "25.11" || B_Day == "28.11" || 
B_Day == "1.12" || B_Day == "2.12" || B_Day == "3.12" || B_Day == "8.12" || B_Day == "10.12" || B_Day == "14.12" || B_Day == "15.12" || B_Day == "18.12" || B_Day == "26.12" || B_Day == "28.12") 

{S_Mir = "C";} 

if (B_Day == "3.1" || B_Day == "6.1" || B_Day == "8.1" || B_Day == "9.1" || B_Day == "13.1" || B_Day == "16.1" || B_Day == "18.1" || B_Day == "19.1" || B_Day == "26.1" || B_Day == "27.1" || B_Day == "30.1" ||
B_Day == "3.2" || B_Day == "6.2" || B_Day == "7.2" || B_Day == "8.2" || B_Day == "10.2" || B_Day == "11.2" || B_Day == "12.2" || B_Day == "15.2" || B_Day == "18.2" || B_Day == "19.2" || B_Day == "21.2" || B_Day == "22.2" || B_Day == "24.2" || B_Day == "29.2" || 
B_Day == "13.3" || B_Day == "14.3" || B_Day == "16.3" || B_Day == "24.3" || B_Day == "25.3" || B_Day == "30.3" || B_Day == "31.3" || 
B_Day == "1.4" || B_Day == "4.4" || B_Day == "6.4" || B_Day == "7.4" || B_Day == "8.4" || B_Day == "9.4" || B_Day == "14.4" || B_Day == "15.4" || B_Day == "16.4" || B_Day == "21.4" || B_Day == "22.4" || B_Day == "24.4" || B_Day == "25.4" || B_Day == "27.4" || B_Day == "28.4" || 
B_Day == "1.5" || B_Day == "2.5" || B_Day == "3.5" || B_Day == "7.5" || B_Day == "9.5" || B_Day == "14.5" || B_Day == "15.5" || B_Day == "16.5" || B_Day == "26.5" || B_Day == "31.5" || 
B_Day == "1.6" || B_Day == "4.6" || B_Day == "7.6" || B_Day == "8.6" || B_Day == "10.6" || B_Day == "14.6" || B_Day == "15.6" || B_Day == "17.6" || B_Day == "19.6" || B_Day == "24.6" || B_Day == "26.6" || B_Day == "28.6" || B_Day == "30.6" || 
B_Day == "1.7" || B_Day == "5.7" || B_Day == "7.7" || B_Day == "12.7" || B_Day == "15.7" || B_Day == "17.7" || B_Day == "20.7" || B_Day == "24.7" || B_Day == "31.7" || 
B_Day == "1.8" || B_Day == "2.8" || B_Day == "3.8" || B_Day == "4.8" || B_Day == "7.8" || B_Day == "8.8" || B_Day == "10.8" || B_Day == "13.8" || B_Day == "14.8" || B_Day == "16.8" || B_Day == "19.8" || B_Day == "27.8" || B_Day == "30.8" || B_Day == "31.8" || 
B_Day == "10.9" || B_Day == "12.9" || B_Day == "14.9" || B_Day == "15.9" || B_Day == "28.9" || B_Day == "29.9" || 
B_Day == "1.10" || B_Day == "2.10" || B_Day == "5.10" || B_Day == "8.10" || B_Day == "10.10" || B_Day == "13.10" || B_Day == "16.10" || B_Day == "19.10" || B_Day == "21.10" || B_Day == "22.10" || B_Day == "28.10" || B_Day == "30.10" || 
B_Day == "4.11" || B_Day == "9.11" || B_Day == "14.11" || B_Day == "15.11" || B_Day == "17.11" || B_Day == "20.11" || B_Day == "21.11" || B_Day == "23.11" || B_Day == "24.11" || B_Day == "26.11" || B_Day == "27.11" || B_Day == "30.11" || 
B_Day == "4.12" || B_Day == "7.12" || B_Day == "11.12" || B_Day == "13.12" || B_Day == "17.12" || B_Day == "21.12" || B_Day == "22.12" || B_Day == "27.12" || B_Day == "29.12" || B_Day == "30.12" || B_Day == "31.12") 

{S_Mir = "H";}
  
if (M_Day == "2" || M_Day == "3" || M_Day == "6" || M_Day == "7" || M_Day == "14" || M_Day == "15" || M_Day == "16" || M_Day == "19" || M_Day == "21" || M_Day == "24" || M_Day == "28" || M_Day == "29")
{M_Mir = "B";}
if (M_Day == "1" || M_Day == "4" || M_Day == "8" || M_Day == "9" || M_Day == "10" || M_Day == "11" || M_Day == "13" || M_Day == "18" || M_Day == "20" || M_Day == "22" || M_Day == "23" || M_Day == "27" || M_Day == "30")
{M_Mir = "C";}
if (M_Day == "5" || M_Day == "12" || M_Day == "17" || M_Day == "25" || M_Day == "26" )
{M_Mir = "H";}


if (S_Mir == "B" && M_Mir == "C") {Mir = "C";}
if (S_Mir == "B" && M_Mir == "B") {Mir = "B";}
if (S_Mir == "B" && M_Mir == "H") {Mir = "B";}
if (S_Mir == "C" && M_Mir == "H") {Mir = "H";}
if (S_Mir == "C" && M_Mir == "B") {Mir = "C";}
if (S_Mir == "C" && M_Mir == "C") {Mir = "C";}
if (S_Mir == "H" && M_Mir == "B") {Mir = "B";}
if (S_Mir == "H" && M_Mir == "C") {Mir = "H";}
if (S_Mir == "H" && M_Mir == "H") {Mir = "H";}


if (B_Day == "25.12" || B_Day == "26.12" || B_Day == "27.12" || B_Day == "24.1" || B_Day == "25.1" || B_Day == "26.1" || B_Day == "24.2" || B_Day == "25.2" || B_Day == "26.2" || B_Day == "25.3" || B_Day == "26.3" || B_Day == "27.3" || B_Day == "24.4" || B_Day == "25.4" || B_Day == "26.4" || B_Day == "24.5" || B_Day == "25.5" || B_Day == "26.5" || B_Day == "25.6" || B_Day == "26.6" || B_Day == "27.6" || B_Day == "27.7" || B_Day == "28.7" || B_Day == "29.7" || B_Day == "27.8" || B_Day == "28.8" || B_Day == "29.8" || B_Day == "25.7" || B_Day == "26.7" || B_Day == "27.7" || B_Day == "27.8" || B_Day == "28.8" || B_Day == "29.8" || B_Day == "25.9" || B_Day == "26.9" || B_Day == "27.9" || B_Day == "27.10" || B_Day == "28.10" || B_Day == "29.10" || B_Day == "26.11" || B_Day == "27.11" || B_Day == "28.11")
{Krug = "7";}

if (B_Day == "28.12" || B_Day == "29.12" || B_Day == "30.12" || B_Day == "27.1" || B_Day == "28.1"|| B_Day == "29.1"  || B_Day == "30.1" || B_Day == "27.2" || B_Day == "28.2" || B_Day == "29.2" || B_Day == "1.3" || B_Day == "28.3" || B_Day == "29.3" || B_Day == "30.3" || B_Day == "27.4" || B_Day == "28.4" || B_Day == "29.4" || B_Day == "27.5" || B_Day == "28.5" || B_Day == "29.5" || B_Day == "28.6" || B_Day == "29.6" || B_Day == "30.6" || B_Day == "30.7" || B_Day == "31.7" || B_Day == "1.8" || B_Day == "30.8" || B_Day == "31.8" || B_Day == "1.9" || B_Day == "28.9" ||B_Day == "29.9" || B_Day == "30.9" || B_Day == "30.10"  || B_Day == "31.10"  || B_Day == "1.11" || B_Day == "29.11" || B_Day == "30.11" || B_Day == "1.12")
{Krug = "9";}

if (B_Day == "31.12" || B_Day == "1.1" || B_Day == "2.1" || B_Day == "3.1" || B_Day == "4.1" || B_Day == "31.1" || B_Day == "1.2" || B_Day == "2.2" || B_Day == "3.2" || B_Day == "4.2" || B_Day == "2.3" || B_Day == "3.3" || B_Day == "4.3" || B_Day == "5.3" || B_Day == "6.3" || B_Day == "31.3" || B_Day == "1.4" || B_Day == "2.4" || B_Day == "3.4" || B_Day == "4.4" || B_Day == "30.4" || B_Day == "1.5" || B_Day == "2.5" || B_Day == "3.5" || B_Day == "4.5" || B_Day == "30.5" || B_Day == "31.5" || B_Day == "1.6" || B_Day == "2.6" || B_Day == "3.6" || B_Day == "1.7" || B_Day == "2.7" || B_Day == "3.7" || B_Day == "4.7" || B_Day == "5.7" || B_Day == "2.8" || B_Day == "3.8" || B_Day == "4.8" || B_Day == "5.8" || B_Day == "6.8" || B_Day == "2.9" || B_Day == "3.9" || B_Day == "4.9" || B_Day == "5.9" || B_Day == "6.9" || B_Day == "1.10" || B_Day == "2.10" || B_Day == "3.10" || B_Day == "4.10" || B_Day == "5.10" || B_Day == "2.11" || B_Day == "3.11" || B_Day == "4.11" || B_Day == "5.11" || B_Day == "6.11" || B_Day == "2.12" || B_Day == "3.12" || B_Day == "4.12" || B_Day == "5.12" || B_Day == "6.12")
{Krug = "3";}

if (B_Day == "5.1" || B_Day == "6.1" || B_Day == "7.1" || B_Day == "5.2" || B_Day == "6.2" || B_Day == "7.2" || B_Day == "7.3" || B_Day == "8.3" || B_Day == "9.3" || B_Day == "5.4" || B_Day == "6.4" || B_Day == "7.4" || B_Day == "5.5" || B_Day == "6.5" || B_Day == "7.5" || B_Day == "4.6" || B_Day == "5.6" || B_Day == "6.6" || B_Day == "6.7" || B_Day == "7.7" || B_Day == "8.7" || B_Day == "7.8" || B_Day == "8.8" || B_Day == "9.8" || B_Day == "7.9" || B_Day == "8.9" || B_Day == "9.9" || B_Day == "6.10" || B_Day == "7.10" || B_Day == "8.10" || B_Day == "7.11" || B_Day == "8.11" || B_Day == "9.11" || B_Day == "7.12" || B_Day == "8.12" || B_Day == "9.12")
{Krug = "8";}

if (B_Day == "8.1" || B_Day == "9.1" || B_Day == "10.1" || B_Day == "11.1" || B_Day == "8.2" || B_Day == "9.2" || B_Day == "10.2" || B_Day == "11.2" || B_Day == "10.3" || B_Day == "11.3" || B_Day == "12.3" || B_Day == "13.3" || B_Day == "8.4" || B_Day == "9.4" || B_Day == "10.4" || B_Day == "11.4" || B_Day == "8.5" || B_Day == "9.5" || B_Day == "10.5" || B_Day == "11.5" || B_Day == "7.6" || B_Day == "8.6" || B_Day == "9.6" || B_Day == "10.6" || B_Day == "9.7" || B_Day == "10.7" || B_Day == "11.7" || B_Day == "12.7" || B_Day == "10.8" || B_Day == "11.8" || B_Day == "12.8" || B_Day == "13.8" || B_Day == "10.9" || B_Day == "11.9" || B_Day == "12.9" || B_Day == "13.9" || B_Day == "9.10" || B_Day == "10.10" || B_Day == "11.10" || B_Day == "12.10" || B_Day == "10.11" || B_Day == "11.11" || B_Day == "12.11" || B_Day == "13.11" || B_Day == "10.12" || B_Day == "11.12" || B_Day == "12.12" || B_Day == "13.12")  
{Krug = "1";}

if (B_Day == "12.1" || B_Day == "13.1" || B_Day == "14.1" || B_Day == "12.2" || B_Day == "13.2" || B_Day == "14.2" || B_Day == "14.3" || B_Day == "15.3" || B_Day == "16.3" || B_Day == "12.4" || B_Day == "13.4" || B_Day == "14.4" || B_Day == "12.5" || B_Day == "13.5" || B_Day == "14.5" || B_Day == "11.6" || B_Day == "12.6" || B_Day == "13.6" || B_Day == "13.7" || B_Day == "14.7" || B_Day == "15.7" || B_Day == "16.7" || B_Day == "14.8" || B_Day == "15.8" || B_Day == "16.8" || B_Day == "14.9" || B_Day == "15.9" || B_Day == "16.9" || B_Day == "13.10" || B_Day == "14.10" || B_Day == "15.10" || B_Day == "14.11" || B_Day == "15.11" || B_Day == "16.11" || B_Day == "14.12" || B_Day == "15.12" || B_Day == "16.12")
{Krug = "6";}

if (B_Day == "15.1" || B_Day == "16.1" || B_Day == "17.1" || B_Day == "15.2" || B_Day == "16.2" || B_Day == "17.2" || B_Day == "17.3" || B_Day == "18.3" || B_Day == "19.3" || B_Day == "15.4" || B_Day == "16.4" || B_Day == "17.4" || B_Day == "15.5" || B_Day == "16.5" || B_Day == "17.5" || B_Day == "14.6" || B_Day == "15.6" || B_Day == "16.6" || B_Day == "17.6" || B_Day == "17.7" || B_Day == "18.7" || B_Day == "19.7" || B_Day == "17.8"|| B_Day == "18.8" || B_Day == "19.8" || B_Day == "17.9" || B_Day == "18.9" || B_Day == "19.9" || B_Day == "16.10" || B_Day == "17.10" || B_Day == "18.10" || B_Day == "19.10" || B_Day == "20.10" || B_Day == "17.11" || B_Day == "18.11" || B_Day == "19.11" || B_Day == "17.12" || B_Day == "18.12" || B_Day == "19.12")
{Krug = "4";}


if (B_Day == "18.1" || B_Day == "19.1" || B_Day == "20.1" || B_Day == "18.2" || B_Day == "19.2" || B_Day == "20.2" ||B_Day == "20.3" ||B_Day == "21.3" || B_Day == "18.4" || B_Day == "19.4" || B_Day == "20.4" || B_Day == "18.5" || B_Day == "19.5" || B_Day == "20.5" || B_Day == "17.6" || B_Day == "18.6" || B_Day == "19.6" || B_Day == "20.6" || B_Day == "21.6" || B_Day == "20.7" || B_Day == "21.7" || B_Day == "22.7" || B_Day == "23.7" || B_Day == "20.8" || B_Day == "21.8" || B_Day == "22.8" || B_Day == "23.8" || B_Day == "20.9" || B_Day == "21.9" || B_Day == "21.10" || B_Day == "22.10" || B_Day == "23.10" || B_Day == "20.11" || B_Day == "21.11" || B_Day == "22.11" || B_Day == "20.12" || B_Day == "21.12")
{Krug = "2";}

if (B_Day == "21.1" || B_Day == "22.1" || B_Day == "23.1" || B_Day == "21.2" || B_Day == "22.2" || B_Day == "23.2" || B_Day == "22.3" || B_Day == "23.3" || B_Day == "24.3" || B_Day == "21.4" || B_Day == "22.4" || B_Day == "23.4" || B_Day == "21.5" || B_Day == "22.5" || B_Day == "23.5" || B_Day == "22.6" || B_Day == "23.6" || B_Day == "24.6" || B_Day == "24.7" || B_Day == "25.7" || B_Day == "26.7" || B_Day == "24.8" || B_Day == "25.8" || B_Day == "26.8" || B_Day == "22.9" || B_Day == "23.9" || B_Day == "24.9" || B_Day == "24.10" || B_Day == "25.10" || B_Day == "26.10" || B_Day == "23.11" || B_Day == "24.11" || B_Day == "25.11" || B_Day == "22.12" || B_Day == "23.12" || B_Day == "24.12")
{Krug = "5";}


var e = Krug + Mir;

return(e);
}
