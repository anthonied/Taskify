//Functions for the layout
navbarFocus = function (menuItem) {
    var item = menuItem;
    alert(item);
};



//Custom validations
IsValidEmailAddress1 = function (email) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return filter.test(email);
};
IsValidEmailAddress2 = function (email) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return filter.test(email);
};



//Custom functions for general use
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
getLastXYears = function (numberOfYears) {
    var today = new Date();

    today.setHours(0, 0, 0, 0);
    var startYear = new Date(today.setFullYear(today.getFullYear() - numberOfYears)).getFullYear();

    var years = [];
    for (var i = startYear; i <= startYear + numberOfYears; i++) {
        years.push(i.toString());
    }

    return years;
}

var changeLocation = function (newLocation, prefixRootUrlToGivenNewLocation)
{
	
	setTimeout(function ()
	{
        location = getLocation(newLocation, prefixRootUrlToGivenNewLocation);
    }, 0);
}

var getLocation = function (newLocation, prefixRootUrlToGivenNewLocation)
{
	return (prefixRootUrlToGivenNewLocation && window.rootUrl ? window.rootUrl : "") + newLocation;
}

var DateSpan = function ()
{
	var self = this;
	self.years = 0;
	self.months = 0;
	self.days = 0;
}

var dateSpanBetween2Dates = function (date1, date2)
{
	date1 = !date1 ? new Date() : convertStringddMMyyyyToDate(date1);
	date2 = !date2 ? new Date() : convertStringddMMyyyyToDate(date2);

	var dateSpan = new DateSpan();
	dateSpan.years = date2.getFullYear() - date1.getFullYear();
	dateSpan.months = date2.getMonth() - date1.getMonth();
	dateSpan.days = date2.getDate() - date1.getDate();

	if (dateSpan.days < 0)
	{
		dateSpan.months--;
		dateSpan.days += new Date(date2.getFullYear(), date2.getMonth(), 0).getDate();
	}

	if (dateSpan.months < 0)
	{
		dateSpan.years--;
		dateSpan.months += 12;
	}

	return dateSpan;
};

function convertStringddMMyyyyToDate(date)
{
	date = date.split("/");
  	return new Date(date[2], date[1] - 1, date[0]);
}
