import kafka from "./client.js";


const init = async () => {
    const consumer = kafka.consumer({ groupId: 'User-1' });
    await consumer.connect();
    await consumer.subscribe({ topics: ['Rider-Updates'], fromBeginning: true });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log(`📩 Received message: ${message.value.toString()} on topic ${topic}, partition ${partition}`);
        },

        // eachBatch: async ({ batch }) => {
        //     console.log(batch.length);
        // },

        // eachPartition: async ({ topic, partitions }) => {
        //     console.log(partitions.length);
        // },

    });
    // await consumer.disconnect();
    // console.log('Disconnected consumer');
}

init();