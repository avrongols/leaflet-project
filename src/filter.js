import {map} from "./map";
import {gridOptionsPromise} from "./table" 
import {stopPresentation} from "./presentation"

map.on('baselayerchange', function(e) {
  document.getElementById('filter-text-box').value = null;
  initFilter()
});

async function initFilter() {
  let gridOptions = await gridOptionsPromise;
  let input = document.querySelector('#filter-text-box');

  input.addEventListener('input', e => {
		gridOptions.api.setQuickFilter(document.getElementById('filter-text-box').value);
		localStorage.setItem("filterValue", document.getElementById('filter-text-box').value);
    stopPresentation();
  })

	if (localStorage.getItem("filterValue") != null) {
		document.getElementById('filter-text-box').value = localStorage.getItem("filterValue");
		gridOptions.api.setQuickFilter(document.getElementById('filter-text-box').value);
	}
};
initFilter();
