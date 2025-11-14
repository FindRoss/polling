
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

