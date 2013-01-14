Ext.define('drinkingGameHubApp.controller.test', {
	extend: 'Ext.app.Controller',

	init: function() { 
		
		Ext.Ajax.request({
    		
    		url: 'http://localhost/drinkhivecms/index.php/json/allgames/2',

    		success: function(response) {
        		//Ext.Msg.alert(response.responseText);
    		},

    		failure: function(response) {
        		Ext.Msg.alert("Error in request");
    		}
		});

	},


	config: {
		refs: {
			searchbtn: 'button[action=searchquery]',
			gameslist: 'gameslist',
			main: 'searchcard'
		},
		control: {
			gameslist: {
				disclose: 'showdetail'
			},
			searchbtn: {
				tap: 'jsonTest'
			}
		}
	},
	showdetail: function(list, record) {
		this.getMain().push({
			xtype: 'Details',
			title: record.title(),
			data: record.data
		});
	}
	/*jsonTest: function() {

		//Get value of the html element
		//Ext.Msg.alert(Ext.getCmp('searchinput').getValue())

			var url = 'http://localhost/drinkhivecms/index.php/json/allgames/';
			var modURL = url + Ext.getCmp('searchinput').getValue();

		Ext.Ajax.request({
    		
    		url: modURL,

    		success: function(response) {
        		Ext.Msg.alert(response.responseText);
    		},

    		failure: function(response) {
        		Ext.Msg.alert("Error in request");
    		}
		});
	}*/
	
});