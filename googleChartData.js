if(!!(window.addEventListener)) window.addEventListener('DOMContentLoaded', main);
else window.attachEvent('onload', main);

function main() {
    lineChart();
    pieChart();
}

function lineChart() {
    var data = {
        labels : ['10/09/2014','11/09/2014','12/09/2014','13/09/2014','14/09/2014','15/09/2014','16/09/2014'],
        datasets : [
            {
            


                    fillColor : "rgba(0,0,0,0)",
                    strokeColor : "rgba(220,220,220,1)",
                    pointColor : "rgba(220,220,220,1)",
                    pointStrokeColor : "#fff",
                    pointHighlightFill : "#fff",
                    pointHighlightStroke : "rgba(220,220,220,1)",
                    data : [84.52,77.21,75.81,65.17,52.33,81.98,80.13],
                    title: "Desktop",
        },
        {
                    fillColor: "rgba(0,0,0,0)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor : "#fff",
                    pointHighlightFill : "#fff",
                    pointHighlightStroke : "rgba(220,220,220,1)",
                    data : [8.93,15.35,18.82,23.6,26.74,13.37,14.74],
                              title: "Mobile",

        },{
            
                    fillColor: "rgba(0,0,0,0)",
                    strokeColor: "rgba(151,187,0,1)",
                    pointColor: "rgba(151,187,0,1)",
                    pointStrokeColor : "#fff",
                    pointHighlightFill : "#fff",
                    pointHighlightStroke : "rgba(220,220,220,1)",
                    data : [6.55,7.44,5.38,11.24,20.93,4.65,5.13],
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
