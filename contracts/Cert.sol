// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract Cert {
    address admin;

    event Issued(uint256, string);
    event Uploaded(uint256, bytes);

    constructor() {
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Access Denied");
        _;
    }

    struct Certificate {
        string name;
        string course;
        string grade;
        string date;
    }

    mapping(uint256 => Certificate) public Certificates;
    mapping(uint256 => bytes) public Documents;

    function issueCertificate(
        uint256 _id,
        string memory _name,
        string memory _course,
        string memory _grade,
        string memory _date
    ) public onlyAdmin {
        Certificates[_id] = Certificate(_name, _course, _grade, _date);
        emit Issued(_id, _date);
    }

    function uploadDocument(uint256 _id, bytes memory _hash) public onlyAdmin {
        Documents[_id] = _hash;
        emit Uploaded(_id, _hash);
    }
}
