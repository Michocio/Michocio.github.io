

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
              //mySet.add(which);
        this.props.ids.forEach(function(id, i) {
           
            var obj = mpld3.get_element(id);
                 console.log(id, i, obj);
                console.log(id, i, obj, glob);
                console.log(obj.elements());
            obj.elements().addEventListener("click", function(d){
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
              //mySet.add(which);
        this.props.ids.forEach(function(id, i) {
           
            var obj = mpld3.get_element(id);
                 console.log(id, i, obj);
                console.log(id, i, obj, glob);
                console.log(obj.elements());
            obj.elements().addEventListener("click", function(d){
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
    
       mpld3.draw_figure("id1", {"height": 480.0, "id": "el14297139905170685736", "data": {"data05": [[0.0, 23.5, 0.0], [3185.0, 23.5, 272.0], [3185.0, 24.5, 272.0], [0.0, 24.5, 0.0]], "data07": [[0.0, 26.5, 0.0], [13426.0, 26.5, 273.0], [13426.0, 27.5, 273.0], [0.0, 27.5, 0.0]], "data10": [[0.0, 30.5, 0.0], [862.0, 30.5, 246.0], [862.0, 31.5, 246.0], [0.0, 31.5, 0.0]], "data06": [[0.0, 24.5, 0.0, 28.5], [4905.0, 24.5, 263.0, 28.5], [4905.0, 25.5, 263.0, 29.5], [0.0, 25.5, 0.0, 29.5]], "data08": [[0.0, 28.5], [3653.0, 28.5], [3653.0, 29.5], [0.0, 29.5]], "data11": [[0.0, 32.5, 0.0], [3264.0, 32.5, 247.0], [3264.0, 33.5, 247.0], [0.0, 33.5, 0.0]], "data09": [[0.0, 29.5], [2059.0, 29.5], [2059.0, 30.5], [0.0, 30.5]], "data03": [[0.0, 20.5, 21.5, 25.5, 27.5, 31.5], [0.0, 20.5, 21.5, 25.5, 27.5, 31.5], [0.0, 21.5, 22.5, 26.5, 28.5, 32.5], [0.0, 21.5, 22.5, 26.5, 28.5, 32.5]], "data02": [[0.0, 19.5, 0.0, 29.5], [3207.0, 19.5, 261.0, 29.5], [3207.0, 20.5, 261.0, 30.5], [0.0, 20.5, 0.0, 30.5]], "data01": [[0.0, 18.5, 0.0, 20.5, 21.5, 25.5, 27.5, 31.5], [5.0, 18.5, 0.0, 20.5, 21.5, 25.5, 27.5, 31.5], [5.0, 19.5, 0.0, 21.5, 22.5, 26.5, 28.5, 32.5], [0.0, 19.5, 0.0, 21.5, 22.5, 26.5, 28.5, 32.5]], "data04": [[0.0, 22.5, 0.0], [662.0, 22.5, 226.0], [662.0, 23.5, 226.0], [0.0, 23.5, 0.0]]}, "axes": [{"sharey": ["el14297139905169858856"], "axes": [{"visible": true, "tickvalues": null, "scale": "linear", "nticks": 5, "position": "bottom", "fontsize": 10.0, "tickformat": null, "grid": {"dasharray": "none", "alpha": 1.0, "color": "#B0B0B0", "gridOn": true}}, {"visible": true, "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "scale": "linear", "nticks": 15, "position": "left", "fontsize": 10.0, "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "grid": {"gridOn": false}}], "collections": [], "images": [], "ydomain": [17.75, 34.25], "ylim": [17.75, 34.25], "sharex": [], "lines": [], "xdomain": [16781.25, 5.0], "id": "el14297139905170132944", "xscale": "linear", "markers": [], "zoomable": true, "texts": [{"id": "el14297139905169717232", "h_anchor": "middle", "coordinates": "axes", "text": "Minuty", "alpha": 1, "fontsize": 14.0, "position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "color": "#000000", "v_baseline": "hanging"}], "axesbg": "#FFFFFF", "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "paths": [{"id": "el14297139905169498744", "data": "data01", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169498240", "data": "data02", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169499584", "data": "data03", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169500480", "data": "data03", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 2, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169501376", "data": "data04", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169502160", "data": "data05", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169515520", "data": "data06", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169516416", "data": "data03", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 3, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169517312", "data": "data07", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169518208", "data": "data03", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 4, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169539648", "data": "data08", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169540544", "data": "data09", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169541440", "data": "data10", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169542336", "data": "data03", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 5, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169543120", "data": "data11", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FF0000"}], "yscale": "linear", "xlim": [16781.25, 5.0], "axesbgalpha": null}, {"sharey": ["el14297139905170132944"], "axes": [{"visible": true, "tickvalues": [226, 237, 248, 259, 273], "scale": "linear", "nticks": 5, "position": "bottom", "fontsize": 10.0, "tickformat": null, "grid": {"dasharray": "none", "alpha": 1.0, "color": "#B0B0B0", "gridOn": true}}, {"visible": true, "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "scale": "linear", "nticks": 15, "position": "right", "fontsize": null, "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "grid": {"gridOn": false}}], "collections": [], "images": [], "ydomain": [17.75, 34.25], "ylim": [17.75, 34.25], "sharex": [], "lines": [], "xdomain": [216.0, 283.0], "id": "el14297139905169858856", "xscale": "linear", "markers": [], "zoomable": true, "texts": [{"id": "el14297139905169861264", "h_anchor": "middle", "coordinates": "axes", "text": "Instat index", "alpha": 1, "fontsize": 14.0, "position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "color": "#000000", "v_baseline": "hanging"}], "axesbg": "#FFFFFF", "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "paths": [{"id": "el14297139905169573984", "data": "data01", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169498408", "data": "data02", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169574712", "data": "data01", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 3, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169575608", "data": "data01", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 4, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169592952", "data": "data04", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169593848", "data": "data05", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169594744", "data": "data06", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169595640", "data": "data01", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 5, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169621176", "data": "data07", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169622072", "data": "data01", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 6, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169622968", "data": "data06", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 3, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169623864", "data": "data02", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 3, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169624760", "data": "data10", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169646200", "data": "data01", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 7, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169647096", "data": "data11", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FFA500"}], "yscale": "linear", "xlim": [216.0, 283.0], "axesbgalpha": null}], "width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"alls": [["Jakub Czerwi\u0144ski", [3447, 269]], ["Mikkel Kirkeskov", [3445, 276]], ["Patryk Dziczek", [2995, 263]], ["Joel Valencia", [2977, 273]], ["Aleksandar Sedlar", [2872, 285]], ["Tom Hateley", [2801, 267]], ["Martin Konczkowski", [2668, 270]], ["Jorge Felix", [2662, 271]], ["Marcin Pietrowski", [2059, 261]], ["Piotr Parzyszek", [1821, 255]], ["Michal Papadopulos", [1644, 230]], ["Tomasz Jod\u0142owiec", [1620, 265]], ["Mateusz Mak", [1000, 242]], ["Uros Korun", [862, 246]], ["Gerard Badia", [852, 247]], ["Aleksander Jagie\u0142\u0142o", [662, 226]], ["Tomasz Mokwa", [416, 250]], ["Patryk Soko\u0142owski", [208, 245]], ["Denis Gojko", [129, 230]], ["Pawel Tomczyk", [67, 231]], ["Karsten Ayong", [16, 220]], ["Karol Stanek", [5, 0]]], "vals": {"33": [3264, 247], "19": [5, 0], "20": [3207, 261], "23": [662, 226], "24": [3185, 272], "25": [4905, 263], "27": [13426, 273], "29": [3653, 263], "30": [2059, 261], "31": [862, 246]}, "type": "clickinfo", "low": 19, "ids": ["el14297139905169498744", "el14297139905169498240", "el14297139905169499584", "el14297139905169500480", "el14297139905169501376", "el14297139905169502160", "el14297139905169515520", "el14297139905169516416", "el14297139905169517312", "el14297139905169518208", "el14297139905169539648", "el14297139905169540544", "el14297139905169541440", "el14297139905169542336", "el14297139905169543120"], "which": 1, "wiek": {"33": [4208, 9238], "19": [399419], "20": [272939, 472324, 447379, 362260], "23": [95037], "24": [14133, 259194], "25": [164532, 158324, 191229], "27": [63395, 15112, 158628, 163210, 64651], "29": [28083, 27503], "30": [23294], "31": [24213]}, "players": {"472324": ["Denis Gojko", 129, 230], "95037": ["Aleksander Jagie\u0142\u0142o", 662, 226], "15112": ["Mikkel Kirkeskov", 3445, 276], "163210": ["Jorge Felix", 2662, 271], "64651": ["Mateusz Mak", 1000, 242], "447379": ["Pawel Tomczyk", 67, 231], "362260": ["Karsten Ayong", 16, 220], "24213": ["Uros Korun", 862, 246], "9238": ["Tomasz Jod\u0142owiec", 1620, 265], "63395": ["Jakub Czerwi\u0144ski", 3447, 269], "158628": ["Aleksandar Sedlar", 2872, 285], "272939": ["Patryk Dziczek", 2995, 263], "27503": ["Gerard Badia", 852, 247], "4208": ["Michal Papadopulos", 1644, 230], "28083": ["Tom Hateley", 2801, 267], "164532": ["Martin Konczkowski", 2668, 270], "14133": ["Joel Valencia", 2977, 273], "158324": ["Piotr Parzyszek", 1821, 255], "259194": ["Patryk Soko\u0142owski", 208, 245], "399419": ["Karol Stanek", 5, 0], "191229": ["Tomasz Mokwa", 416, 250], "23294": ["Marcin Pietrowski", 2059, 261]}}, {"alls": [["Jakub Czerwi\u0144ski", [3447, 269]], ["Mikkel Kirkeskov", [3445, 276]], ["Patryk Dziczek", [2995, 263]], ["Joel Valencia", [2977, 273]], ["Aleksandar Sedlar", [2872, 285]], ["Tom Hateley", [2801, 267]], ["Martin Konczkowski", [2668, 270]], ["Jorge Felix", [2662, 271]], ["Marcin Pietrowski", [2059, 261]], ["Piotr Parzyszek", [1821, 255]], ["Michal Papadopulos", [1644, 230]], ["Tomasz Jod\u0142owiec", [1620, 265]], ["Mateusz Mak", [1000, 242]], ["Uros Korun", [862, 246]], ["Gerard Badia", [852, 247]], ["Aleksander Jagie\u0142\u0142o", [662, 226]], ["Tomasz Mokwa", [416, 250]], ["Patryk Soko\u0142owski", [208, 245]], ["Denis Gojko", [129, 230]], ["Pawel Tomczyk", [67, 231]], ["Karsten Ayong", [16, 220]], ["Karol Stanek", [5, 0]]], "vals": {"33": [3264, 247], "19": [5, 0], "20": [3207, 261], "23": [662, 226], "24": [3185, 272], "25": [4905, 263], "27": [13426, 273], "29": [3653, 263], "30": [2059, 261], "31": [862, 246]}, "type": "clickinfo", "low": 19, "ids": ["el14297139905169573984", "el14297139905169498408", "el14297139905169574712", "el14297139905169575608", "el14297139905169592952", "el14297139905169593848", "el14297139905169594744", "el14297139905169595640", "el14297139905169621176", "el14297139905169622072", "el14297139905169622968", "el14297139905169623864", "el14297139905169624760", "el14297139905169646200", "el14297139905169647096"], "which": 1, "wiek": {"33": [4208, 9238], "19": [399419], "20": [272939, 472324, 447379, 362260], "23": [95037], "24": [14133, 259194], "25": [164532, 158324, 191229], "27": [63395, 15112, 158628, 163210, 64651], "29": [28083, 27503], "30": [23294], "31": [24213]}, "players": {"472324": ["Denis Gojko", 129, 230], "95037": ["Aleksander Jagie\u0142\u0142o", 662, 226], "15112": ["Mikkel Kirkeskov", 3445, 276], "163210": ["Jorge Felix", 2662, 271], "64651": ["Mateusz Mak", 1000, 242], "447379": ["Pawel Tomczyk", 67, 231], "362260": ["Karsten Ayong", 16, 220], "24213": ["Uros Korun", 862, 246], "9238": ["Tomasz Jod\u0142owiec", 1620, 265], "63395": ["Jakub Czerwi\u0144ski", 3447, 269], "158628": ["Aleksandar Sedlar", 2872, 285], "272939": ["Patryk Dziczek", 2995, 263], "27503": ["Gerard Badia", 852, 247], "4208": ["Michal Papadopulos", 1644, 230], "28083": ["Tom Hateley", 2801, 267], "164532": ["Martin Konczkowski", 2668, 270], "14133": ["Joel Valencia", 2977, 273], "158324": ["Piotr Parzyszek", 1821, 255], "259194": ["Patryk Soko\u0142owski", 208, 245], "399419": ["Karol Stanek", 5, 0], "191229": ["Tomasz Mokwa", 416, 250], "23294": ["Marcin Pietrowski", 2059, 261]}}]});
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
              //mySet.add(which);
        this.props.ids.forEach(function(id, i) {
           
            var obj = mpld3.get_element(id);
                 console.log(id, i, obj);
                console.log(id, i, obj, glob);
                console.log(obj.elements());
            obj.elements().addEventListener("click", function(d){
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
              //mySet.add(which);
        this.props.ids.forEach(function(id, i) {
           
            var obj = mpld3.get_element(id);
                 console.log(id, i, obj);
                console.log(id, i, obj, glob);
                console.log(obj.elements());
            obj.elements().addEventListener("click", function(d){
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
    
         mpld3.draw_figure("id1", {"height": 480.0, "id": "el14297139905170685736", "data": {"data05": [[0.0, 23.5, 0.0], [3185.0, 23.5, 272.0], [3185.0, 24.5, 272.0], [0.0, 24.5, 0.0]], "data07": [[0.0, 26.5, 0.0], [13426.0, 26.5, 273.0], [13426.0, 27.5, 273.0], [0.0, 27.5, 0.0]], "data10": [[0.0, 30.5, 0.0], [862.0, 30.5, 246.0], [862.0, 31.5, 246.0], [0.0, 31.5, 0.0]], "data06": [[0.0, 24.5, 0.0, 28.5], [4905.0, 24.5, 263.0, 28.5], [4905.0, 25.5, 263.0, 29.5], [0.0, 25.5, 0.0, 29.5]], "data08": [[0.0, 28.5], [3653.0, 28.5], [3653.0, 29.5], [0.0, 29.5]], "data11": [[0.0, 32.5, 0.0], [3264.0, 32.5, 247.0], [3264.0, 33.5, 247.0], [0.0, 33.5, 0.0]], "data09": [[0.0, 29.5], [2059.0, 29.5], [2059.0, 30.5], [0.0, 30.5]], "data03": [[0.0, 20.5, 21.5, 25.5, 27.5, 31.5], [0.0, 20.5, 21.5, 25.5, 27.5, 31.5], [0.0, 21.5, 22.5, 26.5, 28.5, 32.5], [0.0, 21.5, 22.5, 26.5, 28.5, 32.5]], "data02": [[0.0, 19.5, 0.0, 29.5], [3207.0, 19.5, 261.0, 29.5], [3207.0, 20.5, 261.0, 30.5], [0.0, 20.5, 0.0, 30.5]], "data01": [[0.0, 18.5, 0.0, 20.5, 21.5, 25.5, 27.5, 31.5], [5.0, 18.5, 0.0, 20.5, 21.5, 25.5, 27.5, 31.5], [5.0, 19.5, 0.0, 21.5, 22.5, 26.5, 28.5, 32.5], [0.0, 19.5, 0.0, 21.5, 22.5, 26.5, 28.5, 32.5]], "data04": [[0.0, 22.5, 0.0], [662.0, 22.5, 226.0], [662.0, 23.5, 226.0], [0.0, 23.5, 0.0]]}, "axes": [{"sharey": ["el14297139905169858856"], "axes": [{"visible": true, "tickvalues": null, "scale": "linear", "nticks": 5, "position": "bottom", "fontsize": 10.0, "tickformat": null, "grid": {"dasharray": "none", "alpha": 1.0, "color": "#B0B0B0", "gridOn": true}}, {"visible": true, "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "scale": "linear", "nticks": 15, "position": "left", "fontsize": 10.0, "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "grid": {"gridOn": false}}], "collections": [], "images": [], "ydomain": [17.75, 34.25], "ylim": [17.75, 34.25], "sharex": [], "lines": [], "xdomain": [16781.25, 5.0], "id": "el14297139905170132944", "xscale": "linear", "markers": [], "zoomable": true, "texts": [{"id": "el14297139905169717232", "h_anchor": "middle", "coordinates": "axes", "text": "Minuty", "alpha": 1, "fontsize": 14.0, "position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "color": "#000000", "v_baseline": "hanging"}], "axesbg": "#FFFFFF", "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "paths": [{"id": "el14297139905169498744", "data": "data01", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169498240", "data": "data02", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169499584", "data": "data03", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169500480", "data": "data03", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 2, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169501376", "data": "data04", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169502160", "data": "data05", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169515520", "data": "data06", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169516416", "data": "data03", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 3, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169517312", "data": "data07", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169518208", "data": "data03", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 4, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169539648", "data": "data08", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169540544", "data": "data09", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169541440", "data": "data10", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169542336", "data": "data03", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 5, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169543120", "data": "data11", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FF0000"}], "yscale": "linear", "xlim": [16781.25, 5.0], "axesbgalpha": null}, {"sharey": ["el14297139905170132944"], "axes": [{"visible": true, "tickvalues": [226, 237, 248, 259, 273], "scale": "linear", "nticks": 5, "position": "bottom", "fontsize": 10.0, "tickformat": null, "grid": {"dasharray": "none", "alpha": 1.0, "color": "#B0B0B0", "gridOn": true}}, {"visible": true, "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "scale": "linear", "nticks": 15, "position": "right", "fontsize": null, "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "grid": {"gridOn": false}}], "collections": [], "images": [], "ydomain": [17.75, 34.25], "ylim": [17.75, 34.25], "sharex": [], "lines": [], "xdomain": [216.0, 283.0], "id": "el14297139905169858856", "xscale": "linear", "markers": [], "zoomable": true, "texts": [{"id": "el14297139905169861264", "h_anchor": "middle", "coordinates": "axes", "text": "Instat index", "alpha": 1, "fontsize": 14.0, "position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "color": "#000000", "v_baseline": "hanging"}], "axesbg": "#FFFFFF", "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "paths": [{"id": "el14297139905169573984", "data": "data01", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169498408", "data": "data02", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169574712", "data": "data01", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 3, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169575608", "data": "data01", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 4, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169592952", "data": "data04", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169593848", "data": "data05", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169594744", "data": "data06", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169595640", "data": "data01", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 5, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169621176", "data": "data07", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169622072", "data": "data01", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 6, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169622968", "data": "data06", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 3, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169623864", "data": "data02", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 3, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169624760", "data": "data10", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169646200", "data": "data01", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 7, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169647096", "data": "data11", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FFA500"}], "yscale": "linear", "xlim": [216.0, 283.0], "axesbgalpha": null}], "width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"alls": [["Jakub Czerwi\u0144ski", [3447, 269]], ["Mikkel Kirkeskov", [3445, 276]], ["Patryk Dziczek", [2995, 263]], ["Joel Valencia", [2977, 273]], ["Aleksandar Sedlar", [2872, 285]], ["Tom Hateley", [2801, 267]], ["Martin Konczkowski", [2668, 270]], ["Jorge Felix", [2662, 271]], ["Marcin Pietrowski", [2059, 261]], ["Piotr Parzyszek", [1821, 255]], ["Michal Papadopulos", [1644, 230]], ["Tomasz Jod\u0142owiec", [1620, 265]], ["Mateusz Mak", [1000, 242]], ["Uros Korun", [862, 246]], ["Gerard Badia", [852, 247]], ["Aleksander Jagie\u0142\u0142o", [662, 226]], ["Tomasz Mokwa", [416, 250]], ["Patryk Soko\u0142owski", [208, 245]], ["Denis Gojko", [129, 230]], ["Pawel Tomczyk", [67, 231]], ["Karsten Ayong", [16, 220]], ["Karol Stanek", [5, 0]]], "vals": {"33": [3264, 247], "19": [5, 0], "20": [3207, 261], "23": [662, 226], "24": [3185, 272], "25": [4905, 263], "27": [13426, 273], "29": [3653, 263], "30": [2059, 261], "31": [862, 246]}, "type": "clickinfo", "low": 19, "ids": ["el14297139905169498744", "el14297139905169498240", "el14297139905169499584", "el14297139905169500480", "el14297139905169501376", "el14297139905169502160", "el14297139905169515520", "el14297139905169516416", "el14297139905169517312", "el14297139905169518208", "el14297139905169539648", "el14297139905169540544", "el14297139905169541440", "el14297139905169542336", "el14297139905169543120"], "which": 1, "wiek": {"33": [4208, 9238], "19": [399419], "20": [272939, 472324, 447379, 362260], "23": [95037], "24": [14133, 259194], "25": [164532, 158324, 191229], "27": [63395, 15112, 158628, 163210, 64651], "29": [28083, 27503], "30": [23294], "31": [24213]}, "players": {"472324": ["Denis Gojko", 129, 230], "95037": ["Aleksander Jagie\u0142\u0142o", 662, 226], "15112": ["Mikkel Kirkeskov", 3445, 276], "163210": ["Jorge Felix", 2662, 271], "64651": ["Mateusz Mak", 1000, 242], "447379": ["Pawel Tomczyk", 67, 231], "362260": ["Karsten Ayong", 16, 220], "24213": ["Uros Korun", 862, 246], "9238": ["Tomasz Jod\u0142owiec", 1620, 265], "63395": ["Jakub Czerwi\u0144ski", 3447, 269], "158628": ["Aleksandar Sedlar", 2872, 285], "272939": ["Patryk Dziczek", 2995, 263], "27503": ["Gerard Badia", 852, 247], "4208": ["Michal Papadopulos", 1644, 230], "28083": ["Tom Hateley", 2801, 267], "164532": ["Martin Konczkowski", 2668, 270], "14133": ["Joel Valencia", 2977, 273], "158324": ["Piotr Parzyszek", 1821, 255], "259194": ["Patryk Soko\u0142owski", 208, 245], "399419": ["Karol Stanek", 5, 0], "191229": ["Tomasz Mokwa", 416, 250], "23294": ["Marcin Pietrowski", 2059, 261]}}, {"alls": [["Jakub Czerwi\u0144ski", [3447, 269]], ["Mikkel Kirkeskov", [3445, 276]], ["Patryk Dziczek", [2995, 263]], ["Joel Valencia", [2977, 273]], ["Aleksandar Sedlar", [2872, 285]], ["Tom Hateley", [2801, 267]], ["Martin Konczkowski", [2668, 270]], ["Jorge Felix", [2662, 271]], ["Marcin Pietrowski", [2059, 261]], ["Piotr Parzyszek", [1821, 255]], ["Michal Papadopulos", [1644, 230]], ["Tomasz Jod\u0142owiec", [1620, 265]], ["Mateusz Mak", [1000, 242]], ["Uros Korun", [862, 246]], ["Gerard Badia", [852, 247]], ["Aleksander Jagie\u0142\u0142o", [662, 226]], ["Tomasz Mokwa", [416, 250]], ["Patryk Soko\u0142owski", [208, 245]], ["Denis Gojko", [129, 230]], ["Pawel Tomczyk", [67, 231]], ["Karsten Ayong", [16, 220]], ["Karol Stanek", [5, 0]]], "vals": {"33": [3264, 247], "19": [5, 0], "20": [3207, 261], "23": [662, 226], "24": [3185, 272], "25": [4905, 263], "27": [13426, 273], "29": [3653, 263], "30": [2059, 261], "31": [862, 246]}, "type": "clickinfo", "low": 19, "ids": ["el14297139905169573984", "el14297139905169498408", "el14297139905169574712", "el14297139905169575608", "el14297139905169592952", "el14297139905169593848", "el14297139905169594744", "el14297139905169595640", "el14297139905169621176", "el14297139905169622072", "el14297139905169622968", "el14297139905169623864", "el14297139905169624760", "el14297139905169646200", "el14297139905169647096"], "which": 1, "wiek": {"33": [4208, 9238], "19": [399419], "20": [272939, 472324, 447379, 362260], "23": [95037], "24": [14133, 259194], "25": [164532, 158324, 191229], "27": [63395, 15112, 158628, 163210, 64651], "29": [28083, 27503], "30": [23294], "31": [24213]}, "players": {"472324": ["Denis Gojko", 129, 230], "95037": ["Aleksander Jagie\u0142\u0142o", 662, 226], "15112": ["Mikkel Kirkeskov", 3445, 276], "163210": ["Jorge Felix", 2662, 271], "64651": ["Mateusz Mak", 1000, 242], "447379": ["Pawel Tomczyk", 67, 231], "362260": ["Karsten Ayong", 16, 220], "24213": ["Uros Korun", 862, 246], "9238": ["Tomasz Jod\u0142owiec", 1620, 265], "63395": ["Jakub Czerwi\u0144ski", 3447, 269], "158628": ["Aleksandar Sedlar", 2872, 285], "272939": ["Patryk Dziczek", 2995, 263], "27503": ["Gerard Badia", 852, 247], "4208": ["Michal Papadopulos", 1644, 230], "28083": ["Tom Hateley", 2801, 267], "164532": ["Martin Konczkowski", 2668, 270], "14133": ["Joel Valencia", 2977, 273], "158324": ["Piotr Parzyszek", 1821, 255], "259194": ["Patryk Soko\u0142owski", 208, 245], "399419": ["Karol Stanek", 5, 0], "191229": ["Tomasz Mokwa", 416, 250], "23294": ["Marcin Pietrowski", 2059, 261]}}]});
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
              //mySet.add(which);
        this.props.ids.forEach(function(id, i) {
           
            var obj = mpld3.get_element(id);
                 console.log(id, i, obj);
                console.log(id, i, obj, glob);
                console.log(obj.elements());
            obj.elements().addEventListener("click", function(d){
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
              //mySet.add(which);
        this.props.ids.forEach(function(id, i) {
           
            var obj = mpld3.get_element(id);
                 console.log(id, i, obj);
                console.log(id, i, obj, glob);
                console.log(obj.elements());
            obj.elements().addEventListener("click", function(d){
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
    
                 mpld3.draw_figure("id1", {"height": 480.0, "id": "el14297139905170685736", "data": {"data05": [[0.0, 23.5, 0.0], [3185.0, 23.5, 272.0], [3185.0, 24.5, 272.0], [0.0, 24.5, 0.0]], "data07": [[0.0, 26.5, 0.0], [13426.0, 26.5, 273.0], [13426.0, 27.5, 273.0], [0.0, 27.5, 0.0]], "data10": [[0.0, 30.5, 0.0], [862.0, 30.5, 246.0], [862.0, 31.5, 246.0], [0.0, 31.5, 0.0]], "data06": [[0.0, 24.5, 0.0, 28.5], [4905.0, 24.5, 263.0, 28.5], [4905.0, 25.5, 263.0, 29.5], [0.0, 25.5, 0.0, 29.5]], "data08": [[0.0, 28.5], [3653.0, 28.5], [3653.0, 29.5], [0.0, 29.5]], "data11": [[0.0, 32.5, 0.0], [3264.0, 32.5, 247.0], [3264.0, 33.5, 247.0], [0.0, 33.5, 0.0]], "data09": [[0.0, 29.5], [2059.0, 29.5], [2059.0, 30.5], [0.0, 30.5]], "data03": [[0.0, 20.5, 21.5, 25.5, 27.5, 31.5], [0.0, 20.5, 21.5, 25.5, 27.5, 31.5], [0.0, 21.5, 22.5, 26.5, 28.5, 32.5], [0.0, 21.5, 22.5, 26.5, 28.5, 32.5]], "data02": [[0.0, 19.5, 0.0, 29.5], [3207.0, 19.5, 261.0, 29.5], [3207.0, 20.5, 261.0, 30.5], [0.0, 20.5, 0.0, 30.5]], "data01": [[0.0, 18.5, 0.0, 20.5, 21.5, 25.5, 27.5, 31.5], [5.0, 18.5, 0.0, 20.5, 21.5, 25.5, 27.5, 31.5], [5.0, 19.5, 0.0, 21.5, 22.5, 26.5, 28.5, 32.5], [0.0, 19.5, 0.0, 21.5, 22.5, 26.5, 28.5, 32.5]], "data04": [[0.0, 22.5, 0.0], [662.0, 22.5, 226.0], [662.0, 23.5, 226.0], [0.0, 23.5, 0.0]]}, "axes": [{"sharey": ["el14297139905169858856"], "axes": [{"visible": true, "tickvalues": null, "scale": "linear", "nticks": 5, "position": "bottom", "fontsize": 10.0, "tickformat": null, "grid": {"dasharray": "none", "alpha": 1.0, "color": "#B0B0B0", "gridOn": true}}, {"visible": true, "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "scale": "linear", "nticks": 15, "position": "left", "fontsize": 10.0, "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "grid": {"gridOn": false}}], "collections": [], "images": [], "ydomain": [17.75, 34.25], "ylim": [17.75, 34.25], "sharex": [], "lines": [], "xdomain": [16781.25, 5.0], "id": "el14297139905170132944", "xscale": "linear", "markers": [], "zoomable": true, "texts": [{"id": "el14297139905169717232", "h_anchor": "middle", "coordinates": "axes", "text": "Minuty", "alpha": 1, "fontsize": 14.0, "position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "color": "#000000", "v_baseline": "hanging"}], "axesbg": "#FFFFFF", "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "paths": [{"id": "el14297139905169498744", "data": "data01", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169498240", "data": "data02", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169499584", "data": "data03", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169500480", "data": "data03", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 2, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169501376", "data": "data04", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169502160", "data": "data05", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169515520", "data": "data06", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169516416", "data": "data03", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 3, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169517312", "data": "data07", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169518208", "data": "data03", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 4, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169539648", "data": "data08", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169540544", "data": "data09", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169541440", "data": "data10", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169542336", "data": "data03", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 5, "zorder": 1, "facecolor": "#FF0000"}, {"id": "el14297139905169543120", "data": "data11", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 0, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FF0000"}], "yscale": "linear", "xlim": [16781.25, 5.0], "axesbgalpha": null}, {"sharey": ["el14297139905170132944"], "axes": [{"visible": true, "tickvalues": [226, 237, 248, 259, 273], "scale": "linear", "nticks": 5, "position": "bottom", "fontsize": 10.0, "tickformat": null, "grid": {"dasharray": "none", "alpha": 1.0, "color": "#B0B0B0", "gridOn": true}}, {"visible": true, "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "scale": "linear", "nticks": 15, "position": "right", "fontsize": null, "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "grid": {"gridOn": false}}], "collections": [], "images": [], "ydomain": [17.75, 34.25], "ylim": [17.75, 34.25], "sharex": [], "lines": [], "xdomain": [216.0, 283.0], "id": "el14297139905169858856", "xscale": "linear", "markers": [], "zoomable": true, "texts": [{"id": "el14297139905169861264", "h_anchor": "middle", "coordinates": "axes", "text": "Instat index", "alpha": 1, "fontsize": 14.0, "position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "color": "#000000", "v_baseline": "hanging"}], "axesbg": "#FFFFFF", "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "paths": [{"id": "el14297139905169573984", "data": "data01", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169498408", "data": "data02", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169574712", "data": "data01", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 3, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169575608", "data": "data01", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 4, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169592952", "data": "data04", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169593848", "data": "data05", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169594744", "data": "data06", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169595640", "data": "data01", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 5, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169621176", "data": "data07", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169622072", "data": "data01", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 6, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169622968", "data": "data06", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 3, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169623864", "data": "data02", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 3, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169624760", "data": "data10", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169646200", "data": "data01", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 7, "zorder": 1, "facecolor": "#FFA500"}, {"id": "el14297139905169647096", "data": "data11", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "xindex": 2, "alpha": 0.7, "edgecolor": "none", "edgewidth": 1.0, "dasharray": "none", "yindex": 1, "zorder": 1, "facecolor": "#FFA500"}], "yscale": "linear", "xlim": [216.0, 283.0], "axesbgalpha": null}], "width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"alls": [["Jakub Czerwi\u0144ski", [3447, 269]], ["Mikkel Kirkeskov", [3445, 276]], ["Patryk Dziczek", [2995, 263]], ["Joel Valencia", [2977, 273]], ["Aleksandar Sedlar", [2872, 285]], ["Tom Hateley", [2801, 267]], ["Martin Konczkowski", [2668, 270]], ["Jorge Felix", [2662, 271]], ["Marcin Pietrowski", [2059, 261]], ["Piotr Parzyszek", [1821, 255]], ["Michal Papadopulos", [1644, 230]], ["Tomasz Jod\u0142owiec", [1620, 265]], ["Mateusz Mak", [1000, 242]], ["Uros Korun", [862, 246]], ["Gerard Badia", [852, 247]], ["Aleksander Jagie\u0142\u0142o", [662, 226]], ["Tomasz Mokwa", [416, 250]], ["Patryk Soko\u0142owski", [208, 245]], ["Denis Gojko", [129, 230]], ["Pawel Tomczyk", [67, 231]], ["Karsten Ayong", [16, 220]], ["Karol Stanek", [5, 0]]], "vals": {"33": [3264, 247], "19": [5, 0], "20": [3207, 261], "23": [662, 226], "24": [3185, 272], "25": [4905, 263], "27": [13426, 273], "29": [3653, 263], "30": [2059, 261], "31": [862, 246]}, "type": "clickinfo", "low": 19, "ids": ["el14297139905169498744", "el14297139905169498240", "el14297139905169499584", "el14297139905169500480", "el14297139905169501376", "el14297139905169502160", "el14297139905169515520", "el14297139905169516416", "el14297139905169517312", "el14297139905169518208", "el14297139905169539648", "el14297139905169540544", "el14297139905169541440", "el14297139905169542336", "el14297139905169543120"], "which": 1, "wiek": {"33": [4208, 9238], "19": [399419], "20": [272939, 472324, 447379, 362260], "23": [95037], "24": [14133, 259194], "25": [164532, 158324, 191229], "27": [63395, 15112, 158628, 163210, 64651], "29": [28083, 27503], "30": [23294], "31": [24213]}, "players": {"472324": ["Denis Gojko", 129, 230], "95037": ["Aleksander Jagie\u0142\u0142o", 662, 226], "15112": ["Mikkel Kirkeskov", 3445, 276], "163210": ["Jorge Felix", 2662, 271], "64651": ["Mateusz Mak", 1000, 242], "447379": ["Pawel Tomczyk", 67, 231], "362260": ["Karsten Ayong", 16, 220], "24213": ["Uros Korun", 862, 246], "9238": ["Tomasz Jod\u0142owiec", 1620, 265], "63395": ["Jakub Czerwi\u0144ski", 3447, 269], "158628": ["Aleksandar Sedlar", 2872, 285], "272939": ["Patryk Dziczek", 2995, 263], "27503": ["Gerard Badia", 852, 247], "4208": ["Michal Papadopulos", 1644, 230], "28083": ["Tom Hateley", 2801, 267], "164532": ["Martin Konczkowski", 2668, 270], "14133": ["Joel Valencia", 2977, 273], "158324": ["Piotr Parzyszek", 1821, 255], "259194": ["Patryk Soko\u0142owski", 208, 245], "399419": ["Karol Stanek", 5, 0], "191229": ["Tomasz Mokwa", 416, 250], "23294": ["Marcin Pietrowski", 2059, 261]}}, {"alls": [["Jakub Czerwi\u0144ski", [3447, 269]], ["Mikkel Kirkeskov", [3445, 276]], ["Patryk Dziczek", [2995, 263]], ["Joel Valencia", [2977, 273]], ["Aleksandar Sedlar", [2872, 285]], ["Tom Hateley", [2801, 267]], ["Martin Konczkowski", [2668, 270]], ["Jorge Felix", [2662, 271]], ["Marcin Pietrowski", [2059, 261]], ["Piotr Parzyszek", [1821, 255]], ["Michal Papadopulos", [1644, 230]], ["Tomasz Jod\u0142owiec", [1620, 265]], ["Mateusz Mak", [1000, 242]], ["Uros Korun", [862, 246]], ["Gerard Badia", [852, 247]], ["Aleksander Jagie\u0142\u0142o", [662, 226]], ["Tomasz Mokwa", [416, 250]], ["Patryk Soko\u0142owski", [208, 245]], ["Denis Gojko", [129, 230]], ["Pawel Tomczyk", [67, 231]], ["Karsten Ayong", [16, 220]], ["Karol Stanek", [5, 0]]], "vals": {"33": [3264, 247], "19": [5, 0], "20": [3207, 261], "23": [662, 226], "24": [3185, 272], "25": [4905, 263], "27": [13426, 273], "29": [3653, 263], "30": [2059, 261], "31": [862, 246]}, "type": "clickinfo", "low": 19, "ids": ["el14297139905169573984", "el14297139905169498408", "el14297139905169574712", "el14297139905169575608", "el14297139905169592952", "el14297139905169593848", "el14297139905169594744", "el14297139905169595640", "el14297139905169621176", "el14297139905169622072", "el14297139905169622968", "el14297139905169623864", "el14297139905169624760", "el14297139905169646200", "el14297139905169647096"], "which": 1, "wiek": {"33": [4208, 9238], "19": [399419], "20": [272939, 472324, 447379, 362260], "23": [95037], "24": [14133, 259194], "25": [164532, 158324, 191229], "27": [63395, 15112, 158628, 163210, 64651], "29": [28083, 27503], "30": [23294], "31": [24213]}, "players": {"472324": ["Denis Gojko", 129, 230], "95037": ["Aleksander Jagie\u0142\u0142o", 662, 226], "15112": ["Mikkel Kirkeskov", 3445, 276], "163210": ["Jorge Felix", 2662, 271], "64651": ["Mateusz Mak", 1000, 242], "447379": ["Pawel Tomczyk", 67, 231], "362260": ["Karsten Ayong", 16, 220], "24213": ["Uros Korun", 862, 246], "9238": ["Tomasz Jod\u0142owiec", 1620, 265], "63395": ["Jakub Czerwi\u0144ski", 3447, 269], "158628": ["Aleksandar Sedlar", 2872, 285], "272939": ["Patryk Dziczek", 2995, 263], "27503": ["Gerard Badia", 852, 247], "4208": ["Michal Papadopulos", 1644, 230], "28083": ["Tom Hateley", 2801, 267], "164532": ["Martin Konczkowski", 2668, 270], "14133": ["Joel Valencia", 2977, 273], "158324": ["Piotr Parzyszek", 1821, 255], "259194": ["Patryk Soko\u0142owski", 208, 245], "399419": ["Karol Stanek", 5, 0], "191229": ["Tomasz Mokwa", 416, 250], "23294": ["Marcin Pietrowski", 2059, 261]}}]});
            })
         });
}

