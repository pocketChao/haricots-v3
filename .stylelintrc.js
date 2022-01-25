/*
 * @Author: LiuZhichao
 * @Date: 2022-01-25 09:25:34
 * @LastEditors: LiuZhichao
 * @LastEditTime: 2022-01-25 09:49:41
 * @FilePath: /haricots/.stylelintrc.js
 * @Description: 
 * Copyright (c) 2022 by LiuZhichao, All Rights Reserved. 
 */
module.exports = {
    extends: 'stylelint-config-standard',
    rules: {
        'indentation': 2,
        'selector-pseudo-element-no-unknown': [
            true,
            {
                ignorePseudoElements: ['v-deep']
            }
        ],
        'number-leading-zero': 'never',
        'no-descending-specificity': null,
        'font-family-no-missing-generic-family-keyword': null,
        'selector-type-no-unknown': null,
        'at-rule-no-unknown': null,
        'no-duplicate-selectors': null,
        'no-empty-source': null,
        'selector-pseudo-class-no-unknown': [true, {
            ignorePseudoClasses: ['global']
        }]
    }
}