import { connect as _connect } from 'mongoose';
import { config } from 'dotenv';

config();

async function connect() {
    try {
        await _connect(process.env.MONGO_URL);
        console.log("Connect successfully");
    } catch (error) {
        console.log("Connect failed");
    }
};

export default {  connect };
