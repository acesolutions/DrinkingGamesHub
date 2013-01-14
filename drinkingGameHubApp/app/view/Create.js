Ext.define('drinkingGameHubApp.view.Create', {
	extend: 'Ext.Panel',
	xtype: 'createcard',
	
	config: {
		title: 'create',
		iconCls: 'add',
	
		items: [{
                    xtype: 'fieldset',
                    title: 'Enter your drinking game',
                    instructions: '(Enter a brief description and the rules)',
                    items: [{
                        xtype: 'textfield',
                        label: 'Name'
                    },
                    {
                        xtype: 'textareafield',
                        label: 'description'
                    },
                    {
                        xtype: 'textareafield',
                        label: 'Message'
                    },
                    {
                        xtype: 'button',
                        text: 'Send',
                        ui: 'confirm'
                    }]
        }]

	}
});