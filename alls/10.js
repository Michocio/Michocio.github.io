

<style>

</style>

<div id="id10"></div>
<script>
function mpld3_load_lib(url, callback){
  var s = document.createElement('script');
  s.src = url;
  s.async = true;
  s.onreadystatechange = s.onload = callback;
  s.onerror = function(){console.warn("failed to load library " + url);};
  document.getElementsByTagName("head")[0].appendChild(s);
}

if(typeof(mpld3) !== "undefined" && mpld3._mpld3IsLoaded){
   // already loaded: just create the figure
   !function(mpld3){
       
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low","vals","alls"];

   /*var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");*/
    //var tooltip = d3.select("#lista");
    
    var table = d3.select("#lista");//tooltip.append('table').attr("class", "sortable");
    var table2 = d3.select("#lista2");//tooltip.append('table').attr("class", "sortable");

    
                
    function ClickInfo(fig, props){
        mpld3.Plugin.call(this, fig, props);
        
    };

    ClickInfo.prototype.draw = function(){

        var data = this.props.players;
        var wiek = this.props.wiek;
        var low = this.props.low;
        var bins = this.props.vals;
        var alls = this.props.alls;
                                          var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in alls) {
                                      licz+=1;
                                    tekst+= "<tr>";
                                    var zawodnik = alls[j];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1][0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1][1]+"</td>";
                                    
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                table2.html(tekst);

        this.props.ids.forEach(function(id, i) {
            console.log(id, i);
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  console.log("click", id,i,d);
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in wiek[i+low]) {
                                      licz+=1;
                                    tekst+= "<tr>";
                                    var zawodnik = data[wiek[i+low][j]];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1]+"</td>";
                                    tekst+= "<td>" +  zawodnik[2]+"</td>";
                                    
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                
                                if (licz > 1) {
                                tekst+="<tfoot>";
                                tekst+= "<tr>";

                                
                                tekst+= "<td> </td>";
                                
                                    tekst+= "<td>" + bins[i+low][0]+"</td>";
                                    tekst+= "<td>" +  bins[i+low][1]+"</td>";
                                    tekst+= "</tr>";
                                tekst+="</tfoot>";
                                }
                                table.html(tekst);
                              });
                              });
    }
    
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low","vals","alls"];

   /*var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");*/
    //var tooltip = d3.select("#lista");
    
    var table = d3.select("#lista");//tooltip.append('table').attr("class", "sortable");
    var table2 = d3.select("#lista2");//tooltip.append('table').attr("class", "sortable");

    
                
    function ClickInfo(fig, props){
        mpld3.Plugin.call(this, fig, props);
        
    };

    ClickInfo.prototype.draw = function(){

        var data = this.props.players;
        var wiek = this.props.wiek;
        var low = this.props.low;
        var bins = this.props.vals;
        var alls = this.props.alls;
                                          var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in alls) {
                                      licz+=1;
                                    tekst+= "<tr>";
                                    var zawodnik = alls[j];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1][0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1][1]+"</td>";
                                    
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                table2.html(tekst);

        this.props.ids.forEach(function(id, i) {
            console.log(id, i);
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  console.log("click", id,i,d);
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in wiek[i+low]) {
                                      licz+=1;
                                    tekst+= "<tr>";
                                    var zawodnik = data[wiek[i+low][j]];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1]+"</td>";
                                    tekst+= "<td>" +  zawodnik[2]+"</td>";
                                    
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                
                                if (licz > 1) {
                                tekst+="<tfoot>";
                                tekst+= "<tr>";

                                
                                tekst+= "<td> </td>";
                                
                                    tekst+= "<td>" + bins[i+low][0]+"</td>";
                                    tekst+= "<td>" +  bins[i+low][1]+"</td>";
                                    tekst+= "</tr>";
                                tekst+="</tfoot>";
                                }
                                table.html(tekst);
                              });
                              });
    }
    
       mpld3.draw_figure("id10", {"id": "el6928140242920101480", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"wiek": {"32": [38618], "16": [926915], "17": [1064502], "19": [457331], "20": [199802], "21": [180862], "22": [218915], "23": [171737], "24": [254166, 377495, 189432], "25": [84129, 24076], "26": [259181, 25068], "27": [26165, 6675, 87917, 23275, 8449], "28": [38602, 259132, 18867], "29": [23468, 136128], "30": [38683]}, "alls": [["Batosz Rymaniak", [2877, 254]], ["Michael Gardawski", [2742, 265]], ["Jakub \u017bubrowski", [2674, 272]], ["Adnan Kovacevic", [2674, 271]], ["Elia Soriano", [2648, 258]], ["Oliver Petrak", [2443, 251]], ["Iv\u00e1n M\u00e1rquez", [2208, 255]], ["Matej Pucko", [2073, 255]], ["\u0141ukasz Kosakiewicz", [1757, 245]], ["E. Diaw", [1732, 270]], ["Ivan Jukic", [1388, 256]], ["F. Brown Forbes", [1338, 242]], ["Vato Arveladze", [1256, 268]], ["Marcin Cebula", [1229, 276]], ["Ognjen Gnjatic", [1051, 274]], ["Zlatko Janjic", [1034, 238]], ["Piotr Malarczyk", [921, 252]], ["Mateusz Mo\u017cd\u017ce\u0144", [828, 239]], ["Ken Kallaste", [717, 253]], ["Maciej Gorski", [709, 216]], ["Joonas Tamm", [371, 264]], ["Oktawian Skrzecz", [248, 225]], ["Aleksandar Bjelica", [214, 268]], ["Oskar Sewerzynski", [138, 214]], ["Piotr Pierzcha\u0142a", [94, 253]], ["Daniel Szelagowski", [33, 197]]], "vals": {"32": [1034, 238], "16": [33, 0], "17": [138, 214], "19": [94, 253], "20": [1256, 268], "21": [248, 225], "22": [1388, 256], "23": [1229, 276], "24": [4154, 262], "25": [4747, 264], "26": [3045, 271], "27": [6581, 252], "28": [5208, 252], "29": [5525, 256], "30": [717, 253]}, "type": "clickinfo", "players": {"136128": ["Elia Soriano", 2648, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 828, 239], "926915": ["Daniel Szelagowski", 33, 197], "25068": ["Joonas Tamm", 371, 264], "38602": ["Michael Gardawski", 2742, 265], "24076": ["Matej Pucko", 2073, 255], "87917": ["Ognjen Gnjatic", 1051, 274], "6675": ["F. Brown Forbes", 1338, 242], "254166": ["Iv\u00e1n M\u00e1rquez", 2208, 255], "377495": ["E. Diaw", 1732, 270], "171737": ["Marcin Cebula", 1229, 276], "38618": ["Zlatko Janjic", 1034, 238], "38683": ["Ken Kallaste", 717, 253], "457331": ["Piotr Pierzcha\u0142a", 94, 253], "84129": ["Adnan Kovacevic", 2674, 271], "218915": ["Ivan Jukic", 1388, 256], "23275": ["Piotr Malarczyk", 921, 252], "23468": ["Batosz Rymaniak", 2877, 254], "259181": ["Jakub \u017bubrowski", 2674, 272], "18867": ["Maciej Gorski", 709, 216], "26165": ["Oliver Petrak", 2443, 251], "1064502": ["Oskar Sewerzynski", 138, 214], "189432": ["Aleksandar Bjelica", 214, 268], "199802": ["Vato Arveladze", 1256, 268], "259132": ["\u0141ukasz Kosakiewicz", 1757, 245], "180862": ["Oktawian Skrzecz", 248, 225]}, "low": 16, "ids": ["el6928140242918783408", "el6928140242918782904", "el6928140242918784248", "el6928140242918813880", "el6928140242918814776", "el6928140242918815672", "el6928140242918816568", "el6928140242918817464", "el6928140242918843000", "el6928140242918843896", "el6928140242918844792", "el6928140242918845688", "el6928140242918871224", "el6928140242918872120", "el6928140242918873016", "el6928140242918873912", "el6928140242918874808"]}, {"wiek": {"32": [38618], "16": [926915], "17": [1064502], "19": [457331], "20": [199802], "21": [180862], "22": [218915], "23": [171737], "24": [254166, 377495, 189432], "25": [84129, 24076], "26": [259181, 25068], "27": [26165, 6675, 87917, 23275, 8449], "28": [38602, 259132, 18867], "29": [23468, 136128], "30": [38683]}, "alls": [["Batosz Rymaniak", [2877, 254]], ["Michael Gardawski", [2742, 265]], ["Jakub \u017bubrowski", [2674, 272]], ["Adnan Kovacevic", [2674, 271]], ["Elia Soriano", [2648, 258]], ["Oliver Petrak", [2443, 251]], ["Iv\u00e1n M\u00e1rquez", [2208, 255]], ["Matej Pucko", [2073, 255]], ["\u0141ukasz Kosakiewicz", [1757, 245]], ["E. Diaw", [1732, 270]], ["Ivan Jukic", [1388, 256]], ["F. Brown Forbes", [1338, 242]], ["Vato Arveladze", [1256, 268]], ["Marcin Cebula", [1229, 276]], ["Ognjen Gnjatic", [1051, 274]], ["Zlatko Janjic", [1034, 238]], ["Piotr Malarczyk", [921, 252]], ["Mateusz Mo\u017cd\u017ce\u0144", [828, 239]], ["Ken Kallaste", [717, 253]], ["Maciej Gorski", [709, 216]], ["Joonas Tamm", [371, 264]], ["Oktawian Skrzecz", [248, 225]], ["Aleksandar Bjelica", [214, 268]], ["Oskar Sewerzynski", [138, 214]], ["Piotr Pierzcha\u0142a", [94, 253]], ["Daniel Szelagowski", [33, 197]]], "vals": {"32": [1034, 238], "16": [33, 0], "17": [138, 214], "19": [94, 253], "20": [1256, 268], "21": [248, 225], "22": [1388, 256], "23": [1229, 276], "24": [4154, 262], "25": [4747, 264], "26": [3045, 271], "27": [6581, 252], "28": [5208, 252], "29": [5525, 256], "30": [717, 253]}, "type": "clickinfo", "players": {"136128": ["Elia Soriano", 2648, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 828, 239], "926915": ["Daniel Szelagowski", 33, 197], "25068": ["Joonas Tamm", 371, 264], "38602": ["Michael Gardawski", 2742, 265], "24076": ["Matej Pucko", 2073, 255], "87917": ["Ognjen Gnjatic", 1051, 274], "6675": ["F. Brown Forbes", 1338, 242], "254166": ["Iv\u00e1n M\u00e1rquez", 2208, 255], "377495": ["E. Diaw", 1732, 270], "171737": ["Marcin Cebula", 1229, 276], "38618": ["Zlatko Janjic", 1034, 238], "38683": ["Ken Kallaste", 717, 253], "457331": ["Piotr Pierzcha\u0142a", 94, 253], "84129": ["Adnan Kovacevic", 2674, 271], "218915": ["Ivan Jukic", 1388, 256], "23275": ["Piotr Malarczyk", 921, 252], "23468": ["Batosz Rymaniak", 2877, 254], "259181": ["Jakub \u017bubrowski", 2674, 272], "18867": ["Maciej Gorski", 709, 216], "26165": ["Oliver Petrak", 2443, 251], "1064502": ["Oskar Sewerzynski", 138, 214], "189432": ["Aleksandar Bjelica", 214, 268], "199802": ["Vato Arveladze", 1256, 268], "259132": ["\u0141ukasz Kosakiewicz", 1757, 245], "180862": ["Oktawian Skrzecz", 248, 225]}, "low": 16, "ids": ["el6928140242918893272", "el6928140242918783072", "el6928140242918894000", "el6928140242918894896", "el6928140242918912240", "el6928140242918913136", "el6928140242918914032", "el6928140242918914928", "el6928140242918915824", "el6928140242918412976", "el6928140242918413872", "el6928140242918414768", "el6928140242918415664", "el6928140242918433008", "el6928140242918433904", "el6928140242918434800", "el6928140242918435696"]}], "axes": [{"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": null, "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 6}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "fontsize": 10.0, "position": "left", "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "nticks": 17}], "images": [], "markers": [], "id": "el6928140242919055488", "zoomable": true, "sharey": ["el6928140242919087408"], "yscale": "linear", "texts": [{"id": "el6928140242919057952", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Minuty", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [8218.0, 33.0], "xscale": "linear", "ydomain": [14.65, 33.35], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axesbg": "#FFFFFF", "ylim": [14.65, 33.35], "paths": [{"id": "el6928140242918783408", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918782904", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918784248", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918813880", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918814776", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918815672", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918816568", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918817464", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918843000", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918843896", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918844792", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918845688", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918871224", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918872120", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918873016", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918873912", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918874808", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data16", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [8218.0, 33.0], "sharex": []}, {"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": [214, 229, 244, 259, 276], "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 5}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "fontsize": null, "position": "right", "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "nticks": 17}], "images": [], "markers": [], "id": "el6928140242919087408", "zoomable": true, "sharey": ["el6928140242919055488"], "yscale": "linear", "texts": [{"id": "el6928140242919375928", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Instat index", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [204.0, 286.0], "xscale": "linear", "ydomain": [14.65, 33.35], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axesbg": "#FFFFFF", "ylim": [14.65, 33.35], "paths": [{"id": "el6928140242918893272", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918783072", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918894000", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918894896", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918912240", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918913136", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918914032", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918914928", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918915824", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918412976", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918413872", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918414768", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918415664", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918433008", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918433904", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918434800", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 4, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918435696", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data16", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [204.0, 286.0], "sharex": []}], "height": 480.0, "data": {"data11": [[0.0, 25.5, 0.0], [3045.0, 25.5, 271.0], [3045.0, 26.5, 271.0], [0.0, 26.5, 0.0]], "data04": [[0.0, 18.5, 0.0, 29.5], [94.0, 18.5, 253.0, 29.5], [94.0, 19.5, 253.0, 30.5], [0.0, 19.5, 0.0, 30.5]], "data14": [[0.0, 28.5], [5525.0, 28.5], [5525.0, 29.5], [0.0, 29.5]], "data08": [[0.0, 22.5, 0.0], [1229.0, 22.5, 276.0], [1229.0, 23.5, 276.0], [0.0, 23.5, 0.0]], "data03": [[0.0, 17.5, 30.5], [0.0, 17.5, 30.5], [0.0, 18.5, 31.5], [0.0, 18.5, 31.5]], "data10": [[0.0, 24.5, 0.0], [4747.0, 24.5, 264.0], [4747.0, 25.5, 264.0], [0.0, 25.5, 0.0]], "data13": [[0.0, 27.5], [5208.0, 27.5], [5208.0, 28.5], [0.0, 28.5]], "data02": [[0.0, 16.5, 0.0], [138.0, 16.5, 214.0], [138.0, 17.5, 214.0], [0.0, 17.5, 0.0]], "data05": [[0.0, 19.5, 0.0], [1256.0, 19.5, 268.0], [1256.0, 20.5, 268.0], [0.0, 20.5, 0.0]], "data01": [[0.0, 15.5, 0.0, 17.5, 30.5], [33.0, 15.5, 0.0, 17.5, 30.5], [33.0, 16.5, 0.0, 18.5, 31.5], [0.0, 16.5, 0.0, 18.5, 31.5]], "data09": [[0.0, 23.5, 0.0], [4154.0, 23.5, 262.0], [4154.0, 24.5, 262.0], [0.0, 24.5, 0.0]], "data06": [[0.0, 20.5, 0.0], [248.0, 20.5, 225.0], [248.0, 21.5, 225.0], [0.0, 21.5, 0.0]], "data16": [[0.0, 31.5, 0.0], [1034.0, 31.5, 238.0], [1034.0, 32.5, 238.0], [0.0, 32.5, 0.0]], "data12": [[0.0, 26.5, 0.0, 27.5], [6581.0, 26.5, 252.0, 27.5], [6581.0, 27.5, 252.0, 28.5], [0.0, 27.5, 0.0, 28.5]], "data15": [[0.0, 29.5], [717.0, 29.5], [717.0, 30.5], [0.0, 30.5]], "data07": [[0.0, 21.5, 0.0, 28.5], [1388.0, 21.5, 256.0, 28.5], [1388.0, 22.5, 256.0, 29.5], [0.0, 22.5, 0.0, 29.5]]}, "width": 640.0});
   }(mpld3);
}else if(typeof define === "function" && define.amd){
   // require.js is available: use it to load d3/mpld3
   require.config({paths: {d3: "https://mpld3.github.io/js/d3.v3.min"}});
   require(["d3"], function(d3){
      window.d3 = d3;
      mpld3_load_lib("https://mpld3.github.io/js/mpld3.v0.3.1.dev1.js", function(){
         
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low","vals","alls"];

   /*var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");*/
    //var tooltip = d3.select("#lista");
    
    var table = d3.select("#lista");//tooltip.append('table').attr("class", "sortable");
    var table2 = d3.select("#lista2");//tooltip.append('table').attr("class", "sortable");

    
                
    function ClickInfo(fig, props){
        mpld3.Plugin.call(this, fig, props);
        
    };

    ClickInfo.prototype.draw = function(){

        var data = this.props.players;
        var wiek = this.props.wiek;
        var low = this.props.low;
        var bins = this.props.vals;
        var alls = this.props.alls;
                                          var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in alls) {
                                      licz+=1;
                                    tekst+= "<tr>";
                                    var zawodnik = alls[j];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1][0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1][1]+"</td>";
                                    
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                table2.html(tekst);

        this.props.ids.forEach(function(id, i) {
            console.log(id, i);
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  console.log("click", id,i,d);
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in wiek[i+low]) {
                                      licz+=1;
                                    tekst+= "<tr>";
                                    var zawodnik = data[wiek[i+low][j]];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1]+"</td>";
                                    tekst+= "<td>" +  zawodnik[2]+"</td>";
                                    
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                
                                if (licz > 1) {
                                tekst+="<tfoot>";
                                tekst+= "<tr>";

                                
                                tekst+= "<td> </td>";
                                
                                    tekst+= "<td>" + bins[i+low][0]+"</td>";
                                    tekst+= "<td>" +  bins[i+low][1]+"</td>";
                                    tekst+= "</tr>";
                                tekst+="</tfoot>";
                                }
                                table.html(tekst);
                              });
                              });
    }
    
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low","vals","alls"];

   /*var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");*/
    //var tooltip = d3.select("#lista");
    
    var table = d3.select("#lista");//tooltip.append('table').attr("class", "sortable");
    var table2 = d3.select("#lista2");//tooltip.append('table').attr("class", "sortable");

    
                
    function ClickInfo(fig, props){
        mpld3.Plugin.call(this, fig, props);
        
    };

    ClickInfo.prototype.draw = function(){

        var data = this.props.players;
        var wiek = this.props.wiek;
        var low = this.props.low;
        var bins = this.props.vals;
        var alls = this.props.alls;
                                          var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in alls) {
                                      licz+=1;
                                    tekst+= "<tr>";
                                    var zawodnik = alls[j];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1][0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1][1]+"</td>";
                                    
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                table2.html(tekst);

        this.props.ids.forEach(function(id, i) {
            console.log(id, i);
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  console.log("click", id,i,d);
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in wiek[i+low]) {
                                      licz+=1;
                                    tekst+= "<tr>";
                                    var zawodnik = data[wiek[i+low][j]];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1]+"</td>";
                                    tekst+= "<td>" +  zawodnik[2]+"</td>";
                                    
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                
                                if (licz > 1) {
                                tekst+="<tfoot>";
                                tekst+= "<tr>";

                                
                                tekst+= "<td> </td>";
                                
                                    tekst+= "<td>" + bins[i+low][0]+"</td>";
                                    tekst+= "<td>" +  bins[i+low][1]+"</td>";
                                    tekst+= "</tr>";
                                tekst+="</tfoot>";
                                }
                                table.html(tekst);
                              });
                              });
    }
    
         mpld3.draw_figure("id10", {"id": "el6928140242920101480", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"wiek": {"32": [38618], "16": [926915], "17": [1064502], "19": [457331], "20": [199802], "21": [180862], "22": [218915], "23": [171737], "24": [254166, 377495, 189432], "25": [84129, 24076], "26": [259181, 25068], "27": [26165, 6675, 87917, 23275, 8449], "28": [38602, 259132, 18867], "29": [23468, 136128], "30": [38683]}, "alls": [["Batosz Rymaniak", [2877, 254]], ["Michael Gardawski", [2742, 265]], ["Jakub \u017bubrowski", [2674, 272]], ["Adnan Kovacevic", [2674, 271]], ["Elia Soriano", [2648, 258]], ["Oliver Petrak", [2443, 251]], ["Iv\u00e1n M\u00e1rquez", [2208, 255]], ["Matej Pucko", [2073, 255]], ["\u0141ukasz Kosakiewicz", [1757, 245]], ["E. Diaw", [1732, 270]], ["Ivan Jukic", [1388, 256]], ["F. Brown Forbes", [1338, 242]], ["Vato Arveladze", [1256, 268]], ["Marcin Cebula", [1229, 276]], ["Ognjen Gnjatic", [1051, 274]], ["Zlatko Janjic", [1034, 238]], ["Piotr Malarczyk", [921, 252]], ["Mateusz Mo\u017cd\u017ce\u0144", [828, 239]], ["Ken Kallaste", [717, 253]], ["Maciej Gorski", [709, 216]], ["Joonas Tamm", [371, 264]], ["Oktawian Skrzecz", [248, 225]], ["Aleksandar Bjelica", [214, 268]], ["Oskar Sewerzynski", [138, 214]], ["Piotr Pierzcha\u0142a", [94, 253]], ["Daniel Szelagowski", [33, 197]]], "vals": {"32": [1034, 238], "16": [33, 0], "17": [138, 214], "19": [94, 253], "20": [1256, 268], "21": [248, 225], "22": [1388, 256], "23": [1229, 276], "24": [4154, 262], "25": [4747, 264], "26": [3045, 271], "27": [6581, 252], "28": [5208, 252], "29": [5525, 256], "30": [717, 253]}, "type": "clickinfo", "players": {"136128": ["Elia Soriano", 2648, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 828, 239], "926915": ["Daniel Szelagowski", 33, 197], "25068": ["Joonas Tamm", 371, 264], "38602": ["Michael Gardawski", 2742, 265], "24076": ["Matej Pucko", 2073, 255], "87917": ["Ognjen Gnjatic", 1051, 274], "6675": ["F. Brown Forbes", 1338, 242], "254166": ["Iv\u00e1n M\u00e1rquez", 2208, 255], "377495": ["E. Diaw", 1732, 270], "171737": ["Marcin Cebula", 1229, 276], "38618": ["Zlatko Janjic", 1034, 238], "38683": ["Ken Kallaste", 717, 253], "457331": ["Piotr Pierzcha\u0142a", 94, 253], "84129": ["Adnan Kovacevic", 2674, 271], "218915": ["Ivan Jukic", 1388, 256], "23275": ["Piotr Malarczyk", 921, 252], "23468": ["Batosz Rymaniak", 2877, 254], "259181": ["Jakub \u017bubrowski", 2674, 272], "18867": ["Maciej Gorski", 709, 216], "26165": ["Oliver Petrak", 2443, 251], "1064502": ["Oskar Sewerzynski", 138, 214], "189432": ["Aleksandar Bjelica", 214, 268], "199802": ["Vato Arveladze", 1256, 268], "259132": ["\u0141ukasz Kosakiewicz", 1757, 245], "180862": ["Oktawian Skrzecz", 248, 225]}, "low": 16, "ids": ["el6928140242918783408", "el6928140242918782904", "el6928140242918784248", "el6928140242918813880", "el6928140242918814776", "el6928140242918815672", "el6928140242918816568", "el6928140242918817464", "el6928140242918843000", "el6928140242918843896", "el6928140242918844792", "el6928140242918845688", "el6928140242918871224", "el6928140242918872120", "el6928140242918873016", "el6928140242918873912", "el6928140242918874808"]}, {"wiek": {"32": [38618], "16": [926915], "17": [1064502], "19": [457331], "20": [199802], "21": [180862], "22": [218915], "23": [171737], "24": [254166, 377495, 189432], "25": [84129, 24076], "26": [259181, 25068], "27": [26165, 6675, 87917, 23275, 8449], "28": [38602, 259132, 18867], "29": [23468, 136128], "30": [38683]}, "alls": [["Batosz Rymaniak", [2877, 254]], ["Michael Gardawski", [2742, 265]], ["Jakub \u017bubrowski", [2674, 272]], ["Adnan Kovacevic", [2674, 271]], ["Elia Soriano", [2648, 258]], ["Oliver Petrak", [2443, 251]], ["Iv\u00e1n M\u00e1rquez", [2208, 255]], ["Matej Pucko", [2073, 255]], ["\u0141ukasz Kosakiewicz", [1757, 245]], ["E. Diaw", [1732, 270]], ["Ivan Jukic", [1388, 256]], ["F. Brown Forbes", [1338, 242]], ["Vato Arveladze", [1256, 268]], ["Marcin Cebula", [1229, 276]], ["Ognjen Gnjatic", [1051, 274]], ["Zlatko Janjic", [1034, 238]], ["Piotr Malarczyk", [921, 252]], ["Mateusz Mo\u017cd\u017ce\u0144", [828, 239]], ["Ken Kallaste", [717, 253]], ["Maciej Gorski", [709, 216]], ["Joonas Tamm", [371, 264]], ["Oktawian Skrzecz", [248, 225]], ["Aleksandar Bjelica", [214, 268]], ["Oskar Sewerzynski", [138, 214]], ["Piotr Pierzcha\u0142a", [94, 253]], ["Daniel Szelagowski", [33, 197]]], "vals": {"32": [1034, 238], "16": [33, 0], "17": [138, 214], "19": [94, 253], "20": [1256, 268], "21": [248, 225], "22": [1388, 256], "23": [1229, 276], "24": [4154, 262], "25": [4747, 264], "26": [3045, 271], "27": [6581, 252], "28": [5208, 252], "29": [5525, 256], "30": [717, 253]}, "type": "clickinfo", "players": {"136128": ["Elia Soriano", 2648, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 828, 239], "926915": ["Daniel Szelagowski", 33, 197], "25068": ["Joonas Tamm", 371, 264], "38602": ["Michael Gardawski", 2742, 265], "24076": ["Matej Pucko", 2073, 255], "87917": ["Ognjen Gnjatic", 1051, 274], "6675": ["F. Brown Forbes", 1338, 242], "254166": ["Iv\u00e1n M\u00e1rquez", 2208, 255], "377495": ["E. Diaw", 1732, 270], "171737": ["Marcin Cebula", 1229, 276], "38618": ["Zlatko Janjic", 1034, 238], "38683": ["Ken Kallaste", 717, 253], "457331": ["Piotr Pierzcha\u0142a", 94, 253], "84129": ["Adnan Kovacevic", 2674, 271], "218915": ["Ivan Jukic", 1388, 256], "23275": ["Piotr Malarczyk", 921, 252], "23468": ["Batosz Rymaniak", 2877, 254], "259181": ["Jakub \u017bubrowski", 2674, 272], "18867": ["Maciej Gorski", 709, 216], "26165": ["Oliver Petrak", 2443, 251], "1064502": ["Oskar Sewerzynski", 138, 214], "189432": ["Aleksandar Bjelica", 214, 268], "199802": ["Vato Arveladze", 1256, 268], "259132": ["\u0141ukasz Kosakiewicz", 1757, 245], "180862": ["Oktawian Skrzecz", 248, 225]}, "low": 16, "ids": ["el6928140242918893272", "el6928140242918783072", "el6928140242918894000", "el6928140242918894896", "el6928140242918912240", "el6928140242918913136", "el6928140242918914032", "el6928140242918914928", "el6928140242918915824", "el6928140242918412976", "el6928140242918413872", "el6928140242918414768", "el6928140242918415664", "el6928140242918433008", "el6928140242918433904", "el6928140242918434800", "el6928140242918435696"]}], "axes": [{"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": null, "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 6}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "fontsize": 10.0, "position": "left", "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "nticks": 17}], "images": [], "markers": [], "id": "el6928140242919055488", "zoomable": true, "sharey": ["el6928140242919087408"], "yscale": "linear", "texts": [{"id": "el6928140242919057952", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Minuty", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [8218.0, 33.0], "xscale": "linear", "ydomain": [14.65, 33.35], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axesbg": "#FFFFFF", "ylim": [14.65, 33.35], "paths": [{"id": "el6928140242918783408", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918782904", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918784248", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918813880", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918814776", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918815672", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918816568", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918817464", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918843000", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918843896", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918844792", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918845688", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918871224", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918872120", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918873016", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918873912", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918874808", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data16", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [8218.0, 33.0], "sharex": []}, {"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": [214, 229, 244, 259, 276], "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 5}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "fontsize": null, "position": "right", "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "nticks": 17}], "images": [], "markers": [], "id": "el6928140242919087408", "zoomable": true, "sharey": ["el6928140242919055488"], "yscale": "linear", "texts": [{"id": "el6928140242919375928", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Instat index", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [204.0, 286.0], "xscale": "linear", "ydomain": [14.65, 33.35], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axesbg": "#FFFFFF", "ylim": [14.65, 33.35], "paths": [{"id": "el6928140242918893272", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918783072", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918894000", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918894896", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918912240", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918913136", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918914032", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918914928", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918915824", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918412976", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918413872", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918414768", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918415664", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918433008", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918433904", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918434800", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 4, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918435696", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data16", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [204.0, 286.0], "sharex": []}], "height": 480.0, "data": {"data11": [[0.0, 25.5, 0.0], [3045.0, 25.5, 271.0], [3045.0, 26.5, 271.0], [0.0, 26.5, 0.0]], "data04": [[0.0, 18.5, 0.0, 29.5], [94.0, 18.5, 253.0, 29.5], [94.0, 19.5, 253.0, 30.5], [0.0, 19.5, 0.0, 30.5]], "data14": [[0.0, 28.5], [5525.0, 28.5], [5525.0, 29.5], [0.0, 29.5]], "data08": [[0.0, 22.5, 0.0], [1229.0, 22.5, 276.0], [1229.0, 23.5, 276.0], [0.0, 23.5, 0.0]], "data03": [[0.0, 17.5, 30.5], [0.0, 17.5, 30.5], [0.0, 18.5, 31.5], [0.0, 18.5, 31.5]], "data10": [[0.0, 24.5, 0.0], [4747.0, 24.5, 264.0], [4747.0, 25.5, 264.0], [0.0, 25.5, 0.0]], "data13": [[0.0, 27.5], [5208.0, 27.5], [5208.0, 28.5], [0.0, 28.5]], "data02": [[0.0, 16.5, 0.0], [138.0, 16.5, 214.0], [138.0, 17.5, 214.0], [0.0, 17.5, 0.0]], "data05": [[0.0, 19.5, 0.0], [1256.0, 19.5, 268.0], [1256.0, 20.5, 268.0], [0.0, 20.5, 0.0]], "data01": [[0.0, 15.5, 0.0, 17.5, 30.5], [33.0, 15.5, 0.0, 17.5, 30.5], [33.0, 16.5, 0.0, 18.5, 31.5], [0.0, 16.5, 0.0, 18.5, 31.5]], "data09": [[0.0, 23.5, 0.0], [4154.0, 23.5, 262.0], [4154.0, 24.5, 262.0], [0.0, 24.5, 0.0]], "data06": [[0.0, 20.5, 0.0], [248.0, 20.5, 225.0], [248.0, 21.5, 225.0], [0.0, 21.5, 0.0]], "data16": [[0.0, 31.5, 0.0], [1034.0, 31.5, 238.0], [1034.0, 32.5, 238.0], [0.0, 32.5, 0.0]], "data12": [[0.0, 26.5, 0.0, 27.5], [6581.0, 26.5, 252.0, 27.5], [6581.0, 27.5, 252.0, 28.5], [0.0, 27.5, 0.0, 28.5]], "data15": [[0.0, 29.5], [717.0, 29.5], [717.0, 30.5], [0.0, 30.5]], "data07": [[0.0, 21.5, 0.0, 28.5], [1388.0, 21.5, 256.0, 28.5], [1388.0, 22.5, 256.0, 29.5], [0.0, 22.5, 0.0, 29.5]]}, "width": 640.0});
      });
    });
}else{
    // require.js not available: dynamically load d3 & mpld3
    mpld3_load_lib("https://mpld3.github.io/js/d3.v3.min.js", function(){
         mpld3_load_lib("https://mpld3.github.io/js/mpld3.v0.3.1.dev1.js", function(){
                 
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low","vals","alls"];

   /*var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");*/
    //var tooltip = d3.select("#lista");
    
    var table = d3.select("#lista");//tooltip.append('table').attr("class", "sortable");
    var table2 = d3.select("#lista2");//tooltip.append('table').attr("class", "sortable");

    
                
    function ClickInfo(fig, props){
        mpld3.Plugin.call(this, fig, props);
        
    };

    ClickInfo.prototype.draw = function(){

        var data = this.props.players;
        var wiek = this.props.wiek;
        var low = this.props.low;
        var bins = this.props.vals;
        var alls = this.props.alls;
                                          var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in alls) {
                                      licz+=1;
                                    tekst+= "<tr>";
                                    var zawodnik = alls[j];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1][0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1][1]+"</td>";
                                    
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                table2.html(tekst);

        this.props.ids.forEach(function(id, i) {
            console.log(id, i);
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  console.log("click", id,i,d);
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in wiek[i+low]) {
                                      licz+=1;
                                    tekst+= "<tr>";
                                    var zawodnik = data[wiek[i+low][j]];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1]+"</td>";
                                    tekst+= "<td>" +  zawodnik[2]+"</td>";
                                    
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                
                                if (licz > 1) {
                                tekst+="<tfoot>";
                                tekst+= "<tr>";

                                
                                tekst+= "<td> </td>";
                                
                                    tekst+= "<td>" + bins[i+low][0]+"</td>";
                                    tekst+= "<td>" +  bins[i+low][1]+"</td>";
                                    tekst+= "</tr>";
                                tekst+="</tfoot>";
                                }
                                table.html(tekst);
                              });
                              });
    }
    
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low","vals","alls"];

   /*var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");*/
    //var tooltip = d3.select("#lista");
    
    var table = d3.select("#lista");//tooltip.append('table').attr("class", "sortable");
    var table2 = d3.select("#lista2");//tooltip.append('table').attr("class", "sortable");

    
                
    function ClickInfo(fig, props){
        mpld3.Plugin.call(this, fig, props);
        
    };

    ClickInfo.prototype.draw = function(){

        var data = this.props.players;
        var wiek = this.props.wiek;
        var low = this.props.low;
        var bins = this.props.vals;
        var alls = this.props.alls;
                                          var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in alls) {
                                      licz+=1;
                                    tekst+= "<tr>";
                                    var zawodnik = alls[j];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1][0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1][1]+"</td>";
                                    
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                table2.html(tekst);

        this.props.ids.forEach(function(id, i) {
            console.log(id, i);
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  console.log("click", id,i,d);
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in wiek[i+low]) {
                                      licz+=1;
                                    tekst+= "<tr>";
                                    var zawodnik = data[wiek[i+low][j]];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1]+"</td>";
                                    tekst+= "<td>" +  zawodnik[2]+"</td>";
                                    
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                
                                if (licz > 1) {
                                tekst+="<tfoot>";
                                tekst+= "<tr>";

                                
                                tekst+= "<td> </td>";
                                
                                    tekst+= "<td>" + bins[i+low][0]+"</td>";
                                    tekst+= "<td>" +  bins[i+low][1]+"</td>";
                                    tekst+= "</tr>";
                                tekst+="</tfoot>";
                                }
                                table.html(tekst);
                              });
                              });
    }
    
                 mpld3.draw_figure("id10", {"id": "el6928140242920101480", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"wiek": {"32": [38618], "16": [926915], "17": [1064502], "19": [457331], "20": [199802], "21": [180862], "22": [218915], "23": [171737], "24": [254166, 377495, 189432], "25": [84129, 24076], "26": [259181, 25068], "27": [26165, 6675, 87917, 23275, 8449], "28": [38602, 259132, 18867], "29": [23468, 136128], "30": [38683]}, "alls": [["Batosz Rymaniak", [2877, 254]], ["Michael Gardawski", [2742, 265]], ["Jakub \u017bubrowski", [2674, 272]], ["Adnan Kovacevic", [2674, 271]], ["Elia Soriano", [2648, 258]], ["Oliver Petrak", [2443, 251]], ["Iv\u00e1n M\u00e1rquez", [2208, 255]], ["Matej Pucko", [2073, 255]], ["\u0141ukasz Kosakiewicz", [1757, 245]], ["E. Diaw", [1732, 270]], ["Ivan Jukic", [1388, 256]], ["F. Brown Forbes", [1338, 242]], ["Vato Arveladze", [1256, 268]], ["Marcin Cebula", [1229, 276]], ["Ognjen Gnjatic", [1051, 274]], ["Zlatko Janjic", [1034, 238]], ["Piotr Malarczyk", [921, 252]], ["Mateusz Mo\u017cd\u017ce\u0144", [828, 239]], ["Ken Kallaste", [717, 253]], ["Maciej Gorski", [709, 216]], ["Joonas Tamm", [371, 264]], ["Oktawian Skrzecz", [248, 225]], ["Aleksandar Bjelica", [214, 268]], ["Oskar Sewerzynski", [138, 214]], ["Piotr Pierzcha\u0142a", [94, 253]], ["Daniel Szelagowski", [33, 197]]], "vals": {"32": [1034, 238], "16": [33, 0], "17": [138, 214], "19": [94, 253], "20": [1256, 268], "21": [248, 225], "22": [1388, 256], "23": [1229, 276], "24": [4154, 262], "25": [4747, 264], "26": [3045, 271], "27": [6581, 252], "28": [5208, 252], "29": [5525, 256], "30": [717, 253]}, "type": "clickinfo", "players": {"136128": ["Elia Soriano", 2648, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 828, 239], "926915": ["Daniel Szelagowski", 33, 197], "25068": ["Joonas Tamm", 371, 264], "38602": ["Michael Gardawski", 2742, 265], "24076": ["Matej Pucko", 2073, 255], "87917": ["Ognjen Gnjatic", 1051, 274], "6675": ["F. Brown Forbes", 1338, 242], "254166": ["Iv\u00e1n M\u00e1rquez", 2208, 255], "377495": ["E. Diaw", 1732, 270], "171737": ["Marcin Cebula", 1229, 276], "38618": ["Zlatko Janjic", 1034, 238], "38683": ["Ken Kallaste", 717, 253], "457331": ["Piotr Pierzcha\u0142a", 94, 253], "84129": ["Adnan Kovacevic", 2674, 271], "218915": ["Ivan Jukic", 1388, 256], "23275": ["Piotr Malarczyk", 921, 252], "23468": ["Batosz Rymaniak", 2877, 254], "259181": ["Jakub \u017bubrowski", 2674, 272], "18867": ["Maciej Gorski", 709, 216], "26165": ["Oliver Petrak", 2443, 251], "1064502": ["Oskar Sewerzynski", 138, 214], "189432": ["Aleksandar Bjelica", 214, 268], "199802": ["Vato Arveladze", 1256, 268], "259132": ["\u0141ukasz Kosakiewicz", 1757, 245], "180862": ["Oktawian Skrzecz", 248, 225]}, "low": 16, "ids": ["el6928140242918783408", "el6928140242918782904", "el6928140242918784248", "el6928140242918813880", "el6928140242918814776", "el6928140242918815672", "el6928140242918816568", "el6928140242918817464", "el6928140242918843000", "el6928140242918843896", "el6928140242918844792", "el6928140242918845688", "el6928140242918871224", "el6928140242918872120", "el6928140242918873016", "el6928140242918873912", "el6928140242918874808"]}, {"wiek": {"32": [38618], "16": [926915], "17": [1064502], "19": [457331], "20": [199802], "21": [180862], "22": [218915], "23": [171737], "24": [254166, 377495, 189432], "25": [84129, 24076], "26": [259181, 25068], "27": [26165, 6675, 87917, 23275, 8449], "28": [38602, 259132, 18867], "29": [23468, 136128], "30": [38683]}, "alls": [["Batosz Rymaniak", [2877, 254]], ["Michael Gardawski", [2742, 265]], ["Jakub \u017bubrowski", [2674, 272]], ["Adnan Kovacevic", [2674, 271]], ["Elia Soriano", [2648, 258]], ["Oliver Petrak", [2443, 251]], ["Iv\u00e1n M\u00e1rquez", [2208, 255]], ["Matej Pucko", [2073, 255]], ["\u0141ukasz Kosakiewicz", [1757, 245]], ["E. Diaw", [1732, 270]], ["Ivan Jukic", [1388, 256]], ["F. Brown Forbes", [1338, 242]], ["Vato Arveladze", [1256, 268]], ["Marcin Cebula", [1229, 276]], ["Ognjen Gnjatic", [1051, 274]], ["Zlatko Janjic", [1034, 238]], ["Piotr Malarczyk", [921, 252]], ["Mateusz Mo\u017cd\u017ce\u0144", [828, 239]], ["Ken Kallaste", [717, 253]], ["Maciej Gorski", [709, 216]], ["Joonas Tamm", [371, 264]], ["Oktawian Skrzecz", [248, 225]], ["Aleksandar Bjelica", [214, 268]], ["Oskar Sewerzynski", [138, 214]], ["Piotr Pierzcha\u0142a", [94, 253]], ["Daniel Szelagowski", [33, 197]]], "vals": {"32": [1034, 238], "16": [33, 0], "17": [138, 214], "19": [94, 253], "20": [1256, 268], "21": [248, 225], "22": [1388, 256], "23": [1229, 276], "24": [4154, 262], "25": [4747, 264], "26": [3045, 271], "27": [6581, 252], "28": [5208, 252], "29": [5525, 256], "30": [717, 253]}, "type": "clickinfo", "players": {"136128": ["Elia Soriano", 2648, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 828, 239], "926915": ["Daniel Szelagowski", 33, 197], "25068": ["Joonas Tamm", 371, 264], "38602": ["Michael Gardawski", 2742, 265], "24076": ["Matej Pucko", 2073, 255], "87917": ["Ognjen Gnjatic", 1051, 274], "6675": ["F. Brown Forbes", 1338, 242], "254166": ["Iv\u00e1n M\u00e1rquez", 2208, 255], "377495": ["E. Diaw", 1732, 270], "171737": ["Marcin Cebula", 1229, 276], "38618": ["Zlatko Janjic", 1034, 238], "38683": ["Ken Kallaste", 717, 253], "457331": ["Piotr Pierzcha\u0142a", 94, 253], "84129": ["Adnan Kovacevic", 2674, 271], "218915": ["Ivan Jukic", 1388, 256], "23275": ["Piotr Malarczyk", 921, 252], "23468": ["Batosz Rymaniak", 2877, 254], "259181": ["Jakub \u017bubrowski", 2674, 272], "18867": ["Maciej Gorski", 709, 216], "26165": ["Oliver Petrak", 2443, 251], "1064502": ["Oskar Sewerzynski", 138, 214], "189432": ["Aleksandar Bjelica", 214, 268], "199802": ["Vato Arveladze", 1256, 268], "259132": ["\u0141ukasz Kosakiewicz", 1757, 245], "180862": ["Oktawian Skrzecz", 248, 225]}, "low": 16, "ids": ["el6928140242918893272", "el6928140242918783072", "el6928140242918894000", "el6928140242918894896", "el6928140242918912240", "el6928140242918913136", "el6928140242918914032", "el6928140242918914928", "el6928140242918915824", "el6928140242918412976", "el6928140242918413872", "el6928140242918414768", "el6928140242918415664", "el6928140242918433008", "el6928140242918433904", "el6928140242918434800", "el6928140242918435696"]}], "axes": [{"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": null, "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 6}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "fontsize": 10.0, "position": "left", "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "nticks": 17}], "images": [], "markers": [], "id": "el6928140242919055488", "zoomable": true, "sharey": ["el6928140242919087408"], "yscale": "linear", "texts": [{"id": "el6928140242919057952", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Minuty", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [8218.0, 33.0], "xscale": "linear", "ydomain": [14.65, 33.35], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axesbg": "#FFFFFF", "ylim": [14.65, 33.35], "paths": [{"id": "el6928140242918783408", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918782904", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918784248", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918813880", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918814776", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918815672", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918816568", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918817464", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918843000", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918843896", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918844792", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918845688", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918871224", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918872120", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918873016", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918873912", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918874808", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data16", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [8218.0, 33.0], "sharex": []}, {"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": [214, 229, 244, 259, 276], "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 5}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "fontsize": null, "position": "right", "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "nticks": 17}], "images": [], "markers": [], "id": "el6928140242919087408", "zoomable": true, "sharey": ["el6928140242919055488"], "yscale": "linear", "texts": [{"id": "el6928140242919375928", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Instat index", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [204.0, 286.0], "xscale": "linear", "ydomain": [14.65, 33.35], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axesbg": "#FFFFFF", "ylim": [14.65, 33.35], "paths": [{"id": "el6928140242918893272", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918783072", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918894000", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918894896", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918912240", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918913136", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918914032", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918914928", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918915824", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918412976", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918413872", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918414768", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918415664", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918433008", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918433904", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918434800", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 4, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918435696", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data16", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [204.0, 286.0], "sharex": []}], "height": 480.0, "data": {"data11": [[0.0, 25.5, 0.0], [3045.0, 25.5, 271.0], [3045.0, 26.5, 271.0], [0.0, 26.5, 0.0]], "data04": [[0.0, 18.5, 0.0, 29.5], [94.0, 18.5, 253.0, 29.5], [94.0, 19.5, 253.0, 30.5], [0.0, 19.5, 0.0, 30.5]], "data14": [[0.0, 28.5], [5525.0, 28.5], [5525.0, 29.5], [0.0, 29.5]], "data08": [[0.0, 22.5, 0.0], [1229.0, 22.5, 276.0], [1229.0, 23.5, 276.0], [0.0, 23.5, 0.0]], "data03": [[0.0, 17.5, 30.5], [0.0, 17.5, 30.5], [0.0, 18.5, 31.5], [0.0, 18.5, 31.5]], "data10": [[0.0, 24.5, 0.0], [4747.0, 24.5, 264.0], [4747.0, 25.5, 264.0], [0.0, 25.5, 0.0]], "data13": [[0.0, 27.5], [5208.0, 27.5], [5208.0, 28.5], [0.0, 28.5]], "data02": [[0.0, 16.5, 0.0], [138.0, 16.5, 214.0], [138.0, 17.5, 214.0], [0.0, 17.5, 0.0]], "data05": [[0.0, 19.5, 0.0], [1256.0, 19.5, 268.0], [1256.0, 20.5, 268.0], [0.0, 20.5, 0.0]], "data01": [[0.0, 15.5, 0.0, 17.5, 30.5], [33.0, 15.5, 0.0, 17.5, 30.5], [33.0, 16.5, 0.0, 18.5, 31.5], [0.0, 16.5, 0.0, 18.5, 31.5]], "data09": [[0.0, 23.5, 0.0], [4154.0, 23.5, 262.0], [4154.0, 24.5, 262.0], [0.0, 24.5, 0.0]], "data06": [[0.0, 20.5, 0.0], [248.0, 20.5, 225.0], [248.0, 21.5, 225.0], [0.0, 21.5, 0.0]], "data16": [[0.0, 31.5, 0.0], [1034.0, 31.5, 238.0], [1034.0, 32.5, 238.0], [0.0, 32.5, 0.0]], "data12": [[0.0, 26.5, 0.0, 27.5], [6581.0, 26.5, 252.0, 27.5], [6581.0, 27.5, 252.0, 28.5], [0.0, 27.5, 0.0, 28.5]], "data15": [[0.0, 29.5], [717.0, 29.5], [717.0, 30.5], [0.0, 30.5]], "data07": [[0.0, 21.5, 0.0, 28.5], [1388.0, 21.5, 256.0, 28.5], [1388.0, 22.5, 256.0, 29.5], [0.0, 22.5, 0.0, 29.5]]}, "width": 640.0});
            })
         });
}
</script>
