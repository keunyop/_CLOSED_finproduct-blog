/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  금융1상품보기: {
    은행별상품보기: ['review/tier1/intro'],
    우리은행: [
      'review/tier1/woori/intro',
      {
        예금: [
          {
            목돈모으기상품: [
              'review/tier1/woori/deposit/우리SUPER주거래정기적금'
            ],
          }
        ],
      }
    ],
    케이뱅크: [
      'review/tier1/kbank/intro',
      {
        예금: [
          {
            입출금통장: [
              'review/tier1/kbank/deposit/듀얼K입출금통장'
            ],
          }
        ]
      }
    ]
  },
};
