
#[test_only]
module polling::polling_tests;

use sui::tx_context::TxContext;
// uncomment this line to import the module
// use polling::polling;

const ENotImplemented: u64 = 0;

#[test]
fun test_polling() {
    // pass
}

#[test, expected_failure(abort_code = ::polling::polling_tests::ENotImplemented)]
fun test_polling_fail() {
    abort ENotImplemented
}

#[test]
fun create_simple_poll() {
    let title = b"This is my test poll".to_string();
    let ctx = &mut TxContext;


    polling::poll::create_poll(
        title, 
        ctx.sender()
    )
}

