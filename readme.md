### Commit 05ab3a1 – PR #31

Harper adds a minimal TUI built with `crossterm`, avoiding external libraries.  
The menu supports chats, sessions, history, and exports while retaining full functionality.

**Changes**
- Removed `ratatui` (audit warnings)
- Migrated to `crossterm` for terminal UI
- Manual drawing preserves all features
- Resolved `cargo audit` issues

**Demo:** [Video](https://github.com/user-attachments/assets/4f8655d6-a1fc-4080-9eae-114a1ad04705)  
[Commit 05ab3a1](https://github.com/harpertoken/harper/commit/05ab3a1) · [PR #31](https://github.com/harpertoken/harper/pull/31)
