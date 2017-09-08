angular.module('appFirst', [])
.component('componentNav', {
  template: `<nav>
              <ul>
                <li>Principal</li>
                <li>Secundario</li>
              </ul>
            </nav>`
})

.component('componentMain', {
  controller:
    class {
      constructor(){
        this.tiempo = [{name:'horas'},{name:'minutos'},{name:'segundos'}];
        this.mytime;
        this.moneda = [{name:'$'},{name:'S/.'}]
        this.boton = true;
        this.time;
        this.coin;
        this.timeMoney;
        // this.item1;
        this.count = 0;

      }

      validar(valor1){
        // console.log(valor1.target.value)
        console.log(this.timeMoney.$error.required);
        // console.log(valor1.trim());

        // if(valor1 != ''){
        //   // this.item1 = valor1;
        //   // this.boton = false;
        //   console.log(valor1)
        //   this.count++;
        // }
        if(this.timeMoney.$error.required ==undefined){
          console.log('desbloquea boton')
          this.boton = false;
        }else{
          this.boton = true;
        }

      //   if(this.count == 4){
      //     console.log('desbloquea boton')
      //     this.boton = false;
      //   }
      // }


        // cambio(item1) {
        //   console.log(item1);
        //   if(!item1){
        //     console.log('primer input no vacío');
        //   }
        //   //validar ambos inputs y el select que esta seleccionado
        }




    },
  template: `<h3>Completar datos!</h3>
               <hr>
               <form name="$ctrl.timeMoney" nonValidate>
               <p>Ingrese su tiempo</p>
               <input type="number" ng-model="$ctrl.time" ng-blur="$ctrl.validar()" name="timeInput" required>
               <select name="select1" ng-model="$ctrl.mytime" ng-options="t.name for t in $ctrl.tiempo" ng-change="$ctrl.validar()" required>
               <option value="">--Escoge una opción --</option>
               </select>
               <br>
               <input type="number" ng-model="$ctrl.coin" ng-blur="$ctrl.validar()" name="coinInput" required>
               <select name="select2" ng-model="mymoney" ng-options="m.name for m in $ctrl.moneda" ng-change="$ctrl.validar()" required>
                 <option value="">-- Escoge una moneda --</option>
               </select>
               <button ng-disabled="$ctrl.boton">Enviar</button>
               </form>
               `
})

//antes en vez de $event le pasaba el valor de ng-model

document.addEventListener('DOMContentLoaded', function(){
  angular.bootstrap(document, ['appFirst']);
})

// necesito un elemento padre que se entere y se comunique con ambos hijos...que hay un ng-if...en los componentes hijos y que dependa de si haces click en algun tab
