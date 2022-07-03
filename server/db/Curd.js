const { Registration, Admin } = require('./Schema');

// Insertion
async function insertRegistration(data) {

    let response = {}

    try {
        const registration = await Registration.find({ roll: data.roll })
        if (registration.length > 0) {
            response = {
                messageType: "warning",
                message: "You are already Registered in " + registration[0].participation
            }
        }
        else {
            const result = await new Registration(data).save();
            response = {
                messageType: "success",
                message: "Registered Successfully",
                data: result
            }
        }
    } catch (error) {
        response = {
            messageType: "error",
            message: error
        }
    }

    return response;

}
async function insertAdmin(data) {

    try {
        const result = await new Admin(data).save();
        return result;

    } catch (error) {
        console.log(error);
    }

}

// Updation

async function updateAdmin(_id, data) {

    try {
        const result = await Admin.findByIdAndUpdate({ _id }, {
            $set: data
        });
        return result;

    } catch (error) {
        console.log(error);
    }
}
async function updateResitration(_id, data) {

    try {
        const result = await Registration.findByIdAndUpdate({ _id }, {
            $set: data
        });
        return result;

    } catch (error) {
        console.log(error);
    }
}

// Deletion

async function deleteRegistration(_id) {
    try {
        const result = await Registration.findByIdAndDelete({ _id });
        return result;

    } catch (error) {
        console.log(error);
    }
}

async function deleteAdmin(_id) {
    try {
        const result = await Admin.findByIdAndDelete({ _id });
        return result;
    } catch (error) {
        console.log(error);
    }
}

// Fetching

async function fetchRegistration(data) {

    const result = await Registration.find(data).sort({ roll: 1 });
    const count = await Registration.find(data).countDocuments();
    return { result, count };
}

async function fetchAdmin(data) {

    const result = await Admin.find(data).sort();
    const count = await Admin.find(data).countDocuments();
    return { result, count };
}


module.exports = {
    insertRegistration,
    insertAdmin,
    updateAdmin,
    updateResitration,
    deleteRegistration,
    deleteAdmin,
    fetchRegistration,
    fetchAdmin
};