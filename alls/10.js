

  

   

    
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

    var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");
    //var tooltip = d3.select("#lista");
    var table = tooltip.append('table').attr("class", "sortable");
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
        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                    //  table.html("<tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr>")
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in wiek[i+low]) {
                                      licz+=1;
                                    tekst+= "<tr>";
                                    var zawodnik = data[wiek[i+low][j]];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1]+"</td>";
                                    tekst+= "<td>" +  zawodnik[2]+"</td>";
                                    
                                    //var ter = table.insert('tr');
                                    //ter.append('td').html(zawodnik[0])
                                    //ter.append('td').html(zawodnik[1])
                                    //ter.append('td').html(zawodnik[2])
                                    //console.log(zawodnik);
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                
                                if (licz > 1) {
                                tekst+="<tfoot>";
                                tekst+= "<tr>";
                                console.log(bins[i+low][1]);

                                
                                tekst+= "<td> </td>";
                                
                                    tekst+= "<td>" + bins[i+low][0]+"</td>";
                                    tekst+= "<td>" +  bins[i+low][1]+"</td>";
                                    tekst+= "</tr>";
                                tekst+="</tfoot>";
                                }
                                table.html(tekst);
                                console.log(alls);

                              });
                              });
    }
    
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low","vals","alls"];

    var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");
    //var tooltip = d3.select("#lista");
    var table = tooltip.append('table').attr("class", "sortable");
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
        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                    //  table.html("<tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr>")
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in wiek[i+low]) {
                                      licz+=1;
                                    tekst+= "<tr>";
                                    var zawodnik = data[wiek[i+low][j]];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1]+"</td>";
                                    tekst+= "<td>" +  zawodnik[2]+"</td>";
                                    
                                    //var ter = table.insert('tr');
                                    //ter.append('td').html(zawodnik[0])
                                    //ter.append('td').html(zawodnik[1])
                                    //ter.append('td').html(zawodnik[2])
                                    //console.log(zawodnik);
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                
                                if (licz > 1) {
                                tekst+="<tfoot>";
                                tekst+= "<tr>";
                                console.log(bins[i+low][1]);

                                
                                tekst+= "<td> </td>";
                                
                                    tekst+= "<td>" + bins[i+low][0]+"</td>";
                                    tekst+= "<td>" +  bins[i+low][1]+"</td>";
                                    tekst+= "</tr>";
                                tekst+="</tfoot>";
                                }
                                table.html(tekst);
                                console.log(alls);

                              });
                              });
    }
    
       mpld3.draw_figure("id10", {"plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"vals": {"32": [1034, 238], "16": [33, 0], "17": [138, 214], "19": [94, 253], "20": [1256, 268], "21": [248, 225], "22": [1388, 256], "23": [1229, 276], "24": [4154, 262], "25": [4747, 264], "26": [3045, 271], "27": [6581, 252], "28": [5208, 252], "29": [5525, 256], "30": [717, 253]}, "low": 16, "players": {"136128": ["Elia Soriano", 2648, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 828, 239], "926915": ["Daniel Szelagowski", 33, 197], "25068": ["Joonas Tamm", 371, 264], "38602": ["Michael Gardawski", 2742, 265], "24076": ["Matej Pucko", 2073, 255], "87917": ["Ognjen Gnjatic", 1051, 274], "6675": ["F. Brown Forbes", 1338, 242], "254166": ["Iv\u00e1n M\u00e1rquez", 2208, 255], "377495": ["E. Diaw", 1732, 270], "171737": ["Marcin Cebula", 1229, 276], "38618": ["Zlatko Janjic", 1034, 238], "38683": ["Ken Kallaste", 717, 253], "457331": ["Piotr Pierzcha\u0142a", 94, 253], "84129": ["Adnan Kovacevic", 2674, 271], "218915": ["Ivan Jukic", 1388, 256], "23275": ["Piotr Malarczyk", 921, 252], "23468": ["Batosz Rymaniak", 2877, 254], "259181": ["Jakub \u017bubrowski", 2674, 272], "18867": ["Maciej Gorski", 709, 216], "26165": ["Oliver Petrak", 2443, 251], "1064502": ["Oskar Sewerzynski", 138, 214], "189432": ["Aleksandar Bjelica", 214, 268], "199802": ["Vato Arveladze", 1256, 268], "259132": ["\u0141ukasz Kosakiewicz", 1757, 245], "180862": ["Oktawian Skrzecz", 248, 225]}, "wiek": {"32": [38618], "16": [926915], "17": [1064502], "19": [457331], "20": [199802], "21": [180862], "22": [218915], "23": [171737], "24": [254166, 377495, 189432], "25": [84129, 24076], "26": [259181, 25068], "27": [26165, 6675, 87917, 23275, 8449], "28": [38602, 259132, 18867], "29": [23468, 136128], "30": [38683]}, "alls": [["Batosz Rymaniak", [2877, 254]], ["Michael Gardawski", [2742, 265]], ["Jakub \u017bubrowski", [2674, 272]], ["Adnan Kovacevic", [2674, 271]], ["Elia Soriano", [2648, 258]], ["Oliver Petrak", [2443, 251]], ["Iv\u00e1n M\u00e1rquez", [2208, 255]], ["Matej Pucko", [2073, 255]], ["\u0141ukasz Kosakiewicz", [1757, 245]], ["E. Diaw", [1732, 270]], ["Ivan Jukic", [1388, 256]], ["F. Brown Forbes", [1338, 242]], ["Vato Arveladze", [1256, 268]], ["Marcin Cebula", [1229, 276]], ["Ognjen Gnjatic", [1051, 274]], ["Zlatko Janjic", [1034, 238]], ["Piotr Malarczyk", [921, 252]], ["Mateusz Mo\u017cd\u017ce\u0144", [828, 239]], ["Ken Kallaste", [717, 253]], ["Maciej Gorski", [709, 216]], ["Joonas Tamm", [371, 264]], ["Oktawian Skrzecz", [248, 225]], ["Aleksandar Bjelica", [214, 268]], ["Oskar Sewerzynski", [138, 214]], ["Piotr Pierzcha\u0142a", [94, 253]], ["Daniel Szelagowski", [33, 197]]], "type": "clickinfo", "ids": ["el4265140411103001568", "el4265140411103001064", "el4265140411103002352", "el4265140411103023792", "el4265140411103024688", "el4265140411103025584", "el4265140411103026480", "el4265140411103052016", "el4265140411103052912", "el4265140411103053808", "el4265140411103054704", "el4265140411103055600", "el4265140411103072944", "el4265140411103073840", "el4265140411103074736", "el4265140411103075632", "el4265140411103097072"]}, {"vals": {"32": [1034, 238], "16": [33, 0], "17": [138, 214], "19": [94, 253], "20": [1256, 268], "21": [248, 225], "22": [1388, 256], "23": [1229, 276], "24": [4154, 262], "25": [4747, 264], "26": [3045, 271], "27": [6581, 252], "28": [5208, 252], "29": [5525, 256], "30": [717, 253]}, "low": 16, "players": {"136128": ["Elia Soriano", 2648, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 828, 239], "926915": ["Daniel Szelagowski", 33, 197], "25068": ["Joonas Tamm", 371, 264], "38602": ["Michael Gardawski", 2742, 265], "24076": ["Matej Pucko", 2073, 255], "87917": ["Ognjen Gnjatic", 1051, 274], "6675": ["F. Brown Forbes", 1338, 242], "254166": ["Iv\u00e1n M\u00e1rquez", 2208, 255], "377495": ["E. Diaw", 1732, 270], "171737": ["Marcin Cebula", 1229, 276], "38618": ["Zlatko Janjic", 1034, 238], "38683": ["Ken Kallaste", 717, 253], "457331": ["Piotr Pierzcha\u0142a", 94, 253], "84129": ["Adnan Kovacevic", 2674, 271], "218915": ["Ivan Jukic", 1388, 256], "23275": ["Piotr Malarczyk", 921, 252], "23468": ["Batosz Rymaniak", 2877, 254], "259181": ["Jakub \u017bubrowski", 2674, 272], "18867": ["Maciej Gorski", 709, 216], "26165": ["Oliver Petrak", 2443, 251], "1064502": ["Oskar Sewerzynski", 138, 214], "189432": ["Aleksandar Bjelica", 214, 268], "199802": ["Vato Arveladze", 1256, 268], "259132": ["\u0141ukasz Kosakiewicz", 1757, 245], "180862": ["Oktawian Skrzecz", 248, 225]}, "wiek": {"32": [38618], "16": [926915], "17": [1064502], "19": [457331], "20": [199802], "21": [180862], "22": [218915], "23": [171737], "24": [254166, 377495, 189432], "25": [84129, 24076], "26": [259181, 25068], "27": [26165, 6675, 87917, 23275, 8449], "28": [38602, 259132, 18867], "29": [23468, 136128], "30": [38683]}, "alls": [["Batosz Rymaniak", [2877, 254]], ["Michael Gardawski", [2742, 265]], ["Jakub \u017bubrowski", [2674, 272]], ["Adnan Kovacevic", [2674, 271]], ["Elia Soriano", [2648, 258]], ["Oliver Petrak", [2443, 251]], ["Iv\u00e1n M\u00e1rquez", [2208, 255]], ["Matej Pucko", [2073, 255]], ["\u0141ukasz Kosakiewicz", [1757, 245]], ["E. Diaw", [1732, 270]], ["Ivan Jukic", [1388, 256]], ["F. Brown Forbes", [1338, 242]], ["Vato Arveladze", [1256, 268]], ["Marcin Cebula", [1229, 276]], ["Ognjen Gnjatic", [1051, 274]], ["Zlatko Janjic", [1034, 238]], ["Piotr Malarczyk", [921, 252]], ["Mateusz Mo\u017cd\u017ce\u0144", [828, 239]], ["Ken Kallaste", [717, 253]], ["Maciej Gorski", [709, 216]], ["Joonas Tamm", [371, 264]], ["Oktawian Skrzecz", [248, 225]], ["Aleksandar Bjelica", [214, 268]], ["Oskar Sewerzynski", [138, 214]], ["Piotr Pierzcha\u0142a", [94, 253]], ["Daniel Szelagowski", [33, 197]]], "type": "clickinfo", "ids": ["el4265140411103099144", "el4265140411103001232", "el4265140411103099816", "el4265140411103100712", "el4265140411103122152", "el4265140411103123048", "el4265140411103123944", "el4265140411103124840", "el4265140411103146280", "el4265140411103147176", "el4265140411103148072", "el4265140411103148968", "el4265140411103149864", "el4265140411102651112", "el4265140411102652008", "el4265140411102652904", "el4265140411102653800"]}], "height": 480.0, "data": {"data03": [[0.0, 17.5, 30.5], [0.0, 17.5, 30.5], [0.0, 18.5, 31.5], [0.0, 18.5, 31.5]], "data05": [[0.0, 19.5, 0.0], [1256.0, 19.5, 268.0], [1256.0, 20.5, 268.0], [0.0, 20.5, 0.0]], "data02": [[0.0, 16.5, 0.0], [138.0, 16.5, 214.0], [138.0, 17.5, 214.0], [0.0, 17.5, 0.0]], "data11": [[0.0, 25.5, 0.0], [3045.0, 25.5, 271.0], [3045.0, 26.5, 271.0], [0.0, 26.5, 0.0]], "data01": [[0.0, 15.5, 0.0, 17.5, 30.5], [33.0, 15.5, 0.0, 17.5, 30.5], [33.0, 16.5, 0.0, 18.5, 31.5], [0.0, 16.5, 0.0, 18.5, 31.5]], "data15": [[0.0, 29.5], [717.0, 29.5], [717.0, 30.5], [0.0, 30.5]], "data12": [[0.0, 26.5, 0.0, 27.5], [6581.0, 26.5, 252.0, 27.5], [6581.0, 27.5, 252.0, 28.5], [0.0, 27.5, 0.0, 28.5]], "data08": [[0.0, 22.5, 0.0], [1229.0, 22.5, 276.0], [1229.0, 23.5, 276.0], [0.0, 23.5, 0.0]], "data13": [[0.0, 27.5], [5208.0, 27.5], [5208.0, 28.5], [0.0, 28.5]], "data04": [[0.0, 18.5, 0.0, 29.5], [94.0, 18.5, 253.0, 29.5], [94.0, 19.5, 253.0, 30.5], [0.0, 19.5, 0.0, 30.5]], "data10": [[0.0, 24.5, 0.0], [4747.0, 24.5, 264.0], [4747.0, 25.5, 264.0], [0.0, 25.5, 0.0]], "data06": [[0.0, 20.5, 0.0], [248.0, 20.5, 225.0], [248.0, 21.5, 225.0], [0.0, 21.5, 0.0]], "data16": [[0.0, 31.5, 0.0], [1034.0, 31.5, 238.0], [1034.0, 32.5, 238.0], [0.0, 32.5, 0.0]], "data07": [[0.0, 21.5, 0.0, 28.5], [1388.0, 21.5, 256.0, 28.5], [1388.0, 22.5, 256.0, 29.5], [0.0, 22.5, 0.0, 29.5]], "data14": [[0.0, 28.5], [5525.0, 28.5], [5525.0, 29.5], [0.0, 29.5]], "data09": [[0.0, 23.5, 0.0], [4154.0, 23.5, 262.0], [4154.0, 24.5, 262.0], [0.0, 24.5, 0.0]]}, "width": 640.0, "axes": [{"yscale": "linear", "lines": [], "sharey": ["el4265140411103332000"], "collections": [], "xlim": [8218.0, 33.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Minuty", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411103247440"}], "xdomain": [8218.0, 33.0], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 6, "tickformat": null, "tickvalues": null, "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "left", "grid": {"gridOn": false}, "nticks": 17, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "scale": "linear", "fontsize": 10.0, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103001568"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103001064"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103002352"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103023792"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103024688"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103025584"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103026480"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103052016"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103052912"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103053808"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103054704"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103055600"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103072944"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103073840"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data15", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103074736"}, {"edgecolor": "none", "dasharray": "none", "yindex": 2, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103075632"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data16", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103097072"}], "ydomain": [14.65, 33.35], "ylim": [14.65, 33.35], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411103244976"}, {"yscale": "linear", "lines": [], "sharey": ["el4265140411103244976"], "collections": [], "xlim": [204.0, 286.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Instat index", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411103610696"}], "xdomain": [204.0, 286.0], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 5, "tickformat": null, "tickvalues": [214, 229, 244, 259, 276], "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "right", "grid": {"gridOn": false}, "nticks": 17, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "scale": "linear", "fontsize": null, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411103099144"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411103001232"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411103099816"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411103100712"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411103122152"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411103123048"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411103123944"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411103124840"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411103146280"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411103147176"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411103148072"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411103148968"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411103149864"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411102651112"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411102652008"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411102652904"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data16", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411102653800"}], "ydomain": [14.65, 33.35], "ylim": [14.65, 33.35], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411103332000"}], "id": "el4265140411104310440"});
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

    var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");
    //var tooltip = d3.select("#lista");
    var table = tooltip.append('table').attr("class", "sortable");
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
        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                    //  table.html("<tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr>")
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in wiek[i+low]) {
                                      licz+=1;
                                    tekst+= "<tr>";
                                    var zawodnik = data[wiek[i+low][j]];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1]+"</td>";
                                    tekst+= "<td>" +  zawodnik[2]+"</td>";
                                    
                                    //var ter = table.insert('tr');
                                    //ter.append('td').html(zawodnik[0])
                                    //ter.append('td').html(zawodnik[1])
                                    //ter.append('td').html(zawodnik[2])
                                    //console.log(zawodnik);
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                
                                if (licz > 1) {
                                tekst+="<tfoot>";
                                tekst+= "<tr>";
                                console.log(bins[i+low][1]);

                                
                                tekst+= "<td> </td>";
                                
                                    tekst+= "<td>" + bins[i+low][0]+"</td>";
                                    tekst+= "<td>" +  bins[i+low][1]+"</td>";
                                    tekst+= "</tr>";
                                tekst+="</tfoot>";
                                }
                                table.html(tekst);
                                console.log(alls);

                              });
                              });
    }
    
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low","vals","alls"];

    var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");
    //var tooltip = d3.select("#lista");
    var table = tooltip.append('table').attr("class", "sortable");
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
        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                    //  table.html("<tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr>")
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in wiek[i+low]) {
                                      licz+=1;
                                    tekst+= "<tr>";
                                    var zawodnik = data[wiek[i+low][j]];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1]+"</td>";
                                    tekst+= "<td>" +  zawodnik[2]+"</td>";
                                    
                                    //var ter = table.insert('tr');
                                    //ter.append('td').html(zawodnik[0])
                                    //ter.append('td').html(zawodnik[1])
                                    //ter.append('td').html(zawodnik[2])
                                    //console.log(zawodnik);
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                
                                if (licz > 1) {
                                tekst+="<tfoot>";
                                tekst+= "<tr>";
                                console.log(bins[i+low][1]);

                                
                                tekst+= "<td> </td>";
                                
                                    tekst+= "<td>" + bins[i+low][0]+"</td>";
                                    tekst+= "<td>" +  bins[i+low][1]+"</td>";
                                    tekst+= "</tr>";
                                tekst+="</tfoot>";
                                }
                                table.html(tekst);
                                console.log(alls);

                              });
                              });
    }
    
         mpld3.draw_figure("id10", {"plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"vals": {"32": [1034, 238], "16": [33, 0], "17": [138, 214], "19": [94, 253], "20": [1256, 268], "21": [248, 225], "22": [1388, 256], "23": [1229, 276], "24": [4154, 262], "25": [4747, 264], "26": [3045, 271], "27": [6581, 252], "28": [5208, 252], "29": [5525, 256], "30": [717, 253]}, "low": 16, "players": {"136128": ["Elia Soriano", 2648, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 828, 239], "926915": ["Daniel Szelagowski", 33, 197], "25068": ["Joonas Tamm", 371, 264], "38602": ["Michael Gardawski", 2742, 265], "24076": ["Matej Pucko", 2073, 255], "87917": ["Ognjen Gnjatic", 1051, 274], "6675": ["F. Brown Forbes", 1338, 242], "254166": ["Iv\u00e1n M\u00e1rquez", 2208, 255], "377495": ["E. Diaw", 1732, 270], "171737": ["Marcin Cebula", 1229, 276], "38618": ["Zlatko Janjic", 1034, 238], "38683": ["Ken Kallaste", 717, 253], "457331": ["Piotr Pierzcha\u0142a", 94, 253], "84129": ["Adnan Kovacevic", 2674, 271], "218915": ["Ivan Jukic", 1388, 256], "23275": ["Piotr Malarczyk", 921, 252], "23468": ["Batosz Rymaniak", 2877, 254], "259181": ["Jakub \u017bubrowski", 2674, 272], "18867": ["Maciej Gorski", 709, 216], "26165": ["Oliver Petrak", 2443, 251], "1064502": ["Oskar Sewerzynski", 138, 214], "189432": ["Aleksandar Bjelica", 214, 268], "199802": ["Vato Arveladze", 1256, 268], "259132": ["\u0141ukasz Kosakiewicz", 1757, 245], "180862": ["Oktawian Skrzecz", 248, 225]}, "wiek": {"32": [38618], "16": [926915], "17": [1064502], "19": [457331], "20": [199802], "21": [180862], "22": [218915], "23": [171737], "24": [254166, 377495, 189432], "25": [84129, 24076], "26": [259181, 25068], "27": [26165, 6675, 87917, 23275, 8449], "28": [38602, 259132, 18867], "29": [23468, 136128], "30": [38683]}, "alls": [["Batosz Rymaniak", [2877, 254]], ["Michael Gardawski", [2742, 265]], ["Jakub \u017bubrowski", [2674, 272]], ["Adnan Kovacevic", [2674, 271]], ["Elia Soriano", [2648, 258]], ["Oliver Petrak", [2443, 251]], ["Iv\u00e1n M\u00e1rquez", [2208, 255]], ["Matej Pucko", [2073, 255]], ["\u0141ukasz Kosakiewicz", [1757, 245]], ["E. Diaw", [1732, 270]], ["Ivan Jukic", [1388, 256]], ["F. Brown Forbes", [1338, 242]], ["Vato Arveladze", [1256, 268]], ["Marcin Cebula", [1229, 276]], ["Ognjen Gnjatic", [1051, 274]], ["Zlatko Janjic", [1034, 238]], ["Piotr Malarczyk", [921, 252]], ["Mateusz Mo\u017cd\u017ce\u0144", [828, 239]], ["Ken Kallaste", [717, 253]], ["Maciej Gorski", [709, 216]], ["Joonas Tamm", [371, 264]], ["Oktawian Skrzecz", [248, 225]], ["Aleksandar Bjelica", [214, 268]], ["Oskar Sewerzynski", [138, 214]], ["Piotr Pierzcha\u0142a", [94, 253]], ["Daniel Szelagowski", [33, 197]]], "type": "clickinfo", "ids": ["el4265140411103001568", "el4265140411103001064", "el4265140411103002352", "el4265140411103023792", "el4265140411103024688", "el4265140411103025584", "el4265140411103026480", "el4265140411103052016", "el4265140411103052912", "el4265140411103053808", "el4265140411103054704", "el4265140411103055600", "el4265140411103072944", "el4265140411103073840", "el4265140411103074736", "el4265140411103075632", "el4265140411103097072"]}, {"vals": {"32": [1034, 238], "16": [33, 0], "17": [138, 214], "19": [94, 253], "20": [1256, 268], "21": [248, 225], "22": [1388, 256], "23": [1229, 276], "24": [4154, 262], "25": [4747, 264], "26": [3045, 271], "27": [6581, 252], "28": [5208, 252], "29": [5525, 256], "30": [717, 253]}, "low": 16, "players": {"136128": ["Elia Soriano", 2648, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 828, 239], "926915": ["Daniel Szelagowski", 33, 197], "25068": ["Joonas Tamm", 371, 264], "38602": ["Michael Gardawski", 2742, 265], "24076": ["Matej Pucko", 2073, 255], "87917": ["Ognjen Gnjatic", 1051, 274], "6675": ["F. Brown Forbes", 1338, 242], "254166": ["Iv\u00e1n M\u00e1rquez", 2208, 255], "377495": ["E. Diaw", 1732, 270], "171737": ["Marcin Cebula", 1229, 276], "38618": ["Zlatko Janjic", 1034, 238], "38683": ["Ken Kallaste", 717, 253], "457331": ["Piotr Pierzcha\u0142a", 94, 253], "84129": ["Adnan Kovacevic", 2674, 271], "218915": ["Ivan Jukic", 1388, 256], "23275": ["Piotr Malarczyk", 921, 252], "23468": ["Batosz Rymaniak", 2877, 254], "259181": ["Jakub \u017bubrowski", 2674, 272], "18867": ["Maciej Gorski", 709, 216], "26165": ["Oliver Petrak", 2443, 251], "1064502": ["Oskar Sewerzynski", 138, 214], "189432": ["Aleksandar Bjelica", 214, 268], "199802": ["Vato Arveladze", 1256, 268], "259132": ["\u0141ukasz Kosakiewicz", 1757, 245], "180862": ["Oktawian Skrzecz", 248, 225]}, "wiek": {"32": [38618], "16": [926915], "17": [1064502], "19": [457331], "20": [199802], "21": [180862], "22": [218915], "23": [171737], "24": [254166, 377495, 189432], "25": [84129, 24076], "26": [259181, 25068], "27": [26165, 6675, 87917, 23275, 8449], "28": [38602, 259132, 18867], "29": [23468, 136128], "30": [38683]}, "alls": [["Batosz Rymaniak", [2877, 254]], ["Michael Gardawski", [2742, 265]], ["Jakub \u017bubrowski", [2674, 272]], ["Adnan Kovacevic", [2674, 271]], ["Elia Soriano", [2648, 258]], ["Oliver Petrak", [2443, 251]], ["Iv\u00e1n M\u00e1rquez", [2208, 255]], ["Matej Pucko", [2073, 255]], ["\u0141ukasz Kosakiewicz", [1757, 245]], ["E. Diaw", [1732, 270]], ["Ivan Jukic", [1388, 256]], ["F. Brown Forbes", [1338, 242]], ["Vato Arveladze", [1256, 268]], ["Marcin Cebula", [1229, 276]], ["Ognjen Gnjatic", [1051, 274]], ["Zlatko Janjic", [1034, 238]], ["Piotr Malarczyk", [921, 252]], ["Mateusz Mo\u017cd\u017ce\u0144", [828, 239]], ["Ken Kallaste", [717, 253]], ["Maciej Gorski", [709, 216]], ["Joonas Tamm", [371, 264]], ["Oktawian Skrzecz", [248, 225]], ["Aleksandar Bjelica", [214, 268]], ["Oskar Sewerzynski", [138, 214]], ["Piotr Pierzcha\u0142a", [94, 253]], ["Daniel Szelagowski", [33, 197]]], "type": "clickinfo", "ids": ["el4265140411103099144", "el4265140411103001232", "el4265140411103099816", "el4265140411103100712", "el4265140411103122152", "el4265140411103123048", "el4265140411103123944", "el4265140411103124840", "el4265140411103146280", "el4265140411103147176", "el4265140411103148072", "el4265140411103148968", "el4265140411103149864", "el4265140411102651112", "el4265140411102652008", "el4265140411102652904", "el4265140411102653800"]}], "height": 480.0, "data": {"data03": [[0.0, 17.5, 30.5], [0.0, 17.5, 30.5], [0.0, 18.5, 31.5], [0.0, 18.5, 31.5]], "data05": [[0.0, 19.5, 0.0], [1256.0, 19.5, 268.0], [1256.0, 20.5, 268.0], [0.0, 20.5, 0.0]], "data02": [[0.0, 16.5, 0.0], [138.0, 16.5, 214.0], [138.0, 17.5, 214.0], [0.0, 17.5, 0.0]], "data11": [[0.0, 25.5, 0.0], [3045.0, 25.5, 271.0], [3045.0, 26.5, 271.0], [0.0, 26.5, 0.0]], "data01": [[0.0, 15.5, 0.0, 17.5, 30.5], [33.0, 15.5, 0.0, 17.5, 30.5], [33.0, 16.5, 0.0, 18.5, 31.5], [0.0, 16.5, 0.0, 18.5, 31.5]], "data15": [[0.0, 29.5], [717.0, 29.5], [717.0, 30.5], [0.0, 30.5]], "data12": [[0.0, 26.5, 0.0, 27.5], [6581.0, 26.5, 252.0, 27.5], [6581.0, 27.5, 252.0, 28.5], [0.0, 27.5, 0.0, 28.5]], "data08": [[0.0, 22.5, 0.0], [1229.0, 22.5, 276.0], [1229.0, 23.5, 276.0], [0.0, 23.5, 0.0]], "data13": [[0.0, 27.5], [5208.0, 27.5], [5208.0, 28.5], [0.0, 28.5]], "data04": [[0.0, 18.5, 0.0, 29.5], [94.0, 18.5, 253.0, 29.5], [94.0, 19.5, 253.0, 30.5], [0.0, 19.5, 0.0, 30.5]], "data10": [[0.0, 24.5, 0.0], [4747.0, 24.5, 264.0], [4747.0, 25.5, 264.0], [0.0, 25.5, 0.0]], "data06": [[0.0, 20.5, 0.0], [248.0, 20.5, 225.0], [248.0, 21.5, 225.0], [0.0, 21.5, 0.0]], "data16": [[0.0, 31.5, 0.0], [1034.0, 31.5, 238.0], [1034.0, 32.5, 238.0], [0.0, 32.5, 0.0]], "data07": [[0.0, 21.5, 0.0, 28.5], [1388.0, 21.5, 256.0, 28.5], [1388.0, 22.5, 256.0, 29.5], [0.0, 22.5, 0.0, 29.5]], "data14": [[0.0, 28.5], [5525.0, 28.5], [5525.0, 29.5], [0.0, 29.5]], "data09": [[0.0, 23.5, 0.0], [4154.0, 23.5, 262.0], [4154.0, 24.5, 262.0], [0.0, 24.5, 0.0]]}, "width": 640.0, "axes": [{"yscale": "linear", "lines": [], "sharey": ["el4265140411103332000"], "collections": [], "xlim": [8218.0, 33.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Minuty", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411103247440"}], "xdomain": [8218.0, 33.0], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 6, "tickformat": null, "tickvalues": null, "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "left", "grid": {"gridOn": false}, "nticks": 17, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "scale": "linear", "fontsize": 10.0, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103001568"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103001064"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103002352"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103023792"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103024688"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103025584"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103026480"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103052016"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103052912"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103053808"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103054704"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103055600"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103072944"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103073840"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data15", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103074736"}, {"edgecolor": "none", "dasharray": "none", "yindex": 2, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103075632"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data16", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103097072"}], "ydomain": [14.65, 33.35], "ylim": [14.65, 33.35], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411103244976"}, {"yscale": "linear", "lines": [], "sharey": ["el4265140411103244976"], "collections": [], "xlim": [204.0, 286.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Instat index", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411103610696"}], "xdomain": [204.0, 286.0], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 5, "tickformat": null, "tickvalues": [214, 229, 244, 259, 276], "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "right", "grid": {"gridOn": false}, "nticks": 17, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "scale": "linear", "fontsize": null, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411103099144"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411103001232"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411103099816"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411103100712"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411103122152"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411103123048"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411103123944"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411103124840"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411103146280"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411103147176"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411103148072"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411103148968"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411103149864"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411102651112"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411102652008"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411102652904"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data16", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411102653800"}], "ydomain": [14.65, 33.35], "ylim": [14.65, 33.35], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411103332000"}], "id": "el4265140411104310440"});
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

    var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");
    //var tooltip = d3.select("#lista");
    var table = tooltip.append('table').attr("class", "sortable");
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
        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                    //  table.html("<tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr>")
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in wiek[i+low]) {
                                      licz+=1;
                                    tekst+= "<tr>";
                                    var zawodnik = data[wiek[i+low][j]];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1]+"</td>";
                                    tekst+= "<td>" +  zawodnik[2]+"</td>";
                                    
                                    //var ter = table.insert('tr');
                                    //ter.append('td').html(zawodnik[0])
                                    //ter.append('td').html(zawodnik[1])
                                    //ter.append('td').html(zawodnik[2])
                                    //console.log(zawodnik);
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                
                                if (licz > 1) {
                                tekst+="<tfoot>";
                                tekst+= "<tr>";
                                console.log(bins[i+low][1]);

                                
                                tekst+= "<td> </td>";
                                
                                    tekst+= "<td>" + bins[i+low][0]+"</td>";
                                    tekst+= "<td>" +  bins[i+low][1]+"</td>";
                                    tekst+= "</tr>";
                                tekst+="</tfoot>";
                                }
                                table.html(tekst);
                                console.log(alls);

                              });
                              });
    }
    
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low","vals","alls"];

    var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");
    //var tooltip = d3.select("#lista");
    var table = tooltip.append('table').attr("class", "sortable");
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
        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                    //  table.html("<tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr>")
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in wiek[i+low]) {
                                      licz+=1;
                                    tekst+= "<tr>";
                                    var zawodnik = data[wiek[i+low][j]];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1]+"</td>";
                                    tekst+= "<td>" +  zawodnik[2]+"</td>";
                                    
                                    //var ter = table.insert('tr');
                                    //ter.append('td').html(zawodnik[0])
                                    //ter.append('td').html(zawodnik[1])
                                    //ter.append('td').html(zawodnik[2])
                                    //console.log(zawodnik);
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                
                                if (licz > 1) {
                                tekst+="<tfoot>";
                                tekst+= "<tr>";
                                console.log(bins[i+low][1]);

                                
                                tekst+= "<td> </td>";
                                
                                    tekst+= "<td>" + bins[i+low][0]+"</td>";
                                    tekst+= "<td>" +  bins[i+low][1]+"</td>";
                                    tekst+= "</tr>";
                                tekst+="</tfoot>";
                                }
                                table.html(tekst);
                                console.log(alls);

                              });
                              });
    }
    
                 mpld3.draw_figure("id10", {"plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"vals": {"32": [1034, 238], "16": [33, 0], "17": [138, 214], "19": [94, 253], "20": [1256, 268], "21": [248, 225], "22": [1388, 256], "23": [1229, 276], "24": [4154, 262], "25": [4747, 264], "26": [3045, 271], "27": [6581, 252], "28": [5208, 252], "29": [5525, 256], "30": [717, 253]}, "low": 16, "players": {"136128": ["Elia Soriano", 2648, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 828, 239], "926915": ["Daniel Szelagowski", 33, 197], "25068": ["Joonas Tamm", 371, 264], "38602": ["Michael Gardawski", 2742, 265], "24076": ["Matej Pucko", 2073, 255], "87917": ["Ognjen Gnjatic", 1051, 274], "6675": ["F. Brown Forbes", 1338, 242], "254166": ["Iv\u00e1n M\u00e1rquez", 2208, 255], "377495": ["E. Diaw", 1732, 270], "171737": ["Marcin Cebula", 1229, 276], "38618": ["Zlatko Janjic", 1034, 238], "38683": ["Ken Kallaste", 717, 253], "457331": ["Piotr Pierzcha\u0142a", 94, 253], "84129": ["Adnan Kovacevic", 2674, 271], "218915": ["Ivan Jukic", 1388, 256], "23275": ["Piotr Malarczyk", 921, 252], "23468": ["Batosz Rymaniak", 2877, 254], "259181": ["Jakub \u017bubrowski", 2674, 272], "18867": ["Maciej Gorski", 709, 216], "26165": ["Oliver Petrak", 2443, 251], "1064502": ["Oskar Sewerzynski", 138, 214], "189432": ["Aleksandar Bjelica", 214, 268], "199802": ["Vato Arveladze", 1256, 268], "259132": ["\u0141ukasz Kosakiewicz", 1757, 245], "180862": ["Oktawian Skrzecz", 248, 225]}, "wiek": {"32": [38618], "16": [926915], "17": [1064502], "19": [457331], "20": [199802], "21": [180862], "22": [218915], "23": [171737], "24": [254166, 377495, 189432], "25": [84129, 24076], "26": [259181, 25068], "27": [26165, 6675, 87917, 23275, 8449], "28": [38602, 259132, 18867], "29": [23468, 136128], "30": [38683]}, "alls": [["Batosz Rymaniak", [2877, 254]], ["Michael Gardawski", [2742, 265]], ["Jakub \u017bubrowski", [2674, 272]], ["Adnan Kovacevic", [2674, 271]], ["Elia Soriano", [2648, 258]], ["Oliver Petrak", [2443, 251]], ["Iv\u00e1n M\u00e1rquez", [2208, 255]], ["Matej Pucko", [2073, 255]], ["\u0141ukasz Kosakiewicz", [1757, 245]], ["E. Diaw", [1732, 270]], ["Ivan Jukic", [1388, 256]], ["F. Brown Forbes", [1338, 242]], ["Vato Arveladze", [1256, 268]], ["Marcin Cebula", [1229, 276]], ["Ognjen Gnjatic", [1051, 274]], ["Zlatko Janjic", [1034, 238]], ["Piotr Malarczyk", [921, 252]], ["Mateusz Mo\u017cd\u017ce\u0144", [828, 239]], ["Ken Kallaste", [717, 253]], ["Maciej Gorski", [709, 216]], ["Joonas Tamm", [371, 264]], ["Oktawian Skrzecz", [248, 225]], ["Aleksandar Bjelica", [214, 268]], ["Oskar Sewerzynski", [138, 214]], ["Piotr Pierzcha\u0142a", [94, 253]], ["Daniel Szelagowski", [33, 197]]], "type": "clickinfo", "ids": ["el4265140411103001568", "el4265140411103001064", "el4265140411103002352", "el4265140411103023792", "el4265140411103024688", "el4265140411103025584", "el4265140411103026480", "el4265140411103052016", "el4265140411103052912", "el4265140411103053808", "el4265140411103054704", "el4265140411103055600", "el4265140411103072944", "el4265140411103073840", "el4265140411103074736", "el4265140411103075632", "el4265140411103097072"]}, {"vals": {"32": [1034, 238], "16": [33, 0], "17": [138, 214], "19": [94, 253], "20": [1256, 268], "21": [248, 225], "22": [1388, 256], "23": [1229, 276], "24": [4154, 262], "25": [4747, 264], "26": [3045, 271], "27": [6581, 252], "28": [5208, 252], "29": [5525, 256], "30": [717, 253]}, "low": 16, "players": {"136128": ["Elia Soriano", 2648, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 828, 239], "926915": ["Daniel Szelagowski", 33, 197], "25068": ["Joonas Tamm", 371, 264], "38602": ["Michael Gardawski", 2742, 265], "24076": ["Matej Pucko", 2073, 255], "87917": ["Ognjen Gnjatic", 1051, 274], "6675": ["F. Brown Forbes", 1338, 242], "254166": ["Iv\u00e1n M\u00e1rquez", 2208, 255], "377495": ["E. Diaw", 1732, 270], "171737": ["Marcin Cebula", 1229, 276], "38618": ["Zlatko Janjic", 1034, 238], "38683": ["Ken Kallaste", 717, 253], "457331": ["Piotr Pierzcha\u0142a", 94, 253], "84129": ["Adnan Kovacevic", 2674, 271], "218915": ["Ivan Jukic", 1388, 256], "23275": ["Piotr Malarczyk", 921, 252], "23468": ["Batosz Rymaniak", 2877, 254], "259181": ["Jakub \u017bubrowski", 2674, 272], "18867": ["Maciej Gorski", 709, 216], "26165": ["Oliver Petrak", 2443, 251], "1064502": ["Oskar Sewerzynski", 138, 214], "189432": ["Aleksandar Bjelica", 214, 268], "199802": ["Vato Arveladze", 1256, 268], "259132": ["\u0141ukasz Kosakiewicz", 1757, 245], "180862": ["Oktawian Skrzecz", 248, 225]}, "wiek": {"32": [38618], "16": [926915], "17": [1064502], "19": [457331], "20": [199802], "21": [180862], "22": [218915], "23": [171737], "24": [254166, 377495, 189432], "25": [84129, 24076], "26": [259181, 25068], "27": [26165, 6675, 87917, 23275, 8449], "28": [38602, 259132, 18867], "29": [23468, 136128], "30": [38683]}, "alls": [["Batosz Rymaniak", [2877, 254]], ["Michael Gardawski", [2742, 265]], ["Jakub \u017bubrowski", [2674, 272]], ["Adnan Kovacevic", [2674, 271]], ["Elia Soriano", [2648, 258]], ["Oliver Petrak", [2443, 251]], ["Iv\u00e1n M\u00e1rquez", [2208, 255]], ["Matej Pucko", [2073, 255]], ["\u0141ukasz Kosakiewicz", [1757, 245]], ["E. Diaw", [1732, 270]], ["Ivan Jukic", [1388, 256]], ["F. Brown Forbes", [1338, 242]], ["Vato Arveladze", [1256, 268]], ["Marcin Cebula", [1229, 276]], ["Ognjen Gnjatic", [1051, 274]], ["Zlatko Janjic", [1034, 238]], ["Piotr Malarczyk", [921, 252]], ["Mateusz Mo\u017cd\u017ce\u0144", [828, 239]], ["Ken Kallaste", [717, 253]], ["Maciej Gorski", [709, 216]], ["Joonas Tamm", [371, 264]], ["Oktawian Skrzecz", [248, 225]], ["Aleksandar Bjelica", [214, 268]], ["Oskar Sewerzynski", [138, 214]], ["Piotr Pierzcha\u0142a", [94, 253]], ["Daniel Szelagowski", [33, 197]]], "type": "clickinfo", "ids": ["el4265140411103099144", "el4265140411103001232", "el4265140411103099816", "el4265140411103100712", "el4265140411103122152", "el4265140411103123048", "el4265140411103123944", "el4265140411103124840", "el4265140411103146280", "el4265140411103147176", "el4265140411103148072", "el4265140411103148968", "el4265140411103149864", "el4265140411102651112", "el4265140411102652008", "el4265140411102652904", "el4265140411102653800"]}], "height": 480.0, "data": {"data03": [[0.0, 17.5, 30.5], [0.0, 17.5, 30.5], [0.0, 18.5, 31.5], [0.0, 18.5, 31.5]], "data05": [[0.0, 19.5, 0.0], [1256.0, 19.5, 268.0], [1256.0, 20.5, 268.0], [0.0, 20.5, 0.0]], "data02": [[0.0, 16.5, 0.0], [138.0, 16.5, 214.0], [138.0, 17.5, 214.0], [0.0, 17.5, 0.0]], "data11": [[0.0, 25.5, 0.0], [3045.0, 25.5, 271.0], [3045.0, 26.5, 271.0], [0.0, 26.5, 0.0]], "data01": [[0.0, 15.5, 0.0, 17.5, 30.5], [33.0, 15.5, 0.0, 17.5, 30.5], [33.0, 16.5, 0.0, 18.5, 31.5], [0.0, 16.5, 0.0, 18.5, 31.5]], "data15": [[0.0, 29.5], [717.0, 29.5], [717.0, 30.5], [0.0, 30.5]], "data12": [[0.0, 26.5, 0.0, 27.5], [6581.0, 26.5, 252.0, 27.5], [6581.0, 27.5, 252.0, 28.5], [0.0, 27.5, 0.0, 28.5]], "data08": [[0.0, 22.5, 0.0], [1229.0, 22.5, 276.0], [1229.0, 23.5, 276.0], [0.0, 23.5, 0.0]], "data13": [[0.0, 27.5], [5208.0, 27.5], [5208.0, 28.5], [0.0, 28.5]], "data04": [[0.0, 18.5, 0.0, 29.5], [94.0, 18.5, 253.0, 29.5], [94.0, 19.5, 253.0, 30.5], [0.0, 19.5, 0.0, 30.5]], "data10": [[0.0, 24.5, 0.0], [4747.0, 24.5, 264.0], [4747.0, 25.5, 264.0], [0.0, 25.5, 0.0]], "data06": [[0.0, 20.5, 0.0], [248.0, 20.5, 225.0], [248.0, 21.5, 225.0], [0.0, 21.5, 0.0]], "data16": [[0.0, 31.5, 0.0], [1034.0, 31.5, 238.0], [1034.0, 32.5, 238.0], [0.0, 32.5, 0.0]], "data07": [[0.0, 21.5, 0.0, 28.5], [1388.0, 21.5, 256.0, 28.5], [1388.0, 22.5, 256.0, 29.5], [0.0, 22.5, 0.0, 29.5]], "data14": [[0.0, 28.5], [5525.0, 28.5], [5525.0, 29.5], [0.0, 29.5]], "data09": [[0.0, 23.5, 0.0], [4154.0, 23.5, 262.0], [4154.0, 24.5, 262.0], [0.0, 24.5, 0.0]]}, "width": 640.0, "axes": [{"yscale": "linear", "lines": [], "sharey": ["el4265140411103332000"], "collections": [], "xlim": [8218.0, 33.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Minuty", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411103247440"}], "xdomain": [8218.0, 33.0], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 6, "tickformat": null, "tickvalues": null, "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "left", "grid": {"gridOn": false}, "nticks": 17, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "scale": "linear", "fontsize": 10.0, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103001568"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103001064"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103002352"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103023792"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103024688"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103025584"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103026480"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103052016"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103052912"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103053808"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103054704"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103055600"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103072944"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103073840"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data15", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103074736"}, {"edgecolor": "none", "dasharray": "none", "yindex": 2, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103075632"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data16", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411103097072"}], "ydomain": [14.65, 33.35], "ylim": [14.65, 33.35], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411103244976"}, {"yscale": "linear", "lines": [], "sharey": ["el4265140411103244976"], "collections": [], "xlim": [204.0, 286.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Instat index", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411103610696"}], "xdomain": [204.0, 286.0], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 5, "tickformat": null, "tickvalues": [214, 229, 244, 259, 276], "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "right", "grid": {"gridOn": false}, "nticks": 17, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "scale": "linear", "fontsize": null, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411103099144"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411103001232"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411103099816"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411103100712"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411103122152"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411103123048"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411103123944"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411103124840"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411103146280"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411103147176"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411103148072"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411103148968"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411103149864"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411102651112"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411102652008"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411102652904"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data16", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411102653800"}], "ydomain": [14.65, 33.35], "ylim": [14.65, 33.35], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411103332000"}], "id": "el4265140411104310440"});
            })
         });
}
    
