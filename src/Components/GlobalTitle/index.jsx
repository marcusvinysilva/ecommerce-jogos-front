function Window1() {
	var win = Ti.UI.createWindow({
		fullscreen: false,
		backgroundColor: '#ccc'
	});
	
	var btn = Ti.UI.createButton({
		title: 'open next',
		top: 50,
		width: Ti.UI.SIZE,
		height: Ti.UI.SIZE
	});
 	win.add(btn);
	var num = 0;
	btn.addEventListener('click', function(){
		num++;
		var w = Window2(num);
		w.open();
	});

	return win;
}

function Window2(num) {
	
	var win = Ti.UI.createWindow({
		fullscreen: false,
		backgroundColor: '#ccc',
		title: 'Window: #' + num
	});
	
	var label = Ti.UI.createLabel({
		top:10,
		width: 200,
		height: 50,
		backgroundColor: 'white',
		color: 'black',
		text: ''
	});
	
	var btn = Ti.UI.createButton({
		width: Ti.UI.SIZE,
		height: Ti.UI.SIZE,
		title: 'fire event'
	});
	
	win.add(label);
	win.add(btn);
	
	btn.addEventListener('click', function(){
		Ti.App.fireEvent('change_label', {text: 'event fired'});
	});
	
	function changeLabel(e) {
		label.text = e.text;
		Ti.API.info('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
		Ti.API.info('-=-=-=-=-EVENT FIRED-=-=-=-=-=-');
	}
	
	// No memory leak
	Ti.App.addEventListener('change_label', changeLabel);

	win.addEventListener('close', function(){
		// Remove the event on window close
		Ti.App.removeEventListener('change_label', changeLabel);
	});

	return win;
}

Window1().open();