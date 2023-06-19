const TronWeb = require('tronweb');

const fullNode = 'https://api.trongrid.io';
const solidityNode = 'https://api.trongrid.io';
const eventServer = 'https://api.trongrid.io';
const privateKey = "3E3B02DDD762F9C9BC25E7E38B924A1FB2EDF5BF1AD6F20DD5AED6A4DD0B52A0";

const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);
tronWeb.setHeader({"TRON-PRO-API-KEY": '6f75ed3a-cf1e-48e9-b390-d2c30e6f47e1'});

exports.createAccount = async (req, res) => {
    try {
        const account = await tronWeb.createAccount();
        res.status(200).json({ status: 'success', data: account });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getBalance = async (req, res) => {
    try {
        const address = req.params.address;
        const balance = await tronWeb.trx.getBalance(address);
        res.status(200).json({ status: 'success', data: balance });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getTokenBalance = async (req, res) => {
    try {
        const userAddress = req.params.address;
        const contractAddress = 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t';
        const contract = await tronWeb.contract().at(contractAddress);
        const balance = await contract.balanceOf(userAddress).call();
        res.status(200).json({ status: 'success', data: balance.toString() });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.sendTrx = async (req, res) => {
    try {
        const { toAddress, amount } = req.body;
        const transaction = await tronWeb.trx.sendTransaction(toAddress, amount);
        res.status(200).json({ status: 'success', data: transaction });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.sendToken = async (req, res) => {
    try {
        const { toAddress, amount, tokenID } = req.body;
        const transaction = await tronWeb.trx.sendToken(toAddress, amount, tokenID);
        res.status(200).json({ status: 'success', data: transaction });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.transactionHistory = async (req, res) => {
    try {
        const address = req.params.address;
        const transactionHistory = await tronWeb.trx.getAccount(address);
        res.status(200).json({ status: 'success', data: transactionHistory });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
};
