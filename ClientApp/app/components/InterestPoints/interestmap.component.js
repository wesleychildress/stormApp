var map;
var graphicsArray = [];
require(["esri/map",
    "esri/geometry/Geometry",
    "esri/geometry/Point",
    "esri/geometry/Polyline",
    "esri/geometry/Polygon",
    "esri/graphic",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/symbols/SimpleLineSymbol",
    "esri/symbols/SimpleFillSymbol",
    "esri/Color",
    "esri/InfoTemplate",
    "dojo/parser",
    "dijit/layout/BorderContainer", 
    "dijit/layout/ContentPane",
    "dojo/domReady!",
    "esri/geometry"], function (Map,

        Geometry,
        Point,
        Polyline,
        Polygon,
        Graphic,
        SimpleMarkerSymbol,
        SimpleLineSymbol,
        SimpleFillSymbol,
        Color,
        InfoTemplate, parser) {
        parser.parse();
        map = new Map("map", {
            basemap: "streets",
            center: [-75.070529, 38.385861],
            zoom: 13
        });
        
        map.on("load", addPoints);

    /*Medical symbol*/
    var pointSymbol = new SimpleMarkerSymbol();
    pointSymbol.setColor(new Color("red"));
    /*Gas station symbol*/
    var pointSymbol2 = new SimpleMarkerSymbol();
    pointSymbol2.setColor(new Color("#22D900"));
    /*Fire Department*/
    var pointSymbol3 = new SimpleMarkerSymbol();
    pointSymbol3.setColor(new Color("#ff0099"));
    /*Police symbol*/
    var pointSymbol4 = new SimpleMarkerSymbol();
    pointSymbol4.setColor(new Color("blue"));

    
    var point = new Point(-75.062644, 38.395349);
    var pointAttributes = { Address: "7408 Coastal Hwy, Ocean City, MD 21842" };
    var pointInfoTemplate = new InfoTemplate("75th St. Medical Center");
    var pointGraphic = new Graphic(point, pointSymbol, pointAttributes).setInfoTemplate(pointInfoTemplate);

    var point2 = new Point(-75.075698, 38.357137);
    var pointAttributes2 = { Address: "2611 N Philadelphia Ave, Ocean City, MD 21842" };
    var pointInfoTemplate2 = new InfoTemplate("7-Eleven");
    var pointGraphic2 = new Graphic(point2, pointSymbol2, pointAttributes2).setInfoTemplate(pointInfoTemplate2);
    
    var point3 = new Point(-75.087576, 38.332022);
    var pointAttributes3 = { Address: "5 Philadelphia Ave, Ocean City, MD 21842" };
    var pointInfoTemplate3 = new InfoTemplate("Shell Gas Station");
    var pointGraphic3 = new Graphic(point3, pointSymbol2, pointAttributes3).setInfoTemplate(pointInfoTemplate3);

    var point4 = new Point(-75.066986, 38.388399);
    var pointAttributes4 = { Address: "6501 Coastal Hwy, Ocean City, MD 21842" };
    var pointInfoTemplate4 = new InfoTemplate("Ocean City Police Department");
    var pointGraphic4 = new Graphic(point4, pointSymbol4, pointAttributes4).setInfoTemplate(pointInfoTemplate4);

    var point5 = new Point(-75.105007, 38.335679);
    var pointAttributes5 = { Address: "12826A Ocean Gateway, Ocean City, MD 21842" };
    var pointInfoTemplate5 = new InfoTemplate("Royal Farms");
    var pointGraphic5 = new Graphic(point5, pointSymbol2, pointAttributes5).setInfoTemplate(pointInfoTemplate5);

    var point6 = new Point(-75.080494, 38.345557);
    var pointAttributes6 = { Address: "1409 Philadelphia Ave, Ocean City, MD 21842" };
    var pointInfoTemplate6 = new InfoTemplate("Ocean City Fire Department");
    var pointGraphic6 = new Graphic(point6, pointSymbol4, pointAttributes6).setInfoTemplate(pointInfoTemplate6);

    var point7 = new Point(-75.067880, 38.383138);
    var pointAttributes7 = { Address: "5809 Coastal Hwy, Ocean City, MD 21842" };
    var pointInfoTemplate7 = new InfoTemplate("7-Eleven");
    var pointGraphic7 = new Graphic(point7, pointSymbol2, pointAttributes7).setInfoTemplate(pointInfoTemplate7);

    var point8 = new Point(-75.069253, 38.377789);
    var pointAttributes8 = { Address: "5201 Coastal Hwy, Ocean City, MD 21842" };
    var pointInfoTemplate8 = new InfoTemplate("Exxon");
    var pointGraphic8 = new Graphic(point8, pointSymbol2, pointAttributes8).setInfoTemplate(pointInfoTemplate8);

    var point9 = new Point(-75.054748, 38.434857);
    var pointAttributes9 = { Address: "12901 Coastal Hwy, Ocean City, MD 21842" };
    var pointInfoTemplate9 = new InfoTemplate("Sunoco");
    var pointGraphic9 = new Graphic(point9, pointSymbol2, pointAttributes9).setInfoTemplate(pointInfoTemplate9);

    var point10 = new Point(-75.053054, 38.447388);
    var pointAttributes10 = { Address: "14107 Coastal Hwy, Ocean City, MD 21842" };
    var pointInfoTemplate10 = new InfoTemplate("Exxon");
    var pointGraphic10 = new Graphic(point10, pointSymbol2, pointAttributes10).setInfoTemplate(pointInfoTemplate10);

    var point11 = new Point(-75.055394, 38.433702);
    var pointAttributes11 = { Address: "12801 Coastal Hwy, Ocean City, MD 21842" };
    var pointInfoTemplate11 = new InfoTemplate("Higgins Liquor Beer and WIne");
    var pointGraphic11 = new Graphic(point11, pointSymbol3, pointAttributes11).setInfoTemplate(pointInfoTemplate11);

    graphicsArray.push(pointGraphic);
    graphicsArray.push(pointGraphic2);
    graphicsArray.push(pointGraphic3);
    graphicsArray.push(pointGraphic4);
    graphicsArray.push(pointGraphic5);
    graphicsArray.push(pointGraphic6);
    graphicsArray.push(pointGraphic7);
    graphicsArray.push(pointGraphic8);
    graphicsArray.push(pointGraphic9);
    graphicsArray.push(pointGraphic10);
    graphicsArray.push(pointGraphic11);

    function addPoints() {
      for (i = 0; i < graphicsArray.length; ++i) {
          map.graphics.add(graphicsArray[i]);
      }
  }
});