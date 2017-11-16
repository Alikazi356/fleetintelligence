sap.ui.define(["sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"./utilities",
	"sap/ui/core/routing/History"
], function(BaseController, MessageBox, Utilities, History) {
	"use strict";

	return BaseController.extend("com.sap.build.standard.fleetReporting.controller.Page3", {
		handleRouteMatched: function(oEvent) {

			var oParams = {};

			if (oEvent.mParameters.data.context) {
				this.sContext = oEvent.mParameters.data.context;
				var oPath;
				if (this.sContext) {
					oPath = {
						path: "/" + this.sContext,
						parameters: oParams
					};
					this.getView().bindObject(oPath);
				}
			}

		},
		onInit: function() {

			this.mBindingOptions = {};
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getTarget("Page3").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));

			var oView = this.getView();
			var oModel = new sap.ui.model.json.JSONModel();
			oView.setModel(oModel, "staticDataModel");

			function dateDimensionFormatter(dimensionValue) {
				if (dimensionValue instanceof Date) {
					var oFormat = sap.ui.core.format.DateFormat.getDateInstance({
						style: "short"
					});
					return oFormat.format(dimensionValue);
				}
				return dimensionValue;
			}

			var oData = [{
				"dim0": "January",
				"mea0": "296"
			}, {
				"dim0": "February",
				"mea0": "133"
			}, {
				"dim0": "March",
				"mea0": "489"
			}, {
				"dim0": "April",
				"mea0": "270"
			}, {
				"dim0": "May",
				"mea0": "350"
			}, {
				"dim0": "June",
				"mea0": "321"
			}, {
				"undefined": null,
				"dim0": "July",
				"mea0": "236"
			}, {
				"undefined": null,
				"dim0": "August",
				"mea0": "248"
			}, {
				"undefined": null,
				"dim0": "September",
				"mea0": "410"
			}, {
				"undefined": null,
				"dim0": "October",
				"mea0": "350"
			}, {
				"undefined": null,
				"dim0": "November",
				"mea0": "362"
			}, {
				"undefined": null,
				"dim0": "December",
				"mea0": "246"
			}];
			oView.getModel("staticDataModel").setData({
				"sap_m_Page_0-content-sap_m_Panel-1510667444520-content-sap_chart_LineChart-1510667938738-9c8c1a889a1a06ec0ecdd8212_S2": oData
			}, true);
			this.oBindingParameters = {
				"path": "/sap_m_Page_0-content-sap_m_Panel-1510667444520-content-sap_chart_LineChart-1510667938738-9c8c1a889a1a06ec0ecdd8212_S2",
				"parameters": {},
				"model": "staticDataModel"
			};
			oView.byId("sap_m_Page_0-content-sap_m_Panel-1510667444520-content-sap_chart_LineChart-1510667938738-9c8c1a889a1a06ec0ecdd8212_S2")
				.bindData(this.oBindingParameters);
			var aDimensions = oView.byId(
				"sap_m_Page_0-content-sap_m_Panel-1510667444520-content-sap_chart_LineChart-1510667938738-9c8c1a889a1a06ec0ecdd8212_S2").getDimensions();
			aDimensions.forEach(function(oDimension) {
				oDimension.setTextFormatter(dateDimensionFormatter);
			});

			var oData = [{
				"dim0": "January",
				"mea0": "219"
			}, {
				"dim0": "February",
				"mea0": "233"
			}, {
				"dim0": "March",
				"mea0": "421"
			}, {
				"dim0": "April",
				"mea0": "270"
			}, {
				"dim0": "May",
				"mea0": "350"
			}, {
				"dim0": "June",
				"mea0": "456"
			}, {
				"undefined": null,
				"dim0": "July",
				"mea0": "350"
			}, {
				"undefined": null,
				"dim0": "August",
				"mea0": "422"
			}, {
				"undefined": null,
				"dim0": "September",
				"mea0": "565"
			}, {
				"undefined": null,
				"dim0": "October",
				"mea0": "355"
			}, {
				"undefined": null,
				"dim0": "November",
				"mea0": "500"
			}, {
				"undefined": null,
				"dim0": "December",
				"mea0": "255"
			}];
			oView.getModel("staticDataModel").setData({
				"sap_m_Page_0-content-sap_m_Panel-1510667307887-content-sap_chart_LineChart-1510667916580-9c8c1a889a1a06ec0ecdd8212_S2": oData
			}, true);
			this.oBindingParameters = {
				"path": "/sap_m_Page_0-content-sap_m_Panel-1510667307887-content-sap_chart_LineChart-1510667916580-9c8c1a889a1a06ec0ecdd8212_S2",
				"parameters": {},
				"model": "staticDataModel"
			};
			oView.byId("sap_m_Page_0-content-sap_m_Panel-1510667307887-content-sap_chart_LineChart-1510667916580-9c8c1a889a1a06ec0ecdd8212_S2")
				.bindData(this.oBindingParameters);
			var aDimensions = oView.byId(
				"sap_m_Page_0-content-sap_m_Panel-1510667307887-content-sap_chart_LineChart-1510667916580-9c8c1a889a1a06ec0ecdd8212_S2").getDimensions();
			aDimensions.forEach(function(oDimension) {
				oDimension.setTextFormatter(dateDimensionFormatter);
			});

			var oData = [{
				"dim0": "Leasing",
				"mea0": "200"
			}, {
				"dim0": "Fuel",
				"mea0": "133"
			}, {
				"dim0": "Tires",
				"mea0": "270"
			}, {
				"dim0": "Insurance",
				"mea0": "123"
			}, {
				"undefined": null,
				"dim0": "Repairs",
				"mea0": "323"
			}, {
				"undefined": null,
				"dim0": "Other",
				"mea0": "55"
			}];
			oView.getModel("staticDataModel").setData({
				"sap_m_Page_0-content-sap_m_Panel-1510667643045-content-sap_chart_PieChart-1510668164484-9c8c1a889a1a06ec0ecdd8212_S2": oData
			}, true);
			this.oBindingParameters = {
				"path": "/sap_m_Page_0-content-sap_m_Panel-1510667643045-content-sap_chart_PieChart-1510668164484-9c8c1a889a1a06ec0ecdd8212_S2",
				"parameters": {},
				"model": "staticDataModel"
			};
			oView.byId("sap_m_Page_0-content-sap_m_Panel-1510667643045-content-sap_chart_PieChart-1510668164484-9c8c1a889a1a06ec0ecdd8212_S2").bindData(
				this.oBindingParameters);
			var aDimensions = oView.byId(
				"sap_m_Page_0-content-sap_m_Panel-1510667643045-content-sap_chart_PieChart-1510668164484-9c8c1a889a1a06ec0ecdd8212_S2").getDimensions();
			aDimensions.forEach(function(oDimension) {
				oDimension.setTextFormatter(dateDimensionFormatter);
			});

			var oData = [{
				"dim0": "Week 1 - 4",
				"mea0": 24800.63,
				"mea1": 205199.37
			}, {
				"dim0": "Week 5 - 8",
				"mea0": 99200.39,
				"mea1": 138799.61
			}, {
				"dim0": "Week 9 - 12",
				"mea0": 70200.54,
				"mea1": 150799.46
			}, {
				"dim0": "Week 13 - 16",
				"mea0": 158800.73,
				"mea1": 121199.27
			}, {
				"dim0": "Week 17 - 20",
				"mea0": 140000.91,
				"mea1": 89999.09
			}, {
				"dim0": "Week 21 - 24",
				"mea0": 172800.15,
				"mea1": 77199.85
			}, {
				"dim0": "Week 25 - 28",
				"mea0": 237200.74,
				"mea1": 87799.26
			}, {
				"dim0": "Week 29 - 32",
				"mea0": 243200.18,
				"mea1": 106799.82
			}, {
				"dim0": "Week 33 - 37",
				"mea0": 280800.24,
				"mea1": 109199.76
			}, {
				"dim0": "Week 38 - 42",
				"mea0": 320000.08,
				"mea1": 129999.92
			}, {
				"dim0": "Week 43 - 47",
				"mea0": 360800.09,
				"mea1": 119199.91
			}, {
				"dim0": "Week 47 - 52",
				"mea0": 403200.08,
				"mea1": 156799.92
			}];
			oView.getModel("staticDataModel").setData({
				"sap_m_Page_0-content-sap_m_Panel-1510667768665-content-sap_chart_StackedColumnChart-1510667979045-9c8c1a889a1a06ec0ecdd8212_S2": oData
			}, true);
			this.oBindingParameters = {
				"path": "/sap_m_Page_0-content-sap_m_Panel-1510667768665-content-sap_chart_StackedColumnChart-1510667979045-9c8c1a889a1a06ec0ecdd8212_S2",
				"parameters": {},
				"model": "staticDataModel"
			};
			oView.byId(
					"sap_m_Page_0-content-sap_m_Panel-1510667768665-content-sap_chart_StackedColumnChart-1510667979045-9c8c1a889a1a06ec0ecdd8212_S2")
				.bindData(this.oBindingParameters);
			var aDimensions = oView.byId(
					"sap_m_Page_0-content-sap_m_Panel-1510667768665-content-sap_chart_StackedColumnChart-1510667979045-9c8c1a889a1a06ec0ecdd8212_S2")
				.getDimensions();
			aDimensions.forEach(function(oDimension) {
				oDimension.setTextFormatter(dateDimensionFormatter);
			});

		},
		onAfterRendering: function() {

			var oBindingParameters, oChart;

			oChart = this.getView().byId(
				"sap_m_Page_0-content-sap_m_Panel-1510667444520-content-sap_chart_LineChart-1510667938738-9c8c1a889a1a06ec0ecdd8212_S2");
			oChart.bindData(oChart.getBindingInfo("data"));
			oChart = this.getView().byId(
				"sap_m_Page_0-content-sap_m_Panel-1510667307887-content-sap_chart_LineChart-1510667916580-9c8c1a889a1a06ec0ecdd8212_S2");
			oChart.bindData(oChart.getBindingInfo("data"));
			oChart = this.getView().byId(
				"sap_m_Page_0-content-sap_m_Panel-1510667643045-content-sap_chart_PieChart-1510668164484-9c8c1a889a1a06ec0ecdd8212_S2");
			oChart.bindData(oChart.getBindingInfo("data"));
			oChart = this.getView().byId(
				"sap_m_Page_0-content-sap_m_Panel-1510667768665-content-sap_chart_StackedColumnChart-1510667979045-9c8c1a889a1a06ec0ecdd8212_S2");
			oChart.bindData(oChart.getBindingInfo("data"));

		}
	});
}, /* bExport= */ true);