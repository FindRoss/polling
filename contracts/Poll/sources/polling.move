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
  subtitle: String,
  from: address,
  to: address,
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
public entry fun create_poll(
  title: String,
  ctx: &mut TxContext
 ) {
  let poll = Poll {
    id: object::new(ctx),
    title,
    subtitle: b"Hello world I am just testing.".to_string(),
    from: @0x0,
    to: @0x0,
    expiration: 0,
  };

  transfer::transfer(poll, ctx.sender());
}




// === View Functions ===

// === Admin Functions ===



// === Package Functions ===

// === Private Functions ===

// === Test Functions ===


}