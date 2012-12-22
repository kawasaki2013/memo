Ext.define('Memo.view.Form', {
    extend: 'Ext.form.Panel',
    xtype: 'memoform',
    config: {
        items: [
            {
                xtype: 'textareafield',
                name: 'memo',
                height: 800
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                ui: 'memo-transparent',
                items: [
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        ui: 'memo',
                        iconCls: 'trash',
                        iconMask: true,
                        action: 'remove'
                    }
                ]
            }
        ]
    }
});
