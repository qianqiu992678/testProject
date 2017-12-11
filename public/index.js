var basicDemo = (function () {
	//Adding event listeners
	function _addEventListeners() {
	    $('#resizeCheckBox').on('change', function (event) {
	        if (event.args.checked) {
	            $('#window').jqxWindow('resizable', true);
	        } else {
	            $('#window').jqxWindow('resizable', false);
	        }
	    });
	    $('#dragCheckBox').on('change', function (event) {
	        if (event.args.checked) {
	            $('#window').jqxWindow('draggable', true);
	        } else {
	            $('#window').jqxWindow('draggable', false);
	        }
	    });
	    $('#showWindowButton').click(function () {
	        $('#window').jqxWindow('open');
	    });
	    $('#hideWindowButton').click(function () {
	        $('#window').jqxWindow('close');
	    });
	};
	//Creating all page elements which are jqxWidgets
	function _createElements() {
	    $('#showWindowButton').jqxButton({ width: '70px' });
	    $('#hideWindowButton').jqxButton({ width: '65px' });
	    $('#resizeCheckBox').jqxCheckBox({ width: '185px', checked: true });
	    $('#dragCheckBox').jqxCheckBox({ width: '185px', checked: true });
	};
	
	var source = [
		{
	       	label: "文件（F）",
	       	items: [
		       	{
		           label: "新建",
		           items:[{
		           		label:'项目（P）'
		           },{
		           		label:'文件（F）'
		           }]
		       	},
		       	{
		           label: "打开（O）",
		           items:[{
		           		label:'项目/解决方案（P）'
		           },{
		           		label:'文件夹（D）'
		           },{
		           		label:'在源代码管理中打开（O）'
		           },{
		           		label:'文件（F）'
		           }]
		       	},
		       	{label: "起始页（E）"},
		       	{label: "关闭（C）"},
		       	{label: "关闭解决方案（T）"},
		       	{label: "保存选定项（S）"},
		       	{label: "将选定项另存为（A）"},
		       	{label: "全部保存（L）"},
		       	{
		           label: "源代码管理（R）",
		           items:[{
		           		label:'查找（F）'
		           },{
		           		label:'高级（N）'
		           }]
		       	},
		       	{label: "页面设置（U）"},
		       	{label: "打印（P）"},
		       	{label: "账户设置（I）"},
		       	{
		           label: "最近使用的项目和解决方案（J）",
		           items:[{
		           		label:'没有最近的项目或解决方案'
		           }]
		       	},
		       	{label: "退出（X）"}
	       	]
	    },{
	       label: "编辑（E）",
	       items: [{
	           label: "Calendar"
	       }, {
	           label: "Contacts"
	       }]
	    },{
	       label: "视图（V）",
	       items: [{
	           label: "Calendar"
	       }, {
	           label: "Contacts"
	       }]
	    },{
	       label: "团队（M）",
	       items: [{
	           label: "Calendar"
	       }, {
	           label: "Contacts"
	       }]
	    },{
	       label: "工具（T）",
	       items: [{
	           label: "Calendar"
	       }, {
	           label: "Contacts"
	       }]
	    },{
	       label: "窗口（W）",
	       items: [{
	           label: "Calendar"
	       }, {
	           label: "Contacts"
	       }]
	    },{
	       label: "帮助（H）",
	       items: [{
	           label: "Calendar"
	       }, {
	           label: "Contacts"
	       }]
	    },
	];
	//Creating the demo window
	function _createWindow() {
	    var jqxWidget = $('#jqxWidget');
	    var offset = jqxWidget.offset();
	    console.log('offset:',offset);
	    var obj1={
	        position: { x: offset.left , y: offset.top } ,
	        showCollapseButton: true, 
	        maxHeight: '100%', 
	        maxWidth: '100%', 
	        minHeight: 200, 
	        minWidth: 200, 
	        height: '95%', 
	        width: '95%',
	        zIndex:5,
	        initContent: function () {
	            $("#jqxMenu").jqxMenu({ width: '100%', height: '30px',
	            	animationShowDuration: 0, animationHideDuration: 0, animationShowDelay: 0,disabled: false,
	            	enableHover: true,autoOpen: false,
	            	showTopLevelArrows: true,theme: 'energyblue',
      				keyboardNavigation: true,source:source
	            });
	            $("#jqxMenu").css('visibility', 'visible');
	            
	        }
	    }
	    //生成大窗口
	    $('#window').jqxWindow(obj1);
	    
	    //生成小窗口
	    $('#window2').jqxWindow({
	        position: { x: parseInt($('#window').css('width'))-200 , 
	        	y: 75 } ,
	        showCollapseButton: true, 
	        maxHeight: '100%', 
	        maxWidth: '100%', 
	        minHeight: 100, 
	        minWidth: 200, 
	        height: 500, 
	        width: 200,
	        zIndex:1000,
	        initContent: function () {
	             
	        }
	    });
	    
	};
	return {
	    config: {
	        dragArea: null
	    },
	    init: function () {
	        //Creating all jqxWindgets except the window
	        _createElements();
	        //Attaching event listeners
	        _addEventListeners();
	        //Adding jqxWindow
            _createWindow();
    	}
    };
} ());
$(document).ready(function () {  
    //Initializing the demo
    basicDemo.init();
});