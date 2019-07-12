


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
    
       mpld3.draw_figure("aaa", {"data": {"data13": [[0.0, 30.5, 0.0], [3338.0, 30.5, 276.59272617974153], [3338.0, 31.5, 276.59272617974153], [0.0, 31.5, 0.0]], "data11": [[0.0, 28.5, 0.0], [116.0, 28.5, 234.58510638297872], [116.0, 29.5, 234.58510638297872], [0.0, 29.5, 0.0]], "data03": [[0.0, 20.5, 0.0], [2333.0, 20.5, 264.35843373493975], [2333.0, 21.5, 264.35843373493975], [0.0, 21.5, 0.0]], "data10": [[0.0, 27.5, 0.0], [7351.0, 27.5, 264.59046321525886], [7351.0, 28.5, 264.59046321525886], [0.0, 28.5, 0.0]], "data04": [[0.0, 21.5, 0.0], [1037.0, 21.5, 249.5834136933462], [1037.0, 22.5, 249.5834136933462], [0.0, 22.5, 0.0]], "data01": [[0.0, 18.5, 0.0], [3715.0, 18.5, 251.51855865619072], [3715.0, 19.5, 251.51855865619072], [0.0, 19.5, 0.0]], "data12": [[0.0, 29.5, 0.0], [2245.0, 29.5, 263.1999105545617], [2245.0, 30.5, 263.1999105545617], [0.0, 30.5, 0.0]], "data15": [[0.0, 33.5, 0.0], [212.0, 33.5, 223.9100529100529], [212.0, 34.5, 223.9100529100529], [0.0, 34.5, 0.0]], "data06": [[0.0, 23.5, 0.0], [927.0, 23.5, 275.3383947939262], [927.0, 24.5, 275.3383947939262], [0.0, 24.5, 0.0]], "data16": [[0.0, 34.5, 0.0], [606.0, 34.5, 263.795], [606.0, 35.5, 263.795], [0.0, 35.5, 0.0]], "data02": [[0.0, 19.5, 0.0], [515.0, 19.5, 257.5203883495146], [515.0, 20.5, 257.5203883495146], [0.0, 20.5, 0.0]], "data08": [[0.0, 25.5, 32.5], [0.0, 25.5, 32.5], [0.0, 26.5, 33.5], [0.0, 26.5, 33.5]], "data14": [[0.0, 31.5, 0.0], [1039.0, 31.5, 252.74975657254137], [1039.0, 32.5, 252.74975657254137], [0.0, 32.5, 0.0]], "data09": [[0.0, 26.5, 0.0], [6026.0, 26.5, 272.40823099900433], [6026.0, 27.5, 272.40823099900433], [0.0, 27.5, 0.0]], "data07": [[0.0, 24.5, 0.0], [3642.0, 24.5, 268.96457990115323], [3642.0, 25.5, 268.96457990115323], [0.0, 25.5, 0.0]], "data05": [[0.0, 22.5, 0.0], [2534.0, 22.5, 262.5852407261247], [2534.0, 23.5, 262.5852407261247], [0.0, 23.5, 0.0]]}, "axes": [{"ydomain": [17.65, 36.35], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "sharey": ["el11179140578907058360"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [8074.5, 116.0], "id": "el11179140578907378296", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578907098304", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578906611384", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578907082312", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578907006288", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578906937664", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578906925320", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578907284256", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578907263104", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578907250816", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578907225392", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578907204464", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578907195600", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578907148584", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578907618832", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578908394496", "facecolor": "#FF0000", "xindex": 0, "yindex": 2}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578908128200", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data16", "coordinates": "data", "zorder": 1, "id": "el11179140578907820440", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}], "xdomain": [8074.5, 116.0], "axes": [{"tickvalues": null, "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 6, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "visible": true, "grid": {"gridOn": false}, "nticks": 17, "fontsize": 10.0, "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "scale": "linear", "position": "left"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Minuty", "coordinates": "axes", "zorder": 3, "id": "el11179140578906907984", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [17.65, 36.35]}, {"ydomain": [17.65, 36.35], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "sharey": ["el11179140578907378296"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [213.9100529100529, 286.59272617974153], "id": "el11179140578907058360", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578906679616", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578907112728", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578906680288", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578906681184", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578906751776", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578906752672", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578906753568", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578906754464", "facecolor": "#FFA500", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578906775904", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578906776800", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578906777696", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578906778592", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578906779488", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578906800928", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578906801824", "facecolor": "#FFA500", "xindex": 0, "yindex": 2}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578906802720", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data16", "coordinates": "data", "zorder": 1, "id": "el11179140578906803616", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}], "xdomain": [213.9100529100529, 286.59272617974153], "axes": [{"tickvalues": [223, 236, 249, 262, 276], "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "visible": true, "grid": {"gridOn": false}, "nticks": 17, "fontsize": null, "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "scale": "linear", "position": "right"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Instat index", "coordinates": "axes", "zorder": 3, "id": "el11179140578907060768", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [17.65, 36.35]}], "height": 480.0, "id": "el11179140578907778352", "width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"ids": ["el11179140578907098304", "el11179140578906611384", "el11179140578907082312", "el11179140578907006288", "el11179140578906937664", "el11179140578906925320", "el11179140578907284256", "el11179140578907263104", "el11179140578907250816", "el11179140578907225392", "el11179140578907204464", "el11179140578907195600", "el11179140578907148584", "el11179140578907618832", "el11179140578908394496", "el11179140578908128200", "el11179140578907820440"], "type": "clickinfo", "low": 19, "wiek": {"32": [9140], "34": [16967], "35": [16952, 4188], "19": [309138, 366283], "20": [362434, 241199], "21": [169836, 362437], "22": [169832], "23": [93242, 259234], "24": [162545, 70349], "25": [97365, 158659], "27": [23108, 16969, 27944, 19790], "28": [121630, 1655, 26136, 160963], "29": [18369], "30": [10038], "31": [16956, 23224, 1044]}, "players": {"18369": ["Cristian Pasquato", 116, 234], "362434": ["Mateusz \u017byro", 261, 269], "160963": ["Kante", 604, 226], "23108": ["Marko Vesovic", 2373, 281], "362437": ["Konrad Michalak", 45, 236], "16967": ["Miroslav Radovic", 212, 223], "16969": ["Micha\u0142 Kucharczyk", 2000, 257], "366283": ["Sandro Kulenovic", 811, 246], "70349": ["Chris Philipps", 230, 259], "19790": ["Salvador Agra", 172, 222], "23224": ["Krzysztof M\u0105czy\u0144ski", 274, 255], "309138": ["Sebastian Szyma\u0144ski", 2904, 252], "158659": ["Luis Rocha", 986, 269], "1044": ["Micha\u0142 Pazdan", 79, 241], "97365": ["Cafu", 2656, 268], "26136": ["Domagoj Antolic", 1904, 265], "4188": ["Eduardo", 18, 228], "121630": ["Carlos Lopez", 2765, 268], "27944": ["William Remy", 1481, 284], "259234": ["Jaroslaw Niezgoda", 175, 214], "169832": ["Pawe\u0142 Stolarski", 1037, 249], "169836": ["Mateusz Wieteska", 2288, 264], "241199": ["Mateusz Ho\u0142ownia", 254, 245], "162545": ["Iuri Medeiros", 697, 280], "9140": ["Kasper Hamalainen", 1039, 252], "10038": ["Adam Hlousek", 2245, 263], "1655": ["Andre Martins", 2078, 269], "16952": ["Inaki Astiz", 588, 264], "93242": ["Dominik Nagy", 2359, 266], "16956": ["Artur J\u0119drzejczyk", 2985, 279]}}, {"ids": ["el11179140578906679616", "el11179140578907112728", "el11179140578906680288", "el11179140578906681184", "el11179140578906751776", "el11179140578906752672", "el11179140578906753568", "el11179140578906754464", "el11179140578906775904", "el11179140578906776800", "el11179140578906777696", "el11179140578906778592", "el11179140578906779488", "el11179140578906800928", "el11179140578906801824", "el11179140578906802720", "el11179140578906803616"], "type": "clickinfo", "low": 19, "wiek": {"32": [9140], "34": [16967], "35": [16952, 4188], "19": [309138, 366283], "20": [362434, 241199], "21": [169836, 362437], "22": [169832], "23": [93242, 259234], "24": [162545, 70349], "25": [97365, 158659], "27": [23108, 16969, 27944, 19790], "28": [121630, 1655, 26136, 160963], "29": [18369], "30": [10038], "31": [16956, 23224, 1044]}, "players": {"18369": ["Cristian Pasquato", 116, 234], "362434": ["Mateusz \u017byro", 261, 269], "160963": ["Kante", 604, 226], "23108": ["Marko Vesovic", 2373, 281], "362437": ["Konrad Michalak", 45, 236], "16967": ["Miroslav Radovic", 212, 223], "16969": ["Micha\u0142 Kucharczyk", 2000, 257], "366283": ["Sandro Kulenovic", 811, 246], "70349": ["Chris Philipps", 230, 259], "19790": ["Salvador Agra", 172, 222], "23224": ["Krzysztof M\u0105czy\u0144ski", 274, 255], "309138": ["Sebastian Szyma\u0144ski", 2904, 252], "158659": ["Luis Rocha", 986, 269], "1044": ["Micha\u0142 Pazdan", 79, 241], "97365": ["Cafu", 2656, 268], "26136": ["Domagoj Antolic", 1904, 265], "4188": ["Eduardo", 18, 228], "121630": ["Carlos Lopez", 2765, 268], "27944": ["William Remy", 1481, 284], "259234": ["Jaroslaw Niezgoda", 175, 214], "169832": ["Pawe\u0142 Stolarski", 1037, 249], "169836": ["Mateusz Wieteska", 2288, 264], "241199": ["Mateusz Ho\u0142ownia", 254, 245], "162545": ["Iuri Medeiros", 697, 280], "9140": ["Kasper Hamalainen", 1039, 252], "10038": ["Adam Hlousek", 2245, 263], "1655": ["Andre Martins", 2078, 269], "16952": ["Inaki Astiz", 588, 264], "93242": ["Dominik Nagy", 2359, 266], "16956": ["Artur J\u0119drzejczyk", 2985, 279]}}]});
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
    
         mpld3.draw_figure("aaa", {"data": {"data13": [[0.0, 30.5, 0.0], [3338.0, 30.5, 276.59272617974153], [3338.0, 31.5, 276.59272617974153], [0.0, 31.5, 0.0]], "data11": [[0.0, 28.5, 0.0], [116.0, 28.5, 234.58510638297872], [116.0, 29.5, 234.58510638297872], [0.0, 29.5, 0.0]], "data03": [[0.0, 20.5, 0.0], [2333.0, 20.5, 264.35843373493975], [2333.0, 21.5, 264.35843373493975], [0.0, 21.5, 0.0]], "data10": [[0.0, 27.5, 0.0], [7351.0, 27.5, 264.59046321525886], [7351.0, 28.5, 264.59046321525886], [0.0, 28.5, 0.0]], "data04": [[0.0, 21.5, 0.0], [1037.0, 21.5, 249.5834136933462], [1037.0, 22.5, 249.5834136933462], [0.0, 22.5, 0.0]], "data01": [[0.0, 18.5, 0.0], [3715.0, 18.5, 251.51855865619072], [3715.0, 19.5, 251.51855865619072], [0.0, 19.5, 0.0]], "data12": [[0.0, 29.5, 0.0], [2245.0, 29.5, 263.1999105545617], [2245.0, 30.5, 263.1999105545617], [0.0, 30.5, 0.0]], "data15": [[0.0, 33.5, 0.0], [212.0, 33.5, 223.9100529100529], [212.0, 34.5, 223.9100529100529], [0.0, 34.5, 0.0]], "data06": [[0.0, 23.5, 0.0], [927.0, 23.5, 275.3383947939262], [927.0, 24.5, 275.3383947939262], [0.0, 24.5, 0.0]], "data16": [[0.0, 34.5, 0.0], [606.0, 34.5, 263.795], [606.0, 35.5, 263.795], [0.0, 35.5, 0.0]], "data02": [[0.0, 19.5, 0.0], [515.0, 19.5, 257.5203883495146], [515.0, 20.5, 257.5203883495146], [0.0, 20.5, 0.0]], "data08": [[0.0, 25.5, 32.5], [0.0, 25.5, 32.5], [0.0, 26.5, 33.5], [0.0, 26.5, 33.5]], "data14": [[0.0, 31.5, 0.0], [1039.0, 31.5, 252.74975657254137], [1039.0, 32.5, 252.74975657254137], [0.0, 32.5, 0.0]], "data09": [[0.0, 26.5, 0.0], [6026.0, 26.5, 272.40823099900433], [6026.0, 27.5, 272.40823099900433], [0.0, 27.5, 0.0]], "data07": [[0.0, 24.5, 0.0], [3642.0, 24.5, 268.96457990115323], [3642.0, 25.5, 268.96457990115323], [0.0, 25.5, 0.0]], "data05": [[0.0, 22.5, 0.0], [2534.0, 22.5, 262.5852407261247], [2534.0, 23.5, 262.5852407261247], [0.0, 23.5, 0.0]]}, "axes": [{"ydomain": [17.65, 36.35], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "sharey": ["el11179140578907058360"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [8074.5, 116.0], "id": "el11179140578907378296", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578907098304", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578906611384", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578907082312", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578907006288", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578906937664", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578906925320", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578907284256", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578907263104", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578907250816", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578907225392", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578907204464", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578907195600", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578907148584", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578907618832", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578908394496", "facecolor": "#FF0000", "xindex": 0, "yindex": 2}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578908128200", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data16", "coordinates": "data", "zorder": 1, "id": "el11179140578907820440", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}], "xdomain": [8074.5, 116.0], "axes": [{"tickvalues": null, "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 6, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "visible": true, "grid": {"gridOn": false}, "nticks": 17, "fontsize": 10.0, "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "scale": "linear", "position": "left"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Minuty", "coordinates": "axes", "zorder": 3, "id": "el11179140578906907984", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [17.65, 36.35]}, {"ydomain": [17.65, 36.35], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "sharey": ["el11179140578907378296"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [213.9100529100529, 286.59272617974153], "id": "el11179140578907058360", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578906679616", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578907112728", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578906680288", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578906681184", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578906751776", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578906752672", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578906753568", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578906754464", "facecolor": "#FFA500", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578906775904", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578906776800", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578906777696", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578906778592", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578906779488", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578906800928", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578906801824", "facecolor": "#FFA500", "xindex": 0, "yindex": 2}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578906802720", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data16", "coordinates": "data", "zorder": 1, "id": "el11179140578906803616", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}], "xdomain": [213.9100529100529, 286.59272617974153], "axes": [{"tickvalues": [223, 236, 249, 262, 276], "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "visible": true, "grid": {"gridOn": false}, "nticks": 17, "fontsize": null, "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "scale": "linear", "position": "right"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Instat index", "coordinates": "axes", "zorder": 3, "id": "el11179140578907060768", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [17.65, 36.35]}], "height": 480.0, "id": "el11179140578907778352", "width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"ids": ["el11179140578907098304", "el11179140578906611384", "el11179140578907082312", "el11179140578907006288", "el11179140578906937664", "el11179140578906925320", "el11179140578907284256", "el11179140578907263104", "el11179140578907250816", "el11179140578907225392", "el11179140578907204464", "el11179140578907195600", "el11179140578907148584", "el11179140578907618832", "el11179140578908394496", "el11179140578908128200", "el11179140578907820440"], "type": "clickinfo", "low": 19, "wiek": {"32": [9140], "34": [16967], "35": [16952, 4188], "19": [309138, 366283], "20": [362434, 241199], "21": [169836, 362437], "22": [169832], "23": [93242, 259234], "24": [162545, 70349], "25": [97365, 158659], "27": [23108, 16969, 27944, 19790], "28": [121630, 1655, 26136, 160963], "29": [18369], "30": [10038], "31": [16956, 23224, 1044]}, "players": {"18369": ["Cristian Pasquato", 116, 234], "362434": ["Mateusz \u017byro", 261, 269], "160963": ["Kante", 604, 226], "23108": ["Marko Vesovic", 2373, 281], "362437": ["Konrad Michalak", 45, 236], "16967": ["Miroslav Radovic", 212, 223], "16969": ["Micha\u0142 Kucharczyk", 2000, 257], "366283": ["Sandro Kulenovic", 811, 246], "70349": ["Chris Philipps", 230, 259], "19790": ["Salvador Agra", 172, 222], "23224": ["Krzysztof M\u0105czy\u0144ski", 274, 255], "309138": ["Sebastian Szyma\u0144ski", 2904, 252], "158659": ["Luis Rocha", 986, 269], "1044": ["Micha\u0142 Pazdan", 79, 241], "97365": ["Cafu", 2656, 268], "26136": ["Domagoj Antolic", 1904, 265], "4188": ["Eduardo", 18, 228], "121630": ["Carlos Lopez", 2765, 268], "27944": ["William Remy", 1481, 284], "259234": ["Jaroslaw Niezgoda", 175, 214], "169832": ["Pawe\u0142 Stolarski", 1037, 249], "169836": ["Mateusz Wieteska", 2288, 264], "241199": ["Mateusz Ho\u0142ownia", 254, 245], "162545": ["Iuri Medeiros", 697, 280], "9140": ["Kasper Hamalainen", 1039, 252], "10038": ["Adam Hlousek", 2245, 263], "1655": ["Andre Martins", 2078, 269], "16952": ["Inaki Astiz", 588, 264], "93242": ["Dominik Nagy", 2359, 266], "16956": ["Artur J\u0119drzejczyk", 2985, 279]}}, {"ids": ["el11179140578906679616", "el11179140578907112728", "el11179140578906680288", "el11179140578906681184", "el11179140578906751776", "el11179140578906752672", "el11179140578906753568", "el11179140578906754464", "el11179140578906775904", "el11179140578906776800", "el11179140578906777696", "el11179140578906778592", "el11179140578906779488", "el11179140578906800928", "el11179140578906801824", "el11179140578906802720", "el11179140578906803616"], "type": "clickinfo", "low": 19, "wiek": {"32": [9140], "34": [16967], "35": [16952, 4188], "19": [309138, 366283], "20": [362434, 241199], "21": [169836, 362437], "22": [169832], "23": [93242, 259234], "24": [162545, 70349], "25": [97365, 158659], "27": [23108, 16969, 27944, 19790], "28": [121630, 1655, 26136, 160963], "29": [18369], "30": [10038], "31": [16956, 23224, 1044]}, "players": {"18369": ["Cristian Pasquato", 116, 234], "362434": ["Mateusz \u017byro", 261, 269], "160963": ["Kante", 604, 226], "23108": ["Marko Vesovic", 2373, 281], "362437": ["Konrad Michalak", 45, 236], "16967": ["Miroslav Radovic", 212, 223], "16969": ["Micha\u0142 Kucharczyk", 2000, 257], "366283": ["Sandro Kulenovic", 811, 246], "70349": ["Chris Philipps", 230, 259], "19790": ["Salvador Agra", 172, 222], "23224": ["Krzysztof M\u0105czy\u0144ski", 274, 255], "309138": ["Sebastian Szyma\u0144ski", 2904, 252], "158659": ["Luis Rocha", 986, 269], "1044": ["Micha\u0142 Pazdan", 79, 241], "97365": ["Cafu", 2656, 268], "26136": ["Domagoj Antolic", 1904, 265], "4188": ["Eduardo", 18, 228], "121630": ["Carlos Lopez", 2765, 268], "27944": ["William Remy", 1481, 284], "259234": ["Jaroslaw Niezgoda", 175, 214], "169832": ["Pawe\u0142 Stolarski", 1037, 249], "169836": ["Mateusz Wieteska", 2288, 264], "241199": ["Mateusz Ho\u0142ownia", 254, 245], "162545": ["Iuri Medeiros", 697, 280], "9140": ["Kasper Hamalainen", 1039, 252], "10038": ["Adam Hlousek", 2245, 263], "1655": ["Andre Martins", 2078, 269], "16952": ["Inaki Astiz", 588, 264], "93242": ["Dominik Nagy", 2359, 266], "16956": ["Artur J\u0119drzejczyk", 2985, 279]}}]});
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
    
                 mpld3.draw_figure("aaa", {"data": {"data13": [[0.0, 30.5, 0.0], [3338.0, 30.5, 276.59272617974153], [3338.0, 31.5, 276.59272617974153], [0.0, 31.5, 0.0]], "data11": [[0.0, 28.5, 0.0], [116.0, 28.5, 234.58510638297872], [116.0, 29.5, 234.58510638297872], [0.0, 29.5, 0.0]], "data03": [[0.0, 20.5, 0.0], [2333.0, 20.5, 264.35843373493975], [2333.0, 21.5, 264.35843373493975], [0.0, 21.5, 0.0]], "data10": [[0.0, 27.5, 0.0], [7351.0, 27.5, 264.59046321525886], [7351.0, 28.5, 264.59046321525886], [0.0, 28.5, 0.0]], "data04": [[0.0, 21.5, 0.0], [1037.0, 21.5, 249.5834136933462], [1037.0, 22.5, 249.5834136933462], [0.0, 22.5, 0.0]], "data01": [[0.0, 18.5, 0.0], [3715.0, 18.5, 251.51855865619072], [3715.0, 19.5, 251.51855865619072], [0.0, 19.5, 0.0]], "data12": [[0.0, 29.5, 0.0], [2245.0, 29.5, 263.1999105545617], [2245.0, 30.5, 263.1999105545617], [0.0, 30.5, 0.0]], "data15": [[0.0, 33.5, 0.0], [212.0, 33.5, 223.9100529100529], [212.0, 34.5, 223.9100529100529], [0.0, 34.5, 0.0]], "data06": [[0.0, 23.5, 0.0], [927.0, 23.5, 275.3383947939262], [927.0, 24.5, 275.3383947939262], [0.0, 24.5, 0.0]], "data16": [[0.0, 34.5, 0.0], [606.0, 34.5, 263.795], [606.0, 35.5, 263.795], [0.0, 35.5, 0.0]], "data02": [[0.0, 19.5, 0.0], [515.0, 19.5, 257.5203883495146], [515.0, 20.5, 257.5203883495146], [0.0, 20.5, 0.0]], "data08": [[0.0, 25.5, 32.5], [0.0, 25.5, 32.5], [0.0, 26.5, 33.5], [0.0, 26.5, 33.5]], "data14": [[0.0, 31.5, 0.0], [1039.0, 31.5, 252.74975657254137], [1039.0, 32.5, 252.74975657254137], [0.0, 32.5, 0.0]], "data09": [[0.0, 26.5, 0.0], [6026.0, 26.5, 272.40823099900433], [6026.0, 27.5, 272.40823099900433], [0.0, 27.5, 0.0]], "data07": [[0.0, 24.5, 0.0], [3642.0, 24.5, 268.96457990115323], [3642.0, 25.5, 268.96457990115323], [0.0, 25.5, 0.0]], "data05": [[0.0, 22.5, 0.0], [2534.0, 22.5, 262.5852407261247], [2534.0, 23.5, 262.5852407261247], [0.0, 23.5, 0.0]]}, "axes": [{"ydomain": [17.65, 36.35], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "sharey": ["el11179140578907058360"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [8074.5, 116.0], "id": "el11179140578907378296", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578907098304", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578906611384", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578907082312", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578907006288", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578906937664", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578906925320", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578907284256", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578907263104", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578907250816", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578907225392", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578907204464", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578907195600", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578907148584", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578907618832", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578908394496", "facecolor": "#FF0000", "xindex": 0, "yindex": 2}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578908128200", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data16", "coordinates": "data", "zorder": 1, "id": "el11179140578907820440", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}], "xdomain": [8074.5, 116.0], "axes": [{"tickvalues": null, "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 6, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "visible": true, "grid": {"gridOn": false}, "nticks": 17, "fontsize": 10.0, "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "scale": "linear", "position": "left"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Minuty", "coordinates": "axes", "zorder": 3, "id": "el11179140578906907984", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [17.65, 36.35]}, {"ydomain": [17.65, 36.35], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "sharey": ["el11179140578907378296"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [213.9100529100529, 286.59272617974153], "id": "el11179140578907058360", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578906679616", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578907112728", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578906680288", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578906681184", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578906751776", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578906752672", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578906753568", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578906754464", "facecolor": "#FFA500", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578906775904", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578906776800", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578906777696", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578906778592", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578906779488", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578906800928", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578906801824", "facecolor": "#FFA500", "xindex": 0, "yindex": 2}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578906802720", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data16", "coordinates": "data", "zorder": 1, "id": "el11179140578906803616", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}], "xdomain": [213.9100529100529, 286.59272617974153], "axes": [{"tickvalues": [223, 236, 249, 262, 276], "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "visible": true, "grid": {"gridOn": false}, "nticks": 17, "fontsize": null, "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "scale": "linear", "position": "right"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Instat index", "coordinates": "axes", "zorder": 3, "id": "el11179140578907060768", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [17.65, 36.35]}], "height": 480.0, "id": "el11179140578907778352", "width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"ids": ["el11179140578907098304", "el11179140578906611384", "el11179140578907082312", "el11179140578907006288", "el11179140578906937664", "el11179140578906925320", "el11179140578907284256", "el11179140578907263104", "el11179140578907250816", "el11179140578907225392", "el11179140578907204464", "el11179140578907195600", "el11179140578907148584", "el11179140578907618832", "el11179140578908394496", "el11179140578908128200", "el11179140578907820440"], "type": "clickinfo", "low": 19, "wiek": {"32": [9140], "34": [16967], "35": [16952, 4188], "19": [309138, 366283], "20": [362434, 241199], "21": [169836, 362437], "22": [169832], "23": [93242, 259234], "24": [162545, 70349], "25": [97365, 158659], "27": [23108, 16969, 27944, 19790], "28": [121630, 1655, 26136, 160963], "29": [18369], "30": [10038], "31": [16956, 23224, 1044]}, "players": {"18369": ["Cristian Pasquato", 116, 234], "362434": ["Mateusz \u017byro", 261, 269], "160963": ["Kante", 604, 226], "23108": ["Marko Vesovic", 2373, 281], "362437": ["Konrad Michalak", 45, 236], "16967": ["Miroslav Radovic", 212, 223], "16969": ["Micha\u0142 Kucharczyk", 2000, 257], "366283": ["Sandro Kulenovic", 811, 246], "70349": ["Chris Philipps", 230, 259], "19790": ["Salvador Agra", 172, 222], "23224": ["Krzysztof M\u0105czy\u0144ski", 274, 255], "309138": ["Sebastian Szyma\u0144ski", 2904, 252], "158659": ["Luis Rocha", 986, 269], "1044": ["Micha\u0142 Pazdan", 79, 241], "97365": ["Cafu", 2656, 268], "26136": ["Domagoj Antolic", 1904, 265], "4188": ["Eduardo", 18, 228], "121630": ["Carlos Lopez", 2765, 268], "27944": ["William Remy", 1481, 284], "259234": ["Jaroslaw Niezgoda", 175, 214], "169832": ["Pawe\u0142 Stolarski", 1037, 249], "169836": ["Mateusz Wieteska", 2288, 264], "241199": ["Mateusz Ho\u0142ownia", 254, 245], "162545": ["Iuri Medeiros", 697, 280], "9140": ["Kasper Hamalainen", 1039, 252], "10038": ["Adam Hlousek", 2245, 263], "1655": ["Andre Martins", 2078, 269], "16952": ["Inaki Astiz", 588, 264], "93242": ["Dominik Nagy", 2359, 266], "16956": ["Artur J\u0119drzejczyk", 2985, 279]}}, {"ids": ["el11179140578906679616", "el11179140578907112728", "el11179140578906680288", "el11179140578906681184", "el11179140578906751776", "el11179140578906752672", "el11179140578906753568", "el11179140578906754464", "el11179140578906775904", "el11179140578906776800", "el11179140578906777696", "el11179140578906778592", "el11179140578906779488", "el11179140578906800928", "el11179140578906801824", "el11179140578906802720", "el11179140578906803616"], "type": "clickinfo", "low": 19, "wiek": {"32": [9140], "34": [16967], "35": [16952, 4188], "19": [309138, 366283], "20": [362434, 241199], "21": [169836, 362437], "22": [169832], "23": [93242, 259234], "24": [162545, 70349], "25": [97365, 158659], "27": [23108, 16969, 27944, 19790], "28": [121630, 1655, 26136, 160963], "29": [18369], "30": [10038], "31": [16956, 23224, 1044]}, "players": {"18369": ["Cristian Pasquato", 116, 234], "362434": ["Mateusz \u017byro", 261, 269], "160963": ["Kante", 604, 226], "23108": ["Marko Vesovic", 2373, 281], "362437": ["Konrad Michalak", 45, 236], "16967": ["Miroslav Radovic", 212, 223], "16969": ["Micha\u0142 Kucharczyk", 2000, 257], "366283": ["Sandro Kulenovic", 811, 246], "70349": ["Chris Philipps", 230, 259], "19790": ["Salvador Agra", 172, 222], "23224": ["Krzysztof M\u0105czy\u0144ski", 274, 255], "309138": ["Sebastian Szyma\u0144ski", 2904, 252], "158659": ["Luis Rocha", 986, 269], "1044": ["Micha\u0142 Pazdan", 79, 241], "97365": ["Cafu", 2656, 268], "26136": ["Domagoj Antolic", 1904, 265], "4188": ["Eduardo", 18, 228], "121630": ["Carlos Lopez", 2765, 268], "27944": ["William Remy", 1481, 284], "259234": ["Jaroslaw Niezgoda", 175, 214], "169832": ["Pawe\u0142 Stolarski", 1037, 249], "169836": ["Mateusz Wieteska", 2288, 264], "241199": ["Mateusz Ho\u0142ownia", 254, 245], "162545": ["Iuri Medeiros", 697, 280], "9140": ["Kasper Hamalainen", 1039, 252], "10038": ["Adam Hlousek", 2245, 263], "1655": ["Andre Martins", 2078, 269], "16952": ["Inaki Astiz", 588, 264], "93242": ["Dominik Nagy", 2359, 266], "16956": ["Artur J\u0119drzejczyk", 2985, 279]}}]});
            })
         });
}
</script>
