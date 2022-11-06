import { v4 as uuidv4 } from 'uuid';

export default class Driver {
    constructor(name, birthdate, fastestLap, uuid) {
        this.name = name;
        this.birthdate = birthdate;
        this.fastestLap = fastestLap;
        if (!uuid) {
            this.uuid = uuidv4();
        }
    }
}