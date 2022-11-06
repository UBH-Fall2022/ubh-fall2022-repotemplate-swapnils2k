import Web3 from 'web3';

let selectedAccount;
let contract;
let contractAddress;
let isInitialized = false;
export const init = async () => {
    let provider = window.ethereum;

    if(typeof provider !== 'undefined') {
      //Got metamask
      provider.request({ method: 'eth_requestAccounts' }).then(accounts => {
        selectedAccount = accounts[0];
        console.log(`Selected account is ${selectedAccount}`);
      }).catch(err => {
        console.log(err);
        return;  
      });

      window.ethereum.on('accountsChanged', function (accounts) {
        selectedAccount = accounts[0];
        console.log(`Selected account changed to ${selectedAccount}`);
      });
    }
    const web3 = new Web3(provider);

    const networkId = await web3.eth.net.getId();

    contractAddress = '0xb3a3f678c281E73C85740592AbF7ff28922E0aa4';
    const contractabi = [{"anonymous": false,"inputs": [{"indexed": false,"internalType": "address","name": "who","type": "address"},{"indexed": false,"internalType": "address","name": "to","type": "address"},{"indexed": false,"internalType": "string","name": "message","type": "string"}],"name": "message","type": "event"},{"inputs": [{"internalType": "address","name": "from","type": "address"}],"name": "accept","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address payable","name": "_to","type": "address"}],"name": "destroySmartContract","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "to","type": "address"},{"internalType": "string","name": "obj","type": "string"}],"name": "log","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "string","name": "obj","type": "string"}],"name": "registerCandidate","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "string","name": "obj","type": "string"}],"name": "registerInstitute","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "from","type": "address"}],"name": "reject","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "to","type": "address"}],"name": "request","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"stateMutability": "nonpayable","type": "constructor"},{"inputs": [{"internalType": "address","name": "","type": "address"}],"name": "candidate","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "","type": "address"},{"internalType": "address","name": "","type": "address"}],"name": "ciMap","outputs": [{"internalType": "bytes1","name": "","type": "bytes1"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "","type": "address"},{"internalType": "uint256","name": "","type": "uint256"}],"name": "ciReq","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "","type": "address"}],"name": "ciReqLen","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "","type": "address"}],"name": "institute","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"}];

    contract = new web3.eth.Contract(contractabi, contractAddress);

    isInitialized = true;
};

export const metamaskAccount = async () => {
  if(!isInitialized) {
    await init();
  }
  return selectedAccount;
}

export const requestCount = async (candidateAddress) => {
  if(!isInitialized) {
    await init();
  }
  return contract.methods.ciReqLen(candidateAddress).call();
}

export const getRequest = async (candidateAddress, num) => {
  if(!isInitialized) {
    await init();
  }
  return contract.methods.ciReq(candidateAddress, num).call();
}

export const ciMap = async (candidateAddress, instituteAddress) => {
  if(!isInitialized){
    await init();
  }
  return contract.methods.ciMap(candidateAddress, instituteAddress).call();
}

export const candidateDetails = async (address) => {
  if(!isInitialized){
    await init();
  }
  return contract.methods.candidate(address).call();
}

export const instituteDetails = async (address) => {
  if(!isInitialized){
    await init();
  }
  return contract.methods.institute(address).call();
}

export const registerCandidate = async (jsonOBJ) => {
  if(!isInitialized){
    await init();
  }
  return contract.methods.registerCandidate(jsonOBJ).send({ from: selectedAccount });
}

export const registerInstitute = async (jsonOBJ) => {
  if(!isInitialized){
    await init();
  }
  return contract.methods.registerInstitute(jsonOBJ).send({ from: selectedAccount });
}

export const request = async (address) => {
  if(!isInitialized) {
    await init();
  }
  return contract.methods.request(address).send({ from: selectedAccount });
}

export const accept = async (address) => {
  if(!isInitialized) {
    await init();
  }
  return contract.methods.accept(address).send({ from: selectedAccount });
}

export const reject = async (address) => {
  if(!isInitialized) {
    await init();
  }
  return contract.methods.reject(address).send({ from: selectedAccount });
}

export const log = async (address, jsonOBJ) => {
  if(!isInitialized) {
    await init();
  }
  return contract.methods.log(address, jsonOBJ).send({ from: selectedAccount });
}

export const readlog = async (address) => {
  if(!isInitialized) {
    await init();
  }
  return contract.getPastEvents('message', {
    filter: {"0": address},
    fromBlock: 0,
    toBlock: 'latest'
  });
}

export const destroySmartContract = async (address, jsonOBJ) => {
  if(!isInitialized) {
    await init();
  }
  return contract.methods.destroySmartContract(address, jsonOBJ).send({ from: selectedAccount });
}