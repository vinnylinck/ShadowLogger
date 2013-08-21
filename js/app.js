angular.module("MyApp",[])

.config(["$provide",function($provide){
    
    $provide.decorator("$log",function($delegate,shadowLogger){
        return shadowLogger($delegate);
    });
    
}])

.run(["$log",function($log){
    $log.warn("This is my log message!");
}]);




angular.module("MyApp").factory("shadowLogger",function(){
    return function($delegate){
        return  {
            log: function(){
            },
            info: function(){
            },
            error: function(){
            },
            warn:function(){
                $delegate.warn(arguments);
                console.log("SHADOW: ",arguments);
            }
        };
    };
});

