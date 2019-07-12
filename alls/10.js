

 

 


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
    table.append('thead');
    var tbody = d3.select("tbody");

    
                
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
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
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
    table.append('thead');
    var tbody = d3.select("tbody");

    
                
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
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
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
    
       mpld3.draw_figure("id10", {"width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "button": true, "type": "zoom"}, {"enabled": false, "button": true, "type": "boxzoom"}, {"alls": [["Batosz Rymaniak", [2877, 254]], ["Michael Gardawski", [2742, 265]], ["Jakub \u017bubrowski", [2674, 272]], ["Adnan Kovacevic", [2674, 271]], ["Elia Soriano", [2648, 258]], ["Oliver Petrak", [2443, 251]], ["Iv\u00e1n M\u00e1rquez", [2208, 255]], ["Matej Pucko", [2073, 255]], ["\u0141ukasz Kosakiewicz", [1757, 245]], ["E. Diaw", [1732, 270]], ["Ivan Jukic", [1388, 256]], ["F. Brown Forbes", [1338, 242]], ["Vato Arveladze", [1256, 268]], ["Marcin Cebula", [1229, 276]], ["Ognjen Gnjatic", [1051, 274]], ["Zlatko Janjic", [1034, 238]], ["Piotr Malarczyk", [921, 252]], ["Mateusz Mo\u017cd\u017ce\u0144", [828, 239]], ["Ken Kallaste", [717, 253]], ["Maciej Gorski", [709, 216]], ["Joonas Tamm", [371, 264]], ["Oktawian Skrzecz", [248, 225]], ["Aleksandar Bjelica", [214, 268]], ["Oskar Sewerzynski", [138, 214]], ["Piotr Pierzcha\u0142a", [94, 253]], ["Daniel Szelagowski", [33, 197]]], "players": {"136128": ["Elia Soriano", 2648, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 828, 239], "926915": ["Daniel Szelagowski", 33, 197], "25068": ["Joonas Tamm", 371, 264], "38602": ["Michael Gardawski", 2742, 265], "24076": ["Matej Pucko", 2073, 255], "87917": ["Ognjen Gnjatic", 1051, 274], "6675": ["F. Brown Forbes", 1338, 242], "254166": ["Iv\u00e1n M\u00e1rquez", 2208, 255], "377495": ["E. Diaw", 1732, 270], "171737": ["Marcin Cebula", 1229, 276], "38618": ["Zlatko Janjic", 1034, 238], "38683": ["Ken Kallaste", 717, 253], "457331": ["Piotr Pierzcha\u0142a", 94, 253], "84129": ["Adnan Kovacevic", 2674, 271], "218915": ["Ivan Jukic", 1388, 256], "23275": ["Piotr Malarczyk", 921, 252], "23468": ["Batosz Rymaniak", 2877, 254], "259181": ["Jakub \u017bubrowski", 2674, 272], "18867": ["Maciej Gorski", 709, 216], "26165": ["Oliver Petrak", 2443, 251], "1064502": ["Oskar Sewerzynski", 138, 214], "189432": ["Aleksandar Bjelica", 214, 268], "199802": ["Vato Arveladze", 1256, 268], "259132": ["\u0141ukasz Kosakiewicz", 1757, 245], "180862": ["Oktawian Skrzecz", 248, 225]}, "wiek": {"32": [38618], "16": [926915], "17": [1064502], "19": [457331], "20": [199802], "21": [180862], "22": [218915], "23": [171737], "24": [254166, 377495, 189432], "25": [84129, 24076], "26": [259181, 25068], "27": [26165, 6675, 87917, 23275, 8449], "28": [38602, 259132, 18867], "29": [23468, 136128], "30": [38683]}, "ids": ["el10757139727014165696", "el10757139727014165192", "el10757139727014166480", "el10757139727014192016", "el10757139727014192912", "el10757139727014193808", "el10757139727014194704", "el10757139727014220240", "el10757139727014221136", "el10757139727014222032", "el10757139727014222928", "el10757139727014223824", "el10757139727014241168", "el10757139727014242064", "el10757139727014242960", "el10757139727014243856", "el10757139727014265296"], "type": "clickinfo", "vals": {"32": [1034, 238], "16": [33, 0], "17": [138, 214], "19": [94, 253], "20": [1256, 268], "21": [248, 225], "22": [1388, 256], "23": [1229, 276], "24": [4154, 262], "25": [4747, 264], "26": [3045, 271], "27": [6581, 252], "28": [5208, 252], "29": [5525, 256], "30": [717, 253]}, "low": 16}, {"alls": [["Batosz Rymaniak", [2877, 254]], ["Michael Gardawski", [2742, 265]], ["Jakub \u017bubrowski", [2674, 272]], ["Adnan Kovacevic", [2674, 271]], ["Elia Soriano", [2648, 258]], ["Oliver Petrak", [2443, 251]], ["Iv\u00e1n M\u00e1rquez", [2208, 255]], ["Matej Pucko", [2073, 255]], ["\u0141ukasz Kosakiewicz", [1757, 245]], ["E. Diaw", [1732, 270]], ["Ivan Jukic", [1388, 256]], ["F. Brown Forbes", [1338, 242]], ["Vato Arveladze", [1256, 268]], ["Marcin Cebula", [1229, 276]], ["Ognjen Gnjatic", [1051, 274]], ["Zlatko Janjic", [1034, 238]], ["Piotr Malarczyk", [921, 252]], ["Mateusz Mo\u017cd\u017ce\u0144", [828, 239]], ["Ken Kallaste", [717, 253]], ["Maciej Gorski", [709, 216]], ["Joonas Tamm", [371, 264]], ["Oktawian Skrzecz", [248, 225]], ["Aleksandar Bjelica", [214, 268]], ["Oskar Sewerzynski", [138, 214]], ["Piotr Pierzcha\u0142a", [94, 253]], ["Daniel Szelagowski", [33, 197]]], "players": {"136128": ["Elia Soriano", 2648, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 828, 239], "926915": ["Daniel Szelagowski", 33, 197], "25068": ["Joonas Tamm", 371, 264], "38602": ["Michael Gardawski", 2742, 265], "24076": ["Matej Pucko", 2073, 255], "87917": ["Ognjen Gnjatic", 1051, 274], "6675": ["F. Brown Forbes", 1338, 242], "254166": ["Iv\u00e1n M\u00e1rquez", 2208, 255], "377495": ["E. Diaw", 1732, 270], "171737": ["Marcin Cebula", 1229, 276], "38618": ["Zlatko Janjic", 1034, 238], "38683": ["Ken Kallaste", 717, 253], "457331": ["Piotr Pierzcha\u0142a", 94, 253], "84129": ["Adnan Kovacevic", 2674, 271], "218915": ["Ivan Jukic", 1388, 256], "23275": ["Piotr Malarczyk", 921, 252], "23468": ["Batosz Rymaniak", 2877, 254], "259181": ["Jakub \u017bubrowski", 2674, 272], "18867": ["Maciej Gorski", 709, 216], "26165": ["Oliver Petrak", 2443, 251], "1064502": ["Oskar Sewerzynski", 138, 214], "189432": ["Aleksandar Bjelica", 214, 268], "199802": ["Vato Arveladze", 1256, 268], "259132": ["\u0141ukasz Kosakiewicz", 1757, 245], "180862": ["Oktawian Skrzecz", 248, 225]}, "wiek": {"32": [38618], "16": [926915], "17": [1064502], "19": [457331], "20": [199802], "21": [180862], "22": [218915], "23": [171737], "24": [254166, 377495, 189432], "25": [84129, 24076], "26": [259181, 25068], "27": [26165, 6675, 87917, 23275, 8449], "28": [38602, 259132, 18867], "29": [23468, 136128], "30": [38683]}, "ids": ["el10757139727014267368", "el10757139727014165360", "el10757139727014268040", "el10757139727014268880", "el10757139727014290376", "el10757139727014291272", "el10757139727014292168", "el10757139727014293064", "el10757139727014314504", "el10757139727014315400", "el10757139727014316296", "el10757139727014317192", "el10757139727014318032", "el10757139727013819336", "el10757139727013820232", "el10757139727013821128", "el10757139727013822024"], "type": "clickinfo", "vals": {"32": [1034, 238], "16": [33, 0], "17": [138, 214], "19": [94, 253], "20": [1256, 268], "21": [248, 225], "22": [1388, 256], "23": [1229, 276], "24": [4154, 262], "25": [4747, 264], "26": [3045, 271], "27": [6581, 252], "28": [5208, 252], "29": [5525, 256], "30": [717, 253]}, "low": 16}], "height": 480.0, "id": "el10757139727015517208", "data": {"data02": [[0.0, 16.5, 0.0], [138.0, 16.5, 214.0], [138.0, 17.5, 214.0], [0.0, 17.5, 0.0]], "data01": [[0.0, 15.5, 0.0, 17.5, 30.5], [33.0, 15.5, 0.0, 17.5, 30.5], [33.0, 16.5, 0.0, 18.5, 31.5], [0.0, 16.5, 0.0, 18.5, 31.5]], "data03": [[0.0, 17.5, 30.5], [0.0, 17.5, 30.5], [0.0, 18.5, 31.5], [0.0, 18.5, 31.5]], "data07": [[0.0, 21.5, 0.0, 28.5], [1388.0, 21.5, 256.0, 28.5], [1388.0, 22.5, 256.0, 29.5], [0.0, 22.5, 0.0, 29.5]], "data13": [[0.0, 27.5], [5208.0, 27.5], [5208.0, 28.5], [0.0, 28.5]], "data09": [[0.0, 23.5, 0.0], [4154.0, 23.5, 262.0], [4154.0, 24.5, 262.0], [0.0, 24.5, 0.0]], "data12": [[0.0, 26.5, 0.0, 27.5], [6581.0, 26.5, 252.0, 27.5], [6581.0, 27.5, 252.0, 28.5], [0.0, 27.5, 0.0, 28.5]], "data08": [[0.0, 22.5, 0.0], [1229.0, 22.5, 276.0], [1229.0, 23.5, 276.0], [0.0, 23.5, 0.0]], "data14": [[0.0, 28.5], [5525.0, 28.5], [5525.0, 29.5], [0.0, 29.5]], "data05": [[0.0, 19.5, 0.0], [1256.0, 19.5, 268.0], [1256.0, 20.5, 268.0], [0.0, 20.5, 0.0]], "data06": [[0.0, 20.5, 0.0], [248.0, 20.5, 225.0], [248.0, 21.5, 225.0], [0.0, 21.5, 0.0]], "data04": [[0.0, 18.5, 0.0, 29.5], [94.0, 18.5, 253.0, 29.5], [94.0, 19.5, 253.0, 30.5], [0.0, 19.5, 0.0, 30.5]], "data11": [[0.0, 25.5, 0.0], [3045.0, 25.5, 271.0], [3045.0, 26.5, 271.0], [0.0, 26.5, 0.0]], "data10": [[0.0, 24.5, 0.0], [4747.0, 24.5, 264.0], [4747.0, 25.5, 264.0], [0.0, 25.5, 0.0]], "data15": [[0.0, 29.5], [717.0, 29.5], [717.0, 30.5], [0.0, 30.5]], "data16": [[0.0, 31.5, 0.0], [1034.0, 31.5, 238.0], [1034.0, 32.5, 238.0], [0.0, 32.5, 0.0]]}, "axes": [{"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Minuty", "color": "#000000", "id": "el10757139727014439064", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [8218.0, 33.0], "ydomain": [14.65, 33.35], "sharex": [], "xlim": [8218.0, 33.0], "images": [], "sharey": ["el10757139727014522160"], "axes": [{"nticks": 6, "fontsize": 10.0, "tickvalues": null, "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 17, "fontsize": 10.0, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "visible": true, "grid": {"gridOn": false}, "position": "left", "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727014353776", "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "ylim": [14.65, 33.35], "paths": [{"xindex": 0, "id": "el10757139727014165696", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 0, "id": "el10757139727014165192", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 0, "id": "el10757139727014166480", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 0, "id": "el10757139727014192016", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 0, "id": "el10757139727014192912", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 0, "id": "el10757139727014193808", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 0, "id": "el10757139727014194704", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 0, "id": "el10757139727014220240", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 0, "id": "el10757139727014221136", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 0, "id": "el10757139727014222032", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data10"}, {"xindex": 0, "id": "el10757139727014222928", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 0, "id": "el10757139727014223824", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 0, "id": "el10757139727014241168", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data13"}, {"xindex": 0, "id": "el10757139727014242064", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data14"}, {"xindex": 0, "id": "el10757139727014242960", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data15"}, {"xindex": 0, "id": "el10757139727014243856", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 2, "data": "data03"}, {"xindex": 0, "id": "el10757139727014265296", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data16"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}, {"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Instat index", "color": "#000000", "id": "el10757139727014815448", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [204.0, 286.0], "ydomain": [14.65, 33.35], "sharex": [], "xlim": [204.0, 286.0], "images": [], "sharey": ["el10757139727014353776"], "axes": [{"nticks": 5, "fontsize": 10.0, "tickvalues": [214, 229, 244, 259, 276], "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 17, "fontsize": null, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "visible": true, "grid": {"gridOn": false}, "position": "right", "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727014522160", "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "ylim": [14.65, 33.35], "paths": [{"xindex": 2, "id": "el10757139727014267368", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 2, "id": "el10757139727014165360", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 2, "id": "el10757139727014268040", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data01"}, {"xindex": 2, "id": "el10757139727014268880", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 2, "id": "el10757139727014290376", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 2, "id": "el10757139727014291272", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 2, "id": "el10757139727014292168", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 2, "id": "el10757139727014293064", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 2, "id": "el10757139727014314504", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 2, "id": "el10757139727014315400", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data10"}, {"xindex": 2, "id": "el10757139727014316296", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 2, "id": "el10757139727014317192", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 2, "id": "el10757139727014318032", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data12"}, {"xindex": 2, "id": "el10757139727013819336", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data07"}, {"xindex": 2, "id": "el10757139727013820232", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data04"}, {"xindex": 2, "id": "el10757139727013821128", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 4, "data": "data01"}, {"xindex": 2, "id": "el10757139727013822024", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data16"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}]});
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
    table.append('thead');
    var tbody = d3.select("tbody");

    
                
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
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
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
    table.append('thead');
    var tbody = d3.select("tbody");

    
                
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
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
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
    
         mpld3.draw_figure("id10", {"width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "button": true, "type": "zoom"}, {"enabled": false, "button": true, "type": "boxzoom"}, {"alls": [["Batosz Rymaniak", [2877, 254]], ["Michael Gardawski", [2742, 265]], ["Jakub \u017bubrowski", [2674, 272]], ["Adnan Kovacevic", [2674, 271]], ["Elia Soriano", [2648, 258]], ["Oliver Petrak", [2443, 251]], ["Iv\u00e1n M\u00e1rquez", [2208, 255]], ["Matej Pucko", [2073, 255]], ["\u0141ukasz Kosakiewicz", [1757, 245]], ["E. Diaw", [1732, 270]], ["Ivan Jukic", [1388, 256]], ["F. Brown Forbes", [1338, 242]], ["Vato Arveladze", [1256, 268]], ["Marcin Cebula", [1229, 276]], ["Ognjen Gnjatic", [1051, 274]], ["Zlatko Janjic", [1034, 238]], ["Piotr Malarczyk", [921, 252]], ["Mateusz Mo\u017cd\u017ce\u0144", [828, 239]], ["Ken Kallaste", [717, 253]], ["Maciej Gorski", [709, 216]], ["Joonas Tamm", [371, 264]], ["Oktawian Skrzecz", [248, 225]], ["Aleksandar Bjelica", [214, 268]], ["Oskar Sewerzynski", [138, 214]], ["Piotr Pierzcha\u0142a", [94, 253]], ["Daniel Szelagowski", [33, 197]]], "players": {"136128": ["Elia Soriano", 2648, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 828, 239], "926915": ["Daniel Szelagowski", 33, 197], "25068": ["Joonas Tamm", 371, 264], "38602": ["Michael Gardawski", 2742, 265], "24076": ["Matej Pucko", 2073, 255], "87917": ["Ognjen Gnjatic", 1051, 274], "6675": ["F. Brown Forbes", 1338, 242], "254166": ["Iv\u00e1n M\u00e1rquez", 2208, 255], "377495": ["E. Diaw", 1732, 270], "171737": ["Marcin Cebula", 1229, 276], "38618": ["Zlatko Janjic", 1034, 238], "38683": ["Ken Kallaste", 717, 253], "457331": ["Piotr Pierzcha\u0142a", 94, 253], "84129": ["Adnan Kovacevic", 2674, 271], "218915": ["Ivan Jukic", 1388, 256], "23275": ["Piotr Malarczyk", 921, 252], "23468": ["Batosz Rymaniak", 2877, 254], "259181": ["Jakub \u017bubrowski", 2674, 272], "18867": ["Maciej Gorski", 709, 216], "26165": ["Oliver Petrak", 2443, 251], "1064502": ["Oskar Sewerzynski", 138, 214], "189432": ["Aleksandar Bjelica", 214, 268], "199802": ["Vato Arveladze", 1256, 268], "259132": ["\u0141ukasz Kosakiewicz", 1757, 245], "180862": ["Oktawian Skrzecz", 248, 225]}, "wiek": {"32": [38618], "16": [926915], "17": [1064502], "19": [457331], "20": [199802], "21": [180862], "22": [218915], "23": [171737], "24": [254166, 377495, 189432], "25": [84129, 24076], "26": [259181, 25068], "27": [26165, 6675, 87917, 23275, 8449], "28": [38602, 259132, 18867], "29": [23468, 136128], "30": [38683]}, "ids": ["el10757139727014165696", "el10757139727014165192", "el10757139727014166480", "el10757139727014192016", "el10757139727014192912", "el10757139727014193808", "el10757139727014194704", "el10757139727014220240", "el10757139727014221136", "el10757139727014222032", "el10757139727014222928", "el10757139727014223824", "el10757139727014241168", "el10757139727014242064", "el10757139727014242960", "el10757139727014243856", "el10757139727014265296"], "type": "clickinfo", "vals": {"32": [1034, 238], "16": [33, 0], "17": [138, 214], "19": [94, 253], "20": [1256, 268], "21": [248, 225], "22": [1388, 256], "23": [1229, 276], "24": [4154, 262], "25": [4747, 264], "26": [3045, 271], "27": [6581, 252], "28": [5208, 252], "29": [5525, 256], "30": [717, 253]}, "low": 16}, {"alls": [["Batosz Rymaniak", [2877, 254]], ["Michael Gardawski", [2742, 265]], ["Jakub \u017bubrowski", [2674, 272]], ["Adnan Kovacevic", [2674, 271]], ["Elia Soriano", [2648, 258]], ["Oliver Petrak", [2443, 251]], ["Iv\u00e1n M\u00e1rquez", [2208, 255]], ["Matej Pucko", [2073, 255]], ["\u0141ukasz Kosakiewicz", [1757, 245]], ["E. Diaw", [1732, 270]], ["Ivan Jukic", [1388, 256]], ["F. Brown Forbes", [1338, 242]], ["Vato Arveladze", [1256, 268]], ["Marcin Cebula", [1229, 276]], ["Ognjen Gnjatic", [1051, 274]], ["Zlatko Janjic", [1034, 238]], ["Piotr Malarczyk", [921, 252]], ["Mateusz Mo\u017cd\u017ce\u0144", [828, 239]], ["Ken Kallaste", [717, 253]], ["Maciej Gorski", [709, 216]], ["Joonas Tamm", [371, 264]], ["Oktawian Skrzecz", [248, 225]], ["Aleksandar Bjelica", [214, 268]], ["Oskar Sewerzynski", [138, 214]], ["Piotr Pierzcha\u0142a", [94, 253]], ["Daniel Szelagowski", [33, 197]]], "players": {"136128": ["Elia Soriano", 2648, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 828, 239], "926915": ["Daniel Szelagowski", 33, 197], "25068": ["Joonas Tamm", 371, 264], "38602": ["Michael Gardawski", 2742, 265], "24076": ["Matej Pucko", 2073, 255], "87917": ["Ognjen Gnjatic", 1051, 274], "6675": ["F. Brown Forbes", 1338, 242], "254166": ["Iv\u00e1n M\u00e1rquez", 2208, 255], "377495": ["E. Diaw", 1732, 270], "171737": ["Marcin Cebula", 1229, 276], "38618": ["Zlatko Janjic", 1034, 238], "38683": ["Ken Kallaste", 717, 253], "457331": ["Piotr Pierzcha\u0142a", 94, 253], "84129": ["Adnan Kovacevic", 2674, 271], "218915": ["Ivan Jukic", 1388, 256], "23275": ["Piotr Malarczyk", 921, 252], "23468": ["Batosz Rymaniak", 2877, 254], "259181": ["Jakub \u017bubrowski", 2674, 272], "18867": ["Maciej Gorski", 709, 216], "26165": ["Oliver Petrak", 2443, 251], "1064502": ["Oskar Sewerzynski", 138, 214], "189432": ["Aleksandar Bjelica", 214, 268], "199802": ["Vato Arveladze", 1256, 268], "259132": ["\u0141ukasz Kosakiewicz", 1757, 245], "180862": ["Oktawian Skrzecz", 248, 225]}, "wiek": {"32": [38618], "16": [926915], "17": [1064502], "19": [457331], "20": [199802], "21": [180862], "22": [218915], "23": [171737], "24": [254166, 377495, 189432], "25": [84129, 24076], "26": [259181, 25068], "27": [26165, 6675, 87917, 23275, 8449], "28": [38602, 259132, 18867], "29": [23468, 136128], "30": [38683]}, "ids": ["el10757139727014267368", "el10757139727014165360", "el10757139727014268040", "el10757139727014268880", "el10757139727014290376", "el10757139727014291272", "el10757139727014292168", "el10757139727014293064", "el10757139727014314504", "el10757139727014315400", "el10757139727014316296", "el10757139727014317192", "el10757139727014318032", "el10757139727013819336", "el10757139727013820232", "el10757139727013821128", "el10757139727013822024"], "type": "clickinfo", "vals": {"32": [1034, 238], "16": [33, 0], "17": [138, 214], "19": [94, 253], "20": [1256, 268], "21": [248, 225], "22": [1388, 256], "23": [1229, 276], "24": [4154, 262], "25": [4747, 264], "26": [3045, 271], "27": [6581, 252], "28": [5208, 252], "29": [5525, 256], "30": [717, 253]}, "low": 16}], "height": 480.0, "id": "el10757139727015517208", "data": {"data02": [[0.0, 16.5, 0.0], [138.0, 16.5, 214.0], [138.0, 17.5, 214.0], [0.0, 17.5, 0.0]], "data01": [[0.0, 15.5, 0.0, 17.5, 30.5], [33.0, 15.5, 0.0, 17.5, 30.5], [33.0, 16.5, 0.0, 18.5, 31.5], [0.0, 16.5, 0.0, 18.5, 31.5]], "data03": [[0.0, 17.5, 30.5], [0.0, 17.5, 30.5], [0.0, 18.5, 31.5], [0.0, 18.5, 31.5]], "data07": [[0.0, 21.5, 0.0, 28.5], [1388.0, 21.5, 256.0, 28.5], [1388.0, 22.5, 256.0, 29.5], [0.0, 22.5, 0.0, 29.5]], "data13": [[0.0, 27.5], [5208.0, 27.5], [5208.0, 28.5], [0.0, 28.5]], "data09": [[0.0, 23.5, 0.0], [4154.0, 23.5, 262.0], [4154.0, 24.5, 262.0], [0.0, 24.5, 0.0]], "data12": [[0.0, 26.5, 0.0, 27.5], [6581.0, 26.5, 252.0, 27.5], [6581.0, 27.5, 252.0, 28.5], [0.0, 27.5, 0.0, 28.5]], "data08": [[0.0, 22.5, 0.0], [1229.0, 22.5, 276.0], [1229.0, 23.5, 276.0], [0.0, 23.5, 0.0]], "data14": [[0.0, 28.5], [5525.0, 28.5], [5525.0, 29.5], [0.0, 29.5]], "data05": [[0.0, 19.5, 0.0], [1256.0, 19.5, 268.0], [1256.0, 20.5, 268.0], [0.0, 20.5, 0.0]], "data06": [[0.0, 20.5, 0.0], [248.0, 20.5, 225.0], [248.0, 21.5, 225.0], [0.0, 21.5, 0.0]], "data04": [[0.0, 18.5, 0.0, 29.5], [94.0, 18.5, 253.0, 29.5], [94.0, 19.5, 253.0, 30.5], [0.0, 19.5, 0.0, 30.5]], "data11": [[0.0, 25.5, 0.0], [3045.0, 25.5, 271.0], [3045.0, 26.5, 271.0], [0.0, 26.5, 0.0]], "data10": [[0.0, 24.5, 0.0], [4747.0, 24.5, 264.0], [4747.0, 25.5, 264.0], [0.0, 25.5, 0.0]], "data15": [[0.0, 29.5], [717.0, 29.5], [717.0, 30.5], [0.0, 30.5]], "data16": [[0.0, 31.5, 0.0], [1034.0, 31.5, 238.0], [1034.0, 32.5, 238.0], [0.0, 32.5, 0.0]]}, "axes": [{"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Minuty", "color": "#000000", "id": "el10757139727014439064", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [8218.0, 33.0], "ydomain": [14.65, 33.35], "sharex": [], "xlim": [8218.0, 33.0], "images": [], "sharey": ["el10757139727014522160"], "axes": [{"nticks": 6, "fontsize": 10.0, "tickvalues": null, "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 17, "fontsize": 10.0, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "visible": true, "grid": {"gridOn": false}, "position": "left", "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727014353776", "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "ylim": [14.65, 33.35], "paths": [{"xindex": 0, "id": "el10757139727014165696", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 0, "id": "el10757139727014165192", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 0, "id": "el10757139727014166480", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 0, "id": "el10757139727014192016", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 0, "id": "el10757139727014192912", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 0, "id": "el10757139727014193808", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 0, "id": "el10757139727014194704", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 0, "id": "el10757139727014220240", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 0, "id": "el10757139727014221136", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 0, "id": "el10757139727014222032", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data10"}, {"xindex": 0, "id": "el10757139727014222928", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 0, "id": "el10757139727014223824", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 0, "id": "el10757139727014241168", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data13"}, {"xindex": 0, "id": "el10757139727014242064", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data14"}, {"xindex": 0, "id": "el10757139727014242960", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data15"}, {"xindex": 0, "id": "el10757139727014243856", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 2, "data": "data03"}, {"xindex": 0, "id": "el10757139727014265296", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data16"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}, {"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Instat index", "color": "#000000", "id": "el10757139727014815448", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [204.0, 286.0], "ydomain": [14.65, 33.35], "sharex": [], "xlim": [204.0, 286.0], "images": [], "sharey": ["el10757139727014353776"], "axes": [{"nticks": 5, "fontsize": 10.0, "tickvalues": [214, 229, 244, 259, 276], "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 17, "fontsize": null, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "visible": true, "grid": {"gridOn": false}, "position": "right", "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727014522160", "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "ylim": [14.65, 33.35], "paths": [{"xindex": 2, "id": "el10757139727014267368", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 2, "id": "el10757139727014165360", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 2, "id": "el10757139727014268040", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data01"}, {"xindex": 2, "id": "el10757139727014268880", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 2, "id": "el10757139727014290376", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 2, "id": "el10757139727014291272", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 2, "id": "el10757139727014292168", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 2, "id": "el10757139727014293064", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 2, "id": "el10757139727014314504", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 2, "id": "el10757139727014315400", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data10"}, {"xindex": 2, "id": "el10757139727014316296", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 2, "id": "el10757139727014317192", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 2, "id": "el10757139727014318032", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data12"}, {"xindex": 2, "id": "el10757139727013819336", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data07"}, {"xindex": 2, "id": "el10757139727013820232", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data04"}, {"xindex": 2, "id": "el10757139727013821128", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 4, "data": "data01"}, {"xindex": 2, "id": "el10757139727013822024", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data16"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}]});
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
    table.append('thead');
    var tbody = d3.select("tbody");

    
                
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
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
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
    table.append('thead');
    var tbody = d3.select("tbody");

    
                
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
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
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
    
                 mpld3.draw_figure("id10", {"width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "button": true, "type": "zoom"}, {"enabled": false, "button": true, "type": "boxzoom"}, {"alls": [["Batosz Rymaniak", [2877, 254]], ["Michael Gardawski", [2742, 265]], ["Jakub \u017bubrowski", [2674, 272]], ["Adnan Kovacevic", [2674, 271]], ["Elia Soriano", [2648, 258]], ["Oliver Petrak", [2443, 251]], ["Iv\u00e1n M\u00e1rquez", [2208, 255]], ["Matej Pucko", [2073, 255]], ["\u0141ukasz Kosakiewicz", [1757, 245]], ["E. Diaw", [1732, 270]], ["Ivan Jukic", [1388, 256]], ["F. Brown Forbes", [1338, 242]], ["Vato Arveladze", [1256, 268]], ["Marcin Cebula", [1229, 276]], ["Ognjen Gnjatic", [1051, 274]], ["Zlatko Janjic", [1034, 238]], ["Piotr Malarczyk", [921, 252]], ["Mateusz Mo\u017cd\u017ce\u0144", [828, 239]], ["Ken Kallaste", [717, 253]], ["Maciej Gorski", [709, 216]], ["Joonas Tamm", [371, 264]], ["Oktawian Skrzecz", [248, 225]], ["Aleksandar Bjelica", [214, 268]], ["Oskar Sewerzynski", [138, 214]], ["Piotr Pierzcha\u0142a", [94, 253]], ["Daniel Szelagowski", [33, 197]]], "players": {"136128": ["Elia Soriano", 2648, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 828, 239], "926915": ["Daniel Szelagowski", 33, 197], "25068": ["Joonas Tamm", 371, 264], "38602": ["Michael Gardawski", 2742, 265], "24076": ["Matej Pucko", 2073, 255], "87917": ["Ognjen Gnjatic", 1051, 274], "6675": ["F. Brown Forbes", 1338, 242], "254166": ["Iv\u00e1n M\u00e1rquez", 2208, 255], "377495": ["E. Diaw", 1732, 270], "171737": ["Marcin Cebula", 1229, 276], "38618": ["Zlatko Janjic", 1034, 238], "38683": ["Ken Kallaste", 717, 253], "457331": ["Piotr Pierzcha\u0142a", 94, 253], "84129": ["Adnan Kovacevic", 2674, 271], "218915": ["Ivan Jukic", 1388, 256], "23275": ["Piotr Malarczyk", 921, 252], "23468": ["Batosz Rymaniak", 2877, 254], "259181": ["Jakub \u017bubrowski", 2674, 272], "18867": ["Maciej Gorski", 709, 216], "26165": ["Oliver Petrak", 2443, 251], "1064502": ["Oskar Sewerzynski", 138, 214], "189432": ["Aleksandar Bjelica", 214, 268], "199802": ["Vato Arveladze", 1256, 268], "259132": ["\u0141ukasz Kosakiewicz", 1757, 245], "180862": ["Oktawian Skrzecz", 248, 225]}, "wiek": {"32": [38618], "16": [926915], "17": [1064502], "19": [457331], "20": [199802], "21": [180862], "22": [218915], "23": [171737], "24": [254166, 377495, 189432], "25": [84129, 24076], "26": [259181, 25068], "27": [26165, 6675, 87917, 23275, 8449], "28": [38602, 259132, 18867], "29": [23468, 136128], "30": [38683]}, "ids": ["el10757139727014165696", "el10757139727014165192", "el10757139727014166480", "el10757139727014192016", "el10757139727014192912", "el10757139727014193808", "el10757139727014194704", "el10757139727014220240", "el10757139727014221136", "el10757139727014222032", "el10757139727014222928", "el10757139727014223824", "el10757139727014241168", "el10757139727014242064", "el10757139727014242960", "el10757139727014243856", "el10757139727014265296"], "type": "clickinfo", "vals": {"32": [1034, 238], "16": [33, 0], "17": [138, 214], "19": [94, 253], "20": [1256, 268], "21": [248, 225], "22": [1388, 256], "23": [1229, 276], "24": [4154, 262], "25": [4747, 264], "26": [3045, 271], "27": [6581, 252], "28": [5208, 252], "29": [5525, 256], "30": [717, 253]}, "low": 16}, {"alls": [["Batosz Rymaniak", [2877, 254]], ["Michael Gardawski", [2742, 265]], ["Jakub \u017bubrowski", [2674, 272]], ["Adnan Kovacevic", [2674, 271]], ["Elia Soriano", [2648, 258]], ["Oliver Petrak", [2443, 251]], ["Iv\u00e1n M\u00e1rquez", [2208, 255]], ["Matej Pucko", [2073, 255]], ["\u0141ukasz Kosakiewicz", [1757, 245]], ["E. Diaw", [1732, 270]], ["Ivan Jukic", [1388, 256]], ["F. Brown Forbes", [1338, 242]], ["Vato Arveladze", [1256, 268]], ["Marcin Cebula", [1229, 276]], ["Ognjen Gnjatic", [1051, 274]], ["Zlatko Janjic", [1034, 238]], ["Piotr Malarczyk", [921, 252]], ["Mateusz Mo\u017cd\u017ce\u0144", [828, 239]], ["Ken Kallaste", [717, 253]], ["Maciej Gorski", [709, 216]], ["Joonas Tamm", [371, 264]], ["Oktawian Skrzecz", [248, 225]], ["Aleksandar Bjelica", [214, 268]], ["Oskar Sewerzynski", [138, 214]], ["Piotr Pierzcha\u0142a", [94, 253]], ["Daniel Szelagowski", [33, 197]]], "players": {"136128": ["Elia Soriano", 2648, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 828, 239], "926915": ["Daniel Szelagowski", 33, 197], "25068": ["Joonas Tamm", 371, 264], "38602": ["Michael Gardawski", 2742, 265], "24076": ["Matej Pucko", 2073, 255], "87917": ["Ognjen Gnjatic", 1051, 274], "6675": ["F. Brown Forbes", 1338, 242], "254166": ["Iv\u00e1n M\u00e1rquez", 2208, 255], "377495": ["E. Diaw", 1732, 270], "171737": ["Marcin Cebula", 1229, 276], "38618": ["Zlatko Janjic", 1034, 238], "38683": ["Ken Kallaste", 717, 253], "457331": ["Piotr Pierzcha\u0142a", 94, 253], "84129": ["Adnan Kovacevic", 2674, 271], "218915": ["Ivan Jukic", 1388, 256], "23275": ["Piotr Malarczyk", 921, 252], "23468": ["Batosz Rymaniak", 2877, 254], "259181": ["Jakub \u017bubrowski", 2674, 272], "18867": ["Maciej Gorski", 709, 216], "26165": ["Oliver Petrak", 2443, 251], "1064502": ["Oskar Sewerzynski", 138, 214], "189432": ["Aleksandar Bjelica", 214, 268], "199802": ["Vato Arveladze", 1256, 268], "259132": ["\u0141ukasz Kosakiewicz", 1757, 245], "180862": ["Oktawian Skrzecz", 248, 225]}, "wiek": {"32": [38618], "16": [926915], "17": [1064502], "19": [457331], "20": [199802], "21": [180862], "22": [218915], "23": [171737], "24": [254166, 377495, 189432], "25": [84129, 24076], "26": [259181, 25068], "27": [26165, 6675, 87917, 23275, 8449], "28": [38602, 259132, 18867], "29": [23468, 136128], "30": [38683]}, "ids": ["el10757139727014267368", "el10757139727014165360", "el10757139727014268040", "el10757139727014268880", "el10757139727014290376", "el10757139727014291272", "el10757139727014292168", "el10757139727014293064", "el10757139727014314504", "el10757139727014315400", "el10757139727014316296", "el10757139727014317192", "el10757139727014318032", "el10757139727013819336", "el10757139727013820232", "el10757139727013821128", "el10757139727013822024"], "type": "clickinfo", "vals": {"32": [1034, 238], "16": [33, 0], "17": [138, 214], "19": [94, 253], "20": [1256, 268], "21": [248, 225], "22": [1388, 256], "23": [1229, 276], "24": [4154, 262], "25": [4747, 264], "26": [3045, 271], "27": [6581, 252], "28": [5208, 252], "29": [5525, 256], "30": [717, 253]}, "low": 16}], "height": 480.0, "id": "el10757139727015517208", "data": {"data02": [[0.0, 16.5, 0.0], [138.0, 16.5, 214.0], [138.0, 17.5, 214.0], [0.0, 17.5, 0.0]], "data01": [[0.0, 15.5, 0.0, 17.5, 30.5], [33.0, 15.5, 0.0, 17.5, 30.5], [33.0, 16.5, 0.0, 18.5, 31.5], [0.0, 16.5, 0.0, 18.5, 31.5]], "data03": [[0.0, 17.5, 30.5], [0.0, 17.5, 30.5], [0.0, 18.5, 31.5], [0.0, 18.5, 31.5]], "data07": [[0.0, 21.5, 0.0, 28.5], [1388.0, 21.5, 256.0, 28.5], [1388.0, 22.5, 256.0, 29.5], [0.0, 22.5, 0.0, 29.5]], "data13": [[0.0, 27.5], [5208.0, 27.5], [5208.0, 28.5], [0.0, 28.5]], "data09": [[0.0, 23.5, 0.0], [4154.0, 23.5, 262.0], [4154.0, 24.5, 262.0], [0.0, 24.5, 0.0]], "data12": [[0.0, 26.5, 0.0, 27.5], [6581.0, 26.5, 252.0, 27.5], [6581.0, 27.5, 252.0, 28.5], [0.0, 27.5, 0.0, 28.5]], "data08": [[0.0, 22.5, 0.0], [1229.0, 22.5, 276.0], [1229.0, 23.5, 276.0], [0.0, 23.5, 0.0]], "data14": [[0.0, 28.5], [5525.0, 28.5], [5525.0, 29.5], [0.0, 29.5]], "data05": [[0.0, 19.5, 0.0], [1256.0, 19.5, 268.0], [1256.0, 20.5, 268.0], [0.0, 20.5, 0.0]], "data06": [[0.0, 20.5, 0.0], [248.0, 20.5, 225.0], [248.0, 21.5, 225.0], [0.0, 21.5, 0.0]], "data04": [[0.0, 18.5, 0.0, 29.5], [94.0, 18.5, 253.0, 29.5], [94.0, 19.5, 253.0, 30.5], [0.0, 19.5, 0.0, 30.5]], "data11": [[0.0, 25.5, 0.0], [3045.0, 25.5, 271.0], [3045.0, 26.5, 271.0], [0.0, 26.5, 0.0]], "data10": [[0.0, 24.5, 0.0], [4747.0, 24.5, 264.0], [4747.0, 25.5, 264.0], [0.0, 25.5, 0.0]], "data15": [[0.0, 29.5], [717.0, 29.5], [717.0, 30.5], [0.0, 30.5]], "data16": [[0.0, 31.5, 0.0], [1034.0, 31.5, 238.0], [1034.0, 32.5, 238.0], [0.0, 32.5, 0.0]]}, "axes": [{"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Minuty", "color": "#000000", "id": "el10757139727014439064", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [8218.0, 33.0], "ydomain": [14.65, 33.35], "sharex": [], "xlim": [8218.0, 33.0], "images": [], "sharey": ["el10757139727014522160"], "axes": [{"nticks": 6, "fontsize": 10.0, "tickvalues": null, "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 17, "fontsize": 10.0, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "visible": true, "grid": {"gridOn": false}, "position": "left", "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727014353776", "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "ylim": [14.65, 33.35], "paths": [{"xindex": 0, "id": "el10757139727014165696", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 0, "id": "el10757139727014165192", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 0, "id": "el10757139727014166480", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 0, "id": "el10757139727014192016", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 0, "id": "el10757139727014192912", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 0, "id": "el10757139727014193808", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 0, "id": "el10757139727014194704", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 0, "id": "el10757139727014220240", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 0, "id": "el10757139727014221136", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 0, "id": "el10757139727014222032", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data10"}, {"xindex": 0, "id": "el10757139727014222928", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 0, "id": "el10757139727014223824", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 0, "id": "el10757139727014241168", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data13"}, {"xindex": 0, "id": "el10757139727014242064", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data14"}, {"xindex": 0, "id": "el10757139727014242960", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data15"}, {"xindex": 0, "id": "el10757139727014243856", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 2, "data": "data03"}, {"xindex": 0, "id": "el10757139727014265296", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data16"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}, {"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Instat index", "color": "#000000", "id": "el10757139727014815448", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [204.0, 286.0], "ydomain": [14.65, 33.35], "sharex": [], "xlim": [204.0, 286.0], "images": [], "sharey": ["el10757139727014353776"], "axes": [{"nticks": 5, "fontsize": 10.0, "tickvalues": [214, 229, 244, 259, 276], "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 17, "fontsize": null, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "visible": true, "grid": {"gridOn": false}, "position": "right", "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727014522160", "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "ylim": [14.65, 33.35], "paths": [{"xindex": 2, "id": "el10757139727014267368", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 2, "id": "el10757139727014165360", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 2, "id": "el10757139727014268040", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data01"}, {"xindex": 2, "id": "el10757139727014268880", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 2, "id": "el10757139727014290376", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 2, "id": "el10757139727014291272", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 2, "id": "el10757139727014292168", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 2, "id": "el10757139727014293064", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 2, "id": "el10757139727014314504", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 2, "id": "el10757139727014315400", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data10"}, {"xindex": 2, "id": "el10757139727014316296", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 2, "id": "el10757139727014317192", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 2, "id": "el10757139727014318032", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data12"}, {"xindex": 2, "id": "el10757139727013819336", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data07"}, {"xindex": 2, "id": "el10757139727013820232", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data04"}, {"xindex": 2, "id": "el10757139727013821128", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 4, "data": "data01"}, {"xindex": 2, "id": "el10757139727013822024", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data16"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}]});
            })
         });
}
 
