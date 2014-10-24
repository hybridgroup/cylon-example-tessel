# Cylon.JS - Tessel Example

This repo provides an example of a [Cylon.JS robot][Cylon] running on the [Tessel][] platform.

[Cylon]: http://cylonjs.com/
[Tessel]: https://tessel.io/

## Running

To run this example, you'll need to plug in your Tessel, and ensure you've got the `tessel` NPM module installed globally.

If you don't already have it, install the module with NPM:

    $ npm install -g tessel

With your tessel connected, you can then run this example on the Tessel:

    $ tessel run script.js

## Note

As of this writing, due to [an incompatability in the Tessel firmware][issue], Cylon.JS will not fully run on the Tessel.

Basic examples will work, but interacting with devices will not until a firmware update is released.

[issue]: https://github.com/tessel/runtime/issues/487
