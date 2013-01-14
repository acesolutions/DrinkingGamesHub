Ext.define('drinkingGameHubApp.store.Games', {
	extend:'Ext.data.Store',

	config: {
		model: 'drinkingGameHubApp.model.Game',
		sorters: 'title',
		grouper: function(record) {
			return record.get('title')[0];
		},
		proxy: {
			type: 'ajax',
			url: 'http://localhost/drinkhivecms/index.php/json/allgames/100',
			reader: 'json'
		},
		autoLoad: true,
	}
});