// SPDX-License-Identifier: MIT

pragma solidity 0.8.13;

import "./SoulBoundToken.sol";

contract SoulBoundSkill is SoulBoundToken {

    struct Skill {
        uint id;
        string name;
        string description;
        string[] proof;
        uint[] barters;
    }

    Skill[] public skills; 

    constructor(
        string memory name_,
        string memory symbol_,
        string memory baseURI_
    ) SoulBoundToken(name_, symbol_, baseURI) {}

    function tokenURI(uint256 id) public view virtual override returns (string memory){
        return _baseURI();
    }


    function mint(
        string memory skillName,
        string memory skillDescription,
        string[] memory proofOfSkills
    ) public {
        Skill memory skill;
        skill.id = skills.length;
        skill.name = skillName;
        skill.description = skillDescription;
        skill.proof = proofOfSkills;

        skills.push(skill);

        mintToSoul(msg.sender, skills.length);
    }
}