sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("vbakfilter.controller.View1", {
			onInit: function () {

			},
			onRebinding: function (oEvent) {
				var oBindingParams = oEvent.getParameter("bindingParams");
				oBindingParams.parameters = oBindingParams.parameters || {};

				var oSmartTable = oEvent.getSource();
				var oSmartFilterBar = this.byId(oSmartTable.getSmartFilterId());
				if (oSmartFilterBar instanceof sap.ui.comp.smartfilterbar.SmartFilterBar) {
					//Custom price filter
					var oCustomControl = oSmartFilterBar.getControlByKey("Erdat");
					if (oCustomControl.getDateValue() !== null && oCustomControl.getDateValue() !== undefined) {
						oBindingParams.filters.push(new sap.ui.model.Filter({
							path: "Erdat",
							operator: sap.ui.model.FilterOperator.EQ,
							value1: oCustomControl.getDateValue()
						}));
					}
				}
			}
		});
	});
