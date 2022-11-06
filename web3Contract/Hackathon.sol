//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.3;
contract BlockchainProject{

    mapping(address=>mapping(address=>bytes1)) public ciMap;

    mapping(address=>address[]) public ciReq;

    mapping(address=>uint) public ciReqLen;

    mapping(address=>string) public candidate;

    mapping(address=>string) public institute;

    bytes1 Rbyte = bytes1("R");

    bytes1 Sbyte = bytes1("S");

    bytes1 Ebyte = bytes1("E");

    bytes1 Fbyte = bytes1("F");

    address payable owner;

    event message(address who, address to, string message);

    modifier onlyInstitute() {
        require(bytes(institute[msg.sender]).length>0);
        _;
    }

    modifier onlyCandidate() {
        require(bytes(candidate[msg.sender]).length>0);
        _;
    }

    constructor() {
        owner = payable(msg.sender);
    }

    function registerCandidate(string memory obj) public {
        require(!(bytes(candidate[msg.sender]).length > 0) && !(bytes(institute[msg.sender]).length > 0), "Candidate already registered");
        candidate[msg.sender] = obj;
    }

    function registerInstitute(string memory obj) public {
        require(!(bytes(institute[msg.sender]).length > 0) && !(bytes(candidate[msg.sender]).length > 0), "Institution already registered");
        institute[msg.sender] = obj;
    }

    function request(address to) public onlyInstitute {
        require((bytes(candidate[to]).length > 0) && ((ciMap[to][msg.sender] == 0x00) || (ciMap[to][msg.sender] == Fbyte)), "Candidate not registered or Institute already mapped *Check candidates and ciMap*");
        //Candidate can work for same institution only if they are not currently employed by the same institution
        ciMap[to][msg.sender] = bytes1("R");
        ciReq[to].push(msg.sender);
        ciReqLen[to]++;
    }

    function accept(address from) public onlyCandidate {
        require(ciMap[msg.sender][from].length > 0, "No request from this institution");
        //move status from "R" -> Registered to "S" -> Start
        ciMap[msg.sender][from] = bytes1("S");
        for(uint256 i = 0; i < ciReq[msg.sender].length; i++) {
             if(from == ciReq[msg.sender][i]) {
                 delete ciReq[msg.sender][i];
                 ciReqLen[msg.sender]--;
                 break;
             }
        }
    }

    function reject(address from) public onlyCandidate {
        require(ciMap[msg.sender][from] == Rbyte, "Request from this institution either does not exist or in incorrect state");
        //delete if reject from candidate
        delete ciMap[msg.sender][from];
        for(uint256 i = 0; i < ciReq[msg.sender].length; i++) {
             if(from == ciReq[msg.sender][i]) {
                 delete ciReq[msg.sender][i];
                 ciReqLen[msg.sender]--;
                 break;
             }
        }
    }

    function log(address to, string memory obj) public onlyInstitute {
        require((bytes(candidate[to]).length > 0) && (ciMap[to][msg.sender] == Sbyte || ciMap[to][msg.sender] == Ebyte), "Candidate not registered or Institute and Candidate contract ended");
        emit message(msg.sender, to, obj);
        //Proceed to next step in ciMap
        if(ciMap[to][msg.sender] == Sbyte) {
            ciMap[to][msg.sender] = bytes1("E");
        } else if(ciMap[to][msg.sender] == Ebyte) {
            ciMap[to][msg.sender] = bytes1("F");
        } else {
            revert();
        }
    }

    function destroySmartContract(address payable _to) public {
        require(msg.sender == owner, "You are not the owner");
        selfdestruct(_to);
    }
}