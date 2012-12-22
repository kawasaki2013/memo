Ext.define('Memo.controller.Memo', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'main',
            form: 'memoform',
            list: 'memolist'
        },
        control: {
            'button[action=add]': {
                tap: 'onAddButtonTap'
            },
            'memoform textareafield': {
                change: 'onFieldChange'
            },
            'memolist': {
                itemtap: 'onItemTap'
            },
            'button[action=remove]': {
                tap: 'onRemoveButtonTap'
            },
            'main': {
                back: 'onBack'
            }
        }
    },

    onAddButtonTap: function() {
        var record = Ext.create('Memo.model.Memo', {
            id: Ext.Date.now()
        });

        var form = this.getForm();

        if (form && form.getRecord()) {
            form.setRecord(record);
            form.down('textareafield').setValue('');

        } else {
            this.getMain().push({
                xtype: 'memoform',
                title: '',
                record: record
            });
        }
    },

    onFieldChange: function(field, value) {
        var form = this.getForm(),
            record = form.getRecord();

        record.set('title', Ext.String.ellipsis(value, 10));
        record.set('memo', value);

        var store = Ext.getStore('Memos');
        if (Ext.isEmpty(store.findRecord('id', record.get('id')))) {
            store.add(record);
        }
        store.sync();
    },

    onItemTap: function(list, index, target, record) {
        this.getMain().push({
            xtype: 'memoform',
            record: record,
            title: record.get('title')
        });
    },

    onRemoveButtonTap: function() {
        var form = this.getForm(),
            record = form.getRecord(),
            store = Ext.getStore('Memos');

        store.removeAt(store.indexOf(record));
        store.sync();

        // Quick hack
        // See. http://stackoverflow.com/questions/10863204/sencha-touch-localstore-proxy-not-removing-indexes-after-records-deleted
        var id = String(record.getId());
        var indexes = localStorage.memo.split(',') || [];
        var newIndexes = indexes.filter(function(v) {
            return v !== id;
        }).join(',');
        localStorage.setItem('memo', newIndexes);

        this.getMain().onBackButtonTap();
    },

    onBack: function() {
       this.getForm().setRecord(null);
       this.getList().deselectAll();
    }

});