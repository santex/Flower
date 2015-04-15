
<!DOCTYPE html>
<html>
<head>
    <meta content="text/html; charset=UTF-8" http-equiv="content-type">
    <meta content="" name="description">
    <meta content="" name="keywords">

    <title>HTML5 UI Demo: Data Grid</title>
    <link href="images/HTML5_Lift_Badge2.png" type="image/png" rel="icon">

  
      <link href="/classpath/blueprint/screen.css" type="text/css" rel="stylesheet" media="screen, projection">
      <link href="/classpath/blueprint/print.css" type="text/css" rel="stylesheet" media="print">
    
  <!--[if IE]><link rel="stylesheet" href="/classpath/blueprint/ie.css" type="text/css" media="screen, projection"><![endif]-->
    
  <link href="/classpath/blueprint/plugins/fancy-type/screen.css" type="text/css" rel="stylesheet" media="screen, projection">
  <script type="text/javascript" src="/classpath/jquery.js" id="jquery"></script>
  <script type="text/javascript" src="/classpath/json.js" id="json"></script>

  <style type="text/css">
    /* <![CDATA[ */
    .widget {
      border:1px solid #ccc;
      background:#f5f5f5;
      padding:5px;
      margin:10px 0 0 0;
      font-size:8pt;
    }

    .sidebar ul {
      margin: 10px 0 0 0;
      padding: 5px;
      border-bottom:1px solid #ccc;
    }


    .sidebar ul li {
      margin:0;
      padding:0;
      list-style:none;
      border:1px solid #ccc;
      border-bottom:none;
    }

    .sidebar ul li ul li {
      margin:0;
      padding:0;
      border-style: none;
      list-style-type: square;
      list-style-position: inside;
      padding-left: 10px;

    }

    .sidebar ul li ul li a {
      display: inline;
    }

    .sidebar ul li ul {
      margin: 0;
      border-bottom: none;
    }

    .sidebar ul li ul li span {
      display:inline;
      padding:0px;
    }


    .sidebar ul li a {
      display:block;
      padding:3px;
      text-indent:10px;
      text-decoration:none;
    }

    .sidebar ul li span {
      display:block;
      padding:3px;
      text-indent:10px;
      text-decoration:none;
    }


    .sidebar ul li a:hover {
      background-color: #eee;
    }

.lift_error {
  color: red;
}

.lift_warning {
  color: yellow;
}

.lift_notice {
}

th {
    background: none repeat scroll 0 0 #FFFFFF;
    font-weight: bold;
}

  /* ]]> */
  </style>

	
</head>
<body>
  <div class="container">
    <div class="column span-20">
        <table>
        <tbody><tr>
          <th><img alt="Simulation HTML5 demo" src="/images/machine_response3.gif"></th>
          <th><h2>HTML5 UI For Simulation</h2></th>
        </tr>
        </tbody></table>
    </div>
    <div style="float:right" class="column span-1 last"><img src="/images/ajax-loader.gif" style="display:none" id="ajax-loader" alt="">
    </div>
    <hr>
    <div class="column span-6 colborder sidebar">
      <ul><li> <a href="/index">Home</a></li><li> <a href="/uicomponents">UI Components</a><ul><li> <a href="/dialogs">Dialogs and Tabs</a></li><li> <span>Data Grid</span></li><li> <a href="/menulayout">Menu and Layout</a></li><li> <a href="/widgits">Widgets</a></li><li> <a href="/console">Console</a></li><li> <a href="/tree">Tree</a></li><li> <a href="/maps">Maps</a></li><li> <a href="/trendsoverview">Trends</a></li><li> <a href="/flowsheetoverview">Flowsheets</a></li><li> <a href="/bubbledynamics">UI Client CPU test</a></li><li> <a href="/lazy">Server Lazy Loading</a></li><li> <a href="/parallel">Server Parallel Snippets</a></li><li> <a href="/longtime">Server Long Running Tasks</a></li><li> <a href="/latencies">Server Client Latencies</a></li></ul></li><li> <a href="/serverside">Web Framework</a></li></ul>
      <div id="F412161456681JPNJQM_outer" style="display: inline"><div style="display: inline" id="F412161456681JPNJQM"><div class="widget" style="text-align: center">Current Time: <span id="clock_time">Sun Jul 14 18:18:12 UTC 2013</span></div><script type="text/javascript">
// <![CDATA[
/* JSON Func comet $$ F4121614566840DQJDR */function F4121614566840DQJDR(obj) {liftAjax.lift_ajaxHandler('F4121614566840DQJDR='+ encodeURIComponent(JSON.stringify(obj)), null,null);}
// ]]>
</script></div><script type="text/javascript">
// <![CDATA[
var destroy_F412161456681JPNJQM = function() {}
// ]]>
</script></div>

      <div class="widget">
        <span style="text-align: center"><b>Group Chat</b></span><br>
	<div id="F412161456685VGX23R_outer" style="display: inline"><div style="display: inline" id="F412161456685VGX23R"><form id="F412161456720XYWKAN" action="javascript://" onsubmit="liftAjax.lift_ajaxHandler(jQuery('#'+&quot;F412161456720XYWKAN&quot;).serialize(), null, null, &quot;javascript&quot;);return false;"><div>What is your username?</div><input value="" type="text" name="F412161456701CVGY2Y"><input value="Enter" type="submit"></form><script type="text/javascript">
// <![CDATA[
/* JSON Func comet $$ F4121614566971AQEPA */function F4121614566971AQEPA(obj) {liftAjax.lift_ajaxHandler('F4121614566971AQEPA='+ encodeURIComponent(JSON.stringify(obj)), null,null);}
// ]]>
</script></div><script type="text/javascript">
// <![CDATA[
var destroy_F412161456685VGX23R = function() {}
// ]]>
</script></div>
      </div>
      <hr class="space">
      <div>
	<div id="lift__noticesContainer__"></div>
        <hr class="space">
      </div>
      <div>
         <hr class="space">
      </div>
      <div>
        <a target="_blank" href="http://www.w3.org">
        <img title="HTML5 Powered with Connectivity / Realtime, CSS3 / Styling, Device Access, and Performance & Integration" alt="HTML5 Powered with Connectivity / Realtime, CSS3 / Styling, Device Access, and Performance & Integration" height="64" width="229" src="/images/html5-badge-h-connectivity-css3-device-performance.png">
        </a>
    </div>
    </div>

    <div class="column span-17 last">
      
  <h2>Dynamic Simulation UI - Data Grid Components</h2>

     
        <link rel="Stylesheet" href="/classpath/jquery-ui189/css/ui-lightness/jquery-ui-1.8.9.custom.css" type="text/css">
        <link charset="utf-8" media="screen" type="text/css" href="/classpath/slickGrid/slick.grid.css" rel="stylesheet">
        <script src="/classpath/jquery-ui189/js/jquery-1.4.4.min.js" type="text/javascript"></script>
        <script src="/classpath/jquery-ui189/js/jquery-ui-1.8.9.custom.min.js" type="text/javascript"></script>
        <script src="/classpath/slickGrid/jquery.event.drag-2.0.min.js" language="JavaScript"></script>
        <script src="/classpath/slickGrid/jquery.event.drop-2.0.min.js" language="JavaScript"></script>
        <script src="/classpath/slickGrid/slick.grid.js" language="JavaScript"></script>
       
        <script src="/classpath/slickGrid/slick.editors.js" language="JavaScript"></script>
		<script src="/classpath/slickGrid/slick.model.js" language="JavaScript"></script>
		<script src="/classpath/slickGrid/slick.pager.js" language="JavaScript"></script>
		<script src="/classpath/slickGrid/slick.columnpicker.js" language="JavaScript"></script>

    

    

    <style>
		.cell-title {
			font-weight: bold;
		}

		.cell-effort-driven {
			text-align: center;
		}

        .cell-selection {
            border-right-color: silver;
            border-right-style: solid;
            background: #f5f5f5;
            color: gray;
            text-align: right;
            font-size: 10px;
        }

        .slick-row.selected .cell-selection {
            background-color: transparent; /* show default selected row background */
        }

        .slick-header-columns {
            background: url('/images/header-columns-bg.gif') repeat-x center bottom;
            border-bottom: 1px solid silver;
        }

        .slick-header-column {
            background: url('/images/header-columns-bg.gif') repeat-x center bottom;
            border-right: 1px solid silver;
        }

        .slick-header-column:hover, .slick-header-column-active {
            background: white url('/images/header-columns-over-bg.gif') repeat-x center bottom;
        }

        .slick-headerrow {
            background: #fafafa;
        }

        .slick-headerrow-column {
            background: #fafafa;
            border-bottom: 0;
            height: 100%;
        }

        .slick-row.ui-state-active {
            background: #F5F7D7;
        }

        .slick-columnpicker {
            border: 1px solid #718BB7;
            background: #f0f0f0;
            padding: 6px;
            -moz-box-shadow: 2px 2px 2px silver;
            -webkit-box-shadow: 2px 2px 2px silver;
            min-width: 100px;
            cursor: default;
        }

        .slick-columnpicker li {
            list-style: none;
            margin: 0;
            padding: 0;
            background: none;
        }

        .slick-columnpicker input {
            margin: 4px;
        }

        .slick-columnpicker li a {
            display: block;
            padding: 4px;
            font-weight: bold;
        }

        .slick-columnpicker li a:hover {
            background: white;
        }

                
        #myGrid {
            background: white;
            outline: 0;
            border: 1px solid gray;
        }

        .grid-header {
            border: 1px solid gray;
            border-bottom: 0;
            border-top: 0;
            background: url('../images/header-bg.gif') repeat-x center top;
            color: black;
            height: 24px;
            line-height: 24px;
        }

        .grid-header label {
            display: inline-block;
            font-weight: bold;
            margin: auto auto auto 6px;
        }

        .grid-header .ui-icon {
            margin: 4px 4px auto 6px;
            background-color: transparent;
            border-color: transparent;
        }

        .grid-header .ui-icon.ui-state-hover {
            background-color: white;
        }

        .grid-header #txtSearch {
            margin: 0 4px 0 4px;
            padding: 2px 2px;
            -moz-border-radius: 2px;
            -webkit-border-radius: 2px;
            border: 1px solid silver;
        }

        .options-panel {
            -moz-border-radius: 6px;
            -webkit-border-radius: 6px;
            border: 1px solid silver;
            background: #f0f0f0;
            padding: 4px;
            margin-bottom: 20px;
        }



        /* Individual cell styles */
        .slick-cell.task-name {
            font-weight: bold;
            text-align: right;
        }


        .slick-cell.task-percent {
            text-align: right;
        }


        .slick-cell.cell-move-handle {
            font-weight: bold;
            text-align: right;
            border-right: solid gray;

            background: #efefef;
            cursor: move;
        }

        .cell-move-handle:hover {
            background: #b6b9bd;
        }

        .slick-row.selected .cell-move-handle {
            background: #D5DC8D;
        }

        .slick-row .cell-actions {
            text-align: left;
        }

        .slick-row.complete {
            background-color: #DFD;
            color: #555;
        }

        .percent-complete-bar {
            display: inline-block;
            height: 6px;
            -moz-border-radius: 3px;
            -webkit-border-radius: 3px;
        }


        /* TextCellEditor, DateCellEditor */
        input.editor-text {
            width: 100%;
            height: 100%;
            border: 0;
            margin: 0;
            background: transparent;
            outline: 0;
            padding: 0;

        }

        .ui-datepicker-trigger {
            margin-top: 2px;
            padding: 0;
            vertical-align: top;
        }

        /* PercentCompleteCellEditor */
        input.editor-percentcomplete {
            width: 100%;
            height: 100%;
            border: 0;
            margin: 0;
            background: transparent;
            outline: 0;
            padding: 0;

            float: left;
        }

        .editor-percentcomplete-picker {
            position: relative;
            display: inline-block;
            width: 16px;
            height: 100%;
            background: url("../images/pencil.gif") no-repeat center center;
            overflow: visible;
            z-index: 1000;
            float: right;
        }

        .editor-percentcomplete-helper {
            border: 0 solid gray;
            position: absolute;
            top: -2px;
            left: -9px;
            background: url("../images/editor-helper-bg.gif") no-repeat top left;
            padding-left: 9px;

            width: 120px;
            height: 140px;
            display: none;
            overflow: visible;
        }


        .editor-percentcomplete-wrapper {
            background:beige;
            padding: 20px 8px;

            width:100%;
            height:98px;
            border:1px solid gray;
            border-left:0;
        }

        .editor-percentcomplete-buttons {
            float: right;
        }

        .editor-percentcomplete-buttons button {
            width: 80px;
        }


        .editor-percentcomplete-slider {
            float: left;
        }

         .editor-percentcomplete-picker:hover .editor-percentcomplete-helper {
            display: block;
        }

        .editor-percentcomplete-helper:hover {
            display: block;
        }



        /* YesNoSelectCellEditor */
        select.editor-yesno {
            width: 100%;
            margin: 0;
            vertical-align: middle;
        }

        /* YesNoCheckboxCellEditor */
        input.editor-checkbox {
            margin: 0;
            height: 100%;
            padding: 0;
            border: 0;
        }

        .slick-pager
        {
            width: 100%;
            height: 26px;
            border: 1px solid gray;
            border-top: 0;
            background: url('../images/header-columns-bg.gif') repeat-x center bottom;
            vertical-align: middle;
        }

        .slick-pager .slick-pager-status
        {
            display: inline-block;
            padding: 6px;
        }

        .slick-pager .ui-icon-container
        {
            display: inline-block;
            margin: 2px;
            border-color: gray;
        }

        .slick-pager .slick-pager-nav
        {
            display: inline-block;
            float: left;
            padding: 2px;
        }

        .slick-pager .slick-pager-settings
        {
            display: block;
            float: right;
            padding: 2px;
        }

        .slick-pager .slick-pager-settings *
        {
            vertical-align: middle;
        }

        .slick-pager .slick-pager-settings a
        {
            padding: 2px;
            text-decoration: underline;
            cursor: pointer;
        }


	</style>

    <h3>Simple Table with column sort and global search</h3>

     

    
    <div>
        <div style="width:100%" class="grid-header">
            <label>XRef List</label>
            <span onclick="toggleFilterRow()" title="Toggle search panel" class="ui-icon ui-icon-search" style="float:right"></span>
        </div>
        <div style="width:100%;height:500px;" id="myGrid"></div>
        <div style="width:100%;height:20px;" id="pager"></div>
    </div>

    <br><br>
    <table>
    <tbody><tr>
    <th>
    <div style="width:320px" class="options-panel">
        <b>Search:</b>
        <hr>
        <div style="padding:6px;">
            <label style="width:200px;float:left">Show points with Value % at least: </label>
            <div style="padding:2px;">
                <div id="pcSlider" style="width:100px;display:inline-block;"></div>
            </div>
            <br>
            <label style="width:200px;float:left">And name including:</label>
            <input style="width:100px;" id="txtSearch" type="text">
            <br>
            </div>
     </div>
    </th>
    <th>
     <div style="width:320px" class="options-panel">
         <b>Selection</b>
            <hr>
        <div style="padding:6px;">
            <button id="btnSelectRows">Select first 10 rows</button>
        </div>
     </div>
    </th>
        </tr>
        <tr>
    <th>
     <div style="width:320px" class="options-panel">
          <b>Dynamic Updates and Highlighting</b>
            <hr>
        <div style="padding:6px;">
            <button onclick="simulateRealTimeUpdates()">Start Updates</button>
            <button onclick="findCurrentServer()">Find the engine</button>
        </div>
     </div>
     </th>
    </tr>
    </tbody></table>


    <h2>Demonstrates:</h2>

    <ul>
        <li>a filtered Model (DataView) as a data source instead of a simple array</li>
        <li>grid reacting to model events (onRowCountChanged, onRowsChanged)</li>
        <li>
            <b>FAST</b> DataView recalculation and <b>real-time</b> grid updating in response to data changes.<br>
            The grid holds <b>100'000</b> rows, yet you are able to sort, filter, scroll, navigate and edit as if it had 50 rows.
        </li>
        <li>adding new rows, bidirectional sorting</li>
        <li>column options:  cannotTriggerInsert</li>
        <li>events: onCellChange, onAddNewRow, onKeyDown, onSelectedRowsChanged, onSort</li>
        <li><font color="red">NOTE:</font>  all filters are immediately applied to new/edited rows</li>
        <li>Handling row selection against model changes.</li>
        <li>Paging.</li>
        <li>inline filter panel</li>
    </ul>


    <div style="display:none;background:#dddddd;padding:3px;color:black;" id="inlineFilterPanel">
        Show points with name including <input id="txtSearch2" type="text">
        and % Value at least   <div id="pcSlider2" style="width:100px;display:inline-block;"></div>
    </div>


    <script>
    var dataView;
    var grid;
    var data = [];
    var selectedRowIds = [];
    var currentServer;

    function makeid( size )
    {
        var text = "";
        var possible = "abcdefghijklmnopqrstuvwxyz";  //ABCDEFGHIJKLMNOPQRSTUVWXYZ
        for( var i=0; i < size; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }

    var columns = [
        {id:"sel", name:"#", field:"num", behavior:"select", cssClass:"cell-selection", width:40, cannotTriggerInsert:true, resizable:true, unselectable:true },
        {id:"title", name:"Engine", field:"title", width:100, minWidth:100, cssClass:"cell-title", editor:TextCellEditor, validator:requiredFieldValidator, sortable:true},
        {id:"duration", name:"Point Name", field:"duration", width:100, resizable:false, editor:TextCellEditor, sortable:true},
        {id:"%", name:"Value % FSV", field:"percentComplete", width:100, resizable:false, formatter:GraphicalPercentCompleteCellFormatter, editor:PercentCompleteCellEditor, sortable:true},
        {id:"start", name:"Added", field:"start", minWidth:60, editor:DateCellEditor, sortable:true},
        {id:"finish", name:"Last Update", field:"finish", minWidth:60, editor:DateCellEditor, sortable:true},
        {id:"effort-driven", name:"Enabled", width:50, minWidth:20, maxWidth:80, cssClass:"cell-effort-driven", field:"effortDriven", formatter:BoolCellFormatter, editor:YesNoCheckboxCellEditor, cannotTriggerInsert:true, sortable:true}
    ];

    var options = {
        editable: true,
        enableAddRow: true,
        enableCellNavigation: true,
        asyncEditorLoading: true,
        forceFitColumns: true,
        secondaryHeaderRowHeight: 35
    };

    var sortcol = "title";
    var sortdir = 1;
    var percentCompleteThreshold = 0;
    var searchString = "";

    function requiredFieldValidator(value) {
        if (value == null || value == undefined || !value.length)
            return {valid:false, msg:"This is a required field"};
        else
            return {valid:true, msg:null};
    }

    function myFilter(item) {
        if (item["percentComplete"] < percentCompleteThreshold)
            return false;

        if (searchString != "" && item["duration"].indexOf(searchString) == -1)
            return false;

        return true;
    }

    function percentCompleteSort(a,b) {
        return a["percentComplete"] - b["percentComplete"];
    }

    function comparer(a,b) {
        var x = a[sortcol], y = b[sortcol];
        return (x == y ? 0 : (x > y ? 1 : -1));
    }

    function addItem(newItem,columnDef) {
        var item = {"num": data.length, "id": "new_" + (Math.round(Math.random()*10000)), "title":"New Engine", "duration":"aaa.aaa", "percentComplete":0, "start":"01/01/2009", "finish":"01/01/2009", "effortDriven":false};
        $.extend(item,newItem);
        dataView.addItem(item);
    }


    function toggleFilterRow() {
        if ($(grid.getSecondaryHeaderRow()).is(":visible"))
            grid.hideSecondaryHeaderRow();
        else
            grid.showSecondaryHeaderRow();
    }


    $(".grid-header .ui-icon")
        .addClass("ui-state-default ui-corner-all")
        .mouseover(function(e) {
            $(e.target).addClass("ui-state-hover")
        })
        .mouseout(function(e) {
            $(e.target).removeClass("ui-state-hover")
        });

    $(function()
    {
        // prepare the data
        for (var i=0; i<100000; i++) {
            var d = (data[i] = {});

            d["id"] = "id_" + i;
            d["num"] = i;
            d["title"] = "Engine_" + Math.round(i/10);
            d["duration"] = makeid(5) + '.' + makeid(3);
            d["percentComplete"] = Math.round(Math.random() * 100);
            d["start"] = "01/01/2009";
            d["finish"] = "01/05/2009";
            d["effortDriven"] = (i % 5 == 0);
        }


        dataView = new Slick.Data.DataView();
        grid = new Slick.Grid($("#myGrid"), dataView.rows, columns, options);
        var pager = new Slick.Controls.Pager(dataView, grid, $("#pager"));
        var columnpicker = new Slick.Controls.ColumnPicker(columns, grid, options);

        currentServer = Math.round(Math.random()*(data.length-1));

        // move the filter panel defined in a hidden div into an inline secondary grid header row
        $("#inlineFilterPanel")
            .appendTo(grid.getSecondaryHeaderRow())
            .show();

        grid.onCellChange = function(row,col,item) {
            dataView.updateItem(item.id,item);
        };

        grid.onAddNewRow = addItem;

        grid.onKeyDown = function(e) {
            // select all rows on ctrl-a
            if (e.which != 65 || !e.ctrlKey)
                return false;

            var rows = [];
            selectedRowIds = [];

            for (var i = 0; i < dataView.rows.length; i++) {
                rows.push(i);
                selectedRowIds.push(dataView.rows[i].id);
            }

            grid.setSelectedRows(rows);

            return true;
        };

        grid.onSelectedRowsChanged = function() {
            selectedRowIds = [];
            var rows = grid.getSelectedRows();
            for (var i = 0, l = rows.length; i < l; i++) {
                var item = dataView.rows[rows[i]];
                if (item) selectedRowIds.push(item.id);
            }
        };

        grid.onSort = function(sortCol, sortAsc) {
            sortdir = sortAsc ? 1 : -1;
            sortcol = sortCol.field;

            // using native sort with comparer
            // preferred method but can be very slow in IE with huge datasets
            //dataView.sort(comparer,sortAsc);

            // using temporary Object.prototype.toString override
            // more limited and does lexicographic sort only by default, but can be much faster

            var percentCompleteValueFn = function() {
                var val = this["percentComplete"];
                if (val < 10)
                    return "00" + val;
                else if (val < 100)
                    return "0" + val;
                else
                    return val;
            };

            // use numeric sort of % and lexicographic for everything else
            dataView.fastSort((sortcol=="percentComplete")?percentCompleteValueFn:sortcol,sortAsc);
        };

        // wire up model events to drive the grid
        dataView.onRowCountChanged.subscribe(function(args) {
            grid.updateRowCount();
            grid.render();
        });

        dataView.onRowsChanged.subscribe(function(rows) {
            grid.removeRows(rows);
            grid.render();

            if (selectedRowIds.length > 0)
            {
                // since how the original data maps onto rows has changed,
                // the selected rows in the grid need to be updated
                var selRows = [];
                for (var i = 0; i < selectedRowIds.length; i++)
                {
                    var idx = dataView.getRowById(selectedRowIds[i]);
                    if (idx != undefined)
                        selRows.push(idx);
                }

                grid.setSelectedRows(selRows);
            }
        });

        dataView.onPagingInfoChanged.subscribe(function(pagingInfo) {
            var isLastPage = pagingInfo.pageSize*(pagingInfo.pageNum+1)-1 >= pagingInfo.totalRows;
            var enableAddRow = isLastPage || pagingInfo.pageSize==0;
            var options = grid.getOptions();

            if (options.enableAddRow != enableAddRow)
                grid.setOptions({enableAddRow:enableAddRow});
        });



        var h_runfilters = null;

        // wire up the slider to apply the filter to the model
        $("#pcSlider,#pcSlider2").slider({
            "range":	"min",
            "slide":	function(event,ui) {
                Slick.GlobalEditorLock.cancelCurrentEdit();

                if (percentCompleteThreshold != ui.value)
                {
                    window.clearTimeout(h_runfilters);
                    h_runfilters = window.setTimeout(dataView.refresh, 10);
                    percentCompleteThreshold = ui.value;
                }
            }
        });


        // wire up the search textbox to apply the filter to the model
        $("#txtSearch,#txtSearch2").keyup(function(e) {
            Slick.GlobalEditorLock.cancelCurrentEdit();

            // clear on Esc
            if (e.which == 27)
                this.value = "";

            searchString = this.value;
            dataView.refresh();
        });

        $("#btnSelectRows").click(function() {
            if (!Slick.GlobalEditorLock.commitCurrentEdit()) { return; }

            var rows = [];
            selectedRowIds = [];

            for (var i=0; i<10 && i<dataView.rows.length; i++) {
                rows.push(i);
                selectedRowIds.push(dataView.rows[i].id);
            }

            grid.setSelectedRows(rows);
        });

        // initialize the model after all the events have been hooked up
        dataView.beginUpdate();
        dataView.setItems(data);
        dataView.setFilter(myFilter);
        dataView.endUpdate();

        $("#gridContainer").resizable();
    })

    function simulateRealTimeUpdates() {
        var changes = {};
        var numberOfUpdates = Math.round(Math.random()*(data.length/10));
        for (var i=0; i<numberOfUpdates; i++) {
            var num = Math.round(Math.random()*(data.length-1));
            var cpu = Math.round(Math.random()*(columns.length-1));
            var delta = Math.round(Math.random()*50)-25;

            var val = data[num]["percentComplete"] + delta;
            val = Math.max(0,val);
            val = Math.min(100,val);

            data[num]["percentComplete"] = val;

            if (!changes[num])
                changes[num] = {};

            changes[num]["duration"] = true;

            grid.removeRow(num);
        }

        grid.setHighlightedCells(changes);
        grid.render();

        setTimeout(simulateRealTimeUpdates, 500);
    }

    function findCurrentServer() {
        grid.scrollRowIntoView(currentServer);
        grid.flashCell(currentServer,grid.getColumnIndex("title"),100);
    }
    
    </script>



  <p>
    
      <span><i>Generated at <b> Sun Jul 14 18:18:17 UTC 2013</b></i></span>
    
  </p>
  


    </div>

    <hr>
    <div style="text-align: center" class="column span-23 last">
      <h4 class="alt"> Server: Linux :
          2.6.39.1-linode34 :
          i386  CPU Count :
          4
        <br>
        CPU Loading 0.11% 0.11% 0.11% 0.11% 
        <br>
        Lift version 2.3 built on Tue Apr 05 20:24:00 UTC 2011.
        <br>
        Stats: Total Memory: 16,056,320

        Free Memory: 9,533,104
        Open Sessions: 1
	<br>
        Updated At: Wed Apr 24 16:08:41 UTC 2013
        Started At: Wed Apr 24 16:08:41 UTC 2013
      </h4>
    </div>
  </div>


<script type="text/javascript" src="/ajax_request/liftAjax.js"></script>
<script type="text/javascript" src="/comet_request/1js8or71gt70c/cometAjax.js"></script>

	
<script type="text/javascript">
// <![CDATA[
var lift_toWatch = {"F412161456681JPNJQM": 412161456683 , "F412161456685VGX23R": 412161456700};
// ]]>
</script>
<script type="text/javascript">
// <![CDATA[
jQuery(document).ready(function() {liftAjax.lift_successRegisterGC();});
var lift_page = "F4121614567192U2NHG";
// ]]>
</script></body>
</html>  
  
