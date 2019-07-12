

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
    
       mpld3.draw_figure("aaa", {"data": {"data13": [[0.0, 28.5, 0.0], [2343.0, 28.5, 247.38295110341843], [2343.0, 29.5, 247.38295110341843], [0.0, 29.5, 0.0]], "data11": [[0.0, 26.5, 0.0], [5903.0, 26.5, 273.16279857699476], [5903.0, 27.5, 273.16279857699476], [0.0, 27.5, 0.0]], "data03": [[0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [0.0, 19.5, 31.5, 32.5, 33.5, 34.5], [0.0, 19.5, 31.5, 32.5, 33.5, 34.5]], "data10": [[0.0, 25.5, 0.0], [3241.0, 25.5, 251.01655732583566], [3241.0, 26.5, 251.01655732583566], [0.0, 26.5, 0.0]], "data04": [[0.0, 19.5, 0.0], [1094.0, 19.5, 236.65607476635515], [1094.0, 20.5, 236.65607476635515], [0.0, 20.5, 0.0]], "data01": [[0.0, 16.5, 0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [36.0, 16.5, 0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [36.0, 17.5, 0.0, 19.5, 31.5, 32.5, 33.5, 34.5], [0.0, 17.5, 0.0, 19.5, 31.5, 32.5, 33.5, 34.5]], "data12": [[0.0, 27.5, 0.0], [10048.0, 27.5, 272.5625186808807], [10048.0, 28.5, 272.5625186808807], [0.0, 28.5, 0.0]], "data15": [[0.0, 34.5, 0.0], [176.0, 34.5, 239.4659090909091], [176.0, 35.5, 239.4659090909091], [0.0, 35.5, 0.0]], "data06": [[0.0, 21.5, 0.0], [1578.0, 21.5, 256.1707006369427], [1578.0, 22.5, 256.1707006369427], [0.0, 22.5, 0.0]], "data02": [[0.0, 17.5, 0.0], [98.0, 17.5, 235.0], [98.0, 18.5, 235.0], [0.0, 18.5, 0.0]], "data08": [[0.0, 23.5, 0.0], [2795.0, 23.5, 263.78440531800214], [2795.0, 24.5, 263.78440531800214], [0.0, 24.5, 0.0]], "data14": [[0.0, 29.5, 0.0], [2462.0, 29.5, 249.78066612510153], [2462.0, 30.5, 249.78066612510153], [0.0, 30.5, 0.0]], "data09": [[0.0, 24.5, 0.0], [1732.0, 24.5, 266.7323290845886], [1732.0, 25.5, 266.7323290845886], [0.0, 25.5, 0.0]], "data07": [[0.0, 22.5, 0.0], [3250.0, 22.5, 257.2212307692308], [3250.0, 23.5, 257.2212307692308], [0.0, 23.5, 0.0]], "data05": [[0.0, 20.5, 0.0], [1108.0, 20.5, 252.01087941976428], [1108.0, 21.5, 252.01087941976428], [0.0, 21.5, 0.0]]}, "axes": [{"ydomain": [15.55, 36.45], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "sharey": ["el11179140578911219496"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [11049.2, 36.0], "id": "el11179140578911575232", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578910864888", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578910864384", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578910865672", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578910866568", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578910867408", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578910893000", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578910893896", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578910894792", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578910895688", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578910925320", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578910926216", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578910927112", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578910928008", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578910928848", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578910954440", "facecolor": "#FF0000", "xindex": 0, "yindex": 2}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578910955336", "facecolor": "#FF0000", "xindex": 0, "yindex": 3}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578910956232", "facecolor": "#FF0000", "xindex": 0, "yindex": 4}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578910957128", "facecolor": "#FF0000", "xindex": 0, "yindex": 5}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578910974472", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}], "xdomain": [11049.2, 36.0], "axes": [{"tickvalues": null, "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 6, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "visible": true, "grid": {"gridOn": false}, "nticks": 19, "fontsize": 10.0, "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "scale": "linear", "position": "left"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Minuty", "coordinates": "axes", "zorder": 3, "id": "el11179140578911098192", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [15.55, 36.45]}, {"ydomain": [15.55, 36.45], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "sharey": ["el11179140578911575232"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [225.0, 283.16279857699476], "id": "el11179140578911219496", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578910976544", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578910864552", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578910977216", "facecolor": "#FFA500", "xindex": 2, "yindex": 3}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578910998656", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578910816240", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578910816072", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578911283016", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578911261864", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578911150264", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578911115752", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578911099872", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578911455160", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578911438104", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578911881592", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578911000336", "facecolor": "#FFA500", "xindex": 2, "yindex": 4}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578911001232", "facecolor": "#FFA500", "xindex": 2, "yindex": 5}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578911002128", "facecolor": "#FFA500", "xindex": 2, "yindex": 6}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578911048144", "facecolor": "#FFA500", "xindex": 2, "yindex": 7}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578911049040", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}], "xdomain": [225.0, 283.16279857699476], "axes": [{"tickvalues": [235, 244, 253, 262, 273], "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "visible": true, "grid": {"gridOn": false}, "nticks": 19, "fontsize": null, "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "scale": "linear", "position": "right"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Instat index", "coordinates": "axes", "zorder": 3, "id": "el11179140578911250640", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [15.55, 36.45]}], "height": 480.0, "id": "el11179140578911400176", "width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"ids": ["el11179140578910864888", "el11179140578910864384", "el11179140578910865672", "el11179140578910866568", "el11179140578910867408", "el11179140578910893000", "el11179140578910893896", "el11179140578910894792", "el11179140578910895688", "el11179140578910925320", "el11179140578910926216", "el11179140578910927112", "el11179140578910928008", "el11179140578910928848", "el11179140578910954440", "el11179140578910955336", "el11179140578910956232", "el11179140578910957128", "el11179140578910974472"], "type": "clickinfo", "low": 17, "wiek": {"35": [23242], "17": [1019551], "18": [399416], "20": [441197, 417479], "21": [247550, 252427], "22": [268959, 184605], "23": [184036, 170498, 95032], "24": [177954, 191554], "25": [97553], "26": [9608, 22766], "27": [247548, 79953], "28": [77048, 108741, 16827, 157695, 28275], "29": [24171, 4663, 23296, 60457], "30": [69731, 23413]}, "players": {"23296": ["Mateusz Machaj", 500, 224], "170498": ["Przemys\u0142aw Frankowski", 1291, 261], "108741": ["Ivan Runje", 2856, 284], "417479": ["Martin Adamec", 365, 245], "9608": ["Nemanja Mitrovic", 2905, 254], "23242": ["Rafa\u0142 Grzyb", 176, 239], "252427": ["Justas Lasickas", 20, 225], "191554": ["Zoran Arsenic", 1280, 281], "97553": ["Marko Poletanovic", 1732, 266], "399416": ["Michal Ozga", 98, 235], "16827": ["Arvydas Novikovas", 2729, 281], "184605": ["Andrej Kadlec", 740, 270], "268959": ["Martin Kostal", 838, 243], "177954": ["Bartosz Kwiecie\u0144", 1515, 248], "69731": ["Jakub W\u00f3jcicki", 1562, 247], "184036": ["Bodvar Bodvarsson", 1377, 260], "79953": ["Martin Pospisil", 2759, 261], "60457": ["Piotr Wlaz\u0142o", 62, 233], "24171": ["Roman Bezjak", 1089, 251], "441197": ["Patryk Klimala", 729, 232], "22766": ["Mile Savkovic", 336, 217], "28275": ["Stefan Scepovic", 342, 215], "23413": ["\u0141ukasz Burliga", 900, 253], "4663": ["Cillian Sheridan", 692, 258], "95032": ["Lukas Klemenz", 582, 241], "1019551": ["Maciej Twarowski", 36, 212], "247548": ["Taras Romanczuk", 3144, 283], "77048": ["Sitya", 3016, 261], "247550": ["Karol \u015awiderski", 1088, 252], "157695": ["Jesus Imaz", 1105, 270]}}, {"ids": ["el11179140578910976544", "el11179140578910864552", "el11179140578910977216", "el11179140578910998656", "el11179140578910816240", "el11179140578910816072", "el11179140578911283016", "el11179140578911261864", "el11179140578911150264", "el11179140578911115752", "el11179140578911099872", "el11179140578911455160", "el11179140578911438104", "el11179140578911881592", "el11179140578911000336", "el11179140578911001232", "el11179140578911002128", "el11179140578911048144", "el11179140578911049040"], "type": "clickinfo", "low": 17, "wiek": {"35": [23242], "17": [1019551], "18": [399416], "20": [441197, 417479], "21": [247550, 252427], "22": [268959, 184605], "23": [184036, 170498, 95032], "24": [177954, 191554], "25": [97553], "26": [9608, 22766], "27": [247548, 79953], "28": [77048, 108741, 16827, 157695, 28275], "29": [24171, 4663, 23296, 60457], "30": [69731, 23413]}, "players": {"23296": ["Mateusz Machaj", 500, 224], "170498": ["Przemys\u0142aw Frankowski", 1291, 261], "108741": ["Ivan Runje", 2856, 284], "417479": ["Martin Adamec", 365, 245], "9608": ["Nemanja Mitrovic", 2905, 254], "23242": ["Rafa\u0142 Grzyb", 176, 239], "252427": ["Justas Lasickas", 20, 225], "191554": ["Zoran Arsenic", 1280, 281], "97553": ["Marko Poletanovic", 1732, 266], "399416": ["Michal Ozga", 98, 235], "16827": ["Arvydas Novikovas", 2729, 281], "184605": ["Andrej Kadlec", 740, 270], "268959": ["Martin Kostal", 838, 243], "177954": ["Bartosz Kwiecie\u0144", 1515, 248], "69731": ["Jakub W\u00f3jcicki", 1562, 247], "184036": ["Bodvar Bodvarsson", 1377, 260], "79953": ["Martin Pospisil", 2759, 261], "60457": ["Piotr Wlaz\u0142o", 62, 233], "24171": ["Roman Bezjak", 1089, 251], "441197": ["Patryk Klimala", 729, 232], "22766": ["Mile Savkovic", 336, 217], "28275": ["Stefan Scepovic", 342, 215], "23413": ["\u0141ukasz Burliga", 900, 253], "4663": ["Cillian Sheridan", 692, 258], "95032": ["Lukas Klemenz", 582, 241], "1019551": ["Maciej Twarowski", 36, 212], "247548": ["Taras Romanczuk", 3144, 283], "77048": ["Sitya", 3016, 261], "247550": ["Karol \u015awiderski", 1088, 252], "157695": ["Jesus Imaz", 1105, 270]}}]});
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
    
         mpld3.draw_figure("aaa", {"data": {"data13": [[0.0, 28.5, 0.0], [2343.0, 28.5, 247.38295110341843], [2343.0, 29.5, 247.38295110341843], [0.0, 29.5, 0.0]], "data11": [[0.0, 26.5, 0.0], [5903.0, 26.5, 273.16279857699476], [5903.0, 27.5, 273.16279857699476], [0.0, 27.5, 0.0]], "data03": [[0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [0.0, 19.5, 31.5, 32.5, 33.5, 34.5], [0.0, 19.5, 31.5, 32.5, 33.5, 34.5]], "data10": [[0.0, 25.5, 0.0], [3241.0, 25.5, 251.01655732583566], [3241.0, 26.5, 251.01655732583566], [0.0, 26.5, 0.0]], "data04": [[0.0, 19.5, 0.0], [1094.0, 19.5, 236.65607476635515], [1094.0, 20.5, 236.65607476635515], [0.0, 20.5, 0.0]], "data01": [[0.0, 16.5, 0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [36.0, 16.5, 0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [36.0, 17.5, 0.0, 19.5, 31.5, 32.5, 33.5, 34.5], [0.0, 17.5, 0.0, 19.5, 31.5, 32.5, 33.5, 34.5]], "data12": [[0.0, 27.5, 0.0], [10048.0, 27.5, 272.5625186808807], [10048.0, 28.5, 272.5625186808807], [0.0, 28.5, 0.0]], "data15": [[0.0, 34.5, 0.0], [176.0, 34.5, 239.4659090909091], [176.0, 35.5, 239.4659090909091], [0.0, 35.5, 0.0]], "data06": [[0.0, 21.5, 0.0], [1578.0, 21.5, 256.1707006369427], [1578.0, 22.5, 256.1707006369427], [0.0, 22.5, 0.0]], "data02": [[0.0, 17.5, 0.0], [98.0, 17.5, 235.0], [98.0, 18.5, 235.0], [0.0, 18.5, 0.0]], "data08": [[0.0, 23.5, 0.0], [2795.0, 23.5, 263.78440531800214], [2795.0, 24.5, 263.78440531800214], [0.0, 24.5, 0.0]], "data14": [[0.0, 29.5, 0.0], [2462.0, 29.5, 249.78066612510153], [2462.0, 30.5, 249.78066612510153], [0.0, 30.5, 0.0]], "data09": [[0.0, 24.5, 0.0], [1732.0, 24.5, 266.7323290845886], [1732.0, 25.5, 266.7323290845886], [0.0, 25.5, 0.0]], "data07": [[0.0, 22.5, 0.0], [3250.0, 22.5, 257.2212307692308], [3250.0, 23.5, 257.2212307692308], [0.0, 23.5, 0.0]], "data05": [[0.0, 20.5, 0.0], [1108.0, 20.5, 252.01087941976428], [1108.0, 21.5, 252.01087941976428], [0.0, 21.5, 0.0]]}, "axes": [{"ydomain": [15.55, 36.45], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "sharey": ["el11179140578911219496"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [11049.2, 36.0], "id": "el11179140578911575232", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578910864888", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578910864384", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578910865672", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578910866568", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578910867408", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578910893000", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578910893896", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578910894792", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578910895688", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578910925320", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578910926216", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578910927112", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578910928008", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578910928848", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578910954440", "facecolor": "#FF0000", "xindex": 0, "yindex": 2}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578910955336", "facecolor": "#FF0000", "xindex": 0, "yindex": 3}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578910956232", "facecolor": "#FF0000", "xindex": 0, "yindex": 4}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578910957128", "facecolor": "#FF0000", "xindex": 0, "yindex": 5}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578910974472", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}], "xdomain": [11049.2, 36.0], "axes": [{"tickvalues": null, "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 6, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "visible": true, "grid": {"gridOn": false}, "nticks": 19, "fontsize": 10.0, "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "scale": "linear", "position": "left"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Minuty", "coordinates": "axes", "zorder": 3, "id": "el11179140578911098192", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [15.55, 36.45]}, {"ydomain": [15.55, 36.45], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "sharey": ["el11179140578911575232"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [225.0, 283.16279857699476], "id": "el11179140578911219496", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578910976544", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578910864552", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578910977216", "facecolor": "#FFA500", "xindex": 2, "yindex": 3}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578910998656", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578910816240", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578910816072", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578911283016", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578911261864", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578911150264", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578911115752", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578911099872", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578911455160", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578911438104", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578911881592", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578911000336", "facecolor": "#FFA500", "xindex": 2, "yindex": 4}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578911001232", "facecolor": "#FFA500", "xindex": 2, "yindex": 5}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578911002128", "facecolor": "#FFA500", "xindex": 2, "yindex": 6}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578911048144", "facecolor": "#FFA500", "xindex": 2, "yindex": 7}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578911049040", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}], "xdomain": [225.0, 283.16279857699476], "axes": [{"tickvalues": [235, 244, 253, 262, 273], "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "visible": true, "grid": {"gridOn": false}, "nticks": 19, "fontsize": null, "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "scale": "linear", "position": "right"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Instat index", "coordinates": "axes", "zorder": 3, "id": "el11179140578911250640", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [15.55, 36.45]}], "height": 480.0, "id": "el11179140578911400176", "width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"ids": ["el11179140578910864888", "el11179140578910864384", "el11179140578910865672", "el11179140578910866568", "el11179140578910867408", "el11179140578910893000", "el11179140578910893896", "el11179140578910894792", "el11179140578910895688", "el11179140578910925320", "el11179140578910926216", "el11179140578910927112", "el11179140578910928008", "el11179140578910928848", "el11179140578910954440", "el11179140578910955336", "el11179140578910956232", "el11179140578910957128", "el11179140578910974472"], "type": "clickinfo", "low": 17, "wiek": {"35": [23242], "17": [1019551], "18": [399416], "20": [441197, 417479], "21": [247550, 252427], "22": [268959, 184605], "23": [184036, 170498, 95032], "24": [177954, 191554], "25": [97553], "26": [9608, 22766], "27": [247548, 79953], "28": [77048, 108741, 16827, 157695, 28275], "29": [24171, 4663, 23296, 60457], "30": [69731, 23413]}, "players": {"23296": ["Mateusz Machaj", 500, 224], "170498": ["Przemys\u0142aw Frankowski", 1291, 261], "108741": ["Ivan Runje", 2856, 284], "417479": ["Martin Adamec", 365, 245], "9608": ["Nemanja Mitrovic", 2905, 254], "23242": ["Rafa\u0142 Grzyb", 176, 239], "252427": ["Justas Lasickas", 20, 225], "191554": ["Zoran Arsenic", 1280, 281], "97553": ["Marko Poletanovic", 1732, 266], "399416": ["Michal Ozga", 98, 235], "16827": ["Arvydas Novikovas", 2729, 281], "184605": ["Andrej Kadlec", 740, 270], "268959": ["Martin Kostal", 838, 243], "177954": ["Bartosz Kwiecie\u0144", 1515, 248], "69731": ["Jakub W\u00f3jcicki", 1562, 247], "184036": ["Bodvar Bodvarsson", 1377, 260], "79953": ["Martin Pospisil", 2759, 261], "60457": ["Piotr Wlaz\u0142o", 62, 233], "24171": ["Roman Bezjak", 1089, 251], "441197": ["Patryk Klimala", 729, 232], "22766": ["Mile Savkovic", 336, 217], "28275": ["Stefan Scepovic", 342, 215], "23413": ["\u0141ukasz Burliga", 900, 253], "4663": ["Cillian Sheridan", 692, 258], "95032": ["Lukas Klemenz", 582, 241], "1019551": ["Maciej Twarowski", 36, 212], "247548": ["Taras Romanczuk", 3144, 283], "77048": ["Sitya", 3016, 261], "247550": ["Karol \u015awiderski", 1088, 252], "157695": ["Jesus Imaz", 1105, 270]}}, {"ids": ["el11179140578910976544", "el11179140578910864552", "el11179140578910977216", "el11179140578910998656", "el11179140578910816240", "el11179140578910816072", "el11179140578911283016", "el11179140578911261864", "el11179140578911150264", "el11179140578911115752", "el11179140578911099872", "el11179140578911455160", "el11179140578911438104", "el11179140578911881592", "el11179140578911000336", "el11179140578911001232", "el11179140578911002128", "el11179140578911048144", "el11179140578911049040"], "type": "clickinfo", "low": 17, "wiek": {"35": [23242], "17": [1019551], "18": [399416], "20": [441197, 417479], "21": [247550, 252427], "22": [268959, 184605], "23": [184036, 170498, 95032], "24": [177954, 191554], "25": [97553], "26": [9608, 22766], "27": [247548, 79953], "28": [77048, 108741, 16827, 157695, 28275], "29": [24171, 4663, 23296, 60457], "30": [69731, 23413]}, "players": {"23296": ["Mateusz Machaj", 500, 224], "170498": ["Przemys\u0142aw Frankowski", 1291, 261], "108741": ["Ivan Runje", 2856, 284], "417479": ["Martin Adamec", 365, 245], "9608": ["Nemanja Mitrovic", 2905, 254], "23242": ["Rafa\u0142 Grzyb", 176, 239], "252427": ["Justas Lasickas", 20, 225], "191554": ["Zoran Arsenic", 1280, 281], "97553": ["Marko Poletanovic", 1732, 266], "399416": ["Michal Ozga", 98, 235], "16827": ["Arvydas Novikovas", 2729, 281], "184605": ["Andrej Kadlec", 740, 270], "268959": ["Martin Kostal", 838, 243], "177954": ["Bartosz Kwiecie\u0144", 1515, 248], "69731": ["Jakub W\u00f3jcicki", 1562, 247], "184036": ["Bodvar Bodvarsson", 1377, 260], "79953": ["Martin Pospisil", 2759, 261], "60457": ["Piotr Wlaz\u0142o", 62, 233], "24171": ["Roman Bezjak", 1089, 251], "441197": ["Patryk Klimala", 729, 232], "22766": ["Mile Savkovic", 336, 217], "28275": ["Stefan Scepovic", 342, 215], "23413": ["\u0141ukasz Burliga", 900, 253], "4663": ["Cillian Sheridan", 692, 258], "95032": ["Lukas Klemenz", 582, 241], "1019551": ["Maciej Twarowski", 36, 212], "247548": ["Taras Romanczuk", 3144, 283], "77048": ["Sitya", 3016, 261], "247550": ["Karol \u015awiderski", 1088, 252], "157695": ["Jesus Imaz", 1105, 270]}}]});
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
    
                 mpld3.draw_figure("aaa", {"data": {"data13": [[0.0, 28.5, 0.0], [2343.0, 28.5, 247.38295110341843], [2343.0, 29.5, 247.38295110341843], [0.0, 29.5, 0.0]], "data11": [[0.0, 26.5, 0.0], [5903.0, 26.5, 273.16279857699476], [5903.0, 27.5, 273.16279857699476], [0.0, 27.5, 0.0]], "data03": [[0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [0.0, 19.5, 31.5, 32.5, 33.5, 34.5], [0.0, 19.5, 31.5, 32.5, 33.5, 34.5]], "data10": [[0.0, 25.5, 0.0], [3241.0, 25.5, 251.01655732583566], [3241.0, 26.5, 251.01655732583566], [0.0, 26.5, 0.0]], "data04": [[0.0, 19.5, 0.0], [1094.0, 19.5, 236.65607476635515], [1094.0, 20.5, 236.65607476635515], [0.0, 20.5, 0.0]], "data01": [[0.0, 16.5, 0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [36.0, 16.5, 0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [36.0, 17.5, 0.0, 19.5, 31.5, 32.5, 33.5, 34.5], [0.0, 17.5, 0.0, 19.5, 31.5, 32.5, 33.5, 34.5]], "data12": [[0.0, 27.5, 0.0], [10048.0, 27.5, 272.5625186808807], [10048.0, 28.5, 272.5625186808807], [0.0, 28.5, 0.0]], "data15": [[0.0, 34.5, 0.0], [176.0, 34.5, 239.4659090909091], [176.0, 35.5, 239.4659090909091], [0.0, 35.5, 0.0]], "data06": [[0.0, 21.5, 0.0], [1578.0, 21.5, 256.1707006369427], [1578.0, 22.5, 256.1707006369427], [0.0, 22.5, 0.0]], "data02": [[0.0, 17.5, 0.0], [98.0, 17.5, 235.0], [98.0, 18.5, 235.0], [0.0, 18.5, 0.0]], "data08": [[0.0, 23.5, 0.0], [2795.0, 23.5, 263.78440531800214], [2795.0, 24.5, 263.78440531800214], [0.0, 24.5, 0.0]], "data14": [[0.0, 29.5, 0.0], [2462.0, 29.5, 249.78066612510153], [2462.0, 30.5, 249.78066612510153], [0.0, 30.5, 0.0]], "data09": [[0.0, 24.5, 0.0], [1732.0, 24.5, 266.7323290845886], [1732.0, 25.5, 266.7323290845886], [0.0, 25.5, 0.0]], "data07": [[0.0, 22.5, 0.0], [3250.0, 22.5, 257.2212307692308], [3250.0, 23.5, 257.2212307692308], [0.0, 23.5, 0.0]], "data05": [[0.0, 20.5, 0.0], [1108.0, 20.5, 252.01087941976428], [1108.0, 21.5, 252.01087941976428], [0.0, 21.5, 0.0]]}, "axes": [{"ydomain": [15.55, 36.45], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "sharey": ["el11179140578911219496"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [11049.2, 36.0], "id": "el11179140578911575232", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578910864888", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578910864384", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578910865672", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578910866568", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578910867408", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578910893000", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578910893896", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578910894792", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578910895688", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578910925320", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578910926216", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578910927112", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578910928008", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578910928848", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578910954440", "facecolor": "#FF0000", "xindex": 0, "yindex": 2}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578910955336", "facecolor": "#FF0000", "xindex": 0, "yindex": 3}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578910956232", "facecolor": "#FF0000", "xindex": 0, "yindex": 4}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578910957128", "facecolor": "#FF0000", "xindex": 0, "yindex": 5}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578910974472", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}], "xdomain": [11049.2, 36.0], "axes": [{"tickvalues": null, "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 6, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "visible": true, "grid": {"gridOn": false}, "nticks": 19, "fontsize": 10.0, "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "scale": "linear", "position": "left"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Minuty", "coordinates": "axes", "zorder": 3, "id": "el11179140578911098192", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [15.55, 36.45]}, {"ydomain": [15.55, 36.45], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "sharey": ["el11179140578911575232"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [225.0, 283.16279857699476], "id": "el11179140578911219496", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578910976544", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578910864552", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578910977216", "facecolor": "#FFA500", "xindex": 2, "yindex": 3}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578910998656", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578910816240", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578910816072", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578911283016", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578911261864", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578911150264", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578911115752", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578911099872", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578911455160", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578911438104", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578911881592", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578911000336", "facecolor": "#FFA500", "xindex": 2, "yindex": 4}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578911001232", "facecolor": "#FFA500", "xindex": 2, "yindex": 5}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578911002128", "facecolor": "#FFA500", "xindex": 2, "yindex": 6}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578911048144", "facecolor": "#FFA500", "xindex": 2, "yindex": 7}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578911049040", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}], "xdomain": [225.0, 283.16279857699476], "axes": [{"tickvalues": [235, 244, 253, 262, 273], "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "visible": true, "grid": {"gridOn": false}, "nticks": 19, "fontsize": null, "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "scale": "linear", "position": "right"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Instat index", "coordinates": "axes", "zorder": 3, "id": "el11179140578911250640", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [15.55, 36.45]}], "height": 480.0, "id": "el11179140578911400176", "width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"ids": ["el11179140578910864888", "el11179140578910864384", "el11179140578910865672", "el11179140578910866568", "el11179140578910867408", "el11179140578910893000", "el11179140578910893896", "el11179140578910894792", "el11179140578910895688", "el11179140578910925320", "el11179140578910926216", "el11179140578910927112", "el11179140578910928008", "el11179140578910928848", "el11179140578910954440", "el11179140578910955336", "el11179140578910956232", "el11179140578910957128", "el11179140578910974472"], "type": "clickinfo", "low": 17, "wiek": {"35": [23242], "17": [1019551], "18": [399416], "20": [441197, 417479], "21": [247550, 252427], "22": [268959, 184605], "23": [184036, 170498, 95032], "24": [177954, 191554], "25": [97553], "26": [9608, 22766], "27": [247548, 79953], "28": [77048, 108741, 16827, 157695, 28275], "29": [24171, 4663, 23296, 60457], "30": [69731, 23413]}, "players": {"23296": ["Mateusz Machaj", 500, 224], "170498": ["Przemys\u0142aw Frankowski", 1291, 261], "108741": ["Ivan Runje", 2856, 284], "417479": ["Martin Adamec", 365, 245], "9608": ["Nemanja Mitrovic", 2905, 254], "23242": ["Rafa\u0142 Grzyb", 176, 239], "252427": ["Justas Lasickas", 20, 225], "191554": ["Zoran Arsenic", 1280, 281], "97553": ["Marko Poletanovic", 1732, 266], "399416": ["Michal Ozga", 98, 235], "16827": ["Arvydas Novikovas", 2729, 281], "184605": ["Andrej Kadlec", 740, 270], "268959": ["Martin Kostal", 838, 243], "177954": ["Bartosz Kwiecie\u0144", 1515, 248], "69731": ["Jakub W\u00f3jcicki", 1562, 247], "184036": ["Bodvar Bodvarsson", 1377, 260], "79953": ["Martin Pospisil", 2759, 261], "60457": ["Piotr Wlaz\u0142o", 62, 233], "24171": ["Roman Bezjak", 1089, 251], "441197": ["Patryk Klimala", 729, 232], "22766": ["Mile Savkovic", 336, 217], "28275": ["Stefan Scepovic", 342, 215], "23413": ["\u0141ukasz Burliga", 900, 253], "4663": ["Cillian Sheridan", 692, 258], "95032": ["Lukas Klemenz", 582, 241], "1019551": ["Maciej Twarowski", 36, 212], "247548": ["Taras Romanczuk", 3144, 283], "77048": ["Sitya", 3016, 261], "247550": ["Karol \u015awiderski", 1088, 252], "157695": ["Jesus Imaz", 1105, 270]}}, {"ids": ["el11179140578910976544", "el11179140578910864552", "el11179140578910977216", "el11179140578910998656", "el11179140578910816240", "el11179140578910816072", "el11179140578911283016", "el11179140578911261864", "el11179140578911150264", "el11179140578911115752", "el11179140578911099872", "el11179140578911455160", "el11179140578911438104", "el11179140578911881592", "el11179140578911000336", "el11179140578911001232", "el11179140578911002128", "el11179140578911048144", "el11179140578911049040"], "type": "clickinfo", "low": 17, "wiek": {"35": [23242], "17": [1019551], "18": [399416], "20": [441197, 417479], "21": [247550, 252427], "22": [268959, 184605], "23": [184036, 170498, 95032], "24": [177954, 191554], "25": [97553], "26": [9608, 22766], "27": [247548, 79953], "28": [77048, 108741, 16827, 157695, 28275], "29": [24171, 4663, 23296, 60457], "30": [69731, 23413]}, "players": {"23296": ["Mateusz Machaj", 500, 224], "170498": ["Przemys\u0142aw Frankowski", 1291, 261], "108741": ["Ivan Runje", 2856, 284], "417479": ["Martin Adamec", 365, 245], "9608": ["Nemanja Mitrovic", 2905, 254], "23242": ["Rafa\u0142 Grzyb", 176, 239], "252427": ["Justas Lasickas", 20, 225], "191554": ["Zoran Arsenic", 1280, 281], "97553": ["Marko Poletanovic", 1732, 266], "399416": ["Michal Ozga", 98, 235], "16827": ["Arvydas Novikovas", 2729, 281], "184605": ["Andrej Kadlec", 740, 270], "268959": ["Martin Kostal", 838, 243], "177954": ["Bartosz Kwiecie\u0144", 1515, 248], "69731": ["Jakub W\u00f3jcicki", 1562, 247], "184036": ["Bodvar Bodvarsson", 1377, 260], "79953": ["Martin Pospisil", 2759, 261], "60457": ["Piotr Wlaz\u0142o", 62, 233], "24171": ["Roman Bezjak", 1089, 251], "441197": ["Patryk Klimala", 729, 232], "22766": ["Mile Savkovic", 336, 217], "28275": ["Stefan Scepovic", 342, 215], "23413": ["\u0141ukasz Burliga", 900, 253], "4663": ["Cillian Sheridan", 692, 258], "95032": ["Lukas Klemenz", 582, 241], "1019551": ["Maciej Twarowski", 36, 212], "247548": ["Taras Romanczuk", 3144, 283], "77048": ["Sitya", 3016, 261], "247550": ["Karol \u015awiderski", 1088, 252], "157695": ["Jesus Imaz", 1105, 270]}}]});
            })
         });
}
</script>
