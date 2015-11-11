var ms_contacts = {
    btn_create_contact: null,
    dialog_create_contact: null,
    contact_list: null,
    construct: function () {
        this.btn_create_contact = document.querySelector('#btn_create_contact');
        this.dialog_create_contact = document.querySelector('#dialog_create_contact');
        this.contact_list = document.querySelector('#contact_list');
        this.btn_create_contact.addEventListener('click', ms_contacts.showCreateContact, false);
        //读取系统联系人
        navigator.contacts.find(['name', 'phoneNumbers', 'email'], function (contacts) {
            //填充联系人
            var contactTemplate = Handlebars.compile(document.querySelector('#contact_template').innerHTML);
            ms_contacts.contact_list.innerHTML = contactTemplate({ list: contacts });
        }, function () {
        });

    },
    destructor: function () {
    },
    showCreateContact: function () {
        ms_contacts.dialog_create_contact.style.display = 'block';
    },
    hideCreateContact: function () {
        ms_contacts.dialog_create_contact.style.display = 'none';
    },
    saveContact: function () {
        var txt_contact_name = document.querySelector('#txt_contact_name');
        var select_contactgender = document.querySelector('#select_contactgender');
        var oContact = navigator.contacts.create({
            'displayName': txt_contact_name.value,
            'gender': select_contactgender.value
        });
        oContact.save(function () { alert('保存成功') }, function () { alert('保存失败') });
        this.hideCreateContact();
    }
};