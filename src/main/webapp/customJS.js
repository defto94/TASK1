Ext.onReady(function () {
    Ext.create('Ext.tab.Panel', {
        renderTo: Ext.getBody(),
        requires: ['Ext.layout.container.Card'],
        xtype: 'layout-cardtabs',
        title: 'Admin Panel',
        width: Ext.getBody().getViewSize().width,
        height: Ext.getBody().getViewSize().height,
        bodyPadding: 10,
        items: [{
                title: 'Book Form',
                items: [ {
                        id:'form',
                        xtype: 'form',
                        title: 'Add new book',
                        defaultType: 'textfield',
                        items: [{
                                fieldLabel: 'Name',
                                name: 'name',
                                allowBlank: false,
                                msgTarget: 'under'
                            }, {
                                fieldLabel: 'Adress Email',
                                name: 'email',
                                vtype: 'email',
                                allowBlank: false,
                                msgTarget: 'under'
                            },{
                        xtype: 'button',
                        id: 'add',
                        text: 'Add Book',
                        handler: function () {
                            // this button will spit out a different number every time you click it.
                            // so firstly we must check if that number is already set:
                            if (this.clickCount) {
                                // looks like the property is already set, so lets just add 1 to that number and alert the user
                                this.clickCount++;
                                alert('You have clicked the button "' + this.clickCount + '" times.\n\nTry clicking it again..');
                            } else {
                                // if the clickCount property is not set, we will set it and alert the user
                                this.clickCount = 1;
                                alert('You just clicked the button for the first time!\n\nTry pressing it again..');
                            }
                        }} ]

                    }, {
                        xtype: 'form',
                        title: 'Add new book',
                        defaultType: 'textfield',
                        items: [{
                                fieldLabel: 'ID',
                                name: 'id',
                                allowBlank: false,
                                msgTarget: 'under'
                            },{
                                fieldLabel: 'Name',
                                name: 'name',
                                allowBlank: false,
                                msgTarget: 'under'
                            }, {
                                fieldLabel: 'Adress Email',
                                name: 'email',
                                vtype: 'email',
                                allowBlank: false,
                                msgTarget: 'under'
                            },{
                        xtype: 'button',
                        id: 'update',
                        text: 'Update Book',
                        handler: function () {
                            // this button will spit out a different number every time you click it.
                            // so firstly we must check if that number is already set:
                            if (this.clickCount) {
                                // looks like the property is already set, so lets just add 1 to that number and alert the user
                                this.clickCount++;
                                alert('You have clicked the button "' + this.clickCount + '" times.\n\nTry clicking it again..');
                            } else {
                                // if the clickCount property is not set, we will set it and alert the user
                                this.clickCount = 1;
                                alert('You just clicked the button for the first time!\n\nTry pressing it again..');
                            }
                        }} ]

                    },
                    {title: 'Book Details',
                        xtype: 'grid',
                        store: {
                            fields: ['id', 'author', 'email', 'delete'],
                            data: [
                                {id: 'Lisa', author: "lisa@simpsons.com",
                                    email: "555-111-1224"},
                                {id: 'Bart', author: "bart@simpsons.com",
                                    email: "555-222-1234"},
                                {id: 'Homer', author: "home@simpsons.com",
                                    email: "555-222-1244"},
                                {id: 'Marge', author: "marge@simpsons.com",
                                    email: "555-222-1254"}
                            ],
                            proxy: {
                                type: 'memory'
                            }
                        },
                        columns: [
                            {text: 'ID', dataIndex: 'id', flex: 2},
                            {text: 'Author', dataIndex: 'author', flex: 3},
                            {text: 'Email', dataIndex: 'email', flex: 2},
                            {text: 'Delete', dataIndex: 'delete', flex: 2}
                        ]
                    }]
            },
            {
                title: 'User Form'

            }]

    });



});


