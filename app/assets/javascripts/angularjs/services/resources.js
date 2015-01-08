guitarApp.factory('GuitarRes',function($resource){
  return $resource('api/v1/guitars/:id',{id: '@id'},{
    'update': { method:'PUT' }
  });
});