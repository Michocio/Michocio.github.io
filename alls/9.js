

 

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
                                table.html(tekst);

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
                                table.html(tekst);

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
    
       mpld3.draw_figure("id9", {"axes": [{"axesbg": "#FFFFFF", "axes": [{"nticks": 5, "visible": true, "tickvalues": null, "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 24, "visible": true, "tickvalues": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], "grid": {"gridOn": false}, "scale": "linear", "fontsize": 10.0, "tickformat": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], "position": "left"}], "sharex": [], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "yscale": "linear", "ydomain": [13.3, 39.7], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139766990111464", "alpha": 1, "v_baseline": "hanging", "text": "Minuty"}], "id": "el7886139766990512704", "xdomain": [7449.25, 8.0], "collections": [], "ylim": [13.3, 39.7], "zoomable": true, "markers": [], "sharey": ["el7886139766989776544"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [7449.25, 8.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989920240", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989919736", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989921024", "alpha": 0.7, "data": "data03", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989921920", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989947456", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989948352", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 2, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989949248", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989950144", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989979776", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989980672", "alpha": 0.7, "data": "data09", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989981568", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989982464", "alpha": 0.7, "data": "data11", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989983360", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766990004800", "alpha": 0.7, "data": "data13", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766990005696", "alpha": 0.7, "data": "data14", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766990006592", "alpha": 0.7, "data": "data15", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766990007488", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 4, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989508736", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989509632", "alpha": 0.7, "data": "data16", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989510528", "alpha": 0.7, "data": "data17", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989511424", "alpha": 0.7, "data": "data18", "dasharray": "none"}, {"yindex": 5, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989512320", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 6, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989533760", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989534656", "alpha": 0.7, "data": "data19", "dasharray": "none"}], "images": []}, {"axesbg": "#FFFFFF", "axes": [{"nticks": 5, "visible": true, "tickvalues": [228, 240, 252, 264, 277], "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 24, "visible": true, "tickvalues": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], "grid": {"gridOn": false}, "scale": "linear", "fontsize": null, "tickformat": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], "position": "right"}], "sharex": [], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "yscale": "linear", "ydomain": [13.3, 39.7], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139766989799496", "alpha": 1, "v_baseline": "hanging", "text": "Instat index"}], "id": "el7886139766989776544", "xdomain": [218.0, 287.0], "collections": [], "ylim": [13.3, 39.7], "zoomable": true, "markers": [], "sharey": ["el7886139766990512704"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [218.0, 287.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989536728", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989919904", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989553848", "alpha": 0.7, "data": "data03", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989554744", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 7, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989555640", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989556536", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 2, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989557432", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989578872", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989579768", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989580664", "alpha": 0.7, "data": "data09", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989581560", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989603000", "alpha": 0.7, "data": "data11", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989603896", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989604792", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989605688", "alpha": 0.7, "data": "data14", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989606584", "alpha": 0.7, "data": "data15", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989628024", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 4, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989628920", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989629816", "alpha": 0.7, "data": "data16", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989630712", "alpha": 0.7, "data": "data17", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989660344", "alpha": 0.7, "data": "data18", "dasharray": "none"}, {"yindex": 5, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989661240", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 6, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989662136", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989663032", "alpha": 0.7, "data": "data08", "dasharray": "none"}], "images": []}], "width": 640.0, "id": "el7886139766990393640", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"type": "clickinfo", "alls": [["Rafal Pietrzak", [3247, 249]], ["Vullnet Basha", [2695, 273]], ["Marcin Ryszard Wasilewski", [2690, 253]], ["Maciej Sadlok", [2480, 257]], ["Rafal Boguski", [2028, 254]], ["Marko Kolar", [1909, 257]], ["Zdenek Ondrasek", [1692, 274]], ["Jakub Bartkowski", [1650, 265]], ["Dawid Kort", [1536, 238]], ["Jesus Imaz", [1504, 252]], ["Krzysztof Drzazga", [1362, 250]], ["Martin Kostal", [1292, 246]], ["Vukan Savicevic", [1070, 294]], ["S\u0142awomir Peszko", [1047, 257]], ["Kamil Wojtkowski", [923, 245]], ["Zoran Arsenic", [887, 258]], ["Patryk Plewka", [839, 229]], ["Matej Palcic", [826, 255]], ["Jakub B\u0142aszczykowski", [739, 280]], ["Lukas Klemenz", [652, 288]], ["\u0141ukasz Burliga", [596, 284]], ["Pawe\u0142 Bro\u017cek", [526, 241]], ["Tibor Halilovic", [502, 240]], ["Marcin Grabowski", [494, 222]], ["D. Hoyo-Kowalski", [382, 230]], ["Patryk Adrian Ma\u0142ecki", [313, 235]], ["Dawid Szot", [191, 211]], ["Maciej Sliwa", [184, 252]], ["Jakub Bartosz", [148, 226]], ["Wojciech Slomka", [96, 231]], ["Daniel Morys", [94, 249]], ["Emmanuel Kumah", [84, 226]], ["Aleksander Buksa", [54, 188]], ["Artur Balicki", [8, 0]]], "wiek": {"33": [1741, 1037], "34": [19050], "35": [9239], "38": [1046], "15": [1010108, 458073], "17": [451384, 980589], "18": [441340, 432053, 441342, 1115567], "19": [855730], "20": [244733, 457372], "22": [268959, 228928], "23": [96211, 186373, 261305, 95032, 233126], "24": [160362, 191554], "25": [24072], "26": [56307], "27": [23449], "28": [8802, 157695], "29": [9237], "30": [19467, 23413, 19054]}, "players": {"228928": ["Jakub Bartosz", 148, 226], "191554": ["Zoran Arsenic", 887, 258], "186373": ["Dawid Kort", 1536, 238], "24072": ["Matej Palcic", 826, 255], "23413": ["\u0141ukasz Burliga", 596, 284], "19467": ["Zdenek Ondrasek", 1692, 274], "1741": ["S\u0142awomir Peszko", 1047, 257], "1037": ["Jakub B\u0142aszczykowski", 739, 280], "451384": ["Dawid Szot", 191, 211], "96211": ["Marko Kolar", 1909, 257], "9237": ["Maciej Sadlok", 2480, 257], "1046": ["Marcin Ryszard Wasilewski", 2690, 253], "9239": ["Pawe\u0142 Bro\u017cek", 526, 241], "23449": ["Jakub Bartkowski", 1650, 265], "457372": ["Wojciech Slomka", 96, 231], "458073": ["Aleksander Buksa", 54, 188], "268959": ["Martin Kostal", 1292, 246], "8802": ["Vullnet Basha", 2695, 273], "233126": ["Tibor Halilovic", 502, 240], "1010108": ["D. Hoyo-Kowalski", 382, 230], "19050": ["Rafal Boguski", 2028, 254], "980589": ["Maciej Sliwa", 184, 252], "19054": ["Patryk Adrian Ma\u0142ecki", 313, 235], "1115567": ["Emmanuel Kumah", 84, 226], "855730": ["Artur Balicki", 8, 0], "56307": ["Rafal Pietrzak", 3247, 249], "432053": ["Marcin Grabowski", 494, 222], "160362": ["Vukan Savicevic", 1070, 294], "95032": ["Lukas Klemenz", 652, 288], "261305": ["Krzysztof Drzazga", 1362, 250], "441340": ["Patryk Plewka", 839, 229], "244733": ["Kamil Wojtkowski", 923, 245], "441342": ["Daniel Morys", 94, 249], "157695": ["Jesus Imaz", 1504, 252]}, "vals": {"33": [1786, 267], "34": [2028, 254], "35": [526, 241], "38": [2690, 253], "15": [436, 228], "17": [375, 230], "18": [1511, 228], "19": [8, 0], "20": [1019, 243], "22": [1440, 244], "23": [5961, 253], "24": [1957, 277], "25": [826, 255], "26": [3247, 249], "27": [1650, 265], "28": [4199, 265], "29": [2480, 257], "30": [2601, 272]}, "low": 15, "ids": ["el7886139766989920240", "el7886139766989919736", "el7886139766989921024", "el7886139766989921920", "el7886139766989947456", "el7886139766989948352", "el7886139766989949248", "el7886139766989950144", "el7886139766989979776", "el7886139766989980672", "el7886139766989981568", "el7886139766989982464", "el7886139766989983360", "el7886139766990004800", "el7886139766990005696", "el7886139766990006592", "el7886139766990007488", "el7886139766989508736", "el7886139766989509632", "el7886139766989510528", "el7886139766989511424", "el7886139766989512320", "el7886139766989533760", "el7886139766989534656"]}, {"type": "clickinfo", "alls": [["Rafal Pietrzak", [3247, 249]], ["Vullnet Basha", [2695, 273]], ["Marcin Ryszard Wasilewski", [2690, 253]], ["Maciej Sadlok", [2480, 257]], ["Rafal Boguski", [2028, 254]], ["Marko Kolar", [1909, 257]], ["Zdenek Ondrasek", [1692, 274]], ["Jakub Bartkowski", [1650, 265]], ["Dawid Kort", [1536, 238]], ["Jesus Imaz", [1504, 252]], ["Krzysztof Drzazga", [1362, 250]], ["Martin Kostal", [1292, 246]], ["Vukan Savicevic", [1070, 294]], ["S\u0142awomir Peszko", [1047, 257]], ["Kamil Wojtkowski", [923, 245]], ["Zoran Arsenic", [887, 258]], ["Patryk Plewka", [839, 229]], ["Matej Palcic", [826, 255]], ["Jakub B\u0142aszczykowski", [739, 280]], ["Lukas Klemenz", [652, 288]], ["\u0141ukasz Burliga", [596, 284]], ["Pawe\u0142 Bro\u017cek", [526, 241]], ["Tibor Halilovic", [502, 240]], ["Marcin Grabowski", [494, 222]], ["D. Hoyo-Kowalski", [382, 230]], ["Patryk Adrian Ma\u0142ecki", [313, 235]], ["Dawid Szot", [191, 211]], ["Maciej Sliwa", [184, 252]], ["Jakub Bartosz", [148, 226]], ["Wojciech Slomka", [96, 231]], ["Daniel Morys", [94, 249]], ["Emmanuel Kumah", [84, 226]], ["Aleksander Buksa", [54, 188]], ["Artur Balicki", [8, 0]]], "wiek": {"33": [1741, 1037], "34": [19050], "35": [9239], "38": [1046], "15": [1010108, 458073], "17": [451384, 980589], "18": [441340, 432053, 441342, 1115567], "19": [855730], "20": [244733, 457372], "22": [268959, 228928], "23": [96211, 186373, 261305, 95032, 233126], "24": [160362, 191554], "25": [24072], "26": [56307], "27": [23449], "28": [8802, 157695], "29": [9237], "30": [19467, 23413, 19054]}, "players": {"228928": ["Jakub Bartosz", 148, 226], "191554": ["Zoran Arsenic", 887, 258], "186373": ["Dawid Kort", 1536, 238], "24072": ["Matej Palcic", 826, 255], "23413": ["\u0141ukasz Burliga", 596, 284], "19467": ["Zdenek Ondrasek", 1692, 274], "1741": ["S\u0142awomir Peszko", 1047, 257], "1037": ["Jakub B\u0142aszczykowski", 739, 280], "451384": ["Dawid Szot", 191, 211], "96211": ["Marko Kolar", 1909, 257], "9237": ["Maciej Sadlok", 2480, 257], "1046": ["Marcin Ryszard Wasilewski", 2690, 253], "9239": ["Pawe\u0142 Bro\u017cek", 526, 241], "23449": ["Jakub Bartkowski", 1650, 265], "457372": ["Wojciech Slomka", 96, 231], "458073": ["Aleksander Buksa", 54, 188], "268959": ["Martin Kostal", 1292, 246], "8802": ["Vullnet Basha", 2695, 273], "233126": ["Tibor Halilovic", 502, 240], "1010108": ["D. Hoyo-Kowalski", 382, 230], "19050": ["Rafal Boguski", 2028, 254], "980589": ["Maciej Sliwa", 184, 252], "19054": ["Patryk Adrian Ma\u0142ecki", 313, 235], "1115567": ["Emmanuel Kumah", 84, 226], "855730": ["Artur Balicki", 8, 0], "56307": ["Rafal Pietrzak", 3247, 249], "432053": ["Marcin Grabowski", 494, 222], "160362": ["Vukan Savicevic", 1070, 294], "95032": ["Lukas Klemenz", 652, 288], "261305": ["Krzysztof Drzazga", 1362, 250], "441340": ["Patryk Plewka", 839, 229], "244733": ["Kamil Wojtkowski", 923, 245], "441342": ["Daniel Morys", 94, 249], "157695": ["Jesus Imaz", 1504, 252]}, "vals": {"33": [1786, 267], "34": [2028, 254], "35": [526, 241], "38": [2690, 253], "15": [436, 228], "17": [375, 230], "18": [1511, 228], "19": [8, 0], "20": [1019, 243], "22": [1440, 244], "23": [5961, 253], "24": [1957, 277], "25": [826, 255], "26": [3247, 249], "27": [1650, 265], "28": [4199, 265], "29": [2480, 257], "30": [2601, 272]}, "low": 15, "ids": ["el7886139766989536728", "el7886139766989919904", "el7886139766989553848", "el7886139766989554744", "el7886139766989555640", "el7886139766989556536", "el7886139766989557432", "el7886139766989578872", "el7886139766989579768", "el7886139766989580664", "el7886139766989581560", "el7886139766989603000", "el7886139766989603896", "el7886139766989604792", "el7886139766989605688", "el7886139766989606584", "el7886139766989628024", "el7886139766989628920", "el7886139766989629816", "el7886139766989630712", "el7886139766989660344", "el7886139766989661240", "el7886139766989662136", "el7886139766989663032"]}], "height": 480.0, "data": {"data12": [[0.0, 26.5, 0.0, 27.5], [1650.0, 26.5, 265.0, 27.5], [1650.0, 27.5, 265.0, 28.5], [0.0, 27.5, 0.0, 28.5]], "data16": [[0.0, 32.5, 0.0], [1786.0, 32.5, 267.0], [1786.0, 33.5, 267.0], [0.0, 33.5, 0.0]], "data07": [[0.0, 21.5, 0.0], [1440.0, 21.5, 244.0], [1440.0, 22.5, 244.0], [0.0, 22.5, 0.0]], "data06": [[0.0, 19.5, 0.0], [1019.0, 19.5, 243.0], [1019.0, 20.5, 243.0], [0.0, 20.5, 0.0]], "data09": [[0.0, 23.5, 0.0], [1957.0, 23.5, 277.0], [1957.0, 24.5, 277.0], [0.0, 24.5, 0.0]], "data04": [[0.0, 17.5], [1511.0, 17.5], [1511.0, 18.5], [0.0, 18.5]], "data10": [[0.0, 24.5, 0.0], [826.0, 24.5, 255.0], [826.0, 25.5, 255.0], [0.0, 25.5, 0.0]], "data14": [[0.0, 28.5, 0.0], [2480.0, 28.5, 257.0], [2480.0, 29.5, 257.0], [0.0, 29.5, 0.0]], "data08": [[0.0, 22.5, 0.0, 37.5], [5961.0, 22.5, 253.0, 37.5], [5961.0, 23.5, 253.0, 38.5], [0.0, 23.5, 0.0, 38.5]], "data19": [[0.0, 37.5], [2690.0, 37.5], [2690.0, 38.5], [0.0, 38.5]], "data02": [[0.0, 15.5, 20.5, 30.5, 31.5, 35.5, 36.5, 18.5], [0.0, 15.5, 20.5, 30.5, 31.5, 35.5, 36.5, 18.5], [0.0, 16.5, 21.5, 31.5, 32.5, 36.5, 37.5, 19.5], [0.0, 16.5, 21.5, 31.5, 32.5, 36.5, 37.5, 19.5]], "data05": [[0.0, 18.5], [8.0, 18.5], [8.0, 19.5], [0.0, 19.5]], "data18": [[0.0, 34.5, 0.0], [526.0, 34.5, 241.0], [526.0, 35.5, 241.0], [0.0, 35.5, 0.0]], "data17": [[0.0, 33.5, 0.0], [2028.0, 33.5, 254.0], [2028.0, 34.5, 254.0], [0.0, 34.5, 0.0]], "data13": [[0.0, 27.5], [4199.0, 27.5], [4199.0, 28.5], [0.0, 28.5]], "data01": [[0.0, 14.5, 0.0, 17.5], [436.0, 14.5, 228.0, 17.5], [436.0, 15.5, 228.0, 18.5], [0.0, 15.5, 0.0, 18.5]], "data11": [[0.0, 25.5, 0.0], [3247.0, 25.5, 249.0], [3247.0, 26.5, 249.0], [0.0, 26.5, 0.0]], "data03": [[0.0, 16.5, 0.0], [375.0, 16.5, 230.0], [375.0, 17.5, 230.0], [0.0, 17.5, 0.0]], "data15": [[0.0, 29.5, 0.0], [2601.0, 29.5, 272.0], [2601.0, 30.5, 272.0], [0.0, 30.5, 0.0]]}});
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
                                table.html(tekst);

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
                                table.html(tekst);

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
    
         mpld3.draw_figure("id9", {"axes": [{"axesbg": "#FFFFFF", "axes": [{"nticks": 5, "visible": true, "tickvalues": null, "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 24, "visible": true, "tickvalues": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], "grid": {"gridOn": false}, "scale": "linear", "fontsize": 10.0, "tickformat": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], "position": "left"}], "sharex": [], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "yscale": "linear", "ydomain": [13.3, 39.7], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139766990111464", "alpha": 1, "v_baseline": "hanging", "text": "Minuty"}], "id": "el7886139766990512704", "xdomain": [7449.25, 8.0], "collections": [], "ylim": [13.3, 39.7], "zoomable": true, "markers": [], "sharey": ["el7886139766989776544"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [7449.25, 8.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989920240", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989919736", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989921024", "alpha": 0.7, "data": "data03", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989921920", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989947456", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989948352", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 2, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989949248", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989950144", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989979776", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989980672", "alpha": 0.7, "data": "data09", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989981568", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989982464", "alpha": 0.7, "data": "data11", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989983360", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766990004800", "alpha": 0.7, "data": "data13", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766990005696", "alpha": 0.7, "data": "data14", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766990006592", "alpha": 0.7, "data": "data15", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766990007488", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 4, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989508736", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989509632", "alpha": 0.7, "data": "data16", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989510528", "alpha": 0.7, "data": "data17", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989511424", "alpha": 0.7, "data": "data18", "dasharray": "none"}, {"yindex": 5, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989512320", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 6, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989533760", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989534656", "alpha": 0.7, "data": "data19", "dasharray": "none"}], "images": []}, {"axesbg": "#FFFFFF", "axes": [{"nticks": 5, "visible": true, "tickvalues": [228, 240, 252, 264, 277], "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 24, "visible": true, "tickvalues": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], "grid": {"gridOn": false}, "scale": "linear", "fontsize": null, "tickformat": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], "position": "right"}], "sharex": [], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "yscale": "linear", "ydomain": [13.3, 39.7], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139766989799496", "alpha": 1, "v_baseline": "hanging", "text": "Instat index"}], "id": "el7886139766989776544", "xdomain": [218.0, 287.0], "collections": [], "ylim": [13.3, 39.7], "zoomable": true, "markers": [], "sharey": ["el7886139766990512704"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [218.0, 287.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989536728", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989919904", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989553848", "alpha": 0.7, "data": "data03", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989554744", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 7, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989555640", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989556536", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 2, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989557432", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989578872", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989579768", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989580664", "alpha": 0.7, "data": "data09", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989581560", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989603000", "alpha": 0.7, "data": "data11", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989603896", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989604792", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989605688", "alpha": 0.7, "data": "data14", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989606584", "alpha": 0.7, "data": "data15", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989628024", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 4, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989628920", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989629816", "alpha": 0.7, "data": "data16", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989630712", "alpha": 0.7, "data": "data17", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989660344", "alpha": 0.7, "data": "data18", "dasharray": "none"}, {"yindex": 5, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989661240", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 6, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989662136", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989663032", "alpha": 0.7, "data": "data08", "dasharray": "none"}], "images": []}], "width": 640.0, "id": "el7886139766990393640", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"type": "clickinfo", "alls": [["Rafal Pietrzak", [3247, 249]], ["Vullnet Basha", [2695, 273]], ["Marcin Ryszard Wasilewski", [2690, 253]], ["Maciej Sadlok", [2480, 257]], ["Rafal Boguski", [2028, 254]], ["Marko Kolar", [1909, 257]], ["Zdenek Ondrasek", [1692, 274]], ["Jakub Bartkowski", [1650, 265]], ["Dawid Kort", [1536, 238]], ["Jesus Imaz", [1504, 252]], ["Krzysztof Drzazga", [1362, 250]], ["Martin Kostal", [1292, 246]], ["Vukan Savicevic", [1070, 294]], ["S\u0142awomir Peszko", [1047, 257]], ["Kamil Wojtkowski", [923, 245]], ["Zoran Arsenic", [887, 258]], ["Patryk Plewka", [839, 229]], ["Matej Palcic", [826, 255]], ["Jakub B\u0142aszczykowski", [739, 280]], ["Lukas Klemenz", [652, 288]], ["\u0141ukasz Burliga", [596, 284]], ["Pawe\u0142 Bro\u017cek", [526, 241]], ["Tibor Halilovic", [502, 240]], ["Marcin Grabowski", [494, 222]], ["D. Hoyo-Kowalski", [382, 230]], ["Patryk Adrian Ma\u0142ecki", [313, 235]], ["Dawid Szot", [191, 211]], ["Maciej Sliwa", [184, 252]], ["Jakub Bartosz", [148, 226]], ["Wojciech Slomka", [96, 231]], ["Daniel Morys", [94, 249]], ["Emmanuel Kumah", [84, 226]], ["Aleksander Buksa", [54, 188]], ["Artur Balicki", [8, 0]]], "wiek": {"33": [1741, 1037], "34": [19050], "35": [9239], "38": [1046], "15": [1010108, 458073], "17": [451384, 980589], "18": [441340, 432053, 441342, 1115567], "19": [855730], "20": [244733, 457372], "22": [268959, 228928], "23": [96211, 186373, 261305, 95032, 233126], "24": [160362, 191554], "25": [24072], "26": [56307], "27": [23449], "28": [8802, 157695], "29": [9237], "30": [19467, 23413, 19054]}, "players": {"228928": ["Jakub Bartosz", 148, 226], "191554": ["Zoran Arsenic", 887, 258], "186373": ["Dawid Kort", 1536, 238], "24072": ["Matej Palcic", 826, 255], "23413": ["\u0141ukasz Burliga", 596, 284], "19467": ["Zdenek Ondrasek", 1692, 274], "1741": ["S\u0142awomir Peszko", 1047, 257], "1037": ["Jakub B\u0142aszczykowski", 739, 280], "451384": ["Dawid Szot", 191, 211], "96211": ["Marko Kolar", 1909, 257], "9237": ["Maciej Sadlok", 2480, 257], "1046": ["Marcin Ryszard Wasilewski", 2690, 253], "9239": ["Pawe\u0142 Bro\u017cek", 526, 241], "23449": ["Jakub Bartkowski", 1650, 265], "457372": ["Wojciech Slomka", 96, 231], "458073": ["Aleksander Buksa", 54, 188], "268959": ["Martin Kostal", 1292, 246], "8802": ["Vullnet Basha", 2695, 273], "233126": ["Tibor Halilovic", 502, 240], "1010108": ["D. Hoyo-Kowalski", 382, 230], "19050": ["Rafal Boguski", 2028, 254], "980589": ["Maciej Sliwa", 184, 252], "19054": ["Patryk Adrian Ma\u0142ecki", 313, 235], "1115567": ["Emmanuel Kumah", 84, 226], "855730": ["Artur Balicki", 8, 0], "56307": ["Rafal Pietrzak", 3247, 249], "432053": ["Marcin Grabowski", 494, 222], "160362": ["Vukan Savicevic", 1070, 294], "95032": ["Lukas Klemenz", 652, 288], "261305": ["Krzysztof Drzazga", 1362, 250], "441340": ["Patryk Plewka", 839, 229], "244733": ["Kamil Wojtkowski", 923, 245], "441342": ["Daniel Morys", 94, 249], "157695": ["Jesus Imaz", 1504, 252]}, "vals": {"33": [1786, 267], "34": [2028, 254], "35": [526, 241], "38": [2690, 253], "15": [436, 228], "17": [375, 230], "18": [1511, 228], "19": [8, 0], "20": [1019, 243], "22": [1440, 244], "23": [5961, 253], "24": [1957, 277], "25": [826, 255], "26": [3247, 249], "27": [1650, 265], "28": [4199, 265], "29": [2480, 257], "30": [2601, 272]}, "low": 15, "ids": ["el7886139766989920240", "el7886139766989919736", "el7886139766989921024", "el7886139766989921920", "el7886139766989947456", "el7886139766989948352", "el7886139766989949248", "el7886139766989950144", "el7886139766989979776", "el7886139766989980672", "el7886139766989981568", "el7886139766989982464", "el7886139766989983360", "el7886139766990004800", "el7886139766990005696", "el7886139766990006592", "el7886139766990007488", "el7886139766989508736", "el7886139766989509632", "el7886139766989510528", "el7886139766989511424", "el7886139766989512320", "el7886139766989533760", "el7886139766989534656"]}, {"type": "clickinfo", "alls": [["Rafal Pietrzak", [3247, 249]], ["Vullnet Basha", [2695, 273]], ["Marcin Ryszard Wasilewski", [2690, 253]], ["Maciej Sadlok", [2480, 257]], ["Rafal Boguski", [2028, 254]], ["Marko Kolar", [1909, 257]], ["Zdenek Ondrasek", [1692, 274]], ["Jakub Bartkowski", [1650, 265]], ["Dawid Kort", [1536, 238]], ["Jesus Imaz", [1504, 252]], ["Krzysztof Drzazga", [1362, 250]], ["Martin Kostal", [1292, 246]], ["Vukan Savicevic", [1070, 294]], ["S\u0142awomir Peszko", [1047, 257]], ["Kamil Wojtkowski", [923, 245]], ["Zoran Arsenic", [887, 258]], ["Patryk Plewka", [839, 229]], ["Matej Palcic", [826, 255]], ["Jakub B\u0142aszczykowski", [739, 280]], ["Lukas Klemenz", [652, 288]], ["\u0141ukasz Burliga", [596, 284]], ["Pawe\u0142 Bro\u017cek", [526, 241]], ["Tibor Halilovic", [502, 240]], ["Marcin Grabowski", [494, 222]], ["D. Hoyo-Kowalski", [382, 230]], ["Patryk Adrian Ma\u0142ecki", [313, 235]], ["Dawid Szot", [191, 211]], ["Maciej Sliwa", [184, 252]], ["Jakub Bartosz", [148, 226]], ["Wojciech Slomka", [96, 231]], ["Daniel Morys", [94, 249]], ["Emmanuel Kumah", [84, 226]], ["Aleksander Buksa", [54, 188]], ["Artur Balicki", [8, 0]]], "wiek": {"33": [1741, 1037], "34": [19050], "35": [9239], "38": [1046], "15": [1010108, 458073], "17": [451384, 980589], "18": [441340, 432053, 441342, 1115567], "19": [855730], "20": [244733, 457372], "22": [268959, 228928], "23": [96211, 186373, 261305, 95032, 233126], "24": [160362, 191554], "25": [24072], "26": [56307], "27": [23449], "28": [8802, 157695], "29": [9237], "30": [19467, 23413, 19054]}, "players": {"228928": ["Jakub Bartosz", 148, 226], "191554": ["Zoran Arsenic", 887, 258], "186373": ["Dawid Kort", 1536, 238], "24072": ["Matej Palcic", 826, 255], "23413": ["\u0141ukasz Burliga", 596, 284], "19467": ["Zdenek Ondrasek", 1692, 274], "1741": ["S\u0142awomir Peszko", 1047, 257], "1037": ["Jakub B\u0142aszczykowski", 739, 280], "451384": ["Dawid Szot", 191, 211], "96211": ["Marko Kolar", 1909, 257], "9237": ["Maciej Sadlok", 2480, 257], "1046": ["Marcin Ryszard Wasilewski", 2690, 253], "9239": ["Pawe\u0142 Bro\u017cek", 526, 241], "23449": ["Jakub Bartkowski", 1650, 265], "457372": ["Wojciech Slomka", 96, 231], "458073": ["Aleksander Buksa", 54, 188], "268959": ["Martin Kostal", 1292, 246], "8802": ["Vullnet Basha", 2695, 273], "233126": ["Tibor Halilovic", 502, 240], "1010108": ["D. Hoyo-Kowalski", 382, 230], "19050": ["Rafal Boguski", 2028, 254], "980589": ["Maciej Sliwa", 184, 252], "19054": ["Patryk Adrian Ma\u0142ecki", 313, 235], "1115567": ["Emmanuel Kumah", 84, 226], "855730": ["Artur Balicki", 8, 0], "56307": ["Rafal Pietrzak", 3247, 249], "432053": ["Marcin Grabowski", 494, 222], "160362": ["Vukan Savicevic", 1070, 294], "95032": ["Lukas Klemenz", 652, 288], "261305": ["Krzysztof Drzazga", 1362, 250], "441340": ["Patryk Plewka", 839, 229], "244733": ["Kamil Wojtkowski", 923, 245], "441342": ["Daniel Morys", 94, 249], "157695": ["Jesus Imaz", 1504, 252]}, "vals": {"33": [1786, 267], "34": [2028, 254], "35": [526, 241], "38": [2690, 253], "15": [436, 228], "17": [375, 230], "18": [1511, 228], "19": [8, 0], "20": [1019, 243], "22": [1440, 244], "23": [5961, 253], "24": [1957, 277], "25": [826, 255], "26": [3247, 249], "27": [1650, 265], "28": [4199, 265], "29": [2480, 257], "30": [2601, 272]}, "low": 15, "ids": ["el7886139766989536728", "el7886139766989919904", "el7886139766989553848", "el7886139766989554744", "el7886139766989555640", "el7886139766989556536", "el7886139766989557432", "el7886139766989578872", "el7886139766989579768", "el7886139766989580664", "el7886139766989581560", "el7886139766989603000", "el7886139766989603896", "el7886139766989604792", "el7886139766989605688", "el7886139766989606584", "el7886139766989628024", "el7886139766989628920", "el7886139766989629816", "el7886139766989630712", "el7886139766989660344", "el7886139766989661240", "el7886139766989662136", "el7886139766989663032"]}], "height": 480.0, "data": {"data12": [[0.0, 26.5, 0.0, 27.5], [1650.0, 26.5, 265.0, 27.5], [1650.0, 27.5, 265.0, 28.5], [0.0, 27.5, 0.0, 28.5]], "data16": [[0.0, 32.5, 0.0], [1786.0, 32.5, 267.0], [1786.0, 33.5, 267.0], [0.0, 33.5, 0.0]], "data07": [[0.0, 21.5, 0.0], [1440.0, 21.5, 244.0], [1440.0, 22.5, 244.0], [0.0, 22.5, 0.0]], "data06": [[0.0, 19.5, 0.0], [1019.0, 19.5, 243.0], [1019.0, 20.5, 243.0], [0.0, 20.5, 0.0]], "data09": [[0.0, 23.5, 0.0], [1957.0, 23.5, 277.0], [1957.0, 24.5, 277.0], [0.0, 24.5, 0.0]], "data04": [[0.0, 17.5], [1511.0, 17.5], [1511.0, 18.5], [0.0, 18.5]], "data10": [[0.0, 24.5, 0.0], [826.0, 24.5, 255.0], [826.0, 25.5, 255.0], [0.0, 25.5, 0.0]], "data14": [[0.0, 28.5, 0.0], [2480.0, 28.5, 257.0], [2480.0, 29.5, 257.0], [0.0, 29.5, 0.0]], "data08": [[0.0, 22.5, 0.0, 37.5], [5961.0, 22.5, 253.0, 37.5], [5961.0, 23.5, 253.0, 38.5], [0.0, 23.5, 0.0, 38.5]], "data19": [[0.0, 37.5], [2690.0, 37.5], [2690.0, 38.5], [0.0, 38.5]], "data02": [[0.0, 15.5, 20.5, 30.5, 31.5, 35.5, 36.5, 18.5], [0.0, 15.5, 20.5, 30.5, 31.5, 35.5, 36.5, 18.5], [0.0, 16.5, 21.5, 31.5, 32.5, 36.5, 37.5, 19.5], [0.0, 16.5, 21.5, 31.5, 32.5, 36.5, 37.5, 19.5]], "data05": [[0.0, 18.5], [8.0, 18.5], [8.0, 19.5], [0.0, 19.5]], "data18": [[0.0, 34.5, 0.0], [526.0, 34.5, 241.0], [526.0, 35.5, 241.0], [0.0, 35.5, 0.0]], "data17": [[0.0, 33.5, 0.0], [2028.0, 33.5, 254.0], [2028.0, 34.5, 254.0], [0.0, 34.5, 0.0]], "data13": [[0.0, 27.5], [4199.0, 27.5], [4199.0, 28.5], [0.0, 28.5]], "data01": [[0.0, 14.5, 0.0, 17.5], [436.0, 14.5, 228.0, 17.5], [436.0, 15.5, 228.0, 18.5], [0.0, 15.5, 0.0, 18.5]], "data11": [[0.0, 25.5, 0.0], [3247.0, 25.5, 249.0], [3247.0, 26.5, 249.0], [0.0, 26.5, 0.0]], "data03": [[0.0, 16.5, 0.0], [375.0, 16.5, 230.0], [375.0, 17.5, 230.0], [0.0, 17.5, 0.0]], "data15": [[0.0, 29.5, 0.0], [2601.0, 29.5, 272.0], [2601.0, 30.5, 272.0], [0.0, 30.5, 0.0]]}});
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
                                table.html(tekst);

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
                                table.html(tekst);

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
    
                 mpld3.draw_figure("id9", {"axes": [{"axesbg": "#FFFFFF", "axes": [{"nticks": 5, "visible": true, "tickvalues": null, "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 24, "visible": true, "tickvalues": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], "grid": {"gridOn": false}, "scale": "linear", "fontsize": 10.0, "tickformat": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], "position": "left"}], "sharex": [], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "yscale": "linear", "ydomain": [13.3, 39.7], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139766990111464", "alpha": 1, "v_baseline": "hanging", "text": "Minuty"}], "id": "el7886139766990512704", "xdomain": [7449.25, 8.0], "collections": [], "ylim": [13.3, 39.7], "zoomable": true, "markers": [], "sharey": ["el7886139766989776544"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [7449.25, 8.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989920240", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989919736", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989921024", "alpha": 0.7, "data": "data03", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989921920", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989947456", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989948352", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 2, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989949248", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989950144", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989979776", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989980672", "alpha": 0.7, "data": "data09", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989981568", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989982464", "alpha": 0.7, "data": "data11", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989983360", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766990004800", "alpha": 0.7, "data": "data13", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766990005696", "alpha": 0.7, "data": "data14", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766990006592", "alpha": 0.7, "data": "data15", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766990007488", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 4, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989508736", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989509632", "alpha": 0.7, "data": "data16", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989510528", "alpha": 0.7, "data": "data17", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989511424", "alpha": 0.7, "data": "data18", "dasharray": "none"}, {"yindex": 5, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989512320", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 6, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989533760", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766989534656", "alpha": 0.7, "data": "data19", "dasharray": "none"}], "images": []}, {"axesbg": "#FFFFFF", "axes": [{"nticks": 5, "visible": true, "tickvalues": [228, 240, 252, 264, 277], "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 24, "visible": true, "tickvalues": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], "grid": {"gridOn": false}, "scale": "linear", "fontsize": null, "tickformat": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], "position": "right"}], "sharex": [], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "yscale": "linear", "ydomain": [13.3, 39.7], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139766989799496", "alpha": 1, "v_baseline": "hanging", "text": "Instat index"}], "id": "el7886139766989776544", "xdomain": [218.0, 287.0], "collections": [], "ylim": [13.3, 39.7], "zoomable": true, "markers": [], "sharey": ["el7886139766990512704"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [218.0, 287.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989536728", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989919904", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989553848", "alpha": 0.7, "data": "data03", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989554744", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 7, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989555640", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989556536", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 2, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989557432", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989578872", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989579768", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989580664", "alpha": 0.7, "data": "data09", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989581560", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989603000", "alpha": 0.7, "data": "data11", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989603896", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989604792", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989605688", "alpha": 0.7, "data": "data14", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989606584", "alpha": 0.7, "data": "data15", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989628024", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 4, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989628920", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989629816", "alpha": 0.7, "data": "data16", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989630712", "alpha": 0.7, "data": "data17", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989660344", "alpha": 0.7, "data": "data18", "dasharray": "none"}, {"yindex": 5, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989661240", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 6, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989662136", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766989663032", "alpha": 0.7, "data": "data08", "dasharray": "none"}], "images": []}], "width": 640.0, "id": "el7886139766990393640", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"type": "clickinfo", "alls": [["Rafal Pietrzak", [3247, 249]], ["Vullnet Basha", [2695, 273]], ["Marcin Ryszard Wasilewski", [2690, 253]], ["Maciej Sadlok", [2480, 257]], ["Rafal Boguski", [2028, 254]], ["Marko Kolar", [1909, 257]], ["Zdenek Ondrasek", [1692, 274]], ["Jakub Bartkowski", [1650, 265]], ["Dawid Kort", [1536, 238]], ["Jesus Imaz", [1504, 252]], ["Krzysztof Drzazga", [1362, 250]], ["Martin Kostal", [1292, 246]], ["Vukan Savicevic", [1070, 294]], ["S\u0142awomir Peszko", [1047, 257]], ["Kamil Wojtkowski", [923, 245]], ["Zoran Arsenic", [887, 258]], ["Patryk Plewka", [839, 229]], ["Matej Palcic", [826, 255]], ["Jakub B\u0142aszczykowski", [739, 280]], ["Lukas Klemenz", [652, 288]], ["\u0141ukasz Burliga", [596, 284]], ["Pawe\u0142 Bro\u017cek", [526, 241]], ["Tibor Halilovic", [502, 240]], ["Marcin Grabowski", [494, 222]], ["D. Hoyo-Kowalski", [382, 230]], ["Patryk Adrian Ma\u0142ecki", [313, 235]], ["Dawid Szot", [191, 211]], ["Maciej Sliwa", [184, 252]], ["Jakub Bartosz", [148, 226]], ["Wojciech Slomka", [96, 231]], ["Daniel Morys", [94, 249]], ["Emmanuel Kumah", [84, 226]], ["Aleksander Buksa", [54, 188]], ["Artur Balicki", [8, 0]]], "wiek": {"33": [1741, 1037], "34": [19050], "35": [9239], "38": [1046], "15": [1010108, 458073], "17": [451384, 980589], "18": [441340, 432053, 441342, 1115567], "19": [855730], "20": [244733, 457372], "22": [268959, 228928], "23": [96211, 186373, 261305, 95032, 233126], "24": [160362, 191554], "25": [24072], "26": [56307], "27": [23449], "28": [8802, 157695], "29": [9237], "30": [19467, 23413, 19054]}, "players": {"228928": ["Jakub Bartosz", 148, 226], "191554": ["Zoran Arsenic", 887, 258], "186373": ["Dawid Kort", 1536, 238], "24072": ["Matej Palcic", 826, 255], "23413": ["\u0141ukasz Burliga", 596, 284], "19467": ["Zdenek Ondrasek", 1692, 274], "1741": ["S\u0142awomir Peszko", 1047, 257], "1037": ["Jakub B\u0142aszczykowski", 739, 280], "451384": ["Dawid Szot", 191, 211], "96211": ["Marko Kolar", 1909, 257], "9237": ["Maciej Sadlok", 2480, 257], "1046": ["Marcin Ryszard Wasilewski", 2690, 253], "9239": ["Pawe\u0142 Bro\u017cek", 526, 241], "23449": ["Jakub Bartkowski", 1650, 265], "457372": ["Wojciech Slomka", 96, 231], "458073": ["Aleksander Buksa", 54, 188], "268959": ["Martin Kostal", 1292, 246], "8802": ["Vullnet Basha", 2695, 273], "233126": ["Tibor Halilovic", 502, 240], "1010108": ["D. Hoyo-Kowalski", 382, 230], "19050": ["Rafal Boguski", 2028, 254], "980589": ["Maciej Sliwa", 184, 252], "19054": ["Patryk Adrian Ma\u0142ecki", 313, 235], "1115567": ["Emmanuel Kumah", 84, 226], "855730": ["Artur Balicki", 8, 0], "56307": ["Rafal Pietrzak", 3247, 249], "432053": ["Marcin Grabowski", 494, 222], "160362": ["Vukan Savicevic", 1070, 294], "95032": ["Lukas Klemenz", 652, 288], "261305": ["Krzysztof Drzazga", 1362, 250], "441340": ["Patryk Plewka", 839, 229], "244733": ["Kamil Wojtkowski", 923, 245], "441342": ["Daniel Morys", 94, 249], "157695": ["Jesus Imaz", 1504, 252]}, "vals": {"33": [1786, 267], "34": [2028, 254], "35": [526, 241], "38": [2690, 253], "15": [436, 228], "17": [375, 230], "18": [1511, 228], "19": [8, 0], "20": [1019, 243], "22": [1440, 244], "23": [5961, 253], "24": [1957, 277], "25": [826, 255], "26": [3247, 249], "27": [1650, 265], "28": [4199, 265], "29": [2480, 257], "30": [2601, 272]}, "low": 15, "ids": ["el7886139766989920240", "el7886139766989919736", "el7886139766989921024", "el7886139766989921920", "el7886139766989947456", "el7886139766989948352", "el7886139766989949248", "el7886139766989950144", "el7886139766989979776", "el7886139766989980672", "el7886139766989981568", "el7886139766989982464", "el7886139766989983360", "el7886139766990004800", "el7886139766990005696", "el7886139766990006592", "el7886139766990007488", "el7886139766989508736", "el7886139766989509632", "el7886139766989510528", "el7886139766989511424", "el7886139766989512320", "el7886139766989533760", "el7886139766989534656"]}, {"type": "clickinfo", "alls": [["Rafal Pietrzak", [3247, 249]], ["Vullnet Basha", [2695, 273]], ["Marcin Ryszard Wasilewski", [2690, 253]], ["Maciej Sadlok", [2480, 257]], ["Rafal Boguski", [2028, 254]], ["Marko Kolar", [1909, 257]], ["Zdenek Ondrasek", [1692, 274]], ["Jakub Bartkowski", [1650, 265]], ["Dawid Kort", [1536, 238]], ["Jesus Imaz", [1504, 252]], ["Krzysztof Drzazga", [1362, 250]], ["Martin Kostal", [1292, 246]], ["Vukan Savicevic", [1070, 294]], ["S\u0142awomir Peszko", [1047, 257]], ["Kamil Wojtkowski", [923, 245]], ["Zoran Arsenic", [887, 258]], ["Patryk Plewka", [839, 229]], ["Matej Palcic", [826, 255]], ["Jakub B\u0142aszczykowski", [739, 280]], ["Lukas Klemenz", [652, 288]], ["\u0141ukasz Burliga", [596, 284]], ["Pawe\u0142 Bro\u017cek", [526, 241]], ["Tibor Halilovic", [502, 240]], ["Marcin Grabowski", [494, 222]], ["D. Hoyo-Kowalski", [382, 230]], ["Patryk Adrian Ma\u0142ecki", [313, 235]], ["Dawid Szot", [191, 211]], ["Maciej Sliwa", [184, 252]], ["Jakub Bartosz", [148, 226]], ["Wojciech Slomka", [96, 231]], ["Daniel Morys", [94, 249]], ["Emmanuel Kumah", [84, 226]], ["Aleksander Buksa", [54, 188]], ["Artur Balicki", [8, 0]]], "wiek": {"33": [1741, 1037], "34": [19050], "35": [9239], "38": [1046], "15": [1010108, 458073], "17": [451384, 980589], "18": [441340, 432053, 441342, 1115567], "19": [855730], "20": [244733, 457372], "22": [268959, 228928], "23": [96211, 186373, 261305, 95032, 233126], "24": [160362, 191554], "25": [24072], "26": [56307], "27": [23449], "28": [8802, 157695], "29": [9237], "30": [19467, 23413, 19054]}, "players": {"228928": ["Jakub Bartosz", 148, 226], "191554": ["Zoran Arsenic", 887, 258], "186373": ["Dawid Kort", 1536, 238], "24072": ["Matej Palcic", 826, 255], "23413": ["\u0141ukasz Burliga", 596, 284], "19467": ["Zdenek Ondrasek", 1692, 274], "1741": ["S\u0142awomir Peszko", 1047, 257], "1037": ["Jakub B\u0142aszczykowski", 739, 280], "451384": ["Dawid Szot", 191, 211], "96211": ["Marko Kolar", 1909, 257], "9237": ["Maciej Sadlok", 2480, 257], "1046": ["Marcin Ryszard Wasilewski", 2690, 253], "9239": ["Pawe\u0142 Bro\u017cek", 526, 241], "23449": ["Jakub Bartkowski", 1650, 265], "457372": ["Wojciech Slomka", 96, 231], "458073": ["Aleksander Buksa", 54, 188], "268959": ["Martin Kostal", 1292, 246], "8802": ["Vullnet Basha", 2695, 273], "233126": ["Tibor Halilovic", 502, 240], "1010108": ["D. Hoyo-Kowalski", 382, 230], "19050": ["Rafal Boguski", 2028, 254], "980589": ["Maciej Sliwa", 184, 252], "19054": ["Patryk Adrian Ma\u0142ecki", 313, 235], "1115567": ["Emmanuel Kumah", 84, 226], "855730": ["Artur Balicki", 8, 0], "56307": ["Rafal Pietrzak", 3247, 249], "432053": ["Marcin Grabowski", 494, 222], "160362": ["Vukan Savicevic", 1070, 294], "95032": ["Lukas Klemenz", 652, 288], "261305": ["Krzysztof Drzazga", 1362, 250], "441340": ["Patryk Plewka", 839, 229], "244733": ["Kamil Wojtkowski", 923, 245], "441342": ["Daniel Morys", 94, 249], "157695": ["Jesus Imaz", 1504, 252]}, "vals": {"33": [1786, 267], "34": [2028, 254], "35": [526, 241], "38": [2690, 253], "15": [436, 228], "17": [375, 230], "18": [1511, 228], "19": [8, 0], "20": [1019, 243], "22": [1440, 244], "23": [5961, 253], "24": [1957, 277], "25": [826, 255], "26": [3247, 249], "27": [1650, 265], "28": [4199, 265], "29": [2480, 257], "30": [2601, 272]}, "low": 15, "ids": ["el7886139766989536728", "el7886139766989919904", "el7886139766989553848", "el7886139766989554744", "el7886139766989555640", "el7886139766989556536", "el7886139766989557432", "el7886139766989578872", "el7886139766989579768", "el7886139766989580664", "el7886139766989581560", "el7886139766989603000", "el7886139766989603896", "el7886139766989604792", "el7886139766989605688", "el7886139766989606584", "el7886139766989628024", "el7886139766989628920", "el7886139766989629816", "el7886139766989630712", "el7886139766989660344", "el7886139766989661240", "el7886139766989662136", "el7886139766989663032"]}], "height": 480.0, "data": {"data12": [[0.0, 26.5, 0.0, 27.5], [1650.0, 26.5, 265.0, 27.5], [1650.0, 27.5, 265.0, 28.5], [0.0, 27.5, 0.0, 28.5]], "data16": [[0.0, 32.5, 0.0], [1786.0, 32.5, 267.0], [1786.0, 33.5, 267.0], [0.0, 33.5, 0.0]], "data07": [[0.0, 21.5, 0.0], [1440.0, 21.5, 244.0], [1440.0, 22.5, 244.0], [0.0, 22.5, 0.0]], "data06": [[0.0, 19.5, 0.0], [1019.0, 19.5, 243.0], [1019.0, 20.5, 243.0], [0.0, 20.5, 0.0]], "data09": [[0.0, 23.5, 0.0], [1957.0, 23.5, 277.0], [1957.0, 24.5, 277.0], [0.0, 24.5, 0.0]], "data04": [[0.0, 17.5], [1511.0, 17.5], [1511.0, 18.5], [0.0, 18.5]], "data10": [[0.0, 24.5, 0.0], [826.0, 24.5, 255.0], [826.0, 25.5, 255.0], [0.0, 25.5, 0.0]], "data14": [[0.0, 28.5, 0.0], [2480.0, 28.5, 257.0], [2480.0, 29.5, 257.0], [0.0, 29.5, 0.0]], "data08": [[0.0, 22.5, 0.0, 37.5], [5961.0, 22.5, 253.0, 37.5], [5961.0, 23.5, 253.0, 38.5], [0.0, 23.5, 0.0, 38.5]], "data19": [[0.0, 37.5], [2690.0, 37.5], [2690.0, 38.5], [0.0, 38.5]], "data02": [[0.0, 15.5, 20.5, 30.5, 31.5, 35.5, 36.5, 18.5], [0.0, 15.5, 20.5, 30.5, 31.5, 35.5, 36.5, 18.5], [0.0, 16.5, 21.5, 31.5, 32.5, 36.5, 37.5, 19.5], [0.0, 16.5, 21.5, 31.5, 32.5, 36.5, 37.5, 19.5]], "data05": [[0.0, 18.5], [8.0, 18.5], [8.0, 19.5], [0.0, 19.5]], "data18": [[0.0, 34.5, 0.0], [526.0, 34.5, 241.0], [526.0, 35.5, 241.0], [0.0, 35.5, 0.0]], "data17": [[0.0, 33.5, 0.0], [2028.0, 33.5, 254.0], [2028.0, 34.5, 254.0], [0.0, 34.5, 0.0]], "data13": [[0.0, 27.5], [4199.0, 27.5], [4199.0, 28.5], [0.0, 28.5]], "data01": [[0.0, 14.5, 0.0, 17.5], [436.0, 14.5, 228.0, 17.5], [436.0, 15.5, 228.0, 18.5], [0.0, 15.5, 0.0, 18.5]], "data11": [[0.0, 25.5, 0.0], [3247.0, 25.5, 249.0], [3247.0, 26.5, 249.0], [0.0, 26.5, 0.0]], "data03": [[0.0, 16.5, 0.0], [375.0, 16.5, 230.0], [375.0, 17.5, 230.0], [0.0, 17.5, 0.0]], "data15": [[0.0, 29.5, 0.0], [2601.0, 29.5, 272.0], [2601.0, 30.5, 272.0], [0.0, 30.5, 0.0]]}});
            })
         });
}
 
