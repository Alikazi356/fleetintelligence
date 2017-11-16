sap.ui.define(["sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"./utilities",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast"
], function(BaseController, MessageBox, Utilities, History, MessageToast) {
	"use strict";
	
			var lineChartTotalCost;
			var lineChartCostPerVehicle ;
			var pieChartCostTypes;
			var stackChartImportErrors;
			
			var oView;
			var oModel;

			var oDataLineChartTotalCost;
			var oDataLineChartCostPerVehicle;
			var oDataPieChartCostTypes;
			var oDataStackChartImportErrors;
			
			var chartData;
			var toDate;
			var fromDate;
			var costTypes;
			var selectedCostTypes = [];
			var supplier;

	return BaseController.extend("com.sap.build.standard.fleetReporting.controller.Page1", {
		
		onInit: function() {
			
			 oView = this.getView();
			 oModel = new sap.ui.model.json.JSONModel();
		     oView.setModel(oModel, "staticDataModel");

			this.mBindingOptions = {};
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getTarget("Page1").attachDisplay(jQuery.proxy(this.doNothing, this));
		
		},
		createChart: function() {
			
			this.createTotalCostChart();
			this.createCostPerVehicleChart();
			this.createCostTypesChart();
			this.createImportErrorsChart();

		},
		
		getDataForImportErrorChart : function(){
				this.getView().getModel().read("/Errors",{
				
				success:function(oData,oResponse){
					var oModelJson = new sap.ui.model.json.JSONModel();
					oModelJson.setData(oData);

				 chartData = oModelJson.getJSON();

				},
			
				error:function(oResponse){

				}
			});
		},
		
		createTotalCostChart : function(){
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
				"lineChartTotalCost": oData
			}, true);
			this.oBindingParameters = {
				"path": "/lineChartTotalCost",
				"parameters": {},
				"model": "staticDataModel"
			};
			oView.byId("lineChartTotalCost").bindData(this.oBindingParameters);
			var aDimensions = oView.byId("lineChartTotalCost").getDimensions();
			aDimensions.forEach(function(oDimension) {
			});
			
			
			lineChartTotalCost = this.getView().byId("lineChartTotalCost");
			lineChartTotalCost.bindData(lineChartTotalCost.getBindingInfo("data"));
			
		},
		createCostPerVehicleChart : function(){
			
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
				"lineChartCostPerVehicle": oData
			}, true);
			this.oBindingParameters = {
				"path": "/lineChartCostPerVehicle",
				"parameters": {},
				"model": "staticDataModel"
			};
			oView.byId("lineChartCostPerVehicle").bindData(this.oBindingParameters);
			var aDimensions = oView.byId("lineChartCostPerVehicle").getDimensions();
			aDimensions.forEach(function(oDimension) {
			});
			
			
			 lineChartCostPerVehicle = this.getView().byId("lineChartCostPerVehicle");
			lineChartCostPerVehicle.bindData(lineChartCostPerVehicle.getBindingInfo("data"));

		},
		createCostTypesChart : function(){
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
				"pieChartCostTypes": oData
			}, true);
			this.oBindingParameters = {
				"path": "/pieChartCostTypes",
				"parameters": {},
				"model": "staticDataModel"
			};
			oView.byId("pieChartCostTypes").bindData(this.oBindingParameters);
			var aDimensions = oView.byId("pieChartCostTypes").getDimensions();
			aDimensions.forEach(function(oDimension) {
			});
			
			 pieChartCostTypes = this.getView().byId("pieChartCostTypes");
			pieChartCostTypes.bindData(pieChartCostTypes.getBindingInfo("data"));
			
		},
		createImportErrorsChart: function(){
			
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
		
		//TODO	
			this.getView().getModel().read("/Errors",{
				
				success:function(oData,oResponse){
					var oModelJson = new sap.ui.model.json.JSONModel();
					oModelJson.setData(oData);

				 chartData = oModelJson.getJSON();

				},
			
				error:function(oResponse){

				}
			});
		

			oView.getModel("staticDataModel").setData({
				"stackChartImportErrors": oData
			}, true);
			this.oBindingParameters = {
				"path": "/stackChartImportErrors",
				"parameters": {},
				"model": "staticDataModel"
			};
			oView.byId("stackChartImportErrors").bindData(this.oBindingParameters);
			var aDimensions = oView.byId("stackChartImportErrors").getDimensions();
			aDimensions.forEach(function(oDimension) {
			});
			
			stackChartImportErrors = this.getView().byId("stackChartImportErrors");
			stackChartImportErrors.bindData(stackChartImportErrors.getBindingInfo("data"));
			

		},
		createAlert: function(){
			MessageToast.show("hast du Hose gesehen?? ");  
		},
		
		selectToDate : function(){
			toDate = this.getView().byId("toDate").getValue();
		},
				
		selectFromDate : function(){
			fromDate = this.getView().byId("fromDate").getValue();
		},
		onChangeCheckbox:function(event){
         costTypes = event.getSource().getSelected();
         
        var value =  event.getSource().getText();
         alert(value);
         selectedCostTypes.push(value);
         console.log(selectedCostTypes);
    	},
    	selectSupplier:function(event){
         supplier = event.getSource().getValue();
         alert(supplier);
     
    	},
    	doNothing : function(){

    	}
	});
}, /* bExport= */ true);