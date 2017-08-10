module.exports = function (app, model) {
    var widgetModel = model.widgetModel;
    app.post('/api/page/:pageId/widget', createWidget);
    app.get('/api/page/:pageId/widget', findAllWidgetsForPage);
    // app.get('/api/page/:pageId/widget', findWidgetsByPageId);
    app.get('/api/widget/:widgetId', findWidgetById);
    app.put('/api/widget/:widgetId', updateWidget);
    app.delete('/api/widget/:widgetId', deleteWidget);
    // app.put("/api/page/:pageId/widget?initial=initial&final=final", sortWidgets);
    app.post('/api/order/:pageId/widget', sortWidgets);
    // app.post("/api/uploads", upload.single('myFile'), uploadImage);

    app.put("/page/:pageId/widget", reorderWidget);

    // var widgets = [
    //     {"_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
    //     {"_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    //     {
    //         "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
    //         "url": "http://lorempixel.com/400/200/"
    //     },
    //     {"_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
    //     {"_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    //     {
    //         "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
    //         "url": "https://youtu.be/AM2Ivdi9c4E"
    //     },
    //     {"_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
    // ];

    // function createWidget(req, res) {
    //     var widget = req.body;
    //     var pageId = req.params.pageId;
    //     if (widget.type === "HEADER") {
    //         var n_widget = {
    //             _id: (new Date()).getTime() + "",
    //             pageId: pageId,
    //             size: widget.size,
    //             widgetType: widget.type,
    //             text: widget.text
    //
    //
    //         };
    //     }
    //     if (widget.type === "IMAGE") {
    //         var n_widget = {
    //             _id: (new Date()).getTime() + "",
    //             pageId: pageId,
    //             size: widget.size,
    //             widgetType: widget.type,
    //             // text: widget.text
    //             url: widget.url
    //
    //         };
    //     }
    //     if (widget.type === "YOUTUBE") {
    //         var n_widget = {
    //             _id: (new Date()).getTime() + "",
    //             pageId: pageId,
    //             size: widget.size,
    //             widgetType: widget.type,
    //             // text: widget.text
    //             url: widget.url
    //
    //         };
    //     }
    //     if (widget.type === "HTML") {
    //         var n_widget = {
    //             _id: (new Date()).getTime() + "",
    //             pageId: pageId,
    //             // size: widget.size,
    //             widgetType: widget.type,
    //             text: widget.text
    //
    //
    //         };
    //     }
    //     widgets.push(n_widget);
    //     res.json(n_widget);
    // }
    function createWidget(req, res) {
        // var widget = req.body;
        // var pageId = req.params.pageId;
        // widget._id=(new Date()).getTime()+"";
        // widget.pageId=pageId;
        // widgets.push(widget);
        // res.json(widget);
        var pageId = req.params.pageId;
        var widget = req.body;

        if (widget.type === "HEADER") {
            var n_widget = {
                type: widget.type,
                pageId: pageId,
                size: widget.size,
                text: widget.text
            };
        }
        else if (widget.type === "HTML") {
            var n_widget = {
                type: widget.type,
                pageId: pageId,
                text: widget.text
            };
        }
        else if (widget.type === "IMAGE") {
            var n_widget = {
                type: widget.type,
                pageId: pageId,
                width: widget.width,
                url: widget.url
            };

        }

        else if (widget.type === "YOUTUBE") {
            var n_widget = {
                type: widget.type,
                pageId: pageId,
                width: widget.width,
                url: widget.url
            };

        }

        else if (widget.type === "TEXT") {
            var n_widget = {
                type: widget.type,
                pageId: pageId,
                text: widget.text,
                rows: widget.rows,
                placeholder: widget.placeholder,
                formatted: widget.formatted
            };
        }

        widgetModel
            .createWidget(pageId, n_widget)
            .then(function (widget) {
                res.json(widget);
            }, function (error) {
                res.sendStatus(404).send(error);
            });
    }

    function findAllWidgetsForPage(req, res) {
        var pageId = req.params.pageId;
        var wid = [];
        // for (w in widgets) {
        //     if (widgets[w].pageId === pageId) {
        //         wid.push(widgets[w]);
        //     }
        // }
        // res.json(wid);
        widgetModel
            .findAllWidgetsForPage(pageId)
            .then(function (widgets) {
                res.json(widgets);
            },function (error) {
                res.sendStatus(404).send(error);
            })
    }

    // function findWidgetsByPageId(req, res) {
    //     var pageId = req.params.pageId;
    //     // var wid = [];
    //     // for (w in widgets) {
    //     //     if (widgets[w].pageId === pageId) {
    //     //         wid.push(widgets[w]);
    //     //     }
    //     // }
    //     // res.json(wid);
    //     widgetModel
    //         .findAllWidgetsForPage(pageId)
    //         .then(function (widgets) {
    //             res.json(widgets);
    //         }, function (error) {
    //             res.statusCode(404).send(error);
    //         });
    // }

    function findWidgetById(req, res) {
        var widgetId = req.params.widgetId;
        // for (var w in widgets) {
        //     if (widgets[w]._id === widgetId) {
        //         res.send(widgets[w]);
        //         return;
        //     }
        // }
        // res.sendStatus(404);
        widgetModel
            .findWidgetById(widgetId)
            .then(function (widget) {
                res.send(widget);
            }, function (error) {
                res.sendStatus(404).send(error);
            });
    }

    // function updateWidget(req, res) {
    //     var widget = req.body;
    //     var widgetId = req.params.widgetId;
    //     for (var w in widgets) {
    //         if (widgets[w]._id === widgetId) {
    //             if (widget.widgetType === "HEADER") {
    //                 widgets[w].size = widget.size;
    //                 widgets[w].text = widget.text;
    //                 res.json(widget);
    //                 return;
    //             }
    //             else if (widget.widgetType === "IMAGE") {
    //                 widgets[w].width = widget.width;
    //                 widgets[w].url = widget.url;
    //                 res.json(widget);
    //                 return;
    //             }
    //             else if (widget.widgetType === "YOUTUBE") {
    //                 widgets[w].width = widget.width;
    //                 widgets[w].url = widget.url;
    //                 res.json(widget);
    //                 return;
    //             }
    //             else if (widget.widgetType === "HTML") {
    //                 widgets[w].text = widget.text;
    //                 // widgets[w].url = widget.url;
    //                 res.json(widget);
    //                 return;
    //             }
    //             res.json(widgets[w]);
    //             return
    //         }
    //     }
    // }
    function updateWidget(req, res) {
        var widget = req.body;
        var widgetId = req.params.widgetId;
        // for (var w in widgets) {
        //     if (widgets[w]._id === widgetId) {
        //         widgets[w] = widgets;
        //         res.json(widget);
        //         return;
        //     }
        // }
        // res.sendStatus(404);
        widgetModel
            .updateWidget(widgetId, widget)
            .then(function (status) {
                res.sendStatus(200);
            }, function (error) {
                res.sendStatus(404).send(error);
            });
    }

    function deleteWidget(req, res) {
        var widgetId = req.params.widgetId;
        // for (var w in widgets) {
        //     if (widgets[w]._id === widgetId) {
        //         widgets.splice(w, 1);
        //         res.sendStatus(200);
        //         return;
        //     }
        // }
        widgetModel
            .deleteWidget(widgetId)
            .then(function (status) {
                res.sendStatus(200);
            }, function (err) {
                res.sendStatus(400).send(err);
            });
    }

    function sortWidgets(req, res) {
        var pageId = req.params.pageId;
        var initial = req.query.initial;
        var final = req.query.final;
        // var wId = [];
        // for (var w in widgets) {
        //     if (pageId === widgets[w].pageId) {
        //         wId.push(widgets[w]);
        //     }
        // }
        // widgets.splice(final, 0, widgets[inital]);
        // widgets.splice(initial, 1);
        // res.json(widgets);
        pageModel
            .reorderWidgets(pageId, initial, final)
            .then(function (status) {
                res.send(200);
            }, function (error) {
                res.send(404);
            });
        res.send(200);
    }

    var multer = require('multer'); // npm install multer --save
    var upload = multer({dest: __dirname + '/../../public/uploads'});

    app.post("/api/upload", upload.single('myFile'), uploadImage);

    function uploadImage(req, res) {

        var widgetId = req.body.widgetId;
        var width = req.body.width;
        var myFile = req.file;

        var userId = req.body.userId;
        var websiteId = req.body.websiteId;
        var pageId = req.body.pageId;

        var originalname = myFile.originalname; // file name on user's computer
        var filename = myFile.filename;     // new file name in upload folder
        var path = myFile.path;         // full path of uploaded file
        var destination = myFile.destination;  // folder where file is saved to
        var size = myFile.size;
        var mimetype = myFile.mimetype;

        widget = getWidgetById(widgetId);
        widget.url = '/uploads/' + filename;

        // var callbackUrl = ("/assignment/#/user/" + userId + "/website/" + websiteId + "/page/" + "/widget/" + widgetId);
        //
        // res.redirect(callbackUrl);
        var n_widget = {
            url: "/uploads/" + filename,
            type: "IMAGE",
            _id: widgetId,
            width: width
        };
        widgetModel
            .updateWidget(n_widget.type, n_widget)
            .then(
                function (status) {
                    res.redirect("/assignment/#!/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget/" + widgetId);
                },
                function (error) {
                    res.statusCode(404).send(error);

                }
            );


    }

    function reorderWidget(req, res) {
        var pageId = req.params.pageId;
        var start = parseInt(req.query.start);
        var end = parseInt(req.query.end);
        widgetModel
            .reorderWidget(start, end, pageId)
            .then(
                function (status) {
                    res.sendStatus(200);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                });
    }
};