
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
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low","vals","alls", "which"];

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
        var which = this.props.which;
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
        console.log(mySet.has(which));
        if (mySet.has(which) == false) {
              mySet.add(which);
        this.props.ids.forEach(function(id, i) {
           
            var obj = mpld3.get_element(id);
                 console.log(id, i, obj);
                console.log(id, i, obj, glob);
                console.log(obj.elements());
            obj.elements().on('mousedown',function(d){
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

    }
    
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low","vals","alls", "which"];

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
        var which = this.props.which;
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
        console.log(mySet.has(which));
        if (mySet.has(which) == false) {
              mySet.add(which);
        this.props.ids.forEach(function(id, i) {
           
            var obj = mpld3.get_element(id);
                 console.log(id, i, obj);
                console.log(id, i, obj, glob);
                console.log(obj.elements());
            obj.elements().on('mousedown',function(d){
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

    }
    
       mpld3.draw_figure("id1", {"width": 640.0, "data": {"data01": [[0.0, 18.5, 0.0, 20.5, 21.5, 25.5, 27.5, 31.5], [5.0, 18.5, 0.0, 20.5, 21.5, 25.5, 27.5, 31.5], [5.0, 19.5, 0.0, 21.5, 22.5, 26.5, 28.5, 32.5], [0.0, 19.5, 0.0, 21.5, 22.5, 26.5, 28.5, 32.5]], "data11": [[0.0, 32.5, 0.0], [3264.0, 32.5, 247.0], [3264.0, 33.5, 247.0], [0.0, 33.5, 0.0]], "data02": [[0.0, 19.5, 0.0, 29.5], [3207.0, 19.5, 261.0, 29.5], [3207.0, 20.5, 261.0, 30.5], [0.0, 20.5, 0.0, 30.5]], "data09": [[0.0, 29.5], [2059.0, 29.5], [2059.0, 30.5], [0.0, 30.5]], "data06": [[0.0, 24.5, 0.0, 28.5], [4905.0, 24.5, 263.0, 28.5], [4905.0, 25.5, 263.0, 29.5], [0.0, 25.5, 0.0, 29.5]], "data10": [[0.0, 30.5, 0.0], [862.0, 30.5, 246.0], [862.0, 31.5, 246.0], [0.0, 31.5, 0.0]], "data05": [[0.0, 23.5, 0.0], [3185.0, 23.5, 272.0], [3185.0, 24.5, 272.0], [0.0, 24.5, 0.0]], "data04": [[0.0, 22.5, 0.0], [662.0, 22.5, 226.0], [662.0, 23.5, 226.0], [0.0, 23.5, 0.0]], "data03": [[0.0, 20.5, 21.5, 25.5, 27.5, 31.5], [0.0, 20.5, 21.5, 25.5, 27.5, 31.5], [0.0, 21.5, 22.5, 26.5, 28.5, 32.5], [0.0, 21.5, 22.5, 26.5, 28.5, 32.5]], "data08": [[0.0, 28.5], [3653.0, 28.5], [3653.0, 29.5], [0.0, 29.5]], "data07": [[0.0, 26.5, 0.0], [13426.0, 26.5, 273.0], [13426.0, 27.5, 273.0], [0.0, 27.5, 0.0]]}, "axes": [{"sharey": ["el13062140682305624944"], "collections": [], "ylim": [17.75, 34.25], "lines": [], "yscale": "linear", "zoomable": true, "xlim": [16781.25, 5.0], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "xscale": "linear", "axes": [{"position": "bottom", "nticks": 5, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "tickvalues": null, "visible": true}, {"position": "left", "nticks": 15, "grid": {"gridOn": false}, "scale": "linear", "fontsize": 10.0, "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "visible": true}], "xdomain": [16781.25, 5.0], "paths": [{"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data01", "id": "el13062140682305768976", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data02", "id": "el13062140682305768472", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data03", "id": "el13062140682305278304", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 2, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data03", "id": "el13062140682305279200", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data04", "id": "el13062140682305280096", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data05", "id": "el13062140682305280992", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data06", "id": "el13062140682305281888", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 3, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data03", "id": "el13062140682305303328", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data07", "id": "el13062140682305304224", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 4, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data03", "id": "el13062140682305305120", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data08", "id": "el13062140682305306016", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data09", "id": "el13062140682305323360", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data10", "id": "el13062140682305324256", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 5, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data03", "id": "el13062140682305325152", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data11", "id": "el13062140682305326048", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}], "axesbg": "#FFFFFF", "axesbgalpha": null, "images": [], "id": "el13062140682306385736", "ydomain": [17.75, 34.25], "markers": [], "texts": [{"fontsize": 14.0, "zorder": 3, "color": "#000000", "id": "el13062140682306363632", "position": [0.5, -0.07921476671476674], "coordinates": "axes", "alpha": 1, "v_baseline": "hanging", "h_anchor": "middle", "rotation": -0.0, "text": "Minuty"}], "sharex": []}, {"sharey": ["el13062140682306385736"], "collections": [], "ylim": [17.75, 34.25], "lines": [], "yscale": "linear", "zoomable": true, "xlim": [216.0, 283.0], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "xscale": "linear", "axes": [{"position": "bottom", "nticks": 5, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "tickvalues": [226, 237, 248, 259, 273], "visible": true}, {"position": "right", "nticks": 15, "grid": {"gridOn": false}, "scale": "linear", "fontsize": null, "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "visible": true}], "xdomain": [216.0, 283.0], "paths": [{"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data01", "id": "el13062140682305352760", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data02", "id": "el13062140682305768696", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 3, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data01", "id": "el13062140682305353432", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 4, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data01", "id": "el13062140682305354328", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data04", "id": "el13062140682305355224", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data05", "id": "el13062140682305376664", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data06", "id": "el13062140682305377560", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 5, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data01", "id": "el13062140682305378456", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data07", "id": "el13062140682305379352", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 6, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data01", "id": "el13062140682305380248", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 3, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data06", "id": "el13062140682305405784", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 3, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data02", "id": "el13062140682305406680", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data10", "id": "el13062140682305407576", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 7, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data01", "id": "el13062140682305408472", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data11", "id": "el13062140682305429912", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}], "axesbg": "#FFFFFF", "axesbgalpha": null, "images": [], "id": "el13062140682305624944", "ydomain": [17.75, 34.25], "markers": [], "texts": [{"fontsize": 14.0, "zorder": 3, "color": "#000000", "id": "el13062140682305651992", "position": [0.5, -0.07921476671476674], "coordinates": "axes", "alpha": 1, "v_baseline": "hanging", "h_anchor": "middle", "rotation": -0.0, "text": "Instat index"}], "sharex": []}], "height": 480.0, "id": "el13062140682305836928", "plugins": [{"type": "reset"}, {"enabled": false, "button": true, "type": "zoom"}, {"enabled": false, "button": true, "type": "boxzoom"}, {"wiek": {"33": [4208, 9238], "19": [399419], "20": [272939, 472324, 447379, 362260], "23": [95037], "24": [14133, 259194], "25": [164532, 158324, 191229], "27": [63395, 15112, 158628, 163210, 64651], "29": [28083, 27503], "30": [23294], "31": [24213]}, "ids": ["el13062140682305768976", "el13062140682305768472", "el13062140682305278304", "el13062140682305279200", "el13062140682305280096", "el13062140682305280992", "el13062140682305281888", "el13062140682305303328", "el13062140682305304224", "el13062140682305305120", "el13062140682305306016", "el13062140682305323360", "el13062140682305324256", "el13062140682305325152", "el13062140682305326048"], "alls": [["Jakub Czerwi\u0144ski", [3447, 269]], ["Mikkel Kirkeskov", [3445, 276]], ["Patryk Dziczek", [2995, 263]], ["Joel Valencia", [2977, 273]], ["Aleksandar Sedlar", [2872, 285]], ["Tom Hateley", [2801, 267]], ["Martin Konczkowski", [2668, 270]], ["Jorge Felix", [2662, 271]], ["Marcin Pietrowski", [2059, 261]], ["Piotr Parzyszek", [1821, 255]], ["Michal Papadopulos", [1644, 230]], ["Tomasz Jod\u0142owiec", [1620, 265]], ["Mateusz Mak", [1000, 242]], ["Uros Korun", [862, 246]], ["Gerard Badia", [852, 247]], ["Aleksander Jagie\u0142\u0142o", [662, 226]], ["Tomasz Mokwa", [416, 250]], ["Patryk Soko\u0142owski", [208, 245]], ["Denis Gojko", [129, 230]], ["Pawel Tomczyk", [67, 231]], ["Karsten Ayong", [16, 220]], ["Karol Stanek", [5, 0]]], "low": 19, "which": 1, "vals": {"33": [3264, 247], "19": [5, 0], "20": [3207, 261], "23": [662, 226], "24": [3185, 272], "25": [4905, 263], "27": [13426, 273], "29": [3653, 263], "30": [2059, 261], "31": [862, 246]}, "type": "clickinfo", "players": {"472324": ["Denis Gojko", 129, 230], "95037": ["Aleksander Jagie\u0142\u0142o", 662, 226], "15112": ["Mikkel Kirkeskov", 3445, 276], "163210": ["Jorge Felix", 2662, 271], "64651": ["Mateusz Mak", 1000, 242], "447379": ["Pawel Tomczyk", 67, 231], "362260": ["Karsten Ayong", 16, 220], "24213": ["Uros Korun", 862, 246], "9238": ["Tomasz Jod\u0142owiec", 1620, 265], "63395": ["Jakub Czerwi\u0144ski", 3447, 269], "158628": ["Aleksandar Sedlar", 2872, 285], "272939": ["Patryk Dziczek", 2995, 263], "27503": ["Gerard Badia", 852, 247], "4208": ["Michal Papadopulos", 1644, 230], "28083": ["Tom Hateley", 2801, 267], "164532": ["Martin Konczkowski", 2668, 270], "14133": ["Joel Valencia", 2977, 273], "158324": ["Piotr Parzyszek", 1821, 255], "259194": ["Patryk Soko\u0142owski", 208, 245], "399419": ["Karol Stanek", 5, 0], "191229": ["Tomasz Mokwa", 416, 250], "23294": ["Marcin Pietrowski", 2059, 261]}}, {"wiek": {"33": [4208, 9238], "19": [399419], "20": [272939, 472324, 447379, 362260], "23": [95037], "24": [14133, 259194], "25": [164532, 158324, 191229], "27": [63395, 15112, 158628, 163210, 64651], "29": [28083, 27503], "30": [23294], "31": [24213]}, "ids": ["el13062140682305352760", "el13062140682305768696", "el13062140682305353432", "el13062140682305354328", "el13062140682305355224", "el13062140682305376664", "el13062140682305377560", "el13062140682305378456", "el13062140682305379352", "el13062140682305380248", "el13062140682305405784", "el13062140682305406680", "el13062140682305407576", "el13062140682305408472", "el13062140682305429912"], "alls": [["Jakub Czerwi\u0144ski", [3447, 269]], ["Mikkel Kirkeskov", [3445, 276]], ["Patryk Dziczek", [2995, 263]], ["Joel Valencia", [2977, 273]], ["Aleksandar Sedlar", [2872, 285]], ["Tom Hateley", [2801, 267]], ["Martin Konczkowski", [2668, 270]], ["Jorge Felix", [2662, 271]], ["Marcin Pietrowski", [2059, 261]], ["Piotr Parzyszek", [1821, 255]], ["Michal Papadopulos", [1644, 230]], ["Tomasz Jod\u0142owiec", [1620, 265]], ["Mateusz Mak", [1000, 242]], ["Uros Korun", [862, 246]], ["Gerard Badia", [852, 247]], ["Aleksander Jagie\u0142\u0142o", [662, 226]], ["Tomasz Mokwa", [416, 250]], ["Patryk Soko\u0142owski", [208, 245]], ["Denis Gojko", [129, 230]], ["Pawel Tomczyk", [67, 231]], ["Karsten Ayong", [16, 220]], ["Karol Stanek", [5, 0]]], "low": 19, "which": 1, "vals": {"33": [3264, 247], "19": [5, 0], "20": [3207, 261], "23": [662, 226], "24": [3185, 272], "25": [4905, 263], "27": [13426, 273], "29": [3653, 263], "30": [2059, 261], "31": [862, 246]}, "type": "clickinfo", "players": {"472324": ["Denis Gojko", 129, 230], "95037": ["Aleksander Jagie\u0142\u0142o", 662, 226], "15112": ["Mikkel Kirkeskov", 3445, 276], "163210": ["Jorge Felix", 2662, 271], "64651": ["Mateusz Mak", 1000, 242], "447379": ["Pawel Tomczyk", 67, 231], "362260": ["Karsten Ayong", 16, 220], "24213": ["Uros Korun", 862, 246], "9238": ["Tomasz Jod\u0142owiec", 1620, 265], "63395": ["Jakub Czerwi\u0144ski", 3447, 269], "158628": ["Aleksandar Sedlar", 2872, 285], "272939": ["Patryk Dziczek", 2995, 263], "27503": ["Gerard Badia", 852, 247], "4208": ["Michal Papadopulos", 1644, 230], "28083": ["Tom Hateley", 2801, 267], "164532": ["Martin Konczkowski", 2668, 270], "14133": ["Joel Valencia", 2977, 273], "158324": ["Piotr Parzyszek", 1821, 255], "259194": ["Patryk Soko\u0142owski", 208, 245], "399419": ["Karol Stanek", 5, 0], "191229": ["Tomasz Mokwa", 416, 250], "23294": ["Marcin Pietrowski", 2059, 261]}}]});
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
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low","vals","alls", "which"];

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
        var which = this.props.which;
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
        console.log(mySet.has(which));
        if (mySet.has(which) == false) {
              mySet.add(which);
        this.props.ids.forEach(function(id, i) {
           
            var obj = mpld3.get_element(id);
                 console.log(id, i, obj);
                console.log(id, i, obj, glob);
                console.log(obj.elements());
            obj.elements().on('mousedown',function(d){
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

    }
    
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low","vals","alls", "which"];

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
        var which = this.props.which;
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
        console.log(mySet.has(which));
        if (mySet.has(which) == false) {
              mySet.add(which);
        this.props.ids.forEach(function(id, i) {
           
            var obj = mpld3.get_element(id);
                 console.log(id, i, obj);
                console.log(id, i, obj, glob);
                console.log(obj.elements());
            obj.elements().on('mousedown',function(d){
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

    }
    
         mpld3.draw_figure("id1", {"width": 640.0, "data": {"data01": [[0.0, 18.5, 0.0, 20.5, 21.5, 25.5, 27.5, 31.5], [5.0, 18.5, 0.0, 20.5, 21.5, 25.5, 27.5, 31.5], [5.0, 19.5, 0.0, 21.5, 22.5, 26.5, 28.5, 32.5], [0.0, 19.5, 0.0, 21.5, 22.5, 26.5, 28.5, 32.5]], "data11": [[0.0, 32.5, 0.0], [3264.0, 32.5, 247.0], [3264.0, 33.5, 247.0], [0.0, 33.5, 0.0]], "data02": [[0.0, 19.5, 0.0, 29.5], [3207.0, 19.5, 261.0, 29.5], [3207.0, 20.5, 261.0, 30.5], [0.0, 20.5, 0.0, 30.5]], "data09": [[0.0, 29.5], [2059.0, 29.5], [2059.0, 30.5], [0.0, 30.5]], "data06": [[0.0, 24.5, 0.0, 28.5], [4905.0, 24.5, 263.0, 28.5], [4905.0, 25.5, 263.0, 29.5], [0.0, 25.5, 0.0, 29.5]], "data10": [[0.0, 30.5, 0.0], [862.0, 30.5, 246.0], [862.0, 31.5, 246.0], [0.0, 31.5, 0.0]], "data05": [[0.0, 23.5, 0.0], [3185.0, 23.5, 272.0], [3185.0, 24.5, 272.0], [0.0, 24.5, 0.0]], "data04": [[0.0, 22.5, 0.0], [662.0, 22.5, 226.0], [662.0, 23.5, 226.0], [0.0, 23.5, 0.0]], "data03": [[0.0, 20.5, 21.5, 25.5, 27.5, 31.5], [0.0, 20.5, 21.5, 25.5, 27.5, 31.5], [0.0, 21.5, 22.5, 26.5, 28.5, 32.5], [0.0, 21.5, 22.5, 26.5, 28.5, 32.5]], "data08": [[0.0, 28.5], [3653.0, 28.5], [3653.0, 29.5], [0.0, 29.5]], "data07": [[0.0, 26.5, 0.0], [13426.0, 26.5, 273.0], [13426.0, 27.5, 273.0], [0.0, 27.5, 0.0]]}, "axes": [{"sharey": ["el13062140682305624944"], "collections": [], "ylim": [17.75, 34.25], "lines": [], "yscale": "linear", "zoomable": true, "xlim": [16781.25, 5.0], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "xscale": "linear", "axes": [{"position": "bottom", "nticks": 5, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "tickvalues": null, "visible": true}, {"position": "left", "nticks": 15, "grid": {"gridOn": false}, "scale": "linear", "fontsize": 10.0, "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "visible": true}], "xdomain": [16781.25, 5.0], "paths": [{"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data01", "id": "el13062140682305768976", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data02", "id": "el13062140682305768472", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data03", "id": "el13062140682305278304", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 2, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data03", "id": "el13062140682305279200", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data04", "id": "el13062140682305280096", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data05", "id": "el13062140682305280992", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data06", "id": "el13062140682305281888", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 3, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data03", "id": "el13062140682305303328", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data07", "id": "el13062140682305304224", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 4, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data03", "id": "el13062140682305305120", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data08", "id": "el13062140682305306016", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data09", "id": "el13062140682305323360", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data10", "id": "el13062140682305324256", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 5, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data03", "id": "el13062140682305325152", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data11", "id": "el13062140682305326048", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}], "axesbg": "#FFFFFF", "axesbgalpha": null, "images": [], "id": "el13062140682306385736", "ydomain": [17.75, 34.25], "markers": [], "texts": [{"fontsize": 14.0, "zorder": 3, "color": "#000000", "id": "el13062140682306363632", "position": [0.5, -0.07921476671476674], "coordinates": "axes", "alpha": 1, "v_baseline": "hanging", "h_anchor": "middle", "rotation": -0.0, "text": "Minuty"}], "sharex": []}, {"sharey": ["el13062140682306385736"], "collections": [], "ylim": [17.75, 34.25], "lines": [], "yscale": "linear", "zoomable": true, "xlim": [216.0, 283.0], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "xscale": "linear", "axes": [{"position": "bottom", "nticks": 5, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "tickvalues": [226, 237, 248, 259, 273], "visible": true}, {"position": "right", "nticks": 15, "grid": {"gridOn": false}, "scale": "linear", "fontsize": null, "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "visible": true}], "xdomain": [216.0, 283.0], "paths": [{"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data01", "id": "el13062140682305352760", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data02", "id": "el13062140682305768696", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 3, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data01", "id": "el13062140682305353432", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 4, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data01", "id": "el13062140682305354328", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data04", "id": "el13062140682305355224", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data05", "id": "el13062140682305376664", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data06", "id": "el13062140682305377560", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 5, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data01", "id": "el13062140682305378456", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data07", "id": "el13062140682305379352", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 6, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data01", "id": "el13062140682305380248", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 3, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data06", "id": "el13062140682305405784", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 3, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data02", "id": "el13062140682305406680", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data10", "id": "el13062140682305407576", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 7, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data01", "id": "el13062140682305408472", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data11", "id": "el13062140682305429912", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}], "axesbg": "#FFFFFF", "axesbgalpha": null, "images": [], "id": "el13062140682305624944", "ydomain": [17.75, 34.25], "markers": [], "texts": [{"fontsize": 14.0, "zorder": 3, "color": "#000000", "id": "el13062140682305651992", "position": [0.5, -0.07921476671476674], "coordinates": "axes", "alpha": 1, "v_baseline": "hanging", "h_anchor": "middle", "rotation": -0.0, "text": "Instat index"}], "sharex": []}], "height": 480.0, "id": "el13062140682305836928", "plugins": [{"type": "reset"}, {"enabled": false, "button": true, "type": "zoom"}, {"enabled": false, "button": true, "type": "boxzoom"}, {"wiek": {"33": [4208, 9238], "19": [399419], "20": [272939, 472324, 447379, 362260], "23": [95037], "24": [14133, 259194], "25": [164532, 158324, 191229], "27": [63395, 15112, 158628, 163210, 64651], "29": [28083, 27503], "30": [23294], "31": [24213]}, "ids": ["el13062140682305768976", "el13062140682305768472", "el13062140682305278304", "el13062140682305279200", "el13062140682305280096", "el13062140682305280992", "el13062140682305281888", "el13062140682305303328", "el13062140682305304224", "el13062140682305305120", "el13062140682305306016", "el13062140682305323360", "el13062140682305324256", "el13062140682305325152", "el13062140682305326048"], "alls": [["Jakub Czerwi\u0144ski", [3447, 269]], ["Mikkel Kirkeskov", [3445, 276]], ["Patryk Dziczek", [2995, 263]], ["Joel Valencia", [2977, 273]], ["Aleksandar Sedlar", [2872, 285]], ["Tom Hateley", [2801, 267]], ["Martin Konczkowski", [2668, 270]], ["Jorge Felix", [2662, 271]], ["Marcin Pietrowski", [2059, 261]], ["Piotr Parzyszek", [1821, 255]], ["Michal Papadopulos", [1644, 230]], ["Tomasz Jod\u0142owiec", [1620, 265]], ["Mateusz Mak", [1000, 242]], ["Uros Korun", [862, 246]], ["Gerard Badia", [852, 247]], ["Aleksander Jagie\u0142\u0142o", [662, 226]], ["Tomasz Mokwa", [416, 250]], ["Patryk Soko\u0142owski", [208, 245]], ["Denis Gojko", [129, 230]], ["Pawel Tomczyk", [67, 231]], ["Karsten Ayong", [16, 220]], ["Karol Stanek", [5, 0]]], "low": 19, "which": 1, "vals": {"33": [3264, 247], "19": [5, 0], "20": [3207, 261], "23": [662, 226], "24": [3185, 272], "25": [4905, 263], "27": [13426, 273], "29": [3653, 263], "30": [2059, 261], "31": [862, 246]}, "type": "clickinfo", "players": {"472324": ["Denis Gojko", 129, 230], "95037": ["Aleksander Jagie\u0142\u0142o", 662, 226], "15112": ["Mikkel Kirkeskov", 3445, 276], "163210": ["Jorge Felix", 2662, 271], "64651": ["Mateusz Mak", 1000, 242], "447379": ["Pawel Tomczyk", 67, 231], "362260": ["Karsten Ayong", 16, 220], "24213": ["Uros Korun", 862, 246], "9238": ["Tomasz Jod\u0142owiec", 1620, 265], "63395": ["Jakub Czerwi\u0144ski", 3447, 269], "158628": ["Aleksandar Sedlar", 2872, 285], "272939": ["Patryk Dziczek", 2995, 263], "27503": ["Gerard Badia", 852, 247], "4208": ["Michal Papadopulos", 1644, 230], "28083": ["Tom Hateley", 2801, 267], "164532": ["Martin Konczkowski", 2668, 270], "14133": ["Joel Valencia", 2977, 273], "158324": ["Piotr Parzyszek", 1821, 255], "259194": ["Patryk Soko\u0142owski", 208, 245], "399419": ["Karol Stanek", 5, 0], "191229": ["Tomasz Mokwa", 416, 250], "23294": ["Marcin Pietrowski", 2059, 261]}}, {"wiek": {"33": [4208, 9238], "19": [399419], "20": [272939, 472324, 447379, 362260], "23": [95037], "24": [14133, 259194], "25": [164532, 158324, 191229], "27": [63395, 15112, 158628, 163210, 64651], "29": [28083, 27503], "30": [23294], "31": [24213]}, "ids": ["el13062140682305352760", "el13062140682305768696", "el13062140682305353432", "el13062140682305354328", "el13062140682305355224", "el13062140682305376664", "el13062140682305377560", "el13062140682305378456", "el13062140682305379352", "el13062140682305380248", "el13062140682305405784", "el13062140682305406680", "el13062140682305407576", "el13062140682305408472", "el13062140682305429912"], "alls": [["Jakub Czerwi\u0144ski", [3447, 269]], ["Mikkel Kirkeskov", [3445, 276]], ["Patryk Dziczek", [2995, 263]], ["Joel Valencia", [2977, 273]], ["Aleksandar Sedlar", [2872, 285]], ["Tom Hateley", [2801, 267]], ["Martin Konczkowski", [2668, 270]], ["Jorge Felix", [2662, 271]], ["Marcin Pietrowski", [2059, 261]], ["Piotr Parzyszek", [1821, 255]], ["Michal Papadopulos", [1644, 230]], ["Tomasz Jod\u0142owiec", [1620, 265]], ["Mateusz Mak", [1000, 242]], ["Uros Korun", [862, 246]], ["Gerard Badia", [852, 247]], ["Aleksander Jagie\u0142\u0142o", [662, 226]], ["Tomasz Mokwa", [416, 250]], ["Patryk Soko\u0142owski", [208, 245]], ["Denis Gojko", [129, 230]], ["Pawel Tomczyk", [67, 231]], ["Karsten Ayong", [16, 220]], ["Karol Stanek", [5, 0]]], "low": 19, "which": 1, "vals": {"33": [3264, 247], "19": [5, 0], "20": [3207, 261], "23": [662, 226], "24": [3185, 272], "25": [4905, 263], "27": [13426, 273], "29": [3653, 263], "30": [2059, 261], "31": [862, 246]}, "type": "clickinfo", "players": {"472324": ["Denis Gojko", 129, 230], "95037": ["Aleksander Jagie\u0142\u0142o", 662, 226], "15112": ["Mikkel Kirkeskov", 3445, 276], "163210": ["Jorge Felix", 2662, 271], "64651": ["Mateusz Mak", 1000, 242], "447379": ["Pawel Tomczyk", 67, 231], "362260": ["Karsten Ayong", 16, 220], "24213": ["Uros Korun", 862, 246], "9238": ["Tomasz Jod\u0142owiec", 1620, 265], "63395": ["Jakub Czerwi\u0144ski", 3447, 269], "158628": ["Aleksandar Sedlar", 2872, 285], "272939": ["Patryk Dziczek", 2995, 263], "27503": ["Gerard Badia", 852, 247], "4208": ["Michal Papadopulos", 1644, 230], "28083": ["Tom Hateley", 2801, 267], "164532": ["Martin Konczkowski", 2668, 270], "14133": ["Joel Valencia", 2977, 273], "158324": ["Piotr Parzyszek", 1821, 255], "259194": ["Patryk Soko\u0142owski", 208, 245], "399419": ["Karol Stanek", 5, 0], "191229": ["Tomasz Mokwa", 416, 250], "23294": ["Marcin Pietrowski", 2059, 261]}}]});
      });
    });
}else{
    // require.js not available: dynamically load d3 & mpld3
    mpld3_load_lib("https://mpld3.github.io/js/d3.v3.min.js", function(){
         mpld3_load_lib("https://mpld3.github.io/js/mpld3.v0.3.1.dev1.js", function(){
                 
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low","vals","alls", "which"];

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
        var which = this.props.which;
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
        console.log(mySet.has(which));
        if (mySet.has(which) == false) {
              mySet.add(which);
        this.props.ids.forEach(function(id, i) {
           
            var obj = mpld3.get_element(id);
                 console.log(id, i, obj);
                console.log(id, i, obj, glob);
                console.log(obj.elements());
            obj.elements().on('mousedown',function(d){
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

    }
    
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low","vals","alls", "which"];

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
        var which = this.props.which;
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
        console.log(mySet.has(which));
        if (mySet.has(which) == false) {
              mySet.add(which);
        this.props.ids.forEach(function(id, i) {
           
            var obj = mpld3.get_element(id);
                 console.log(id, i, obj);
                console.log(id, i, obj, glob);
                console.log(obj.elements());
            obj.elements().on('mousedown',function(d){
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

    }
    
                 mpld3.draw_figure("id1", {"width": 640.0, "data": {"data01": [[0.0, 18.5, 0.0, 20.5, 21.5, 25.5, 27.5, 31.5], [5.0, 18.5, 0.0, 20.5, 21.5, 25.5, 27.5, 31.5], [5.0, 19.5, 0.0, 21.5, 22.5, 26.5, 28.5, 32.5], [0.0, 19.5, 0.0, 21.5, 22.5, 26.5, 28.5, 32.5]], "data11": [[0.0, 32.5, 0.0], [3264.0, 32.5, 247.0], [3264.0, 33.5, 247.0], [0.0, 33.5, 0.0]], "data02": [[0.0, 19.5, 0.0, 29.5], [3207.0, 19.5, 261.0, 29.5], [3207.0, 20.5, 261.0, 30.5], [0.0, 20.5, 0.0, 30.5]], "data09": [[0.0, 29.5], [2059.0, 29.5], [2059.0, 30.5], [0.0, 30.5]], "data06": [[0.0, 24.5, 0.0, 28.5], [4905.0, 24.5, 263.0, 28.5], [4905.0, 25.5, 263.0, 29.5], [0.0, 25.5, 0.0, 29.5]], "data10": [[0.0, 30.5, 0.0], [862.0, 30.5, 246.0], [862.0, 31.5, 246.0], [0.0, 31.5, 0.0]], "data05": [[0.0, 23.5, 0.0], [3185.0, 23.5, 272.0], [3185.0, 24.5, 272.0], [0.0, 24.5, 0.0]], "data04": [[0.0, 22.5, 0.0], [662.0, 22.5, 226.0], [662.0, 23.5, 226.0], [0.0, 23.5, 0.0]], "data03": [[0.0, 20.5, 21.5, 25.5, 27.5, 31.5], [0.0, 20.5, 21.5, 25.5, 27.5, 31.5], [0.0, 21.5, 22.5, 26.5, 28.5, 32.5], [0.0, 21.5, 22.5, 26.5, 28.5, 32.5]], "data08": [[0.0, 28.5], [3653.0, 28.5], [3653.0, 29.5], [0.0, 29.5]], "data07": [[0.0, 26.5, 0.0], [13426.0, 26.5, 273.0], [13426.0, 27.5, 273.0], [0.0, 27.5, 0.0]]}, "axes": [{"sharey": ["el13062140682305624944"], "collections": [], "ylim": [17.75, 34.25], "lines": [], "yscale": "linear", "zoomable": true, "xlim": [16781.25, 5.0], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "xscale": "linear", "axes": [{"position": "bottom", "nticks": 5, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "tickvalues": null, "visible": true}, {"position": "left", "nticks": 15, "grid": {"gridOn": false}, "scale": "linear", "fontsize": 10.0, "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "visible": true}], "xdomain": [16781.25, 5.0], "paths": [{"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data01", "id": "el13062140682305768976", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data02", "id": "el13062140682305768472", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data03", "id": "el13062140682305278304", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 2, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data03", "id": "el13062140682305279200", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data04", "id": "el13062140682305280096", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data05", "id": "el13062140682305280992", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data06", "id": "el13062140682305281888", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 3, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data03", "id": "el13062140682305303328", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data07", "id": "el13062140682305304224", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 4, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data03", "id": "el13062140682305305120", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data08", "id": "el13062140682305306016", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data09", "id": "el13062140682305323360", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data10", "id": "el13062140682305324256", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 5, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data03", "id": "el13062140682305325152", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FF0000", "data": "data11", "id": "el13062140682305326048", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "dasharray": "none"}], "axesbg": "#FFFFFF", "axesbgalpha": null, "images": [], "id": "el13062140682306385736", "ydomain": [17.75, 34.25], "markers": [], "texts": [{"fontsize": 14.0, "zorder": 3, "color": "#000000", "id": "el13062140682306363632", "position": [0.5, -0.07921476671476674], "coordinates": "axes", "alpha": 1, "v_baseline": "hanging", "h_anchor": "middle", "rotation": -0.0, "text": "Minuty"}], "sharex": []}, {"sharey": ["el13062140682306385736"], "collections": [], "ylim": [17.75, 34.25], "lines": [], "yscale": "linear", "zoomable": true, "xlim": [216.0, 283.0], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "xscale": "linear", "axes": [{"position": "bottom", "nticks": 5, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "tickvalues": [226, 237, 248, 259, 273], "visible": true}, {"position": "right", "nticks": 15, "grid": {"gridOn": false}, "scale": "linear", "fontsize": null, "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "visible": true}], "xdomain": [216.0, 283.0], "paths": [{"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data01", "id": "el13062140682305352760", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data02", "id": "el13062140682305768696", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 3, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data01", "id": "el13062140682305353432", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 4, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data01", "id": "el13062140682305354328", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data04", "id": "el13062140682305355224", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data05", "id": "el13062140682305376664", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data06", "id": "el13062140682305377560", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 5, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data01", "id": "el13062140682305378456", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data07", "id": "el13062140682305379352", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 6, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data01", "id": "el13062140682305380248", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 3, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data06", "id": "el13062140682305405784", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 3, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data02", "id": "el13062140682305406680", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data10", "id": "el13062140682305407576", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 7, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data01", "id": "el13062140682305408472", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}, {"yindex": 1, "zorder": 1, "edgewidth": 1.0, "edgecolor": "none", "coordinates": "data", "alpha": 0.7, "facecolor": "#FFA500", "data": "data11", "id": "el13062140682305429912", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "dasharray": "none"}], "axesbg": "#FFFFFF", "axesbgalpha": null, "images": [], "id": "el13062140682305624944", "ydomain": [17.75, 34.25], "markers": [], "texts": [{"fontsize": 14.0, "zorder": 3, "color": "#000000", "id": "el13062140682305651992", "position": [0.5, -0.07921476671476674], "coordinates": "axes", "alpha": 1, "v_baseline": "hanging", "h_anchor": "middle", "rotation": -0.0, "text": "Instat index"}], "sharex": []}], "height": 480.0, "id": "el13062140682305836928", "plugins": [{"type": "reset"}, {"enabled": false, "button": true, "type": "zoom"}, {"enabled": false, "button": true, "type": "boxzoom"}, {"wiek": {"33": [4208, 9238], "19": [399419], "20": [272939, 472324, 447379, 362260], "23": [95037], "24": [14133, 259194], "25": [164532, 158324, 191229], "27": [63395, 15112, 158628, 163210, 64651], "29": [28083, 27503], "30": [23294], "31": [24213]}, "ids": ["el13062140682305768976", "el13062140682305768472", "el13062140682305278304", "el13062140682305279200", "el13062140682305280096", "el13062140682305280992", "el13062140682305281888", "el13062140682305303328", "el13062140682305304224", "el13062140682305305120", "el13062140682305306016", "el13062140682305323360", "el13062140682305324256", "el13062140682305325152", "el13062140682305326048"], "alls": [["Jakub Czerwi\u0144ski", [3447, 269]], ["Mikkel Kirkeskov", [3445, 276]], ["Patryk Dziczek", [2995, 263]], ["Joel Valencia", [2977, 273]], ["Aleksandar Sedlar", [2872, 285]], ["Tom Hateley", [2801, 267]], ["Martin Konczkowski", [2668, 270]], ["Jorge Felix", [2662, 271]], ["Marcin Pietrowski", [2059, 261]], ["Piotr Parzyszek", [1821, 255]], ["Michal Papadopulos", [1644, 230]], ["Tomasz Jod\u0142owiec", [1620, 265]], ["Mateusz Mak", [1000, 242]], ["Uros Korun", [862, 246]], ["Gerard Badia", [852, 247]], ["Aleksander Jagie\u0142\u0142o", [662, 226]], ["Tomasz Mokwa", [416, 250]], ["Patryk Soko\u0142owski", [208, 245]], ["Denis Gojko", [129, 230]], ["Pawel Tomczyk", [67, 231]], ["Karsten Ayong", [16, 220]], ["Karol Stanek", [5, 0]]], "low": 19, "which": 1, "vals": {"33": [3264, 247], "19": [5, 0], "20": [3207, 261], "23": [662, 226], "24": [3185, 272], "25": [4905, 263], "27": [13426, 273], "29": [3653, 263], "30": [2059, 261], "31": [862, 246]}, "type": "clickinfo", "players": {"472324": ["Denis Gojko", 129, 230], "95037": ["Aleksander Jagie\u0142\u0142o", 662, 226], "15112": ["Mikkel Kirkeskov", 3445, 276], "163210": ["Jorge Felix", 2662, 271], "64651": ["Mateusz Mak", 1000, 242], "447379": ["Pawel Tomczyk", 67, 231], "362260": ["Karsten Ayong", 16, 220], "24213": ["Uros Korun", 862, 246], "9238": ["Tomasz Jod\u0142owiec", 1620, 265], "63395": ["Jakub Czerwi\u0144ski", 3447, 269], "158628": ["Aleksandar Sedlar", 2872, 285], "272939": ["Patryk Dziczek", 2995, 263], "27503": ["Gerard Badia", 852, 247], "4208": ["Michal Papadopulos", 1644, 230], "28083": ["Tom Hateley", 2801, 267], "164532": ["Martin Konczkowski", 2668, 270], "14133": ["Joel Valencia", 2977, 273], "158324": ["Piotr Parzyszek", 1821, 255], "259194": ["Patryk Soko\u0142owski", 208, 245], "399419": ["Karol Stanek", 5, 0], "191229": ["Tomasz Mokwa", 416, 250], "23294": ["Marcin Pietrowski", 2059, 261]}}, {"wiek": {"33": [4208, 9238], "19": [399419], "20": [272939, 472324, 447379, 362260], "23": [95037], "24": [14133, 259194], "25": [164532, 158324, 191229], "27": [63395, 15112, 158628, 163210, 64651], "29": [28083, 27503], "30": [23294], "31": [24213]}, "ids": ["el13062140682305352760", "el13062140682305768696", "el13062140682305353432", "el13062140682305354328", "el13062140682305355224", "el13062140682305376664", "el13062140682305377560", "el13062140682305378456", "el13062140682305379352", "el13062140682305380248", "el13062140682305405784", "el13062140682305406680", "el13062140682305407576", "el13062140682305408472", "el13062140682305429912"], "alls": [["Jakub Czerwi\u0144ski", [3447, 269]], ["Mikkel Kirkeskov", [3445, 276]], ["Patryk Dziczek", [2995, 263]], ["Joel Valencia", [2977, 273]], ["Aleksandar Sedlar", [2872, 285]], ["Tom Hateley", [2801, 267]], ["Martin Konczkowski", [2668, 270]], ["Jorge Felix", [2662, 271]], ["Marcin Pietrowski", [2059, 261]], ["Piotr Parzyszek", [1821, 255]], ["Michal Papadopulos", [1644, 230]], ["Tomasz Jod\u0142owiec", [1620, 265]], ["Mateusz Mak", [1000, 242]], ["Uros Korun", [862, 246]], ["Gerard Badia", [852, 247]], ["Aleksander Jagie\u0142\u0142o", [662, 226]], ["Tomasz Mokwa", [416, 250]], ["Patryk Soko\u0142owski", [208, 245]], ["Denis Gojko", [129, 230]], ["Pawel Tomczyk", [67, 231]], ["Karsten Ayong", [16, 220]], ["Karol Stanek", [5, 0]]], "low": 19, "which": 1, "vals": {"33": [3264, 247], "19": [5, 0], "20": [3207, 261], "23": [662, 226], "24": [3185, 272], "25": [4905, 263], "27": [13426, 273], "29": [3653, 263], "30": [2059, 261], "31": [862, 246]}, "type": "clickinfo", "players": {"472324": ["Denis Gojko", 129, 230], "95037": ["Aleksander Jagie\u0142\u0142o", 662, 226], "15112": ["Mikkel Kirkeskov", 3445, 276], "163210": ["Jorge Felix", 2662, 271], "64651": ["Mateusz Mak", 1000, 242], "447379": ["Pawel Tomczyk", 67, 231], "362260": ["Karsten Ayong", 16, 220], "24213": ["Uros Korun", 862, 246], "9238": ["Tomasz Jod\u0142owiec", 1620, 265], "63395": ["Jakub Czerwi\u0144ski", 3447, 269], "158628": ["Aleksandar Sedlar", 2872, 285], "272939": ["Patryk Dziczek", 2995, 263], "27503": ["Gerard Badia", 852, 247], "4208": ["Michal Papadopulos", 1644, 230], "28083": ["Tom Hateley", 2801, 267], "164532": ["Martin Konczkowski", 2668, 270], "14133": ["Joel Valencia", 2977, 273], "158324": ["Piotr Parzyszek", 1821, 255], "259194": ["Patryk Soko\u0142owski", 208, 245], "399419": ["Karol Stanek", 5, 0], "191229": ["Tomasz Mokwa", 416, 250], "23294": ["Marcin Pietrowski", 2059, 261]}}]});
            })
         });
}

