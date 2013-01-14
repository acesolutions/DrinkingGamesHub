Ext.define('drinkingGameHubApp.view.Tabs', {
	extend: 'Ext.TabPanel',
	requires:  [
		'drinkingGameHubApp.view.Home',
		'drinkingGameHubApp.view.Search'
	],

	config: {
		items: [
		{ xtype: 'homecard' },
		{ xtype: 'searchcard' },
		{ xtype: 'createcard'}
		]
	}
});