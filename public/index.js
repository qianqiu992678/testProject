var basicDemo = (function() {
	//Adding event listeners
	function _addEventListeners() {
		$('#resizeCheckBox').on('change', function(event) {
			if(event.args.checked) {
				$('#window').jqxWindow('resizable', true);
			} else {
				$('#window').jqxWindow('resizable', false);
			}
		});
		$('#dragCheckBox').on('change', function(event) {
			if(event.args.checked) {
				$('#window').jqxWindow('draggable', true);
			} else {
				$('#window').jqxWindow('draggable', false);
			}
		});
		$('#showWindowButton').click(function() {
			$('#window').jqxWindow('open');
		});
		$('#hideWindowButton').click(function() {
			$('#window').jqxWindow('close');
		});
		$('jqx-menu-popup [item-label=文件（F）]').click(function(e){
			
		})
	};
	//Creating all page elements which are jqxWidgets
	function _createElements() {
		$('#showWindowButton').jqxButton({
			width: '70px'
		});
		$('#hideWindowButton').jqxButton({
			width: '65px'
		});
		$('#resizeCheckBox').jqxCheckBox({
			width: '185px',
			checked: true
		});
		$('#dragCheckBox').jqxCheckBox({
			width: '185px',
			checked: true
		});
	};
	//Creating the demo window
	function _createWindow(res) {
		var jqxWidget = $('#jqxWidget');
		var offset = jqxWidget.offset();
		var obj1 = {
			position: {
				x: offset.left,
				y: offset.top
			},
			showCollapseButton: true,
			maxHeight: '100%',
			maxWidth: '100%',
			minHeight: 200,
			minWidth: 200,
			height: '95%',
			width: '95%',
			zIndex: 5,
			initContent: function() {
				$("#jqxMenu").jqxMenu({
					width: '100%',
					height: '30px',
					animationShowDuration: 0,
					animationHideDuration: 0,
					animationShowDelay: 0,
					animationHideDelay: 0,
					disabled: false,
					enableHover: true,
					autoOpen: false,
					showTopLevelArrows: true,
					keyboardNavigation: true,
					source: res
				});
				$("#jqxMenu").css('visibility', 'visible');

			}
		}
		//生成大窗口
		$('#window').jqxWindow(obj1);

		//生成小窗口
		$('#window2').jqxWindow({
			position: {
				x: parseInt($('#window').css('width')) - 200,
				y: 75
			},
			showCollapseButton: true,
			maxHeight: '100%',
			maxWidth: '100%',
			minHeight: 100,
			minWidth: 200,
			height: 500,
			width: 200,
			zIndex: 1000,
			initContent: function() {}
		});
	};
	return {
		config: {
			dragArea: null
		},
		init: function() {
			var source1;
			//Creating all jqxWindgets except the window
			_createElements();
			
			//Attaching event listeners
			$.ajax({
				type:"get",
				url:"../data/menuList.json",
				async:true,
				success:function(data){
					console.log('success:',data)
					source1=data;
					//添加窗口
					_createWindow(source1);
				},
				error:function(error){
					console.log('error:',data)
				}
			});
			_addEventListeners();
		}
	};
}());
$(document).ready(function() {
	//Initializing the demo
	basicDemo.init();
});