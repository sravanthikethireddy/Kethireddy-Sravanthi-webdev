module.exports = function(app){
    app.post('/api/website/:websiteId/page', createPage);
    app.get('/api/website/:websiteId/page', findAllPagesByWebsiteId);
    app.get('/api/page/:pageId', findPageById);
    app.put('/api/page/:pageId', updatePage);
    app.delete('/api/page/:pageId', deletePage);

    var pages = [
        {"_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem"},
        {"_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem"},
        {"_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem"}
    ];

    function createPage(req, res) {
        var websiteId = req.params.websiteId;
        var page = req.body;
        page._id = (new Date()).getTime() + "";
        page.websiteId = websiteId;
        pages.push(page);
        res.json(page);
    }

    function findAllPagesByWebsiteId(req, res) {
        var websiteId = req.params.websiteId;
        var reqpages = [];
        for (var p in pages) {
            if (pages[p].websiteId === websiteId) {
                reqpages.push(pages[p]);
            }
        }
        res.json(reqpages);
    }


    function findPageById(req, res) {
        var pageId = req.params.pageId;
        var page = pages.find(function (p) {
            return p._id === pageId;
        });
        res.json(page);
    }


    function updatePage(req, res) {
        var pageId = req.params.pageId;
        var page = req.body;
        for (p in pages) {
            if (pages[p]._id === pageId) {
                pages[p].name = page.name;
                pages[p].description = page.description;
                res.json(pages[p]);
                return;
            }
        }
    }

    function deletePage(req, res) {
        var pageId = req.params.pageId;
        for (p in pages) {
            if (pages[p]._id === pageId) {
                pages.splice(p, 1);
                res.sendStatus(200);
                return;
            }
        }
        res.sendStatus(404);
    }



};