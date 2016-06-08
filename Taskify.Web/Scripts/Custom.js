navbarFocus = function (menuItem) {
    var item = menuItem;
    alert(item);
};

IsValidEmailAddress1 = function (email) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return filter.test(email);
};

IsValidEmailAddress2 = function (email) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return filter.test(email);
};

Search = function (allItems, filterTarget, containsAll) {
    this.items = allItems;
    this.targetFilter = filterTarget;
    var filter = "";

    this.ApplyFilter = function (newFilter) {
        if (filter === newFilter)
            return;

        filter = newFilter;
        var filteredItems = [];

        for (var i = 0; i < this.items.length; i++)
            if (containsAll(this.items[i], newFilter, contains))
                filteredItems.push(this.items[i]);

        this.targetFilter(filteredItems);
    };

    var contains = function (str1, str2) {
        if (!str2)
            return true;

        if (!str1)
            return false;

        str1 = str1.replace(/ /g, "").replace(/,/g, "");
        str2 = str2.replace(/ /g, "").replace(/,/g, "");
        return str1.toLowerCase().indexOf(str2.toLowerCase()) >= 0;
    };
}

//Registration Functions
GetGenderFromTitle = function (title)
{
    if(title === "Mr.")
        return true;
    return false;
}

changeDivSizeToFitOnScreen = function (elementName, minusHeight) {
    var size = $(window).height() - minusHeight - 10;
    $(elementName).height(size);
}


sendViewModelToController = function (url, data, successFunction) {
   return $.ajax({
        url: getLocation(url,true),
        type: 'POST',
        data: data,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        error: function (response) {
           if(response.statusText != "abort") console.log(response);
        },
        success: function (response) {
            successFunction(response);
        }
    });
}
var findSelectedObject = function (list, obj, fieldName) {

    if (!list || !obj)
        return null;

    fieldName = fieldName ? fieldName : findFirstPropertyNameOfAnObject(["Id", "id", "Name", "name", "Code", "code", "Value", "value"], obj);

    if (!fieldName)
        return null;

    for (var i = 0; i < list.length; i++) {
        if (list[i][fieldName] !== obj[fieldName])
            continue;

        return list[i];
    }
};
var findFirstPropertyNameOfAnObject = function (propertyNames, obj) {
    if (!propertyNames || !obj)
        return null;

    for (var i = 0; i < propertyNames.length; i++) {
        if (!obj.hasOwnProperty(propertyNames[i]))
            continue;

        return propertyNames[i];
    }

    return null;
};

var containsSubstring = function (stringValue, substringValue) {
    stringValue = stringValue.replace(/ /g, '');
    substringValue = substringValue.replace(/ /g, '');
    return stringValue.toLowerCase().indexOf(substringValue.toLowerCase()) >= 0;
}