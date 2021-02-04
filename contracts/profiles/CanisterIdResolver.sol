pragma solidity ^0.7.4;
import "../ResolverBase.sol";

abstract contract CanisterIdResolver is ResolverBase {
    bytes4 constant private CANISTER_ID_INTERFACE_ID = 0xf734daa9;

    event CanisterIdChanged(bytes32 indexed node, bytes id);

    mapping(bytes32=>bytes) ids;

    /**
     * Sets the canisterId associated with an ENS node.
     * May only be called by the owner of that node in the ENS registry.
     * @param node The node to update.
     * @param id The canisterId to set
     */
    function setCanisterId(bytes32 node, bytes calldata id) external authorised(node) {
        ids[node] = id;
        emit CanisterIdChanged(node, id);
    }

    /**
     * Returns the canisterId associated with an ENS node.
     * @param node The ENS node to query.
     * @return The associated canisterId.
     */
    function canisterId(bytes32 node) external view returns (bytes memory) {
        return ids[node];
    }

    function supportsInterface(bytes4 interfaceID) virtual override public pure returns(bool) {
        return interfaceID == CANISTER_ID_INTERFACE_ID || super.supportsInterface(interfaceID);
    }
}
