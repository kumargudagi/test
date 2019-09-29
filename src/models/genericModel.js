var coremodel = {};
import mongoose from "mongoose";
import mongooseIncrement from 'mongoose-increment'
let increment = mongooseIncrement(mongoose);

// eslint-disable-next-line max-params
coremodel.addIncrement = async (collection, schema, field, startVal, incVal, unique) => {
    schema.plugin(increment, {
        start: startVal,
        modelName: collection,
        fieldName: field,
        unique: unique,
        increment: incVal
    });
}
export default coremodel;