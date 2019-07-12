

 

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
    
       mpld3.draw_figure("id13", {"axes": [{"axesbg": "#FFFFFF", "axes": [{"nticks": 6, "visible": true, "tickvalues": null, "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 19, "visible": true, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "grid": {"gridOn": false}, "scale": "linear", "fontsize": 10.0, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "position": "left"}], "sharex": [], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "yscale": "linear", "ydomain": [14.55, 35.45], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139766992443488", "alpha": 1, "v_baseline": "hanging", "text": "Minuty"}], "id": "el7886139766992396072", "xdomain": [9368.5, 6.0], "collections": [], "ylim": [14.55, 35.45], "zoomable": true, "markers": [], "sharey": ["el7886139766992593864"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [9368.5, 6.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992218712", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992218208", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992219496", "alpha": 0.7, "data": "data03", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992245032", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 2, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992245928", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992246824", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992247720", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992248616", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992274152", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992275048", "alpha": 0.7, "data": "data09", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992164904", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992165800", "alpha": 0.7, "data": "data11", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992596832", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992105712", "alpha": 0.7, "data": "data13", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992546000", "alpha": 0.7, "data": "data14", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992485120", "alpha": 0.7, "data": "data15", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992467672", "alpha": 0.7, "data": "data16", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992819032", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992799672", "alpha": 0.7, "data": "data17", "dasharray": "none"}], "images": []}, {"axesbg": "#FFFFFF", "axes": [{"nticks": 5, "visible": true, "tickvalues": [220, 236, 252, 268, 285], "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 19, "visible": true, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "grid": {"gridOn": false}, "scale": "linear", "fontsize": null, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "position": "right"}], "sharex": [], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "yscale": "linear", "ydomain": [14.55, 35.45], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139766992596272", "alpha": 1, "v_baseline": "hanging", "text": "Instat index"}], "id": "el7886139766992593864", "xdomain": [210.0, 295.0], "collections": [], "ylim": [14.55, 35.45], "zoomable": true, "markers": [], "sharey": ["el7886139766992396072"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [210.0, 295.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992769208", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992218432", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992752824", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 4, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992727512", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 5, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993279576", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992276000", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992331104", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992332000", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 6, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992332896", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992333792", "alpha": 0.7, "data": "data09", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992334688", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 7, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992356128", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992357024", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992357920", "alpha": 0.7, "data": "data13", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992358816", "alpha": 0.7, "data": "data14", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766991860064", "alpha": 0.7, "data": "data15", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766991860960", "alpha": 0.7, "data": "data16", "dasharray": "none"}, {"yindex": 8, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766991861856", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766991862752", "alpha": 0.7, "data": "data17", "dasharray": "none"}], "images": []}], "width": 640.0, "id": "el7886139766993375304", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"type": "clickinfo", "alls": [["Adam Marciniak", [3168, 255]], ["Damian Zbozie\u0144", [3091, 257]], ["Micha\u0142 Janota", [2917, 271]], ["Maciej Jankowski", [2755, 255]], ["Frederik Helstrup", [2664, 256]], ["Micha\u0142 Nalepa", [2461, 255]], ["Adam Deja", [2244, 280]], ["Luka Zarandia", [2187, 285]], ["Luka Maric", [2143, 241]], ["Aleksandar Kolev", [1500, 239]], ["Christian Maghoma", [1438, 277]], ["Nabil Aankour", [1428, 236]], ["Marko Vejinovic", [1327, 289]], ["Adam Danch", [1311, 251]], ["Rafa\u0142 Siemaszko", [972, 220]], ["Tadeusz Socha", [573, 254]], ["Andriy Bohdanov", [497, 241]], ["Mateusz M\u0142y\u0144ski", [454, 244]], ["Goran Cvijanovic", [444, 222]], ["Maksymilian Banaszewski", [428, 241]], ["Dawid So\u0142decki", [406, 249]], ["Marcus Oliveira", [363, 249]], ["Michael Olczyk", [337, 233]], ["Karol Danielak", [88, 201]], ["Robert Sulewski", [73, 207]], ["Adrian Klimczak", [28, 183]], ["Jan \u0141o\u015b", [25, 234]], ["Mateusz Stepien", [6, 0]]], "wiek": {"32": [190445, 18958], "34": [157815], "16": [1082247], "17": [984168], "18": [942356], "21": [289448, 202541, 318228], "22": [164288], "23": [248251, 244752], "24": [167343], "25": [16797, 87985, 162067], "26": [77053], "27": [80732], "28": [1720, 23404, 4273, 3201], "29": [23181], "30": [23214, 17006], "31": [26078, 23220, 31507]}, "players": {"164288": ["Luka Zarandia", 2187, 285], "3201": ["Andriy Bohdanov", 497, 241], "1082247": ["Mateusz Stepien", 6, 0], "23181": ["Damian Zbozie\u0144", 3091, 257], "18958": ["Goran Cvijanovic", 444, 222], "190445": ["Rafa\u0142 Siemaszko", 972, 220], "244752": ["Maksymilian Banaszewski", 428, 241], "162067": ["Nabil Aankour", 1428, 236], "942356": ["Jan \u0141o\u015b", 25, 234], "23214": ["Adam Marciniak", 3168, 255], "984168": ["Mateusz M\u0142y\u0144ski", 454, 244], "80732": ["Karol Danielak", 88, 201], "16797": ["Frederik Helstrup", 2664, 256], "26078": ["Luka Maric", 2143, 241], "87985": ["Adam Deja", 2244, 280], "289448": ["Christian Maghoma", 1438, 277], "23404": ["Maciej Jankowski", 2755, 255], "202541": ["Michael Olczyk", 337, 233], "17006": ["Tadeusz Socha", 573, 254], "167343": ["Robert Sulewski", 73, 207], "4273": ["Marko Vejinovic", 1327, 289], "31507": ["Dawid So\u0142decki", 406, 249], "23220": ["Adam Danch", 1311, 251], "157815": ["Marcus Oliveira", 363, 249], "1720": ["Micha\u0142 Janota", 2917, 271], "318228": ["Adrian Klimczak", 28, 183], "248251": ["Micha\u0142 Nalepa", 2461, 255], "77053": ["Aleksandar Kolev", 1500, 239]}, "vals": {"32": [1416, 220], "34": [363, 249], "16": [6, 0], "17": [454, 244], "18": [25, 0], "21": [1803, 267], "22": [2187, 285], "23": [2889, 253], "24": [73, 0], "25": [6336, 260], "26": [1500, 239], "27": [88, 0], "28": [7496, 266], "29": [3091, 257], "30": [3741, 254], "31": [3860, 245]}, "low": 16, "ids": ["el7886139766992218712", "el7886139766992218208", "el7886139766992219496", "el7886139766992245032", "el7886139766992245928", "el7886139766992246824", "el7886139766992247720", "el7886139766992248616", "el7886139766992274152", "el7886139766992275048", "el7886139766992164904", "el7886139766992165800", "el7886139766992596832", "el7886139766992105712", "el7886139766992546000", "el7886139766992485120", "el7886139766992467672", "el7886139766992819032", "el7886139766992799672"]}, {"type": "clickinfo", "alls": [["Adam Marciniak", [3168, 255]], ["Damian Zbozie\u0144", [3091, 257]], ["Micha\u0142 Janota", [2917, 271]], ["Maciej Jankowski", [2755, 255]], ["Frederik Helstrup", [2664, 256]], ["Micha\u0142 Nalepa", [2461, 255]], ["Adam Deja", [2244, 280]], ["Luka Zarandia", [2187, 285]], ["Luka Maric", [2143, 241]], ["Aleksandar Kolev", [1500, 239]], ["Christian Maghoma", [1438, 277]], ["Nabil Aankour", [1428, 236]], ["Marko Vejinovic", [1327, 289]], ["Adam Danch", [1311, 251]], ["Rafa\u0142 Siemaszko", [972, 220]], ["Tadeusz Socha", [573, 254]], ["Andriy Bohdanov", [497, 241]], ["Mateusz M\u0142y\u0144ski", [454, 244]], ["Goran Cvijanovic", [444, 222]], ["Maksymilian Banaszewski", [428, 241]], ["Dawid So\u0142decki", [406, 249]], ["Marcus Oliveira", [363, 249]], ["Michael Olczyk", [337, 233]], ["Karol Danielak", [88, 201]], ["Robert Sulewski", [73, 207]], ["Adrian Klimczak", [28, 183]], ["Jan \u0141o\u015b", [25, 234]], ["Mateusz Stepien", [6, 0]]], "wiek": {"32": [190445, 18958], "34": [157815], "16": [1082247], "17": [984168], "18": [942356], "21": [289448, 202541, 318228], "22": [164288], "23": [248251, 244752], "24": [167343], "25": [16797, 87985, 162067], "26": [77053], "27": [80732], "28": [1720, 23404, 4273, 3201], "29": [23181], "30": [23214, 17006], "31": [26078, 23220, 31507]}, "players": {"164288": ["Luka Zarandia", 2187, 285], "3201": ["Andriy Bohdanov", 497, 241], "1082247": ["Mateusz Stepien", 6, 0], "23181": ["Damian Zbozie\u0144", 3091, 257], "18958": ["Goran Cvijanovic", 444, 222], "190445": ["Rafa\u0142 Siemaszko", 972, 220], "244752": ["Maksymilian Banaszewski", 428, 241], "162067": ["Nabil Aankour", 1428, 236], "942356": ["Jan \u0141o\u015b", 25, 234], "23214": ["Adam Marciniak", 3168, 255], "984168": ["Mateusz M\u0142y\u0144ski", 454, 244], "80732": ["Karol Danielak", 88, 201], "16797": ["Frederik Helstrup", 2664, 256], "26078": ["Luka Maric", 2143, 241], "87985": ["Adam Deja", 2244, 280], "289448": ["Christian Maghoma", 1438, 277], "23404": ["Maciej Jankowski", 2755, 255], "202541": ["Michael Olczyk", 337, 233], "17006": ["Tadeusz Socha", 573, 254], "167343": ["Robert Sulewski", 73, 207], "4273": ["Marko Vejinovic", 1327, 289], "31507": ["Dawid So\u0142decki", 406, 249], "23220": ["Adam Danch", 1311, 251], "157815": ["Marcus Oliveira", 363, 249], "1720": ["Micha\u0142 Janota", 2917, 271], "318228": ["Adrian Klimczak", 28, 183], "248251": ["Micha\u0142 Nalepa", 2461, 255], "77053": ["Aleksandar Kolev", 1500, 239]}, "vals": {"32": [1416, 220], "34": [363, 249], "16": [6, 0], "17": [454, 244], "18": [25, 0], "21": [1803, 267], "22": [2187, 285], "23": [2889, 253], "24": [73, 0], "25": [6336, 260], "26": [1500, 239], "27": [88, 0], "28": [7496, 266], "29": [3091, 257], "30": [3741, 254], "31": [3860, 245]}, "low": 16, "ids": ["el7886139766992769208", "el7886139766992218432", "el7886139766992752824", "el7886139766992727512", "el7886139766993279576", "el7886139766992276000", "el7886139766992331104", "el7886139766992332000", "el7886139766992332896", "el7886139766992333792", "el7886139766992334688", "el7886139766992356128", "el7886139766992357024", "el7886139766992357920", "el7886139766992358816", "el7886139766991860064", "el7886139766991860960", "el7886139766991861856", "el7886139766991862752"]}], "height": 480.0, "data": {"data12": [[0.0, 27.5, 0.0], [7496.0, 27.5, 266.0], [7496.0, 28.5, 266.0], [0.0, 28.5, 0.0]], "data16": [[0.0, 31.5, 0.0], [1416.0, 31.5, 220.0], [1416.0, 32.5, 220.0], [0.0, 32.5, 0.0]], "data07": [[0.0, 22.5, 0.0], [2889.0, 22.5, 253.0], [2889.0, 23.5, 253.0], [0.0, 23.5, 0.0]], "data06": [[0.0, 21.5, 0.0], [2187.0, 21.5, 285.0], [2187.0, 22.5, 285.0], [0.0, 22.5, 0.0]], "data09": [[0.0, 24.5, 0.0], [6336.0, 24.5, 260.0], [6336.0, 25.5, 260.0], [0.0, 25.5, 0.0]], "data04": [[0.0, 18.5, 19.5, 32.5], [0.0, 18.5, 19.5, 32.5], [0.0, 19.5, 20.5, 33.5], [0.0, 19.5, 20.5, 33.5]], "data10": [[0.0, 25.5, 0.0], [1500.0, 25.5, 239.0], [1500.0, 26.5, 239.0], [0.0, 26.5, 0.0]], "data14": [[0.0, 29.5, 0.0], [3741.0, 29.5, 254.0], [3741.0, 30.5, 254.0], [0.0, 30.5, 0.0]], "data08": [[0.0, 23.5], [73.0, 23.5], [73.0, 24.5], [0.0, 24.5]], "data02": [[0.0, 16.5, 0.0], [454.0, 16.5, 244.0], [454.0, 17.5, 244.0], [0.0, 17.5, 0.0]], "data05": [[0.0, 20.5, 0.0], [1803.0, 20.5, 267.0], [1803.0, 21.5, 267.0], [0.0, 21.5, 0.0]], "data17": [[0.0, 33.5, 0.0], [363.0, 33.5, 249.0], [363.0, 34.5, 249.0], [0.0, 34.5, 0.0]], "data13": [[0.0, 28.5, 0.0], [3091.0, 28.5, 257.0], [3091.0, 29.5, 257.0], [0.0, 29.5, 0.0]], "data01": [[0.0, 15.5, 0.0, 17.5, 18.5, 19.5, 23.5, 26.5, 32.5], [6.0, 15.5, 0.0, 17.5, 18.5, 19.5, 23.5, 26.5, 32.5], [6.0, 16.5, 0.0, 18.5, 19.5, 20.5, 24.5, 27.5, 33.5], [0.0, 16.5, 0.0, 18.5, 19.5, 20.5, 24.5, 27.5, 33.5]], "data11": [[0.0, 26.5], [88.0, 26.5], [88.0, 27.5], [0.0, 27.5]], "data03": [[0.0, 17.5], [25.0, 17.5], [25.0, 18.5], [0.0, 18.5]], "data15": [[0.0, 30.5, 0.0], [3860.0, 30.5, 245.0], [3860.0, 31.5, 245.0], [0.0, 31.5, 0.0]]}});
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
    
         mpld3.draw_figure("id13", {"axes": [{"axesbg": "#FFFFFF", "axes": [{"nticks": 6, "visible": true, "tickvalues": null, "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 19, "visible": true, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "grid": {"gridOn": false}, "scale": "linear", "fontsize": 10.0, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "position": "left"}], "sharex": [], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "yscale": "linear", "ydomain": [14.55, 35.45], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139766992443488", "alpha": 1, "v_baseline": "hanging", "text": "Minuty"}], "id": "el7886139766992396072", "xdomain": [9368.5, 6.0], "collections": [], "ylim": [14.55, 35.45], "zoomable": true, "markers": [], "sharey": ["el7886139766992593864"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [9368.5, 6.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992218712", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992218208", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992219496", "alpha": 0.7, "data": "data03", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992245032", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 2, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992245928", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992246824", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992247720", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992248616", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992274152", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992275048", "alpha": 0.7, "data": "data09", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992164904", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992165800", "alpha": 0.7, "data": "data11", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992596832", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992105712", "alpha": 0.7, "data": "data13", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992546000", "alpha": 0.7, "data": "data14", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992485120", "alpha": 0.7, "data": "data15", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992467672", "alpha": 0.7, "data": "data16", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992819032", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992799672", "alpha": 0.7, "data": "data17", "dasharray": "none"}], "images": []}, {"axesbg": "#FFFFFF", "axes": [{"nticks": 5, "visible": true, "tickvalues": [220, 236, 252, 268, 285], "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 19, "visible": true, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "grid": {"gridOn": false}, "scale": "linear", "fontsize": null, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "position": "right"}], "sharex": [], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "yscale": "linear", "ydomain": [14.55, 35.45], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139766992596272", "alpha": 1, "v_baseline": "hanging", "text": "Instat index"}], "id": "el7886139766992593864", "xdomain": [210.0, 295.0], "collections": [], "ylim": [14.55, 35.45], "zoomable": true, "markers": [], "sharey": ["el7886139766992396072"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [210.0, 295.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992769208", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992218432", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992752824", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 4, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992727512", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 5, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993279576", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992276000", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992331104", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992332000", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 6, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992332896", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992333792", "alpha": 0.7, "data": "data09", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992334688", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 7, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992356128", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992357024", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992357920", "alpha": 0.7, "data": "data13", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992358816", "alpha": 0.7, "data": "data14", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766991860064", "alpha": 0.7, "data": "data15", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766991860960", "alpha": 0.7, "data": "data16", "dasharray": "none"}, {"yindex": 8, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766991861856", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766991862752", "alpha": 0.7, "data": "data17", "dasharray": "none"}], "images": []}], "width": 640.0, "id": "el7886139766993375304", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"type": "clickinfo", "alls": [["Adam Marciniak", [3168, 255]], ["Damian Zbozie\u0144", [3091, 257]], ["Micha\u0142 Janota", [2917, 271]], ["Maciej Jankowski", [2755, 255]], ["Frederik Helstrup", [2664, 256]], ["Micha\u0142 Nalepa", [2461, 255]], ["Adam Deja", [2244, 280]], ["Luka Zarandia", [2187, 285]], ["Luka Maric", [2143, 241]], ["Aleksandar Kolev", [1500, 239]], ["Christian Maghoma", [1438, 277]], ["Nabil Aankour", [1428, 236]], ["Marko Vejinovic", [1327, 289]], ["Adam Danch", [1311, 251]], ["Rafa\u0142 Siemaszko", [972, 220]], ["Tadeusz Socha", [573, 254]], ["Andriy Bohdanov", [497, 241]], ["Mateusz M\u0142y\u0144ski", [454, 244]], ["Goran Cvijanovic", [444, 222]], ["Maksymilian Banaszewski", [428, 241]], ["Dawid So\u0142decki", [406, 249]], ["Marcus Oliveira", [363, 249]], ["Michael Olczyk", [337, 233]], ["Karol Danielak", [88, 201]], ["Robert Sulewski", [73, 207]], ["Adrian Klimczak", [28, 183]], ["Jan \u0141o\u015b", [25, 234]], ["Mateusz Stepien", [6, 0]]], "wiek": {"32": [190445, 18958], "34": [157815], "16": [1082247], "17": [984168], "18": [942356], "21": [289448, 202541, 318228], "22": [164288], "23": [248251, 244752], "24": [167343], "25": [16797, 87985, 162067], "26": [77053], "27": [80732], "28": [1720, 23404, 4273, 3201], "29": [23181], "30": [23214, 17006], "31": [26078, 23220, 31507]}, "players": {"164288": ["Luka Zarandia", 2187, 285], "3201": ["Andriy Bohdanov", 497, 241], "1082247": ["Mateusz Stepien", 6, 0], "23181": ["Damian Zbozie\u0144", 3091, 257], "18958": ["Goran Cvijanovic", 444, 222], "190445": ["Rafa\u0142 Siemaszko", 972, 220], "244752": ["Maksymilian Banaszewski", 428, 241], "162067": ["Nabil Aankour", 1428, 236], "942356": ["Jan \u0141o\u015b", 25, 234], "23214": ["Adam Marciniak", 3168, 255], "984168": ["Mateusz M\u0142y\u0144ski", 454, 244], "80732": ["Karol Danielak", 88, 201], "16797": ["Frederik Helstrup", 2664, 256], "26078": ["Luka Maric", 2143, 241], "87985": ["Adam Deja", 2244, 280], "289448": ["Christian Maghoma", 1438, 277], "23404": ["Maciej Jankowski", 2755, 255], "202541": ["Michael Olczyk", 337, 233], "17006": ["Tadeusz Socha", 573, 254], "167343": ["Robert Sulewski", 73, 207], "4273": ["Marko Vejinovic", 1327, 289], "31507": ["Dawid So\u0142decki", 406, 249], "23220": ["Adam Danch", 1311, 251], "157815": ["Marcus Oliveira", 363, 249], "1720": ["Micha\u0142 Janota", 2917, 271], "318228": ["Adrian Klimczak", 28, 183], "248251": ["Micha\u0142 Nalepa", 2461, 255], "77053": ["Aleksandar Kolev", 1500, 239]}, "vals": {"32": [1416, 220], "34": [363, 249], "16": [6, 0], "17": [454, 244], "18": [25, 0], "21": [1803, 267], "22": [2187, 285], "23": [2889, 253], "24": [73, 0], "25": [6336, 260], "26": [1500, 239], "27": [88, 0], "28": [7496, 266], "29": [3091, 257], "30": [3741, 254], "31": [3860, 245]}, "low": 16, "ids": ["el7886139766992218712", "el7886139766992218208", "el7886139766992219496", "el7886139766992245032", "el7886139766992245928", "el7886139766992246824", "el7886139766992247720", "el7886139766992248616", "el7886139766992274152", "el7886139766992275048", "el7886139766992164904", "el7886139766992165800", "el7886139766992596832", "el7886139766992105712", "el7886139766992546000", "el7886139766992485120", "el7886139766992467672", "el7886139766992819032", "el7886139766992799672"]}, {"type": "clickinfo", "alls": [["Adam Marciniak", [3168, 255]], ["Damian Zbozie\u0144", [3091, 257]], ["Micha\u0142 Janota", [2917, 271]], ["Maciej Jankowski", [2755, 255]], ["Frederik Helstrup", [2664, 256]], ["Micha\u0142 Nalepa", [2461, 255]], ["Adam Deja", [2244, 280]], ["Luka Zarandia", [2187, 285]], ["Luka Maric", [2143, 241]], ["Aleksandar Kolev", [1500, 239]], ["Christian Maghoma", [1438, 277]], ["Nabil Aankour", [1428, 236]], ["Marko Vejinovic", [1327, 289]], ["Adam Danch", [1311, 251]], ["Rafa\u0142 Siemaszko", [972, 220]], ["Tadeusz Socha", [573, 254]], ["Andriy Bohdanov", [497, 241]], ["Mateusz M\u0142y\u0144ski", [454, 244]], ["Goran Cvijanovic", [444, 222]], ["Maksymilian Banaszewski", [428, 241]], ["Dawid So\u0142decki", [406, 249]], ["Marcus Oliveira", [363, 249]], ["Michael Olczyk", [337, 233]], ["Karol Danielak", [88, 201]], ["Robert Sulewski", [73, 207]], ["Adrian Klimczak", [28, 183]], ["Jan \u0141o\u015b", [25, 234]], ["Mateusz Stepien", [6, 0]]], "wiek": {"32": [190445, 18958], "34": [157815], "16": [1082247], "17": [984168], "18": [942356], "21": [289448, 202541, 318228], "22": [164288], "23": [248251, 244752], "24": [167343], "25": [16797, 87985, 162067], "26": [77053], "27": [80732], "28": [1720, 23404, 4273, 3201], "29": [23181], "30": [23214, 17006], "31": [26078, 23220, 31507]}, "players": {"164288": ["Luka Zarandia", 2187, 285], "3201": ["Andriy Bohdanov", 497, 241], "1082247": ["Mateusz Stepien", 6, 0], "23181": ["Damian Zbozie\u0144", 3091, 257], "18958": ["Goran Cvijanovic", 444, 222], "190445": ["Rafa\u0142 Siemaszko", 972, 220], "244752": ["Maksymilian Banaszewski", 428, 241], "162067": ["Nabil Aankour", 1428, 236], "942356": ["Jan \u0141o\u015b", 25, 234], "23214": ["Adam Marciniak", 3168, 255], "984168": ["Mateusz M\u0142y\u0144ski", 454, 244], "80732": ["Karol Danielak", 88, 201], "16797": ["Frederik Helstrup", 2664, 256], "26078": ["Luka Maric", 2143, 241], "87985": ["Adam Deja", 2244, 280], "289448": ["Christian Maghoma", 1438, 277], "23404": ["Maciej Jankowski", 2755, 255], "202541": ["Michael Olczyk", 337, 233], "17006": ["Tadeusz Socha", 573, 254], "167343": ["Robert Sulewski", 73, 207], "4273": ["Marko Vejinovic", 1327, 289], "31507": ["Dawid So\u0142decki", 406, 249], "23220": ["Adam Danch", 1311, 251], "157815": ["Marcus Oliveira", 363, 249], "1720": ["Micha\u0142 Janota", 2917, 271], "318228": ["Adrian Klimczak", 28, 183], "248251": ["Micha\u0142 Nalepa", 2461, 255], "77053": ["Aleksandar Kolev", 1500, 239]}, "vals": {"32": [1416, 220], "34": [363, 249], "16": [6, 0], "17": [454, 244], "18": [25, 0], "21": [1803, 267], "22": [2187, 285], "23": [2889, 253], "24": [73, 0], "25": [6336, 260], "26": [1500, 239], "27": [88, 0], "28": [7496, 266], "29": [3091, 257], "30": [3741, 254], "31": [3860, 245]}, "low": 16, "ids": ["el7886139766992769208", "el7886139766992218432", "el7886139766992752824", "el7886139766992727512", "el7886139766993279576", "el7886139766992276000", "el7886139766992331104", "el7886139766992332000", "el7886139766992332896", "el7886139766992333792", "el7886139766992334688", "el7886139766992356128", "el7886139766992357024", "el7886139766992357920", "el7886139766992358816", "el7886139766991860064", "el7886139766991860960", "el7886139766991861856", "el7886139766991862752"]}], "height": 480.0, "data": {"data12": [[0.0, 27.5, 0.0], [7496.0, 27.5, 266.0], [7496.0, 28.5, 266.0], [0.0, 28.5, 0.0]], "data16": [[0.0, 31.5, 0.0], [1416.0, 31.5, 220.0], [1416.0, 32.5, 220.0], [0.0, 32.5, 0.0]], "data07": [[0.0, 22.5, 0.0], [2889.0, 22.5, 253.0], [2889.0, 23.5, 253.0], [0.0, 23.5, 0.0]], "data06": [[0.0, 21.5, 0.0], [2187.0, 21.5, 285.0], [2187.0, 22.5, 285.0], [0.0, 22.5, 0.0]], "data09": [[0.0, 24.5, 0.0], [6336.0, 24.5, 260.0], [6336.0, 25.5, 260.0], [0.0, 25.5, 0.0]], "data04": [[0.0, 18.5, 19.5, 32.5], [0.0, 18.5, 19.5, 32.5], [0.0, 19.5, 20.5, 33.5], [0.0, 19.5, 20.5, 33.5]], "data10": [[0.0, 25.5, 0.0], [1500.0, 25.5, 239.0], [1500.0, 26.5, 239.0], [0.0, 26.5, 0.0]], "data14": [[0.0, 29.5, 0.0], [3741.0, 29.5, 254.0], [3741.0, 30.5, 254.0], [0.0, 30.5, 0.0]], "data08": [[0.0, 23.5], [73.0, 23.5], [73.0, 24.5], [0.0, 24.5]], "data02": [[0.0, 16.5, 0.0], [454.0, 16.5, 244.0], [454.0, 17.5, 244.0], [0.0, 17.5, 0.0]], "data05": [[0.0, 20.5, 0.0], [1803.0, 20.5, 267.0], [1803.0, 21.5, 267.0], [0.0, 21.5, 0.0]], "data17": [[0.0, 33.5, 0.0], [363.0, 33.5, 249.0], [363.0, 34.5, 249.0], [0.0, 34.5, 0.0]], "data13": [[0.0, 28.5, 0.0], [3091.0, 28.5, 257.0], [3091.0, 29.5, 257.0], [0.0, 29.5, 0.0]], "data01": [[0.0, 15.5, 0.0, 17.5, 18.5, 19.5, 23.5, 26.5, 32.5], [6.0, 15.5, 0.0, 17.5, 18.5, 19.5, 23.5, 26.5, 32.5], [6.0, 16.5, 0.0, 18.5, 19.5, 20.5, 24.5, 27.5, 33.5], [0.0, 16.5, 0.0, 18.5, 19.5, 20.5, 24.5, 27.5, 33.5]], "data11": [[0.0, 26.5], [88.0, 26.5], [88.0, 27.5], [0.0, 27.5]], "data03": [[0.0, 17.5], [25.0, 17.5], [25.0, 18.5], [0.0, 18.5]], "data15": [[0.0, 30.5, 0.0], [3860.0, 30.5, 245.0], [3860.0, 31.5, 245.0], [0.0, 31.5, 0.0]]}});
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
    
                 mpld3.draw_figure("id13", {"axes": [{"axesbg": "#FFFFFF", "axes": [{"nticks": 6, "visible": true, "tickvalues": null, "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 19, "visible": true, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "grid": {"gridOn": false}, "scale": "linear", "fontsize": 10.0, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "position": "left"}], "sharex": [], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "yscale": "linear", "ydomain": [14.55, 35.45], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139766992443488", "alpha": 1, "v_baseline": "hanging", "text": "Minuty"}], "id": "el7886139766992396072", "xdomain": [9368.5, 6.0], "collections": [], "ylim": [14.55, 35.45], "zoomable": true, "markers": [], "sharey": ["el7886139766992593864"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [9368.5, 6.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992218712", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992218208", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992219496", "alpha": 0.7, "data": "data03", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992245032", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 2, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992245928", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992246824", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992247720", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992248616", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992274152", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992275048", "alpha": 0.7, "data": "data09", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992164904", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992165800", "alpha": 0.7, "data": "data11", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992596832", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992105712", "alpha": 0.7, "data": "data13", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992546000", "alpha": 0.7, "data": "data14", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992485120", "alpha": 0.7, "data": "data15", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992467672", "alpha": 0.7, "data": "data16", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992819032", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992799672", "alpha": 0.7, "data": "data17", "dasharray": "none"}], "images": []}, {"axesbg": "#FFFFFF", "axes": [{"nticks": 5, "visible": true, "tickvalues": [220, 236, 252, 268, 285], "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 19, "visible": true, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "grid": {"gridOn": false}, "scale": "linear", "fontsize": null, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "position": "right"}], "sharex": [], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "yscale": "linear", "ydomain": [14.55, 35.45], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139766992596272", "alpha": 1, "v_baseline": "hanging", "text": "Instat index"}], "id": "el7886139766992593864", "xdomain": [210.0, 295.0], "collections": [], "ylim": [14.55, 35.45], "zoomable": true, "markers": [], "sharey": ["el7886139766992396072"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [210.0, 295.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992769208", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992218432", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992752824", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 4, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992727512", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 5, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993279576", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992276000", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992331104", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992332000", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 6, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992332896", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992333792", "alpha": 0.7, "data": "data09", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992334688", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 7, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992356128", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992357024", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992357920", "alpha": 0.7, "data": "data13", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992358816", "alpha": 0.7, "data": "data14", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766991860064", "alpha": 0.7, "data": "data15", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766991860960", "alpha": 0.7, "data": "data16", "dasharray": "none"}, {"yindex": 8, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766991861856", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766991862752", "alpha": 0.7, "data": "data17", "dasharray": "none"}], "images": []}], "width": 640.0, "id": "el7886139766993375304", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"type": "clickinfo", "alls": [["Adam Marciniak", [3168, 255]], ["Damian Zbozie\u0144", [3091, 257]], ["Micha\u0142 Janota", [2917, 271]], ["Maciej Jankowski", [2755, 255]], ["Frederik Helstrup", [2664, 256]], ["Micha\u0142 Nalepa", [2461, 255]], ["Adam Deja", [2244, 280]], ["Luka Zarandia", [2187, 285]], ["Luka Maric", [2143, 241]], ["Aleksandar Kolev", [1500, 239]], ["Christian Maghoma", [1438, 277]], ["Nabil Aankour", [1428, 236]], ["Marko Vejinovic", [1327, 289]], ["Adam Danch", [1311, 251]], ["Rafa\u0142 Siemaszko", [972, 220]], ["Tadeusz Socha", [573, 254]], ["Andriy Bohdanov", [497, 241]], ["Mateusz M\u0142y\u0144ski", [454, 244]], ["Goran Cvijanovic", [444, 222]], ["Maksymilian Banaszewski", [428, 241]], ["Dawid So\u0142decki", [406, 249]], ["Marcus Oliveira", [363, 249]], ["Michael Olczyk", [337, 233]], ["Karol Danielak", [88, 201]], ["Robert Sulewski", [73, 207]], ["Adrian Klimczak", [28, 183]], ["Jan \u0141o\u015b", [25, 234]], ["Mateusz Stepien", [6, 0]]], "wiek": {"32": [190445, 18958], "34": [157815], "16": [1082247], "17": [984168], "18": [942356], "21": [289448, 202541, 318228], "22": [164288], "23": [248251, 244752], "24": [167343], "25": [16797, 87985, 162067], "26": [77053], "27": [80732], "28": [1720, 23404, 4273, 3201], "29": [23181], "30": [23214, 17006], "31": [26078, 23220, 31507]}, "players": {"164288": ["Luka Zarandia", 2187, 285], "3201": ["Andriy Bohdanov", 497, 241], "1082247": ["Mateusz Stepien", 6, 0], "23181": ["Damian Zbozie\u0144", 3091, 257], "18958": ["Goran Cvijanovic", 444, 222], "190445": ["Rafa\u0142 Siemaszko", 972, 220], "244752": ["Maksymilian Banaszewski", 428, 241], "162067": ["Nabil Aankour", 1428, 236], "942356": ["Jan \u0141o\u015b", 25, 234], "23214": ["Adam Marciniak", 3168, 255], "984168": ["Mateusz M\u0142y\u0144ski", 454, 244], "80732": ["Karol Danielak", 88, 201], "16797": ["Frederik Helstrup", 2664, 256], "26078": ["Luka Maric", 2143, 241], "87985": ["Adam Deja", 2244, 280], "289448": ["Christian Maghoma", 1438, 277], "23404": ["Maciej Jankowski", 2755, 255], "202541": ["Michael Olczyk", 337, 233], "17006": ["Tadeusz Socha", 573, 254], "167343": ["Robert Sulewski", 73, 207], "4273": ["Marko Vejinovic", 1327, 289], "31507": ["Dawid So\u0142decki", 406, 249], "23220": ["Adam Danch", 1311, 251], "157815": ["Marcus Oliveira", 363, 249], "1720": ["Micha\u0142 Janota", 2917, 271], "318228": ["Adrian Klimczak", 28, 183], "248251": ["Micha\u0142 Nalepa", 2461, 255], "77053": ["Aleksandar Kolev", 1500, 239]}, "vals": {"32": [1416, 220], "34": [363, 249], "16": [6, 0], "17": [454, 244], "18": [25, 0], "21": [1803, 267], "22": [2187, 285], "23": [2889, 253], "24": [73, 0], "25": [6336, 260], "26": [1500, 239], "27": [88, 0], "28": [7496, 266], "29": [3091, 257], "30": [3741, 254], "31": [3860, 245]}, "low": 16, "ids": ["el7886139766992218712", "el7886139766992218208", "el7886139766992219496", "el7886139766992245032", "el7886139766992245928", "el7886139766992246824", "el7886139766992247720", "el7886139766992248616", "el7886139766992274152", "el7886139766992275048", "el7886139766992164904", "el7886139766992165800", "el7886139766992596832", "el7886139766992105712", "el7886139766992546000", "el7886139766992485120", "el7886139766992467672", "el7886139766992819032", "el7886139766992799672"]}, {"type": "clickinfo", "alls": [["Adam Marciniak", [3168, 255]], ["Damian Zbozie\u0144", [3091, 257]], ["Micha\u0142 Janota", [2917, 271]], ["Maciej Jankowski", [2755, 255]], ["Frederik Helstrup", [2664, 256]], ["Micha\u0142 Nalepa", [2461, 255]], ["Adam Deja", [2244, 280]], ["Luka Zarandia", [2187, 285]], ["Luka Maric", [2143, 241]], ["Aleksandar Kolev", [1500, 239]], ["Christian Maghoma", [1438, 277]], ["Nabil Aankour", [1428, 236]], ["Marko Vejinovic", [1327, 289]], ["Adam Danch", [1311, 251]], ["Rafa\u0142 Siemaszko", [972, 220]], ["Tadeusz Socha", [573, 254]], ["Andriy Bohdanov", [497, 241]], ["Mateusz M\u0142y\u0144ski", [454, 244]], ["Goran Cvijanovic", [444, 222]], ["Maksymilian Banaszewski", [428, 241]], ["Dawid So\u0142decki", [406, 249]], ["Marcus Oliveira", [363, 249]], ["Michael Olczyk", [337, 233]], ["Karol Danielak", [88, 201]], ["Robert Sulewski", [73, 207]], ["Adrian Klimczak", [28, 183]], ["Jan \u0141o\u015b", [25, 234]], ["Mateusz Stepien", [6, 0]]], "wiek": {"32": [190445, 18958], "34": [157815], "16": [1082247], "17": [984168], "18": [942356], "21": [289448, 202541, 318228], "22": [164288], "23": [248251, 244752], "24": [167343], "25": [16797, 87985, 162067], "26": [77053], "27": [80732], "28": [1720, 23404, 4273, 3201], "29": [23181], "30": [23214, 17006], "31": [26078, 23220, 31507]}, "players": {"164288": ["Luka Zarandia", 2187, 285], "3201": ["Andriy Bohdanov", 497, 241], "1082247": ["Mateusz Stepien", 6, 0], "23181": ["Damian Zbozie\u0144", 3091, 257], "18958": ["Goran Cvijanovic", 444, 222], "190445": ["Rafa\u0142 Siemaszko", 972, 220], "244752": ["Maksymilian Banaszewski", 428, 241], "162067": ["Nabil Aankour", 1428, 236], "942356": ["Jan \u0141o\u015b", 25, 234], "23214": ["Adam Marciniak", 3168, 255], "984168": ["Mateusz M\u0142y\u0144ski", 454, 244], "80732": ["Karol Danielak", 88, 201], "16797": ["Frederik Helstrup", 2664, 256], "26078": ["Luka Maric", 2143, 241], "87985": ["Adam Deja", 2244, 280], "289448": ["Christian Maghoma", 1438, 277], "23404": ["Maciej Jankowski", 2755, 255], "202541": ["Michael Olczyk", 337, 233], "17006": ["Tadeusz Socha", 573, 254], "167343": ["Robert Sulewski", 73, 207], "4273": ["Marko Vejinovic", 1327, 289], "31507": ["Dawid So\u0142decki", 406, 249], "23220": ["Adam Danch", 1311, 251], "157815": ["Marcus Oliveira", 363, 249], "1720": ["Micha\u0142 Janota", 2917, 271], "318228": ["Adrian Klimczak", 28, 183], "248251": ["Micha\u0142 Nalepa", 2461, 255], "77053": ["Aleksandar Kolev", 1500, 239]}, "vals": {"32": [1416, 220], "34": [363, 249], "16": [6, 0], "17": [454, 244], "18": [25, 0], "21": [1803, 267], "22": [2187, 285], "23": [2889, 253], "24": [73, 0], "25": [6336, 260], "26": [1500, 239], "27": [88, 0], "28": [7496, 266], "29": [3091, 257], "30": [3741, 254], "31": [3860, 245]}, "low": 16, "ids": ["el7886139766992769208", "el7886139766992218432", "el7886139766992752824", "el7886139766992727512", "el7886139766993279576", "el7886139766992276000", "el7886139766992331104", "el7886139766992332000", "el7886139766992332896", "el7886139766992333792", "el7886139766992334688", "el7886139766992356128", "el7886139766992357024", "el7886139766992357920", "el7886139766992358816", "el7886139766991860064", "el7886139766991860960", "el7886139766991861856", "el7886139766991862752"]}], "height": 480.0, "data": {"data12": [[0.0, 27.5, 0.0], [7496.0, 27.5, 266.0], [7496.0, 28.5, 266.0], [0.0, 28.5, 0.0]], "data16": [[0.0, 31.5, 0.0], [1416.0, 31.5, 220.0], [1416.0, 32.5, 220.0], [0.0, 32.5, 0.0]], "data07": [[0.0, 22.5, 0.0], [2889.0, 22.5, 253.0], [2889.0, 23.5, 253.0], [0.0, 23.5, 0.0]], "data06": [[0.0, 21.5, 0.0], [2187.0, 21.5, 285.0], [2187.0, 22.5, 285.0], [0.0, 22.5, 0.0]], "data09": [[0.0, 24.5, 0.0], [6336.0, 24.5, 260.0], [6336.0, 25.5, 260.0], [0.0, 25.5, 0.0]], "data04": [[0.0, 18.5, 19.5, 32.5], [0.0, 18.5, 19.5, 32.5], [0.0, 19.5, 20.5, 33.5], [0.0, 19.5, 20.5, 33.5]], "data10": [[0.0, 25.5, 0.0], [1500.0, 25.5, 239.0], [1500.0, 26.5, 239.0], [0.0, 26.5, 0.0]], "data14": [[0.0, 29.5, 0.0], [3741.0, 29.5, 254.0], [3741.0, 30.5, 254.0], [0.0, 30.5, 0.0]], "data08": [[0.0, 23.5], [73.0, 23.5], [73.0, 24.5], [0.0, 24.5]], "data02": [[0.0, 16.5, 0.0], [454.0, 16.5, 244.0], [454.0, 17.5, 244.0], [0.0, 17.5, 0.0]], "data05": [[0.0, 20.5, 0.0], [1803.0, 20.5, 267.0], [1803.0, 21.5, 267.0], [0.0, 21.5, 0.0]], "data17": [[0.0, 33.5, 0.0], [363.0, 33.5, 249.0], [363.0, 34.5, 249.0], [0.0, 34.5, 0.0]], "data13": [[0.0, 28.5, 0.0], [3091.0, 28.5, 257.0], [3091.0, 29.5, 257.0], [0.0, 29.5, 0.0]], "data01": [[0.0, 15.5, 0.0, 17.5, 18.5, 19.5, 23.5, 26.5, 32.5], [6.0, 15.5, 0.0, 17.5, 18.5, 19.5, 23.5, 26.5, 32.5], [6.0, 16.5, 0.0, 18.5, 19.5, 20.5, 24.5, 27.5, 33.5], [0.0, 16.5, 0.0, 18.5, 19.5, 20.5, 24.5, 27.5, 33.5]], "data11": [[0.0, 26.5], [88.0, 26.5], [88.0, 27.5], [0.0, 27.5]], "data03": [[0.0, 17.5], [25.0, 17.5], [25.0, 18.5], [0.0, 18.5]], "data15": [[0.0, 30.5, 0.0], [3860.0, 30.5, 245.0], [3860.0, 31.5, 245.0], [0.0, 31.5, 0.0]]}});
            })
         });
}
 
