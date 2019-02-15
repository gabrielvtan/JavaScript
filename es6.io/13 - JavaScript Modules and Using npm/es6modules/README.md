# Using NPM and Webpack for Modern JS Applications

### Getting Started

```
npm init
npm install 
```

### Notes 
- `package.json` is where the dependencies are store
- `npm install webpack webpack-cli --save-dev` - we use --save-dev because this is just a tool for building it, its not part of the application 
- babel takes your ES6 code and makes its ES5 compatible for all browsers 
- `npm install webpack webpack-cli babel-loader babel-core babel-preset-es2015-native-modules --save-dev` - you may be able to use babel-present-env now that we are in webpack4
- scripts in package.json file is where we add customized cmd line scripts 