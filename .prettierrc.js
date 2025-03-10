// This is the configuration file for Prettier, the auto-formatter:
// https://prettier.io/docs/en/configuration.html
module.exports = {
  // Always print trailing commas:
  // https://prettier.io/docs/en/options.html#trailing-commas
  // The default is "es5" - Trailing commas where valid in ES5 (objects, arrays, etc.). However,
  // always having trailing commas is objectively better. The Airbnb style guide agrees:
  // https://github.com/airbnb/javascript#commas--dangling
  // Prettier itself also acknowledges Nik Graf's blog in their official blog:
  // https://prettier.io/blog/2020/03/21/2.0.0.html
  // https://medium.com/@nikgraf/why-you-should-enforce-dangling-commas-for-multiline-statements-d034c98e36f8
  // Prettier will change the default in the future:
  // https://github.com/prettier/prettier/issues/9369
  trailingComma: "all",

  // We want to always use "lf" to be consistent with all platforms.
  endOfLine: "lf",

  // Allow proper formatting of JSONC files:
  // https://github.com/prettier/prettier/issues/5708
  overrides: [
    {
      files: [
        "**/.vscode/*.json",
        "**/tsconfig.json",
        "**/tsconfig.*.json",
        "**/typedoc.json",
      ],
      options: {
        parser: "json5",
        quoteProps: "preserve",
      },
    },
    {
      files: ["**/*.xml"],
      options: {
        printWidth: 1000000,
      },
    },
  ],

  // Allow proper formatting of XML files:
  // https://github.com/prettier/plugin-xml#configuration
  // The default is "struct". However, whitespace cannot be reformatted unless this is set to
  // "ignore".
  xmlWhitespaceSensitivity: "ignore",
};
