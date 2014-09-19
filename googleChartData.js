if(!!(window.addEventListener)) window.addEventListener('DOMContentLoaded', main);
else window.attachEvent('onload', main);

function main() {
    lineChart();
    pieChart();
}

function lineChart() {
    var data = {
        labels : ['06/09/2014','07/09/2014','08/09/2014','09/09/2014','10/09/2014','11/09/2014','12/09/2014','13/09/2014','14/09/2014','15/09/2014','16/09/2014','17/09/2014','18/09/2014','19/09/2014'],
        datasets : [
            {
            


                    fillColor : "rgba(0,0,0,0)",
                    strokeColor : "rgba(220,220,220,1)",
                    pointColor : "rgba(220,220,220,1)",
                    pointStrokeColor : "#fff",
                    pointHighlightFill : "#fff",
                    pointHighlightStroke : "rgba(220,220,220,1)",
                    data : [51.22,48.98,84.67,78.45,84.52,77.21,75.81,65.17,52.33,81.98,80.25,83.1,80.67,71.43],
                    title: "Desktop",
        },
        {
                    fillColor: "rgba(0,0,0,0)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor : "#fff",
                    pointHighlightFill : "#fff",
                    pointHighlightStroke : "rgba(220,220,220,1)",
                    data : [24.39,34.69,9.67,14.84,8.93,15.35,18.82,23.6,26.74,13.37,14.2,13.38,14,9.52],
                              title: "Mobile",

        },{
            
                    fillColor: "rgba(0,0,0,0)",
                    strokeColor: "rgba(151,187,0,1)",
                    pointColor: "rgba(151,187,0,1)",
                    pointStrokeColor : "#fff",
                    pointHighlightFill : "#fff",
                    pointHighlightStroke : "rgba(220,220,220,1)",
                    data : [24.39,16.33,5.66,6.71,6.55,7.44,5.38,11.24,20.93,4.65,5.56,3.52,5.33,19.05],
                    title: "Tablet",
        }

        ]
    };

    var ctx = document.getElementById("lineChart").getContext("2d");
    new Chart(ctx).Line(data);

    legend(document.getElementById("lineLegend"), data);

    // testing adding twice (should get same result)
    legend(document.getElementById("lineLegend"), data);
}
