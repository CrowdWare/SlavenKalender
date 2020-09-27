import datetime  
import ephem

for m in range(1,12):
    date = datetime.date(2020,m,1)
    print("new moon: ", ephem.next_new_moon(date))

#today = datetime.date.today()
#print("next new moon: ", ephem.next_new_moon(today))
#print("next full moon:", ephem.next_full_moon(today))