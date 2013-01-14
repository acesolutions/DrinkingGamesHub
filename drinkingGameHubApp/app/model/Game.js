Ext.define('drinkingGameHubApp.model.Game', {
	extend: 'Ext.data.Model',

	config: {
		fields: ['id','title','description']
	},

	title: function() {
		var d = this.data;
		return d.title;
	}
});