module polling::poll { 

// === Imports ===
// [address_or_package]::[module_name]::[item_name]
use std::string::String;
use sui::event;
use std::address;

// === Errors ===

// === Constants ===

// === Structs ===
public struct Poll has key {
  id: UID,
  title: String,
  subtitle: String,
  from: address,
  to: address,
  value: u64,
  expiration: u64,
}

public struct PollCreated has key, copy, drop {
  id: UID, 
  title: String, 
  creator: address
}

// public struct PollCreated has key, drop {
//   id: UID,
// }

// === Events ===
// === Method Aliases ===
// === Public Functions ===
public fun create_poll(title: String, ctx: &mut TxContext) {
  let id = object::new(ctx);

  let poll = Poll {
    id,
    title,
    subtitle: b"Return of the poll.".to_string(),
    from: @0x0,
    to: @0x0,
    value: 0,
    expiration: 0,
  };

  transfer::share_object(poll);

  // emit event with the UID (or object id) so indexers can find it
  event::emit(PollCreated { id, title, creator: ctx.sender() });
}



// === View Functions ===

// === Admin Functions ===

// === Package Functions ===

// === Private Functions ===

// === Test Functions ===

}