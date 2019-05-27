(function() {
	var buttons = document.getElementsByTagName("button");

	// Handling events from button "button-filter"
	var buttonFilter;
	var i = 0;
	while(i < buttons.length && buttons[i].id != "button-filter"){
		i++;
	}
	buttonFilter = buttons[i];
	buttonFilter.addEventListener("click", filterPanelChangeClass);
	
	// Handling events from button "button-close-filter-panel"
	var buttonCloseFilterPanel;
	var i = 0;
	while(i < buttons.length && buttons[i].id != "button-close-filter-panel"){
		i++;
	}
	buttonCloseFilterPanel = buttons[i];
	buttonCloseFilterPanel.addEventListener("click", filterPanelChangeClass);
	


	function  filterPanelChangeClass() {
		var filterPanel = document.getElementById("filter-panel");
		if(filterPanel.classList.contains("hide")){
			console.log("first");
			filterPanel.classList.replace("hide", "show")
		} else {
			console.log("second");
			filterPanel.classList.replace("show", "hide");
		}
	}
}())