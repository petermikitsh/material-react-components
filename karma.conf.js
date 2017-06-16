const sourcemaps = !process.env.SOURCEMAPS === 'false';
const webpack = require('webpack');

function getPreprocessors() {
  const preprocessors = ['webpack'];
  if (sourcemaps) {
    preprocessors.push('sourcemap');
  }
  return {
    'test/test_index.js': preprocessors
  };
}

function getBrowserStackConfig() {
  const username = process.env.BROWSER_STACK_USERNAME;
  const accessKey = process.env.BROWSER_STACK_ACCESS_KEY;
  if (!username && !accessKey) {
    return {};
  }

  const customLaunchers = {
    bs_firefox_mac: {
      base: 'BrowserStack',
      browser: 'firefox',
      browser_version: '30',
      os: 'OS X',
      os_version: 'Yosemite'
    },
    bs_chrome_mac: {
      base: 'BrowserStack',
      browser: 'chrome',
      browser_version: '30',
      os: 'OS X',
      os_version: 'Yosemite'
    },
    bs_safari_mac: {
      base: 'BrowserStack',
      browser: 'safari',
      browser_version: '8',
      os: 'OS X',
      os_version: 'Yosemite'
    },
    bs_windows_ie: {
      base: 'BrowserStack',
      browser: 'ie',
      browser_version: '11',
      os: 'Windows',
      os_version: '8.1'
    },
    bs_iphone_5s: {
      base: 'BrowserStack',
      device: 'iPhone 6',
      os: 'ios',
      os_version: '8.3',
      browser_version: null,
      browser: 'Mobile Safari'
    }
  };

  return {
    browserStack: {
      username,
      accessKey
    },
    customLaunchers,
    browsers: Object.keys(customLaunchers)
  };
}

module.exports = function (config) {
  const initialConfig = {
    browserConsoleLogOptions: {
      level: 'log'
    },
    browsers: [
      'PhantomJSWithArgs'
    ],
    browserNoActivityTimeout: 3e5,
    browserDisconnectTimeout: 3e5,
    browserDisconnectTolerance: 3,
    captureTimeout: 120000,
    coverageReporter: {
      dir: '.coverage/',
      reporters: [
        {
          type: 'lcov',
          subdir: '.'
        }
      ]
    },
    customContextFile: sourcemaps ? null : 'test/context.html',
    customLaunchers: {
      PhantomJSWithArgs: {
        base: 'PhantomJS',
        options: {
          viewportSize: {
            width: 1024,
            height: 768
          }
        }
      }
    },
    files: [
      './node_modules/phantomjs-polyfill-object-assign/object-assign-polyfill.js',
      'test/test_index.js'
    ],
    frameworks: [
      'mocha'
    ],
    preprocessors: getPreprocessors(),
    reporters: [
      'mocha',
      'coverage',
      'coveralls'
    ],
    singleRun: true,
    webpack: {
      devtool: 'cheap-module-inline-source-map',
      externals: {
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window',
        'react/addons': true
      },
      module: {
        exprContextCritical: false,
        rules: [
          // Run regular source code through babel
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                plugins: [
                  'empower-assert',
                  [
                    'espower', {
                      embedAst: true
                    }
                  ],
                  [
                    'istanbul', {
                      exclude: [
                        '**/index.js',
                        '**/*.spec.js',
                        'test/test_index.js'
                      ]
                    }
                  ]
                ],
                presets: [
                  [
                    'es2015',
                    {
                      modules: false
                    }
                  ]
                ]
              }
            }
          },
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader?modules&localIdentName=[name].[local]',
              'postcss-loader'
            ]
          },
          {
            test: /\.svg$/,
            use: [
              'babel-loader',
              'react-svg-loader'
            ]
          }
        ]
      },
      plugins: [
        new webpack.DefinePlugin({
          __TEST__: true
        })
      ]
    },
    webpackServer: {
      noInfo: true
    }
  };

  config.set(Object.assign({}, initialConfig, getBrowserStackConfig()));
};
