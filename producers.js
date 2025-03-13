import kafka from "./client.js";

const init = async () => {
    const producer = kafka.producer();
    console.log('Connecting producer');
    await producer.connect();
    console.log('Connected producer');
    
    const topic = 'Rider-Updates';
    const message = JSON.stringify({
        riderId: 1,
        name: 'John Doe',
        age: 30,
    });
    await producer.send({
        topic,
        partition: 0,
        messages: [
            { key: 'Location Update', value: message },
            { key: 'Location Update', value: message },
            { key: 'Location Update', value: message },
        ],
    });

    await producer.disconnect();
    console.log('Disconnected Producer');

    
}
console.log('Starting Producer');
init();