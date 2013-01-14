Ext.define('drinkingGameHubApp.view.GamesList', {
	extend: 'Ext.List',
	xtype: 'gameslist',

	config: {
		grouped:true,
        indexBar:true,
        height: 500,
        itemTpl: '{title}',
        store: 'Games',
        onItemDisclosure: true
	}
});