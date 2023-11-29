import { connect } from 'mqtt';

const client = connect('mqtt://mqtt_broker_address'); // Substitua pelo endereço do broker MQTT

client.on('connect', () => {
  console.log('Publisher connected to MQTT broker');

  // Publica uma mensagem a cada 5 segundos
  setInterval(() => {
    client.publish('topic', 'Mensagem do Publisher');
    console.log('Mensagem enviada');
  }, 5000);
});

client.on('error', (error) => {
  console.error('Erro de conexão:', error);
  client.end();
});
