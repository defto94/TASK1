/*
Ext.onReady(function () {
    Ext.define('Finish.model.Book', {
        extend: 'Ext.data.Model',
        fields: [
            {name: 'id', type: 'int'},
            {name: 'title', type: 'string'},
            {name: 'author', type: 'string'},
        ]
    });

    Ext.define('Finish.store.Books', {
        extend: 'Ext.data.Store',
        storeId: 'bookStore',
        model: 'Ext.model.Book',
        fields: ['id', 'title', 'author'],
        proxy: {
            type: 'ajax',
            url: '/books',
            reader: {
                type: 'json',
                root: 'books'
            }
        },
        autoLoad: true
    });

    Ext.define('Finish.view.BooksList', {
        extend: 'Ext.grid.Panel',
        alias: 'widget.bookslist',
        title: 'Books List',
        store: 'Books',
        initComponent: function () {
            this.columns = [
                {header: 'id', dataIndex: 'id', flex: 1},
                {header: 'title', dataIndex: 'title'},
                {header: 'author', dataIndex: 'author', width: 60}
            ];
            this.callParent(arguments);
        }
    });
});
*/