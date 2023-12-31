const checkName = (req, res, next) => {
    console.log("name is being checked");
    if (req.body.name) {
        console.log("we've got a name here!");
        next(); // Include next() to proceed to the next middleware or route handler
    } else {
        res.status(400).json({ error: "We need a name..." });
    }
};

const checkLocation = (req, res, next) => {
    console.log("location is being checked");
    if (req.body.location) {
        console.log("we've got a location here!");
        next(); // Include next() to proceed to the next middleware or route handler
    } else {
        res.status(400).json({ error: "We need a location..." });
    }
};

const checkPrice = (req, res, next) => {
    const { price } = req.body;
    const priceRegex = /^\d+(\.\d{1,2})?$/; // Regular expression to validate price format

    if (typeof price === 'number' && priceRegex.test(String(price))) {
        next();
    } else {
        res.status(400).json({ error: 'Price should be a number with up to two decimal places.' });
    }
};

const checkQuantity = (req, res, next) => {
    const { quantity } = req.body;

    if (typeof quantity === 'number' && quantity > 0) {
        next();
    } else {
        res.status(400).json({ error: 'Quantity should be a positive number.' });
    }
};

const checkPopulation = (req, res, next) => {
    const { population } = req.body;

    if (Number.isBigInt(population)) {
        next();
    } else {
        res.status(400).json({ error: 'Population should be a BigInt.' });
    }
};


const validateUrl = (req, res, next) => {
    if (
        req.body.url.substring(0, 7) === "http://" || 
        req.body.url.substring(0, 8) === "https://"
    ) {
        console.log("URL checks out!")
        next();
    } else {
        res.status(400).json({error: "Tim noticed your URL does not match 'http://' or 'https://' "})
    }
}
const validateJSONKeys = (data, requiredKeys) => {
    try {
        const parsedData = JSON.parse(data);
        const dataKeys = Object.keys(parsedData);
            if (!dataKeys) {
                return false;
            }
        return true
    } catch (error) {
        return false;
    }
};

const checkFilms = (req, res, next) => {
    const { films } = req.body;
    if (typeof films === 'string' (films)) {
        next();
    } else {
        res.status(400).json({ error: 'Films should be a valid JSON object'});
    }
};

const checkResidents = (req, res, next) => {
    const { residents } = req.body;
    const requiredKeys = ['residents'];
    if (typeof residents === 'string' && validateJSONKeys(residents, requiredKeys)) {
        next();
    } else {
        res.status(400).json({ error: 'Residents should be a valid JSON object with a "residents" key.' });
    }
};

const checkSpecies = (req, res, next) => {
    const { species } = req.body;
    const requiredKeys = ['species'];
    if (typeof species === 'string' && validateJSONKeys(species, requiredKeys)) {
        next();
    } else {
        res.status(400).json({ error: 'Species should be a valid JSON object with a "species" key.' });
    }
};

const checkTemperature = (req, res, next) => {
    const { temperature } = req.body;
    if (temperature === undefined || typeof temperature !== 'number') {
        res.status(400).json({ error: 'Temperature should be a number.' });
    } else {
        next();
    }
};
  
module.exports = { checkName, checkLocation, checkPrice, checkQuantity, checkPopulation, validateJSONKeys, checkFilms, checkResidents, checkSpecies, checkTemperature, validateUrl };

