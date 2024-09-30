const { AdSoyadMaas } = require('../models/auth.js')

exports.create = async (req, res) => {
    try {
        const { ad, soyad, maas, published } = req.body;
        const newRecord = await AdSoyadMaas.create({  ad, soyad, maas, published })
        res.status(201).json(newRecord)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

exports.findAll = async (req, res) => {
    try {
        const records = await AdSoyadMaas.findAll()
        res.status(200).json(records);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.findOne = async (req, res) => {
    try {
        const id = req.params.id;
        const record = await AdSoyadMaas.findByPk(id)
        if (record) {
            res.status(200).json(record);
        } else {
            res.status(404).json({ message: 'Record not found' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

exports.update = async (req, res) => {
    try {
        const id = req.params.id
        const { ad, soyad, maas, published } = req.body
        const [updated] = await AdSoyadMaas.update({ ad, soyad, maas, published }, {
            where: { id }
        });
        if (updated) {
            const updatedRecord = await AdSoyadMaas.findByPk(id)
            res.status(200).json(updatedRecord);
        } else {
            res.status(404).json({ message: 'Record not found' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

exports.delete = async (req, res) => {
    try {
        const id = req.params.id
        const deleted = await AdSoyadMaas.destroy({
            where: { id }
        });
        if (deleted) {
            res.status(204).send()
        } else {
            res.status(404).json({ message: 'Record not found' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};
