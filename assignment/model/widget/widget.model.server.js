module.exports = function () {
    var model = {};
    var mongoose = require("mongoose");
    var widgetSchema = require("./widget.schema.server")();
    var widgetModel = mongoose.model("widgetModel", widgetSchema);

    var api = {
        createWidget: createWidget,
        findAllWidgetsForPage: findAllWidgetsForPage,
        findWidgetById: findWidgetById,
        updateWidget: updateWidget,
        deleteWidget: deleteWidget,
        reorderWidget: reorderWidget
    };

    return api;

    function createWidget(pageId, widget) {
        widget._page = pageId;
        return widgetModel.create(widget);
    }

    function findAllWidgetsForPage(pageId) {
        return widgetModel.find({_page: pageId})
    }

    function findWidgetById(wid) {
        return widgetModel.findById(wid);
    }

    function updateWidget(wid, widget) {
        return widgetModel.update({_id: wid}, {
            $set: widget
        });
    }

    function deleteWidget(wid) {
        return widgetModel.remove({_id: wid});
    }

    function reorderWidget(pageId, start, final) {
        return widgetModel.find({_page: pageId}, function (err, widgets) {
            widgets.forEach(function (widget) {
                if (initial < final) {
                    if (widget.order === start) {
                        widget.order = final;
                        widget.save();
                    }
                    else if (widget.order < start && widget.order >= final) {
                        widget.order = widget.order + 1;
                        widget.save();
                    }
                }
                else {
                    if (widget.order === start) {
                        widget.order = final;
                        widget.save();
                    }
                    else if (widget.order > start && widget.order <= final) {
                        widget.order = widget.order + 1;
                        widget.save();
                    }
                }
            });
        });
    }
};