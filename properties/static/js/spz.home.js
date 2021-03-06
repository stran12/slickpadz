/**
 * @namespace contains static module for the home page
 */
spz.home = {
    init: function() {
        /** initialize autocomplete on search fields */
        //TODO: move this to spz.js, b/c there are search fields on other pages
        $("#main-search > .term, #secondary-search > .term").focus(spz.home.clearSearchField)
                                                            .autocomplete({
                                                                source: serverContext.suggestList,
                                                                select: spz.home.copySearchVal
                                                            });
    },
    clearSearchField: function(evt) {
        var $field = $(evt.target);
        if ($field.val() === 'City, State or ZIP') {
            $field.val('');
        }
    },
    copySearchVal: function(evt) {
        $("#main-search > .term, #secondary-search > .term").not($(evt.target)).val($(evt.target).val());
    }
};
$(document).bind('spz:initialized', spz.home.init);
