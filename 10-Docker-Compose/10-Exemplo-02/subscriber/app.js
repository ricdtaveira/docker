const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://mqtt_broker_address'); // Substitua pelo endereço do broker MQTT

client.on('connect', () => {
  console.log('Subscriber connected to MQTT broker');

  client.subscribe('topic', (err) => {
    if (err) {
      console.error('Erro ao se inscrever no tópico:', err);
    }
  });
});

client.on('message', (topic, message) => {
  console.log(`Mensagem recebida no tópico '${topic}': ${message.toString()}`);
});

client.on('error', (error) => {
  console.error('Erro de conexão:', error);
  client.end();
});
