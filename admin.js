import kafka from "./client.js";

const init = async () => {
    const admin = kafka.admin();
    console.log('Connecting');
    await admin.connect();
    console.log('Connected');

    console.log("Creating Topics");

    await admin.createTopics({
        topics: [{
            topic: 'Rider-Updates',
            numPartitions: 2,
        }],
    })
    console.log("Topics Created");

    admin.disconnect();

    console.log("Disconnected");

};

init();


