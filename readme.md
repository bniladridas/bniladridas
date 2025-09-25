At commit **58f6fea**, [PR #23](https://github.com/harpertoken/harper/pull/23) fixes a database initialization bug in Harper’s tests. It resolves failures caused by improper handling of SQLite `PRAGMA` statements, ensuring consistent CI results across platforms. See [issue #25](https://github.com/harpertoken/harper/issues/25) for details.

The bug occurred because `conn.execute()` was used for `PRAGMA journal_mode=WAL`, which returns results and triggered “Execute returned results” errors. This has been corrected by switching to `conn.execute_batch()`. All tests now pass in local and CI runs.

At commit **b74a1e4**, [PR #21](https://github.com/harpertoken/harper/pull/21) improves test security by removing sensitive data from outputs. CodeQL flagged cleartext logging of session IDs and similar values; assertions were updated to use generic error messages.

Key changes:

* Removed sensitive data from test assertions
* Replaced specific errors with generic messages
* Reduced code duplication in tests
* Preserved full test coverage

These updates strengthen reliability and security without affecting functionality. Verified through existing test suites and manual review, all tests continue to pass.

For more details, see the [repository](https://github.com/harpertoken/harper) and commits [58f6fea](https://github.com/harpertoken/harper/commit/58f6fea) and [2c41952](https://github.com/harpertoken/harper/commit/2c41952).
