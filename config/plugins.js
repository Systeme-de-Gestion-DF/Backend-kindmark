2;
3;
4;
5;
6;
7;
8;
9;
10;
module.exports = ({ env }) => ({
  //...
  "import-export-entries": {
    enabled: true,
    config: {},
    transformer: {
      enabled: true,
      config: {
        responseTransforms: {
          removeAttributesKey: true,
          removeDataKey: true,
        },
        requestTransforms: {
          wrapBodyWithDataKey: true,
        },
      },
    },
  },
  //...
});
