const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//ejercicio1
/*function saludar(nombre, callback) {
    const saludo = `Hola, ${nombre}!`;
    callback(saludo);
}

function mostrarSaludo(mensaje) {
    console.log(mensaje);
}

rl.question('Por favor, introduce tu nombre: ', (nombre) => {
    saludar(nombre, mostrarSaludo);
    rl.close();
});*/

//ejercicio2
/*function multiplicarPromise(a, b) {
    return new Promise((resolve, reject) => {
      if (typeof a !== 'number' || typeof b !== 'number') {
        reject(new Error('Ambos argumentos deben ser números'));
      } else {
        resolve(a * b);
      }
    });
}

rl.question('Introduce el primer número: ', (input1) => {
    const a = parseFloat(input1);

    rl.question('Introduce el segundo número: ', (input2) => {
      const b = parseFloat(input2);
  
      multiplicarPromise(a, b)
        .then(result => {
          console.log(`El resultado de multiplicar ${a} y ${b} es: ${result}`);
          rl.close();
        })
        .catch(err => {
          console.error(err.message);
          rl.close();
        });
    });
});*/

//ejercicio3
/*function multiplicarPromise(a, b, callback) {
    return new Promise((resolve, reject) => {
      if (typeof a !== 'number' || typeof b !== 'number') {
        const error = new Error('Ambos argumentos deben ser números');
        reject(error);
        callback(error, null); // Llamada al callback en caso de error
      } else {
        const result = a * b;
        resolve(result);
        callback(null, result); // Llamada al callback con el resultado
      }
    });
  }
  
  rl.question('Introduce el primer número: ', (input1) => {
    const a = parseFloat(input1);
  
    rl.question('Introduce el segundo número: ', (input2) => {
      const b = parseFloat(input2);
  
      multiplicarPromise(a, b, (error, result) => {
        if (error) {
          console.error(error.message);
        } else {
          console.log(`El resultado de multiplicar ${a} y ${b} es: ${result}`);
        }
        rl.close();
      })
      .catch(err => {
        // Este catch es redundante ya que el error se maneja en el callback
        console.error(err.message);
        rl.close();
      });
    });
  });*/

  //ejercicio 4
  /*function retrasarPromesa(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

rl.question('Introduce el tiempo en milisegundos: ', (input) => {
    const ms = parseInt(input, 10);

    if (isNaN(ms)) {
      console.log('Por favor, introduce un número válido.');
      rl.close();
      return;
    }
  
    console.log(`Esperando ${ms} milisegundos...`);
  
    retrasarPromesa(ms).then(() => {
      console.log(`Pasaron ${ms} milisegundos.`);
      rl.close();
    });
  });*/

  //ejercicio 5
  /*function operacionAsincronica(callback) {
    setTimeout(() => {
      callback('Operación completada');
    }, 4000); 
  }
  
  operacionAsincronica(resultado => {
    console.log(resultado);
    rl.close();
  });
  console.log('Realizando operación asincrónica...');*/

  // ejercicio 6
/*function operacion(numero) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const resultado = numero * 2;
        resolve(resultado);
      }, 1000);
    });
  }
  
  function solicitarNumero() {
    return new Promise((resolve, reject) => {
      rl.question('Introduce un número: ', (numero) => {
        resolve(parseInt(numero));
      });
    });
  }
  
  function encadenarPromesas() {
    solicitarNumero()
      .then((numero1) => {
        return operacion(numero1);
      })
      .then((resultado1) => {
        console.log('El resultado de la primera operación es:', resultado1);
        return solicitarNumero();
      })
      .then((numero2) => {
        return operacion(numero2);
      })
      .then((resultado2) => {
        console.log('El resultado de la segunda operación es:', resultado2);
        rl.close();
      })
      .catch((error) => {
        console.error('Ha ocurrido un error:', error);
        rl.close();
      });
  }
  
  // Iniciamos la cadena de promesas
  encadenarPromesas();*/

  //ejercicio 7
  /*function dividir(numero1, numero2, callback) {
    if (numero2 === 0) {
        callback(new Error("No se puede dividir por cero"));
    } else {
        callback(null, numero1 / numero2);
    }
}

rl.question('Ingrese el primer número: ', (numero1) => {
    rl.question('Ingrese el segundo número: ', (numero2) => {
      numero1 = parseFloat(numero1);
      numero2 = parseFloat(numero2);
  
      dividir(numero1, numero2, (error, resultado) => {
        if (error) {
          console.log("Error:", error.message);
        } else {
          console.log("El resultado de la división es:", resultado);
        }
        rl.close();
      });
    });
  });*/

  //ejercicio 8
  /*function dividir(numero1, numero2) {
    return new Promise((resolve, reject) => {
      if (numero2 === 0) {
        reject(new Error("No se puede dividir por cero"));
      } else {
        resolve(numero1 / numero2);
      }
    });
  }
  
  rl.question('Ingrese el primer número: ', (numero1) => {
    rl.question('Ingrese el segundo número: ', (numero2) => {
      numero1 = parseFloat(numero1);
      numero2 = parseFloat(numero2);
  
      dividir(numero1, numero2)
        .then(resultado => {
          console.log("El resultado de la división es:", resultado);
        })
        .catch(error => {
          console.log("Error:", error.message);
        })
        .finally(() => {
          rl.close();
        });
    });
  });*/

  //ejercicio 9
  // Función asincrónica simulada que toma un tiempo aleatorio para completarse
/*function asyncFunction(id) {
    return new Promise(resolve => {
      const randomTime = Math.random() * 1000; // Simulamos un tiempo de ejecución aleatorio
      setTimeout(() => {
        console.log(`Tarea ${id} completada`);
        resolve(id); // Resolvemos la promesa con el ID de la tarea completada
      }, randomTime);
    });
  }
  
  // Creamos un array de funciones asincrónicas
  const asyncFunctions = [];
  for (let i = 1; i <= 3; i++) {
    asyncFunctions.push(() => asyncFunction(i));
  }
  
  // Función para ejecutar las funciones asincrónicas en paralelo
  async function executeParallelAsyncFunctions(asyncFunctions) {
    const results = await Promise.all(asyncFunctions.map(func => func()));
    console.log('Resultados:', results);
    rl.close(); // Cerramos la interfaz de lectura
  }
  
  // Ejecutamos las funciones asincrónicas en paralelo
  executeParallelAsyncFunctions(asyncFunctions).then(() => {
    console.log('Todas las tareas han sido completadas');
  });*/

  //ejercicio 10
  function simulateAsyncTask(taskName, time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`${taskName} completada.`);
        resolve();
      }, time);
    });
  }

  function askQuestion(question) {
    return new Promise((resolve, reject) => {
      rl.question(question, (answer) => {
        resolve(answer);
      });
    });
  }
  
  // Array de promesas
  const promises = [
    simulateAsyncTask("Tarea 1", 2000),
    simulateAsyncTask("Tarea 2", 3000),
    askQuestion("Ingresa un valor: ")
  ];
  
  // Utilizando Promise.all para esperar a que todas las promesas se resuelvan
  Promise.all(promises)
    .then((results) => {
      console.log("Todas las promesas se han completado.");
      console.log("Resultados:", results);
      rl.close();
    })
    .catch((error) => {
      console.error("Se ha producido un error:", error);
      rl.close();
    });