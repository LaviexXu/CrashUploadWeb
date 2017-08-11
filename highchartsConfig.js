/**
 * Created by Carlos on 03/08/2017.
 */
var deviceDistributionChart=null;
var systemDistributionChart=null;
$(document).ready(function ($) {
    $(".highcharts-container").highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: "  "
        },
        xAxis: {
            categories: ['00:00', '01:00', '02:00', '03:00', '04:00',
                '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
                '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', "18:00",
                '19:00', '20:00', '21:00', '22:00', '23:00'],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: null
            }
        },
        tooltip: {
            headerFormat: '<span>{point.key}:</span>',
            pointFormat: '<span>崩溃<b>{point.y}</b>次</span>',
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        credits: {
            enabled: false
        },
        colors: [
            '#FF9655'
        ],
        series: [{
            name: "crashNum",
            showInLegend: false,
            data: [68, 51, 30, 12, 10, 18, 45, 80, 76, 69, 81, 75, 99, 77, 56, 63, 68, 78, 66, 80, 67, 59, 45, 50]
        }]
    });
    $("#device-distribution").highcharts({
        chart: {
            plotBackgroundColor: "#a5a5a5",
            plotBorderWidth: null,
            plotShadow: false,
            spacing : [100, 0 , 40, 0]

        },
        title:{
            text:"设备分布"
        },
        tooltip:{
            pointFormat: "{point.percentage:.1f}%"
        },
        plotOptions:{
            pie:{
            allowPointSelect: true,
            cursor: 'pointer'}
        },
        credits:{
          enabled:false
        },
        series:[{
            type:'pie',
            size:"100%",
            innerSize:"60%",
            name:"设备分布",
            data:[["samsung",78.1],["xiaomi",21.9]],
            showInLegend:true

        }]

    },function (chart) {
        deviceDistributionChart=chart;
    });
    $("#system-distribution").highcharts({
        chart: {
            plotBackgroundColor: "#a5a5a5",
            plotBorderWidth: null,
            plotShadow: false,
            spacing : [100, 0 , 40, 0]

        },
        title:{
            text:"系统分布"
        },
        tooltip:{
            pointFormat: "{point.percentage:.1f}%",
            shared:false
        },
        plotOptions:{
            pie:{
                allowPointSelect: true,
                cursor: 'pointer'}
        },
        credits:{
            enabled:false
        },
        series:[{
            type:'pie',
            innerSize:"60%",
            size:"100%",
            name:"系统分布",
            data:[["4.x",26.1],["5.x",41.7],["6.x",30.1],["others",2.1]],
            showInLegend:true

        }]
    },function (chart) {
        systemDistributionChart=chart;
    });
    ko.applyBindings(new crashDataViewModel());

});
