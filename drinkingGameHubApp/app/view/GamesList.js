Ext.define('drinkingGameHubApp.view.GamesList', {
	extend: 'Ext.List',
	xtype: 'gameslist',

	config: {
		grouped:true,
        indexBar:true,
        layout: 'fit',
        itemTpl: '{title}',
        store: 'Games',
        onItemDisclosure: true
	}
});