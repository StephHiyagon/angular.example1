angular.module('appFirst', ["ui.router"])
.component('componentPrincipal', {
  template: `<nav>
              <ul>
                <li ui-sref="principal" ui-sref-active="active">Principal</li>
                <li ui-sref="secundario" ui-sref-active="active">Secundario</li>
              </ul>
            </nav>`
})

// .component('')

.config(function($stateProvider) {
  var firstState = {
    name: 'principal',
    url: '/principal',
    template: '<h3>Esta es la parte Principal!</h3>'
  }

  var secondState = {
    name: 'secundario',
    url: '/secundario',

    template: `<h3>Completar datos!</h3>
                 <hr>
                 <p>Ingrese su tiempo</p>
                 <input type="number">
                 <select>
                   <option>horas</option>
                   <option>minutos</option>
                   <option>segundos</option>
                 </select>
                 <br>
                 <input type="number">
                 <select>
                   <option>S/.</option>
                   <option>$</option>
                 </select>
                 <button ng-disabled="$ctrl.result">Enviar</button>
                 `

     }
    // controller:
    //   class {
    //     constructor(){
    //       this.result = true;
    //     }
    //     // validar(){
    //     //   console.log($ctrl.result);
    //     //   return $ctrl.result;
    //     // }
    //   },


    // }

  $stateProvider.state(firstState);
  $stateProvider.state(secondState);
});

document.addEventListener('DOMContentLoaded', function(){
  angular.bootstrap(document, ['appFirst']);
})
