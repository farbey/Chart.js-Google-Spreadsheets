import gspread
import os
import yoavpass
import base64
from yoavpass import *  

# Login with your Google account
gc = gspread.login(email, base64.b64decode(encodedPassword))

# Open a worksheet from spreadsheet with one shot
wks = gc.open("FOR YF of Product data test")
wks = wks.get_worksheet(0)

#wks.update_acell('B2', "it's down there somewhere, let me take another look.")

# Fetch a cell range

maxVal = wks.acell('E2').value
cellDateList = wks.range('A1:A'+maxVal)
cellMobileList = wks.range('C1:C'+maxVal)
cellDesktopList = wks.range('B1:B'+maxVal)
cellTabletList = wks.range('D1:D'+maxVal)
#print cell_list[1].value+','+cell_list[2].value

reverseCount = int(maxVal)
reverseCount -= 1
#x=0
reversedDates=''
reversedDesktop =''
reversedMobile =''
reversedTablet =''
maxRange = 7

for x in range(0, maxRange):

    #print each.value +','
    if x==0:
    	reversedDates = "'"+str(cellDateList[reverseCount].value)+"'"
    	reversedDesktop = str(cellDesktopList[reverseCount].value)
    	reversedMobile = str(cellMobileList[reverseCount].value)
    	reversedTablet = str(cellTabletList[reverseCount].value)

    else:
    	reversedDates = "'"+str(cellDateList[reverseCount].value)+"'"+','+reversedDates
    	reversedDesktop = str(cellDesktopList[reverseCount].value)+','+reversedDesktop
    	reversedMobile = str(cellMobileList[reverseCount].value)+','+reversedMobile
    	reversedTablet = str(cellTabletList[reverseCount].value)+','+reversedTablet
    
    x +=1
    reverseCount -= 1
#print reversedDates
#print reversedDesktop
#print reversedMobile
#print reversedTablet




outputHTML = open("spreadsheetData.html", "wb")
output =  """<!doctype html>
<html>
	<head>
		<title>Line Chart</title>
		<script src="Chart.js"></script>
	</head>
	<body>
		<div style="width:30%">
			<div>
				<canvas id="canvas" height="450" width="600"></canvas>
			</div>
		</div>


	<script>
		var lineChartData = {
			labels : ["""+reversedDates+"""],
			datasets : [
				{
					label: "Desktop",
					fillColor : "rgba(0,0,0,0)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : ["""+reversedDesktop+"""]
				},
				{
					label: "Mobile",
					fillColor: "rgba(0,0,0,0)",
					strokeColor: "rgba(151,187,205,1)",
					pointColor: "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : ["""+reversedMobile+"""]
				},
				{
					label: "Tablet",
					fillColor: "rgba(0,0,0,0)",
					strokeColor: "rgba(151,187,0,1)",
					pointColor: "rgba(151,187,0,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : ["""+reversedTablet+"""]
				}
			]

		}

	window.onload = function(){
		var ctx = document.getElementById("canvas").getContext("2d");
		window.myLine = new Chart(ctx).Line(lineChartData, {
			responsive: true
		});
	}


	</script>
	</body>
</html>"""

print output

outputHTML.write(output);
outputHTML.close()







