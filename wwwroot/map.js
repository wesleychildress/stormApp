var l;
var interval;
function getAddr(id){
        
        l=document.getElementById("location").value=id;
        localStorage.setItem("l", l);
        location.href ="http://localhost:5000/evac-map";
        //l=document.getElementById("location").value=id;
}
function getIntervalPlease(){
    interval=document.getElementById("interval").value;
    localStorage.setItem("interval", interval);
    //alert(interval);

}

require([
    "esri/map",
    "esri/layers/FeatureLayer",
    "esri/urlUtils", "esri/dijit/Directions", "esri/symbols/SimpleLineSymbol",
    "esri/symbols/SimpleFillSymbol",
    "esri/Color",
    "esri/geometry/Point", "esri/SpatialReference","esri/tasks/RouteTask",            
        "esri/tasks/RouteParameters",
        "esri/tasks/FeatureSet",            
        "esri/symbols/SimpleMarkerSymbol",
        "esri/geometry", "esri/graphic"

], function (
    Map, FeatureLayer, urlUtils, Directions, SimpleLineSymbol, SimpleFillSymbol, Color, Point, SpatialReference, RouteTask,
RouteParameters, FeatureSet, SimpleMarkerSymbol, Geometry, Graphic
) {
/*
//added this
var routeParams=[];
var barrierSymbol;
    routeParams = new RouteParameters();s
     routeParams.barriers = new FeatureSet();
        routeParams.outSpatialReference = {"wkid":102100};

 barrierSymbol = new SimpleMarkerSymbol().setStyle(SimpleMarkerSymbol.STYLE_X).setSize(10);
        barrierSymbol.outline.setWidth(3).setColor(new Color([255,0,0]));
*/

        l = localStorage.getItem("l");
        interval = localStorage.getItem("interval");
        var clear="";
         var point1 = new Point(-75.075793, 38.356461, new SpatialReference({ wkid: 4326 }));
         var point2 = new Point(-75.062644, 38.395349, new SpatialReference({ wkid: 4326 }));
         var point3 = new Point(-75.053054, 38.447388, new SpatialReference({ wkid: 4326 }));
         var point4 = new Point(-75.066986, 38.388399, new SpatialReference({ wkid: 4326 }));
         var point5 = new Point(-75.067880, 38.383138, new SpatialReference({ wkid: 4326 }));
         var point6 = new Point(-75.069253, 38.377789, new SpatialReference({ wkid: 4326 }));
         var point7 = new Point(-75.080494, 38.345557, new SpatialReference({ wkid: 4326 }));
         var point8 = new Point(-75.087576, 38.332022, new SpatialReference({ wkid: 4326 }));
         var point9 = new Point(-75.105007, 38.335679, new SpatialReference({ wkid: 4326 }));

    //var m = document.getElementById("map");
        var map = new Map("map", {
            basemap: "streets",
            center: [-75.070529, 38.385861],
            zoom: 12

            //layers: [featureLayer]

        });

        var featureLayer = new FeatureLayer("https://services1.arcgis.com/jjVcwHv9AQEq3DH3/arcgis/rest/services/Evacuation_Zones/FeatureServer/0");
        //map.addLayer(featureLayer);
        var flood10 = new FeatureLayer("https://services1.arcgis.com/X3lKekbdaBmNjCHu/arcgis/rest/services/flood10_danger/FeatureServer/0?token=OVDNTKAJhXH8QDp7W78e2wMkAO7EBiBdmVt1typYCyBCdAXFrRPGAwhqQNmRg_144Hx9Wei8n6bozFhwnDMLQRwKG5S2kgHG_MEYkEkM_pnlZkneQYK2oDyk3eiEL37en1xA5-XYjjTbHE5DNQXZHghYUbvHBdkFnavbdY2nJxVtWa89HFhSWW7JatmSN-N7kbYrFPpNAoD5rbME7jrQImqyrWlOrooPebokZI0nmx0eCS6RdEYN463QEdJ8FxnS");
        var flood25 = new FeatureLayer("https://services1.arcgis.com/X3lKekbdaBmNjCHu/arcgis/rest/services/flood25_danger/FeatureServer/0?token=SdqFMfnqrqk-ANoWaHM_xbEhNvgVEZmjS6ezHTsqsZp0mR8MYDaLV4P_k-LCnZdPAPjNA37ppH4TX55Lihjz6a6PGnx8-eBpMk9x_NPeRVr90Ci5f68onzZzxVgbR8ZncwaC00X7FRh6ir6nyyeEnCk6hGXUS7s8WwX0WYS8P2VXOV9M7W8Z0RVAwewi8S7JnDrpsWKUYkWolJxn9Qmq-GrXdnZGErvJgIAocdaWd9TqRgdoS5GAO7katvWD-cln"); 
        var flood50 = new FeatureLayer("https://services1.arcgis.com/X3lKekbdaBmNjCHu/arcgis/rest/services/flood50_danger/FeatureServer/0?token=lhsm4h9XvjFAk1-YVKyqiofctj1c1gTv96jKvDWz8kezGM8wN5JkllooSRK1rDMiOeZCCzLsaCKD0-KIl4WakclI_0XULDlrFk7ARM_KF9mo6Qw2KZ7iLadoKBYOI_iB7-ZORYJJt7ZAUCznsaSBQ1fgF-ESGBJKZJcN308dTphqQx4lQDKqlE2jCjH1xB-o1W1tOn9eQY6HQ6FLXbVJ6eu1j-ZSBqvF53BuD0xp44dxSX39P2RqVaYK2qJSqvXW"); 
        var flood100= new FeatureLayer("https://services1.arcgis.com/X3lKekbdaBmNjCHu/arcgis/rest/services/flood100_danger/FeatureServer/0?token=Z5STpfWrUKEWPHUpnJ-SF8CmowMT2-W40BZ2-tm7AqD8ZVBiz4OphFrD6DvNCBgiWzQSOXyOFTdOcgbyX9v28sk43Pg3DN_suNisT0REFsYIVuoAbq79IjsORpXgewcsTDPXOvc8QvpWOHADfRJcOufzKKbtCxE-VEizWHDpVu0Zj3cTouspAnKoZcGfkPxjVP80jqDvURi-WnWNSnZmQ6IL0HVqa1ngPe5rS2GS1nQHOXOmbiBrHabieOOnpQfl"); 
        

        var d = document.getElementById("dir");


        var directions = new Directions({
            map: map
            
        }, d);
        directions.startup();


/*
var point = new Point(-75.062644, 38.395349);

    routeParams.barriers.features.push(
            map.graphics.add(
              new esri.Graphic(
                (-75.062644, 38.395349), barrierSymbol
                )
            )
    );

*/

        if(interval==10){
            map.addLayer(flood10);
        }
        else if (interval == 25) { 
            map.addLayer(flood25); 
        } 
        else if (interval == 50) { 
            map.addLayer(flood50); 
        } 
        else if(interval == 100){ 
            map.addLayer(flood100); 
        } 
        else{ 
            map.addLayer(featureLayer); 
        } 
 



        if(l=="2611 N Philadelphia Ave, Ocean City, MD 21842"){
            directions.addStop(point1, 1);
            localStorage.setItem("l", clear);
            //alert("close");
        }
        else if(l=="7408 Coastal Hwy, Ocean City, MD 21842"){
            directions.addStop(point2, 1);
            localStorage.setItem("l", clear);
        }
        else if(l=="14107 Coastal Hwy, Ocean City, MD 21842"){
            directions.addStop(point3, 1);
            localStorage.setItem("l", clear);
        }
        else if(l=="6501 Coastal Hwy, Ocean City, MD 21842"){
            directions.addStop(point4, 1);
            localStorage.setItem("l", clear);
        }
        else if(l=="5809 Coastal Hwy, Ocean City, MD 21842"){
            directions.addStop(point5, 1);
            localStorage.setItem("l", clear);
        }
        else if(l=="5201 Coastal Hwy, Ocean City, MD 21842"){
            directions.addStop(point6, 1);
            localStorage.setItem("l", clear);
        }
        else if(l=="1409 Philadelphia Ave, Ocean City, MD 21842"){
            directions.addStop(point7, 1);
            localStorage.setItem("l", clear);
        }
        else if(l=="5 Philadelphia Ave, Ocean City, MD 21842"){
            directions.addStop(point8, 1);
            localStorage.setItem("l", clear);
        }
        else if(l=="12826A Ocean Gateway, Ocean City, MD 21842"){
            directions.addStop(point9, 1);
            localStorage.setItem("l", clear);
        }
        else{
            direction.removeStop(1);
        }
    });