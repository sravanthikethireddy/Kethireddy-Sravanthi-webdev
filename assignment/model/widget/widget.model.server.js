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

    function createWidget(pageId,widget) {
        widget._page = pageId;
        // return widgetModel.create(widget);
        // return model.pageModel
        //     .findPageById(pageId)
        //     .then(function (page) {
        //         widget._page = pageId;
        //         return widgetModel
        //             .create(widget)
        //             .then(function (n_Widget) {
        //                 page.widgets.push(n_Widget);
        //                 page.save();
        //                 return n_Widget;
        //             }, function (error) {
        //                 return error;
        //             });
        //     }, function (error) {
        //         return error;
        //     });
        return widgetModel
            .find({_page:widget._page})
            .then(
                function (widgets) {
                    return widgetModel.create(widget);
                }, function (error) {
                    return null;
                }
            )
    }

    function findAllWidgetsForPage(pageId) {
        return widgetModel.find({_page: pageId})
    }

    function findWidgetById(wid) {
        return widgetModel.findById(wid);
    }

    // function updateWidget(wid, widget) {
    //     return widgetModel.update({_id: wid}, {
    //         $set: widget
    //     });
    // }
    function updateWidget(type,widget) {
        if(widget.type==="HEADER") {
            return widgetModel
                .update({_id:widget._id},{
                    $set:{
                        name:widget.name,
                        size:widget.size,
                        text:widget.text
                    }
                })
        }
        else if(widget.type==="HTML") {
            return widgetModel
                .update({_id:widget._id},{
                    $set:{
                        text:widget.text
                    }
                })
        }

        else if(widget.type==="TEXT") {
            return widgetModel
                .update({_id:widget._id},{
                    $set:{
                        text :widget.text,
                        formatted:widget.formatted,
                        placeholder :widget.placeholder
                    }
                })
        }

        else if(widget.type==="IMAGE") {
            return widgetModel
                .update({_id:widget._id},{
                    $set:{
                        url :widget.url,
                        text :widget.text,
                        width :widget.width
                    }
                })
        }

        else if(widget.type==="YOUTUBE") {
            return widgetModel
                .update({_id:widget._id},{
                    $set:{
                        url :widget.url,
                        text :widget.text,
                        width :widget.width
                    }
                })
        }



    }

    function deleteWidget(wid) {
        return widgetModel.remove({_id: wid});
    }

    function reorderWidget(pageId, start, final) {
        return widgetModel.find({_page: pageId}, function (err, widgets) {
            widgets.forEach(function (widget) {
                if (start < final) {
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