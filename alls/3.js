

<style>

</style>

<div id="aaa"></div>
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
    
       mpld3.draw_figure("aaa", {"data": {"data13": [[0.0, 30.5, 0.0], [1421.0, 30.5, 245.83356840620593], [1421.0, 31.5, 245.83356840620593], [0.0, 31.5, 0.0]], "data11": [[0.0, 27.5, 0.0], [619.0, 27.5, 245.12437810945275], [619.0, 28.5, 245.12437810945275], [0.0, 28.5, 0.0]], "data03": [[0.0, 19.5, 0.0], [1752.0, 19.5, 254.40207972270363], [1752.0, 20.5, 254.40207972270363], [0.0, 20.5, 0.0]], "data10": [[0.0, 26.5, 0.0], [4840.0, 26.5, 268.4454356846473], [4840.0, 27.5, 268.4454356846473], [0.0, 27.5, 0.0]], "data04": [[0.0, 20.5, 0.0], [500.0, 20.5, 233.7701612903226], [500.0, 21.5, 233.7701612903226], [0.0, 21.5, 0.0]], "data01": [[0.0, 17.5, 0.0], [3158.0, 17.5, 258.8040777317617], [3158.0, 18.5, 258.8040777317617], [0.0, 18.5, 0.0]], "data12": [[0.0, 28.5, 0.0], [648.0, 28.5, 242.1466049382716], [648.0, 29.5, 242.1466049382716], [0.0, 29.5, 0.0]], "data06": [[0.0, 22.5, 0.0], [9474.0, 22.5, 260.56156854455133], [9474.0, 23.5, 260.56156854455133], [0.0, 23.5, 0.0]], "data02": [[0.0, 18.5, 29.5], [0.0, 18.5, 29.5], [0.0, 19.5, 30.5], [0.0, 19.5, 30.5]], "data08": [[0.0, 24.5, 0.0], [2836.0, 24.5, 266.7842031029619], [2836.0, 25.5, 266.7842031029619], [0.0, 25.5, 0.0]], "data14": [[0.0, 31.5, 0.0], [4604.0, 31.5, 271.6970026064292], [4604.0, 32.5, 271.6970026064292], [0.0, 32.5, 0.0]], "data09": [[0.0, 25.5, 0.0], [1738.0, 25.5, 252.37067448680352], [1738.0, 26.5, 252.37067448680352], [0.0, 26.5, 0.0]], "data07": [[0.0, 23.5, 0.0], [1977.0, 23.5, 253.99744897959184], [1977.0, 24.5, 253.99744897959184], [0.0, 24.5, 0.0]], "data05": [[0.0, 21.5, 0.0], [1924.0, 21.5, 263.24376299376297], [1924.0, 22.5, 263.24376299376297], [0.0, 22.5, 0.0]]}, "axes": [{"ydomain": [16.75, 33.25], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "sharey": ["el11179140578912018560"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [10371.4, 500.0], "id": "el11179140578912345896", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578911645936", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578911613784", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578911646720", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578911647616", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578911648512", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578911649408", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578911670848", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578911671744", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578911672640", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578911673536", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578911694976", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578911695872", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578911696768", "facecolor": "#FF0000", "xindex": 0, "yindex": 2}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578911697664", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578911698560", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}], "xdomain": [10371.4, 500.0], "axes": [{"tickvalues": null, "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 7, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "visible": true, "grid": {"gridOn": false}, "nticks": 15, "fontsize": 10.0, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "scale": "linear", "position": "left"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Minuty", "coordinates": "axes", "zorder": 3, "id": "el11179140578911868912", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [16.75, 33.25]}, {"ydomain": [16.75, 33.25], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "sharey": ["el11179140578912345896"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [223.7701612903226, 281.6970026064292], "id": "el11179140578912018560", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578911721176", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578911616864", "facecolor": "#FFA500", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578911721848", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578911722744", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578911740088", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578911740984", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578911741880", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578911742776", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578911743672", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578911765112", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578911766008", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578911766904", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578911767800", "facecolor": "#FFA500", "xindex": 0, "yindex": 2}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578911793336", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578911794232", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}], "xdomain": [223.7701612903226, 281.6970026064292], "axes": [{"tickvalues": [233, 242, 251, 260, 271], "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "visible": true, "grid": {"gridOn": false}, "nticks": 15, "fontsize": null, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "scale": "linear", "position": "right"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Instat index", "coordinates": "axes", "zorder": 3, "id": "el11179140578912020968", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [16.75, 33.25]}], "height": 480.0, "id": "el11179140578912973152", "width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"ids": ["el11179140578911645936", "el11179140578911613784", "el11179140578911646720", "el11179140578911647616", "el11179140578911648512", "el11179140578911649408", "el11179140578911670848", "el11179140578911671744", "el11179140578911672640", "el11179140578911673536", "el11179140578911694976", "el11179140578911695872", "el11179140578911696768", "el11179140578911697664", "el11179140578911698560"], "type": "clickinfo", "low": 18, "wiek": {"32": [9236, 54512], "18": [410062, 431425, 483621], "20": [291439, 241205], "21": [280962, 238584], "22": [180861], "23": [18706, 244731, 261293, 93484, 252731, 110879], "24": [232713], "25": [122024], "26": [137668, 16964], "27": [8448, 23449, 64611, 209191], "28": [9686], "29": [8863], "31": [23422, 39844]}, "players": {"8448": ["Kamil Drygas", 3231, 267], "431425": ["Adrian Benedyczak", 432, 216], "280962": ["Santeri Hostikka", 322, 244], "137668": ["Iker Guarrotxena", 1443, 253], "232713": ["David Stec", 1977, 253], "8863": ["Spas Delev", 648, 242], "410062": ["Sebastian Walukiewicz", 2714, 265], "16964": ["Micha\u0142 \u017byro", 295, 246], "18706": ["Tomas Podstawski", 2832, 268], "9236": ["Radoslaw Majewski", 2868, 271], "9686": ["Soufian Benyamina", 619, 245], "23449": ["Jakub Bartkowski", 1088, 283], "110879": ["Sebastian Rudol", 364, 224], "64611": ["Tomasz Ho\u0142ota", 490, 242], "39844": ["Adam Fraczczak", 687, 225], "483621": ["Maciej \u017burawski", 12, 0], "209191": ["Jin Izumisawa", 31, 252], "122024": ["Zvonimir Kozulj", 2836, 266], "93484": ["Lasha Dvali", 1195, 269], "261293": ["Mariusz Malec", 2001, 268], "291439": ["Sebastian Kowalczyk", 1699, 255], "54512": ["Ricardo Nunes", 1736, 272], "241205": ["Marcin Listkowski", 53, 210], "238584": ["Dawid B\u0142anik", 178, 213], "244731": ["Hubert Matynia", 2222, 250], "252731": ["David Niepsuj", 860, 242], "180861": ["Adam Buksa", 1924, 263], "23422": ["Jaros\u0142aw Fojut", 734, 264]}}, {"ids": ["el11179140578911721176", "el11179140578911616864", "el11179140578911721848", "el11179140578911722744", "el11179140578911740088", "el11179140578911740984", "el11179140578911741880", "el11179140578911742776", "el11179140578911743672", "el11179140578911765112", "el11179140578911766008", "el11179140578911766904", "el11179140578911767800", "el11179140578911793336", "el11179140578911794232"], "type": "clickinfo", "low": 18, "wiek": {"32": [9236, 54512], "18": [410062, 431425, 483621], "20": [291439, 241205], "21": [280962, 238584], "22": [180861], "23": [18706, 244731, 261293, 93484, 252731, 110879], "24": [232713], "25": [122024], "26": [137668, 16964], "27": [8448, 23449, 64611, 209191], "28": [9686], "29": [8863], "31": [23422, 39844]}, "players": {"8448": ["Kamil Drygas", 3231, 267], "431425": ["Adrian Benedyczak", 432, 216], "280962": ["Santeri Hostikka", 322, 244], "137668": ["Iker Guarrotxena", 1443, 253], "232713": ["David Stec", 1977, 253], "8863": ["Spas Delev", 648, 242], "410062": ["Sebastian Walukiewicz", 2714, 265], "16964": ["Micha\u0142 \u017byro", 295, 246], "18706": ["Tomas Podstawski", 2832, 268], "9236": ["Radoslaw Majewski", 2868, 271], "9686": ["Soufian Benyamina", 619, 245], "23449": ["Jakub Bartkowski", 1088, 283], "110879": ["Sebastian Rudol", 364, 224], "64611": ["Tomasz Ho\u0142ota", 490, 242], "39844": ["Adam Fraczczak", 687, 225], "483621": ["Maciej \u017burawski", 12, 0], "209191": ["Jin Izumisawa", 31, 252], "122024": ["Zvonimir Kozulj", 2836, 266], "93484": ["Lasha Dvali", 1195, 269], "261293": ["Mariusz Malec", 2001, 268], "291439": ["Sebastian Kowalczyk", 1699, 255], "54512": ["Ricardo Nunes", 1736, 272], "241205": ["Marcin Listkowski", 53, 210], "238584": ["Dawid B\u0142anik", 178, 213], "244731": ["Hubert Matynia", 2222, 250], "252731": ["David Niepsuj", 860, 242], "180861": ["Adam Buksa", 1924, 263], "23422": ["Jaros\u0142aw Fojut", 734, 264]}}]});
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
    
         mpld3.draw_figure("aaa", {"data": {"data13": [[0.0, 30.5, 0.0], [1421.0, 30.5, 245.83356840620593], [1421.0, 31.5, 245.83356840620593], [0.0, 31.5, 0.0]], "data11": [[0.0, 27.5, 0.0], [619.0, 27.5, 245.12437810945275], [619.0, 28.5, 245.12437810945275], [0.0, 28.5, 0.0]], "data03": [[0.0, 19.5, 0.0], [1752.0, 19.5, 254.40207972270363], [1752.0, 20.5, 254.40207972270363], [0.0, 20.5, 0.0]], "data10": [[0.0, 26.5, 0.0], [4840.0, 26.5, 268.4454356846473], [4840.0, 27.5, 268.4454356846473], [0.0, 27.5, 0.0]], "data04": [[0.0, 20.5, 0.0], [500.0, 20.5, 233.7701612903226], [500.0, 21.5, 233.7701612903226], [0.0, 21.5, 0.0]], "data01": [[0.0, 17.5, 0.0], [3158.0, 17.5, 258.8040777317617], [3158.0, 18.5, 258.8040777317617], [0.0, 18.5, 0.0]], "data12": [[0.0, 28.5, 0.0], [648.0, 28.5, 242.1466049382716], [648.0, 29.5, 242.1466049382716], [0.0, 29.5, 0.0]], "data06": [[0.0, 22.5, 0.0], [9474.0, 22.5, 260.56156854455133], [9474.0, 23.5, 260.56156854455133], [0.0, 23.5, 0.0]], "data02": [[0.0, 18.5, 29.5], [0.0, 18.5, 29.5], [0.0, 19.5, 30.5], [0.0, 19.5, 30.5]], "data08": [[0.0, 24.5, 0.0], [2836.0, 24.5, 266.7842031029619], [2836.0, 25.5, 266.7842031029619], [0.0, 25.5, 0.0]], "data14": [[0.0, 31.5, 0.0], [4604.0, 31.5, 271.6970026064292], [4604.0, 32.5, 271.6970026064292], [0.0, 32.5, 0.0]], "data09": [[0.0, 25.5, 0.0], [1738.0, 25.5, 252.37067448680352], [1738.0, 26.5, 252.37067448680352], [0.0, 26.5, 0.0]], "data07": [[0.0, 23.5, 0.0], [1977.0, 23.5, 253.99744897959184], [1977.0, 24.5, 253.99744897959184], [0.0, 24.5, 0.0]], "data05": [[0.0, 21.5, 0.0], [1924.0, 21.5, 263.24376299376297], [1924.0, 22.5, 263.24376299376297], [0.0, 22.5, 0.0]]}, "axes": [{"ydomain": [16.75, 33.25], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "sharey": ["el11179140578912018560"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [10371.4, 500.0], "id": "el11179140578912345896", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578911645936", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578911613784", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578911646720", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578911647616", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578911648512", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578911649408", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578911670848", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578911671744", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578911672640", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578911673536", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578911694976", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578911695872", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578911696768", "facecolor": "#FF0000", "xindex": 0, "yindex": 2}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578911697664", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578911698560", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}], "xdomain": [10371.4, 500.0], "axes": [{"tickvalues": null, "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 7, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "visible": true, "grid": {"gridOn": false}, "nticks": 15, "fontsize": 10.0, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "scale": "linear", "position": "left"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Minuty", "coordinates": "axes", "zorder": 3, "id": "el11179140578911868912", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [16.75, 33.25]}, {"ydomain": [16.75, 33.25], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "sharey": ["el11179140578912345896"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [223.7701612903226, 281.6970026064292], "id": "el11179140578912018560", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578911721176", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578911616864", "facecolor": "#FFA500", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578911721848", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578911722744", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578911740088", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578911740984", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578911741880", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578911742776", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578911743672", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578911765112", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578911766008", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578911766904", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578911767800", "facecolor": "#FFA500", "xindex": 0, "yindex": 2}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578911793336", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578911794232", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}], "xdomain": [223.7701612903226, 281.6970026064292], "axes": [{"tickvalues": [233, 242, 251, 260, 271], "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "visible": true, "grid": {"gridOn": false}, "nticks": 15, "fontsize": null, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "scale": "linear", "position": "right"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Instat index", "coordinates": "axes", "zorder": 3, "id": "el11179140578912020968", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [16.75, 33.25]}], "height": 480.0, "id": "el11179140578912973152", "width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"ids": ["el11179140578911645936", "el11179140578911613784", "el11179140578911646720", "el11179140578911647616", "el11179140578911648512", "el11179140578911649408", "el11179140578911670848", "el11179140578911671744", "el11179140578911672640", "el11179140578911673536", "el11179140578911694976", "el11179140578911695872", "el11179140578911696768", "el11179140578911697664", "el11179140578911698560"], "type": "clickinfo", "low": 18, "wiek": {"32": [9236, 54512], "18": [410062, 431425, 483621], "20": [291439, 241205], "21": [280962, 238584], "22": [180861], "23": [18706, 244731, 261293, 93484, 252731, 110879], "24": [232713], "25": [122024], "26": [137668, 16964], "27": [8448, 23449, 64611, 209191], "28": [9686], "29": [8863], "31": [23422, 39844]}, "players": {"8448": ["Kamil Drygas", 3231, 267], "431425": ["Adrian Benedyczak", 432, 216], "280962": ["Santeri Hostikka", 322, 244], "137668": ["Iker Guarrotxena", 1443, 253], "232713": ["David Stec", 1977, 253], "8863": ["Spas Delev", 648, 242], "410062": ["Sebastian Walukiewicz", 2714, 265], "16964": ["Micha\u0142 \u017byro", 295, 246], "18706": ["Tomas Podstawski", 2832, 268], "9236": ["Radoslaw Majewski", 2868, 271], "9686": ["Soufian Benyamina", 619, 245], "23449": ["Jakub Bartkowski", 1088, 283], "110879": ["Sebastian Rudol", 364, 224], "64611": ["Tomasz Ho\u0142ota", 490, 242], "39844": ["Adam Fraczczak", 687, 225], "483621": ["Maciej \u017burawski", 12, 0], "209191": ["Jin Izumisawa", 31, 252], "122024": ["Zvonimir Kozulj", 2836, 266], "93484": ["Lasha Dvali", 1195, 269], "261293": ["Mariusz Malec", 2001, 268], "291439": ["Sebastian Kowalczyk", 1699, 255], "54512": ["Ricardo Nunes", 1736, 272], "241205": ["Marcin Listkowski", 53, 210], "238584": ["Dawid B\u0142anik", 178, 213], "244731": ["Hubert Matynia", 2222, 250], "252731": ["David Niepsuj", 860, 242], "180861": ["Adam Buksa", 1924, 263], "23422": ["Jaros\u0142aw Fojut", 734, 264]}}, {"ids": ["el11179140578911721176", "el11179140578911616864", "el11179140578911721848", "el11179140578911722744", "el11179140578911740088", "el11179140578911740984", "el11179140578911741880", "el11179140578911742776", "el11179140578911743672", "el11179140578911765112", "el11179140578911766008", "el11179140578911766904", "el11179140578911767800", "el11179140578911793336", "el11179140578911794232"], "type": "clickinfo", "low": 18, "wiek": {"32": [9236, 54512], "18": [410062, 431425, 483621], "20": [291439, 241205], "21": [280962, 238584], "22": [180861], "23": [18706, 244731, 261293, 93484, 252731, 110879], "24": [232713], "25": [122024], "26": [137668, 16964], "27": [8448, 23449, 64611, 209191], "28": [9686], "29": [8863], "31": [23422, 39844]}, "players": {"8448": ["Kamil Drygas", 3231, 267], "431425": ["Adrian Benedyczak", 432, 216], "280962": ["Santeri Hostikka", 322, 244], "137668": ["Iker Guarrotxena", 1443, 253], "232713": ["David Stec", 1977, 253], "8863": ["Spas Delev", 648, 242], "410062": ["Sebastian Walukiewicz", 2714, 265], "16964": ["Micha\u0142 \u017byro", 295, 246], "18706": ["Tomas Podstawski", 2832, 268], "9236": ["Radoslaw Majewski", 2868, 271], "9686": ["Soufian Benyamina", 619, 245], "23449": ["Jakub Bartkowski", 1088, 283], "110879": ["Sebastian Rudol", 364, 224], "64611": ["Tomasz Ho\u0142ota", 490, 242], "39844": ["Adam Fraczczak", 687, 225], "483621": ["Maciej \u017burawski", 12, 0], "209191": ["Jin Izumisawa", 31, 252], "122024": ["Zvonimir Kozulj", 2836, 266], "93484": ["Lasha Dvali", 1195, 269], "261293": ["Mariusz Malec", 2001, 268], "291439": ["Sebastian Kowalczyk", 1699, 255], "54512": ["Ricardo Nunes", 1736, 272], "241205": ["Marcin Listkowski", 53, 210], "238584": ["Dawid B\u0142anik", 178, 213], "244731": ["Hubert Matynia", 2222, 250], "252731": ["David Niepsuj", 860, 242], "180861": ["Adam Buksa", 1924, 263], "23422": ["Jaros\u0142aw Fojut", 734, 264]}}]});
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
    
                 mpld3.draw_figure("aaa", {"data": {"data13": [[0.0, 30.5, 0.0], [1421.0, 30.5, 245.83356840620593], [1421.0, 31.5, 245.83356840620593], [0.0, 31.5, 0.0]], "data11": [[0.0, 27.5, 0.0], [619.0, 27.5, 245.12437810945275], [619.0, 28.5, 245.12437810945275], [0.0, 28.5, 0.0]], "data03": [[0.0, 19.5, 0.0], [1752.0, 19.5, 254.40207972270363], [1752.0, 20.5, 254.40207972270363], [0.0, 20.5, 0.0]], "data10": [[0.0, 26.5, 0.0], [4840.0, 26.5, 268.4454356846473], [4840.0, 27.5, 268.4454356846473], [0.0, 27.5, 0.0]], "data04": [[0.0, 20.5, 0.0], [500.0, 20.5, 233.7701612903226], [500.0, 21.5, 233.7701612903226], [0.0, 21.5, 0.0]], "data01": [[0.0, 17.5, 0.0], [3158.0, 17.5, 258.8040777317617], [3158.0, 18.5, 258.8040777317617], [0.0, 18.5, 0.0]], "data12": [[0.0, 28.5, 0.0], [648.0, 28.5, 242.1466049382716], [648.0, 29.5, 242.1466049382716], [0.0, 29.5, 0.0]], "data06": [[0.0, 22.5, 0.0], [9474.0, 22.5, 260.56156854455133], [9474.0, 23.5, 260.56156854455133], [0.0, 23.5, 0.0]], "data02": [[0.0, 18.5, 29.5], [0.0, 18.5, 29.5], [0.0, 19.5, 30.5], [0.0, 19.5, 30.5]], "data08": [[0.0, 24.5, 0.0], [2836.0, 24.5, 266.7842031029619], [2836.0, 25.5, 266.7842031029619], [0.0, 25.5, 0.0]], "data14": [[0.0, 31.5, 0.0], [4604.0, 31.5, 271.6970026064292], [4604.0, 32.5, 271.6970026064292], [0.0, 32.5, 0.0]], "data09": [[0.0, 25.5, 0.0], [1738.0, 25.5, 252.37067448680352], [1738.0, 26.5, 252.37067448680352], [0.0, 26.5, 0.0]], "data07": [[0.0, 23.5, 0.0], [1977.0, 23.5, 253.99744897959184], [1977.0, 24.5, 253.99744897959184], [0.0, 24.5, 0.0]], "data05": [[0.0, 21.5, 0.0], [1924.0, 21.5, 263.24376299376297], [1924.0, 22.5, 263.24376299376297], [0.0, 22.5, 0.0]]}, "axes": [{"ydomain": [16.75, 33.25], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "sharey": ["el11179140578912018560"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [10371.4, 500.0], "id": "el11179140578912345896", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578911645936", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578911613784", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578911646720", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578911647616", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578911648512", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578911649408", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578911670848", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578911671744", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578911672640", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578911673536", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578911694976", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578911695872", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578911696768", "facecolor": "#FF0000", "xindex": 0, "yindex": 2}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578911697664", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578911698560", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}], "xdomain": [10371.4, 500.0], "axes": [{"tickvalues": null, "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 7, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "visible": true, "grid": {"gridOn": false}, "nticks": 15, "fontsize": 10.0, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "scale": "linear", "position": "left"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Minuty", "coordinates": "axes", "zorder": 3, "id": "el11179140578911868912", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [16.75, 33.25]}, {"ydomain": [16.75, 33.25], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "sharey": ["el11179140578912345896"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [223.7701612903226, 281.6970026064292], "id": "el11179140578912018560", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578911721176", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578911616864", "facecolor": "#FFA500", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578911721848", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578911722744", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578911740088", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578911740984", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578911741880", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578911742776", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578911743672", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578911765112", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578911766008", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578911766904", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578911767800", "facecolor": "#FFA500", "xindex": 0, "yindex": 2}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578911793336", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578911794232", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}], "xdomain": [223.7701612903226, 281.6970026064292], "axes": [{"tickvalues": [233, 242, 251, 260, 271], "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "visible": true, "grid": {"gridOn": false}, "nticks": 15, "fontsize": null, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "scale": "linear", "position": "right"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Instat index", "coordinates": "axes", "zorder": 3, "id": "el11179140578912020968", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [16.75, 33.25]}], "height": 480.0, "id": "el11179140578912973152", "width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"ids": ["el11179140578911645936", "el11179140578911613784", "el11179140578911646720", "el11179140578911647616", "el11179140578911648512", "el11179140578911649408", "el11179140578911670848", "el11179140578911671744", "el11179140578911672640", "el11179140578911673536", "el11179140578911694976", "el11179140578911695872", "el11179140578911696768", "el11179140578911697664", "el11179140578911698560"], "type": "clickinfo", "low": 18, "wiek": {"32": [9236, 54512], "18": [410062, 431425, 483621], "20": [291439, 241205], "21": [280962, 238584], "22": [180861], "23": [18706, 244731, 261293, 93484, 252731, 110879], "24": [232713], "25": [122024], "26": [137668, 16964], "27": [8448, 23449, 64611, 209191], "28": [9686], "29": [8863], "31": [23422, 39844]}, "players": {"8448": ["Kamil Drygas", 3231, 267], "431425": ["Adrian Benedyczak", 432, 216], "280962": ["Santeri Hostikka", 322, 244], "137668": ["Iker Guarrotxena", 1443, 253], "232713": ["David Stec", 1977, 253], "8863": ["Spas Delev", 648, 242], "410062": ["Sebastian Walukiewicz", 2714, 265], "16964": ["Micha\u0142 \u017byro", 295, 246], "18706": ["Tomas Podstawski", 2832, 268], "9236": ["Radoslaw Majewski", 2868, 271], "9686": ["Soufian Benyamina", 619, 245], "23449": ["Jakub Bartkowski", 1088, 283], "110879": ["Sebastian Rudol", 364, 224], "64611": ["Tomasz Ho\u0142ota", 490, 242], "39844": ["Adam Fraczczak", 687, 225], "483621": ["Maciej \u017burawski", 12, 0], "209191": ["Jin Izumisawa", 31, 252], "122024": ["Zvonimir Kozulj", 2836, 266], "93484": ["Lasha Dvali", 1195, 269], "261293": ["Mariusz Malec", 2001, 268], "291439": ["Sebastian Kowalczyk", 1699, 255], "54512": ["Ricardo Nunes", 1736, 272], "241205": ["Marcin Listkowski", 53, 210], "238584": ["Dawid B\u0142anik", 178, 213], "244731": ["Hubert Matynia", 2222, 250], "252731": ["David Niepsuj", 860, 242], "180861": ["Adam Buksa", 1924, 263], "23422": ["Jaros\u0142aw Fojut", 734, 264]}}, {"ids": ["el11179140578911721176", "el11179140578911616864", "el11179140578911721848", "el11179140578911722744", "el11179140578911740088", "el11179140578911740984", "el11179140578911741880", "el11179140578911742776", "el11179140578911743672", "el11179140578911765112", "el11179140578911766008", "el11179140578911766904", "el11179140578911767800", "el11179140578911793336", "el11179140578911794232"], "type": "clickinfo", "low": 18, "wiek": {"32": [9236, 54512], "18": [410062, 431425, 483621], "20": [291439, 241205], "21": [280962, 238584], "22": [180861], "23": [18706, 244731, 261293, 93484, 252731, 110879], "24": [232713], "25": [122024], "26": [137668, 16964], "27": [8448, 23449, 64611, 209191], "28": [9686], "29": [8863], "31": [23422, 39844]}, "players": {"8448": ["Kamil Drygas", 3231, 267], "431425": ["Adrian Benedyczak", 432, 216], "280962": ["Santeri Hostikka", 322, 244], "137668": ["Iker Guarrotxena", 1443, 253], "232713": ["David Stec", 1977, 253], "8863": ["Spas Delev", 648, 242], "410062": ["Sebastian Walukiewicz", 2714, 265], "16964": ["Micha\u0142 \u017byro", 295, 246], "18706": ["Tomas Podstawski", 2832, 268], "9236": ["Radoslaw Majewski", 2868, 271], "9686": ["Soufian Benyamina", 619, 245], "23449": ["Jakub Bartkowski", 1088, 283], "110879": ["Sebastian Rudol", 364, 224], "64611": ["Tomasz Ho\u0142ota", 490, 242], "39844": ["Adam Fraczczak", 687, 225], "483621": ["Maciej \u017burawski", 12, 0], "209191": ["Jin Izumisawa", 31, 252], "122024": ["Zvonimir Kozulj", 2836, 266], "93484": ["Lasha Dvali", 1195, 269], "261293": ["Mariusz Malec", 2001, 268], "291439": ["Sebastian Kowalczyk", 1699, 255], "54512": ["Ricardo Nunes", 1736, 272], "241205": ["Marcin Listkowski", 53, 210], "238584": ["Dawid B\u0142anik", 178, 213], "244731": ["Hubert Matynia", 2222, 250], "252731": ["David Niepsuj", 860, 242], "180861": ["Adam Buksa", 1924, 263], "23422": ["Jaros\u0142aw Fojut", 734, 264]}}]});
            })
         });
}
</script>
