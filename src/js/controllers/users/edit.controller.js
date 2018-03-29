angular
  .module('appres')
  .controller('UsersEditCtrl', UsersEditCtrl);

UsersEditCtrl.$inject = ['UserFactory', '$state', 'Flash'];
function UsersEditCtrl(UserFactory, $state, Flash) {
  const vm = this;

  vm.user   = UserFactory.get($state.params);
  vm.update = update;
  console.log(vm.user);

  function update(){
    UserFactory
      .update($state.params, vm.user)
      .$promise
      .then(() => {
        Flash.create('success', 'Your updates has been saved');
      });
  }
}
