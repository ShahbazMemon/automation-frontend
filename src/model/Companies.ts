import mongoose,{Schema} from "mongoose";

const ComoanySchema = new Schema({},{
    timestamps: true
});

const Company = mongoose.model('Company',ComoanySchema);
module.exports = Company;