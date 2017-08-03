module.exports = function (app) {
    app.post('/api/page/:pageId/widget', createWidget);
    app.get('/api/page/:pageId/widget', findAllWidgetsForPage);
    app.get('/api/page/:pageId/widget', findWidgetsByPageId);
    app.get('/api/widget/:widgetId', findWidgetById);
    app.put('/api/widget/:widgetId', updateWidget);
    app.delete('/api/widget/:widgetId', deleteWidget);
    app.put("/api/page/:pageId/widget?initial=initial&final=final", sortWidgets);
    var widgets = [
        {"_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
        {"_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        {
            "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
            "url": "http://lorempixel.com/400/200/"
        },
        {"_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
        {"_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        {
            "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
            "url": "https://youtu.be/AM2Ivdi9c4E"
        },
        {"_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
    ];

    // function createWidget(req, res) {
    //     var widget = req.body;
    //     var pageId = req.params.pageId;
    //     if (widget.type === "HEADER") {
    //         var newWidget = {
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
    //         var newWidget = {
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
    //         var newWidget = {
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
    //         var newWidget = {
    //             _id: (new Date()).getTime() + "",
    //             pageId: pageId,
    //             // size: widget.size,
    //             widgetType: widget.type,
    //             text: widget.text
    //
    //
    //         };
    //     }
    //     widgets.push(newWidget);
    //     res.json(newWidget);
    // }
    function createWidget(req,res) {
        var widget = req.body;
        var pageId = req.params.pageId;
        widget._id=(new Date()).getTime()+"";
        widget.pageId=pageId;
        widgets.push(widget);
        res.json(widget);
    }

    function findAllWidgetsForPage(req, res) {
        var pageId = req.params.pageId;
        var wid = [];
        for (w in widgets) {
            if (widgets[w].pageId === pageId) {
                wid.push(widgets[w]);
            }
        }
        res.json(wid);
    }

    function findWidgetsByPageId(req, res) {
        var pageId = req.params.pageId;
        var wid = [];
        for (w in widgets) {
            if (widgets[w].pageId === pageId) {
                wid.push(widgets[w]);
            }
        }
        res.json(wid);
    }

    function findWidgetById(req, res) {
        var widgetId = req.params.widgetId;
        for (var w in widgets){
            if(widgets[w]._id===widgetId){
                res.send(widgets[w]);
                return;
            }
        }
        res.sendStatus(404);
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
    function updateWidget(req,res) {
        var widget = req.body;
        var widgetId = req.params.widgetId;
        for (var w in widgets){
            if(widgets[w]._id===widgetId){
                widgets[w]=widgets;
                res.json(widget);
                return;
            }
        }
        res.sendStatus(404);
    }

    function deleteWidget(req, res) {
        var widgetId = req.params.widgetId;
        for (var w in widgets) {
            if (widgets[w]._id === widgetId) {
                widgets.splice(w, 1);
                res.sendStatus(200);
                return;
            }
        }
    }

    function sortWidgets(req, res) {
        var pageId = req.params.pageId;
        var initial = req.query.initial;
        var final = req.query.final;
        var wId = [];
        for (var w in widgets) {
            if (pageId === widgets[w].pageId) {
                wId.push(widgets[w]);
            }
        }
        widgets.splice(final, 0, widgets[inital]);
        widgets.splice(initial, 1);
        res.json(widgets);
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

        var callbackUrl = ("/assignment/#/user/" + userId + "/website/" + websiteId + "/page/" + "/widget/" + widgetId);

        res.redirect(callbackUrl);


    }
};