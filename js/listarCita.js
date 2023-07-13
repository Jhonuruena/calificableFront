

class Cita{

    async listarCita(){
    
        fetch('http://localhost:3000/listar_citas')
        .then(response => {
          if (!response.ok) {
            throw new Error('Error en la solicitud');
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
          const dataContainer = document.getElementById('data-container');
          dataContainer.textContent = JSON.stringify(data);
        })
        .catch(error => {
          console.log(error);
        });
    
      
      
    }
    
    
    }
    
    
    
    const cita = new Cita()
    cita.listarCita()
    



