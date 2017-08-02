(function () {
    angular
        .module('wdvDirectives',[])
        .directive('wdvSortable',wdvSortable);
    function wdvSortable(){
        function linkFunction(scope,element,attributes) {
            var initial;
            var final;
            element.sortable({
                axis:'y',
                start : function (event,ui) {
                    initial=ui.item.index();
                },
                stop : function (event,ui) {
                    final=ui.item.index();
                    scope.wdvCallBack({
                        iniital : initial,
                        final: final
                    });
                }
            });
        }
        return{
            scope:{wdvCallBack:'&'},
            link:linkFunction()
        };
    }
})();