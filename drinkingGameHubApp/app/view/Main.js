Ext.define('drinkingGameHubApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'Ext.List',
        'Ext.data.Store'
    ],
    config: {
        tabBarPosition: 'top',

        items: [{
                title: 'Home',
                iconCls: 'home',

                html: 'Welcome to the one stop place to find outrageous and fun drinking games from all over the country, if you cant beat them join them!!!!!!'
            },
            {
                title: 'Search',
                iconCls: 'search',

                styleHtmlContent: true,
                scrollable: true,

                items: [

                {
                    xtype: 'fieldset',
                    title: 'Enter your drinking game',
                    instructions: '(Search for a cool drinking game)',
                    items: [{
                        xtype: 'searchfield'
                    }]
                },
                {
                        xtype: 'list',
                        height: 500,
                        itemTpl: '{name}',
                        store: {
                            fields: ['name'],
                            data: [
                                {name: 'Cowper'},
                                {name: 'Everett'},
                                {name: 'University'},
                                {name: 'Forest'}
                        ]}
               }],
           },
            {
                title: 'I can do better',

                styleHtmlContent: true,
                scrollable: true,

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
                    }]
                },
                    {
                        xtype: 'button',
                        text: 'Send',
                        ui: 'confirm'
                    }]

            }]
    }
});
