module polling::poll { 

// === Imports ===
// [address_or_package]::[module_name]::[item_name]
use std::string::String;


// === Errors ===

// === Constants ===

// === Structs ===
public struct Poll has key {
  id: UID,
  title: String,
  description: String,
  expiration: u64,
}

// === Events ===
// === Method Aliases ===
// === Public Functions ===
#[allow(lint(public_entry))]
public entry fun ping(_ctx: &mut TxContext) {
  // no-op
} 

#[allow(lint(public_entry))]
public entry fun create(
  title: String, 
  description: String, 
  expiration: u64,
  ctx: &mut TxContext
): ID {
  
  let poll: Poll = Poll {
    id: object::new(ctx),
    title, 
    description, 
    expiration
  };

  let id = poll.id.to_inner();
  transfer::share_object(poll);

  id
}


// === View Functions ===

// === Admin Functions ===



// === Package Functions ===

// === Private Functions ===

// === Test Functions ===


}