

### gsap js动画库
https://gsap.com/docs/v3/Installation
npm install gsap -S

### animate.css
https://animate.style/

### Changelog tool
changelog init             - Create a new, empty npx changelog.
changelog add -m [message] - Adds a new line to the npx changelog.
changelog release          - Marks the current npx changelog as released.
changelog show             - Show the last npx changelog.
changelog show [version]   - Show the npx changelog of a specific version.
changelog list             - List all versions in the npx changelog.
changelog format           - Reformats the npx changelog in the standard format.

changelog add -m "Bug fix"
changelog add --minor -m "New feature"
changelog add --major -m "Backwards compatibility break"

changelog release
npm version [version] --no-git-tag-version