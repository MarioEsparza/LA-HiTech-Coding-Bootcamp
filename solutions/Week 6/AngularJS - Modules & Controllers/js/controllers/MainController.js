menuApp.controller('MainController', ['$scope', function ($scope) {
    $scope.today = new Date();

    $scope.appetizers = [
      {
          name: 'Caprese',
          description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
          price: 4.95
      },
      {
          name: 'Mozzarella Sticks',
          description: 'Served with marinara sauce.',
          price: 3.95
      },
      {
          name: 'Bruschetta',
          description: 'Grilled bread, garlic, tomatoes, olive oil.',
          price: 4.95
      }
    ];
    $scope.mains = [
     {
         name: 'Pizze Pie Slice',
         description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
         price: 4.95
     },
     {
         name: 'Cup Ramen',
         description: 'Served with marinara sauce.',
         price: 13.95
     },
     {
         name: 'Poke Bowl',
         description: 'Grilled bread, garlic, tomatoes, olive oil.',
         price: 11.95
     }
    ];
    $scope.sides = [
     {
     name: 'Breadsticks',
     description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
     price: 4.95
     },
    {
     name: 'Sodie Pop',
     description: 'Served with marinara sauce.',
     price: 4.20
    },
     {
     name: 'Salad',
     description: 'Grilled bread, garlic, tomatoes, olive oil.',
     price: 11.95
    }
    ];

}]);

console.log("CONTROL JS")