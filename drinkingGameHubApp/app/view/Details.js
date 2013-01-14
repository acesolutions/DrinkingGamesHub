Ext.define('drinkingGameHubApp.view.Details', {
	extend: 'Ext.Panel',
	xtype: 'Details',

	config: {
		styleHtmlContent:true,
		scrollable: 'vertical',
		title: 'Details',
		tpl: 'Description: <p>{description}</p>'
	}
});