

class Paciente{

    async listarPaciente(){
    
        fetch('http://localhost:3000/listar_pacientes')
        .then(response => {
          if (!response.ok) {
            throw new Error('Error en la solicitud');
          }
          return response.json();
        })
        .then(data => {
          // Aquí puedes trabajar con los datos obtenidos
          console.log(data);
          const dataContainer = document.getElementById('data-container');
          dataContainer.textContent = JSON.stringify(data);
        })
        .catch(error => {
          // Manejo de errores
          console.log(error);
        });
    
      
      
    }
    
    
    }
    
    
    
    const paciente = new Paciente()
    paciente.listarPaciente()
    