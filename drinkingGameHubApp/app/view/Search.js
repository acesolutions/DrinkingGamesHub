Ext.define('drinkingGameHubApp.view.Search', {
	extend: 'Ext.navigation.View',
	xtype: 'searchcard',
	
	config: {
		iconCls: 'search',
		title: 'search',

		items: [
		{
			 /*xtype: 'fieldset',
             title: 'Enter your drinking game',
             instructions: '(Search for a cool drinking game)',
             items: [{
                xtype: 'searchfield',
                id: 'searchinput'
             },
             {
                xtype: 'button',
                text: 'Send',
                ui: 'confirm',
                action: 'searchquery'
             }]*/
		},
		{
			 xtype: 'gameslist',
		}]	
	}
});