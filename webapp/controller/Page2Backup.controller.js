sap.ui.define(["sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"./utilities",
	"sap/ui/core/routing/History"
], function(BaseController, MessageBox, Utilities, History) {
	"use strict";

	return BaseController.extend("com.sap.build.standard.fleetReporting.controller.Page2Backup", {
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
			this.oRouter.getTarget("Page2Backup").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));

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
				"dim0": "India",
				"mea0": "296"
			}, {
				"dim0": "Canada",
				"mea0": "133"
			}, {
				"dim0": "USA",
				"mea0": "489"
			}, {
				"dim0": "Japan",
				"mea0": "270"
			}, {
				"dim0": "Germany",
				"mea0": "350"
			}];
			oView.getModel("staticDataModel").setData({
				"sap_m_Page_0-content-sap_m_Panel-1510667307887-content-sap_chart_LineChart-1510667916580-0e2f9be5c412de6a0ecdca051_S1": oData
			}, true);
			this.oBindingParameters = {
				"path": "/sap_m_Page_0-content-sap_m_Panel-1510667307887-content-sap_chart_LineChart-1510667916580-0e2f9be5c412de6a0ecdca051_S1",
				"parameters": {},
				"model": "staticDataModel"
			};
			oView.byId("sap_m_Page_0-content-sap_m_Panel-1510667307887-content-sap_chart_LineChart-1510667916580-0e2f9be5c412de6a0ecdca051_S1")
				.bindData(this.oBindingParameters);
			var aDimensions = oView.byId(
				"sap_m_Page_0-content-sap_m_Panel-1510667307887-content-sap_chart_LineChart-1510667916580-0e2f9be5c412de6a0ecdca051_S1").getDimensions();
			aDimensions.forEach(function(oDimension) {
				oDimension.setTextFormatter(dateDimensionFormatter);
			});

			var oData = [{
				"dim0": "India",
				"mea0": "296"
			}, {
				"dim0": "Canada",
				"mea0": "133"
			}, {
				"dim0": "USA",
				"mea0": "489"
			}, {
				"dim0": "Japan",
				"mea0": "270"
			}, {
				"dim0": "Germany",
				"mea0": "350"
			}];
			oView.getModel("staticDataModel").setData({
				"sap_m_Page_0-content-sap_m_Panel-1510667444520-content-sap_chart_LineChart-1510667938738-0e2f9be5c412de6a0ecdca051_S1": oData
			}, true);
			this.oBindingParameters = {
				"path": "/sap_m_Page_0-content-sap_m_Panel-1510667444520-content-sap_chart_LineChart-1510667938738-0e2f9be5c412de6a0ecdca051_S1",
				"parameters": {},
				"model": "staticDataModel"
			};
			oView.byId("sap_m_Page_0-content-sap_m_Panel-1510667444520-content-sap_chart_LineChart-1510667938738-0e2f9be5c412de6a0ecdca051_S1")
				.bindData(this.oBindingParameters);
			var aDimensions = oView.byId(
				"sap_m_Page_0-content-sap_m_Panel-1510667444520-content-sap_chart_LineChart-1510667938738-0e2f9be5c412de6a0ecdca051_S1").getDimensions();
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
				"sap_m_Page_0-content-sap_m_Panel-1510667768665-content-sap_chart_StackedColumnChart-1510667979045-0e2f9be5c412de6a0ecdca051_S1": oData
			}, true);
			this.oBindingParameters = {
				"path": "/sap_m_Page_0-content-sap_m_Panel-1510667768665-content-sap_chart_StackedColumnChart-1510667979045-0e2f9be5c412de6a0ecdca051_S1",
				"parameters": {},
				"model": "staticDataModel"
			};
			oView.byId(
					"sap_m_Page_0-content-sap_m_Panel-1510667768665-content-sap_chart_StackedColumnChart-1510667979045-0e2f9be5c412de6a0ecdca051_S1")
				.bindData(this.oBindingParameters);
			var aDimensions = oView.byId(
					"sap_m_Page_0-content-sap_m_Panel-1510667768665-content-sap_chart_StackedColumnChart-1510667979045-0e2f9be5c412de6a0ecdca051_S1")
				.getDimensions();
			aDimensions.forEach(function(oDimension) {
				oDimension.setTextFormatter(dateDimensionFormatter);
			});

		},
		onAfterRendering: function() {

			var oBindingParameters, oChart;

			oChart = this.getView().byId(
				"sap_m_Page_0-content-sap_m_Panel-1510667307887-content-sap_chart_LineChart-1510667916580-0e2f9be5c412de6a0ecdca051_S1");
			oChart.bindData(oChart.getBindingInfo("data"));
			oChart = this.getView().byId(
				"sap_m_Page_0-content-sap_m_Panel-1510667444520-content-sap_chart_LineChart-1510667938738-0e2f9be5c412de6a0ecdca051_S1");
			oChart.bindData(oChart.getBindingInfo("data"));
			oChart = this.getView().byId(
				"sap_m_Page_0-content-sap_m_Panel-1510667768665-content-sap_chart_StackedColumnChart-1510667979045-0e2f9be5c412de6a0ecdca051_S1");
			oChart.bindData(oChart.getBindingInfo("data"));

		}
	});
}, /* bExport= */ true);