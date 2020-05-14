/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  금융1상품보기: {
    은행별상품보기: ['review/tier1/intro'],
    케이뱅크: [
      'review/tier1/kbank/intro',
      {
        예금: [
          {
            입출금통장: [
              'review/tier1/kbank/deposit/듀얼K입출금통장'
            ],
          },
          {
            정기예금: [
              'review/tier1/kbank/deposit/듀얼K입출금통장'
            ],
          },
          {
            자유적금: [
              'review/tier1/kbank/deposit/듀얼K입출금통장'
            ],
          },
        ],
      },
      {
        대출: [
          'review/tier1/kbank/loan/loan1'
        ],
      },
    ]
  },
};
