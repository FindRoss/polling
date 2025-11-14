
#[test_only]
module polling::polling_tests;

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
fun create_simple_poll(): ID {


    let title = b"This is my test poll".to_string();
    let description = (b"Description of my test poll.".to_string());
    let expiration = 1000;
    let ctx = &TxContext;

    polling::poll::create(
        title, 
        description, 
        expiration,
        ctx.sender()
    )
}

