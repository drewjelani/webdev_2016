(function(){
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController(UserService, $location) {
        var vm = this;
        vm.register = register;

        function register(username, password) {
            UserService
                .createUser(username, password)
                .success(function(user){
                    console.log("the user is u" +user + " [register.controller]");
                    $location.url("/user/"+user._id);
                })
                .error(function (error) {

                });
        }
    }
})();
