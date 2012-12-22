Ext.define('Memo.store.Memos', {
    extend: 'Ext.data.Store',
    config: {
        model: 'Memo.model.Memo',
        proxy: {
            type: 'localstorage',
            id: 'memo'
        },
        autoLoad: true
    }
});
