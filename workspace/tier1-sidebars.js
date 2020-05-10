/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  금융1상품리뷰: {
    은행별상품리뷰: ['review/tier1/intro'],
    케이뱅크: ['review/tier1/kbank/intro',
      {
        수신: [
          'review/tier1/kbank/deposit/deposit1'
        ],
      },
      {
        여신: [
          'review/tier1/kbank/loan/loan1'
        ],
      },
    ]
  },
};
