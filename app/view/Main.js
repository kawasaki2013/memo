Ext.define('Memo.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'main',
    requires: [
    ],
    config: {
        cls: 'memo',
        useTitleForBackButtonText: true,
        navigationBar: {
            ui: 'memo',
            items: {
                xtype: 'button',
                ui: 'memo',
                iconCls: 'add',
                iconMask: true,
                action: 'add',
                align: 'right'
            }
        },
        items: [
            {
                title: 'メモ',
                xtype: 'memolist'
            }
        ]
    }
});
