


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
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low"];

    /*var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");*/
    var tooltip = d3.select("#lista");
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

        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                    //  table.html("<tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr>")
                                tekst+="<tbody>";
                                  for (j in wiek[i+low]) {
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
                                table.html(tekst);
                              });
                              });
    }
    
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low"];

    /*var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");*/
    var tooltip = d3.select("#lista");
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

        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                    //  table.html("<tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr>")
                                tekst+="<tbody>";
                                  for (j in wiek[i+low]) {
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
                                table.html(tekst);
                              });
                              });
    }
    
       mpld3.draw_figure("aaa", {"data": {"data13": [[0.0, 28.5, 0.0], [3987.0, 28.5, 237.04147698533131], [3987.0, 29.5, 237.04147698533131], [0.0, 29.5, 0.0]], "data11": [[0.0, 26.5, 0.0], [1181.0, 26.5, 247.72565622353937], [1181.0, 27.5, 247.72565622353937], [0.0, 27.5, 0.0]], "data03": [[0.0, 18.5, 0.0], [191.0, 18.5, 213.0890052356021], [191.0, 19.5, 213.0890052356021], [0.0, 19.5, 0.0]], "data10": [[0.0, 25.5, 0.0], [5785.0, 25.5, 244.50764308567366], [5785.0, 26.5, 244.50764308567366], [0.0, 26.5, 0.0]], "data04": [[0.0, 19.5, 0.0], [2415.0, 19.5, 234.77726120033813], [2415.0, 20.5, 234.77726120033813], [0.0, 20.5, 0.0]], "data01": [[0.0, 16.5, 0.0], [101.0, 16.5, 251.92079207920793], [101.0, 17.5, 251.92079207920793], [0.0, 17.5, 0.0]], "data12": [[0.0, 27.5, 0.0], [226.0, 27.5, 231.8159509202454], [226.0, 28.5, 231.8159509202454], [0.0, 28.5, 0.0]], "data15": [[0.0, 30.5, 0.0], [4862.0, 30.5, 256.0666392431098], [4862.0, 31.5, 256.0666392431098], [0.0, 31.5, 0.0]], "data06": [[0.0, 21.5, 0.0], [556.0, 21.5, 214.58003766478342], [556.0, 22.5, 214.58003766478342], [0.0, 22.5, 0.0]], "data16": [[0.0, 31.5, 0.0], [6468.0, 31.5, 243.98299319727892], [6468.0, 32.5, 243.98299319727892], [0.0, 32.5, 0.0]], "data02": [[0.0, 17.5, 0.0], [126.0, 17.5, 222.73015873015873], [126.0, 18.5, 222.73015873015873], [0.0, 18.5, 0.0]], "data08": [[0.0, 23.5, 0.0], [1628.0, 23.5, 252.28342930262315], [1628.0, 24.5, 252.28342930262315], [0.0, 24.5, 0.0]], "data14": [[0.0, 29.5], [0.0, 29.5], [0.0, 30.5], [0.0, 30.5]], "data09": [[0.0, 24.5, 0.0], [2854.0, 24.5, 240.5112517580872], [2854.0, 25.5, 240.5112517580872], [0.0, 25.5, 0.0]], "data17": [[0.0, 32.5, 0.0], [1064.0, 32.5, 246.90131578947367], [1064.0, 33.5, 246.90131578947367], [0.0, 33.5, 0.0]], "data07": [[0.0, 22.5, 0.0], [2256.0, 22.5, 246.18627896410723], [2256.0, 23.5, 246.18627896410723], [0.0, 23.5, 0.0]], "data05": [[0.0, 20.5, 0.0], [1313.0, 20.5, 236.58478081058726], [1313.0, 21.5, 236.58478081058726], [0.0, 21.5, 0.0]]}, "axes": [{"ydomain": [15.65, 34.35], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "sharey": ["el11179140578902035928"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [7104.7, 101.0], "id": "el11179140578901912936", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578901697144", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578901696640", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578901697928", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578901698824", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578901699720", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578901700560", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578901722056", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578901722952", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578901723848", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578901724744", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578901742088", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578901742984", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578901743880", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578901744776", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578901745616", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data16", "coordinates": "data", "zorder": 1, "id": "el11179140578901767112", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data17", "coordinates": "data", "zorder": 1, "id": "el11179140578901768008", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}], "xdomain": [7104.7, 101.0], "axes": [{"tickvalues": null, "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "visible": true, "grid": {"gridOn": false}, "nticks": 17, "fontsize": 10.0, "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "scale": "linear", "position": "left"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Minuty", "coordinates": "axes", "zorder": 3, "id": "el11179140578901960016", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [15.65, 34.35]}, {"ydomain": [15.65, 34.35], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "sharey": ["el11179140578901912936"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [203.0890052356021, 266.0666392431098], "id": "el11179140578902035928", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578901770080", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578901696808", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578901795392", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578901796288", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578901797184", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578901798080", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578901819520", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578901820416", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578901821312", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578901822208", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578901823104", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578901844544", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578901845440", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578901846336", "facecolor": "#FFA500", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578901847232", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data16", "coordinates": "data", "zorder": 1, "id": "el11179140578901868672", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data17", "coordinates": "data", "zorder": 1, "id": "el11179140578901869568", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}], "xdomain": [203.0890052356021, 266.0666392431098], "axes": [{"tickvalues": [213, 223, 233, 243, 256], "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "visible": true, "grid": {"gridOn": false}, "nticks": 17, "fontsize": null, "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "scale": "linear", "position": "right"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Instat index", "coordinates": "axes", "zorder": 3, "id": "el11179140578902062976", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [15.65, 34.35]}], "height": 480.0, "id": "el11179140578902192592", "width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"ids": ["el11179140578901697144", "el11179140578901696640", "el11179140578901697928", "el11179140578901698824", "el11179140578901699720", "el11179140578901700560", "el11179140578901722056", "el11179140578901722952", "el11179140578901723848", "el11179140578901724744", "el11179140578901742088", "el11179140578901742984", "el11179140578901743880", "el11179140578901744776", "el11179140578901745616", "el11179140578901767112", "el11179140578901768008"], "type": "clickinfo", "low": 17, "wiek": {"32": [9243, 10846, 20309, 1054], "33": [23312], "17": [1095517], "18": [942673, 1095518, 433408], "19": [309143], "20": [303325, 770897], "21": [261287, 320650], "22": [216046], "23": [185473], "24": [165592, 235294], "25": [176635, 183339], "26": [168517, 179595, 83827, 114652], "27": [8449], "28": [43092], "29": [62172, 12230, 70823, 3187, 51040, 56304], "31": [67106, 8374]}, "players": {"433408": ["Konrad Kumor", 34, 213], "185473": ["Vamara Sanogo", 2256, 246], "168517": ["Michael Heinloth", 2265, 238], "12230": ["Lukas Gressak", 879, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 1181, 247], "320650": ["Callum Rzonca", 112, 194], "179595": ["Mateusz Cichocki", 1997, 249], "23312": ["Tomasz Nowak", 1064, 246], "770897": ["Olaf Nowak", 665, 235], "43092": ["Junior Torunarigha", 226, 231], "20309": ["Martin Toth", 792, 230], "309143": ["Tymoteusz Puchacz", 191, 213], "165592": ["Giorgos Mygas", 1342, 257], "9243": ["Szymon Paw\u0142owski", 2965, 253], "114652": ["Giacomo Mello", 98, 216], "303325": ["Sebastian Milewski", 1750, 234], "1095518": ["Tomasz Pietrzak", 46, 217], "51040": ["Giorgi Ivanishvili", 348, 206], "67106": ["Zarko Udovicic", 2731, 267], "176635": ["Konrad Wrzesi\u0144ski", 1857, 242], "942673": ["Roman Janicki", 46, 235], "62172": ["Adam Banasiak", 992, 236], "1054": ["Adam Kokoszka", 327, 222], "183339": ["Alexander Cristovao", 997, 237], "216046": ["Dejan Vokic", 556, 214], "1095517": ["Kacper Radkowski", 101, 251], "56304": ["David Ryndak", 333, 227], "261287": ["Tomasz Nawotka", 1201, 240], "3187": ["Giorgi Gabedava", 640, 235], "10846": ["Piotr Polczak", 2384, 239], "235294": ["Nuno Malheiro", 286, 227], "8374": ["Patrik Mraz", 2131, 241], "83827": ["Arkadiusz J\u0119drych", 1425, 247], "70823": ["Bart\u0142omiej Babiarz", 795, 232]}}, {"ids": ["el11179140578901770080", "el11179140578901696808", "el11179140578901795392", "el11179140578901796288", "el11179140578901797184", "el11179140578901798080", "el11179140578901819520", "el11179140578901820416", "el11179140578901821312", "el11179140578901822208", "el11179140578901823104", "el11179140578901844544", "el11179140578901845440", "el11179140578901846336", "el11179140578901847232", "el11179140578901868672", "el11179140578901869568"], "type": "clickinfo", "low": 17, "wiek": {"32": [9243, 10846, 20309, 1054], "33": [23312], "17": [1095517], "18": [942673, 1095518, 433408], "19": [309143], "20": [303325, 770897], "21": [261287, 320650], "22": [216046], "23": [185473], "24": [165592, 235294], "25": [176635, 183339], "26": [168517, 179595, 83827, 114652], "27": [8449], "28": [43092], "29": [62172, 12230, 70823, 3187, 51040, 56304], "31": [67106, 8374]}, "players": {"433408": ["Konrad Kumor", 34, 213], "185473": ["Vamara Sanogo", 2256, 246], "168517": ["Michael Heinloth", 2265, 238], "12230": ["Lukas Gressak", 879, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 1181, 247], "320650": ["Callum Rzonca", 112, 194], "179595": ["Mateusz Cichocki", 1997, 249], "23312": ["Tomasz Nowak", 1064, 246], "770897": ["Olaf Nowak", 665, 235], "43092": ["Junior Torunarigha", 226, 231], "20309": ["Martin Toth", 792, 230], "309143": ["Tymoteusz Puchacz", 191, 213], "165592": ["Giorgos Mygas", 1342, 257], "9243": ["Szymon Paw\u0142owski", 2965, 253], "114652": ["Giacomo Mello", 98, 216], "303325": ["Sebastian Milewski", 1750, 234], "1095518": ["Tomasz Pietrzak", 46, 217], "51040": ["Giorgi Ivanishvili", 348, 206], "67106": ["Zarko Udovicic", 2731, 267], "176635": ["Konrad Wrzesi\u0144ski", 1857, 242], "942673": ["Roman Janicki", 46, 235], "62172": ["Adam Banasiak", 992, 236], "1054": ["Adam Kokoszka", 327, 222], "183339": ["Alexander Cristovao", 997, 237], "216046": ["Dejan Vokic", 556, 214], "1095517": ["Kacper Radkowski", 101, 251], "56304": ["David Ryndak", 333, 227], "261287": ["Tomasz Nawotka", 1201, 240], "3187": ["Giorgi Gabedava", 640, 235], "10846": ["Piotr Polczak", 2384, 239], "235294": ["Nuno Malheiro", 286, 227], "8374": ["Patrik Mraz", 2131, 241], "83827": ["Arkadiusz J\u0119drych", 1425, 247], "70823": ["Bart\u0142omiej Babiarz", 795, 232]}}]});
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
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low"];

    /*var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");*/
    var tooltip = d3.select("#lista");
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

        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                    //  table.html("<tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr>")
                                tekst+="<tbody>";
                                  for (j in wiek[i+low]) {
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
                                table.html(tekst);
                              });
                              });
    }
    
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low"];

    /*var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");*/
    var tooltip = d3.select("#lista");
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

        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                    //  table.html("<tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr>")
                                tekst+="<tbody>";
                                  for (j in wiek[i+low]) {
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
                                table.html(tekst);
                              });
                              });
    }
    
         mpld3.draw_figure("aaa", {"data": {"data13": [[0.0, 28.5, 0.0], [3987.0, 28.5, 237.04147698533131], [3987.0, 29.5, 237.04147698533131], [0.0, 29.5, 0.0]], "data11": [[0.0, 26.5, 0.0], [1181.0, 26.5, 247.72565622353937], [1181.0, 27.5, 247.72565622353937], [0.0, 27.5, 0.0]], "data03": [[0.0, 18.5, 0.0], [191.0, 18.5, 213.0890052356021], [191.0, 19.5, 213.0890052356021], [0.0, 19.5, 0.0]], "data10": [[0.0, 25.5, 0.0], [5785.0, 25.5, 244.50764308567366], [5785.0, 26.5, 244.50764308567366], [0.0, 26.5, 0.0]], "data04": [[0.0, 19.5, 0.0], [2415.0, 19.5, 234.77726120033813], [2415.0, 20.5, 234.77726120033813], [0.0, 20.5, 0.0]], "data01": [[0.0, 16.5, 0.0], [101.0, 16.5, 251.92079207920793], [101.0, 17.5, 251.92079207920793], [0.0, 17.5, 0.0]], "data12": [[0.0, 27.5, 0.0], [226.0, 27.5, 231.8159509202454], [226.0, 28.5, 231.8159509202454], [0.0, 28.5, 0.0]], "data15": [[0.0, 30.5, 0.0], [4862.0, 30.5, 256.0666392431098], [4862.0, 31.5, 256.0666392431098], [0.0, 31.5, 0.0]], "data06": [[0.0, 21.5, 0.0], [556.0, 21.5, 214.58003766478342], [556.0, 22.5, 214.58003766478342], [0.0, 22.5, 0.0]], "data16": [[0.0, 31.5, 0.0], [6468.0, 31.5, 243.98299319727892], [6468.0, 32.5, 243.98299319727892], [0.0, 32.5, 0.0]], "data02": [[0.0, 17.5, 0.0], [126.0, 17.5, 222.73015873015873], [126.0, 18.5, 222.73015873015873], [0.0, 18.5, 0.0]], "data08": [[0.0, 23.5, 0.0], [1628.0, 23.5, 252.28342930262315], [1628.0, 24.5, 252.28342930262315], [0.0, 24.5, 0.0]], "data14": [[0.0, 29.5], [0.0, 29.5], [0.0, 30.5], [0.0, 30.5]], "data09": [[0.0, 24.5, 0.0], [2854.0, 24.5, 240.5112517580872], [2854.0, 25.5, 240.5112517580872], [0.0, 25.5, 0.0]], "data17": [[0.0, 32.5, 0.0], [1064.0, 32.5, 246.90131578947367], [1064.0, 33.5, 246.90131578947367], [0.0, 33.5, 0.0]], "data07": [[0.0, 22.5, 0.0], [2256.0, 22.5, 246.18627896410723], [2256.0, 23.5, 246.18627896410723], [0.0, 23.5, 0.0]], "data05": [[0.0, 20.5, 0.0], [1313.0, 20.5, 236.58478081058726], [1313.0, 21.5, 236.58478081058726], [0.0, 21.5, 0.0]]}, "axes": [{"ydomain": [15.65, 34.35], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "sharey": ["el11179140578902035928"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [7104.7, 101.0], "id": "el11179140578901912936", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578901697144", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578901696640", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578901697928", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578901698824", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578901699720", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578901700560", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578901722056", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578901722952", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578901723848", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578901724744", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578901742088", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578901742984", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578901743880", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578901744776", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578901745616", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data16", "coordinates": "data", "zorder": 1, "id": "el11179140578901767112", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data17", "coordinates": "data", "zorder": 1, "id": "el11179140578901768008", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}], "xdomain": [7104.7, 101.0], "axes": [{"tickvalues": null, "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "visible": true, "grid": {"gridOn": false}, "nticks": 17, "fontsize": 10.0, "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "scale": "linear", "position": "left"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Minuty", "coordinates": "axes", "zorder": 3, "id": "el11179140578901960016", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [15.65, 34.35]}, {"ydomain": [15.65, 34.35], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "sharey": ["el11179140578901912936"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [203.0890052356021, 266.0666392431098], "id": "el11179140578902035928", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578901770080", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578901696808", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578901795392", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578901796288", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578901797184", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578901798080", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578901819520", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578901820416", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578901821312", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578901822208", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578901823104", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578901844544", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578901845440", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578901846336", "facecolor": "#FFA500", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578901847232", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data16", "coordinates": "data", "zorder": 1, "id": "el11179140578901868672", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data17", "coordinates": "data", "zorder": 1, "id": "el11179140578901869568", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}], "xdomain": [203.0890052356021, 266.0666392431098], "axes": [{"tickvalues": [213, 223, 233, 243, 256], "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "visible": true, "grid": {"gridOn": false}, "nticks": 17, "fontsize": null, "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "scale": "linear", "position": "right"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Instat index", "coordinates": "axes", "zorder": 3, "id": "el11179140578902062976", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [15.65, 34.35]}], "height": 480.0, "id": "el11179140578902192592", "width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"ids": ["el11179140578901697144", "el11179140578901696640", "el11179140578901697928", "el11179140578901698824", "el11179140578901699720", "el11179140578901700560", "el11179140578901722056", "el11179140578901722952", "el11179140578901723848", "el11179140578901724744", "el11179140578901742088", "el11179140578901742984", "el11179140578901743880", "el11179140578901744776", "el11179140578901745616", "el11179140578901767112", "el11179140578901768008"], "type": "clickinfo", "low": 17, "wiek": {"32": [9243, 10846, 20309, 1054], "33": [23312], "17": [1095517], "18": [942673, 1095518, 433408], "19": [309143], "20": [303325, 770897], "21": [261287, 320650], "22": [216046], "23": [185473], "24": [165592, 235294], "25": [176635, 183339], "26": [168517, 179595, 83827, 114652], "27": [8449], "28": [43092], "29": [62172, 12230, 70823, 3187, 51040, 56304], "31": [67106, 8374]}, "players": {"433408": ["Konrad Kumor", 34, 213], "185473": ["Vamara Sanogo", 2256, 246], "168517": ["Michael Heinloth", 2265, 238], "12230": ["Lukas Gressak", 879, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 1181, 247], "320650": ["Callum Rzonca", 112, 194], "179595": ["Mateusz Cichocki", 1997, 249], "23312": ["Tomasz Nowak", 1064, 246], "770897": ["Olaf Nowak", 665, 235], "43092": ["Junior Torunarigha", 226, 231], "20309": ["Martin Toth", 792, 230], "309143": ["Tymoteusz Puchacz", 191, 213], "165592": ["Giorgos Mygas", 1342, 257], "9243": ["Szymon Paw\u0142owski", 2965, 253], "114652": ["Giacomo Mello", 98, 216], "303325": ["Sebastian Milewski", 1750, 234], "1095518": ["Tomasz Pietrzak", 46, 217], "51040": ["Giorgi Ivanishvili", 348, 206], "67106": ["Zarko Udovicic", 2731, 267], "176635": ["Konrad Wrzesi\u0144ski", 1857, 242], "942673": ["Roman Janicki", 46, 235], "62172": ["Adam Banasiak", 992, 236], "1054": ["Adam Kokoszka", 327, 222], "183339": ["Alexander Cristovao", 997, 237], "216046": ["Dejan Vokic", 556, 214], "1095517": ["Kacper Radkowski", 101, 251], "56304": ["David Ryndak", 333, 227], "261287": ["Tomasz Nawotka", 1201, 240], "3187": ["Giorgi Gabedava", 640, 235], "10846": ["Piotr Polczak", 2384, 239], "235294": ["Nuno Malheiro", 286, 227], "8374": ["Patrik Mraz", 2131, 241], "83827": ["Arkadiusz J\u0119drych", 1425, 247], "70823": ["Bart\u0142omiej Babiarz", 795, 232]}}, {"ids": ["el11179140578901770080", "el11179140578901696808", "el11179140578901795392", "el11179140578901796288", "el11179140578901797184", "el11179140578901798080", "el11179140578901819520", "el11179140578901820416", "el11179140578901821312", "el11179140578901822208", "el11179140578901823104", "el11179140578901844544", "el11179140578901845440", "el11179140578901846336", "el11179140578901847232", "el11179140578901868672", "el11179140578901869568"], "type": "clickinfo", "low": 17, "wiek": {"32": [9243, 10846, 20309, 1054], "33": [23312], "17": [1095517], "18": [942673, 1095518, 433408], "19": [309143], "20": [303325, 770897], "21": [261287, 320650], "22": [216046], "23": [185473], "24": [165592, 235294], "25": [176635, 183339], "26": [168517, 179595, 83827, 114652], "27": [8449], "28": [43092], "29": [62172, 12230, 70823, 3187, 51040, 56304], "31": [67106, 8374]}, "players": {"433408": ["Konrad Kumor", 34, 213], "185473": ["Vamara Sanogo", 2256, 246], "168517": ["Michael Heinloth", 2265, 238], "12230": ["Lukas Gressak", 879, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 1181, 247], "320650": ["Callum Rzonca", 112, 194], "179595": ["Mateusz Cichocki", 1997, 249], "23312": ["Tomasz Nowak", 1064, 246], "770897": ["Olaf Nowak", 665, 235], "43092": ["Junior Torunarigha", 226, 231], "20309": ["Martin Toth", 792, 230], "309143": ["Tymoteusz Puchacz", 191, 213], "165592": ["Giorgos Mygas", 1342, 257], "9243": ["Szymon Paw\u0142owski", 2965, 253], "114652": ["Giacomo Mello", 98, 216], "303325": ["Sebastian Milewski", 1750, 234], "1095518": ["Tomasz Pietrzak", 46, 217], "51040": ["Giorgi Ivanishvili", 348, 206], "67106": ["Zarko Udovicic", 2731, 267], "176635": ["Konrad Wrzesi\u0144ski", 1857, 242], "942673": ["Roman Janicki", 46, 235], "62172": ["Adam Banasiak", 992, 236], "1054": ["Adam Kokoszka", 327, 222], "183339": ["Alexander Cristovao", 997, 237], "216046": ["Dejan Vokic", 556, 214], "1095517": ["Kacper Radkowski", 101, 251], "56304": ["David Ryndak", 333, 227], "261287": ["Tomasz Nawotka", 1201, 240], "3187": ["Giorgi Gabedava", 640, 235], "10846": ["Piotr Polczak", 2384, 239], "235294": ["Nuno Malheiro", 286, 227], "8374": ["Patrik Mraz", 2131, 241], "83827": ["Arkadiusz J\u0119drych", 1425, 247], "70823": ["Bart\u0142omiej Babiarz", 795, 232]}}]});
      });
    });
}else{
    // require.js not available: dynamically load d3 & mpld3
    mpld3_load_lib("https://mpld3.github.io/js/d3.v3.min.js", function(){
         mpld3_load_lib("https://mpld3.github.io/js/mpld3.v0.3.1.dev1.js", function(){
                 
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low"];

    /*var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");*/
    var tooltip = d3.select("#lista");
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

        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                    //  table.html("<tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr>")
                                tekst+="<tbody>";
                                  for (j in wiek[i+low]) {
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
                                table.html(tekst);
                              });
                              });
    }
    
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low"];

    /*var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");*/
    var tooltip = d3.select("#lista");
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

        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                    //  table.html("<tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr>")
                                tekst+="<tbody>";
                                  for (j in wiek[i+low]) {
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
                                table.html(tekst);
                              });
                              });
    }
    
                 mpld3.draw_figure("aaa", {"data": {"data13": [[0.0, 28.5, 0.0], [3987.0, 28.5, 237.04147698533131], [3987.0, 29.5, 237.04147698533131], [0.0, 29.5, 0.0]], "data11": [[0.0, 26.5, 0.0], [1181.0, 26.5, 247.72565622353937], [1181.0, 27.5, 247.72565622353937], [0.0, 27.5, 0.0]], "data03": [[0.0, 18.5, 0.0], [191.0, 18.5, 213.0890052356021], [191.0, 19.5, 213.0890052356021], [0.0, 19.5, 0.0]], "data10": [[0.0, 25.5, 0.0], [5785.0, 25.5, 244.50764308567366], [5785.0, 26.5, 244.50764308567366], [0.0, 26.5, 0.0]], "data04": [[0.0, 19.5, 0.0], [2415.0, 19.5, 234.77726120033813], [2415.0, 20.5, 234.77726120033813], [0.0, 20.5, 0.0]], "data01": [[0.0, 16.5, 0.0], [101.0, 16.5, 251.92079207920793], [101.0, 17.5, 251.92079207920793], [0.0, 17.5, 0.0]], "data12": [[0.0, 27.5, 0.0], [226.0, 27.5, 231.8159509202454], [226.0, 28.5, 231.8159509202454], [0.0, 28.5, 0.0]], "data15": [[0.0, 30.5, 0.0], [4862.0, 30.5, 256.0666392431098], [4862.0, 31.5, 256.0666392431098], [0.0, 31.5, 0.0]], "data06": [[0.0, 21.5, 0.0], [556.0, 21.5, 214.58003766478342], [556.0, 22.5, 214.58003766478342], [0.0, 22.5, 0.0]], "data16": [[0.0, 31.5, 0.0], [6468.0, 31.5, 243.98299319727892], [6468.0, 32.5, 243.98299319727892], [0.0, 32.5, 0.0]], "data02": [[0.0, 17.5, 0.0], [126.0, 17.5, 222.73015873015873], [126.0, 18.5, 222.73015873015873], [0.0, 18.5, 0.0]], "data08": [[0.0, 23.5, 0.0], [1628.0, 23.5, 252.28342930262315], [1628.0, 24.5, 252.28342930262315], [0.0, 24.5, 0.0]], "data14": [[0.0, 29.5], [0.0, 29.5], [0.0, 30.5], [0.0, 30.5]], "data09": [[0.0, 24.5, 0.0], [2854.0, 24.5, 240.5112517580872], [2854.0, 25.5, 240.5112517580872], [0.0, 25.5, 0.0]], "data17": [[0.0, 32.5, 0.0], [1064.0, 32.5, 246.90131578947367], [1064.0, 33.5, 246.90131578947367], [0.0, 33.5, 0.0]], "data07": [[0.0, 22.5, 0.0], [2256.0, 22.5, 246.18627896410723], [2256.0, 23.5, 246.18627896410723], [0.0, 23.5, 0.0]], "data05": [[0.0, 20.5, 0.0], [1313.0, 20.5, 236.58478081058726], [1313.0, 21.5, 236.58478081058726], [0.0, 21.5, 0.0]]}, "axes": [{"ydomain": [15.65, 34.35], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "sharey": ["el11179140578902035928"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [7104.7, 101.0], "id": "el11179140578901912936", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578901697144", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578901696640", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578901697928", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578901698824", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578901699720", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578901700560", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578901722056", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578901722952", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578901723848", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578901724744", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578901742088", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578901742984", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578901743880", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578901744776", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578901745616", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data16", "coordinates": "data", "zorder": 1, "id": "el11179140578901767112", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data17", "coordinates": "data", "zorder": 1, "id": "el11179140578901768008", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}], "xdomain": [7104.7, 101.0], "axes": [{"tickvalues": null, "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "visible": true, "grid": {"gridOn": false}, "nticks": 17, "fontsize": 10.0, "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "scale": "linear", "position": "left"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Minuty", "coordinates": "axes", "zorder": 3, "id": "el11179140578901960016", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [15.65, 34.35]}, {"ydomain": [15.65, 34.35], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "sharey": ["el11179140578901912936"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [203.0890052356021, 266.0666392431098], "id": "el11179140578902035928", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578901770080", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578901696808", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578901795392", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578901796288", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578901797184", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578901798080", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578901819520", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578901820416", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578901821312", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578901822208", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578901823104", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578901844544", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578901845440", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578901846336", "facecolor": "#FFA500", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578901847232", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data16", "coordinates": "data", "zorder": 1, "id": "el11179140578901868672", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data17", "coordinates": "data", "zorder": 1, "id": "el11179140578901869568", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}], "xdomain": [203.0890052356021, 266.0666392431098], "axes": [{"tickvalues": [213, 223, 233, 243, 256], "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "visible": true, "grid": {"gridOn": false}, "nticks": 17, "fontsize": null, "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "scale": "linear", "position": "right"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Instat index", "coordinates": "axes", "zorder": 3, "id": "el11179140578902062976", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [15.65, 34.35]}], "height": 480.0, "id": "el11179140578902192592", "width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"ids": ["el11179140578901697144", "el11179140578901696640", "el11179140578901697928", "el11179140578901698824", "el11179140578901699720", "el11179140578901700560", "el11179140578901722056", "el11179140578901722952", "el11179140578901723848", "el11179140578901724744", "el11179140578901742088", "el11179140578901742984", "el11179140578901743880", "el11179140578901744776", "el11179140578901745616", "el11179140578901767112", "el11179140578901768008"], "type": "clickinfo", "low": 17, "wiek": {"32": [9243, 10846, 20309, 1054], "33": [23312], "17": [1095517], "18": [942673, 1095518, 433408], "19": [309143], "20": [303325, 770897], "21": [261287, 320650], "22": [216046], "23": [185473], "24": [165592, 235294], "25": [176635, 183339], "26": [168517, 179595, 83827, 114652], "27": [8449], "28": [43092], "29": [62172, 12230, 70823, 3187, 51040, 56304], "31": [67106, 8374]}, "players": {"433408": ["Konrad Kumor", 34, 213], "185473": ["Vamara Sanogo", 2256, 246], "168517": ["Michael Heinloth", 2265, 238], "12230": ["Lukas Gressak", 879, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 1181, 247], "320650": ["Callum Rzonca", 112, 194], "179595": ["Mateusz Cichocki", 1997, 249], "23312": ["Tomasz Nowak", 1064, 246], "770897": ["Olaf Nowak", 665, 235], "43092": ["Junior Torunarigha", 226, 231], "20309": ["Martin Toth", 792, 230], "309143": ["Tymoteusz Puchacz", 191, 213], "165592": ["Giorgos Mygas", 1342, 257], "9243": ["Szymon Paw\u0142owski", 2965, 253], "114652": ["Giacomo Mello", 98, 216], "303325": ["Sebastian Milewski", 1750, 234], "1095518": ["Tomasz Pietrzak", 46, 217], "51040": ["Giorgi Ivanishvili", 348, 206], "67106": ["Zarko Udovicic", 2731, 267], "176635": ["Konrad Wrzesi\u0144ski", 1857, 242], "942673": ["Roman Janicki", 46, 235], "62172": ["Adam Banasiak", 992, 236], "1054": ["Adam Kokoszka", 327, 222], "183339": ["Alexander Cristovao", 997, 237], "216046": ["Dejan Vokic", 556, 214], "1095517": ["Kacper Radkowski", 101, 251], "56304": ["David Ryndak", 333, 227], "261287": ["Tomasz Nawotka", 1201, 240], "3187": ["Giorgi Gabedava", 640, 235], "10846": ["Piotr Polczak", 2384, 239], "235294": ["Nuno Malheiro", 286, 227], "8374": ["Patrik Mraz", 2131, 241], "83827": ["Arkadiusz J\u0119drych", 1425, 247], "70823": ["Bart\u0142omiej Babiarz", 795, 232]}}, {"ids": ["el11179140578901770080", "el11179140578901696808", "el11179140578901795392", "el11179140578901796288", "el11179140578901797184", "el11179140578901798080", "el11179140578901819520", "el11179140578901820416", "el11179140578901821312", "el11179140578901822208", "el11179140578901823104", "el11179140578901844544", "el11179140578901845440", "el11179140578901846336", "el11179140578901847232", "el11179140578901868672", "el11179140578901869568"], "type": "clickinfo", "low": 17, "wiek": {"32": [9243, 10846, 20309, 1054], "33": [23312], "17": [1095517], "18": [942673, 1095518, 433408], "19": [309143], "20": [303325, 770897], "21": [261287, 320650], "22": [216046], "23": [185473], "24": [165592, 235294], "25": [176635, 183339], "26": [168517, 179595, 83827, 114652], "27": [8449], "28": [43092], "29": [62172, 12230, 70823, 3187, 51040, 56304], "31": [67106, 8374]}, "players": {"433408": ["Konrad Kumor", 34, 213], "185473": ["Vamara Sanogo", 2256, 246], "168517": ["Michael Heinloth", 2265, 238], "12230": ["Lukas Gressak", 879, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 1181, 247], "320650": ["Callum Rzonca", 112, 194], "179595": ["Mateusz Cichocki", 1997, 249], "23312": ["Tomasz Nowak", 1064, 246], "770897": ["Olaf Nowak", 665, 235], "43092": ["Junior Torunarigha", 226, 231], "20309": ["Martin Toth", 792, 230], "309143": ["Tymoteusz Puchacz", 191, 213], "165592": ["Giorgos Mygas", 1342, 257], "9243": ["Szymon Paw\u0142owski", 2965, 253], "114652": ["Giacomo Mello", 98, 216], "303325": ["Sebastian Milewski", 1750, 234], "1095518": ["Tomasz Pietrzak", 46, 217], "51040": ["Giorgi Ivanishvili", 348, 206], "67106": ["Zarko Udovicic", 2731, 267], "176635": ["Konrad Wrzesi\u0144ski", 1857, 242], "942673": ["Roman Janicki", 46, 235], "62172": ["Adam Banasiak", 992, 236], "1054": ["Adam Kokoszka", 327, 222], "183339": ["Alexander Cristovao", 997, 237], "216046": ["Dejan Vokic", 556, 214], "1095517": ["Kacper Radkowski", 101, 251], "56304": ["David Ryndak", 333, 227], "261287": ["Tomasz Nawotka", 1201, 240], "3187": ["Giorgi Gabedava", 640, 235], "10846": ["Piotr Polczak", 2384, 239], "235294": ["Nuno Malheiro", 286, 227], "8374": ["Patrik Mraz", 2131, 241], "83827": ["Arkadiusz J\u0119drych", 1425, 247], "70823": ["Bart\u0142omiej Babiarz", 795, 232]}}]});
            })
         });
}
</script>
