// SPDX-License-Identifier: MIT

pragma solidity 0.8.13;

import "solmate/tokens/ERC721.sol";

/**
 * @dev Implementation of Soul Bound Token concept, introduced by Vitalik Buterin in the paper
 * https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4105763. As in it's nature, SBTs are non-transferable
 * ERC721s, the propsed implementation extends the widely known ERC721 contract, by overriding all methods related
 * to transfers. Several additional functions are added for issuing and revoking SBTs, using the respective modifiers.
 */
abstract contract SoulBoundToken is ERC721 {
    address public creator;
    string public baseURI;

    event MintSoulBoundToken(address to, uint256 tokenId);
    event RevokeSoulBoundToken(address revoker, uint256 tokenId);

    modifier onlySBTCreator() {
        require(
            msg.sender == creator,
            "SoulBound Token: Only SBT Creator Can Issue Tokens"
        );
        _;
    }

    constructor(
        string memory name_,
        string memory symbol_,
        string memory baseURI_
    ) ERC721(name_, symbol_) {
        creator = msg.sender;
        baseURI = baseURI_;
    }

    /**
     * @dev Mint To Soul for minting not-transferable Soul Bound Token
     * Only the contract creator can mint SBTs
     */
    function mintToSoul(address to, uint256 tokenId)
        public
        virtual
        onlySBTCreator
    {
        _mint(to, tokenId);
        emit MintSoulBoundToken(to, tokenId);
    }

    /**
     * @dev Revoke Soul Bound Token for revoking and burning the SBT
     * Only the SBT owner can revoke owned SBT
     */
    function revokeSoulBoundToken(uint256 tokenId) public virtual {
        require(
            ownerOf(tokenId) == msg.sender,
            "SoulBound Token: Only owner can revoke"
        );
        _burn(tokenId);
        emit RevokeSoulBoundToken(msg.sender, tokenId);
    }

    /**
     * @dev Base URI for computing {tokenURI}. If set, the resulting URI for each
     * token will be the concatenation of the `baseURI` and the `tokenId`. Empty
     * by default, can be overriden in child contracts.
     */
    function _baseURI() internal view returns (string memory) {
        return baseURI;
    }

    /**
     * @dev Override with empty implementation, as the method is N.A.
     */
    function approve(address to, uint256 tokenId) public override {
        revert("SoulBound Token: Operation not supported");
    }

    /**
     * @dev Override with empty implementation, as the method is N.A.
     */
    function setApprovalForAll(address operator, bool approved)
        public
        override
    {
        revert("SoulBound Token: Operation not supported");
    }

    /**
     * @dev Override with empty implementation, as the method is N.A.
     */
    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public override {
        revert("SoulBound Token: Operation not supported");
    }

    /**
     * @dev Override with empty implementation, as the method is N.A.
     */
    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes memory _data
    ) public override {
        revert("SoulBound Token: Operation not supported");
    }

    /**
     * @dev Override with empty implementation, as the method is N.A.
     */
    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public override {
        revert("SoulBound Token: Operation not supported");
    }
}
