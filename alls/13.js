


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
    
       mpld3.draw_figure("aaa", {"data": {"data13": [[0.0, 28.5, 0.0], [3091.0, 28.5, 257.8105912930474], [3091.0, 29.5, 257.8105912930474], [0.0, 29.5, 0.0]], "data11": [[0.0, 26.5], [88.0, 26.5], [88.0, 27.5], [0.0, 27.5]], "data03": [[0.0, 17.5], [25.0, 17.5], [25.0, 18.5], [0.0, 18.5]], "data10": [[0.0, 25.5, 0.0], [1500.0, 25.5, 239.33533333333332], [1500.0, 26.5, 239.33533333333332], [0.0, 26.5, 0.0]], "data04": [[0.0, 18.5, 19.5, 32.5], [0.0, 18.5, 19.5, 32.5], [0.0, 19.5, 20.5, 33.5], [0.0, 19.5, 20.5, 33.5]], "data01": [[0.0, 15.5, 0.0, 17.5, 18.5, 19.5, 23.5, 26.5, 32.5], [6.0, 15.5, 0.0, 17.5, 18.5, 19.5, 23.5, 26.5, 32.5], [6.0, 16.5, 0.0, 18.5, 19.5, 20.5, 24.5, 27.5, 33.5], [0.0, 16.5, 0.0, 18.5, 19.5, 20.5, 24.5, 27.5, 33.5]], "data12": [[0.0, 27.5, 0.0], [7496.0, 27.5, 266.599386339381], [7496.0, 28.5, 266.599386339381], [0.0, 28.5, 0.0]], "data15": [[0.0, 30.5, 0.0], [3860.0, 30.5, 245.79100183102275], [3860.0, 31.5, 245.79100183102275], [0.0, 31.5, 0.0]], "data06": [[0.0, 21.5, 0.0], [2187.0, 21.5, 285.71101966163695], [2187.0, 22.5, 285.71101966163695], [0.0, 22.5, 0.0]], "data16": [[0.0, 31.5, 0.0], [1416.0, 31.5, 220.9555069292487], [1416.0, 32.5, 220.9555069292487], [0.0, 32.5, 0.0]], "data02": [[0.0, 16.5, 0.0], [454.0, 16.5, 244.7645739910314], [454.0, 17.5, 244.7645739910314], [0.0, 17.5, 0.0]], "data08": [[0.0, 23.5], [73.0, 23.5], [73.0, 24.5], [0.0, 24.5]], "data14": [[0.0, 29.5, 0.0], [3741.0, 29.5, 254.97271268057784], [3741.0, 30.5, 254.97271268057784], [0.0, 30.5, 0.0]], "data09": [[0.0, 24.5, 0.0], [6336.0, 24.5, 260.674837893405], [6336.0, 25.5, 260.674837893405], [0.0, 25.5, 0.0]], "data17": [[0.0, 33.5, 0.0], [363.0, 33.5, 249.2958579881657], [363.0, 34.5, 249.2958579881657], [0.0, 34.5, 0.0]], "data07": [[0.0, 22.5, 0.0], [2889.0, 22.5, 253.53236413984078], [2889.0, 23.5, 253.53236413984078], [0.0, 23.5, 0.0]], "data05": [[0.0, 20.5, 0.0], [1803.0, 20.5, 267.6855241264559], [1803.0, 21.5, 267.6855241264559], [0.0, 21.5, 0.0]]}, "axes": [{"ydomain": [14.55, 35.45], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "sharey": ["el11179140578903580912"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [8245.0, 6.0], "id": "el11179140578904057952", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578903197568", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578903197064", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578903198352", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578903199248", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578903228880", "facecolor": "#FF0000", "xindex": 0, "yindex": 2}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578903229776", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578903230672", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578903231568", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578903232464", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578903258000", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578903673768", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578903673432", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578903635336", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578903604976", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578903524072", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578903977208", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data16", "coordinates": "data", "zorder": 1, "id": "el11179140578903957120", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578903790536", "facecolor": "#FF0000", "xindex": 0, "yindex": 3}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data17", "coordinates": "data", "zorder": 1, "id": "el11179140578903773480", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}], "xdomain": [8245.0, 6.0], "axes": [{"tickvalues": null, "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 6, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "grid": {"gridOn": false}, "nticks": 19, "fontsize": 10.0, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "position": "left"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Minuty", "coordinates": "axes", "zorder": 3, "id": "el11179140578903955496", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [14.55, 35.45]}, {"ydomain": [14.55, 35.45], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "sharey": ["el11179140578904057952"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [210.9555069292487, 295.71101966163695], "id": "el11179140578903580912", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578903740488", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578903197288", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578904243224", "facecolor": "#FFA500", "xindex": 2, "yindex": 3}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578904249064", "facecolor": "#FFA500", "xindex": 2, "yindex": 4}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578903260072", "facecolor": "#FFA500", "xindex": 2, "yindex": 5}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578903260856", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578903310968", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578903311864", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578903312760", "facecolor": "#FFA500", "xindex": 2, "yindex": 6}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578903313656", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578903335096", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578903335992", "facecolor": "#FFA500", "xindex": 2, "yindex": 7}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578903336888", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578903337784", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578903338680", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578903360120", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data16", "coordinates": "data", "zorder": 1, "id": "el11179140578903361016", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578903361912", "facecolor": "#FFA500", "xindex": 2, "yindex": 8}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data17", "coordinates": "data", "zorder": 1, "id": "el11179140578903362808", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}], "xdomain": [210.9555069292487, 295.71101966163695], "axes": [{"tickvalues": [220, 236, 252, 268, 285], "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "grid": {"gridOn": false}, "nticks": 19, "fontsize": null, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "position": "right"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Instat index", "coordinates": "axes", "zorder": 3, "id": "el11179140578903583320", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [14.55, 35.45]}], "height": 480.0, "id": "el11179140578904092568", "width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"ids": ["el11179140578903197568", "el11179140578903197064", "el11179140578903198352", "el11179140578903199248", "el11179140578903228880", "el11179140578903229776", "el11179140578903230672", "el11179140578903231568", "el11179140578903232464", "el11179140578903258000", "el11179140578903673768", "el11179140578903673432", "el11179140578903635336", "el11179140578903604976", "el11179140578903524072", "el11179140578903977208", "el11179140578903957120", "el11179140578903790536", "el11179140578903773480"], "type": "clickinfo", "low": 16, "wiek": {"32": [190445, 18958], "34": [157815], "16": [1082247], "17": [984168], "18": [942356], "21": [289448, 202541, 318228], "22": [164288], "23": [248251, 244752], "24": [167343], "25": [16797, 87985, 162067], "26": [77053], "27": [80732], "28": [1720, 23404, 4273, 3201], "29": [23181], "30": [23214, 17006], "31": [26078, 23220, 31507]}, "players": {"164288": ["Luka Zarandia", 2187, 285], "3201": ["Andriy Bohdanov", 497, 241], "1082247": ["Mateusz Stepien", 6, 0], "23181": ["Damian Zbozie\u0144", 3091, 257], "18958": ["Goran Cvijanovic", 444, 222], "190445": ["Rafa\u0142 Siemaszko", 972, 220], "244752": ["Maksymilian Banaszewski", 428, 241], "162067": ["Nabil Aankour", 1428, 236], "942356": ["Jan \u0141o\u015b", 25, 234], "23214": ["Adam Marciniak", 3168, 255], "984168": ["Mateusz M\u0142y\u0144ski", 454, 244], "80732": ["Karol Danielak", 88, 201], "16797": ["Frederik Helstrup", 2664, 256], "26078": ["Luka Maric", 2143, 241], "87985": ["Adam Deja", 2244, 280], "289448": ["Christian Maghoma", 1438, 277], "23404": ["Maciej Jankowski", 2755, 255], "202541": ["Michael Olczyk", 337, 233], "17006": ["Tadeusz Socha", 573, 254], "167343": ["Robert Sulewski", 73, 207], "4273": ["Marko Vejinovic", 1327, 289], "31507": ["Dawid So\u0142decki", 406, 249], "23220": ["Adam Danch", 1311, 251], "157815": ["Marcus Oliveira", 363, 249], "1720": ["Micha\u0142 Janota", 2917, 271], "318228": ["Adrian Klimczak", 28, 183], "248251": ["Micha\u0142 Nalepa", 2461, 255], "77053": ["Aleksandar Kolev", 1500, 239]}}, {"ids": ["el11179140578903740488", "el11179140578903197288", "el11179140578904243224", "el11179140578904249064", "el11179140578903260072", "el11179140578903260856", "el11179140578903310968", "el11179140578903311864", "el11179140578903312760", "el11179140578903313656", "el11179140578903335096", "el11179140578903335992", "el11179140578903336888", "el11179140578903337784", "el11179140578903338680", "el11179140578903360120", "el11179140578903361016", "el11179140578903361912", "el11179140578903362808"], "type": "clickinfo", "low": 16, "wiek": {"32": [190445, 18958], "34": [157815], "16": [1082247], "17": [984168], "18": [942356], "21": [289448, 202541, 318228], "22": [164288], "23": [248251, 244752], "24": [167343], "25": [16797, 87985, 162067], "26": [77053], "27": [80732], "28": [1720, 23404, 4273, 3201], "29": [23181], "30": [23214, 17006], "31": [26078, 23220, 31507]}, "players": {"164288": ["Luka Zarandia", 2187, 285], "3201": ["Andriy Bohdanov", 497, 241], "1082247": ["Mateusz Stepien", 6, 0], "23181": ["Damian Zbozie\u0144", 3091, 257], "18958": ["Goran Cvijanovic", 444, 222], "190445": ["Rafa\u0142 Siemaszko", 972, 220], "244752": ["Maksymilian Banaszewski", 428, 241], "162067": ["Nabil Aankour", 1428, 236], "942356": ["Jan \u0141o\u015b", 25, 234], "23214": ["Adam Marciniak", 3168, 255], "984168": ["Mateusz M\u0142y\u0144ski", 454, 244], "80732": ["Karol Danielak", 88, 201], "16797": ["Frederik Helstrup", 2664, 256], "26078": ["Luka Maric", 2143, 241], "87985": ["Adam Deja", 2244, 280], "289448": ["Christian Maghoma", 1438, 277], "23404": ["Maciej Jankowski", 2755, 255], "202541": ["Michael Olczyk", 337, 233], "17006": ["Tadeusz Socha", 573, 254], "167343": ["Robert Sulewski", 73, 207], "4273": ["Marko Vejinovic", 1327, 289], "31507": ["Dawid So\u0142decki", 406, 249], "23220": ["Adam Danch", 1311, 251], "157815": ["Marcus Oliveira", 363, 249], "1720": ["Micha\u0142 Janota", 2917, 271], "318228": ["Adrian Klimczak", 28, 183], "248251": ["Micha\u0142 Nalepa", 2461, 255], "77053": ["Aleksandar Kolev", 1500, 239]}}]});
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
    
         mpld3.draw_figure("aaa", {"data": {"data13": [[0.0, 28.5, 0.0], [3091.0, 28.5, 257.8105912930474], [3091.0, 29.5, 257.8105912930474], [0.0, 29.5, 0.0]], "data11": [[0.0, 26.5], [88.0, 26.5], [88.0, 27.5], [0.0, 27.5]], "data03": [[0.0, 17.5], [25.0, 17.5], [25.0, 18.5], [0.0, 18.5]], "data10": [[0.0, 25.5, 0.0], [1500.0, 25.5, 239.33533333333332], [1500.0, 26.5, 239.33533333333332], [0.0, 26.5, 0.0]], "data04": [[0.0, 18.5, 19.5, 32.5], [0.0, 18.5, 19.5, 32.5], [0.0, 19.5, 20.5, 33.5], [0.0, 19.5, 20.5, 33.5]], "data01": [[0.0, 15.5, 0.0, 17.5, 18.5, 19.5, 23.5, 26.5, 32.5], [6.0, 15.5, 0.0, 17.5, 18.5, 19.5, 23.5, 26.5, 32.5], [6.0, 16.5, 0.0, 18.5, 19.5, 20.5, 24.5, 27.5, 33.5], [0.0, 16.5, 0.0, 18.5, 19.5, 20.5, 24.5, 27.5, 33.5]], "data12": [[0.0, 27.5, 0.0], [7496.0, 27.5, 266.599386339381], [7496.0, 28.5, 266.599386339381], [0.0, 28.5, 0.0]], "data15": [[0.0, 30.5, 0.0], [3860.0, 30.5, 245.79100183102275], [3860.0, 31.5, 245.79100183102275], [0.0, 31.5, 0.0]], "data06": [[0.0, 21.5, 0.0], [2187.0, 21.5, 285.71101966163695], [2187.0, 22.5, 285.71101966163695], [0.0, 22.5, 0.0]], "data16": [[0.0, 31.5, 0.0], [1416.0, 31.5, 220.9555069292487], [1416.0, 32.5, 220.9555069292487], [0.0, 32.5, 0.0]], "data02": [[0.0, 16.5, 0.0], [454.0, 16.5, 244.7645739910314], [454.0, 17.5, 244.7645739910314], [0.0, 17.5, 0.0]], "data08": [[0.0, 23.5], [73.0, 23.5], [73.0, 24.5], [0.0, 24.5]], "data14": [[0.0, 29.5, 0.0], [3741.0, 29.5, 254.97271268057784], [3741.0, 30.5, 254.97271268057784], [0.0, 30.5, 0.0]], "data09": [[0.0, 24.5, 0.0], [6336.0, 24.5, 260.674837893405], [6336.0, 25.5, 260.674837893405], [0.0, 25.5, 0.0]], "data17": [[0.0, 33.5, 0.0], [363.0, 33.5, 249.2958579881657], [363.0, 34.5, 249.2958579881657], [0.0, 34.5, 0.0]], "data07": [[0.0, 22.5, 0.0], [2889.0, 22.5, 253.53236413984078], [2889.0, 23.5, 253.53236413984078], [0.0, 23.5, 0.0]], "data05": [[0.0, 20.5, 0.0], [1803.0, 20.5, 267.6855241264559], [1803.0, 21.5, 267.6855241264559], [0.0, 21.5, 0.0]]}, "axes": [{"ydomain": [14.55, 35.45], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "sharey": ["el11179140578903580912"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [8245.0, 6.0], "id": "el11179140578904057952", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578903197568", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578903197064", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578903198352", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578903199248", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578903228880", "facecolor": "#FF0000", "xindex": 0, "yindex": 2}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578903229776", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578903230672", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578903231568", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578903232464", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578903258000", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578903673768", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578903673432", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578903635336", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578903604976", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578903524072", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578903977208", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data16", "coordinates": "data", "zorder": 1, "id": "el11179140578903957120", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578903790536", "facecolor": "#FF0000", "xindex": 0, "yindex": 3}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data17", "coordinates": "data", "zorder": 1, "id": "el11179140578903773480", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}], "xdomain": [8245.0, 6.0], "axes": [{"tickvalues": null, "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 6, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "grid": {"gridOn": false}, "nticks": 19, "fontsize": 10.0, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "position": "left"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Minuty", "coordinates": "axes", "zorder": 3, "id": "el11179140578903955496", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [14.55, 35.45]}, {"ydomain": [14.55, 35.45], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "sharey": ["el11179140578904057952"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [210.9555069292487, 295.71101966163695], "id": "el11179140578903580912", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578903740488", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578903197288", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578904243224", "facecolor": "#FFA500", "xindex": 2, "yindex": 3}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578904249064", "facecolor": "#FFA500", "xindex": 2, "yindex": 4}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578903260072", "facecolor": "#FFA500", "xindex": 2, "yindex": 5}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578903260856", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578903310968", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578903311864", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578903312760", "facecolor": "#FFA500", "xindex": 2, "yindex": 6}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578903313656", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578903335096", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578903335992", "facecolor": "#FFA500", "xindex": 2, "yindex": 7}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578903336888", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578903337784", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578903338680", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578903360120", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data16", "coordinates": "data", "zorder": 1, "id": "el11179140578903361016", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578903361912", "facecolor": "#FFA500", "xindex": 2, "yindex": 8}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data17", "coordinates": "data", "zorder": 1, "id": "el11179140578903362808", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}], "xdomain": [210.9555069292487, 295.71101966163695], "axes": [{"tickvalues": [220, 236, 252, 268, 285], "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "grid": {"gridOn": false}, "nticks": 19, "fontsize": null, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "position": "right"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Instat index", "coordinates": "axes", "zorder": 3, "id": "el11179140578903583320", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [14.55, 35.45]}], "height": 480.0, "id": "el11179140578904092568", "width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"ids": ["el11179140578903197568", "el11179140578903197064", "el11179140578903198352", "el11179140578903199248", "el11179140578903228880", "el11179140578903229776", "el11179140578903230672", "el11179140578903231568", "el11179140578903232464", "el11179140578903258000", "el11179140578903673768", "el11179140578903673432", "el11179140578903635336", "el11179140578903604976", "el11179140578903524072", "el11179140578903977208", "el11179140578903957120", "el11179140578903790536", "el11179140578903773480"], "type": "clickinfo", "low": 16, "wiek": {"32": [190445, 18958], "34": [157815], "16": [1082247], "17": [984168], "18": [942356], "21": [289448, 202541, 318228], "22": [164288], "23": [248251, 244752], "24": [167343], "25": [16797, 87985, 162067], "26": [77053], "27": [80732], "28": [1720, 23404, 4273, 3201], "29": [23181], "30": [23214, 17006], "31": [26078, 23220, 31507]}, "players": {"164288": ["Luka Zarandia", 2187, 285], "3201": ["Andriy Bohdanov", 497, 241], "1082247": ["Mateusz Stepien", 6, 0], "23181": ["Damian Zbozie\u0144", 3091, 257], "18958": ["Goran Cvijanovic", 444, 222], "190445": ["Rafa\u0142 Siemaszko", 972, 220], "244752": ["Maksymilian Banaszewski", 428, 241], "162067": ["Nabil Aankour", 1428, 236], "942356": ["Jan \u0141o\u015b", 25, 234], "23214": ["Adam Marciniak", 3168, 255], "984168": ["Mateusz M\u0142y\u0144ski", 454, 244], "80732": ["Karol Danielak", 88, 201], "16797": ["Frederik Helstrup", 2664, 256], "26078": ["Luka Maric", 2143, 241], "87985": ["Adam Deja", 2244, 280], "289448": ["Christian Maghoma", 1438, 277], "23404": ["Maciej Jankowski", 2755, 255], "202541": ["Michael Olczyk", 337, 233], "17006": ["Tadeusz Socha", 573, 254], "167343": ["Robert Sulewski", 73, 207], "4273": ["Marko Vejinovic", 1327, 289], "31507": ["Dawid So\u0142decki", 406, 249], "23220": ["Adam Danch", 1311, 251], "157815": ["Marcus Oliveira", 363, 249], "1720": ["Micha\u0142 Janota", 2917, 271], "318228": ["Adrian Klimczak", 28, 183], "248251": ["Micha\u0142 Nalepa", 2461, 255], "77053": ["Aleksandar Kolev", 1500, 239]}}, {"ids": ["el11179140578903740488", "el11179140578903197288", "el11179140578904243224", "el11179140578904249064", "el11179140578903260072", "el11179140578903260856", "el11179140578903310968", "el11179140578903311864", "el11179140578903312760", "el11179140578903313656", "el11179140578903335096", "el11179140578903335992", "el11179140578903336888", "el11179140578903337784", "el11179140578903338680", "el11179140578903360120", "el11179140578903361016", "el11179140578903361912", "el11179140578903362808"], "type": "clickinfo", "low": 16, "wiek": {"32": [190445, 18958], "34": [157815], "16": [1082247], "17": [984168], "18": [942356], "21": [289448, 202541, 318228], "22": [164288], "23": [248251, 244752], "24": [167343], "25": [16797, 87985, 162067], "26": [77053], "27": [80732], "28": [1720, 23404, 4273, 3201], "29": [23181], "30": [23214, 17006], "31": [26078, 23220, 31507]}, "players": {"164288": ["Luka Zarandia", 2187, 285], "3201": ["Andriy Bohdanov", 497, 241], "1082247": ["Mateusz Stepien", 6, 0], "23181": ["Damian Zbozie\u0144", 3091, 257], "18958": ["Goran Cvijanovic", 444, 222], "190445": ["Rafa\u0142 Siemaszko", 972, 220], "244752": ["Maksymilian Banaszewski", 428, 241], "162067": ["Nabil Aankour", 1428, 236], "942356": ["Jan \u0141o\u015b", 25, 234], "23214": ["Adam Marciniak", 3168, 255], "984168": ["Mateusz M\u0142y\u0144ski", 454, 244], "80732": ["Karol Danielak", 88, 201], "16797": ["Frederik Helstrup", 2664, 256], "26078": ["Luka Maric", 2143, 241], "87985": ["Adam Deja", 2244, 280], "289448": ["Christian Maghoma", 1438, 277], "23404": ["Maciej Jankowski", 2755, 255], "202541": ["Michael Olczyk", 337, 233], "17006": ["Tadeusz Socha", 573, 254], "167343": ["Robert Sulewski", 73, 207], "4273": ["Marko Vejinovic", 1327, 289], "31507": ["Dawid So\u0142decki", 406, 249], "23220": ["Adam Danch", 1311, 251], "157815": ["Marcus Oliveira", 363, 249], "1720": ["Micha\u0142 Janota", 2917, 271], "318228": ["Adrian Klimczak", 28, 183], "248251": ["Micha\u0142 Nalepa", 2461, 255], "77053": ["Aleksandar Kolev", 1500, 239]}}]});
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
    
                 mpld3.draw_figure("aaa", {"data": {"data13": [[0.0, 28.5, 0.0], [3091.0, 28.5, 257.8105912930474], [3091.0, 29.5, 257.8105912930474], [0.0, 29.5, 0.0]], "data11": [[0.0, 26.5], [88.0, 26.5], [88.0, 27.5], [0.0, 27.5]], "data03": [[0.0, 17.5], [25.0, 17.5], [25.0, 18.5], [0.0, 18.5]], "data10": [[0.0, 25.5, 0.0], [1500.0, 25.5, 239.33533333333332], [1500.0, 26.5, 239.33533333333332], [0.0, 26.5, 0.0]], "data04": [[0.0, 18.5, 19.5, 32.5], [0.0, 18.5, 19.5, 32.5], [0.0, 19.5, 20.5, 33.5], [0.0, 19.5, 20.5, 33.5]], "data01": [[0.0, 15.5, 0.0, 17.5, 18.5, 19.5, 23.5, 26.5, 32.5], [6.0, 15.5, 0.0, 17.5, 18.5, 19.5, 23.5, 26.5, 32.5], [6.0, 16.5, 0.0, 18.5, 19.5, 20.5, 24.5, 27.5, 33.5], [0.0, 16.5, 0.0, 18.5, 19.5, 20.5, 24.5, 27.5, 33.5]], "data12": [[0.0, 27.5, 0.0], [7496.0, 27.5, 266.599386339381], [7496.0, 28.5, 266.599386339381], [0.0, 28.5, 0.0]], "data15": [[0.0, 30.5, 0.0], [3860.0, 30.5, 245.79100183102275], [3860.0, 31.5, 245.79100183102275], [0.0, 31.5, 0.0]], "data06": [[0.0, 21.5, 0.0], [2187.0, 21.5, 285.71101966163695], [2187.0, 22.5, 285.71101966163695], [0.0, 22.5, 0.0]], "data16": [[0.0, 31.5, 0.0], [1416.0, 31.5, 220.9555069292487], [1416.0, 32.5, 220.9555069292487], [0.0, 32.5, 0.0]], "data02": [[0.0, 16.5, 0.0], [454.0, 16.5, 244.7645739910314], [454.0, 17.5, 244.7645739910314], [0.0, 17.5, 0.0]], "data08": [[0.0, 23.5], [73.0, 23.5], [73.0, 24.5], [0.0, 24.5]], "data14": [[0.0, 29.5, 0.0], [3741.0, 29.5, 254.97271268057784], [3741.0, 30.5, 254.97271268057784], [0.0, 30.5, 0.0]], "data09": [[0.0, 24.5, 0.0], [6336.0, 24.5, 260.674837893405], [6336.0, 25.5, 260.674837893405], [0.0, 25.5, 0.0]], "data17": [[0.0, 33.5, 0.0], [363.0, 33.5, 249.2958579881657], [363.0, 34.5, 249.2958579881657], [0.0, 34.5, 0.0]], "data07": [[0.0, 22.5, 0.0], [2889.0, 22.5, 253.53236413984078], [2889.0, 23.5, 253.53236413984078], [0.0, 23.5, 0.0]], "data05": [[0.0, 20.5, 0.0], [1803.0, 20.5, 267.6855241264559], [1803.0, 21.5, 267.6855241264559], [0.0, 21.5, 0.0]]}, "axes": [{"ydomain": [14.55, 35.45], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "sharey": ["el11179140578903580912"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [8245.0, 6.0], "id": "el11179140578904057952", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578903197568", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578903197064", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578903198352", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578903199248", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578903228880", "facecolor": "#FF0000", "xindex": 0, "yindex": 2}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578903229776", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578903230672", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578903231568", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578903232464", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578903258000", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578903673768", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578903673432", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578903635336", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578903604976", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578903524072", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578903977208", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data16", "coordinates": "data", "zorder": 1, "id": "el11179140578903957120", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578903790536", "facecolor": "#FF0000", "xindex": 0, "yindex": 3}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data17", "coordinates": "data", "zorder": 1, "id": "el11179140578903773480", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}], "xdomain": [8245.0, 6.0], "axes": [{"tickvalues": null, "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 6, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "grid": {"gridOn": false}, "nticks": 19, "fontsize": 10.0, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "position": "left"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Minuty", "coordinates": "axes", "zorder": 3, "id": "el11179140578903955496", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [14.55, 35.45]}, {"ydomain": [14.55, 35.45], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "sharey": ["el11179140578904057952"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [210.9555069292487, 295.71101966163695], "id": "el11179140578903580912", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578903740488", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578903197288", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578904243224", "facecolor": "#FFA500", "xindex": 2, "yindex": 3}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578904249064", "facecolor": "#FFA500", "xindex": 2, "yindex": 4}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578903260072", "facecolor": "#FFA500", "xindex": 2, "yindex": 5}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578903260856", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578903310968", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578903311864", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578903312760", "facecolor": "#FFA500", "xindex": 2, "yindex": 6}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578903313656", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578903335096", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578903335992", "facecolor": "#FFA500", "xindex": 2, "yindex": 7}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578903336888", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578903337784", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578903338680", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578903360120", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data16", "coordinates": "data", "zorder": 1, "id": "el11179140578903361016", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578903361912", "facecolor": "#FFA500", "xindex": 2, "yindex": 8}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data17", "coordinates": "data", "zorder": 1, "id": "el11179140578903362808", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}], "xdomain": [210.9555069292487, 295.71101966163695], "axes": [{"tickvalues": [220, 236, 252, 268, 285], "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "grid": {"gridOn": false}, "nticks": 19, "fontsize": null, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "position": "right"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Instat index", "coordinates": "axes", "zorder": 3, "id": "el11179140578903583320", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [14.55, 35.45]}], "height": 480.0, "id": "el11179140578904092568", "width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"ids": ["el11179140578903197568", "el11179140578903197064", "el11179140578903198352", "el11179140578903199248", "el11179140578903228880", "el11179140578903229776", "el11179140578903230672", "el11179140578903231568", "el11179140578903232464", "el11179140578903258000", "el11179140578903673768", "el11179140578903673432", "el11179140578903635336", "el11179140578903604976", "el11179140578903524072", "el11179140578903977208", "el11179140578903957120", "el11179140578903790536", "el11179140578903773480"], "type": "clickinfo", "low": 16, "wiek": {"32": [190445, 18958], "34": [157815], "16": [1082247], "17": [984168], "18": [942356], "21": [289448, 202541, 318228], "22": [164288], "23": [248251, 244752], "24": [167343], "25": [16797, 87985, 162067], "26": [77053], "27": [80732], "28": [1720, 23404, 4273, 3201], "29": [23181], "30": [23214, 17006], "31": [26078, 23220, 31507]}, "players": {"164288": ["Luka Zarandia", 2187, 285], "3201": ["Andriy Bohdanov", 497, 241], "1082247": ["Mateusz Stepien", 6, 0], "23181": ["Damian Zbozie\u0144", 3091, 257], "18958": ["Goran Cvijanovic", 444, 222], "190445": ["Rafa\u0142 Siemaszko", 972, 220], "244752": ["Maksymilian Banaszewski", 428, 241], "162067": ["Nabil Aankour", 1428, 236], "942356": ["Jan \u0141o\u015b", 25, 234], "23214": ["Adam Marciniak", 3168, 255], "984168": ["Mateusz M\u0142y\u0144ski", 454, 244], "80732": ["Karol Danielak", 88, 201], "16797": ["Frederik Helstrup", 2664, 256], "26078": ["Luka Maric", 2143, 241], "87985": ["Adam Deja", 2244, 280], "289448": ["Christian Maghoma", 1438, 277], "23404": ["Maciej Jankowski", 2755, 255], "202541": ["Michael Olczyk", 337, 233], "17006": ["Tadeusz Socha", 573, 254], "167343": ["Robert Sulewski", 73, 207], "4273": ["Marko Vejinovic", 1327, 289], "31507": ["Dawid So\u0142decki", 406, 249], "23220": ["Adam Danch", 1311, 251], "157815": ["Marcus Oliveira", 363, 249], "1720": ["Micha\u0142 Janota", 2917, 271], "318228": ["Adrian Klimczak", 28, 183], "248251": ["Micha\u0142 Nalepa", 2461, 255], "77053": ["Aleksandar Kolev", 1500, 239]}}, {"ids": ["el11179140578903740488", "el11179140578903197288", "el11179140578904243224", "el11179140578904249064", "el11179140578903260072", "el11179140578903260856", "el11179140578903310968", "el11179140578903311864", "el11179140578903312760", "el11179140578903313656", "el11179140578903335096", "el11179140578903335992", "el11179140578903336888", "el11179140578903337784", "el11179140578903338680", "el11179140578903360120", "el11179140578903361016", "el11179140578903361912", "el11179140578903362808"], "type": "clickinfo", "low": 16, "wiek": {"32": [190445, 18958], "34": [157815], "16": [1082247], "17": [984168], "18": [942356], "21": [289448, 202541, 318228], "22": [164288], "23": [248251, 244752], "24": [167343], "25": [16797, 87985, 162067], "26": [77053], "27": [80732], "28": [1720, 23404, 4273, 3201], "29": [23181], "30": [23214, 17006], "31": [26078, 23220, 31507]}, "players": {"164288": ["Luka Zarandia", 2187, 285], "3201": ["Andriy Bohdanov", 497, 241], "1082247": ["Mateusz Stepien", 6, 0], "23181": ["Damian Zbozie\u0144", 3091, 257], "18958": ["Goran Cvijanovic", 444, 222], "190445": ["Rafa\u0142 Siemaszko", 972, 220], "244752": ["Maksymilian Banaszewski", 428, 241], "162067": ["Nabil Aankour", 1428, 236], "942356": ["Jan \u0141o\u015b", 25, 234], "23214": ["Adam Marciniak", 3168, 255], "984168": ["Mateusz M\u0142y\u0144ski", 454, 244], "80732": ["Karol Danielak", 88, 201], "16797": ["Frederik Helstrup", 2664, 256], "26078": ["Luka Maric", 2143, 241], "87985": ["Adam Deja", 2244, 280], "289448": ["Christian Maghoma", 1438, 277], "23404": ["Maciej Jankowski", 2755, 255], "202541": ["Michael Olczyk", 337, 233], "17006": ["Tadeusz Socha", 573, 254], "167343": ["Robert Sulewski", 73, 207], "4273": ["Marko Vejinovic", 1327, 289], "31507": ["Dawid So\u0142decki", 406, 249], "23220": ["Adam Danch", 1311, 251], "157815": ["Marcus Oliveira", 363, 249], "1720": ["Micha\u0142 Janota", 2917, 271], "318228": ["Adrian Klimczak", 28, 183], "248251": ["Micha\u0142 Nalepa", 2461, 255], "77053": ["Aleksandar Kolev", 1500, 239]}}]});
            })
         });
}
</script>
